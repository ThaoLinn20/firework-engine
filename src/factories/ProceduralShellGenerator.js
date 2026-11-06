// Procedural Firework Generator
// Dynamically composes Shape + Dynamics + Modifiers + Visual Effects based on tier and parameters

import {
  AVAILABLE_SHAPES,
  AVAILABLE_DYNAMICS,
  TIMED_EFFECT_TAGS
} from './FireworkCompositionHelper.js';

// Curated vibrant pyrotechnic color palettes
export const COLOR_PALETTES = [
  { name: 'ruby_gold', primary: '#ff2244', secondary: '#ffbb22' },
  { name: 'electric_cyan', primary: '#00e5ff', secondary: '#ffffff' },
  { name: 'emerald_lime', primary: '#00e676', secondary: '#b2ff59' },
  { name: 'amethyst_rose', primary: '#d500f9', secondary: '#ff4081' },
  { name: 'royal_twilight', primary: '#3d5afe', secondary: '#ff9100' },
  { name: 'golden_kamuro', primary: '#ffaa00', secondary: '#ffe082' },
  { name: 'silver_strobe', primary: '#ffffff', secondary: '#80d8ff' }
];

// Tier constraints and particle budgets
export const TIER_BUDGETS = {
  mini: {
    minParticles: 120,
    maxParticles: 220,
    allowedShapes: ['sphere', 'ring', 'heart', 'star', 'flower'],
    allowedDynamics: ['standard', 'flow', 'falling-leaves', 'sparking'],
    allowedEffects: ['strobe', 'white-strobe', 'glitter-strobe', 'sparkle-apex'],
    pistilChance: 0.15,
    strobeChance: 0.40
  },
  medium: {
    minParticles: 280,
    maxParticles: 450,
    allowedShapes: ['sphere', 'ring', 'heart', 'star', 'flower', 'galaxy', 'oval'],
    allowedDynamics: ['willow', 'falling-comets', 'crysanthemum-spiral-v2', 'crossette', 'flow'],
    allowedEffects: ['strobe', 'glitter-strobe', 'crackle', 'ghost', 'crossette'],
    pistilChance: 0.45,
    strobeChance: 0.60
  },
  grand: {
    minParticles: 550,
    maxParticles: 850,
    allowedShapes: ['sphere', 'galaxy', 'double-helix', 'star', 'ring', 'sparkling-branches'],
    allowedDynamics: ['willow', 'falling-comets-glitter', 'crysanthemum-spiral-v2', 'double-helix', 'ghost-kamuro'],
    allowedEffects: ['strobe', 'crackle', 'ghost', 'crossette', 'tadpole-flurry', 'diamond-scintillation'],
    pistilChance: 0.80,
    strobeChance: 0.85
  },
  super: {
    minParticles: 900,
    maxParticles: 1250,
    allowedShapes: ['sphere', 'galaxy', 'double-helix', 'sparkling-branches', 'sphere_rings'],
    allowedDynamics: ['ghost-kamuro', 'falling-comets-glitter', 'crysanthemum-spiral-v2', 'willow'],
    allowedEffects: ['strobe', 'glitter-strobe', 'crackle', 'ghost', 'crossette', 'breathing-pulse'],
    pistilChance: 1.0,
    strobeChance: 0.95
  }
};

export class ProceduralShellGenerator {
  constructor() {
    this.history = [];
  }

  // Generates a fully composed firework shell preset on-the-fly
  generate(options = {}) {
    const tier = options.tier && TIER_BUDGETS[options.tier] ? options.tier : 'mini';
    const budget = TIER_BUDGETS[tier];

    // Pick shape
    const shape = options.shape || this.pickRandom(budget.allowedShapes);

    // Pick dynamics
    const dynamics = options.dynamics || this.pickRandom(budget.allowedDynamics);

    // Pick color palette
    const palette = options.palette || this.pickRandom(COLOR_PALETTES);

    // Determine particle count safely clamped within tier budget
    const count = options.particleCount
      ? Math.max(budget.minParticles, Math.min(budget.maxParticles, options.particleCount))
      : Math.floor(budget.minParticles + Math.random() * (budget.maxParticles - budget.minParticles));

    // Determine modifiers and effects
    const modifiers = {};
    const effectTags = [];

    // Pistil (inner core burst)
    const hasPistil = options.pistil !== undefined ? options.pistil : Math.random() < budget.pistilChance;
    if (hasPistil) {
      modifiers.pistil = true;
      modifiers.pistilColor = palette.secondary;
      modifiers.pistilCount = Math.floor(count * 0.25);
    }

    // Active optical effect
    const effectTag = options.effect || (Math.random() < budget.strobeChance ? this.pickRandom(budget.allowedEffects) : null);
    if (effectTag && TIMED_EFFECT_TAGS.includes(effectTag)) {
      effectTags.push(effectTag);
      modifiers[effectTag] = true;
    }

    // Velocity scale and spread
    const speed = options.speed || (tier === 'super' ? 36 : tier === 'grand' ? 32 : tier === 'medium' ? 28 : 24);

    // Assemble unified shell specification adhering to ShellPresetFactory schema
    const shellConfig = {
      type: 'firework',
      shape: shape,
      shapeRenderMode: (shape === 'heart' || shape === 'ring' || shape === 'star') ? 'outline' : 'standard',
      effect: dynamics,
      color: options.color || palette.primary,
      secondaryColor: palette.secondary,
      particleCount: count,
      speed: speed,
      size: options.size || (tier === 'super' ? 4.5 : tier === 'grand' ? 3.8 : tier === 'medium' ? 3.2 : 2.6),
      effectTags: effectTags,
      modifiers: modifiers,
      burstSmoke: true,
      tier: tier,
      proceduralName: 'procedural_' + tier + '_' + shape + '_' + dynamics
    };

    return shellConfig;
  }

  // Generates a coordinated multi-shell volley for combos or large gifts
  generateVolley(count = 3, baseOptions = {}) {
    const volley = [];
    const countClamped = Math.max(1, Math.min(count, 8));
    for (let i = 0; i < countClamped; i++) {
      const offsetDelay = i * 0.25;
      const xSpread = (i - (countClamped - 1) * 0.5) * 6.5;
      const shell = this.generate(baseOptions);
      volley.push({
        shell: shell,
        delay: offsetDelay,
        offsetPosition: { x: xSpread, y: 0, z: (Math.random() - 0.5) * 6 }
      });
    }
    return volley;
  }

  pickRandom(array) {
    if (!array || array.length === 0) return null;
    return array[Math.floor(Math.random() * array.length)];
  }
}

export const proceduralShellGenerator = new ProceduralShellGenerator();

