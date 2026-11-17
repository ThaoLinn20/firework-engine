import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as THREE from 'three';
import { BurstParticleFactory } from '../../src/factories/BurstParticleFactory.js';
import { FireworkSystem } from '../../src/systems/FireworkSystem.js';
import { SmokeSystem } from '../../src/systems/SmokeSystem.js';
import { normalizeParameter } from '../../src/config/parameterDescriptors.js';
import { FIREWORK_CONFIG } from '../../src/config/fireworks.js';

describe('Burst Particle Smoke Trail (Active Effect: smoke_trail)', () => {
  it('should normalize smokeTrailStartTime and smokeTrailDuration correctly', () => {
    // Normalization bounds
    expect(normalizeParameter('smokeTrailStartTime', 0.5)).toBe(0.5);
    expect(normalizeParameter('smokeTrailStartTime', -1.0)).toBe(0.0);
    expect(normalizeParameter('smokeTrailStartTime', 10.0)).toBe(5.0);
    expect(normalizeParameter('smokeTrailStartTime', undefined)).toBe(0.0);

    expect(normalizeParameter('smokeTrailDuration', 2.0)).toBe(2.0);
    expect(normalizeParameter('smokeTrailDuration', 0.01)).toBe(0.1);
    expect(normalizeParameter('smokeTrailDuration', 20.0)).toBe(8.0);
    expect(normalizeParameter('smokeTrailDuration', undefined)).toBe(1.5);
  });

  it('should resolve active effect flag for smoke_trail and smoke-trail', () => {
    const flags1 = BurstParticleFactory.resolveActiveEffectFlags({
      preset: { effects: ['smoke_trail'] },
      effects: ['smoke_trail']
    });
    expect(flags1.hasSmokeTrail).toBe(true);

    const flags2 = BurstParticleFactory.resolveActiveEffectFlags({
      preset: { effects: ['smoke-trail'] },
      effects: ['smoke-trail']
    });
    expect(flags2.hasSmokeTrail).toBe(true);

    const flagsNone = BurstParticleFactory.resolveActiveEffectFlags({
      preset: { effects: ['strobe'] },
      effects: ['strobe']
    });
    expect(flagsNone.hasSmokeTrail).toBe(false);
  });

  it('should select a strictly limited number of leader stars across burst particles', () => {
    const totalParticles = 200;
    const particles = [];
    const maxLeaders = FIREWORK_CONFIG.BURST_SMOKE_TRAIL?.maxLeaders ?? 20;

    for (let i = 0; i < totalParticles; i++) {
      const p = BurstParticleFactory.createParticle({
        position: new THREE.Vector3(0, 50, 0),
        velocity: new THREE.Vector3(Math.cos(i), Math.sin(i), 0).multiplyScalar(20),
        color: new THREE.Color(0xff0055),
        particleIndex: i,
        totalParticleCount: totalParticles,
        hasSmokeTrail: true,
        smokeTrailStartTime: 0.2,
        smokeTrailDuration: 1.0,
        maxLife: 2.5
      });
      particles.push(p);
    }

    const leaders = particles.filter((p) => p.isSmokeLeader);
    expect(leaders.length).toBeGreaterThan(0);
    expect(leaders.length).toBeLessThanOrEqual(maxLeaders);

    // Verify properties on leader
    const leader = leaders[0];
    expect(leader.hasSmokeTrail).toBe(true);
    expect(leader.smokeTrailStart).toBeCloseTo(0.2, 2);
    expect(leader.smokeTrailEnd).toBeCloseTo(1.2, 2);
    expect(leader.maxSmokePuffs).toBe(8);
    expect(leader.smokePuffCount).toBe(0);
  });

  it('should respect timing window: spawn smoke only within [smokeTrailStart, smokeTrailEnd]', () => {
    const scene = new THREE.Scene();
    const mockTrailSystem = {
      spawnTrailParticle: vi.fn(),
      spawnSpark: vi.fn()
    };
    const mockSceneManager = { instance: scene };
    const smokeSystem = new SmokeSystem(mockSceneManager);
    const fireworkSystem = new FireworkSystem(scene, mockTrailSystem, smokeSystem);

    const spawnedPuffs = [];
    smokeSystem.spawnPuff = vi.fn((pos, vel, opts) => {
      spawnedPuffs.push({ pos: pos.clone(), opts });
    });

    // Create a leader particle with smokeTrailStart = 0.5s, duration = 1.0s (ends at 1.5s)
    const particle = BurstParticleFactory.createParticle({
      position: new THREE.Vector3(0, 100, 0),
      velocity: new THREE.Vector3(15, 20, 0),
      color: new THREE.Color(0x00ff88),
      particleIndex: 0,
      totalParticleCount: 100,
      hasSmokeTrail: true,
      isSmokeLeader: true,
      smokeTrailStartTime: 0.5,
      smokeTrailDuration: 1.0,
      maxLife: 3.0
    });

    fireworkSystem.burstParticles = [particle];

    // Phase 1: age < 0.5s (before start) -> should NOT emit puffs
    for (let step = 0; step < 10; step++) {
      fireworkSystem.updateBurstParticles(0.04);
    }
    expect(particle.age).toBeLessThan(0.5);
    expect(particle.smokePuffCount).toBe(0);
    expect(spawnedPuffs.length).toBe(0);

    // Phase 2: age in [0.5, 1.5] (active window) -> should emit puffs
    for (let step = 0; step < 25; step++) {
      fireworkSystem.updateBurstParticles(0.04);
    }
    expect(particle.age).toBeGreaterThan(0.5);
    expect(particle.smokePuffCount).toBeGreaterThan(0);
    const activePuffCount = particle.smokePuffCount;
    expect(spawnedPuffs.length).toBe(activePuffCount);

    // Verify puff options
    const firstPuff = spawnedPuffs[0];
    expect(firstPuff.opts.isNucleus).toBe(true);
    expect(firstPuff.opts.isHazePromoter).toBe(true);
    expect(firstPuff.opts.nucleusBoost).toBe(2.2);
    expect(firstPuff.opts.driftDelay).toBe(0.15);

    // Phase 3: age > 1.5s (after end) -> should NOT emit any more puffs
    particle.age = 1.6;
    for (let step = 0; step < 20; step++) {
      fireworkSystem.updateBurstParticles(0.04);
    }
    expect(particle.smokePuffCount).toBe(activePuffCount);
    expect(particle.smokePuffCount).toBeLessThanOrEqual(particle.maxSmokePuffs);
  });
});
