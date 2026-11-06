# Project-Scoped Rules and Coding Conventions for Firework Engine

## Code Formatting and Readability
- **Limit Horizontal Line Length**: Avoid long horizontal lines of code. If a function call, constructor, array, or object has multiple arguments or properties, break them onto separate lines.
- **Single Property Per Line**: For multiline function calls, array declarations, or object literals, place each argument/property on its own line for maximum readability and clean git diffs.
  - *Example*:
    ```javascript
    const gradient = ctx.createRadialGradient(
      size * 0.5,
      size * 0.5,
      size * 0.1,
      size * 0.5,
      size * 0.5,
      size * 0.5
    );
    ```

## General Communication & Output Rules
- **No Icons or Emojis**: Do NOT use any icons or emojis in any generated content, documentation, release notes, commit messages, or general communication. Keep everything strictly professional and text-only.

## Documentation & Markdown Rules
- **Relative Markdown Links**: Always prioritize using relative links (for example, `./src/factories/BurstShapeGenerator.js`) instead of absolute file paths when writing links inside workspace documentation and files.

## Firework & Shell Configurations
- **Read Centralized Configurations**: Whenever a user request relates to configuring firework parameters, particle counts, gravity, multipliers, or special shell presets, you MUST first read and refer to the centralized configuration file at `./src/config/fireworks.js` to ensure configurations remain unified and follow the established parameter schemas.

## Firework Composition Architecture Conventions
- **Composition over Presets**: Fireworks must strictly adhere to the Component-based Composition model:
  - **Shape** (spatial geometry at t = 0): Handled by `BurstShapeGenerator.js`. Must NOT contain particle physics or dynamics logic.
  - **Dynamics** (particle kinematics, drift, drag, drooping at t > 0): Handled by `BurstEffectProcessor.js`. Must NOT hard-code shapes. Note: `willow` is a Dynamics behavior, not a Shape.
  - **Modifiers** (structural modifiers): E.g. `pistil` (inner core burst), `instantBurst` (immediate velocity burst).
  - **Visual Effects** (stackable optical modifiers): E.g. `strobe`, `white-strobe`, `glitter-strobe`, `crackle`, `ghost`.
  - **Presets as Templates**: New presets must be registered as Composition Templates in `FireworkCompositionHelper.js` and `ShellPresetFactory.js`.
- **Centralized Taxonomy**: Whenever adding a new Shape, Dynamics, Modifier, or Visual Effect tag, you MUST register it in `./src/factories/FireworkCompositionHelper.js`.
- **Active Effects Universality**: Any effect tag classified under "Active Effects" (e.g. `strobe`, `crackle`, `ghost`, `crossette`, `tadpole-flurry`, `burst-smoke`) MUST be implemented as a universal modifier capable of running on ANY firework shell type, shape, or particle stream. It must not be tightly coupled or restricted to a single preset, and must seamlessly compose with other active effects (inheriting dynamic colors, fade lifecycle, physics, and companion modifiers).
- **Default No Smoke**: By default when creating new fireworks (presets, burst shells, comets), NEVER automatically add smoke (`burstSmoke = false`, `launchSmoke = false`, `hasBurstSmoke = false`). Smoke should only be added if the user explicitly requests smoke effects.

## Preset & Shell Naming Conventions
- **Lowercase snake_case Format**: All preset keys, shell types, and composition identifiers MUST be written in lowercase `snake_case`.
- **Primary Effect / Category Prefix**: The identifier MUST always start with the primary effect or base category, followed by variants and modifiers:
  `{primary_category}_{variant}_{modifier}`
  - *Examples*:
    - `strobe_dying_embers`, `strobe_white`, `strobe_glitter`
    - `crysanthemum_spiral_v2`, `crysanthemum_smoke`, `crysanthemum_nested`
    - `comet_cluster_detached`, `comet_single_beam`, `comet_cluster_cc`
    - `willow_falling_comets`, `willow_arch`
    - `crossette_ring`, `crossette_matrix`
