import { describe, it, expect, vi } from 'vitest';
import * as THREE from 'three';
import { FireworkSystem } from '../../src/systems/FireworkSystem.js';

describe('MultiNested Instant Burst (launch = none)', () => {
  it('should trigger multiNestedBurst and instantiate stage shapes when instantBurst is true', () => {
    const scene = new THREE.Scene();
    const trailSystem = {
      addLaunchParticle: vi.fn(),
      addBurstParticle: vi.fn(),
      update: vi.fn()
    };
    const smokeSystem = {
      emitLaunchSmoke: vi.fn(),
      emitBurstSmoke: vi.fn(),
      update: vi.fn()
    };

    const fireworkSystem = new FireworkSystem(scene, trailSystem, smokeSystem);
    const triggerMultiSpy = vi.spyOn(fireworkSystem, 'triggerMultiNestedBurst');
    const createBurstSpy = vi.spyOn(fireworkSystem, 'createBurst');

    const multiNestedPreset = {
      shellType: 'multi_nested',
      preset: 'multi_nested',
      multiNested: true,
      instantBurst: true, // Simulates launch = none / cometTrail = 'none'
      stages: [
        {
          shapeType: 'heart',
          dynamicsType: 'standard',
          scale: 1.0,
          delay: 0,
          color: '#ff0055'
        },
        {
          shapeType: 'star',
          dynamicsType: 'flow',
          scale: 0.8,
          delay: 0,
          color: '#ffd700'
        }
      ]
    };

    fireworkSystem.launchRandom(multiNestedPreset);

    // triggerMultiNestedBurst should be invoked for instant burst
    expect(triggerMultiSpy).toHaveBeenCalledTimes(1);

    // createBurst should be called for each stage with the stage's specific shapeType
    const createdShapes = createBurstSpy.mock.calls.map((call) => call[2]);
    expect(createdShapes).toContain('heart');
    expect(createdShapes).toContain('star');
    expect(createdShapes).not.toContain('willow');
  });

  it('should propagate stage-specific starLifeMultiplier into stagePreset', () => {
    const scene = new THREE.Scene();
    const trailSystem = { addLaunchParticle: vi.fn(), addBurstParticle: vi.fn(), update: vi.fn() };
    const smokeSystem = { emitLaunchSmoke: vi.fn(), emitBurstSmoke: vi.fn(), update: vi.fn() };

    const fireworkSystem = new FireworkSystem(scene, trailSystem, smokeSystem);
    const createBurstSpy = vi.spyOn(fireworkSystem, 'createBurst');

    const multiNestedPreset = {
      shellType: 'multi_nested',
      preset: 'multi_nested',
      multiNested: true,
      instantBurst: true,
      stages: [
        {
          shapeType: 'sphere',
          dynamicsType: 'standard',
          scale: 1.0,
          delay: 0,
          color: '#ff0055',
          starLifeMultiplier: 0.5
        },
        {
          shapeType: 'sphere',
          dynamicsType: 'willow',
          scale: 0.7,
          delay: 0,
          color: '#ffd700',
          starLifeMultiplier: 2.2
        }
      ]
    };

    fireworkSystem.launchRandom(multiNestedPreset);

    expect(createBurstSpy).toHaveBeenCalledTimes(2);
    const presetsPassed = createBurstSpy.mock.calls.map((call) => call[3]);
    expect(presetsPassed[0].starLifeMultiplier).toBe(0.5);
    expect(presetsPassed[1].starLifeMultiplier).toBe(2.2);
  });
});
