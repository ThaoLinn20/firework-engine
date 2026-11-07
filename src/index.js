// Core Configurations
export { BASE_BURST_PROFILE, FIREWORK_CONFIG } from './config/fireworks.js';
export {
  LAYER_DEFAULT,
  LAYER_REFLECTION,
  LAYER_WATER
} from './config/layers.js';
export { LAUNCH_ZONE_CONFIG } from './config/launchZone.js';
export { renderingConfig } from './config/rendering.js';

// Core Event Bus & Environment
export { EventBus, globalEventBus } from './core/EventBus.js';
export {
  AtmosphereManager,
  atmosphereManager
} from './environment/AtmosphereManager.js';

// Composition & Factories
export { BurstShapeGenerator } from './factories/BurstShapeGenerator.js';
export { BurstEffectProcessor } from './factories/BurstEffectProcessor.js';
export { BurstParticleFactory } from './factories/BurstParticleFactory.js';
export {
  AVAILABLE_SHAPES,
  AVAILABLE_DYNAMICS,
  AVAILABLE_MODIFIERS,
  TIMED_EFFECT_TAGS,
  TOGGLE_MODIFIER_TAGS,
  AVAILABLE_EFFECT_TAGS,
  PRESET_TEMPLATES,
  getTemplateForPreset,
  resolveFireworkComposition,
  AVAILABLE_CHILD_PRESETS,
  DEFAULT_SECOND_BURST_CHILD_CONFIG,
  DEFAULT_SECOND_BURST_CONFIG,
  resolveSecondBurstConfig
} from './factories/FireworkCompositionHelper.js';
export { ShellPresetFactory } from './factories/ShellPresetFactory.js';
export {
  TEXT_GLYPHS,
  TextGlyphAtlas,
  layoutWord,
  splitCommentIntoWords,
  sanitizeText
} from './factories/TextGlyphAtlas.js';
export {
  ProceduralShellGenerator,
  proceduralShellGenerator,
  COLOR_PALETTES,
  TIER_BUDGETS
} from './factories/ProceduralShellGenerator.js';

// Entities
export { ShellEntity } from './entities/ShellEntity.js';
export { CometEntity } from './entities/CometEntity.js';

// Systems & Renderers
export { FireworkSystem } from './systems/FireworkSystem.js';
export { TrailSystem } from './systems/TrailSystem.js';
export { CometSystem } from './systems/CometSystem.js';
export { SmokeSystem } from './systems/SmokeSystem.js';
export { SkyLightReactionSystem } from './systems/SkyLightReactionSystem.js';
export { InstancedShellRenderer } from './render/InstancedShellRenderer.js';
export { InstancedCometRenderer } from './render/InstancedCometRenderer.js';

export { ShowEventDispatcher } from './directors/ShowEventDispatcher.js';
export * from './config/effectPreviews.js';
