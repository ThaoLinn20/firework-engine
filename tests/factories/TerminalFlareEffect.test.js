import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { BurstParticleFactory } from '../../src/factories/BurstParticleFactory.js';
import { AVAILABLE_EFFECT_TAGS } from '../../src/factories/FireworkCompositionHelper.js';
import { FIREWORK_CONFIG } from '../../src/config/fireworks.js';
import { FireworkSystem } from '../../src/systems/FireworkSystem.js';

describe('Terminal Flare Active Effect', () => {
  it('is registered in centralized taxonomy tags', () => {
    expect(AVAILABLE_EFFECT_TAGS).toContain('terminal_flare');
    expect(AVAILABLE_EFFECT_TAGS).toContain('terminal-flare');
  });

  it('correctly resolves hasTerminalFlare flag from effect tag array or preset property', () => {
    const flagsFromTag = BurstParticleFactory.resolveActiveEffectFlags({
      effects: ['terminal_flare']
    });
    expect(flagsFromTag.hasTerminalFlare).toBe(true);

    const flagsFromKebab = BurstParticleFactory.resolveActiveEffectFlags({
      effects: ['terminal-flare']
    });
    expect(flagsFromKebab.hasTerminalFlare).toBe(true);

    const flagsFromPreset = BurstParticleFactory.resolveActiveEffectFlags({
      preset: { terminalFlare: true }
    });
    expect(flagsFromPreset.hasTerminalFlare).toBe(true);

    const flagsFromAlias = BurstParticleFactory.resolveActiveEffectFlags({
      effects: ['burnout-flash']
    });
    expect(flagsFromAlias.hasTerminalFlare).toBe(true);

    const flagsDefault = BurstParticleFactory.resolveActiveEffectFlags({
      effects: ['strobe']
    });
    expect(flagsDefault.hasTerminalFlare).toBe(false);
  });

  it('creates particle with all terminal flare properties monomorphically initialized', () => {
    const p = BurstParticleFactory.createParticle({
      position: new THREE.Vector3(0, 50, 0),
      velocity: new THREE.Vector3(0, 10, 0),
      color: new THREE.Color('#ff0000'),
      hasTerminalFlare: true,
      terminalFlareTriggerRatio: 0.82,
      terminalFlareDuration: 0.18,
      terminalFlareIntensity: 2.5,
      terminalFlareSizeMultiplier: 1.35
    });

    expect(p.hasTerminalFlare).toBe(true);
    expect(p.terminalFlareTriggerRatio).toBe(0.82);
    expect(p.terminalFlareDuration).toBe(0.18);
    expect(p.terminalFlareIntensity).toBe(2.5);
    expect(p.terminalFlareSizeMultiplier).toBe(1.35);
  });

  it('correctly falls back to FIREWORK_CONFIG defaults when not explicitly provided', () => {
    const p = BurstParticleFactory.createParticle({
      hasTerminalFlare: true
    });

    expect(p.hasTerminalFlare).toBe(true);
    expect(p.terminalFlareTriggerRatio).toBe(FIREWORK_CONFIG.TERMINAL_FLARE.defaultTriggerRatio);
    expect(p.terminalFlareDuration).toBe(FIREWORK_CONFIG.TERMINAL_FLARE.defaultDuration);
    expect(p.terminalFlareIntensity).toBe(FIREWORK_CONFIG.TERMINAL_FLARE.defaultIntensity);
    expect(p.terminalFlareSizeMultiplier).toBe(FIREWORK_CONFIG.TERMINAL_FLARE.defaultSizeMultiplier);
  });

  it('spawns particles in FireworkSystem and triggers terminal flare during late lifecycle update', () => {
    const scene = new THREE.Scene();
    const system = new FireworkSystem(scene);

    const preset = {
      shape: 'sphere',
      shapeType: 'sphere',
      dynamicsType: 'standard',
      effects: ['terminal_flare'],
      terminalFlareTriggerRatio: 0.80,
      terminalFlareDuration: 0.15,
      terminalFlareIntensity: 2.5,
      terminalFlareSizeMultiplier: 1.30,
      particleCount: 20
    };

    system.createBurst(
      new THREE.Vector3(0, 100, 0),
      new THREE.Color('#ff0000'),
      'sphere',
      preset,
      1
    );

    expect(system.burstParticles.length).toBeGreaterThan(0);
    const particle = system.burstParticles[0];
    expect(particle.hasTerminalFlare).toBe(true);
    expect(particle.terminalFlareTriggerRatio).toBe(0.80);

    // Test mid-life (lifeRatio = 0.50): flare has not triggered yet
    particle.age = particle.maxLife * 0.50;
    system.updateBurstParticles(0.016);
    expect(particle.renderOpacity).toBeLessThanOrEqual(1.0);

    // Test flare peak (around triggerRatio + 25% of duration = 0.80 + 0.15 * 0.25 = 0.8375)
    particle.age = particle.maxLife * 0.8375;
    system.updateBurstParticles(0.016);
    // At flare peak, opacity is significantly brighter than explosion (> 1.0)
    expect(particle.renderOpacity).toBeGreaterThan(1.0);
    expect(particle.renderSize).toBeGreaterThan(0.0);
    // Actinic whitening: red particle (#ff0000) transitions to brilliant white (r, g, b close to 1.0)
    expect(particle.color.r).toBeCloseTo(1.0, 1);
    expect(particle.color.g).toBeCloseTo(1.0, 1);
    expect(particle.color.b).toBeCloseTo(1.0, 1);

    // Test burnout complete (lifeRatio > 0.80 + 0.15 = 0.95 -> 0.98)
    particle.age = particle.maxLife * 0.98;
    system.updateBurstParticles(0.016);
    expect(particle.renderOpacity).toBe(0.0);
    expect(particle.renderSize).toBe(0.0);

    system.destroy();
  });
});
