# @shell-drone/firework-engine

Standalone core firework physics, mathematics, shaders, and rendering engine for Three.js.

## Overview
This package is the Single Source of Truth for pyrotechnic simulation, shapes, kinematics, presets, and WebGL shaders shared between:
- Firework & Drone Show Studio (`shell-drone-animation`)
- TikTok Live Interactive Fireworks (`shell-drone-live`)
- Standalone Player runtimes

## Features
- Pure Mathematical Shape Generators (t = 0 Fibonacci sphere, rings, hearts, stars, text-words, etc.)
- Closed-form Analytical Physics Kinematics (t > 0 exponential velocity drag damping)
- GPU Circular Ring-Buffer VBO Trail & Smoke Simulation
- Procedural & Template Composition Architecture
- Zero-Allocation CPU Particle Pool
- Dual ESM / CJS output bundle

## Installation
```bash
npm install @shell-drone/firework-engine
```

## Build & Test
```bash
npm run build
npm test
```
