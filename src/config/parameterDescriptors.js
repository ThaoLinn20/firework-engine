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
  }),
  cascadeDuration: Object.freeze({
    name: 'cascadeDuration',
    labelKey: 'cascadeDuration',
    defaultValue: 0.8,
    softMin: 0.1,
    softMax: 6.0,
    softStep: 0.05,
    hardMin: 0.05,
    hardMax: 30.0,
    unit: 's',
    formatValue: (v) => `${Number(v).toFixed(2)}s`
  }),
  terminalFlareTriggerRatio: Object.freeze({
    name: 'terminalFlareTriggerRatio',
    labelKey: 'terminalFlareTriggerRatio',
    defaultValue: 0.85,
    softMin: 0.70,
    softMax: 0.95,
    softStep: 0.01,
    hardMin: 0.50,
    hardMax: 0.99,
    unit: '',
    formatValue: (v) => `${Math.round(Number(v) * 100)}%`
  }),
  terminalFlareDuration: Object.freeze({
    name: 'terminalFlareDuration',
    labelKey: 'terminalFlareDuration',
    defaultValue: 0.15,
    softMin: 0.05,
    softMax: 0.35,
    softStep: 0.01,
    hardMin: 0.01,
    hardMax: 1.0,
    unit: 's',
    formatValue: (v) => `${Number(v).toFixed(2)}s`
  }),
  terminalFlareIntensity: Object.freeze({
    name: 'terminalFlareIntensity',
    labelKey: 'terminalFlareIntensity',
    defaultValue: 2.5,
    softMin: 1.0,
    softMax: 4.5,
    softStep: 0.1,
    hardMin: 1.0,
    hardMax: 10.0,
    unit: 'x',
    formatValue: (v) => `${Number(v).toFixed(1)}x`
  }),
  terminalFlareSizeMultiplier: Object.freeze({
    name: 'terminalFlareSizeMultiplier',
    labelKey: 'terminalFlareSizeMultiplier',
    defaultValue: 1.35,
    softMin: 1.0,
    softMax: 2.2,
    softStep: 0.05,
    hardMin: 0.5,
    hardMax: 5.0,
    unit: 'x',
    formatValue: (v) => `${Number(v).toFixed(2)}x`
  }),
  terminalFlareColor: Object.freeze({
    name: 'terminalFlareColor',
    labelKey: 'terminalFlareColor',
    defaultValue: 'random',
    type: 'color',
    normalize: (val) => {
      if (typeof val === 'string') {
        const trimmed = val.trim().toLowerCase();
        if (trimmed === 'random') return 'random';
        if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(trimmed)) {
          return trimmed.length === 4
            ? '#' + trimmed[1] + trimmed[1] + trimmed[2] + trimmed[2] + trimmed[3] + trimmed[3]
            : trimmed;
        }
      }
      return 'random';
    }
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
  if (typeof descriptor.normalize === 'function') {
    return descriptor.normalize(rawValue);
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
  if (preset.cascadeDuration !== undefined) {
    preset.cascadeDuration = normalizeParameter('cascadeDuration', preset.cascadeDuration);
  }
  if (preset.terminalFlareTriggerRatio !== undefined) {
    preset.terminalFlareTriggerRatio = normalizeParameter('terminalFlareTriggerRatio', preset.terminalFlareTriggerRatio);
  }
  if (preset.terminalFlareDuration !== undefined) {
    preset.terminalFlareDuration = normalizeParameter('terminalFlareDuration', preset.terminalFlareDuration);
  }
  if (preset.terminalFlareIntensity !== undefined) {
    preset.terminalFlareIntensity = normalizeParameter('terminalFlareIntensity', preset.terminalFlareIntensity);
  }
  if (preset.terminalFlareSizeMultiplier !== undefined) {
    preset.terminalFlareSizeMultiplier = normalizeParameter('terminalFlareSizeMultiplier', preset.terminalFlareSizeMultiplier);
  }
  if (preset.terminalFlareColor !== undefined) {
    preset.terminalFlareColor = normalizeParameter('terminalFlareColor', preset.terminalFlareColor);
  }
  return preset;
}
