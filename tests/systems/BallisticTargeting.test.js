import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as THREE from 'three';
import { FireworkSystem } from '../../src/systems/FireworkSystem.js';
import { FIREWORK_CONFIG } from '../../src/config/fireworks.js';

describe('Ballistic Targeting & Exact Apex Burst', () => {
  let scene;
  let trailSystem;
  let system;

  beforeEach(() => {
    scene = new THREE.Scene();
    trailSystem = {
      spawnTrailParticle: vi.fn(),
      spawnAscentTrailSpark: vi.fn(),
      spawnBurstTrailParticles: vi.fn(),
      update: vi.fn()
    };
    system = new FireworkSystem(scene, trailSystem);
  });

  it('launches shell from exact launchRatioX and computes closed-form velocity to apex', () => {
    const launchRatioX = 0.20;
    const targetRatioX = 0.80;
    const targetRatioY = 0.75;

    system.launchRandom('peony', {
      launchRatioX,
      targetRatioX,
      targetRatioY,
      ratioZ: 0.5,
      isTargetedTrajectory: true
    });

    expect(system.activeFireworks.length).toBe(1);
    const shell = system.activeFireworks[0];

    // Mortar origin should match launchRatioX
    const expectedLaunchPos = system.resolveLaunchPosition(launchRatioX, 0.5, 'center');
    expect(shell.basePosition.x).toBeCloseTo(expectedLaunchPos.x, 2);
    expect(shell.basePosition.z).toBeCloseTo(expectedLaunchPos.z, 2);

    // Target apex
    const expectedTargetPos = system.resolveBurstPosition(targetRatioX, targetRatioY, 0.5, 'center');
    expect(shell.burstHeight).toBeCloseTo(expectedTargetPos.y, 2);

    // Closed-form kinematics assertion:
    const gravity = Math.abs(FIREWORK_CONFIG.GRAVITY);
    const deltaY = expectedTargetPos.y - shell.basePosition.y;
    const timeToApex = Math.sqrt((2 * deltaY) / gravity);

    // Initial vertical velocity must equal sqrt(2 * g * deltaY)
    expect(shell.velocity.y).toBeCloseTo(Math.sqrt(2 * gravity * deltaY), 2);

    // Simulated trajectory step to apex:
    const simPos = shell.basePosition.clone().addScaledVector(
      new THREE.Vector3(shell.velocity.x, 0, shell.velocity.z),
      timeToApex
    );
    expect(simPos.x).toBeCloseTo(expectedTargetPos.x, 1);
    expect(simPos.z).toBeCloseTo(expectedTargetPos.z, 1);

    // Velocity at apex must be zero
    const simVy = shell.velocity.y - gravity * timeToApex;
    expect(simVy).toBeCloseTo(0.0, 2);
  });

  it('triggers burst exactly at apex position when targetHeight is reached', () => {
    const launchRatioX = 0.10;
    const targetRatioX = 0.90;
    const targetRatioY = 0.60;

    system.launchRandom('crysanthemum', {
      launchRatioX,
      targetRatioX,
      targetRatioY,
      ratioZ: 0.5,
      isTargetedTrajectory: true
    });

    const shell = system.activeFireworks[0];
    const gravity = Math.abs(FIREWORK_CONFIG.GRAVITY);
    const deltaY = shell.burstHeight - shell.basePosition.y;
    const timeToApex = Math.sqrt((2 * deltaY) / gravity);

    // Step simulation directly to apex
    system.update(timeToApex + 0.05);

    // Shell should have bursted at apex
    expect(shell.canBurst()).toBe(true);
  });

  it('allows water-level burst at minBurstY=0.5 without going underground while keeping random aerial height', () => {
    expect(system.resolveBurstHeight(null, 0)).toBeCloseTo(0.5, 2);
    expect(system.resolveBurstHeight(null, -0.5)).toBeCloseTo(0.5, 2);

    const randomHeight = system.resolveBurstHeight({ shellSize: 1 }, undefined);
    expect(randomHeight).toBeGreaterThanOrEqual(75);

    const waterVel = system.resolveLaunchVelocity(0.5);
    expect(waterVel.x).toBe(0);
    expect(waterVel.y).toBe(0);
    expect(waterVel.z).toBe(0);
    expect(Number.isFinite(waterVel.y)).toBe(true);
  });
});
