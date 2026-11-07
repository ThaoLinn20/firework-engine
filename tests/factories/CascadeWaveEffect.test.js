import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { BurstParticleFactory } from '../../src/factories/BurstParticleFactory.js';
import { BurstEffectProcessor } from '../../src/factories/BurstEffectProcessor.js';
import { FireworkSystem } from '../../src/systems/FireworkSystem.js';
import { ShowEventDispatcher } from '../../src/directors/ShowEventDispatcher.js';

describe('Cascade Wave Spatial-Temporal Sequence Modifier', () => {
  it('should detect hasCascadeWave from effects array or preset flags', () => {
    const fromEffects = BurstParticleFactory.resolveActiveEffectFlags({
      effects: ['cascade-wave']
    });
    expect(fromEffects.hasCascadeWave).toBe(true);

    const fromObject = BurstParticleFactory.resolveActiveEffectFlags({
      effects: [{ type: 'cascade-wave' }]
    });
    expect(fromObject.hasCascadeWave).toBe(true);

    const fromPreset = BurstParticleFactory.resolveActiveEffectFlags({
      preset: { cascadeWave: true }
    });
    expect(fromPreset.hasCascadeWave).toBe(true);

    const none = BurstParticleFactory.resolveActiveEffectFlags({
      effects: ['strobe']
    });
    expect(none.hasCascadeWave).toBe(false);
  });

  it('should shift all effect windows and scalar timings by phaseDelay in BurstParticleFactory', () => {
    const effects = [
      {
        type: 'strobe',
        start: 0.5,
        end: 1.5
      },
      {
        type: 'crackle',
        start: 0.8,
        end: 1.8
      },
      {
        type: 'dark_phase',
        start: 0.2,
        end: 0.7
      }
    ];

    const baseParticle = BurstParticleFactory.createParticle({
      effects,
      maxLife: 2.0,
      phaseDelay: 0.0
    });

    const shiftedParticle = BurstParticleFactory.createParticle({
      effects,
      maxLife: 2.0,
      phaseDelay: 0.45
    });

    expect(shiftedParticle.phaseDelay).toBe(0.45);
    expect(shiftedParticle.hasCascadeWave).toBe(true);

    expect(shiftedParticle.strobeStart).toBeCloseTo(0.5 + 0.45, 3);
    expect(shiftedParticle.strobeEnd).toBeCloseTo(1.5 + 0.45, 3);

    expect(shiftedParticle.crackleStart).toBeCloseTo(0.8 + 0.45, 3);
    expect(shiftedParticle.crackleEnd).toBeCloseTo(1.8 + 0.45, 3);

    expect(shiftedParticle.darkPhaseStart).toBeCloseTo(0.2 + 0.45, 3);
    expect(shiftedParticle.darkPhaseEnd).toBeCloseTo(0.7 + 0.45, 3);

    expect(shiftedParticle.effectWindows.strobe[0].start).toBeCloseTo(0.5 + 0.45, 3);
    expect(shiftedParticle.effectWindows.strobe[0].end).toBeCloseTo(1.5 + 0.45, 3);
  });

  it('should trigger active effect at sequentially staggered times across particles', () => {
    const effects = [
      {
        type: 'strobe',
        start: 0.5,
        end: 1.0
      }
    ];

    const pLead = BurstParticleFactory.createParticle({
      effects,
      maxLife: 2.0,
      phaseDelay: 0.0
    });

    const pLag = BurstParticleFactory.createParticle({
      effects,
      maxLife: 2.0,
      phaseDelay: 0.4
    });

    pLead.age = 0.6;
    pLag.age = 0.6;
    expect(BurstEffectProcessor.isEffectActive(pLead, 'strobe')).toBe(true);
    expect(BurstEffectProcessor.isEffectActive(pLag, 'strobe')).toBe(false);

    pLead.age = 1.1;
    pLag.age = 1.1;
    expect(BurstEffectProcessor.isEffectActive(pLead, 'strobe')).toBe(false);
    expect(BurstEffectProcessor.isEffectActive(pLag, 'strobe')).toBe(true);

    pLead.age = 1.6;
    pLag.age = 1.6;
    expect(BurstEffectProcessor.isEffectActive(pLead, 'strobe')).toBe(false);
    expect(BurstEffectProcessor.isEffectActive(pLag, 'strobe')).toBe(false);
  });

  it('should spawn burst particles with sequential phase delays in FireworkSystem simulation', () => {
    const scene = new THREE.Scene();
    const fireworkSystem = new FireworkSystem(scene);

    const burstPosition = new THREE.Vector3(0, 50, 0);
    const color = new THREE.Color(0xff0000);

    const preset = {
      shape: 'sphere',
      particleCount: 50,
      cascadeWave: true,
      cascadeDuration: 0.8,
      cascadeMode: 'sequential'
    };

    fireworkSystem.createBurst(
      burstPosition,
      color,
      preset.shape,
      preset,
      1
    );

    const spawned = fireworkSystem.burstParticles;
    expect(spawned.length).toBeGreaterThanOrEqual(40);

    const minPhaseDelay = Math.min(...spawned.map((p) => p.phaseDelay));
    const maxPhaseDelay = Math.max(...spawned.map((p) => p.phaseDelay));

    expect(minPhaseDelay).toBeCloseTo(0.0, 2);
    expect(maxPhaseDelay).toBeCloseTo(0.8, 2);

    const sortedByPhase = [...spawned].sort((a, b) => a.phaseDelay - b.phaseDelay);
    const firstBatchAvg = sortedByPhase.slice(0, 10).reduce((sum, p) => sum + p.maxLife, 0) / 10;
    const lastBatchAvg = sortedByPhase.slice(-10).reduce((sum, p) => sum + p.maxLife, 0) / 10;
    expect(lastBatchAvg).toBeGreaterThan(firstBatchAvg + 0.5);

    fireworkSystem.destroy();
  });

  it('should extinguish particles sequentially rather than all at once in FireworkSystem update loop', () => {
    const scene = new THREE.Scene();
    const fireworkSystem = new FireworkSystem(scene);

    const burstPosition = new THREE.Vector3(0, 50, 0);
    const color = new THREE.Color(0x00ff00);

    const preset = {
      shape: 'ring',
      particleCount: 40,
      cascadeWave: true,
      cascadeDuration: 1.0,
      cascadeMode: 'clockwise'
    };

    fireworkSystem.createBurst(
      burstPosition,
      color,
      preset.shape,
      preset,
      2
    );

    const totalSpawned = fireworkSystem.burstParticles.length;
    expect(totalSpawned).toBeGreaterThan(0);

    const baseMinLife = Math.min(...fireworkSystem.burstParticles.map((p) => p.maxLife));
    const baseMaxLife = Math.max(...fireworkSystem.burstParticles.map((p) => p.maxLife));

    expect(baseMaxLife - baseMinLife).toBeGreaterThanOrEqual(0.8);

    fireworkSystem.update(baseMinLife + 0.1);
    const survivingAfterEarlyWave = fireworkSystem.burstParticles.length;
    expect(survivingAfterEarlyWave).toBeLessThan(totalSpawned);
    expect(survivingAfterEarlyWave).toBeGreaterThan(0);

    fireworkSystem.update((baseMaxLife - baseMinLife) + 0.2);
    expect(fireworkSystem.burstParticles.length).toBe(0);

    fireworkSystem.destroy();
  });

  it('should support directional propagation modes: clockwise, top-down, and radial-outward', () => {
    const scene = new THREE.Scene();
    const fireworkSystem = new FireworkSystem(scene);

    const color = new THREE.Color(0x0000ff);
    const pos = new THREE.Vector3(0, 30, 0);

    const topDownPreset = {
      shape: 'sphere',
      particleCount: 30,
      cascadeWave: true,
      cascadeDuration: 0.6,
      cascadeMode: 'top-down'
    };

    fireworkSystem.createBurst(
      pos,
      color,
      topDownPreset.shape,
      topDownPreset,
      3
    );

    const topDownParticles = [...fireworkSystem.burstParticles];
    const topParticle = topDownParticles.reduce((prev, curr) => (curr.velocity.y > prev.velocity.y ? curr : prev));
    const bottomParticle = topDownParticles.reduce((prev, curr) => (curr.velocity.y < prev.velocity.y ? curr : prev));

    expect(topParticle.phaseDelay).toBeLessThan(bottomParticle.phaseDelay);

    fireworkSystem.destroy();
  });

  it('should propagate cascadeWave and active effect overrides through ShowEventDispatcher', () => {
    const dispatcher = new ShowEventDispatcher();
    let launchedOverrides = null;
    const mockContext = {
      fireworkSystem: {
        launchRandom: (preset, options) => {
          launchedOverrides = options.effectOverrides;
        }
      }
    };

    dispatcher.dispatch({
      type: 'single',
      preset: 'peony',
      cascadeWave: true,
      cascadeDuration: 0.8,
      cascadeMode: 'clockwise',
      syncStrobe: true,
      darkPhase: true
    }, mockContext);

    expect(launchedOverrides).toBeDefined();
    expect(launchedOverrides.cascadeWave).toBe(true);
    expect(launchedOverrides.cascadeDuration).toBe(0.8);
    expect(launchedOverrides.cascadeMode).toBe('clockwise');
    expect(launchedOverrides.syncStrobe).toBe(true);
    expect(launchedOverrides.darkPhase).toBe(true);
  });

  it('should group particles into quantized parallel latitude rings in parallel-rings mode', () => {
    const scene = new THREE.Scene();
    const fireworkSystem = new FireworkSystem(scene);

    const color = new THREE.Color(0xff0000);
    const pos = new THREE.Vector3(0, 40, 0);

    const parallelRingsPreset = {
      shape: 'sphere',
      particleCount: 80,
      cascadeWave: true,
      cascadeDuration: 1.0,
      cascadeMode: 'parallel-rings',
      cascadeRings: 5
    };

    fireworkSystem.createBurst(
      pos,
      color,
      parallelRingsPreset.shape,
      parallelRingsPreset,
      4
    );

    const particles = [...fireworkSystem.burstParticles];
    const uniquePhaseDelays = new Set(particles.map((p) => Math.round(p.phaseDelay * 1000) / 1000));

    expect(uniquePhaseDelays.size).toBeLessThanOrEqual(5);
    expect(uniquePhaseDelays.size).toBeGreaterThanOrEqual(2);

    fireworkSystem.destroy();
  });
});
