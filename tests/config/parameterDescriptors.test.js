import { describe, it, expect } from 'vitest';
import {
  PARAMETER_DESCRIPTORS,
  getParameterDescriptor,
  normalizeParameter,
  normalizePresetParameters
} from '../../src/config/parameterDescriptors.js';

describe('Centralized Parameter Descriptors and Normalization', () => {
  it('should export immutable descriptors for multipliers', () => {
    expect(PARAMETER_DESCRIPTORS.particleCountMultiplier).toBeDefined();
    expect(PARAMETER_DESCRIPTORS.starLifeMultiplier).toBeDefined();
    expect(PARAMETER_DESCRIPTORS.shellSize).toBeDefined();
    expect(PARAMETER_DESCRIPTORS.soundVolume).toBeDefined();
    expect(PARAMETER_DESCRIPTORS.cascadeDuration).toBeDefined();

    expect(PARAMETER_DESCRIPTORS.particleCountMultiplier.softMin).toBe(0.25);
    expect(PARAMETER_DESCRIPTORS.particleCountMultiplier.softMax).toBe(3.0);
    expect(PARAMETER_DESCRIPTORS.particleCountMultiplier.hardMin).toBe(0.0);

    expect(PARAMETER_DESCRIPTORS.cascadeDuration.softMin).toBe(0.1);
    expect(PARAMETER_DESCRIPTORS.cascadeDuration.softMax).toBe(6.0);
    expect(PARAMETER_DESCRIPTORS.cascadeDuration.hardMin).toBe(0.05);
  });

  it('should retrieve descriptor by name using getParameterDescriptor', () => {
    const desc = getParameterDescriptor('particleCountMultiplier');
    expect(desc).toBeDefined();
    expect(desc.defaultValue).toBe(1.0);

    const unknown = getParameterDescriptor('nonExistent');
    expect(unknown).toBeNull();
  });

  it('should normalize valid numbers and preserve soft limits down to hard limits', () => {
    // 0.01 is beyond softMin (0.25) but within hardMin (0.0) -> preserved!
    expect(normalizeParameter('particleCountMultiplier', 0.01)).toBe(0.01);
    expect(normalizeParameter('particleCountMultiplier', 5.0)).toBe(5.0);

    // Negative numbers clamped to hardMin
    expect(normalizeParameter('particleCountMultiplier', -1)).toBe(0.0);

    // Invalid numbers fallback to defaultValue
    expect(normalizeParameter('particleCountMultiplier', 'abc')).toBe(1.0);
    expect(normalizeParameter('particleCountMultiplier', null)).toBe(1.0);
  });

  it('should normalize preset objects cleanly at ingestion boundary', () => {
    const rawPreset = {
      preset: 'crysanthemum',
      particleCountMultiplier: 0.01,
      starLifeMultiplier: 4.5,
      shellSize: -2,
      soundVolume: 1.5
    };

    const normalized = normalizePresetParameters(rawPreset);
    expect(normalized.particleCountMultiplier).toBe(0.01);
    expect(normalized.starLifeMultiplier).toBe(4.5);
    expect(normalized.shellSize).toBe(0.05); // clamped to hardMin
    expect(normalized.soundVolume).toBe(1.5);
  });
});
