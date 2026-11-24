import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import * as THREE from 'three';
import { SmokeSystem } from '../../src/systems/SmokeSystem.js';
import { FIREWORK_CONFIG } from '../../src/config/fireworks.js';

describe('GPU-Driven Dual Pipeline Smoke Simulation', () => {
  let mockScene;
  let mockSceneManager;
  let smokeSystem;

  beforeEach(() => {
    mockScene = new THREE.Scene();
    mockSceneManager = {
      instance: mockScene
    };
    smokeSystem = new SmokeSystem(mockSceneManager, { useGpuSimulation: true });
  });

  afterEach(() => {
    if (smokeSystem) {
      smokeSystem.destroy();
    }
    vi.restoreAllMocks();
  });

  it('should initialize with GPU simulation enabled when specified in options', () => {
    expect(smokeSystem.isGpuSimulationEnabled()).toBe(true);
    expect(smokeSystem.smokeUniforms.uGpuSim.value).toBe(1.0);
    expect(smokeSystem.gpuParticleCount).toBe(0);
    expect(smokeSystem.gpuCursor).toBe(0);
    expect(smokeSystem.maxGpuSmokeParticles).toBeGreaterThanOrEqual(30000);
  });

  it('should write smoke puff kinematics directly to GPU ring-buffer on spawnPuff', () => {
    const origin = new THREE.Vector3(25, 140, -10);
    const velocity = new THREE.Vector3(1.2, 3.5, -0.8);
    const color = new THREE.Color(0x336699);

    smokeSystem.spawnPuff(origin, velocity, {
      category: 'aerial',
      life: 6.5,
      scale: 3.8,
      growth: 2.4,
      drag: 1.2,
      buoyancy: 0.22,
      driftDelay: 0.25,
      opacity: 0.35,
      color: color,
      seed: 0.42
    });

    expect(smokeSystem.gpuParticleCount).toBe(1);
    expect(smokeSystem.gpuCursor).toBe(1);
    expect(smokeSystem.puffs.length).toBe(0); // Zero CPU array allocations

    // Verify GPU positions buffer
    expect(smokeSystem.positionsArray[0]).toBe(25);
    expect(smokeSystem.positionsArray[1]).toBe(140);
    expect(smokeSystem.positionsArray[2]).toBe(-10);

    // Verify GPU velocities buffer
    expect(smokeSystem.velocitiesArray[0]).toBeCloseTo(1.2, 5);
    expect(smokeSystem.velocitiesArray[1]).toBeCloseTo(3.5, 5);
    expect(smokeSystem.velocitiesArray[2]).toBeCloseTo(-0.8, 5);

    // Verify GPU life data buffer: [birthTime, life, driftDelay, seed]
    expect(smokeSystem.lifeDataArray[0]).toBe(0);
    expect(smokeSystem.lifeDataArray[1]).toBeCloseTo(6.5, 5);
    expect(smokeSystem.lifeDataArray[2]).toBeCloseTo(0.25, 5);
    expect(smokeSystem.lifeDataArray[3]).toBeCloseTo(0.42, 5);

    // Verify GPU smoke params buffer: [baseScale, growth, drag, buoyancy]
    expect(smokeSystem.smokeParamsArray[0]).toBeCloseTo(3.8, 5);
    expect(smokeSystem.smokeParamsArray[1]).toBeCloseTo(2.4, 5);
    expect(smokeSystem.smokeParamsArray[2]).toBeCloseTo(1.2, 5);
    expect(smokeSystem.smokeParamsArray[3]).toBeCloseTo(0.22, 5);
  });

  it('should advance simulation time and flush dirty buffer update ranges on update', () => {
    smokeSystem.spawnPuff(
      new THREE.Vector3(0, 80, 0),
      new THREE.Vector3(0, 1, 0)
    );

    expect(smokeSystem.gpuDirtyMin).toBe(0);
    expect(smokeSystem.gpuDirtyMax).toBe(0);

    smokeSystem.update(0.016);

    expect(smokeSystem.currentTime).toBeCloseTo(0.016, 4);
    expect(smokeSystem.smokeUniforms.uTime.value).toBeCloseTo(0.016, 4);
    expect(smokeSystem.gpuDirtyMin).toBe(-1);
    expect(smokeSystem.gpuDirtyMax).toBe(-1);
    expect(smokeSystem.smokeGeometry.drawRange.count).toBe(1);
  });

  it('should wrap cursor cyclically without memory overflow when exceeding buffer capacity', () => {
    const origMax = smokeSystem.maxGpuSmokeParticles;
    smokeSystem.maxGpuSmokeParticles = 8; // Small test capacity

    for (let i = 0; i < 12; i++) {
      smokeSystem.spawnPuff(
        new THREE.Vector3(i, i * 2, 0),
        new THREE.Vector3(0, 1, 0)
      );
    }

    expect(smokeSystem.gpuParticleCount).toBe(8);
    expect(smokeSystem.gpuCursor).toBe(4); // 12 % 8 = 4
    expect(smokeSystem.gpuDirtyWrapped).toBe(true);

    smokeSystem.update(0.016);

    expect(smokeSystem.gpuDirtyMin).toBe(-1);
    expect(smokeSystem.gpuDirtyWrapped).toBe(false);
    expect(smokeSystem.smokeGeometry.drawRange.count).toBe(8);

    smokeSystem.maxGpuSmokeParticles = origMax;
  });

  it('should cleanly reset GPU ring buffer and invalidate life data on clear', () => {
    smokeSystem.spawnPuff(
      new THREE.Vector3(10, 50, 20),
      new THREE.Vector3(0, 2, 0)
    );
    expect(smokeSystem.gpuParticleCount).toBe(1);

    smokeSystem.clear();

    expect(smokeSystem.gpuParticleCount).toBe(0);
    expect(smokeSystem.gpuCursor).toBe(0);
    expect(smokeSystem.lifeDataArray[0]).toBe(-999999.0);
    expect(smokeSystem.smokeGeometry.drawRange.count).toBe(0);
  });

  it('should support switching between GPU simulation and CPU fallback mode', () => {
    expect(smokeSystem.isGpuSimulationEnabled()).toBe(true);

    smokeSystem.setGpuSimulation(false);
    expect(smokeSystem.isGpuSimulationEnabled()).toBe(false);
    expect(smokeSystem.smokeUniforms.uGpuSim.value).toBe(0.0);

    // In CPU mode, puffs are pushed to this.puffs array
    smokeSystem.spawnPuff(
      new THREE.Vector3(0, 100, 0),
      new THREE.Vector3(0, 1, 0),
      { category: 'aerial' }
    );
    expect(smokeSystem.puffs.length).toBe(1);

    smokeSystem.setGpuSimulation(true);
    expect(smokeSystem.isGpuSimulationEnabled()).toBe(true);
    expect(smokeSystem.smokeUniforms.uGpuSim.value).toBe(1.0);
    expect(smokeSystem.puffs.length).toBe(0);
  });

  it('should protect living high-priority launch/burst smoke from being overwritten by low-priority aerial smoke', () => {
    const origMax = smokeSystem.maxGpuSmokeParticles;
    smokeSystem.maxGpuSmokeParticles = 4;
    smokeSystem.clear();

    // Spawn 4 high-priority launch/burst puffs
    for (let i = 0; i < 4; i++) {
      smokeSystem.spawnPuff(
        new THREE.Vector3(i * 10, 100, 0),
        new THREE.Vector3(0, 1, 0),
        { category: 'launch', life: 10.0 }
      );
    }
    expect(smokeSystem.gpuParticleCount).toBe(4);
    expect(smokeSystem.priorityArray[0]).toBe(2);

    // Try to spawn 4 low-priority aerial puffs while high-priority are alive
    for (let i = 0; i < 4; i++) {
      smokeSystem.spawnPuff(
        new THREE.Vector3(999, 999, 999),
        new THREE.Vector3(0, 1, 0),
        { category: 'aerial', life: 5.0 }
      );
    }

    // High priority launch smoke must NOT be overwritten: position at index 0 should remain 0, 100, 0
    expect(smokeSystem.positionsArray[0]).toBe(0);
    expect(smokeSystem.positionsArray[1]).toBe(100);
    expect(smokeSystem.positionsArray[2]).toBe(0);
    expect(smokeSystem.priorityArray[0]).toBe(2);

    smokeSystem.maxGpuSmokeParticles = origMax;
  });
});
