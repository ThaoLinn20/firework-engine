import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as THREE from 'three';
import { CometEntity } from '../../src/entities/CometEntity.js';
import { CometSystem } from '../../src/systems/CometSystem.js';
import { SmokeSystem } from '../../src/systems/SmokeSystem.js';
import { FIREWORK_CONFIG } from '../../src/config/fireworks.js';

describe('Comet Trajectory Ribbon Smoke with Burst Smoke Modifier', () => {
  let mockScene;
  let mockTrailSystem;

  beforeEach(() => {
    mockScene = {
      add: vi.fn(),
      remove: vi.fn()
    };
    mockTrailSystem = {
      spawnTrailParticle: vi.fn(),
      spawnMicroCrackle: vi.fn(),
      spawnEffectSpark: vi.fn()
    };
  });

  it('should not spawn trajectory smoke by default when burst-smoke is not specified', () => {
    const comet = new CometEntity({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 60, 0),
      color: new THREE.Color(0xff4500),
      preset: { shellType: 'comet_single' }
    });

    expect(comet.hasBurstSmoke).toBe(false);
    expect(comet.trajectorySmokeCount).toBe(0);

    const mockSmokeSystem = { spawnPuff: vi.fn() };
    comet.setSmokeSystem(mockSmokeSystem);

    // Simulate flight
    for (let i = 0; i < 50; i++) {
      comet.update(0.033);
    }

    expect(comet.trajectorySmokeCount).toBe(0);
    expect(mockSmokeSystem.spawnPuff).not.toHaveBeenCalled();
  });

  it('should detect burst-smoke from preset properties or effects array', () => {
    const cometWithFlag = new CometEntity({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 60, 0),
      color: new THREE.Color(0xffffff),
      preset: { 'burst-smoke': true }
    });
    expect(cometWithFlag.hasBurstSmoke).toBe(true);

    const cometWithCamelCase = new CometEntity({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 60, 0),
      color: new THREE.Color(0xffffff),
      preset: { burstSmoke: true }
    });
    expect(cometWithCamelCase.hasBurstSmoke).toBe(true);

    const cometWithEffectsArray = new CometEntity({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 60, 0),
      color: new THREE.Color(0xffffff),
      preset: { effects: ['burst-smoke'] }
    });
    expect(cometWithEffectsArray.hasBurstSmoke).toBe(true);

    const cometWithObjectEffects = new CometEntity({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 60, 0),
      color: new THREE.Color(0xffffff),
      preset: { effects: [{ type: 'burst-smoke' }] }
    });
    expect(cometWithObjectEffects.hasBurstSmoke).toBe(true);
  });

  it('should spawn trajectory smoke puffs within 10-15 budget along flight path', () => {
    const comet = new CometEntity({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 60, 0),
      color: new THREE.Color(0x00bfff),
      preset: { 'burst-smoke': true }
    });

    const spawnedPuffs = [];
    const mockSmokeSystem = {
      spawnPuff: vi.fn((pos, vel, opts) => {
        spawnedPuffs.push({
          position: pos.clone(),
          velocity: vel.clone(),
          options: { ...opts }
        });
      })
    };
    comet.setSmokeSystem(mockSmokeSystem);

    // Simulate flight through entire ascent until apex
    for (let i = 0; i < 100; i++) {
      comet.update(0.033);
    }

    expect(comet.trajectorySmokeCount).toBeGreaterThanOrEqual(10);
    expect(comet.trajectorySmokeCount).toBeLessThanOrEqual(15);
    expect(spawnedPuffs.length).toBe(comet.trajectorySmokeCount);

    // Verify distance between consecutive smoke puffs is spaced out along ascent
    for (let i = 1; i < spawnedPuffs.length; i++) {
      const prev = spawnedPuffs[i - 1].position;
      const curr = spawnedPuffs[i].position;
      expect(curr.y).toBeGreaterThan(prev.y);
      expect(curr.distanceTo(prev)).toBeGreaterThanOrEqual(3.5);
    }

    // Verify smoke configuration parameters
    const firstPuff = spawnedPuffs[0];
    expect(firstPuff.options.isNucleus).toBe(true);
    expect(firstPuff.options.isHazePromoter).toBe(true);
    expect(firstPuff.options.nucleusBoost).toBe(3.8);
    expect(firstPuff.options.driftDelay).toBe(1.2);
    expect(firstPuff.options.scale).toBe(2.4);
    expect(firstPuff.options.opacity).toBe(0.28);
  });

  it('should strictly cap smoke puffs and not exceed maxTrajectorySmoke budget even on long flight', () => {
    const comet = new CometEntity({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 120, 0),
      color: new THREE.Color(0xffd700),
      preset: { 'burst-smoke': true }
    });

    const mockSmokeSystem = { spawnPuff: vi.fn() };
    comet.setSmokeSystem(mockSmokeSystem);

    // Simulate 300 steps (excessive updates)
    for (let i = 0; i < 300; i++) {
      comet.update(0.033);
    }

    expect(comet.trajectorySmokeCount).toBeLessThanOrEqual(12);
    expect(mockSmokeSystem.spawnPuff).toHaveBeenCalledTimes(comet.trajectorySmokeCount);
  });

  it('SmokeSystem preserves puff in trajectory position during driftDelay and applies wind thereafter', () => {
    const mockSceneInstance = new THREE.Scene();
    const mockSceneManager = { instance: mockSceneInstance };
    const smokeSystem = new SmokeSystem(mockSceneManager);
    smokeSystem.currentWind.set(5.0, 0, 0); // 5 m/s wind along +X

    const origin = new THREE.Vector3(10, 50, 10);
    const zeroVel = new THREE.Vector3(0, 0, 0);

    smokeSystem.spawnPuff(origin, zeroVel, {
      driftDelay: 1.2,
      life: 8.0,
      scale: 2.4,
      isNucleus: true,
      isHazePromoter: true,
      nucleusBoost: 3.8
    });

    expect(smokeSystem.puffs.length).toBe(1);
    const puff = smokeSystem.puffs[0];
    expect(puff.driftDelay).toBe(1.2);

    // Advance 0.5s (within driftDelay 1.2s)
    smokeSystem.update(0.5);

    // Puff should have stayed near origin X position because windActive is false
    expect(puff.position.x).toBeCloseTo(10.0, 0);

    // Advance beyond driftDelay (e.g. additional 1.5s -> total 2.0s > 1.2s)
    smokeSystem.update(1.5);

    // Now wind has been actively applied, moving the puff in +X direction
    expect(puff.position.x).toBeGreaterThan(10.5);
  });
});
