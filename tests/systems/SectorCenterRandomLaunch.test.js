import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { FireworkSystem } from '../../src/systems/FireworkSystem.js';
import { CometSystem } from '../../src/systems/CometSystem.js';
import { LAUNCH_ZONE_CONFIG } from '../../src/config/launchZone.js';

describe('Sector Center Default for Random Launches', () => {
  const centerSector = LAUNCH_ZONE_CONFIG.sectors.find((s) => s.id === 'center');

  it('FireworkSystem.resolveLaunchPosition should default to center sector angles', () => {
    const scene = new THREE.Scene();
    const fireworkSystem = new FireworkSystem(scene);

    for (let i = 0; i < 20; i++) {
      fireworkSystem.resolveLaunchPosition();
      const angle = fireworkSystem._lastLaunchAngle;
      expect(angle).toBeGreaterThanOrEqual(centerSector.minAngle - 1e-5);
      expect(angle).toBeLessThanOrEqual(centerSector.maxAngle + 1e-5);
    }
  });

  it('CometSystem.resolveLaunchPosition should default to center sector angles', () => {
    const scene = new THREE.Scene();
    const cometSystem = new CometSystem(scene);

    for (let i = 0; i < 20; i++) {
      cometSystem.resolveLaunchPosition();
      const angle = cometSystem._lastLaunchAngle;
      expect(angle).toBeGreaterThanOrEqual(centerSector.minAngle - 1e-5);
      expect(angle).toBeLessThanOrEqual(centerSector.maxAngle + 1e-5);
    }
  });

  it('FireworkSystem.launchRandom should launch on center sector when sectorId is omitted', () => {
    const scene = new THREE.Scene();
    const fireworkSystem = new FireworkSystem(scene);

    fireworkSystem.launchRandom();
    const angle = fireworkSystem._lastLaunchAngle;
    expect(angle).toBeGreaterThanOrEqual(centerSector.minAngle - 1e-5);
    expect(angle).toBeLessThanOrEqual(centerSector.maxAngle + 1e-5);
  });

  it('CometSystem.launchRandom should launch on center sector when sectorId is omitted', () => {
    const scene = new THREE.Scene();
    const cometSystem = new CometSystem(scene);

    cometSystem.launchRandom();
    const angle = cometSystem._lastLaunchAngle;
    expect(angle).toBeGreaterThanOrEqual(centerSector.minAngle - 1e-5);
    expect(angle).toBeLessThanOrEqual(centerSector.maxAngle + 1e-5);
  });
});

