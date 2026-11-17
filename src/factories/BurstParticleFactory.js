import * as THREE from 'three';
import { FIREWORK_CONFIG } from '../config/fireworks.js';
import { BurstEffectProcessor } from './BurstEffectProcessor.js';

const BURST_BASE_DRAG = FIREWORK_CONFIG.BURST.baseDrag ?? 2.2;
const BASE_BURST_POINT_SIZE = FIREWORK_CONFIG.SYSTEM.baseBurstPointSize ?? 18;

export class BurstParticleFactory {
  static createRandomBurstRotation() {
    const axis = new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    ).normalize();
    const angle = Math.random() * Math.PI * 2;
    return new THREE.Quaternion().setFromAxisAngle(
      axis,
      angle
    );
  }

  static resolveActiveEffectFlags({
    preset = {},
    effects = [],
    dynamicsType = ''
  } = {}) {
    const rawList = Array.isArray(effects) && effects.length > 0
      ? effects
      : (Array.isArray(preset?.effects) ? preset.effects : []);
    const effectsList = rawList.map((e) => (typeof e === 'object' && e !== null ? (e.type || e.key) : e));

    const normDynamics = (
      dynamicsType
      || preset?.dynamicsType
      || preset?.dynamics
      || preset?.effectType
      || ''
    ).toLowerCase();

    const isCrossetteShell = Boolean(
      preset?.crossette
      || effectsList.includes('crossette')
      || normDynamics === 'crossette'
    );

    const isTadpoleFlurryShell = Boolean(
      preset?.isTadpoleShell
      || preset?.tadpoleFlurry
      || effectsList.includes('tadpole-flurry')
      || effectsList.includes('tadpole_flurry')
      || (Array.isArray(preset?.effects) && (
        preset.effects.includes('tadpole-flurry') ||
        preset.effects.includes('tadpole_flurry')
      ))
      || normDynamics === 'tadpole-flurry'
    );

    const isErraticDartShell = Boolean(
      preset?.erraticDart
      || preset?.hasErraticDart
      || effectsList.includes('erratic-dart')
      || effectsList.includes('erratic_dart')
      || (Array.isArray(preset?.effects) && (
        preset.effects.includes('erratic-dart') ||
        preset.effects.includes('erratic_dart')
      ))
      || normDynamics === 'erratic-dart'
    );

    const hasBurstSmoke = Boolean(
      !preset?.noBurst && (
        effectsList.includes('burst-smoke')
        || (
          Array.isArray(preset?.effects)
          && preset.effects.some(
            (e) => (typeof e === 'object' && e !== null ? (e.type || e.key) : e) === 'burst-smoke'
          )
        )
        || preset?.['burst-smoke']
        || preset?.burstSmoke
      )
    );

    const isGhostEffect = Boolean(
      normDynamics === 'ghost'
      || effectsList.includes('ghost')
      || (Array.isArray(preset?.effects) && preset.effects.includes('ghost'))
      || preset?.ghost
      || preset?.shellType === 'ghost'
    );

    const isCCEffect = Boolean(
      normDynamics === 'crysanthemum-cc'
      || effectsList.includes('crysanthemum-cc')
      || (Array.isArray(preset?.effects) && preset.effects.includes('crysanthemum-cc'))
      || preset?.shellType === 'crysanthemumCC'
    );

    const isLongBurn = Boolean(
      preset?.longBurn
      || effectsList.includes('long-burn')
      || (Array.isArray(preset?.effects) && preset.effects.includes('long-burn'))
      || normDynamics === 'long-burn'
      || preset?.effectType === 'long-burn'
    );

    const isApexHang = Boolean(
      preset?.apexHang
      || effectsList.includes('apex-hang')
      || (Array.isArray(preset?.effects) && preset.effects.includes('apex-hang'))
      || normDynamics === 'apex-hang'
      || preset?.effectType === 'apex-hang'
    );

    const hasNoTrail = Boolean(
      preset?.noTrail
      || effectsList.includes('no-trail')
      || effectsList.includes('notrail')
      || (Array.isArray(preset?.effects) && (
        preset.effects.includes('no-trail')
        || preset.effects.includes('notrail')
        || preset.effects.some((e) => (typeof e === 'object' && ((e.type || e.key) === 'no-trail' || (e.type || e.key) === 'notrail')))
      ))
      || normDynamics === 'no-trail'
      || normDynamics === 'notrail'
    );

    const isSlowBurst = Boolean(
      preset?.slowBurst
      || preset?.['slow-burst']
      || preset?.slow_burst
      || effectsList.includes('slow-burst')
      || effectsList.includes('slow_burst')
      || (Array.isArray(preset?.effects) && (
        preset.effects.includes('slow-burst')
        || preset.effects.includes('slow_burst')
        || preset.effects.some((e) => (typeof e === 'object' && ((e.type || e.key) === 'slow-burst' || (e.type || e.key) === 'slow_burst')))
      ))
      || normDynamics === 'slow-burst'
      || normDynamics === 'slow_burst'
      || preset?.effectType === 'slow-burst'
      || preset?.effectType === 'slow_burst'
    );

    const hasBreathingPulse = Boolean(
      preset?.breathingPulse
      || preset?.['breathing-pulse']
      || preset?.breathing_pulse
      || effectsList.includes('breathing-pulse')
      || effectsList.includes('breathing_pulse')
      || (Array.isArray(preset?.effects) && (
        preset.effects.includes('breathing-pulse') ||
        preset.effects.includes('breathing_pulse')
      ))
      || normDynamics === 'breathing-pulse'
      || normDynamics === 'breathing_pulse'
    );

    const hasDiamondScintillation = Boolean(
      preset?.diamondScintillation
      || preset?.['diamond-scintillation']
      || preset?.diamond_scintillation
      || effectsList.includes('diamond-scintillation')
      || effectsList.includes('diamond_scintillation')
      || (Array.isArray(preset?.effects) && (
        preset.effects.includes('diamond-scintillation') ||
        preset.effects.includes('diamond_scintillation')
      ))
      || normDynamics === 'diamond-scintillation'
      || normDynamics === 'diamond_scintillation'
    );

    const hasCascadeWave = Boolean(
      preset?.cascadeWave
      || preset?.['cascade-wave']
      || preset?.cascade_wave
      || effectsList.includes('cascade-wave')
      || effectsList.includes('cascade_wave')
      || effectsList.includes('cascadeWave')
      || (Array.isArray(preset?.effects) && (
        preset.effects.includes('cascade-wave')
        || preset.effects.includes('cascade_wave')
        || preset.effects.includes('cascadeWave')
        || preset.effects.some((e) => (typeof e === 'object' && ['cascade-wave', 'cascade_wave', 'cascadeWave'].includes(e.type || e.key)))
      ))
      || normDynamics === 'cascade-wave'
      || normDynamics === 'cascade_wave'
      || normDynamics === 'cascadewave'
    );

    const hasTerminalFlare = Boolean(
      preset?.terminalFlare
      || preset?.['terminal-flare']
      || preset?.terminal_flare
      || preset?.burnoutFlash
      || preset?.['burnout-flash']
      || preset?.burnout_flash
      || effectsList.includes('terminal-flare')
      || effectsList.includes('terminal_flare')
      || effectsList.includes('terminalFlare')
      || effectsList.includes('burnout-flash')
      || effectsList.includes('burnout_flash')
      || (Array.isArray(preset?.effects) && (
        preset.effects.includes('terminal-flare')
        || preset.effects.includes('terminal_flare')
        || preset.effects.includes('terminalFlare')
        || preset.effects.includes('burnout-flash')
        || preset.effects.includes('burnout_flash')
        || preset.effects.some((e) => (typeof e === 'object' && ['terminal-flare', 'terminal_flare', 'terminalFlare', 'burnout-flash', 'burnout_flash'].includes(e.type || e.key)))
      ))
      || normDynamics === 'terminal-flare'
      || normDynamics === 'terminal_flare'
      || normDynamics === 'burnout-flash'
      || normDynamics === 'burnout_flash'
    );

    return {
      isCrossetteShell,
      isTadpoleFlurryShell,
      isErraticDartShell,
      hasBurstSmoke,
      isGhostEffect,
      isCCEffect,
      isLongBurn,
      isApexHang,
      isSlowBurst,
      hasNoTrail,
      hasBreathingPulse,
      hasDiamondScintillation,
      hasCascadeWave,
      hasTerminalFlare,
      effectsList
    };
  }

  static getEffectTiming(effects, effectName, maxLife = 1.0) {
    if (!Array.isArray(effects)) return null;
    for (let i = 0; i < effects.length; i++) {
      const eff = effects[i];
      if (typeof eff === 'object' && eff !== null) {
        if ((eff.type || eff.key) === effectName) {
          const startRatio = eff.startRatio !== undefined ? Number(eff.startRatio) : undefined;
          const endRatio = eff.endRatio !== undefined ? Number(eff.endRatio) : undefined;

          let start = eff.start !== undefined ? Number(eff.start) : 0;
          let end = eff.end !== undefined ? Number(eff.end) : null;

          if (startRatio !== undefined && !isNaN(startRatio)) {
            start = startRatio * maxLife;
          }
          if (endRatio !== undefined && !isNaN(endRatio)) {
            end = endRatio * maxLife;
          }

          return {
            start,
            end,
            startRatio: startRatio !== undefined ? startRatio : (maxLife > 0 ? start / maxLife : 0),
            endRatio: endRatio !== undefined ? endRatio : (end !== null && maxLife > 0 ? end / maxLife : 1.0)
          };
        }
      } else if (eff === effectName) {
        return { start: 0, end: null, startRatio: 0, endRatio: 1.0 };
      }
    }
    return null;
  }

  static getEffectTimings(effects, effectName, maxLife = 1.0) {
    if (!Array.isArray(effects)) return [];
    const list = [];
    for (let i = 0; i < effects.length; i++) {
      const eff = effects[i];
      if (typeof eff === 'object' && eff !== null) {
        if ((eff.type || eff.key) === effectName) {
          const startRatio = eff.startRatio !== undefined ? Number(eff.startRatio) : undefined;
          const endRatio = eff.endRatio !== undefined ? Number(eff.endRatio) : undefined;

          let start = eff.start !== undefined ? Number(eff.start) : 0;
          let end = eff.end !== undefined ? Number(eff.end) : null;

          if (startRatio !== undefined && !isNaN(startRatio)) {
            start = startRatio * maxLife;
          }
          if (endRatio !== undefined && !isNaN(endRatio)) {
            end = endRatio * maxLife;
          }

          list.push({
            start,
            end: end !== null ? end : maxLife,
            startRatio: startRatio !== undefined ? startRatio : (maxLife > 0 ? start / maxLife : 0),
            endRatio: endRatio !== undefined ? endRatio : (end !== null && maxLife > 0 ? end / maxLife : 1.0)
          });
        }
      } else if (eff === effectName) {
        list.push({ start: 0, end: maxLife, startRatio: 0, endRatio: 1.0 });
      }
    }
    return list;
  }

  static createParticle(options = {}) {
    const {
      position = new THREE.Vector3(),
      velocity = new THREE.Vector3(),
      color = new THREE.Color(0xffffff),
      baseColor = null,
      color2 = null,
      age = 0,
      maxLife = 1.0,
      effectType = 'standard',
      effects = [],
      crackle = false,
      crackleTriggered = false,
      phase = 0,
      preset = {},
      heightProfile = null,
      effectState = null,
      ghostDot = 0,
      spiralIndex = 0,
      isSpiralArm = false,
      particleIndex = 0,
      totalParticleCount = 1,
      shellId = null,
      isDyingEmber = false,
      isNestedTrigger = false,
      hasBurstSmoke = false,
      burstSmokeLimit = 0.33,
      isCrossette = false,
      crossetteSplitTime = 0,
      crossetteSplitDone = true,
      isSecondBurst = false,
      secondBurstDone = true,
      secondBurstConfig = null,
      secondBurstTime = 0,
      isChromaticWave = false,
      radialDistanceRatio = 0,
      renderSize = BASE_BURST_POINT_SIZE,
      renderOpacity = 1.0,
      dynamicsProfile = null,
      dragCoefficient = BURST_BASE_DRAG,
      hasTadpoleFlurry = false,
      tadpoleColor = options.tadpoleColor ?? options.preset?.tadpoleColor ?? null,
      tadpoleFlurryColor = options.tadpoleFlurryColor ?? options.preset?.tadpoleFlurryColor ?? null,
      tadpoleArrowTimer = 0,
      tadpoleDeflectionScale = 1.0,
      tadpoleSizeScale = 1.0,
      tadpoleDensityScale = 1.0,
      hasFlurried = false,
      hasErraticDart = false,
      erraticDartTriggerRatio = 0.72,
      erraticDartTriggered = false,
      erraticDartTrailTimer = 0,
      erraticDartFlash = 1.0,
      erraticDartWigglePhase = 0,
      erraticDartWiggleFreq = 22.0,
      erraticDartWiggleAmp = 26.0,
      isSecondBurstChild = false,
      isLongBurn = false,
      isApexHang = false,
      isSlowBurst = false,
      hasNoTrail = false,
      hasCascadeWave = false,
      phaseDelay = 0.0,
      frictionHeat = 0.0,
      ringIndex = null,
      sizeVariance = null,
      brightnessVariance = null,
      hasTerminalFlare = false,
      terminalFlareTriggerRatio = null,
      terminalFlareDuration = null,
      terminalFlareIntensity = null,
      terminalFlareSizeMultiplier = null
    } = options;

    const sizeSpread = FIREWORK_CONFIG.BURST?.starSizeVariance ?? 0.06;
    const brightSpread = FIREWORK_CONFIG.BURST?.starBrightnessVariance ?? 0.10;

    const resolvedSizeVariance = sizeVariance !== null
      ? sizeVariance
      : (1.0 + (Math.random() + Math.random() - 1.0) * sizeSpread);
    const resolvedBrightnessVariance = brightnessVariance !== null
      ? brightnessVariance
      : (1.0 + (Math.random() + Math.random() - 1.0) * brightSpread);

    const resolvedBaseColor = baseColor
      ? baseColor.clone()
      : color.clone();

    const initialSpeed = velocity.length();
    const ejectionDir = initialSpeed > 0.0001
      ? velocity.clone().normalize()
      : new THREE.Vector3(0, 1, 0);

    const pDelay = Number(phaseDelay) || 0.0;

    const effectsArray = Array.isArray(effects) && effects.length > 0
      ? effects
      : (Array.isArray(preset?.effects) ? preset.effects : []);

    const crackleTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'crackle', maxLife);
    const hasCrackle = options.crackle !== undefined ? Boolean(options.crackle) : (crackleTiming !== null);
    const rawCrackleStart = crackleTiming
      ? crackleTiming.start
      : (hasCrackle ? maxLife * 0.65 : undefined);
    const rawCrackleEnd = crackleTiming && crackleTiming.end !== null
      ? crackleTiming.end
      : (hasCrackle ? maxLife : undefined);
    const crackleStart = rawCrackleStart !== undefined ? rawCrackleStart + pDelay : undefined;
    const crackleEnd = rawCrackleEnd !== undefined ? rawCrackleEnd + pDelay : undefined;

    const tadpoleTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'tadpole-flurry', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'tadpole_flurry', maxLife);
    const effectiveHasTadpoleFlurry = options.hasTadpoleFlurry !== undefined
      ? Boolean(options.hasTadpoleFlurry)
      : (tadpoleTiming !== null);
    const rawTadpoleStart = tadpoleTiming
      ? tadpoleTiming.start
      : (effectiveHasTadpoleFlurry ? maxLife * 0.18 : undefined);
    const rawTadpoleEnd = tadpoleTiming && tadpoleTiming.end !== null
      ? tadpoleTiming.end
      : (effectiveHasTadpoleFlurry ? maxLife * 0.85 : undefined);
    const tadpoleStart = rawTadpoleStart !== undefined ? rawTadpoleStart + pDelay : undefined;
    const tadpoleEnd = rawTadpoleEnd !== undefined ? rawTadpoleEnd + pDelay : undefined;

    const dartTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'erratic-dart', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'erratic_dart', maxLife);
    const effectiveHasErraticDart = options.hasErraticDart !== undefined
      ? Boolean(options.hasErraticDart)
      : (dartTiming !== null);
    const rawErraticDartTriggerTime = (dartTiming && dartTiming.start > 0)
      ? dartTiming.start
      : (effectiveHasErraticDart ? maxLife * erraticDartTriggerRatio : undefined);
    const rawErraticDartEnd = dartTiming && dartTiming.end !== null
      ? dartTiming.end
      : (effectiveHasErraticDart ? maxLife : undefined);
    const erraticDartTriggerTime = rawErraticDartTriggerTime !== undefined ? rawErraticDartTriggerTime + pDelay : undefined;
    const erraticDartEnd = rawErraticDartEnd !== undefined ? rawErraticDartEnd + pDelay : undefined;

    const crossetteTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'crossette', maxLife);
    const effectiveIsCrossette = options.isCrossette !== undefined
      ? Boolean(options.isCrossette)
      : (crossetteTiming !== null);
    const resolvedCrossetteSplitTime = ((crossetteTiming && crossetteTiming.start > 0)
      ? crossetteTiming.start
      : (crossetteSplitTime > 0 ? crossetteSplitTime : maxLife * 0.5)) + pDelay;

    const smokeTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'burst-smoke', maxLife);
    const effectiveHasBurstSmoke = options.hasBurstSmoke !== undefined
      ? Boolean(options.hasBurstSmoke)
      : (smokeTiming !== null);
    const rawBurstSmokeStart = smokeTiming
      ? smokeTiming.start
      : (effectiveHasBurstSmoke ? 0 : undefined);
    const rawBurstSmokeEnd = smokeTiming && smokeTiming.end !== null
      ? smokeTiming.end
      : (effectiveHasBurstSmoke ? maxLife * (burstSmokeLimit ?? 0.33) : undefined);
    const burstSmokeStart = rawBurstSmokeStart !== undefined ? rawBurstSmokeStart + pDelay : undefined;
    const burstSmokeEnd = rawBurstSmokeEnd !== undefined ? rawBurstSmokeEnd + pDelay : undefined;

    const strobeTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'strobe', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'white-strobe', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'glitter-strobe', maxLife);
    const rawStrobeStart = strobeTiming ? strobeTiming.start : undefined;
    const rawStrobeEnd = strobeTiming && strobeTiming.end !== null
      ? strobeTiming.end
      : (strobeTiming ? maxLife : undefined);
    const strobeStart = rawStrobeStart !== undefined ? rawStrobeStart + pDelay : undefined;
    const strobeEnd = rawStrobeEnd !== undefined ? rawStrobeEnd + pDelay : undefined;

    const ghostTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'ghost', maxLife);
    const rawGhostStart = ghostTiming ? ghostTiming.start : undefined;
    const rawGhostEnd = ghostTiming && ghostTiming.end !== null
      ? ghostTiming.end
      : (ghostTiming ? maxLife : undefined);
    const ghostStart = rawGhostStart !== undefined ? rawGhostStart + pDelay : undefined;
    const ghostEnd = rawGhostEnd !== undefined ? rawGhostEnd + pDelay : undefined;

    const noTrailTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'no-trail', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'notrail', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'noTrail', maxLife);
    const effectiveHasNoTrail = options.hasNoTrail !== undefined
      ? Boolean(options.hasNoTrail)
      : (preset?.noTrail || noTrailTiming !== null);
    const rawNoTrailStart = noTrailTiming
      ? noTrailTiming.start
      : (effectiveHasNoTrail ? 0 : undefined);
    const rawNoTrailEnd = noTrailTiming && noTrailTiming.end !== null
      ? noTrailTiming.end
      : (effectiveHasNoTrail ? maxLife : undefined);
    const noTrailStart = rawNoTrailStart !== undefined ? rawNoTrailStart + pDelay : undefined;
    const noTrailEnd = rawNoTrailEnd !== undefined ? rawNoTrailEnd + pDelay : undefined;

    const darkPhaseTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'dark_phase', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'dark-phase', maxLife);
    const rawDarkPhaseStart = darkPhaseTiming ? darkPhaseTiming.start : undefined;
    const rawDarkPhaseEnd = darkPhaseTiming && darkPhaseTiming.end !== null
      ? darkPhaseTiming.end
      : (darkPhaseTiming ? maxLife : undefined);
    const darkPhaseStart = rawDarkPhaseStart !== undefined ? rawDarkPhaseStart + pDelay : undefined;
    const darkPhaseEnd = rawDarkPhaseEnd !== undefined ? rawDarkPhaseEnd + pDelay : undefined;

    const syncStrobeTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'sync_strobe', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'sync-strobe', maxLife);
    const rawSyncStrobeStart = syncStrobeTiming ? syncStrobeTiming.start : undefined;
    const rawSyncStrobeEnd = syncStrobeTiming && syncStrobeTiming.end !== null
      ? syncStrobeTiming.end
      : (syncStrobeTiming ? maxLife : undefined);
    const syncStrobeStart = rawSyncStrobeStart !== undefined ? rawSyncStrobeStart + pDelay : undefined;
    const syncStrobeEnd = rawSyncStrobeEnd !== undefined ? rawSyncStrobeEnd + pDelay : undefined;

    const shiftWindows = (timings) => {
      if (pDelay === 0 || !Array.isArray(timings)) return timings;
      return timings.map((t) => ({
        ...t,
        start: t.start + pDelay,
        end: t.end !== null && t.end !== undefined ? t.end + pDelay : null
      }));
    };

    const strobeTimings = shiftWindows(BurstParticleFactory.getEffectTimings(effectsArray, 'strobe', maxLife));
    const whiteStrobeTimings = shiftWindows(BurstParticleFactory.getEffectTimings(effectsArray, 'white-strobe', maxLife));
    const glitterStrobeTimings = shiftWindows(BurstParticleFactory.getEffectTimings(effectsArray, 'glitter-strobe', maxLife));
    const ghostTimings = shiftWindows(BurstParticleFactory.getEffectTimings(effectsArray, 'ghost', maxLife));
    const crackleTimings = shiftWindows(BurstParticleFactory.getEffectTimings(effectsArray, 'crackle', maxLife));
    const noTrailTimings = shiftWindows([
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'no-trail', maxLife),
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'notrail', maxLife),
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'noTrail', maxLife)
    ]);
    const tadpoleTimings = shiftWindows([
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'tadpole-flurry', maxLife),
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'tadpole_flurry', maxLife)
    ]);
    const dartTimings = shiftWindows([
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'erratic-dart', maxLife),
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'erratic_dart', maxLife)
    ]);
    const darkPhaseTimings = shiftWindows([
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'dark_phase', maxLife),
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'dark-phase', maxLife)
    ]);
    const syncStrobeTimings = shiftWindows([
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'sync_strobe', maxLife),
      ...BurstParticleFactory.getEffectTimings(effectsArray, 'sync-strobe', maxLife)
    ]);

    const effectWindows = {};
    if (strobeTimings.length > 0) effectWindows.strobe = strobeTimings;
    if (whiteStrobeTimings.length > 0) effectWindows['white-strobe'] = whiteStrobeTimings;
    if (glitterStrobeTimings.length > 0) effectWindows['glitter-strobe'] = glitterStrobeTimings;
    if (ghostTimings.length > 0) effectWindows.ghost = ghostTimings;
    if (crackleTimings.length > 0) effectWindows.crackle = crackleTimings;
    if (noTrailTimings.length > 0) effectWindows['no-trail'] = noTrailTimings;
    if (tadpoleTimings.length > 0) effectWindows['tadpole-flurry'] = tadpoleTimings;
    if (dartTimings.length > 0) effectWindows['erratic-dart'] = dartTimings;
    if (darkPhaseTimings.length > 0) {
      effectWindows.dark_phase = darkPhaseTimings;
      effectWindows['dark-phase'] = darkPhaseTimings;
    }
    if (syncStrobeTimings.length > 0) {
      effectWindows.sync_strobe = syncStrobeTimings;
      effectWindows['sync-strobe'] = syncStrobeTimings;
    }

    const isCascade = Boolean(hasCascadeWave || pDelay > 0);
    const flareTiming = BurstParticleFactory.getEffectTiming(effectsArray, 'terminal-flare', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'terminal_flare', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'burnout-flash', maxLife)
      || BurstParticleFactory.getEffectTiming(effectsArray, 'burnout_flash', maxLife);

    const effectiveHasTerminalFlare = options.hasTerminalFlare !== undefined
      ? Boolean(options.hasTerminalFlare)
      : (Boolean(preset?.terminalFlare || preset?.['terminal-flare'] || preset?.terminal_flare) || flareTiming !== null);

    const resolvedTerminalFlareTriggerRatio = options.terminalFlareTriggerRatio !== null && options.terminalFlareTriggerRatio !== undefined
      ? Number(options.terminalFlareTriggerRatio)
      : (preset?.terminalFlareTriggerRatio !== undefined
        ? Number(preset.terminalFlareTriggerRatio)
        : (FIREWORK_CONFIG.TERMINAL_FLARE?.defaultTriggerRatio ?? 0.85));

    const resolvedTerminalFlareDuration = options.terminalFlareDuration !== null && options.terminalFlareDuration !== undefined
      ? Number(options.terminalFlareDuration)
      : (preset?.terminalFlareDuration !== undefined
        ? Number(preset.terminalFlareDuration)
        : (FIREWORK_CONFIG.TERMINAL_FLARE?.defaultDuration ?? 0.15));

    const resolvedTerminalFlareIntensity = options.terminalFlareIntensity !== null && options.terminalFlareIntensity !== undefined
      ? Number(options.terminalFlareIntensity)
      : (preset?.terminalFlareIntensity !== undefined
        ? Number(preset.terminalFlareIntensity)
        : (FIREWORK_CONFIG.TERMINAL_FLARE?.defaultIntensity ?? 2.2));

    const resolvedTerminalFlareSizeMultiplier = options.terminalFlareSizeMultiplier !== null && options.terminalFlareSizeMultiplier !== undefined
      ? Number(options.terminalFlareSizeMultiplier)
      : (preset?.terminalFlareSizeMultiplier !== undefined
        ? Number(preset.terminalFlareSizeMultiplier)
        : (FIREWORK_CONFIG.TERMINAL_FLARE?.defaultSizeMultiplier ?? 1.15));

    const resolvedTerminalFlareColor = options.terminalFlareColor !== null && options.terminalFlareColor !== undefined
      ? options.terminalFlareColor
      : (preset?.terminalFlareColor !== undefined
        ? preset.terminalFlareColor
        : (FIREWORK_CONFIG.TERMINAL_FLARE?.defaultColor ?? 'random'));

    let targetFlareColor = null;
    if (effectiveHasTerminalFlare) {
      const palette = FIREWORK_CONFIG.TERMINAL_FLARE?.palette || [
        '#ffffff', '#ffd700', '#00f5ff', '#ff007f', '#39ff14', '#ff5f00', '#bf55ec', '#0099ff'
      ];
      if (typeof resolvedTerminalFlareColor === 'string' && resolvedTerminalFlareColor.toLowerCase() !== 'random') {
        try {
          targetFlareColor = new THREE.Color(resolvedTerminalFlareColor);
        } catch {
          targetFlareColor = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
        }
      } else {
        targetFlareColor = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
      }
    }

    const resolvedDissolveThreshold = options.dissolveThreshold !== undefined
      ? options.dissolveThreshold
      : (isCascade
        ? (FIREWORK_CONFIG.CASCADE_WAVE?.dissolveStart ?? 0.92)
        : (isLongBurn
          ? (dynamicsProfile?.longBurnDissolveStart ?? FIREWORK_CONFIG.BURST?.longBurnDissolveStart ?? 0.72)
          : (dynamicsProfile?.dissolveStart ?? FIREWORK_CONFIG.BURST?.dissolveStart ?? 0.85)));

    const resolvedAttenuationStart = options.attenuationStart !== undefined
      ? options.attenuationStart
      : (isCascade
        ? (FIREWORK_CONFIG.CASCADE_WAVE?.attenuationStart ?? 0.75)
        : (dynamicsProfile?.attenuationStart ?? FIREWORK_CONFIG.BURST?.attenuationStart ?? 0.35));

    const resolvedFadeExp = options.fadeExp !== undefined
      ? options.fadeExp
      : (isCascade
        ? 1.5
        : (dynamicsProfile?.dissolveExponent ?? FIREWORK_CONFIG.SYSTEM?.burstFadeExponent ?? 2.8));

    const resolvedMinDissolveFloor = options.minDissolveFloor !== undefined
      ? options.minDissolveFloor
      : (isCascade ? 0.0 : 0.08);

    return {
      position: position.clone(),
      prevPosition: position.clone(),
      velocity: velocity.clone(),
      initialSpeed,
      ejectionDir,
      color: color.clone(),
      baseColor: resolvedBaseColor,
      color2: color2 ? color2.clone() : null,
      sizeVariance: resolvedSizeVariance,
      brightnessVariance: resolvedBrightnessVariance,
      age,
      maxLife,
      effectType,
      crackle: Boolean(hasCrackle),
      crackleStart,
      crackleEnd,
      crackleTriggered: Boolean(crackleTriggered),
      phase,
      preset,
      heightProfile,
      effectState,
      ghostDot,
      spiralIndex,
      isSpiralArm: Boolean(isSpiralArm),
      particleIndex,
      totalParticleCount,
      shellId: shellId ?? Math.floor(Math.random() * 100000000),
      isDyingEmber: Boolean(isDyingEmber),
      isLongBurn: Boolean(isLongBurn),
      isApexHang: Boolean(isApexHang),
      isSlowBurst: Boolean(isSlowBurst),
      isNestedTrigger: Boolean(isNestedTrigger),
      effects: Array.isArray(effects) ? [...effects] : [],
      hasBurstSmoke: Boolean(effectiveHasBurstSmoke),
      burstSmokeStart,
      burstSmokeEnd,
      burstSmokeLimit,
      isCrossette: Boolean(effectiveIsCrossette),
      crossetteSplitTime: resolvedCrossetteSplitTime,
      crossetteSplitDone: Boolean(crossetteSplitDone),
      isSecondBurst: Boolean(isSecondBurst),
      secondBurstDone: Boolean(secondBurstDone),
      secondBurstConfig,
      secondBurstTime,
      isChromaticWave: Boolean(isChromaticWave),
      radialDistanceRatio,
      renderSize,
      renderOpacity,
      dynamicsProfile,
      dragCoefficient,
      hasTadpoleFlurry: Boolean(effectiveHasTadpoleFlurry),
      tadpoleColor,
      tadpoleFlurryColor: tadpoleFlurryColor || tadpoleColor,
      tadpoleStart,
      tadpoleEnd,
      tadpoleArrowTimer,
      tadpoleDeflectionScale: Number(tadpoleDeflectionScale) || 1.0,
      tadpoleSizeScale: Number(tadpoleSizeScale) || 1.0,
      tadpoleDensityScale: Number(tadpoleDensityScale) || 1.0,
      hasFlurried: Boolean(hasFlurried),
      hasErraticDart: Boolean(effectiveHasErraticDart),
      erraticDartTriggerTime,
      erraticDartEnd,
      erraticDartTriggerRatio,
      erraticDartTriggered: Boolean(erraticDartTriggered),
      erraticDartTrailTimer,
      erraticDartFlash,
      erraticDartWigglePhase,
      erraticDartWiggleFreq,
      erraticDartWiggleAmp,
      isSecondBurstChild: Boolean(isSecondBurstChild),
      strobeStart,
      strobeEnd,
      syncStrobeStart,
      syncStrobeEnd,
      darkPhaseStart,
      darkPhaseEnd,
      ghostStart,
      ghostEnd,
      hasNoTrail: Boolean(effectiveHasNoTrail),
      noTrailStart,
      noTrailEnd,
      effectWindows,
      ringIndex: ringIndex !== null ? Number(ringIndex) : null,
      frictionHeat: Number(frictionHeat) || 0.0,
      phaseDelay: pDelay,
      hasCascadeWave: isCascade,
      dissolveThreshold: resolvedDissolveThreshold,
      attenuationStart: resolvedAttenuationStart,
      fadeExp: resolvedFadeExp,
      minDissolveFloor: resolvedMinDissolveFloor,
      hasTerminalFlare: effectiveHasTerminalFlare,
      terminalFlareTriggerRatio: resolvedTerminalFlareTriggerRatio,
      terminalFlareDuration: resolvedTerminalFlareDuration,
      terminalFlareIntensity: resolvedTerminalFlareIntensity,
      terminalFlareSizeMultiplier: resolvedTerminalFlareSizeMultiplier,
      terminalFlareColor: resolvedTerminalFlareColor,
      terminalFlareTargetColor: targetFlareColor,
      lastVelocity: velocity ? velocity.clone() : new THREE.Vector3()
    };
  }

  static createCrossetteBranches({
    parentParticle,
    branchDirs,
    speed,
    dir,
    splitOrigin,
    branchColor,
    remainingLife,
    hasNoTrail
  }) {
    const branches = [];
    const branchEffectType = hasNoTrail ? 'no-trail' : 'crysanthemum-trail';
    const branchEffects = hasNoTrail ? ['no-trail'] : ['crysanthemum-trail'];

    const crossetteCfg = FIREWORK_CONFIG.CROSSETTE || {};
    const branchSpeedMin = crossetteCfg.branchSpeedMin ?? 8.5;
    const branchSpeedMax = crossetteCfg.branchSpeedMax ?? 11.0;
    const forwardSpeedScale = speed * 0.28;

    for (let b = 0; b < 4; b++) {
      const branchImpulse = branchSpeedMin + Math.random() * (branchSpeedMax - branchSpeedMin);
      const bDir = branchDirs[b];
      const branchVel = new THREE.Vector3(
        dir.x * forwardSpeedScale + bDir.x * branchImpulse,
        dir.y * forwardSpeedScale + bDir.y * branchImpulse,
        dir.z * forwardSpeedScale + bDir.z * branchImpulse
      );

      const branchParticle = this.createParticle({
        position: new THREE.Vector3(
          splitOrigin.x,
          splitOrigin.y,
          splitOrigin.z
        ),
        velocity: branchVel,
        color: branchColor,
        baseColor: branchColor,
        color2: null,
        age: 0,
        maxLife: remainingLife,
        effectType: branchEffectType,
        crackle: false,
        crackleTriggered: false,
        phase: parentParticle.phase + b * 0.5,
        preset: {
          ...parentParticle.preset,
          crossette: false,
          noTrail: hasNoTrail
        },
        heightProfile: parentParticle.heightProfile,
        effectState: parentParticle.effectState,
        ghostDot: 0,
        spiralIndex: 0,
        isSpiralArm: false,
        particleIndex: parentParticle.particleIndex * 4 + b,
        totalParticleCount: parentParticle.totalParticleCount,
        shellId: parentParticle.shellId,
        isDyingEmber: false,
        isNestedTrigger: false,
        effects: branchEffects,
        hasBurstSmoke: Boolean(parentParticle.hasBurstSmoke),
        burstSmokeLimit: parentParticle.burstSmokeLimit ?? 0.33,
        isCrossette: false,
        crossetteSplitDone: true,
        isSecondBurst: false,
        secondBurstDone: true,
        secondBurstConfig: null,
        isChromaticWave: false,
        radialDistanceRatio: 0,
        renderSize: parentParticle.renderSize,
        renderOpacity: 1.0,
        dynamicsProfile: parentParticle.dynamicsProfile,
        dragCoefficient: parentParticle.dragCoefficient ?? BURST_BASE_DRAG,
        frictionHeat: 0.95
      });

      branchParticle.isCrossetteBranch = true;
      branchParticle.prevPosition = new THREE.Vector3(
        splitOrigin.x,
        splitOrigin.y,
        splitOrigin.z
      );

      branches.push(branchParticle);
    }

    return branches;
  }
}
