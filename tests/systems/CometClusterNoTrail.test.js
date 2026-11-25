import {
  describe,
  it,
  expect,
  vi
} from 'vitest';
import * as THREE from 'three';
import { ShellPresetFactory } from '../../src/factories/ShellPresetFactory.js';
import { CometSystem } from '../../src/systems/CometSystem.js';
import { CometEntity } from '../../src/entities/CometEntity.js';

describe('Comet Cluster No-Trail Expanding Cone', () => {
  it('configures comet_cluster_notrail with 26-32 stars and compact head scale', () => {
    const factory = new ShellPresetFactory();
    const preset = factory.createPresetByKey('comet_cluster_notrail', 1);

    expect(preset.shellType).toBe('comet_cluster_notrail');
    expect(preset.noTrail).toBe(false);
    expect(preset.effects).toEqual([]);
    expect(preset.launchTrail).toBe(false);
    expect(preset.clusterCount).toBeGreaterThanOrEqual(26);
    expect(preset.clusterCount).toBeLessThanOrEqual(32);
    expect(preset.noTrailHeadScale).toBeCloseTo(0.55, 2);
  });

  it('launches stars in a 3D expanding cone with wide radial dispersion and volumetric height spread', () => {
    const scene = new THREE.Scene();
    const mockTrailSystem = {
      spawnTrailParticle: vi.fn(),
      spawnEffectSpark: vi.fn()
    };
    const cometSystem = new CometSystem(scene, mockTrailSystem);
    const factory = new ShellPresetFactory();
    const preset = factory.createPresetByKey('comet_cluster_notrail', 1);

    cometSystem.launchRandom(
      preset,
      {
        ratioX: 0.5,
        ratioY: 0.7,
        ratioZ: 0.5,
        color: 0xff3388,
        angleOffset: 0
      }
    );

    const stars = cometSystem.activeComets;
    expect(stars.length).toBe(preset.clusterCount);

    let maxHorizontalSpeed = 0;
    let minVy = Infinity;
    let maxVy = -Infinity;

    for (const star of stars) {
      const horiz = Math.hypot(star.velocity.x, star.velocity.z);
      if (horiz > maxHorizontalSpeed) {
        maxHorizontalSpeed = horiz;
      }
      if (star.velocity.y < minVy) minVy = star.velocity.y;
      if (star.velocity.y > maxVy) maxVy = star.velocity.y;
    }

    // Cone should expand far wider than the old +/- 2.5 m/s clump
    expect(maxHorizontalSpeed).toBeGreaterThan(8.0);
    // Volumetric height staggering (not a flat disk)
    expect((maxVy - minVy) / maxVy).toBeGreaterThan(0.10);
  });

  it('renders crisp compact star heads with AdditiveBlending and calibrated HDR intensity', () => {
    const entity = new CometEntity({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 60, 0),
      color: new THREE.Color(0xff3388),
      preset: {
        shellType: 'comet_cluster_notrail',
        noTrail: true,
        noTrailHeadScale: 0.55
      }
    });

    expect(entity.coreMesh).toBeTruthy();
    expect(entity.coreMesh.frustumCulled).toBe(false);
    expect(entity.coreMesh.material.blending).toBe(THREE.AdditiveBlending);
    expect(entity.coreMesh.material.sizeAttenuation).toBe(false);
    expect(entity.coreMesh.material.size).toBeGreaterThanOrEqual(16);
    expect(entity.coreMesh.material.size).toBeLessThanOrEqual(22);

    const colorAttr = entity.coreMesh.geometry.getAttribute('color');
    expect(colorAttr.array[0]).toBeGreaterThan(2.0);
    expect(colorAttr.array[0]).toBeLessThanOrEqual(2.5);
  });

  it('spawns comet_cluster_notrail stars directly into FireworkSystem.burstParticles when fireworkSystem is attached', () => {
    const scene = new THREE.Scene();
    const mockTrailSystem = {
      spawnTrailParticle: vi.fn(),
      spawnEffectSpark: vi.fn()
    };
    const cometSystem = new CometSystem(scene, mockTrailSystem);
    const mockFireworkSystem = { burstParticles: [] };
    cometSystem.fireworkSystem = mockFireworkSystem;

    const factory = new ShellPresetFactory();
    const preset = factory.createPresetByKey('comet_cluster_notrail', 1);

    cometSystem.launchRandom(
      preset,
      {
        ratioX: 0.5,
        ratioY: 0.7,
        ratioZ: 0.5,
        color: 0xff3388,
        angleOffset: 0
      }
    );

    expect(mockFireworkSystem.burstParticles.length).toBe(preset.clusterCount);
    expect(cometSystem.activeComets.length).toBe(0);
    const first = mockFireworkSystem.burstParticles[0];
    expect(first.hasNoTrail).toBe(false);
    expect(first.effectState?.effectType).toBe('crysanthemum-trail');
    expect(first.dragCoefficient).toBeCloseTo(0.22, 2);
    expect(first.gravityScale).toBeCloseTo(0.92, 2);
  });

  it('supports timed no-trail active effect window on comet_cluster_notrail stars', () => {
    const scene = new THREE.Scene();
    const mockTrailSystem = {
      spawnTrailParticle: vi.fn(),
      spawnEffectSpark: vi.fn()
    };
    const cometSystem = new CometSystem(scene, mockTrailSystem);
    const mockFireworkSystem = { burstParticles: [] };
    cometSystem.fireworkSystem = mockFireworkSystem;

    const factory = new ShellPresetFactory();
    const preset = factory.createPresetByKey('comet_cluster_notrail', 1);

    cometSystem.launchRandom(
      preset,
      {
        ratioX: 0.5,
        ratioY: 0.7,
        ratioZ: 0.5,
        color: 0xff3388,
        angleOffset: 0,
        effectOverrides: {
          effects: [
            { type: 'no-trail', startRatio: 0.2, endRatio: 0.6 }
          ]
        }
      }
    );

    const first = mockFireworkSystem.burstParticles[0];
    expect(first.hasNoTrail).toBe(true);
    expect(first.effectWindows?.['no-trail']?.length).toBeGreaterThan(0);
    expect(first.noTrailStart).toBeCloseTo(first.maxLife * 0.2, 2);
    expect(first.noTrailEnd).toBeCloseTo(first.maxLife * 0.6, 2);
  });

  it('forwards triggered and active effects to comet_cluster_notrail burst stars', () => {
    const scene = new THREE.Scene();
    const mockTrailSystem = {
      spawnTrailParticle: vi.fn(),
      spawnEffectSpark: vi.fn()
    };
    const cometSystem = new CometSystem(scene, mockTrailSystem);
    const mockFireworkSystem = { burstParticles: [] };
    cometSystem.fireworkSystem = mockFireworkSystem;

    const factory = new ShellPresetFactory();
    const preset = factory.createPresetByKey('comet_cluster_notrail', 1);

    cometSystem.launchRandom(
      preset,
      {
        ratioX: 0.5,
        ratioY: 0.7,
        ratioZ: 0.5,
        color: 0x00e5ff,
        angleOffset: 0,
        effectOverrides: {
          crossette: true,
          crackle: true,
          starLifeMultiplier: 1.5,
          secondBurstEnabled: true,
          secondBurst: {
            enabled: true,
            childShells: [
              {
                ratio: 0.5,
                triggerTiming: 0.55,
                preset: 'sphere',
                color: '#ffd700'
              }
            ]
          },
          effects: [
            { type: 'strobe', startRatio: 0.1, endRatio: 0.6 },
            { type: 'dark_phase', startRatio: 0.2, endRatio: 0.4 },
            { type: 'terminal_flare', startRatio: 0.75, endRatio: 1.0 },
            { type: 'cascade_wave', startRatio: 0.0, endRatio: 1.0 },
            { type: 'smoke_trail', startRatio: 0.0, endRatio: 0.6 }
          ]
        }
      }
    );

    const stars = mockFireworkSystem.burstParticles;
    expect(stars.length).toBe(preset.clusterCount);
    const first = stars[0];
    expect(first.hasNoTrail).toBe(false);
    expect(first.isCrossette).toBe(true);
    expect(first.crackle).toBe(true);
    expect(first.hasTerminalFlare).toBe(true);
    expect(first.hasCascadeWave).toBe(true);
    expect(first.hasSmokeTrail).toBe(true);
    expect(first.effectWindows?.strobe?.length).toBeGreaterThan(0);
    expect(first.effectWindows.strobe[0].startRatio).toBeCloseTo(0.1, 2);
    expect(first.effectWindows.strobe[0].endRatio).toBeCloseTo(0.6, 2);
    expect(first.strobeStart).toBeCloseTo(first.maxLife * 0.1, 2);
    expect(first.strobeEnd).toBeCloseTo(first.maxLife * 0.6, 2);
    expect(first.effectWindows?.dark_phase?.length).toBeGreaterThan(0);
    expect(first.darkPhaseStart).toBeCloseTo(first.maxLife * 0.2, 2);
    expect(first.darkPhaseEnd).toBeCloseTo(first.maxLife * 0.4, 2);
    expect(stars.some((s) => s.isSecondBurst && s.secondBurstConfig)).toBe(true);
    expect(new Set(stars.map((s) => s.shellId)).size).toBe(1);
    expect(stars[stars.length - 1].phaseDelay).toBeGreaterThan(stars[0].phaseDelay);
  });

  it('applies shellSize, particleCountMultiplier, starLifeMultiplier, cometTrail, and secondBurst across CometEntity and comet_cluster_notrail', () => {
    const scene = new THREE.Scene();
    const mockTrailSystem = {
      spawnTrailParticle: vi.fn(),
      spawnEffectSpark: vi.fn()
    };
    const cometSystem = new CometSystem(scene, mockTrailSystem);
    const mockFireworkSystem = {
      burstParticles: [],
      spawnSecondBurst: vi.fn()
    };
    cometSystem.fireworkSystem = mockFireworkSystem;

    // 1. Test comet_cluster_notrail with particleCountMultiplier=0.5, shellSize=2.0, cometTrail='none'
    const factory = new ShellPresetFactory();
    const clusterPreset = factory.createPresetByKey('comet_cluster_notrail', 1);
    cometSystem.launchRandom(clusterPreset, {
      ratioX: 0.5,
      ratioY: 0.6,
      ratioZ: 0.5,
      color: 0xffaa00,
      effectOverrides: {
        shellSize: 2.0,
        particleCountMultiplier: 0.5,
        starLifeMultiplier: 0.1,
        cometTrail: 'none'
      }
    });
    expect(mockFireworkSystem.burstParticles.length).toBe(Math.round(clusterPreset.clusterCount * 0.5));
    const star = mockFireworkSystem.burstParticles[0];
    expect(star.hasNoTrail).toBe(true);
    expect(star.renderSize).toBeCloseTo(36, 1);
    expect(star.trailDensityScale).toBeCloseTo(0.5, 2);

    // 2. Test CometEntity (comet_cluster_cc) with un-clamped starLifeMultiplier=0.1, shellSize=2.5, secondBurst
    cometSystem.launchRandom('comet_cluster_cc', {
      ratioX: 0.5,
      ratioY: 0.7,
      ratioZ: 0.5,
      color: 0x00ffff,
      effectOverrides: {
        shellSize: 2.5,
        particleCountMultiplier: 0.5,
        starLifeMultiplier: 0.1,
        secondBurstEnabled: true,
        secondBurst: {
          enabled: true,
          childShells: [{ ratio: 1.0, triggerTiming: 0.2, preset: 'sphere', color: '#ffffff' }]
        }
      }
    });
    expect(cometSystem.activeComets.length).toBeGreaterThanOrEqual(1);
    const comet = cometSystem.activeComets[0];
    expect(comet.shellSize).toBeCloseTo(2.5, 2);
    expect(comet.particleCountMultiplier).toBeCloseTo(0.5, 2);
    expect(comet.starLifeMultiplier).toBeCloseTo(0.1, 2);
    expect(comet.isSecondBurst).toBe(true);

    // Advance past secondBurstTime to verify CometEntity triggers spawnSecondBurst
    cometSystem.update(comet.secondBurstTime + 0.05);
    expect(mockFireworkSystem.spawnSecondBurst).toHaveBeenCalled();
  });
});
