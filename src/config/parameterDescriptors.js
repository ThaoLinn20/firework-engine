/**
 * Centralized Parameter Descriptors and Domain Boundary Normalization.
 * Single Source of Truth (SSOT) decoupling Soft Limits (UI Ergonomics) from Hard Limits (Engine Physics Safety).
 */

export const PARAMETER_DESCRIPTORS = Object.freeze({
  particleCountMultiplier: Object.freeze({
    name: 'particleCountMultiplier',
    labelKey: 'particleCountMultiplier',
    defaultValue: 1.0,
    softMin: 0.25,
    softMax: 3.0,
    softStep: 0.25,
    hardMin: 0.0,
    hardMax: 20.0,
    unit: 'x',
    formatValue: (v) => `${Number(v).toFixed(2)}x`
  }),
  starLifeMultiplier: Object.freeze({
    name: 'starLifeMultiplier',
    labelKey: 'starLifeMultiplier',
    defaultValue: 1.0,
    softMin: 0.2,
    softMax: 2.5,
    softStep: 0.05,
    hardMin: 0.001,
    hardMax: 10.0,
    unit: 'x',
    formatValue: (v) => `${Number(v).toFixed(2)}x`
  }),
  shellSize: Object.freeze({
    name: 'shellSize',
    labelKey: 'shellSize',
    defaultValue: 1.0,
    softMin: 0.5,
    softMax: 3.0,
    softStep: 0.1,
    hardMin: 0.05,
    hardMax: 10.0,
    unit: 'x',
    formatValue: (v) => `${Number(v).toFixed(1)}x`
  }),
  soundVolume: Object.freeze({
    name: 'soundVolume',
    labelKey: 'soundVolume',
    defaultValue: 1.0,
    softMin: 0.0,
    softMax: 2.0,
    softStep: 0.05,
    hardMin: 0.0,
    hardMax: 5.0,
    unit: 'x',
    formatValue: (v) => `${Number(v).toFixed(2)}x`
  }),
  textScale: Object.freeze({
    name: 'textScale',
    labelKey: 'textScale',
    defaultValue: 0.38,
    softMin: 0.1,
    softMax: 2.0,
    softStep: 0.02,
    hardMin: 0.01,
    hardMax: 10.0,
    unit: 'x',
    formatValue: (v) => `${Number(v).toFixed(2)}x`
  })
});

export function getParameterDescriptor(name) {
  return PARAMETER_DESCRIPTORS[name] || null;
}

export function normalizeParameter(name, rawValue) {
  const descriptor = PARAMETER_DESCRIPTORS[name];
  if (!descriptor) {
    const num = Number(rawValue);
    return isNaN(num) ? 1.0 : num;
  }
  if (rawValue === undefined || rawValue === null || isNaN(Number(rawValue))) {
    return descriptor.defaultValue;
  }
  const num = Number(rawValue);
  return Math.max(descriptor.hardMin, Math.min(descriptor.hardMax, num));
}

export function normalizePresetParameters(preset) {
  if (!preset || typeof preset !== 'object') {
    return preset;
  }
  if (preset.particleCountMultiplier !== undefined) {
    preset.particleCountMultiplier = normalizeParameter('particleCountMultiplier', preset.particleCountMultiplier);
  }
  if (preset.starLifeMultiplier !== undefined) {
    preset.starLifeMultiplier = normalizeParameter('starLifeMultiplier', preset.starLifeMultiplier);
  }
  if (preset.shellSize !== undefined) {
    preset.shellSize = normalizeParameter('shellSize', preset.shellSize);
  }
  if (preset.soundVolume !== undefined) {
    preset.soundVolume = normalizeParameter('soundVolume', preset.soundVolume);
  }
  return preset;
}