- **Aliases for Backward Compatibility**: If camelCase or legacy keys exist in codebase, map them as secondary aliases only, with the primary canonical key adhering to the structured `snake_case` prefix rule.

## Code Integrity & Regression Prevention
- **Preserve Existing Features & Subsystems**: When modifying, optimizing, or refactoring code (such as adjusting particle effects, smoke dynamics, or audio triggers), NEVER arbitrarily delete, disable, or comment out existing capabilities, lifecycle events, or subsystem quotas unless the user explicitly commands their removal.
- **Surgical & Scoped Modifications**: Always isolate code edits strictly to the requested behavior. Avoid blanket overrides or broad-brush suppression that accidentally silences adjacent pipelines or shared subsystem mechanisms.
- **Diff Inspection Before Completion**: Always review modified files using git diff to confirm that no unrelated functions, event listeners, or established quotas were inadvertently omitted, commented out, or overwritten.
- **Regression Protection via Tests**: Maintain and run comprehensive test suites via `npm test` (Vitest) to ensure both newly added behavior and pre-existing subsystem capabilities continue to function as intended without silent regressions (100% test pass required).

## Visual Effects & Particle Rendering Constraints
- **Preserve Additive Blending for Emissive Fireworks**: Firework particles represent emissive photons and burning pyrotechnic stars. NEVER switch firework burst or trail particles to `THREE.NormalBlending` or custom opaque blending modes. Opaque blending creates unnatural flat circular discs with dark borders and destroys the authentic firework aesthetic. Always keep `THREE.AdditiveBlending`.
- **Preserve Spatial Structures & Shape Generators**: Never modify particle coordinates, spatial distributions, or geometry algorithms in `src/factories/BurstShapeGenerator.js` when responding to requests regarding particle brightness, glare, or color. Shape structure, particle counts, and dynamics must remain untouched unless the user explicitly requests a geometry change.
- **Handling Overlap Glare & Light Blowout**: When addressing excessive brightness or blinding glare caused by overlapping particles:
  - Do NOT change materials or particle models.
  - Dampen shader fragment accumulation by softening gradient stops in `FireworkSystem.js` and `TrailSystem.js`.
  - Tame extreme HDR brightness multipliers on star meshes while maintaining unit test assertions.

## CPU vs GPU Workload Distribution & Particle Kinematics Architecture
- **Core Principle: Complex Logic on CPU, Massive Repetition on GPU**:
  - **CPU Domain (The Conductor / Orchestrator)**:
    - Launch timing, ballistic apex detection, burst scheduling.
    - Dynamic branching: second-burst splitting (`second_burst`), sub-munitions (`crossette`, `pistil`), sudden deflection (`erratic_dart`).
    - Headless unit testing: CPU zero-allocation particle pool enables assertions in Node.js/Vitest without mock WebGL rendering.
  - **GPU Domain (Massive Parallel Data-Oriented Execution)**:
    - High-volume particle simulations (thousands of trail sparks, falling comets, lingering willow embers).
    - Zero per-frame CPU loop overhead: CPU writes birth attributes once into circular ring-buffer VBO, increments `uniform float uTime`.
- **Closed-Form Analytical Physics Constraint on GPU**:
  - Any kinematic motion moved to GPU vertex shaders MUST implement the exact closed-form analytical solution of the damped velocity differential equation:
    $$\frac{dv_y}{dt} = -k v_y + g_{eff}$$
    $$\Delta x(t) = v_{x0} \frac{1 - e^{-k t}}{k}$$
    $$\Delta z(t) = v_{z0} \frac{1 - e^{-k t}}{k}$$
    $$\Delta y(t) = v_{y0} \frac{1 - e^{-k t}}{k} + \frac{g_{eff}}{k} \left( t - \frac{1 - e^{-k t}}{k} \right)$$
    where $k = 4.0 \cdot dragScale$ and $g_{eff} = 0.5 \cdot GRAVITY \cdot gravityScale$.
  - Preserves pyrotechnic terminal drift velocity ($v_{terminal} \approx -1.87$ m/s) and visual parity between CPU and GPU execution modes.
