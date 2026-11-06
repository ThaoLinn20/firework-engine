import * as e from "three";
// src/config/fireworks.js
var t = {
	baseSpeed: 74,
	baseDrag: .46,
	dragJitter: .2,
	speedJitter: .1,
	lifeJitter: .15,
	hasApexBrake: !1,
	delayedGravity: !0,
	gravityRampStart: .32,
	gravityRampFull: .55,
	minGravity: .05,
	terminalVelocity: -15,
	flashEnd: .12,
	attenuationStart: .35,
	dissolveStart: .6,
	coolingStart: .55,
	emberStart: .85,
	thermalCooling: !0
}, n = {
	GRAVITY: -30,
	SYSTEM: {
		maxBurstParticles: 2e5,
		maxTrailParticles: 15e4,
		crackleCloudSpeed: 24,
		baseBurstPointSize: 26,
		burstFadeExponent: 2.15,
		defaultTrailColor: new e.Color(16766720),
		crackleSparkColor: new e.Color(16766842),
		colors: [
			16766720,
			16729344,
			49151,
			16738740,
			8388564,
			9055202
		]
	},
	BURST: {
		baseSpeed: t.baseSpeed,
		baseLife: 2.3,
		dissolveStart: t.dissolveStart,
		attenuationStart: t.attenuationStart,
		baseDrag: t.baseDrag,
		dragJitter: t.dragJitter,
		speedJitter: t.speedJitter,
		lifeJitter: t.lifeJitter,
		baseParticles: 85,
		minParticles: 45,
		maxParticles: 220,
		longBurnMultiplier: 2.2,
		longBurnDissolveStart: .72,
		longBurnGravityScale: .85,
		apexHangStart: .28,
		apexHangEnd: .48,
		apexHangBrakeRate: 9.5,
		apexExpansionDrag: 1.35,
		apexGravityThreshold: .14,
		apexSpeedMultiplier: 1.35,
		terminalVelocity: t.terminalVelocity,
		phaseExpansionEnd: .35,
		phaseApexEnd: .65,
		windCouplingScale: .25,
		windInfluenceLongBurn: .16,
		windInfluenceDyingEmber: .21,
		windInfluenceFloating: .11,
		starSizeVariance: .06,
		starBrightnessVariance: .1,
		trailStride: .45,
		maxTrailSubSteps: 3,
		defaultTrailSpawnChance: .95,
		throttling: {
			enabled: !0,
			threshold: .7,
			minFloor: .5,
			outlineMinFloor: .7
		}
	},
	DYNAMICS_PROFILES: {
		standard: { ...t },
		geometric: {
			...t,
			baseSpeed: 54,
			baseDrag: .4,
			dragJitter: .05,
			speedJitter: .04,
			lifeJitter: .1,
			gravityRampStart: .35,
			gravityRampFull: .6,
			minGravity: .08,
			terminalVelocity: -14
		},
		willow: {
			...t,
			baseSpeed: 58,
			baseDrag: .2,
			dragJitter: .12,
			lifeJitter: .25,
			gravityRampStart: .2,
			gravityRampFull: .45,
			minGravity: .1,
			terminalVelocity: -9.5,
			attenuationStart: .45,
			dissolveStart: .72,
			thermalCooling: !1
		},
		floating: {
			...t,
			baseSpeed: 36,
			baseDrag: .7,
			dragJitter: .16,
			speedJitter: .12,
			lifeJitter: .2,
			delayedGravity: !1,
			terminalVelocity: -5,
			attenuationStart: .3,
			dissolveStart: .65,
			thermalCooling: !1
		},
		crossette: {
			...t,
			baseSpeed: 62,
			baseDrag: .38,
			dragJitter: .1,
			speedJitter: .08,
			lifeJitter: .1,
			minGravity: .06,
			terminalVelocity: -14
		},
		horsetail: {
			...t,
			baseSpeed: 38,
			baseLife: 3.8,
			baseDrag: .18,
			dragJitter: .08,
			speedJitter: .06,
			lifeJitter: .15,
			gravityRampStart: .1,
			gravityRampFull: .32,
			minGravity: .2,
			terminalVelocity: -17,
			attenuationStart: .52,
			dissolveStart: .82,
			thermalCooling: !1
		},
		comet: {
			...t,
			baseSpeed: 70,
			baseDrag: .3,
			dragJitter: .14,
			gravityRampStart: .28,
			gravityRampFull: .52,
			minGravity: .06,
			terminalVelocity: -16
		}
	},
	SHAPE_MULTIPLIERS: {
		sphere: 1,
		ring: 1.4,
		heart: 1.81,
		flower: 1.58,
		cat: 1.55,
		fish: 1.48,
		smiley: 1.55,
		oval: 1.45,
		willow: 1.35,
		lightning: 1.4,
		star: 1.48,
		"double-helix": 1.15,
		"sparkling-branches": 1.25,
		sphere_uniform: 1.15,
		"sphere-uniform": 1.15,
		egg: 1.5,
		sphere_rings: 1.55,
		"sphere-rings": 1.55,
		horsetail: .58,
		text_word: 1,
		"text-word": 1
	},
	EFFECT_MULTIPLIERS: {
		standard: 1,
		crackle: 1.15,
		floral: 1.18,
		"falling-leaves": .78,
		heart: 1.22,
		strobe: 1.08,
		wave: 1.1,
		flow: 1.08,
		snow: 1.08,
		oval: 1.08,
		flower: 1.12,
		"crysanthemum-spiral": 1.25,
		"crysanthemum-spiral-v2": 1.35,
		"crysanthemum-cc": 1.25,
		"ghost-kamuro": .8,
		ghost: 1.15,
		"double-helix": .9,
		crossette: .6,
		"sparkle-trail": 1,
		"sparkling-branch-comet": 1,
		"sparkle-apex": 1,
		crysanthemum_discrete_trail: 1.25,
		"crysanthemum-discrete-trail": 1.25,
		horsetail: 1
	},
	BOUQUET: {
		default: {
			clusterCountMin: 10,
			clusterCountMax: 20,
			starLife: 3500,
			trailChance: 1
		},
		cometSphere: {
			clusterCountMin: 35,
			clusterCountMax: 45,
			starLife: 3500,
			trailChance: .9
		},
		v2: {
			clusterCountMin: 12,
			clusterCountMax: 22,
			particleCountMultiplier: .65,
			trailChance: 1
		}
	},
	COMET_TADPOLE: {
		headScale: 1.6,
		headBrightness: 11,
		trailLifeMultiplier: .9,
		trailWidthMultiplier: 1.4,
		trailMinDistSq: 1.44,
		swayAmpBase: .3,
		swayAmpMax: .7,
		swayFreq: 1.85,
		arrowFlurryStartProgress: .28,
		standoffDistance: .25,
		arrowInterval: .055,
		arrowSparksMin: 5,
		arrowSparksMax: 8,
		arrowSpeedMin: 28,
		arrowSpeedMax: 48,
		needleDragScale: .38,
		arrowStarLife: .48,
		flurryCount: 36,
		flurryStarLife: .58,
		sparkBrightnessMultiplier: 4.2,
		centerCoreBrightness: 7.5,
		variance: {
			sizeMin: .55,
			sizeMax: 1.65,
			densityMin: .5,
			densityMax: 1.8,
			deflectionMin: .25,
			deflectionMax: 3.2,
			wildDeflectionChance: .3,
			kickImpulseBase: 2.8
		},
		burstShell: {
			clusterCountMin: 18,
			clusterCountMax: 26,
			burstSpeedMin: 45,
			burstSpeedMax: 68,
			childStarLife: 2.2,
			gravityScale: .45
		},
		burstActivationRatio: .35
	},
	ERRATIC_DART: {
		activationRatio: .4,
		triggerRatioMin: .7,
		triggerRatioMax: .76,
		dartSpeedMin: 36,
		dartSpeedMax: 54,
		maxKinks: 2,
		kinkAngleMin: 42,
		kinkAngleMax: 68,
		kinkFlashMultiplier: 2,
		turnRateMax: 6.8,
		turnFreq: 7.2,
		wobbleAmp: 26,
		wobbleFreq: 22,
		dragAfterDart: .12,
		boostLifeDuration: .95,
		flashBrightnessMultiplier: 2.2,
		streakBrightnessMultiplier: 1.35,
		trailOpacity: .48,
		trailInterval: .075,
		trailParticleLife: .9,
		deflectionJitter: .85
	},
	ASCENT: {
		wobbleEnabled: !0,
		maxWobbleAmp: 1.15,
		midWobbleBoost: 1.5,
		baseWobbleFreq: 15,
		freqJitterRatio: .22,
		speedModulationAmp: .22,
		eccentricityMin: .12,
		eccentricityMax: .32,
		harmonicRatioMin: .18,
		harmonicRatioMax: .32,
		axisDriftAmp: .22,
		heightExponent: 1.4,
		trailDispersion: .22,
		midDispersionBoost: 2.2,
		subSteps: 2,
		midSubStepsBonus: 2,
		midExtraParticleChance: .75,
		trailLifeMultiplier: .65,
		trailOpacity: 1
	},
	SHELL_COMET_PHASES: {
		launchEndRatio: .35,
		launchStartIntensity: .25,
		fadeStartMin: .72,
		fadeStartMax: .82,
		turnOffChance: .75,
		dimTargetMin: .15,
		dimTargetMax: .25,
		sputterEnabled: !0,
		sputterShellChance: .4,
		sputterIntervalMin: .22,
		sputterIntervalMax: .48,
		sputterDurationMin: .035,
		sputterDurationMax: .075,
		sputterKickAmp: .85,
		endFlicker: !0
	},
	SMOKE: {
		qualityCapacities: {
			off: {
				launch: 0,
				aerial: 0
			},
			low: {
				launch: 150,
				aerial: 450
			},
			medium: {
				launch: 450,
				aerial: 1350
			},
			high: {
				launch: 5e3,
				aerial: 1e4
			},
			unlimited: {
				launch: 1e4,
				aerial: 15e3
			}
		},
		trailLifeMin: 4,
		trailLifeMax: 10,
		burstLifeMin: 15,
		burstLifeMax: 20,
		trailDrag: 1.6,
		burstDragMin: 2.8,
		burstDragMax: 3.6,
		trailBuoyancy: .35,
		burstBuoyancyMin: .55,
		burstBuoyancyMax: .9,
		trailBaseScale: 14,
		trailGrowth: 3.5,
		burstBaseScale: 32,
		burstGrowth: 3.2,
		trailOpacity: .24,
		burstOpacity: .18,
		disableFlightSmoke: !0,
		flightSmokeLifeMin: 3.5,
		flightSmokeLifeMax: 6.5,
		flightSmokeStepDist: 2.5,
		flightSmokeScale: 8.2,
		flightSmokeGrowth: 3.8,
		flightSmokeDrag: 1.8,
		flightSmokeBuoyancy: .38,
		flightSmokeOpacity: .21,
		hazeConsolidation: !0,
		hazeChance: .22,
		handoverRatio: .3,
		hazeLifeRatio: .7,
		hazeLifeMin: 10,
		hazeLifeMax: 18,
		hazeDrag: .65,
		hazeBuoyancy: .16,
		hazeGrowth: 1.45,
		coalescenceEnabled: !0,
		coalescenceNucleusRatio: .25,
		coalescenceExpansionBoost: 3.5,
		maxLights: 4,
		qualityMaxLights: {
			low: 1,
			medium: 1,
			high: 1,
			unlimited: 1
		},
		blastImpulseScale: 22,
		blastImpulseRadiusMultiplier: 1.5,
		ambientBurstSmokeChance: 1,
		ambientBurstPuffCount: {
			low: 1,
			medium: 2,
			high: 2,
			unlimited: 3
		},
		ambientBurstScaleMultiplier: .95,
		ambientBurstOpacityMultiplier: .75
	},
	SECOND_BURST: {
		minParticlesPerChild: 10,
		maxParticlesPerChild: 48,
		defaultScale: .35,
		minScale: .15,
		maxScale: .8,
		defaultLife: .9,
		lifeJitter: .2,
		baseSpeed: 38,
		maxConcurrentChildParticles: 35e3,
		audioThrottleMs: 45,
		maxAudioTriggersPerWindow: 3
	},
	CROSSETTE: {
		minSplitParticles: 6,
		maxSplitParticles: 8,
		branchSpeedMin: 8.5,
		branchSpeedMax: 11,
		trailSpawnChance: .4,
		trailLife: .3,
		trailIntensity: .6
	},
	HORSETAIL: {
		trailLife: .92,
		trailIntensity: .9,
		horizontalDragFactor: .995,
		gravityScale: .38
	}
}, r = 0, i = 1, a = 2, o = {
	center: new e.Vector3(0, .5, 340),
	launchRadiusX: 120,
	launchRadiusZ: 22,
	noEntryHalfWidth: 100,
	noEntryHalfDepth: 200,
	minBurstY: 75,
	maxBurstY: 300,
	minLaunchSpeedY: 65,
	maxLaunchSpeedY: 120,
	boundaryPadding: 12,
	arcRadius: 360,
	sectors: [
		{
			id: "right",
			minAngle: -40 * Math.PI / 180,
			maxAngle: 40 * Math.PI / 180
		},
		{
			id: "center",
			minAngle: 50 * Math.PI / 180,
			maxAngle: 130 * Math.PI / 180
		},
		{
			id: "left",
			minAngle: 140 * Math.PI / 180,
			maxAngle: 220 * Math.PI / 180
		}
	],
	get width() {
		return this.launchRadiusX * 2;
	},
	get depth() {
		return this.launchRadiusZ * 2;
	}
}, s = {
	renderer: {
		antialias: !0,
		exposure: 1.08,
		maxPixelRatio: 2
	},
	post: {
		enabled: !0,
		particleEdgeSoftness: .75,
		bloom: {
			enabled: !0,
			strength: .24,
			radius: .35,
			threshold: .7
		},
		aa: {
			enabled: !1,
			mode: "fxaa"
		}
	},
	smoke: {
		quality: "medium",
		density: 1,
		windSpeed: 1,
		windDirection: 25,
		unlimited: !1,
		lifespanMultiplier: 1,
		hazeConsolidation: !0,
		maxLights: 4
	},
	sky: {
		cloudCoverage: .55,
		cloudSpeed: 1,
		cloudDensity: 1,
		cloudScale: 1,
		moonDay: 15,
		moonPhase: "full",
		moonPosition: .8,
		moonAltitude: 500,
		moonSize: 85
	},
	performance: {
		fpsThreshold: 70,
		minFrameCount: 40
	},
	camera: {
		mode: "free",
		speed: 1
	},
	water: {
		mirrorEnabled: !0,
		reflectionResolution: "medium",
		resolutionScale: .5
	}
}, c = class {
	constructor() {
		this.listeners = {};
	}
	on(e, t) {
		return this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t), () => this.off(e, t);
	}
	off(e, t) {
		this.listeners[e] && (this.listeners[e] = this.listeners[e].filter((e) => e !== t));
	}
	emit(e, t) {
		if (this.listeners[e]) for (let n of this.listeners[e]) try {
			n(t);
		} catch (t) {
			console.error(`Error in event listener for event "${e}":`, t);
		}
	}
}, l = new c(), u = class {
	constructor(t = {}) {
		this.windSpeed = t.windSpeed ?? s.smoke?.windSpeed ?? 1, this.windDirection = t.windDirection ?? s.smoke?.windDirection ?? 25, this.turbulenceStrength = t.turbulenceStrength ?? .22, this.thermalDraft = t.thermalDraft ?? .8, this.baseWind = new e.Vector3(), this.currentWind = new e.Vector3(), this.eventSubscriptions = [], this.updateWindVectors(), this.setupEventListeners();
	}
	destroy() {
		for (let e of this.eventSubscriptions) e();
		this.eventSubscriptions = [];
	}
	setupEventListeners() {
		this.eventSubscriptions.push(l.on("wind:speed", (e) => this.setWindSpeed(e)), l.on("wind:direction", (e) => this.setWindDirection(e)));
	}
	updateWindVectors() {
		let e = this.windDirection % 360 * Math.PI / 180, t = 6.04;
		this.baseWind.set(Math.cos(e) * t, this.thermalDraft, Math.sin(e) * t), this.currentWind.copy(this.baseWind).multiplyScalar(this.windSpeed);
	}
	setWindSpeed(e) {
		this.windSpeed = Math.max(0, Number(e) || 0), this.updateWindVectors();
	}
	setWindDirection(e) {
		this.windDirection = Number(e) || 0, this.updateWindVectors();
	}
	setTurbulenceStrength(e) {
		this.turbulenceStrength = Math.max(0, Number(e) || 0);
	}
	getWindVectorAt(t = null, n = 0, r = null) {
		let i = r || new e.Vector3();
		if (i.copy(this.currentWind), t && this.turbulenceStrength > .001) {
			let e = .012, r = Math.sin(t.x * e + n * 1.25) * Math.cos(t.z * e), a = Math.cos(t.z * e + n * 1.15) * Math.sin(t.y * e);
			i.x += r * this.turbulenceStrength * 2.8, i.z += a * this.turbulenceStrength * 2.8;
		}
		return i;
	}
}, d = new u(), f = {
	0: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 5,
				y: 7
			},
			{
				x: 6,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 5,
				y: 6
			},
			{
				x: 6,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 5,
				y: 3
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 1,
				y: 2
			},
			{
				x: 5,
				y: 2
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			},
			{
				x: 4,
				y: 0
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	1: {
		width: 3,
		height: 10,
		points: [
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 2,
				y: 6
			},
			{
				x: 3,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 2,
				y: 3
			},
			{
				x: 3,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 2,
				y: 2
			},
			{
				x: 3,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			},
			{
				x: 4,
				y: 0
			}
		]
	},
	2: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 5,
				y: 7
			},
			{
				x: 6,
				y: 7
			},
			{
				x: 5,
				y: 6
			},
			{
				x: 6,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 1,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			},
			{
				x: 4,
				y: 0
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	3: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 5,
				y: 7
			},
			{
				x: 6,
				y: 7
			},
			{
				x: 5,
				y: 6
			},
			{
				x: 6,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 5,
				y: 3
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 5,
				y: 2
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			},
			{
				x: 4,
				y: 0
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	4: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 5,
				y: 7
			},
			{
				x: 6,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 5,
				y: 6
			},
			{
				x: 6,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 5,
				y: 3
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 5,
				y: 2
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	5: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 5,
				y: 3
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 5,
				y: 2
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			},
			{
				x: 4,
				y: 0
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	6: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 5,
				y: 3
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 1,
				y: 2
			},
			{
				x: 5,
				y: 2
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			},
			{
				x: 4,
				y: 0
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	7: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 5,
				y: 7
			},
			{
				x: 6,
				y: 7
			},
			{
				x: 5,
				y: 6
			},
			{
				x: 6,
				y: 6
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 5,
				y: 3
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 5,
				y: 2
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	8: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 5,
				y: 7
			},
			{
				x: 6,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 5,
				y: 6
			},
			{
				x: 6,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 5,
				y: 3
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 1,
				y: 2
			},
			{
				x: 5,
				y: 2
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			},
			{
				x: 4,
				y: 0
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	9: {
		width: 7,
		height: 10,
		points: [
			{
				x: 0,
				y: 9
			},
			{
				x: 1,
				y: 9
			},
			{
				x: 2,
				y: 9
			},
			{
				x: 3,
				y: 9
			},
			{
				x: 4,
				y: 9
			},
			{
				x: 5,
				y: 9
			},
			{
				x: 6,
				y: 9
			},
			{
				x: 0,
				y: 8
			},
			{
				x: 1,
				y: 8
			},
			{
				x: 2,
				y: 8
			},
			{
				x: 3,
				y: 8
			},
			{
				x: 4,
				y: 8
			},
			{
				x: 5,
				y: 8
			},
			{
				x: 6,
				y: 8
			},
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 5,
				y: 7
			},
			{
				x: 6,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 5,
				y: 6
			},
			{
				x: 6,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 5,
				y: 5
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 4
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 5,
				y: 3
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 5,
				y: 2
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 5,
				y: 1
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			},
			{
				x: 4,
				y: 0
			},
			{
				x: 5,
				y: 0
			},
			{
				x: 6,
				y: 0
			}
		]
	},
	A: {
		width: 5,
		height: 8,
		points: [
			{
				x: 2,
				y: 7
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 3,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 2,
				y: 3
			},
			{
				x: 3,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 4,
				y: 0
			}
		]
	},
	B: {
		width: 5,
		height: 8,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 2,
				y: 0
			},
			{
				x: 3,
				y: 0
			}
		]
	},
	C: {
		width: 5,
		height: 7,
		points: [
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	D: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			}
		]
	},
	E: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	F: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 0,
				y: 1
			}
		]
	},
	G: {
		width: 5,
		height: 7,
		points: [
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	H: {
		width: 5,
		height: 8,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 4,
				y: 0
			}
		]
	},
	I: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 2,
				y: 6
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 2,
				y: 3
			},
			{
				x: 2,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	J: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			}
		]
	},
	K: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 3,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 2,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 3,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	L: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	M: {
		width: 5,
		height: 8,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 3,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 4,
				y: 0
			}
		]
	},
	N: {
		width: 5,
		height: 8,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 3,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 3,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			},
			{
				x: 0,
				y: 0
			},
			{
				x: 4,
				y: 0
			}
		]
	},
	O: {
		width: 5,
		height: 7,
		points: [
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			}
		]
	},
	P: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 0,
				y: 1
			}
		]
	},
	Q: {
		width: 5,
		height: 8,
		points: [
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 2,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 0
			}
		]
	},
	R: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 2,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 3,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	S: {
		width: 5,
		height: 7,
		points: [
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 4
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			}
		]
	},
	T: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 2,
				y: 6
			},
			{
				x: 2,
				y: 5
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 2,
				y: 3
			},
			{
				x: 2,
				y: 2
			},
			{
				x: 2,
				y: 1
			}
		]
	},
	U: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			}
		]
	},
	V: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 3,
				y: 3
			},
			{
				x: 1,
				y: 2
			},
			{
				x: 3,
				y: 2
			},
			{
				x: 2,
				y: 1
			}
		]
	},
	W: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 0,
				y: 5
			},
			{
				x: 4,
				y: 5
			},
			{
				x: 0,
				y: 4
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 0,
				y: 3
			},
			{
				x: 2,
				y: 3
			},
			{
				x: 4,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 1,
				y: 2
			},
			{
				x: 3,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	X: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 3,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 4,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	},
	Y: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 0,
				y: 6
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 2,
				y: 3
			},
			{
				x: 2,
				y: 2
			},
			{
				x: 2,
				y: 1
			}
		]
	},
	Z: {
		width: 5,
		height: 7,
		points: [
			{
				x: 0,
				y: 7
			},
			{
				x: 1,
				y: 7
			},
			{
				x: 2,
				y: 7
			},
			{
				x: 3,
				y: 7
			},
			{
				x: 4,
				y: 7
			},
			{
				x: 4,
				y: 6
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 0,
				y: 2
			},
			{
				x: 0,
				y: 1
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 2,
				y: 1
			},
			{
				x: 3,
				y: 1
			},
			{
				x: 4,
				y: 1
			}
		]
	}
};
function p(e) {
	if (!e || typeof e != "string") return "";
	let t = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	return t = t.replace(/đ/g, "d").replace(/Đ/g, "D"), t = t.toUpperCase().replace(/[^A-Z0-9\s]/g, " "), t.replace(/\s+/g, " ").trim();
}
function m(e, t = 4, n = 8) {
	let r = p(e);
	if (!r) return [];
	let i = r.split(/\s+/), a = [];
	for (let e of i) {
		if (!e) continue;
		let r = e.length > n ? e.slice(0, n) : e;
		if (a.push(r), a.length >= t) break;
	}
	return a;
}
function h(t, n = {}) {
	if (!t || typeof t != "string") return [];
	let r = p(t).replace(/\s+/g, "");
	if (!r) return [];
	let i = n.scale ?? .38, a = n.letterSpacing ?? 1.5, o = [], s = 0;
	for (let e = 0; e < r.length; e++) {
		let t = f[r[e]];
		t && (o.push({
			glyph: t,
			offsetX: s
		}), s += t.width + a);
	}
	if (o.length === 0) return [];
	let c = (s - a) * .5, l = [];
	for (let t = 0; t < o.length; t++) {
		let { glyph: n, offsetX: r } = o[t];
		for (let t = 0; t < n.points.length; t++) {
			let a = n.points[t], o = (r + a.x - c) * i, s = (a.y - 4) * i, u = (Math.random() - .5) * .05;
			l.push(new e.Vector3(o, s, u));
		}
	}
	return l;
}
var g = {
	TEXT_GLYPHS: f,
	sanitizeText: p,
	splitCommentIntoWords: m,
	layoutWord: h
}, _ = class {
	static heartPoint(e) {
		return {
			x: 16 * Math.sin(e) ** 3,
			y: 13 * Math.cos(e) - 5 * Math.cos(2 * e) - 2 * Math.cos(3 * e) - Math.cos(4 * e)
		};
	}
	static rotate3D(e, t, n, r, i, a) {
		let o = e, s = t, c = n, l = Math.cos(r), u = Math.sin(r), d = s * l - c * u, f = s * u + c * l;
		s = d, c = f;
		let p = Math.cos(i), m = Math.sin(i), h = o * p + c * m, g = -o * m + c * p;
		o = h, c = g;
		let _ = Math.cos(a), v = Math.sin(a);
		return {
			x: o * _ - s * v,
			y: o * v + s * _,
			z: c
		};
	}
	static resolveShape(e) {
		switch (e) {
			case "ring":
			case "heart":
			case "star":
			case "willow":
			case "willow-up":
			case "lightning":
			case "oval":
			case "flower":
			case "cat":
			case "fish":
			case "smiley":
			case "galaxy":
			case "double-helix":
			case "sparkling-branches":
			case "sphere_uniform":
			case "egg":
			case "sphere_rings":
			case "horsetail":
			case "text_word": return e;
			case "text-word":
			case "text": return "text_word";
			case "horsetail_waterfall":
			case "waterfall": return "horsetail";
			case "sphere-rings": return "sphere_rings";
			case "sphere-uniform": return "sphere_uniform";
			case "sparkling-comet-branches":
			case "sparklingCometBranches": return "sparkling-branches";
			case "half-flash": return "half-flash";
			case "split-flash": return "split-flash";
			case "upward-spray": return "upward-spray";
			case "hearth": return "heart";
			default: return "sphere";
		}
	}
	static direction(t, n, r, i, a = null) {
		if (t === "text_word") {
			let t = a?.textWord || a?.word || "HELLO", n = a?.textScale ?? .38, i = a?.letterSpacing ?? 1.5, o = `${t}_${n}_${i}`, s = a?.textPoints;
			if (s && Array.isArray(s) && s.length !== 0 && a?._glyphCacheKey === o || (s = h(t, {
				scale: n,
				letterSpacing: i
			}), a && (a.textPoints = s, a._glyphCacheKey = o)), !s || s.length === 0) return new e.Vector3(0, 1, 0);
			let c = s[r % s.length], l = (a?.tiltAngle ?? 18) * (Math.PI / 180), u = Math.cos(l), d = Math.sin(l), f = c.y * u - c.z * d, p = c.y * d + c.z * u;
			return new e.Vector3(c.x, f, p);
		}
		if (t === "sparkling-branches" || t === "sparkling-comet-branches") {
			let t = a?.branchCount || 5, n = a?.cometsPerBranch || 5, i = Math.floor(r / n) % t, o = i / t * Math.PI * 2, s = i % 3, c = s === 0 ? .65 : s === 1 ? .28 : -.12, l = new e.Vector3(Math.cos(o), c, Math.sin(o)).normalize(), u = Math.abs(l.y) > .9 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), d = new e.Vector3().crossVectors(l, u).normalize(), f = new e.Vector3().crossVectors(d, l).normalize(), p = .05 + Math.random() * .12, m = Math.random() * Math.PI * 2, h = .9 + Math.random() * .25;
			return l.clone().addScaledVector(d, Math.cos(m) * Math.sin(p)).addScaledVector(f, Math.sin(m) * Math.sin(p)).normalize().multiplyScalar(h * 1.65);
		}
		if (t === "upward-spray") {
			let t = Math.random() * Math.PI / 2.2, n = Math.random() * Math.PI * 2, r = Math.sin(t) * Math.cos(n), i = Math.sin(t) * Math.sin(n), a = Math.cos(t) + 1.2;
			return new e.Vector3(r, a, i).normalize();
		}
		if (t === "galaxy") {
			let t = r % 3, n = Math.max(1, Math.floor(Math.max(i, 1) / 3)), a = Math.floor(r / 3) / n, o = a * Math.PI * 5 + Math.PI * 2 / 3 * t, s = .65 + .85 * a, c = Math.cos(o) * s, l = Math.sin(o) * s, u = (Math.random() - .5) * .1 * s;
			return new e.Vector3(c, l, u);
		}
		if (t === "double-helix") {
			let t = r % 2, n = Math.max(1, Math.floor(Math.max(i, 1) / 2)), a = Math.floor(r / 2) / Math.max(1, n - 1), o = a * 3.5 * Math.PI * 2 + t * Math.PI, s = (a - .5) * 2, c = Math.sqrt(Math.max(.08, 1 - s * s * .45)) * .95, l = Math.cos(o) * c + (Math.random() - .5) * .08, u = Math.sin(o) * c + (Math.random() - .5) * .08, d = s + (Math.random() - .5) * .06;
			return new e.Vector3(l, d, u);
		}
		if (t === "split-flash") {
			let t = Math.max(i - 5, 1);
			if (r < t) {
				let n = r % 2 == 0, i = .2 + (Math.floor(r / 2) / Math.max(Math.floor(t / 2), 1)) ** .3 * .8, a = Math.sqrt(Math.max(0, 1 - i * i)), o = Math.PI * (3 - Math.sqrt(5)) * r, s = .02, c = n ? i : -i;
				return new e.Vector3(Math.cos(o) * a + (Math.random() - .5) * s, c + (Math.random() - .5) * s * .7, Math.sin(o) * a + (Math.random() - .5) * s).normalize();
			}
			{
				let n = (r - t) / 5 * Math.PI * 2, i = Math.cos(n), a = Math.sin(n);
				return new e.Vector3(i, 0, a).normalize().multiplyScalar(1.25);
			}
		}
		if (t === "half-flash") {
			let t = Math.max(i - 4, 1);
			if (r < t) {
				let n = r / t, i = Math.sqrt(Math.max(0, 1 - n * n)), a = Math.PI * (3 - Math.sqrt(5)) * r, o = .02;
				return new e.Vector3(Math.cos(a) * i + (Math.random() - .5) * o, n + (Math.random() - .5) * o * .7, Math.sin(a) * i + (Math.random() - .5) * o).normalize();
			}
			{
				let n = (r - t) / 4 * Math.PI * 2, i = Math.cos(n) * .707, a = Math.sin(n) * .707;
				return new e.Vector3(i, -.707, a).normalize().multiplyScalar(1.15);
			}
		}
		if (t === "sphere") {
			let t = Math.max(i, 1), n = 1 - (r + .5) / t * 2, a = Math.sqrt(Math.max(0, 1 - n * n)), o = Math.PI * (3 - Math.sqrt(5)) * r, s = .045;
			return new e.Vector3(Math.cos(o) * a + (Math.random() - .5) * s, n + (Math.random() - .5) * s * .7, Math.sin(o) * a + (Math.random() - .5) * s).normalize();
		}
		if (t === "heart") {
			let t = a?.heartRotation;
			t || (t = {
				x: (Math.random() - .5) * .3,
				y: (Math.random() - .5) * .3,
				z: (Math.random() - .5) * .2
			}, a && (a.heartRotation = t));
			let n = a?.shapeRenderMode === "outline" || !a?.shapeRenderMode, i;
			i = n ? r % 120 / 120 * Math.PI * 2 : Math.random() * Math.PI * 2;
			let o = 16 * Math.sin(i) ** 3, s = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i), c = 1 + (Math.sin(i * 3) * .04 + Math.cos(i * 5) * .03);
			o *= c, s *= c;
			let l = this.rotate3D(o, s, 0, t.x, t.y, t.z), u = new e.Vector3(l.x, l.y, l.z), d = u.length();
			return d === 0 ? new e.Vector3(0, 1, 0) : u.normalize().multiplyScalar(d / 20);
		}
		if (t === "ring") {
			let t = !!a?.doubleRing, o = a?.shapeRenderMode === "outline" || !a?.shapeRenderMode, s = a?.shapeRenderMode === "jupiter";
			if (Math.max(.01, a?.outlineThickness ?? (o ? .03 : .06)), s) {
				let t = Math.min(.9, Math.max(.1, a?.ringCoreRatio ?? .42)), i = Math.max(.01, a?.ringCoreJitter ?? .08);
				if (r % Math.max(2, Math.round(1 / t)) === 0) {
					let t = .2 + Math.random() * .22, r = n + (Math.random() - .5) * .08;
					return new e.Vector3(Math.cos(r) * t + (Math.random() - .5) * i, (Math.random() - .5) * i * .7, Math.sin(r) * t + (Math.random() - .5) * i).normalize();
				}
			}
			let c = r / Math.max(1, i) * Math.PI * 2 * (t ? 2 : 1), l = 0, u = 0, d = a?.shellType === "ring", f = a?.shellType === "ringV2" || a?.shellType === "ring_v2";
			!d && !f && (l = Math.sin(c * 3) * .05 + Math.cos(c * 5) * .03, u = (Math.random() - .5) * .02);
			let p = .78 + l + u, m = (Math.random() - .5) * .03;
			return t && (m += r % 2 == 0 ? .08 : -.08), new e.Vector3(Math.cos(c) * p, m, Math.sin(c) * p);
		}
		if (t === "star") {
			let t = a?.starRotation;
			t || (t = {
				x: (Math.random() - .5) * .3,
				y: (Math.random() - .5) * .3,
				z: (Math.random() - .5) * .2
			}, a && (a.starRotation = t));
			let r = n % (Math.PI * 2 / 5) / (Math.PI * 2 / 5), i = .38 + .62 * Math.abs(r * 2 - 1) ** 1.8, o = Math.cos(n) * i, s = Math.sin(n) * i, c = (Math.random() - .5) * .08, l = this.rotate3D(o, s, c, t.x, t.y, t.z);
			return new e.Vector3(l.x, l.y, l.z);
		}
		if (t === "willow") return new e.Vector3((Math.random() - .5) * .85, .25 + Math.random() * .55, (Math.random() - .5) * .85).normalize();
		if (t === "willow-up") return new e.Vector3((Math.random() - .5) * 2, Math.random() * 1 + .2, (Math.random() - .5) * 2).normalize();
		if (t === "lightning") {
			let t = Math.sin(n * 6) * .55;
			return new e.Vector3(t + (Math.random() - .5) * .25, .55 + Math.random() * .45, (Math.random() - .5) * .3).normalize();
		}
		if (t === "oval") return new e.Vector3(Math.cos(n) * 1, Math.sin(n) * .55, (Math.random() - .5) * .22).normalize();
		if (t === "flower") {
			let t = .32 + Math.abs(Math.sin(n * 6)) * .95;
			return new e.Vector3(Math.cos(n) * t, Math.sin(n) * t, (Math.random() - .5) * .2).normalize();
		}
		if (t === "cat") {
			let t = r / Math.max(i - 1, 1);
			return t < .2 ? new e.Vector3(-.45 + Math.random() * .2, .9 + Math.random() * .15, (Math.random() - .5) * .1).normalize() : t < .4 ? new e.Vector3(.25 + Math.random() * .2, .9 + Math.random() * .15, (Math.random() - .5) * .1).normalize() : new e.Vector3(Math.cos(n) * .78, Math.sin(n) * .62, (Math.random() - .5) * .16).normalize();
		}
		if (t === "fish") {
			let t = .55 + Math.random() * .4;
			return new e.Vector3(Math.cos(n) * 1.1 * t, Math.sin(n) * .4 * t, (Math.random() - .5) * .16).normalize();
		}
		if (t === "smiley") {
			let t = r / Math.max(i - 1, 1);
			if (t < .12) return new e.Vector3(-.35 + Math.random() * .08, .35 + Math.random() * .08, (Math.random() - .5) * .08).normalize();
			if (t < .24) return new e.Vector3(.28 + Math.random() * .08, .35 + Math.random() * .08, (Math.random() - .5) * .08).normalize();
			if (t < .68) {
				let n = (t - .24) / .44, r = Math.PI + n * Math.PI;
				return new e.Vector3(Math.cos(r) * .48, Math.sin(r) * .42 + .05, (Math.random() - .5) * .08).normalize();
			}
			return new e.Vector3(Math.cos(n) * .92, Math.sin(n) * .92, (Math.random() - .5) * .12).normalize();
		}
		if (t === "egg") {
			let t = Math.max(1, i), n = Math.PI * (3 - Math.sqrt(5)), a = 1 - (2 * r + 1) / t, o = Math.sqrt(Math.max(0, 1 - a * a)), s = r * n, c = Math.cos(s) * o, l = Math.sin(s) * o, u = 1 - .16 * a, d = a * 1.18, f = c * u, p = l * u, m = 1 + (Math.random() - .5) * .09;
			return new e.Vector3(f * m, d * m, p * m);
		}
		if (t === "sphere_rings" || t === "sphere-rings") {
			let t = Math.max(1, i), n = a?.ringCount || 5, o = Math.PI / 180 * 58, s = [], c = [];
			for (let e = 0; e < n; e++) {
				let t = n === 1 ? 0 : -o + 2 * o * e / (n - 1);
				s.push(t), c.push(Math.cos(t));
			}
			let l = c.reduce((e, t) => e + t, 0), u = [], d = 0;
			for (let e = 0; e < n; e++) {
				let n = Math.max(4, Math.round(t * c[e] / l));
				d += n, u.push(d);
			}
			let f = 0, p = 0;
			for (let e = 0; e < n; e++) if (r < u[e] || e === n - 1) {
				f = e, p = e === 0 ? 0 : u[e - 1];
				break;
			}
			let m = (f === n - 1 ? t : u[f]) - p, h = r - p, g = s[f], _ = Math.cos(g), v = Math.sin(g), y = f * 1.6180339887, b = h / Math.max(1, m) * Math.PI * 2 + y, x = 1 + (Math.random() - .5) * .04, S = new e.Vector3(_ * Math.cos(b) * x, v * x, _ * Math.sin(b) * x);
			return S.ringIndex = f, S;
		}
		if (t === "sphere_uniform" || t === "sphere-uniform") {
			let t = Math.max(1, i), n = Math.PI * (3 - Math.sqrt(5)), a = 1 - (2 * r + 1) / t, o = Math.sqrt(Math.max(0, 1 - a * a)), s = r * n, c = Math.cos(s) * o, l = Math.sin(s) * o;
			return new e.Vector3(c, a, l).normalize();
		}
		if (t === "horsetail" || t === "waterfall") {
			let t = Math.max(i || 1, 1), n = r === void 0 ? Math.floor(Math.random() * t) : r, a = Math.PI * (3 - Math.sqrt(5)) * n, o = (n + .5) / t, s = .2 + Math.sqrt(o) * .64, c = Math.cos(s), l = Math.sin(s), u = Math.cos(a) * l, d = Math.sin(a) * l;
			return new e.Vector3(u, c, d).normalize();
		}
		return new e.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
	}
}, v = class t {
	static getDynamicsProfile(e, t, r = null) {
		let i = n.DYNAMICS_PROFILES;
		if (!i) return null;
		if (r?.dynamicsProfile && i[r.dynamicsProfile]) return i[r.dynamicsProfile];
		let a = (e || r?.dynamicsType || r?.dynamics || r?.effectType || "").toLowerCase();
		if (a === "willow" || a === "willow-up" || a === "willow-arch" || a === "kamuro" || a === "ghost-kamuro" || a === "falling-comets" || a === "falling-comets-glitter") return i.willow;
		if (a === "crossette") return i.crossette;
		if (a === "horsetail" || a === "horsetail_waterfall" || a === "waterfall") return i.horsetail;
		if (a === "flow" || a === "snow" || a === "slow-burst" || a === "slow_burst" || a === "wave" || a === "falling-leaves" || a === "swimming-star" || a === "galaxy-spin") return i.floating;
		if (a === "bouquet-comet" || a === "comet-ring" || a === "sparkling-branches" || a === "sparkling-branch-comet" || a === "tadpole-spiral" || a === "half-flash" || a === "split-flash") return i.comet;
		let o = (t || r?.shapeType || r?.shape || "").toLowerCase();
		return o === "ring" || o === "heart" || o === "star" || o === "smiley" || o === "cat" || o === "fish" || o === "flower" ? i.geometric : i.standard;
	}
	static isEffectActive(e, t) {
		if (!e) return !1;
		let n = e.age ?? 0, r = t === "noTrail" || t === "notrail" ? "no-trail" : t === "tadpole_flurry" ? "tadpole-flurry" : t === "erratic_dart" ? "erratic-dart" : t;
		if (e.effectWindows && e.effectWindows[r]) {
			let t = e.effectWindows[r];
			for (let e = 0; e < t.length; e++) {
				let r = t[e];
				if (n >= r.start && n <= r.end) return !0;
			}
			return !1;
		}
		if (t === "strobe" || t === "white-strobe" || t === "glitter-strobe") {
			if (e.strobeStart !== void 0) return n >= e.strobeStart && n <= e.strobeEnd;
		} else if (t === "ghost") {
			if (e.ghostStart !== void 0) return n >= e.ghostStart && n <= e.ghostEnd;
		} else if (t === "crackle") {
			if (e.crackleStart !== void 0) return n >= e.crackleStart && n <= e.crackleEnd;
		} else if (t === "tadpole-flurry" || t === "tadpole_flurry") {
			if (e.tadpoleStart !== void 0) return n >= e.tadpoleStart && n <= e.tadpoleEnd;
		} else if (t === "burst-smoke") {
			if (e.burstSmokeStart !== void 0) return n >= e.burstSmokeStart && n <= e.burstSmokeEnd;
		} else if (t === "no-trail" || t === "noTrail" || t === "notrail") {
			if (e.noTrailStart !== void 0) return n >= e.noTrailStart && n <= (e.noTrailEnd ?? e.maxLife ?? 9999);
			if (e.hasNoTrail) return !0;
		}
		if (e.effectType === t || (t === "no-trail" || t === "noTrail" || t === "notrail") && (e.effectType === "no-trail" || e.effectType === "notrail" || e.effectType === "noTrail")) return !0;
		let i = Array.isArray(e.effects) && e.effects.length > 0 ? e.effects : Array.isArray(e.preset?.effects) ? e.preset.effects : null;
		if (!i) return !1;
		let a = t === "noTrail" || t === "notrail" ? "no-trail" : t;
		for (let t = 0; t < i.length; t++) {
			let r = i[t];
			if (typeof r == "string") {
				if ((r === "noTrail" || r === "notrail" ? "no-trail" : r) === a) return !0;
			} else if (r && typeof r == "object") {
				let t = r.type || r.key;
				if ((t === "noTrail" || t === "notrail") && (t = "no-trail"), t === a) {
					let t = r.start === void 0 ? 0 : Number(r.start), i = r.end === void 0 ? e.maxLife ?? 9999 : Number(r.end);
					if (r.startRatio !== void 0 && !isNaN(r.startRatio) && (t = Number(r.startRatio) * (e.maxLife ?? 1)), r.endRatio !== void 0 && !isNaN(r.endRatio) && (i = Number(r.endRatio) * (e.maxLife ?? 1)), n >= t && n <= i) return !0;
				}
			}
		}
		return !1;
	}
	static SUPPORTED_EFFECTS = /* @__PURE__ */ new Set(/* @__PURE__ */ "standard.crackle.flow.snow.wave.flower.floral.falling-leaves.strobe.white-strobe.glitter-strobe.heart.oval.falling-comets.falling-comets-glitter.crysanthemum-trail.crysanthemum-smoke.crysanthemum-spiral.crysanthemum-spiral-v2.crysanthemum-cc.ghost.galaxy-spin.comet-ring.bouquet-comet.willow.swimming-star.ghost-kamuro.double-helix.no-trail.notrail.no-burst.crossette.sparkle-trail.sparkle-apex.sparkling-branch-comet.tadpole-spiral.long-burn.apex-hang.crysanthemum_discrete_trail.crysanthemum-discrete-trail.sphere_rings_wave.sphere-rings-wave.slow-burst.slow_burst.horsetail.horsetail_waterfall".split("."));
	static effectsRegistry = /* @__PURE__ */ new Map();
	static registerEffect(e, t) {
		this.effectsRegistry.set(e, t), this.SUPPORTED_EFFECTS.add(e);
	}
	static normalizeEffectType(e) {
		return this.SUPPORTED_EFFECTS.has(e) ? e : "standard";
	}
	static clamp(e, t, n) {
		return Math.min(n, Math.max(t, e));
	}
	static lerp(e, t, n) {
		return e + (t - e) * n;
	}
	static createHeightProfile(e, t = {}) {
		let n = t.minBurstY ?? 40, r = t.maxBurstY ?? 300, i = t.sizeMin ?? .85, a = t.sizeMax ?? 1.55, o = t.brightnessMin ?? .9, s = t.brightnessMax ?? 1.9, c = t.sizeCurve ?? .9, l = t.brightnessCurve ?? 1.15, u = this.clamp((e - n) / Math.max(r - n, 1), 0, 1), d = u ** +c, f = u ** +l;
		return {
			normalized: u,
			sizeMultiplier: this.lerp(i, a, d),
			brightnessMultiplier: this.lerp(o, s, f)
		};
	}
	static initialize(t, n, r = null) {
		let i = this.normalizeEffectType(t), a = Array.isArray(r?.effects) ? r.effects : [], o = a.map((e) => typeof e == "object" && e ? e.type || e.key : e), s = !!r?.strobe || o.includes("strobe") || o.includes("white-strobe") || o.includes("glitter-strobe"), c = !!r?.crackle || o.includes("crackle"), l = !!r?.ghost || o.includes("ghost") || i === "ghost", u = !!r?.flow || o.includes("flow") || i === "flow", d = !!r?.crossette || o.includes("crossette") || i === "crossette", f = !!r?.slowBurst || !!r?.["slow-burst"] || !!r?.slow_burst || o.includes("slow-burst") || o.includes("slow_burst") || i === "slow-burst" || i === "slow_burst", p = a.find((e) => typeof e == "object" && !!e && ((e.type || e.key) === "no-trail" || (e.type || e.key) === "notrail" || (e.type || e.key) === "noTrail")), m = !!r?.noTrail || o.includes("no-trail") || o.includes("notrail") || i === "notrail" || i === "no-trail", h = p ? {
			start: p.start === void 0 ? void 0 : Number(p.start),
			end: p.end === void 0 ? void 0 : Number(p.end),
			startRatio: p.startRatio === void 0 ? void 0 : Number(p.startRatio),
			endRatio: p.endRatio === void 0 ? void 0 : Number(p.endRatio)
		} : null, g = new Float32Array(n), _ = new Float32Array(n), v = new Float32Array(n), y = 0;
		for (let e = 0; e < n; e++) g[e] = (Math.random() - .5) * 3.2, s || i === "strobe" || i === "white-strobe" || i === "glitter-strobe" || i === "falling-comets-glitter" ? (e % 12 == 0 && (y = Math.random() * Math.PI * 2), _[e] = y) : _[e] = Math.random() * Math.PI * 2, v[e] = .25 + Math.random() * .95;
		let b = {
			x: 1,
			y: 0,
			z: 0
		};
		if (l) {
			let t = new e.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize();
			b = {
				x: t.x,
				y: t.y,
				z: t.z
			};
		}
		return {
			effectType: i,
			strobe: s,
			crackle: c,
			ghost: l,
			flow: u,
			crossette: d,
			slowBurst: f,
			noTrail: m && !h,
			noTrailTiming: h,
			spin: g,
			phase: _,
			turbulence: v,
			ghostAxis: b
		};
	}
	static materialOpacity(e, t, n, r) {
		let i = this.normalizeEffectType(e), a = this.effectsRegistry.get(i);
		return a && typeof a.materialOpacity == "function" ? a.materialOpacity(t, n, r) : r;
	}
	static updateVelocity(e, t, n, r, i, a) {
		let o = this.normalizeEffectType(a?.effectType ?? "standard"), s = .3, c, l = !1, u = !1, d = .8, f = .35, p, m = !1, h = 2.5, g = .15, _ = this.effectsRegistry.get(o);
		if (_ && typeof _.updateVelocity == "function") {
			let o = _.updateVelocity(e, t, n, r, i, a);
			o && (o.gravityScale !== void 0 && (s = o.gravityScale), o.dragCoefficient !== void 0 && (c = o.dragCoefficient), o.drag !== void 0 && (c = o.drag), o.emitSpark !== void 0 && (l = o.emitSpark), o.spawnTrail !== void 0 && (u = o.spawnTrail), o.trailLife !== void 0 && (d = o.trailLife), o.trailIntensity !== void 0 && (f = o.trailIntensity), o.trailSpawnChance !== void 0 && (p = o.trailSpawnChance), o.spawnSmoke !== void 0 && (m = o.spawnSmoke), o.smokeLife !== void 0 && (h = o.smokeLife), o.smokeOpacity !== void 0 && (g = o.smokeOpacity));
		}
		if (a?.strobe && o !== "strobe" && o !== "white-strobe" && o !== "glitter-strobe" && (s = .2, e.multiplyScalar(.996)), a?.crackle && o !== "crackle") {
			s = .18;
			let n = (a.turbulence[t] || 1) * .03;
			e.x += (Math.random() - .5) * n, e.y += (Math.random() - .5) * n * .5, e.z += (Math.random() - .5) * n, l = !1;
		}
		if (a?.flow && o !== "flow") {
			let i = (a.spin[t] || 0) * n, o = Math.cos(i), c = Math.sin(i), l = e.x, p = e.z;
			e.x = l * o - p * c, e.z = l * c + p * o, e.y += Math.sin(r * 3 + (a.phase[t] || 0)) * .02, e.multiplyScalar(.998), s = Math.min(s, .12), u = !0, d = Math.max(d, .25), f = Math.max(f, .3);
		}
		if (a?.slowBurst && o !== "snow" && o !== "slow-burst" && o !== "slow_burst") {
			let i = Math.sin(r * 2 + (a.phase[t] || 0)) * .04;
			e.x += i * n, e.z += i * n * .7, e.multiplyScalar(.996), s = Math.min(s, .05);
		}
		if (a?.shapeType === "half-flash" && t >= a.phase.length - 4 && (u = !0, d = .42, f = .85), a?.shapeType === "split-flash" && t >= a.phase.length - 5 && (u = !0, d = .38, f = .9), a?.noTrail) u = !1;
		else if (a?.noTrailTiming) {
			let e = a.noTrailTiming, t = e.startRatio === void 0 ? e.start ?? 0 : e.startRatio * i, n = e.endRatio === void 0 ? e.end ?? i : e.endRatio * i;
			r >= t && r <= n && (u = !1);
		}
		return {
			gravityScale: s,
			dragCoefficient: c,
			emitSpark: l,
			spawnTrail: u,
			trailLife: d,
			trailIntensity: f,
			trailSpawnChance: p,
			spawnSmoke: m,
			smokeLife: h,
			smokeOpacity: g
		};
	}
	static processErraticDart(t, r, i, a) {
		if (!t.hasErraticDart) return a;
		let o = n.ERRATIC_DART || {}, s = t.erraticDartTriggerTime === void 0 ? i >= (t.erraticDartTriggerRatio ?? .72) : t.age >= t.erraticDartTriggerTime;
		if (!t.erraticDartTriggered && s) {
			t.erraticDartTriggered = !0;
			let n = o.dartSpeedMin ?? 36, r = o.dartSpeedMax ?? 54, i = n + Math.random() * (r - n), a = Math.random() * Math.PI * 2, s = Math.acos(Math.random() * 2 - 1), c = new e.Vector3(Math.sin(s) * Math.cos(a), Math.sin(s) * Math.sin(a), Math.cos(s));
			if (t.velocity.length() > .1) {
				let e = t.velocity.clone().normalize();
				c.addScaledVector(e, .2).normalize();
			}
			t.velocity.copy(c.multiplyScalar(i)), t.dragCoefficient = o.dragAfterDart ?? .12;
			let l = o.boostLifeDuration ?? .95;
			t.maxLife = t.age + l, t.erraticDartFlash = o.flashBrightnessMultiplier ?? 3.8;
			let u = o.maxKinks ?? 2, d = Math.random() < .6 && u >= 2 ? 2 : 1, f = .1 + Math.random() * .08;
			t.erraticDartKinkTimes = d === 2 ? [f, f + .22 + Math.random() * .16] : [.14 + Math.random() * .14], t.erraticDartKinkIndex = 0, t.erraticDartTimer = 0;
		}
		let c = a;
		if (t.erraticDartTriggered) {
			if (c = .05, t.erraticDartFlash && t.erraticDartFlash > 1 && (t.erraticDartFlash = Math.max(1, t.erraticDartFlash - r * 1.8)), !t.erraticDartKinkTimes) {
				let e = o.maxKinks ?? 2, n = Math.random() < .6 && e >= 2 ? 2 : 1, r = .1 + Math.random() * .08;
				t.erraticDartKinkTimes = n === 2 ? [r, r + .22 + Math.random() * .16] : [.14 + Math.random() * .14], t.erraticDartKinkIndex = 0, t.erraticDartTimer = 0;
			}
			t.erraticDartTimer = (t.erraticDartTimer || 0) + r;
			let n = t.velocity.length();
			if (n > 1 && t.erraticDartKinkTimes) {
				let r = t.erraticDartKinkIndex ?? 0;
				if (r < t.erraticDartKinkTimes.length && t.erraticDartTimer >= t.erraticDartKinkTimes[r]) {
					t.erraticDartKinkIndex = r + 1;
					let i = t.velocity.clone().normalize(), a = Math.abs(i.y) > .88 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), s = new e.Vector3().crossVectors(i, a).normalize(), c = new e.Vector3().crossVectors(s, i).normalize(), l = Math.random() * Math.PI * 2, u = new e.Vector3().addScaledVector(s, Math.cos(l)).addScaledVector(c, Math.sin(l)).normalize(), d = o.kinkAngleMin ?? 42, f = o.kinkAngleMax ?? 68, p = (d + Math.random() * (f - d)) * Math.PI / 180, m = new e.Vector3().addScaledVector(i, Math.cos(p)).addScaledVector(u, Math.sin(p)).normalize();
					t.velocity.copy(m.multiplyScalar(n));
					let h = o.kinkFlashMultiplier ?? 2.6;
					t.erraticDartFlash = Math.max(t.erraticDartFlash || 1, h);
				}
			}
		}
		return c;
	}
	static resolveParticleColor(n, r, i = {}, a = null) {
		let { strobeFreqMultiplier: o = 1, isSpiralIgnited: s = !0, spiralFlashBonus: c = 1, isRingIgnited: l = !0, ringFlashBonus: u = 1, hasGhostFlare: d = !1, profile: f = null } = i, p = n.baseColor.r, m = n.baseColor.g, h = n.baseColor.b;
		if (n.hasErraticDart && n.erraticDartTriggered) {
			if (n.effectType === "white-strobe" || Array.isArray(n.effects) && n.effects.includes("white-strobe") || Array.isArray(n.preset?.effects) && n.preset.effects.includes("white-strobe")) {
				let t = (Math.sin(n.age * 38 * o) + 1) * .5;
				p = e.MathUtils.lerp(p, 2.2, t), m = e.MathUtils.lerp(m, 2.2, t), h = e.MathUtils.lerp(h, 2.2, t);
			}
			return a ? (a.r = p, a.g = m, a.b = h, a) : {
				r: p,
				g: m,
				b: h
			};
		}
		let g = n.effectWindows && (n.effectWindows.strobe || n.effectWindows["white-strobe"] || n.effectWindows["glitter-strobe"]) || Array.isArray(n.effects) && n.effects.some((e) => typeof e == "object" && !!e && [
			"strobe",
			"white-strobe",
			"glitter-strobe"
		].includes(e.type || e.key)), _ = t.isEffectActive(n, "white-strobe"), v = t.isEffectActive(n, "glitter-strobe") || n.effectType === "falling-comets-glitter", y = (t.isEffectActive(n, "strobe") || !g && (n.preset?.strobe || n.effectState?.strobe)) && n.preset?.shellType !== "crysanthemumNested", b = n.effectWindows && n.effectWindows.ghost || Array.isArray(n.effects) && n.effects.some((e) => typeof e == "object" && !!e && (e.type || e.key) === "ghost"), x = t.isEffectActive(n, "ghost") || !b && (!!n.preset?.ghost || n.preset?.shellType === "ghost"), S = t.isEffectActive(n, "breathing-pulse") || t.isEffectActive(n, "breathing_pulse") || Array.isArray(n.effects) && (n.effects.includes("breathing-pulse") || n.effects.includes("breathing_pulse")) || !!n.preset?.breathingPulse || !!n.preset?.["breathing-pulse"] || !!n.preset?.breathing_pulse, C = t.isEffectActive(n, "diamond-scintillation") || t.isEffectActive(n, "diamond_scintillation") || Array.isArray(n.effects) && (n.effects.includes("diamond-scintillation") || n.effects.includes("diamond_scintillation")) || !!n.preset?.diamondScintillation || !!n.preset?.["diamond-scintillation"] || !!n.preset?.diamond_scintillation, w = n.effectType === "crysanthemum-cc" || Array.isArray(n.effects) && n.effects.includes("crysanthemum-cc") || Array.isArray(n.preset?.effects) && n.preset.effects.includes("crysanthemum-cc") || n.preset?.shellType === "crysanthemumCC";
		if (n.effectType === "sparking") {
			let e = .46 + n.particleIndex * 7 % 11 * .01, t = e + .08;
			if (n.particleIndex % 2 != 0) {
				if (r > t) p = 0, m = 0, h = 0;
				else if (r > e) {
					let i = (t - r) / (t - e);
					p = n.baseColor.r * i, m = n.baseColor.g * i, h = n.baseColor.b * i;
				}
			}
		} else if (_) {
			let e = (n.age + n.phase) * 1e3, t = Math.max(150, 450 - (r - .5) * 600) * o, i = Math.floor(e / t) % 3 == 0 ? 1 : .05;
			p = i, m = i, h = i;
		} else if (v) {
			let e = (n.age + n.phase) * 1e3, t = 90 * o, r = Math.floor(e / t) % 4 == 0 ? 1.5 : 0;
			p = r, m = r, h = r;
		} else if (n.isDyingEmber || n.preset?.shellType === "crysanthemumNestedChild" && n.preset?.strobe) {
			let e = (n.age + n.phase) * 1e3, t = 120 * o, i = Math.floor(e / t) % 7 == 0 ? 1.5 : .06, a = (1 - r) ** .85;
			p = n.baseColor.r * i * a, m = n.baseColor.g * i * a, h = n.baseColor.b * i * a;
		} else if (y) {
			if ((n.effectType === "sphere_rings_wave" || n.effectType === "sphere-rings-wave") && !l) p = 0, m = 0, h = 0;
			else {
				let e = (n.age + n.phase) * 1e3, t = 150 * o, r = +(Math.floor(e / t) % 3 == 0);
				n.preset?.shellType === "strobe" ? (p = r, m = r, h = r) : (p = n.baseColor.r * r, m = n.baseColor.g * r, h = n.baseColor.b * r);
			}
		} else if (x) {
			let t = 0;
			if (r < .4) t = 0;
			else if (r < .48) {
				let n = (r - .4) / .08;
				t = e.MathUtils.lerp(0, 1.35, Math.sin(n * Math.PI * .5));
			} else if (r < .85) t = 1;
			else {
				let e = (r - .85) / .15;
				t = Math.max(0, 1 - e);
			}
			p = n.baseColor.r * t, m = n.baseColor.g * t, h = n.baseColor.b * t;
		} else if (C) {
			let t = [
				16717636,
				2718207,
				58998,
				13959417,
				16766464,
				58879,
				16777215
			], r = n.particleIndex === void 0 ? 0 : n.particleIndex, i = Math.floor(n.age * 4.5) + r, a = t[Math.abs(i) % t.length], o = (a >> 16 & 255) / 255, s = (a >> 8 & 255) / 255, c = (a & 255) / 255, l = Math.floor(n.age * 6.5 + r * 3) % 4 == 0 ? 2.5 : 1.1;
			if (S) {
				let t = (n.phase || 0) + n.particleIndex % 7 * .15, r = (Math.sin((n.age * 1.35 + t) * Math.PI * 2) + 1) * .5;
				l *= e.MathUtils.lerp(.3, 1.8, r);
			}
			p = o * l, m = s * l, h = c * l;
		} else if (S) {
			let t = (n.phase || 0) + n.particleIndex % 7 * .15, r = (Math.sin((n.age * 1.35 + t) * Math.PI * 2) + 1) * .5, i = r * r * (3 - 2 * r), a = e.MathUtils.lerp(.22, 2.35, i), o = r > .72 ? (r - .72) / .28 * .6 : 0;
			p = Math.min(3, (n.baseColor.r + o) * a), m = Math.min(3, (n.baseColor.g + o) * a), h = Math.min(3, (n.baseColor.b + o) * a);
		} else if (w && n.color2) {
			if (r < .4) p = n.baseColor.r, m = n.baseColor.g, h = n.baseColor.b;
			else if (r < .48) {
				let t = (r - .4) / .08, i = 1 + Math.sin(t * Math.PI) * .35;
				p = e.MathUtils.lerp(n.baseColor.r, n.color2.r, t) * i, m = e.MathUtils.lerp(n.baseColor.g, n.color2.g, t) * i, h = e.MathUtils.lerp(n.baseColor.b, n.color2.b, t) * i;
			} else if (r < .85) p = n.color2.r, m = n.color2.g, h = n.color2.b;
			else {
				let e = (r - .85) / .15, t = Math.max(0, 1 - e);
				p = n.color2.r * t, m = n.color2.g * t, h = n.color2.b * t;
			}
		} else if (n.effectType === "crysanthemum-spiral" || n.effectType === "crysanthemum-spiral-v2") s ? (p = Math.min(2, n.baseColor.r * c), m = Math.min(2, n.baseColor.g * c), h = Math.min(2, n.baseColor.b * c)) : (p = n.baseColor.r * .02, m = n.baseColor.g * .02, h = n.baseColor.b * .02);
		else if (n.effectType === "sphere_rings_wave" || n.effectType === "sphere-rings-wave") l ? (p = Math.min(2.5, n.baseColor.r * u), m = Math.min(2.5, n.baseColor.g * u), h = Math.min(2.5, n.baseColor.b * u)) : (p = n.baseColor.r * .01, m = n.baseColor.g * .01, h = n.baseColor.b * .01);
		else if (d) {
			if (r < .32) p = n.baseColor.r, m = n.baseColor.g, h = n.baseColor.b;
			else if (r <= .6) p = n.baseColor.r * .02, m = n.baseColor.g * .02, h = n.baseColor.b * .02;
			else {
				let e = 1.6 * (1 - (r - .6) / .4 * .4);
				p = Math.min(2, n.baseColor.r * e), m = Math.min(2, n.baseColor.g * e), h = Math.min(2, n.baseColor.b * e);
			}
		} else if (n.effectType === "double-helix") {
			if (n.color2) {
				let e = n.particleIndex % 2 == 0 ? 0 : .4, t = Math.min(1, r * .7 + e);
				p = n.baseColor.r * (1 - t) + n.color2.r * t, m = n.baseColor.g * (1 - t) + n.color2.g * t, h = n.baseColor.b * (1 - t) + n.color2.b * t;
			}
		} else if (f?.thermalCooling !== !1) {
			if (n.isSecondBurstChild) {
				let t = f?.attenuationStart ?? .35;
				if (r < .12) {
					let e = 1 - r / .12;
					p *= 1 + e * .15, m *= 1 + e * .15, h *= 1 + e * .15;
				} else if (r >= t && r <= .65) {
					let e = 1 - (r - t) / (.65 - t) * .15;
					p *= e, m *= e, h *= e;
				} else if (r > .65) {
					if (r < .9) {
						let t = (r - .65) / .25;
						p = e.MathUtils.lerp(p, p * .75, t), m = e.MathUtils.lerp(m, m * .75, t), h = e.MathUtils.lerp(h, h * .75, t);
					} else {
						let t = (r - .9) / .1;
						p = e.MathUtils.lerp(p * .75, p * .45, t), m = e.MathUtils.lerp(m * .75, m * .45, t), h = e.MathUtils.lerp(h * .75, h * .45, t);
					}
				}
			} else {
				let t = .035, n = f?.flashEnd ?? .12, i = f?.attenuationStart ?? .35, a = f?.coolingStart ?? .55, o = f?.emberStart ?? .85;
				if (r < n) {
					let i;
					if (r < t) {
						let n = r / t;
						i = e.MathUtils.smoothstep(n, 0, 1);
					} else i = 1 - (r - t) / (n - t);
					p = e.MathUtils.lerp(p, Math.max(p, 1.65), i), m = e.MathUtils.lerp(m, Math.max(m, 1.55), i), h = e.MathUtils.lerp(h, Math.max(h, 1.35), i);
				} else if (r >= i && r < a) {
					let e = 1 - (r - i) / (a - i) * .2;
					p *= e, m *= e, h *= e;
				} else if (r >= a) {
					if (r < o) {
						let t = (r - a) / (o - a), n = .8 * (1 - t * .2);
						p = e.MathUtils.lerp(p * n, 1 * n, t * .55), m = e.MathUtils.lerp(m * n, .46 * n, t * .55), h = e.MathUtils.lerp(h * n, .08 * n, t * .78);
					} else {
						let t = (r - o) / (1 - o);
						p = e.MathUtils.lerp(p * .64, .45, t), m = e.MathUtils.lerp(m * .36, .06, t), h = e.MathUtils.lerp(h * .14, .01, t);
					}
				}
			}
		}
		if (n.frictionHeat && n.frictionHeat > .02) {
			let t = Math.min(1, n.frictionHeat);
			p = e.MathUtils.lerp(p, Math.max(p, 2.2), t * .75), m = e.MathUtils.lerp(m, Math.max(m, 2.1), t * .75), h = e.MathUtils.lerp(h, Math.max(h, 1.8), t * .75);
		}
		return a ? (a.r = p, a.g = m, a.b = h, a) : {
			r: p,
			g: m,
			b: h
		};
	}
};
v.registerEffect("standard", { updateVelocity() {
	return { gravityScale: .3 };
} }), v.registerEffect("flow", { updateVelocity(e, t, n, r, i, a) {
	let o = (a.spin[t] || 0) * n, s = Math.cos(o), c = Math.sin(o), l = e.x, u = e.z;
	return e.x = l * s - u * c, e.z = l * c + u * s, e.y += Math.sin(r * 3 + (a.phase[t] || 0)) * .02, e.multiplyScalar(.998), {
		gravityScale: .08,
		spawnTrail: !0,
		trailLife: .25,
		trailIntensity: .3
	};
} }), v.registerEffect("snow", { updateVelocity(e, t, n, r, i, a) {
	let o = Math.sin(r * 2 + (a.phase[t] || 0)) * .04;
	return e.x += o * n, e.z += o * n * .7, e.multiplyScalar(.996), { gravityScale: .05 };
} });
var y = v.effectsRegistry.get("snow");
v.registerEffect("slow-burst", y), v.registerEffect("slow_burst", y), v.registerEffect("crackle", { updateVelocity(e, t, n, r, i, a) {
	let o = (a.turbulence[t] || 1) * .03;
	return e.x += (Math.random() - .5) * o, e.y += (Math.random() - .5) * o * .5, e.z += (Math.random() - .5) * o, {
		gravityScale: .18,
		emitSpark: !1
	};
} }), v.registerEffect("wave", {
	materialOpacity(e, t, n) {
		let r = Math.sin(e * 38) > 0 ? 1 : .2;
		return Math.max(0, Math.min(1, n * r));
	},
	updateVelocity(e, t, n, r, i, a) {
		return e.y += Math.sin(r * 8 + (a.phase[t] || 0)) * .03, { gravityScale: .22 };
	}
}), v.registerEffect("strobe", { updateVelocity(e) {
	return e.multiplyScalar(.996), { gravityScale: .2 };
} }), v.registerEffect("white-strobe", { updateVelocity(e) {
	return e.multiplyScalar(.996), { gravityScale: .2 };
} }), v.registerEffect("glitter-strobe", { updateVelocity(e) {
	return e.multiplyScalar(.996), { gravityScale: .2 };
} }), v.registerEffect("heart", {
	materialOpacity(e, t, n) {
		let r = .78 + Math.sin(e * 12) * .18;
		return Math.max(0, Math.min(1, n * r));
	},
	updateVelocity(e, t, n, r, i, a) {
		return e.y += Math.sin(r * 6 + (a.phase[t] || 0)) * .018, e.x *= .998, e.z *= .998, { gravityScale: .24 };
	}
}), v.registerEffect("oval", {
	materialOpacity(e, t, n) {
		let r = .88 + Math.sin(e * 4.5) * .08;
		return Math.max(0, Math.min(1, n * r));
	},
	updateVelocity(e, t, n, r, i, a) {
		let o = (a.spin[t] || 0) * n * .4, s = Math.cos(o), c = Math.sin(o), l = e.x, u = e.z;
		return e.x = l * s - u * c, e.z = l * c + u * s, e.multiplyScalar(.997), { gravityScale: .16 };
	}
}), v.registerEffect("flower", { updateVelocity(e) {
	return e.multiplyScalar(.997), { gravityScale: .2 };
} }), v.registerEffect("floral", { updateVelocity(e) {
	return e.multiplyScalar(.997), { gravityScale: .2 };
} }), v.registerEffect("falling-leaves", { updateVelocity(e, t, n, r, i, a) {
	let o = Math.sin(r * 3 + (a.phase[t] || 0)) * .06;
	return e.x += o * n, e.z += o * n * .8, e.multiplyScalar(.995), { gravityScale: .06 };
} }), v.registerEffect("falling-comets", { updateVelocity() {
	return {
		gravityScale: .25,
		spawnTrail: !0,
		trailLife: .55,
		trailIntensity: .35
	};
} }), v.registerEffect("falling-comets-glitter", { updateVelocity() {
	return {
		gravityScale: .25,
		spawnTrail: !0,
		trailLife: .55,
		trailIntensity: .35
	};
} }), v.registerEffect("crysanthemum-trail", { updateVelocity() {
	return {
		gravityScale: .3,
		spawnTrail: !0,
		trailLife: .45,
		trailIntensity: .9
	};
} }), v.registerEffect("crysanthemum-smoke", { updateVelocity() {
	return {
		gravityScale: .3,
		spawnSmoke: !0,
		smokeLife: 3.8,
		smokeOpacity: .2
	};
} }), v.registerEffect("crysanthemum-spiral", { updateVelocity(e) {
	return e.multiplyScalar(.996), {
		gravityScale: .28,
		spawnTrail: !0,
		trailLife: .45,
		trailIntensity: .95
	};
} }), v.registerEffect("crysanthemum-spiral-v2", { updateVelocity(e) {
	return e.multiplyScalar(.996), {
		gravityScale: .28,
		spawnTrail: !0,
		trailLife: .5,
		trailIntensity: 1
	};
} }), v.registerEffect("crysanthemum_discrete_trail", { updateVelocity(e, t, n, r) {
	return e.multiplyScalar(.992), {
		gravityScale: .32,
		dragCoefficient: .68,
		spawnTrail: !0,
		trailLife: 1.45,
		trailIntensity: .9,
		trailSpawnChance: Math.sin(r * 20 + t * 7.13 % 6.28) > .55 ? .42 : .04
	};
} }), v.registerEffect("crysanthemum-discrete-trail", { updateVelocity(e, t, n, r, i, a) {
	return v.effectsRegistry.get("crysanthemum_discrete_trail").updateVelocity(e, t, n, r, i, a);
} }), v.registerEffect("crysanthemum-cc", {
	materialOpacity(e, t, n) {
		let r = t > 0 ? e / t : 0;
		if (r < .85) return n;
		{
			let e = (r - .85) / .15;
			return Math.max(0, n * (1 - e));
		}
	},
	updateVelocity(e, t, n, r, i) {
		let a = i > 0 ? r / i : 0;
		return a < .38 ? (e.multiplyScalar(.994), {
			gravityScale: .02,
			spawnTrail: !1
		}) : a < .48 ? (e.multiplyScalar(.02 ** (n * 14)), {
			gravityScale: .01,
			spawnTrail: !1
		}) : (e.multiplyScalar(.92), {
			gravityScale: .03,
			spawnTrail: !1
		});
	}
}), v.registerEffect("ghost", {
	materialOpacity(t, n, r) {
		let i = n > 0 ? t / n : 0;
		if (i < .4) return 0;
		if (i < .48) {
			let t = (i - .4) / .08;
			return r * e.MathUtils.lerp(0, 1, t);
		}
		if (i < .85) return r;
		{
			let e = (i - .85) / .15;
			return Math.max(0, r * (1 - e));
		}
	},
	updateVelocity(e, t, n, r, i) {
		let a = i > 0 ? r / i : 0;
		return a < .38 ? (e.multiplyScalar(.994), {
			gravityScale: .02,
			spawnTrail: !1
		}) : a < .48 ? (e.multiplyScalar(.02 ** (n * 14)), {
			gravityScale: .01,
			spawnTrail: !1
		}) : (e.multiplyScalar(.92), {
			gravityScale: .03,
			spawnTrail: !1
		});
	}
}), v.registerEffect("galaxy-spin", {
	materialOpacity(e, t, n) {
		return Math.max(0, Math.min(1, n * .72));
	},
	updateVelocity(e, t, n, r, i, a) {
		let o = 2.5 * (1 - (i > 0 ? r / i : 0)) * n, s = Math.cos(o), c = Math.sin(o), l = e.x, u = e.y;
		return e.x = l * s - u * c, e.y = l * c + u * s, e.multiplyScalar(.992), {
			gravityScale: .05,
			spawnTrail: !0,
			trailLife: .24,
			trailIntensity: .22
		};
	}
}), v.registerEffect("comet-ring", { updateVelocity(e) {
	return e.multiplyScalar(.985), {
		gravityScale: .06,
		spawnTrail: !0,
		trailLife: 1.4,
		trailIntensity: .85
	};
} }), v.registerEffect("sparking", { updateVelocity(e, t, n, r, i) {
	return { gravityScale: .35 };
} }), v.registerEffect("sparking-v2", { updateVelocity(e, t, n, r, i) {
	return { gravityScale: .35 };
} }), v.registerEffect("bouquet-comet", { updateVelocity(e, t, n, r, i) {
	return e.multiplyScalar(.993), {
		gravityScale: .1 + Math.min(.25, Math.max(0, r - .25) * .18),
		spawnTrail: !0,
		trailLife: .95,
		trailIntensity: .9
	};
} }), v.registerEffect("willow", { updateVelocity(e) {
	return e.multiplyScalar(.988), {
		gravityScale: .22,
		spawnTrail: !0,
		trailLife: .85,
		trailIntensity: .95
	};
} }), v.registerEffect("horsetail", { updateVelocity(e, t, r, i, a) {
	let o = n.HORSETAIL?.horizontalDragFactor ?? .982;
	e.x *= o, e.z *= o;
	let s = a > 0 ? i / a : 0, c = n.HORSETAIL?.gravityScale ?? .38;
	return {
		gravityScale: s < .12 ? .18 : c + Math.min(.35, s * .4),
		spawnTrail: !0,
		trailLife: n.HORSETAIL?.trailLife ?? .92,
		trailIntensity: n.HORSETAIL?.trailIntensity ?? .9,
		spawnSmoke: !1
	};
} }), v.registerEffect("horsetail_waterfall", { updateVelocity(...e) {
	return v.effectsRegistry.get("horsetail").updateVelocity(...e);
} }), v.registerEffect("swimming-star", { updateVelocity(e, t, n, r, i, a) {
	let o = (a?.spin?.[t] || 0) * n * .85, s = Math.cos(o), c = Math.sin(o), l = e.x, u = e.z;
	return e.x = l * s - u * c, e.z = l * c + u * s, e.y += Math.sin(r * 2.8 + (a?.phase?.[t] || 0)) * .018, e.multiplyScalar(.994), {
		gravityScale: .08,
		spawnTrail: !1
	};
} }), v.registerEffect("no-trail", { updateVelocity() {
	return {
		gravityScale: .3,
		spawnTrail: !1
	};
} }), v.registerEffect("notrail", { updateVelocity() {
	return {
		gravityScale: .3,
		spawnTrail: !1
	};
} }), v.registerEffect("no-burst", { updateVelocity() {
	return {
		gravityScale: .25,
		spawnTrail: !0
	};
} }), v.registerEffect("ghost-kamuro", { updateVelocity(e, t, n, r, i) {
	e.x *= .994, e.z *= .994, e.y = e.y * .994 - r / Math.max(.1, i) * .05 * 9.8 * n;
	let a = (i > 0 ? r / i : 0) > .6;
	return {
		gravityScale: a ? .38 : .18,
		spawnTrail: a,
		trailLife: .95,
		trailIntensity: 1.4
	};
} }), v.registerEffect("double-helix", { updateVelocity(e, t, n, r, i) {
	let a = 1.2 * (1 - (i > 0 ? r / i : 0) * .5) * n, o = Math.cos(a), s = Math.sin(a), c = e.x, l = e.z;
	return e.x = c * o - l * s, e.z = c * s + l * o, e.multiplyScalar(.994), {
		gravityScale: .16,
		spawnTrail: !0,
		trailLife: .5,
		trailIntensity: .55
	};
} }), v.registerEffect("crossette", { updateVelocity() {
	return {
		gravityScale: .26,
		spawnTrail: !0,
		trailLife: .65,
		trailIntensity: .95
	};
} }), v.registerEffect("sparkle-trail", { updateVelocity(e) {
	return e.multiplyScalar(.996), {
		gravityScale: .28,
		spawnTrail: !0,
		trailLife: .22,
		trailIntensity: .18,
		spawnSmoke: !1
	};
} }), v.registerEffect("sparkle-apex", { updateVelocity(e) {
	return e.multiplyScalar(.996), {
		gravityScale: .28,
		spawnTrail: !0,
		trailLife: .22,
		trailIntensity: .18,
		spawnSmoke: !1
	};
} }), v.registerEffect("sparkling-branch-comet", { updateVelocity(e) {
	return e.multiplyScalar(.996), {
		gravityScale: .28,
		spawnTrail: !0,
		trailLife: .22,
		trailIntensity: .18,
		spawnSmoke: !1
	};
} }), v.registerEffect("apex-hang", { updateVelocity(t, r, i, a, o, s) {
	let c = n.BURST?.apexExpansionDrag ?? 3.8, l = Math.exp(-c * i);
	t.multiplyScalar(l);
	let u = s?.initialSpeeds?.[r] ?? 0, d = n.BURST?.apexGravityThreshold ?? .18;
	if (u > .001) {
		let n = t.length() / u;
		if (n > d) return {
			gravityScale: 0,
			spawnTrail: !1
		};
		let r = 1 - n / d;
		return {
			gravityScale: e.MathUtils.smoothstep(r, 0, 1),
			spawnTrail: !1
		};
	}
	let f = o > 0 ? a / o : 1, p = n.BURST?.apexHangEnd ?? .48;
	if (f <= p) return {
		gravityScale: 0,
		spawnTrail: !1
	};
	let m = Math.min(1, (f - p) / .18);
	return {
		gravityScale: e.MathUtils.smoothstep(m, 0, 1),
		spawnTrail: !1
	};
} });
// src/factories/BurstParticleFactory.js
var b = n.BURST.baseDrag ?? 2.2, x = n.SYSTEM.baseBurstPointSize ?? 18, S = class t {
	static createRandomBurstRotation() {
		let t = new e.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize(), n = Math.random() * Math.PI * 2;
		return new e.Quaternion().setFromAxisAngle(t, n);
	}
	static resolveActiveEffectFlags({ preset: e = {}, effects: t = [], dynamicsType: n = "" } = {}) {
		let r = (Array.isArray(t) && t.length > 0 ? t : Array.isArray(e?.effects) ? e.effects : []).map((e) => typeof e == "object" && e ? e.type || e.key : e), i = (n || e?.dynamicsType || e?.dynamics || e?.effectType || "").toLowerCase(), a = !!(e?.crossette || r.includes("crossette") || i === "crossette"), o = !!(e?.isTadpoleShell || e?.tadpoleFlurry || r.includes("tadpole-flurry") || r.includes("tadpole_flurry") || Array.isArray(e?.effects) && (e.effects.includes("tadpole-flurry") || e.effects.includes("tadpole_flurry")) || i === "tadpole-flurry"), s = !!(e?.erraticDart || e?.hasErraticDart || r.includes("erratic-dart") || r.includes("erratic_dart") || Array.isArray(e?.effects) && (e.effects.includes("erratic-dart") || e.effects.includes("erratic_dart")) || i === "erratic-dart"), c = !!(!e?.noBurst && (r.includes("burst-smoke") || Array.isArray(e?.effects) && e.effects.some((e) => (typeof e == "object" && e ? e.type || e.key : e) === "burst-smoke") || e?.["burst-smoke"] || e?.burstSmoke)), l = !!(i === "ghost" || r.includes("ghost") || Array.isArray(e?.effects) && e.effects.includes("ghost") || e?.ghost || e?.shellType === "ghost"), u = !!(i === "crysanthemum-cc" || r.includes("crysanthemum-cc") || Array.isArray(e?.effects) && e.effects.includes("crysanthemum-cc") || e?.shellType === "crysanthemumCC"), d = !!(e?.longBurn || r.includes("long-burn") || Array.isArray(e?.effects) && e.effects.includes("long-burn") || i === "long-burn" || e?.effectType === "long-burn"), f = !!(e?.apexHang || r.includes("apex-hang") || Array.isArray(e?.effects) && e.effects.includes("apex-hang") || i === "apex-hang" || e?.effectType === "apex-hang"), p = !!(e?.noTrail || r.includes("no-trail") || r.includes("notrail") || Array.isArray(e?.effects) && (e.effects.includes("no-trail") || e.effects.includes("notrail") || e.effects.some((e) => typeof e == "object" && ((e.type || e.key) === "no-trail" || (e.type || e.key) === "notrail"))) || i === "no-trail" || i === "notrail");
		return {
			isCrossetteShell: a,
			isTadpoleFlurryShell: o,
			isErraticDartShell: s,
			hasBurstSmoke: c,
			isGhostEffect: l,
			isCCEffect: u,
			isLongBurn: d,
			isApexHang: f,
			isSlowBurst: !!(e?.slowBurst || e?.["slow-burst"] || e?.slow_burst || r.includes("slow-burst") || r.includes("slow_burst") || Array.isArray(e?.effects) && (e.effects.includes("slow-burst") || e.effects.includes("slow_burst") || e.effects.some((e) => typeof e == "object" && ((e.type || e.key) === "slow-burst" || (e.type || e.key) === "slow_burst"))) || i === "slow-burst" || i === "slow_burst" || e?.effectType === "slow-burst" || e?.effectType === "slow_burst"),
			hasNoTrail: p,
			hasBreathingPulse: !!(e?.breathingPulse || e?.["breathing-pulse"] || e?.breathing_pulse || r.includes("breathing-pulse") || r.includes("breathing_pulse") || Array.isArray(e?.effects) && (e.effects.includes("breathing-pulse") || e.effects.includes("breathing_pulse")) || i === "breathing-pulse" || i === "breathing_pulse"),
			hasDiamondScintillation: !!(e?.diamondScintillation || e?.["diamond-scintillation"] || e?.diamond_scintillation || r.includes("diamond-scintillation") || r.includes("diamond_scintillation") || Array.isArray(e?.effects) && (e.effects.includes("diamond-scintillation") || e.effects.includes("diamond_scintillation")) || i === "diamond-scintillation" || i === "diamond_scintillation"),
			effectsList: r
		};
	}
	static getEffectTiming(e, t, n = 1) {
		if (!Array.isArray(e)) return null;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (typeof i == "object" && i) {
				if ((i.type || i.key) === t) {
					let e = i.startRatio === void 0 ? void 0 : Number(i.startRatio), t = i.endRatio === void 0 ? void 0 : Number(i.endRatio), r = i.start === void 0 ? 0 : Number(i.start), a = i.end === void 0 ? null : Number(i.end);
					return e !== void 0 && !isNaN(e) && (r = e * n), t !== void 0 && !isNaN(t) && (a = t * n), {
						start: r,
						end: a,
						startRatio: e === void 0 ? n > 0 ? r / n : 0 : e,
						endRatio: t === void 0 ? a !== null && n > 0 ? a / n : 1 : t
					};
				}
			} else if (i === t) return {
				start: 0,
				end: null,
				startRatio: 0,
				endRatio: 1
			};
		}
		return null;
	}
	static getEffectTimings(e, t, n = 1) {
		if (!Array.isArray(e)) return [];
		let r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i];
			if (typeof a == "object" && a) {
				if ((a.type || a.key) === t) {
					let e = a.startRatio === void 0 ? void 0 : Number(a.startRatio), t = a.endRatio === void 0 ? void 0 : Number(a.endRatio), i = a.start === void 0 ? 0 : Number(a.start), o = a.end === void 0 ? null : Number(a.end);
					e !== void 0 && !isNaN(e) && (i = e * n), t !== void 0 && !isNaN(t) && (o = t * n), r.push({
						start: i,
						end: o === null ? n : o,
						startRatio: e === void 0 ? n > 0 ? i / n : 0 : e,
						endRatio: t === void 0 ? o !== null && n > 0 ? o / n : 1 : t
					});
				}
			} else a === t && r.push({
				start: 0,
				end: n,
				startRatio: 0,
				endRatio: 1
			});
		}
		return r;
	}
	static createParticle(r = {}) {
		let { position: i = new e.Vector3(), velocity: a = new e.Vector3(), color: o = new e.Color(16777215), baseColor: s = null, color2: c = null, age: l = 0, maxLife: u = 1, effectType: d = "standard", effects: f = [], crackle: p = !1, crackleTriggered: m = !1, phase: h = 0, preset: g = {}, heightProfile: _ = null, effectState: v = null, ghostDot: y = 0, spiralIndex: S = 0, isSpiralArm: C = !1, particleIndex: w = 0, totalParticleCount: T = 1, shellId: E = null, isDyingEmber: ee = !1, isNestedTrigger: D = !1, hasBurstSmoke: O = !1, burstSmokeLimit: k = .33, isCrossette: te = !1, crossetteSplitTime: A = 0, crossetteSplitDone: j = !0, isSecondBurst: M = !1, secondBurstDone: N = !0, secondBurstConfig: P = null, secondBurstTime: F = 0, isChromaticWave: I = !1, radialDistanceRatio: L = 0, renderSize: R = x, renderOpacity: z = 1, dynamicsProfile: ne = null, dragCoefficient: B = b, hasTadpoleFlurry: re = !1, tadpoleArrowTimer: ie = 0, tadpoleDeflectionScale: V = 1, tadpoleSizeScale: ae = 1, tadpoleDensityScale: oe = 1, hasFlurried: se = !1, hasErraticDart: ce = !1, erraticDartTriggerRatio: le = .72, erraticDartTriggered: ue = !1, erraticDartTrailTimer: de = 0, erraticDartFlash: fe = 1, erraticDartWigglePhase: H = 0, erraticDartWiggleFreq: pe = 22, erraticDartWiggleAmp: me = 26, isSecondBurstChild: U = !1, isLongBurn: he = !1, isApexHang: ge = !1, isSlowBurst: _e = !1, hasNoTrail: ve = !1, frictionHeat: W = 0, ringIndex: ye = null, sizeVariance: be = null, brightnessVariance: xe = null } = r, Se = n.BURST?.starSizeVariance ?? .06, Ce = n.BURST?.starBrightnessVariance ?? .1, we = be === null ? 1 + (Math.random() + Math.random() - 1) * Se : be, Te = xe === null ? 1 + (Math.random() + Math.random() - 1) * Ce : xe, Ee = s ? s.clone() : o.clone(), De = a.length(), Oe = De > 1e-4 ? a.clone().normalize() : new e.Vector3(0, 1, 0), G = Array.isArray(f) && f.length > 0 ? f : Array.isArray(g?.effects) ? g.effects : [], K = t.getEffectTiming(G, "crackle", u), ke = r.crackle === void 0 ? K !== null : !!r.crackle, q = K ? K.start : ke ? u * .65 : void 0, Ae = K && K.end !== null ? K.end : ke ? u : void 0, J = t.getEffectTiming(G, "tadpole-flurry", u) || t.getEffectTiming(G, "tadpole_flurry", u), Y = r.hasTadpoleFlurry === void 0 ? J !== null : !!r.hasTadpoleFlurry, je = J ? J.start : Y ? u * .18 : void 0, Me = J && J.end !== null ? J.end : Y ? u * .85 : void 0, X = t.getEffectTiming(G, "erratic-dart", u) || t.getEffectTiming(G, "erratic_dart", u), Ne = r.hasErraticDart === void 0 ? X !== null : !!r.hasErraticDart, Pe = X && X.start > 0 ? X.start : Ne ? u * le : void 0, Fe = X && X.end !== null ? X.end : Ne ? u : void 0, Ie = t.getEffectTiming(G, "crossette", u), Le = r.isCrossette === void 0 ? Ie !== null : !!r.isCrossette, Re = Ie && Ie.start > 0 ? Ie.start : A > 0 ? A : u * .5, Z = t.getEffectTiming(G, "burst-smoke", u), ze = r.hasBurstSmoke === void 0 ? Z !== null : !!r.hasBurstSmoke, Be = Z ? Z.start : ze ? 0 : void 0, Ve = Z && Z.end !== null ? Z.end : ze ? u * (k ?? .33) : void 0, He = t.getEffectTiming(G, "strobe", u) || t.getEffectTiming(G, "white-strobe", u) || t.getEffectTiming(G, "glitter-strobe", u), Ue = He ? He.start : void 0, We = He && He.end !== null ? He.end : He ? u : void 0, Ge = t.getEffectTiming(G, "ghost", u), Ke = Ge ? Ge.start : void 0, Q = Ge && Ge.end !== null ? Ge.end : Ge ? u : void 0, qe = t.getEffectTiming(G, "no-trail", u) || t.getEffectTiming(G, "notrail", u) || t.getEffectTiming(G, "noTrail", u), Je = r.hasNoTrail === void 0 ? g?.noTrail || qe !== null : !!r.hasNoTrail, Ye = qe ? qe.start : Je ? 0 : void 0, Xe = qe && qe.end !== null ? qe.end : Je ? u : void 0, Ze = t.getEffectTimings(G, "strobe", u), Qe = t.getEffectTimings(G, "white-strobe", u), $e = t.getEffectTimings(G, "glitter-strobe", u), et = t.getEffectTimings(G, "ghost", u), tt = t.getEffectTimings(G, "crackle", u), nt = [
			...t.getEffectTimings(G, "no-trail", u),
			...t.getEffectTimings(G, "notrail", u),
			...t.getEffectTimings(G, "noTrail", u)
		], rt = [...t.getEffectTimings(G, "tadpole-flurry", u), ...t.getEffectTimings(G, "tadpole_flurry", u)], it = [...t.getEffectTimings(G, "erratic-dart", u), ...t.getEffectTimings(G, "erratic_dart", u)], at = {};
		return Ze.length > 0 && (at.strobe = Ze), Qe.length > 0 && (at["white-strobe"] = Qe), $e.length > 0 && (at["glitter-strobe"] = $e), et.length > 0 && (at.ghost = et), tt.length > 0 && (at.crackle = tt), nt.length > 0 && (at["no-trail"] = nt), rt.length > 0 && (at["tadpole-flurry"] = rt), it.length > 0 && (at["erratic-dart"] = it), {
			position: i.clone(),
			prevPosition: i.clone(),
			velocity: a.clone(),
			initialSpeed: De,
			ejectionDir: Oe,
			color: o.clone(),
			baseColor: Ee,
			color2: c ? c.clone() : null,
			sizeVariance: we,
			brightnessVariance: Te,
			age: l,
			maxLife: u,
			effectType: d,
			crackle: !!ke,
			crackleStart: q,
			crackleEnd: Ae,
			crackleTriggered: !!m,
			phase: h,
			preset: g,
			heightProfile: _,
			effectState: v,
			ghostDot: y,
			spiralIndex: S,
			isSpiralArm: !!C,
			particleIndex: w,
			totalParticleCount: T,
			shellId: E ?? Math.floor(Math.random() * 1e8),
			isDyingEmber: !!ee,
			isLongBurn: !!he,
			isApexHang: !!ge,
			isSlowBurst: !!_e,
			isNestedTrigger: !!D,
			effects: Array.isArray(f) ? [...f] : [],
			hasBurstSmoke: !!ze,
			burstSmokeStart: Be,
			burstSmokeEnd: Ve,
			burstSmokeLimit: k,
			isCrossette: !!Le,
			crossetteSplitTime: Re,
			crossetteSplitDone: !!j,
			isSecondBurst: !!M,
			secondBurstDone: !!N,
			secondBurstConfig: P,
			secondBurstTime: F,
			isChromaticWave: !!I,
			radialDistanceRatio: L,
			renderSize: R,
			renderOpacity: z,
			dynamicsProfile: ne,
			dragCoefficient: B,
			hasTadpoleFlurry: !!Y,
			tadpoleStart: je,
			tadpoleEnd: Me,
			tadpoleArrowTimer: ie,
			tadpoleDeflectionScale: Number(V) || 1,
			tadpoleSizeScale: Number(ae) || 1,
			tadpoleDensityScale: Number(oe) || 1,
			hasFlurried: !!se,
			hasErraticDart: !!Ne,
			erraticDartTriggerTime: Pe,
			erraticDartEnd: Fe,
			erraticDartTriggerRatio: le,
			erraticDartTriggered: !!ue,
			erraticDartTrailTimer: de,
			erraticDartFlash: fe,
			erraticDartWigglePhase: H,
			erraticDartWiggleFreq: pe,
			erraticDartWiggleAmp: me,
			isSecondBurstChild: !!U,
			strobeStart: Ue,
			strobeEnd: We,
			ghostStart: Ke,
			ghostEnd: Q,
			hasNoTrail: !!Je,
			noTrailStart: Ye,
			noTrailEnd: Xe,
			effectWindows: at,
			ringIndex: ye === null ? null : Number(ye),
			frictionHeat: Number(W) || 0,
			lastVelocity: a ? a.clone() : new e.Vector3()
		};
	}
	static createCrossetteBranches({ parentParticle: t, branchDirs: r, speed: i, dir: a, splitOrigin: o, branchColor: s, remainingLife: c, hasNoTrail: l }) {
		let u = [], d = l ? "no-trail" : "crysanthemum-trail", f = l ? ["no-trail"] : ["crysanthemum-trail"], p = n.CROSSETTE || {}, m = p.branchSpeedMin ?? 8.5, h = p.branchSpeedMax ?? 11, g = i * .28;
		for (let n = 0; n < 4; n++) {
			let i = m + Math.random() * (h - m), p = r[n], _ = new e.Vector3(a.x * g + p.x * i, a.y * g + p.y * i, a.z * g + p.z * i), v = this.createParticle({
				position: new e.Vector3(o.x, o.y, o.z),
				velocity: _,
				color: s,
				baseColor: s,
				color2: null,
				age: 0,
				maxLife: c,
				effectType: d,
				crackle: !1,
				crackleTriggered: !1,
				phase: t.phase + n * .5,
				preset: {
					...t.preset,
					crossette: !1,
					noTrail: l
				},
				heightProfile: t.heightProfile,
				effectState: t.effectState,
				ghostDot: 0,
				spiralIndex: 0,
				isSpiralArm: !1,
				particleIndex: t.particleIndex * 4 + n,
				totalParticleCount: t.totalParticleCount,
				shellId: t.shellId,
				isDyingEmber: !1,
				isNestedTrigger: !1,
				effects: f,
				hasBurstSmoke: !!t.hasBurstSmoke,
				burstSmokeLimit: t.burstSmokeLimit ?? .33,
				isCrossette: !1,
				crossetteSplitDone: !0,
				isSecondBurst: !1,
				secondBurstDone: !0,
				secondBurstConfig: null,
				isChromaticWave: !1,
				radialDistanceRatio: 0,
				renderSize: t.renderSize,
				renderOpacity: 1,
				dynamicsProfile: t.dynamicsProfile,
				dragCoefficient: t.dragCoefficient ?? b,
				frictionHeat: .95
			});
			v.isCrossetteBranch = !0, v.prevPosition = new e.Vector3(o.x, o.y, o.z), u.push(v);
		}
		return u;
	}
}, C = [
	"sphere",
	"ring",
	"heart",
	"star",
	"fish",
	"cat",
	"flower",
	"smiley",
	"galaxy",
	"lightning",
	"oval",
	"upward-spray",
	"willow",
	"willow-up",
	"willow-arch",
	"half-flash",
	"split-flash",
	"double-helix",
	"sparkling-branches",
	"sphere_uniform",
	"egg",
	"sphere_rings",
	"horsetail",
	"text_word"
], w = /* @__PURE__ */ "standard.flow.willow.falling-leaves.falling-comets.falling-comets-glitter.snow.wave.galaxy-spin.bouquet-comet.comet-ring.crysanthemum-trail.crysanthemum-smoke.crysanthemum-spiral.crysanthemum-spiral-v2.sparking.sparking-v2.swimming-star.ghost-kamuro.double-helix.crossette.sparkle-trail.sparkling-branch-comet.tadpole-spiral.crysanthemum_discrete_trail.sphere_rings_wave.horsetail.text_word".split("."), T = ["pistil", "instantBurst"], E = [
	"no-trail",
	"flow",
	"strobe",
	"white-strobe",
	"glitter-strobe",
	"crackle",
	"ghost",
	"ghost-flare",
	"crossette",
	"sparkle-apex",
	"tadpole-flurry",
	"erratic-dart",
	"breathing-pulse",
	"diamond-scintillation"
], ee = [
	"burst-smoke",
	"pistil",
	"apex-hang",
	"long-burn",
	"slow-burst"
], D = [...E, ...ee], O = {
	strobe_breathing_pulse: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["breathing-pulse"]
	},
	glitter_diamond_scintillation: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["diamond-scintillation"]
	},
	text_word: {
		shape: "text_word",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	horsetail_waterfall: {
		shape: "horsetail",
		dynamics: "horsetail",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	egg_crysanthemum: {
		shape: "egg",
		dynamics: "crysanthemum-trail",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	random: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	comet_cluster: {
		shape: "sphere",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	comet_cluster_notrail: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["no-trail"]
	},
	comet_cluster_cc: {
		shape: "sphere",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	comet_cluster_thick: {
		shape: "sphere",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	comet_cluster_detached: {
		shape: "sphere",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["no-trail"]
	},
	comet_cluster_cascade: {
		shape: "sphere",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	comet_single: {
		shape: "sphere",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	comet_single_beam: {
		shape: "sphere",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	comet_tadpole_burst: {
		shape: "sphere",
		dynamics: "tadpole-spiral",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	cometTadpoleBurst: {
		shape: "sphere",
		dynamics: "tadpole-spiral",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	chrysanthemum_tadpole_burst: {
		shape: "sphere",
		dynamics: "tadpole-spiral",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["tadpole-flurry"]
	},
	chrysanthemumTadpoleBurst: {
		shape: "sphere",
		dynamics: "tadpole-spiral",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["tadpole-flurry"]
	},
	crysanthemum: {
		shape: "sphere",
		dynamics: "crysanthemum-trail",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemum_uniform_sphere: {
		shape: "sphere_uniform",
		dynamics: "crysanthemum_discrete_trail",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemum_sphere_rings: {
		shape: "sphere_rings",
		dynamics: "crysanthemum-trail",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemumSphereRings: {
		shape: "sphere_rings",
		dynamics: "crysanthemum-trail",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	sphere_rings_cascade: {
		shape: "sphere_rings",
		dynamics: "sphere_rings_wave",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	sphereRingsCascade: {
		shape: "sphere_rings",
		dynamics: "sphere_rings_wave",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	sphere_rings_strobe: {
		shape: "sphere_rings",
		dynamics: "sphere_rings_wave",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["strobe"]
	},
	sphereRingsStrobe: {
		shape: "sphere_rings",
		dynamics: "sphere_rings_wave",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["strobe"]
	},
	egg_crysanthemum: {
		shape: "egg",
		dynamics: "crysanthemum-trail",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemumV2: {
		shape: "sphere",
		dynamics: "crysanthemum-trail",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemumSmoke: {
		shape: "sphere",
		dynamics: "crysanthemum-smoke",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemumSpiral: {
		shape: "sphere",
		dynamics: "crysanthemum-spiral",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemumSpiralV2: {
		shape: "sphere",
		dynamics: "crysanthemum-spiral-v2",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemumCC: {
		shape: "sphere",
		dynamics: "crysanthemum-cc",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["crysanthemum-cc"]
	},
	crysanthemum_nested: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crysanthemumNested: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	multi_nested: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	multiNested: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	strobeDyingEmbers: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["strobe"]
	},
	sparking: {
		shape: "sphere",
		dynamics: "sparking",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	sparkingV2: {
		shape: "sphere",
		dynamics: "sparking-v2",
		modifiers: {
			pistil: !1,
			instantBurst: !0
		},
		effects: []
	},
	crackle: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["crackle"]
	},
	strobe: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["strobe"]
	},
	whiteStrobe: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["white-strobe"]
	},
	glitterStrobe: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["glitter-strobe"]
	},
	weepingWillowComets: {
		shape: "willow",
		dynamics: "falling-comets",
		modifiers: {
			pistil: !1,
			instantBurst: !0
		},
		effects: []
	},
	weepingWillowCometsV2: {
		shape: "willow-up",
		dynamics: "falling-comets",
		modifiers: {
			pistil: !1,
			instantBurst: !0
		},
		effects: []
	},
	weepingWillowCometsV3: {
		shape: "willow-up",
		dynamics: "falling-comets-glitter",
		modifiers: {
			pistil: !1,
			instantBurst: !0
		},
		effects: ["glitter-strobe"]
	},
	weepingWillowArch: {
		shape: "willow-arch",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !0
		},
		effects: []
	},
	fallingLeaves: {
		shape: "sphere",
		dynamics: "falling-leaves",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["glitter-strobe"]
	},
	floral: {
		shape: "flower",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	bouquet: {
		shape: "upward-spray",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	bouquetComet: {
		shape: "upward-spray",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	bouquetCometSphere: {
		shape: "sphere",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	bouquetV2: {
		shape: "upward-spray",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["glitter-strobe"]
	},
	bouquetV2Multicolor: {
		shape: "upward-spray",
		dynamics: "bouquet-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["glitter-strobe"]
	},
	rumble: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["crackle"]
	},
	flower: {
		shape: "flower",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	cat: {
		shape: "cat",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	ring: {
		shape: "ring",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	ringV2: {
		shape: "ring",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	ringComet: {
		shape: "ring",
		dynamics: "comet-ring",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	oval: {
		shape: "oval",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	snow: {
		shape: "sphere",
		dynamics: "snow",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	fish: {
		shape: "fish",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	fishV2: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["flow"]
	},
	fishV3: {
		shape: "sphere",
		dynamics: "swimming-star",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	smiley: {
		shape: "smiley",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	wave: {
		shape: "sphere",
		dynamics: "wave",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	heart: {
		shape: "heart",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	star: {
		shape: "star",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	ghost: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["ghost"]
	},
	"falling-comets": {
		shape: "sphere",
		dynamics: "falling-leaves",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	halfFlash: {
		shape: "half-flash",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	splitFlash: {
		shape: "split-flash",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	sparkling_comet: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["crackle"]
	},
	galaxy: {
		shape: "galaxy",
		dynamics: "galaxy-spin",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	ghostKamuro: {
		shape: "sphere",
		dynamics: "ghost-kamuro",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	ghost_kamuro: {
		shape: "sphere",
		dynamics: "ghost-kamuro",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	doubleHelix: {
		shape: "double-helix",
		dynamics: "double-helix",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	double_helix: {
		shape: "double-helix",
		dynamics: "double-helix",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	crossette: {
		shape: "sphere",
		dynamics: "crossette",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["crossette"]
	},
	sparkling_comet_branches: {
		shape: "sparkling-branches",
		dynamics: "sparkling-branch-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["sparkle-apex"]
	},
	sparklingCometBranches: {
		shape: "sparkling-branches",
		dynamics: "sparkling-branch-comet",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["sparkle-apex"]
	},
	sphere_erratic_dart: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["erratic-dart"]
	},
	sphereErraticDart: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["erratic-dart"]
	},
	peony: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	willow: {
		shape: "sphere",
		dynamics: "willow",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	},
	dahlia: {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !0
		},
		effects: []
	},
	brocade_crown: {
		shape: "sphere",
		dynamics: "willow",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["glitter-strobe"]
	},
	brocadeCrown: {
		shape: "sphere",
		dynamics: "willow",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: ["glitter-strobe"]
	}
};
function k(e) {
	if (!e) return O.random;
	if (O[e]) return O[e];
	let t = String(e).replace(/_([a-z0-9])/g, (e, t) => t.toUpperCase());
	if (O[t]) return O[t];
	let n = String(e).replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
	return O[n] ? O[n] : O.random;
}
function te(e) {
	if (!e) return {
		shape: "sphere",
		dynamics: "standard",
		modifiers: {
			pistil: !1,
			instantBurst: !1
		},
		effects: []
	};
	let t = k(typeof e.preset == "string" ? e.preset : e.preset?.type || e.type || "random"), n = e.shapeType || e.shape || t.shape, r = e.dynamicsType || e.dynamics || (e.flow ? "flow" : null) || t.dynamics, i = {
		pistil: e.pistil === void 0 ? t.modifiers.pistil : !!e.pistil,
		instantBurst: e.instantBurst === void 0 ? t.modifiers.instantBurst : !!e.instantBurst
	}, a = [];
	return Array.isArray(e.effects) ? a = [...e.effects] : (a = [...t.effects], e.strobe && !a.includes("strobe") && a.push("strobe"), e.crackle && !a.includes("crackle") && a.push("crackle"), e.ghost && !a.includes("ghost") && a.push("ghost"), e.ghostFlare && !a.includes("ghost-flare") && a.push("ghost-flare"), e.flow && !a.includes("flow") && a.push("flow"), e.noTrail && !a.includes("no-trail") && a.push("no-trail"), (e.tadpoleFlurry || e.isTadpole) && !a.includes("tadpole-flurry") && a.push("tadpole-flurry"), (e.erraticDart || e.hasErraticDart) && !a.includes("erratic-dart") && a.push("erratic-dart"), (e.slowBurst || e["slow-burst"] || e.slow_burst) && !a.includes("slow-burst") && a.push("slow-burst")), {
		shape: n,
		dynamics: r,
		modifiers: i,
		effects: a
	};
}
var A = [
	"custom",
	"peony",
	"crysanthemum",
	"willow",
	"crossette",
	"strobe",
	"strobe_white",
	"strobe_glitter",
	"dahlia",
	"brocade_crown",
	"crackle",
	"ghost_flare",
	"ring",
	"flow"
], j = {
	ratio: .2,
	triggerTiming: .5,
	distributionMode: "random",
	preset: "custom",
	shapeType: "sphere",
	dynamicsType: "standard",
	pistil: !1,
	pistilColor: "#ffffff",
	instantBurst: !1,
	color: "#ffd700",
	scale: .35,
	effects: ["strobe"],
	burstSound: "standard"
}, M = {
	enabled: !1,
	childShells: [{ ...j }]
};
function N(e) {
	if (!e) return {
		...M,
		enabled: !1
	};
	let t = e.secondBurst || (e.secondBurstEnabled ? M : null);
	if (!t) return {
		...M,
		enabled: !1
	};
	let n = e.secondBurstEnabled === void 0 ? !!t.enabled : !!e.secondBurstEnabled, r = typeof t.ratio == "number" ? Math.max(.01, Math.min(1, t.ratio)) : .2, i = typeof t.triggerTiming == "number" ? Math.max(.15, Math.min(.9, t.triggerTiming)) : .5, a = [
		"random",
		"sequential",
		"simultaneous"
	], o = a.includes(t.distributionMode) ? t.distributionMode : "random", s = [];
	return s = Array.isArray(t.childShells) && t.childShells.length > 0 ? t.childShells.map((e) => {
		let t = typeof e.ratio == "number" ? Math.max(.01, Math.min(1, e.ratio)) : r, n = typeof e.triggerTiming == "number" ? Math.max(.15, Math.min(.9, e.triggerTiming)) : i, s = a.includes(e.distributionMode) ? e.distributionMode : o, c = e.preset && e.preset !== "custom" ? k(e.preset) : null, l = e.shapeType || c?.shape || "sphere", u = e.dynamicsType || c?.dynamics || "standard", d = e.pistil === void 0 ? c?.modifiers?.pistil ?? !1 : !!e.pistil, f = e.instantBurst === void 0 ? c?.modifiers?.instantBurst ?? !1 : !!e.instantBurst, p = Array.isArray(e.effects) ? [...e.effects] : c?.effects ? [...c.effects] : ["strobe"];
		return {
			ratio: t,
			triggerTiming: n,
			distributionMode: s,
			preset: e.preset || "custom",
			shapeType: l,
			dynamicsType: u,
			pistil: d,
			pistilColor: e.pistilColor || "#ffffff",
			instantBurst: f,
			color: e.color || "#ffd700",
			scale: typeof e.scale == "number" ? Math.max(.15, Math.min(.8, e.scale)) : .35,
			effects: p,
			burstSound: e.burstSound || "standard"
		};
	}) : [{
		ratio: r,
		triggerTiming: i,
		distributionMode: o,
		preset: "custom",
		shapeType: "sphere",
		dynamicsType: "standard",
		pistil: !1,
		pistilColor: "#ffffff",
		instantBurst: !1,
		color: "#ffd700",
		scale: .35,
		effects: ["strobe"],
		burstSound: "standard"
	}], {
		enabled: n,
		childShells: s
	};
}
// src/factories/ShellPresetFactory.js
var P = {
	Red: "red",
	Gold: "gold",
	White: "white",
	Blue: "blue"
}, F = [
	16766720,
	16729344,
	49151,
	16738740,
	8388564,
	9055202
], I = class {
	constructor() {
		this.palette = [
			P.Red,
			P.Gold,
			P.White,
			P.Blue
		], this.shapeRegistry = /* @__PURE__ */ new Set(/* @__PURE__ */ "sphere.ring.heart.willow.willow-up.willow-arch.star.lightning.oval.flower.cat.fish.smiley.half-flash.split-flash.galaxy.upward-spray.double-helix.sparkling-branches.sphere_uniform.sphere-uniform.egg.sphere_rings.horsetail.text_word.text-word".split(".")), this.effectRegistry = /* @__PURE__ */ new Set(/* @__PURE__ */ "standard.crackle.flow.snow.wave.flower.floral.falling-leaves.falling-comets.falling-comets-glitter.crysanthemum-trail.crysanthemum-smoke.crysanthemum-spiral.crysanthemum-spiral-v2.crysanthemum-cc.crysanthemum_discrete_trail.crysanthemum-discrete-trail.ghost.ghost-kamuro.galaxy-spin.comet-ring.bouquet-comet.willow.sparking.sparking-v2.swimming-star.double-helix.strobe.white-strobe.glitter-strobe.heart.oval.no-trail.notrail.no-burst.crossette.sparkle-trail.sparkle-apex.sparkling-branch-comet.tadpole-spiral.sphere_rings_wave.sphere-rings-wave.horsetail.horsetail_waterfall".split(".")), this.presetMenuEntries = [
			{
				key: "random",
				label: "Random"
			},
			{
				key: "multi_nested",
				label: "★ Multi Nested Shell"
			},
			{
				key: "comet_cluster",
				label: "Comet Cluster"
			},
			{
				key: "comet_cluster_notrail",
				label: "Comet Cluster No Trail"
			},
			{
				key: "comet_cluster_cc",
				label: "Comet Cluster Color Change"
			},
			{
				key: "comet_cluster_thick",
				label: "Comet Cluster Thick Trail"
			},
			{
				key: "comet_cluster_detached",
				label: "Comet Cluster Detached Beam"
			},
			{
				key: "comet_cluster_cascade",
				label: "Comet Cluster Cascade"
			},
			{
				key: "comet_single",
				label: "Single Comet Beam"
			},
			{
				key: "comet_tadpole_burst",
				label: "Comet Tadpole Burst"
			},
			{
				key: "sparkling_comet_branches",
				label: "Sparkling Comet Multi Branch"
			},
			{
				key: "crysanthemum",
				label: "Chrysanthemum"
			},
			{
				key: "crysanthemum_sphere_rings",
				label: "Chrysanthemum Sphere Rings"
			},
			{
				key: "sphere_rings_cascade",
				label: "Sphere Rings Cascade"
			},
			{
				key: "sphere_rings_strobe",
				label: "Sphere Rings Synchronous Strobe"
			},
			{
				key: "egg_crysanthemum",
				label: "Egg Chrysanthemum"
			},
			{
				key: "crysanthemum_uniform_sphere",
				label: "Chrysanthemum Uniform Sphere"
			},
			{
				key: "crysanthemum_v2",
				label: "Chrysanthemum V2"
			},
			{
				key: "crysanthemum_smoke",
				label: "Chrysanthemum Smoke"
			},
			{
				key: "crysanthemum_spiral",
				label: "Chrysanthemum Spiral"
			},
			{
				key: "crysanthemum_spiral_v2",
				label: "Chrysanthemum Spiral V2"
			},
			{
				key: "crysanthemum_cc",
				label: "Chrysanthemum Color Change"
			},
			{
				key: "crysanthemum_nested",
				label: "Chrysanthemum Nested"
			},
			{
				key: "chrysanthemum_tadpole_burst",
				label: "Chrysanthemum Tadpole Burst"
			},
			{
				key: "strobe_dying_embers",
				label: "Strobe Embers"
			},
			{
				key: "sparking",
				label: "Sparking Ember Decay"
			},
			{
				key: "sparking_v2",
				label: "Sparking V2 Instant Ember"
			},
			{
				key: "crackle",
				label: "Crackle"
			},
			{
				key: "strobe",
				label: "Strobe"
			},
			{
				key: "white_strobe",
				label: "White Strobe"
			},
			{
				key: "glitter_strobe",
				label: "Glitter Strobe"
			},
			{
				key: "strobe_breathing_pulse",
				label: "Breathing Pulse"
			},
			{
				key: "glitter_diamond_scintillation",
				label: "Diamond Scintillation"
			},
			{
				key: "weeping_willow_comets",
				label: "Weeping Willow Comets"
			},
			{
				key: "weeping_willow_comets_v2",
				label: "Weeping Willow Comets V2"
			},
			{
				key: "weeping_willow_comets_v3",
				label: "Weeping Willow Comets V3"
			},
			{
				key: "weeping_willow_arch",
				label: "Weeping Willow Arch"
			},
			{
				key: "falling_leaves",
				label: "Falling Leaves"
			},
			{
				key: "floral",
				label: "Floral"
			},
			{
				key: "bouquet",
				label: "Bouquet Cluster"
			},
			{
				key: "bouquet_comet",
				label: "Bouquet Comets"
			},
			{
				key: "bouquet_comet_sphere",
				label: "Bouquet Sphere"
			},
			{
				key: "bouquet_v2",
				label: "Bouquet V2"
			},
			{
				key: "bouquet_v2_multicolor",
				label: "Bouquet V2 Multi Color"
			},
			{
				key: "rumble",
				label: "Rumble"
			},
			{
				key: "flower",
				label: "Flower"
			},
			{
				key: "cat",
				label: "Cat"
			},
			{
				key: "ring",
				label: "Ring"
			},
			{
				key: "ring_v2",
				label: "Ring V2"
			},
			{
				key: "ring_comet",
				label: "Comet Ring"
			},
			{
				key: "oval",
				label: "Oval"
			},
			{
				key: "snow",
				label: "Snow"
			},
			{
				key: "fish",
				label: "Fish"
			},
			{
				key: "fish_v2",
				label: "Fish V2 Spherical"
			},
			{
				key: "fish_v3",
				label: "Fish V3 Chrysanthemum Swimming"
			},
			{
				key: "smiley",
				label: "Smiley"
			},
			{
				key: "wave",
				label: "Wave"
			},
			{
				key: "heart",
				label: "Heart"
			},
			{
				key: "star",
				label: "Star"
			},
			{
				key: "ghost",
				label: "Ghost"
			},
			{
				key: "falling_comets",
				label: "Falling Comets"
			},
			{
				key: "half_flash",
				label: "Half Sphere Flash"
			},
			{
				key: "split_flash",
				label: "Split Sphere Flash"
			},
			{
				key: "sparkling_comet",
				label: "Sparkling Comet Apex Spark"
			},
			{
				key: "galaxy",
				label: "Spiral Galaxy"
			},
			{
				key: "ghost_kamuro",
				label: "Ghost Kamuro"
			},
			{
				key: "double_helix",
				label: "Double Helix"
			},
			{
				key: "crossette",
				label: "Crossette"
			},
			{
				key: "sphere_erratic_dart",
				label: "Sphere Erratic Dart"
			},
			{
				key: "horsetail_waterfall",
				label: "Horsetail Waterfall"
			},
			{
				key: "text_word",
				label: "Text Word"
			}
		], this.presetsRegistry = /* @__PURE__ */ new Map(), this.initializePresetsRegistry();
	}
	registerPreset(e, t, n = null) {
		this.presetsRegistry.set(e, t), n && this.presetMenuEntries.push(n);
	}
	initializePresetsRegistry() {
		let e = (e, t, n) => {
			this.presetsRegistry.set(e, n), t && t !== e && this.presetsRegistry.set(t, n);
		};
		e("crysanthemum", "crysanthemum", (e) => this.crysanthemumShell(e)), e("crysanthemum_sphere_rings", "crysanthemumSphereRings", (e) => this.crysanthemumSphereRingsShell(e)), e("sphere_rings_cascade", "sphereRingsCascade", (e) => this.sphereRingsCascadeShell(e)), e("sphere_rings_strobe", "sphereRingsStrobe", (e) => this.sphereRingsStrobeShell(e)), e("egg_crysanthemum", "egg_crysanthemum", (e) => this.eggChrysanthemumShell(e)), e("crysanthemum_uniform_sphere", "crysanthemum_uniform_sphere", (e) => this.crysanthemumUniformSphereShell(e)), e("crysanthemum_v2", "crysanthemumV2", (e) => this.crysanthemumV2Shell(e)), e("crysanthemum_smoke", "crysanthemumSmoke", (e) => this.crysanthemumSmokeShell(e)), e("crysanthemum_spiral", "crysanthemumSpiral", (e) => this.crysanthemumSpiralShell(e)), e("crysanthemum_spiral_v2", "crysanthemumSpiralV2", (e) => this.crysanthemumSpiralV2Shell(e)), e("crysanthemum_cc", "crysanthemumCC", (e) => this.crysanthemumCCShell(e)), e("crysanthemum_nested", "crysanthemumNested", (e) => this.crysanthemumNestedShell(e)), e("multi_nested", "multiNested", (e) => this.multiNestedShell(e)), e("sparking", "sparking", (e) => this.sparkingShell(e)), e("sparking_v2", "sparkingV2", (e) => this.sparkingV2Shell(e)), e("crackle", "crackle", (e) => this.crackleShell(e)), e("strobe", "strobe", (e) => this.strobeShell(e)), e("strobe_dying_embers", "strobeDyingEmbers", (e) => this.strobeDyingEmbersShell(e)), e("white_strobe", "whiteStrobe", (e) => this.whiteStrobeShell(e)), e("glitter_strobe", "glitterStrobe", (e) => this.glitterStrobeShell(e)), e("strobe_breathing_pulse", "strobeBreathingPulse", (e) => this.strobeBreathingPulseShell(e)), e("glitter_diamond_scintillation", "glitterDiamondScintillation", (e) => this.glitterDiamondScintillationShell(e)), e("weeping_willow_comets", "weepingWillowComets", (e) => this.weepingWillowCometsShell(e)), e("weeping_willow_comets_v2", "weepingWillowCometsV2", (e) => this.weepingWillowCometsV2Shell(e)), e("weeping_willow_comets_v3", "weepingWillowCometsV3", (e) => this.weepingWillowCometsV3Shell(e)), e("weeping_willow_arch", "weepingWillowArch", (e) => this.weepingWillowArchShell(e)), e("falling_leaves", "fallingLeaves", (e) => this.fallingLeavesShell(e)), e("floral", "floral", (e) => this.floralShell(e)), e("bouquet", "bouquet", (e) => this.bouquetShell(e)), e("bouquet_comet", "bouquetComet", (e) => this.bouquetCometShell(e)), e("bouquet_comet_sphere", "bouquetCometSphere", (e) => this.bouquetCometSphereShell(e)), e("bouquet_v2", "bouquetV2", (e) => this.bouquetV2Shell(e)), e("bouquet_v2_multicolor", "bouquetV2Multicolor", (e) => this.bouquetV2MulticolorShell(e)), e("rumble", "rumble", (e) => this.rumbleShell(e)), e("flower", "flower", (e) => this.flowerShell(e)), e("cat", "cat", (e) => this.catShell(e)), e("ring", "ring", (e) => this.ringShell(e)), e("ring_v2", "ringV2", (e) => this.ringShellV2(e)), e("ring_comet", "ringComet", (e) => this.cometRingShell(e)), e("oval", "oval", (e) => this.ovalShell(e)), e("snow", "snow", (e) => this.snowShell(e)), e("fish", "fish", (e) => this.fishShell(e)), e("fish_v2", "fishV2", (e) => this.fishV2Shell(e)), e("fish_v3", "fishV3", (e) => this.fishV3Shell(e)), e("smiley", "smiley", (e) => this.smileyShell(e)), e("wave", "wave", (e) => this.waveShell(e)), e("heart", "heart", (e) => this.hearthShell(e)), e("star", "star", (e) => this.starShell(e)), e("ghost", "ghost", (e) => this.ghostShell(e)), e("falling_comets", "falling-comets", (e) => this.fallingCometsShell(e)), e("half_flash", "halfFlash", (e) => this.halfFlashShell(e)), e("split_flash", "splitFlash", (e) => this.splitFlashShell(e)), e("comet_cluster", "comet_cluster", (e) => this.cometCluster(e)), e("comet_cluster_notrail", "comet_cluster_notrail", (e) => this.cometClusterNoTrail(e)), e("comet_cluster_cc", "comet_cluster_cc", (e) => this.cometClusterCC(e)), e("comet_cluster_thick", "comet_cluster_thick", (e) => this.cometClusterThick(e)), e("comet_cluster_detached", "comet_cluster_detached", (e) => this.cometClusterDetached(e)), e("comet_cluster_cascade", "comet_cluster_cascade", (e) => this.cometClusterCascade(e)), e("comet_single", "comet_single", (e) => this.cometSingle(e)), e("comet_single_beam", "comet_single_beam", (e) => this.cometSingle(e)), e("comet_tadpole_burst", "cometTadpoleBurst", (e) => this.cometTadpoleBurst(e)), e("chrysanthemum_tadpole_burst", "chrysanthemumTadpoleBurst", (e) => this.chrysanthemumTadpoleBurst(e)), e("sparkling_comet", "sparkling_comet", (e) => this.sparklingComet(e)), e("sparkling_comet_branches", "sparklingCometBranches", (e) => this.sparklingCometBranchesShell(e)), e("galaxy", "galaxy", (e) => this.galaxyShell(e)), e("ghost_kamuro", "ghostKamuro", (e) => this.ghostKamuroShell(e)), e("double_helix", "doubleHelix", (e) => this.doubleHelixShell(e)), e("crossette", "crossette", (e) => this.crossetteShell(e)), e("sphere_erratic_dart", "sphereErraticDart", (e) => this.sphereErraticDartShell(e)), e("horsetail_waterfall", "horsetailWaterfall", (e) => this.horsetailWaterfallShell(e)), e("text_word", "textWord", (e) => this.textWordShell(e)), e("horsetail", "horsetail", (e) => this.horsetailWaterfallShell(e));
	}
	randomPreset() {
		let e = Math.random();
		return e < .1 ? this.crysanthemumShell() : e < .14 ? this.crysanthemumV2Shell() : e < .22 ? this.crackleShell() : e < .27 ? this.strobeShell() : e < .32 ? this.whiteStrobeShell() : e < .37 ? this.glitterStrobeShell() : e < .42 ? this.weepingWillowCometsShell() : e < .47 ? this.fallingLeavesShell() : e < .52 ? this.floralShell() : e < .57 ? this.rumbleShell() : e < .61 ? this.flowerShell() : e < .67 ? this.catShell() : e < .74 ? this.ringShell() : e < .82 ? this.cometRingShell() : e < .86 ? this.ringShellV2() : e < .9 ? this.ovalShell() : e < .93 ? this.snowShell() : e < .96 ? this.fishShell() : e < .972 ? this.smileyShell() : e < .982 ? this.waveShell() : e < .988 ? this.fallingCometsShell() : e < .992 ? this.starShell() : e < .995 ? this.halfFlashShell() : e < .998 ? this.splitFlashShell() : this.hearthShell();
	}
	getPresetMenuEntries() {
		return this.presetMenuEntries.map((e) => ({ ...e }));
	}
	createPresetByKey(e) {
		let t = this.presetsRegistry.get(e);
		return t ? this.validatePreset(t()) : null;
	}
	basePreset(e = 1) {
		let t = Math.random() < .25, n = Math.random() < .72, r = this.randomColor(n ? { limitWhite: !0 } : void 0), i = n && Math.random() < .42, a = i ? this.makePistilColor(r) : null, o = n && (Math.random() < .2 || r === P.White) ? a || this.randomColor({
			notColor: r,
			limitWhite: !0
		}) : null, s = !i && r !== P.White && Math.random() < .42, c = t ? 1.1 : 1.25;
		return c *= 1, {
			shellSize: e,
			spreadSize: 300 + e * 100,
			starLife: 900 + e * 200,
			starDensity: c,
			color: r,
			secondColor: o,
			glitter: t ? "light" : "",
			glitterColor: this.whiteOrGold(),
			pistil: i,
			pistilColor: a,
			streamers: s,
			shellType: "generic",
			shapeType: "sphere",
			effectType: "standard",
			shapeRenderMode: "filled",
			particleCountMultiplier: 1,
			strobe: !1,
			crackle: !1,
			launchTrail: !0
		};
	}
	crysanthemumShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crysanthemum",
			shapeType: "sphere",
			effectType: "standard",
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	eggChrysanthemumShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "egg_crysanthemum",
			shape: "egg",
			shapeType: "egg",
			effectType: "crysanthemum-trail",
			dynamicsType: "crysanthemum-trail",
			launchTrail: !0,
			starLifeMultiplier: 1.15,
			starLife: 1500 + e * 200,
			particleCountMultiplier: 1,
			hasBurstSmoke: !1,
			noSmoke: !0,
			pistil: !1
		};
	}
	crysanthemumSphereRingsShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crysanthemum_sphere_rings",
			shape: "sphere_rings",
			shapeType: "sphere_rings",
			effectType: "crysanthemum-trail",
			dynamicsType: "crysanthemum-trail",
			launchTrail: !0,
			ringCount: 5,
			starLifeMultiplier: 1.2,
			starLife: 1600 + e * 200,
			particleCountMultiplier: 1.1,
			hasBurstSmoke: !1,
			noSmoke: !0,
			pistil: !1
		};
	}
	sphereRingsCascadeShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "sphere_rings_cascade",
			shape: "sphere_rings",
			shapeType: "sphere_rings",
			effectType: "sphere_rings_wave",
			dynamicsType: "sphere_rings_wave",
			ringWaveMode: "equator-outward",
			ringCount: 5,
			launchTrail: !0,
			starLifeMultiplier: 1.35,
			starLife: 1800 + e * 250,
			particleCountMultiplier: 1.25,
			hasBurstSmoke: !1,
			noSmoke: !0,
			pistil: !1
		};
	}
	sphereRingsStrobeShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "sphere_rings_strobe",
			shape: "sphere_rings",
			shapeType: "sphere_rings",
			effectType: "strobe",
			dynamicsType: "standard",
			activeEffects: ["strobe"],
			strobe: !0,
			ringCount: 5,
			launchTrail: !0,
			starLifeMultiplier: 1.3,
			starLife: 1700 + e * 200,
			particleCountMultiplier: 1.2,
			hasBurstSmoke: !1,
			noSmoke: !0,
			pistil: !1
		};
	}
	crysanthemumUniformSphereShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crysanthemum_uniform_sphere",
			shapeType: "sphere_uniform",
			effectType: "crysanthemum_discrete_trail",
			dynamicsType: "crysanthemum_discrete_trail",
			launchTrail: !0,
			drag: .68,
			starLifeMultiplier: 1.25,
			starLife: 1600 + e * 250,
			particleCountMultiplier: 1.35,
			pistil: !1
		};
	}
	crysanthemumNestedShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crysanthemumNested",
			shapeType: "sphere",
			effectType: "standard",
			nestedBurst: !0,
			starLife: 1e3 + e * 150,
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	multiNestedShell(e = 1, t = null, n = "concentric") {
		return {
			...this.basePreset(e),
			shellType: "multiNested",
			multiNested: !0,
			nestingMode: n || "concentric",
			shapeType: "sphere",
			dynamicsType: "standard",
			effectType: "standard",
			stages: t || [
				{
					shapeType: "sphere",
					dynamicsType: "standard",
					color: "#ff4400",
					delay: 0,
					scale: 1,
					particleCountMultiplier: 1,
					effects: ["strobe"]
				},
				{
					shapeType: "ring",
					dynamicsType: "flow",
					color: "#00e5ff",
					delay: .45,
					scale: .82,
					particleCountMultiplier: 1,
					effects: []
				},
				{
					shapeType: "sphere",
					dynamicsType: "crossette",
					color: "#ffd700",
					delay: .9,
					scale: .65,
					particleCountMultiplier: 1,
					effects: ["crossette"]
				},
				{
					shapeType: "sphere",
					dynamicsType: "willow",
					color: "#ffffff",
					delay: 1.35,
					scale: .5,
					particleCountMultiplier: 1,
					effects: ["glitter-strobe"]
				}
			],
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	crysanthemumV2Shell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crysanthemumV2",
			shapeType: "sphere",
			effectType: "crysanthemum-trail",
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	crysanthemumSmokeShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crysanthemumSmoke",
			shapeType: "sphere",
			effectType: "crysanthemum-smoke",
			starLife: 1800 + e * 400,
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	crysanthemumSpiralShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crysanthemumSpiral",
			shapeType: "sphere",
			effectType: "crysanthemum-spiral",
			particleCountMultiplier: 1.25,
			starLife: 1600 + e * 350,
			launchTrail: !0,
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	crysanthemumSpiralV2Shell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crysanthemumSpiralV2",
			shapeType: "sphere",
			effectType: "crysanthemum-spiral-v2",
			particleCountMultiplier: 1.35,
			starLife: 1700 + e * 350,
			launchTrail: !0,
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	sparkingShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "sparking",
			shapeType: "sphere",
			effectType: "sparking",
			starLife: 1600 + e * 400,
			particleCountMultiplier: 1.6,
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			pistil: !1,
			doubleRing: !1
		};
	}
	sparkingV2Shell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "sparkingV2",
			shapeType: "sphere",
			effectType: "sparking-v2",
			starLife: 1600 + e * 400,
			particleCountMultiplier: 1.6,
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			pistil: !1,
			doubleRing: !1
		};
	}
	crysanthemumCCShell(e = 1) {
		let t = this.basePreset(e), n = t.color, r = {
			white: 16729344,
			16766720: 49151,
			16729344: 8388564,
			49151: 16738740,
			16738740: 8388564,
			8388564: 9055202,
			9055202: 16766720
		}[n] || 16777215;
		return {
			...t,
			color: n,
			secondColor: r,
			shellType: "crysanthemumCC",
			shapeType: "sphere",
			effectType: "crysanthemum-cc",
			effects: ["crysanthemum-cc"],
			particleCountMultiplier: 1.35,
			starLife: 2800 + e * 400,
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	rumbleShell(e = 1) {
		return {
			...this.basePreset(e),
			pistil: !0,
			shellType: "rumble",
			shapeType: "sphere",
			effectType: "standard",
			crackle: !0,
			half: !0
		};
	}
	crackleShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crackle",
			shapeType: "sphere",
			effectType: "standard",
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1,
			crackle: !0
		};
	}
	flowerShell(e = 1) {
		return {
			...this.basePreset(e),
			pistil: !0,
			shellType: "flower",
			shapeType: "flower",
			effectType: "flower",
			flower: !0
		};
	}
	catShell(e = 1) {
		return {
			...this.basePreset(e),
			pistil: !1,
			shellType: "cat",
			shapeType: "cat",
			effectType: "standard",
			cat: !0
		};
	}
	ringShellV2(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "ringV2",
			shapeType: "ring",
			effectType: "standard",
			strobe: !1,
			shapeRenderMode: "outline",
			particleCountMultiplier: 1.2,
			outlineThickness: .04,
			ringColorMode: "sequential",
			ringPalette: this.palette,
			ringColorSpeed: 1,
			ringLoop: !1,
			doubleRing: !0
		};
	}
	ringShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "ring",
			shapeType: "ring",
			particleCount: Math.round(120 * e),
			effectType: "standard",
			shapeRenderMode: "jupiter",
			particleCountMultiplier: .67,
			outlineThickness: .035,
			ringCoreRatio: .42,
			ringCoreJitter: .08,
			doubleRing: !1,
			streamers: Math.random() < .3
		};
	}
	cometRingShell(e = 1.8) {
		return {
			...this.basePreset(e),
			shellType: "ringComet",
			shapeType: "ring",
			effectType: "comet-ring",
			shapeRenderMode: "outline",
			outlineThickness: .035,
			doubleRing: !1,
			particleCountMultiplier: .85,
			color: this.whiteOrGold(),
			streamers: !1,
			pistil: !1,
			particleSize: 14
		};
	}
	strobeShell(e = 1.25) {
		return {
			...this.basePreset(e),
			shellType: "strobe",
			shapeType: "sphere",
			effectType: "standard",
			strobe: !0,
			starLife: 1e3 + e * 150,
			particleCountMultiplier: 1.25,
			pistil: Math.random() < .4
		};
	}
	strobeDyingEmbersShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "strobeDyingEmbers",
			shapeType: "sphere",
			effectType: "strobe",
			strobe: !0,
			starLife: 2e3 + e * 400,
			particleCountMultiplier: .85
		};
	}
	whiteStrobeShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "whiteStrobe",
			shapeType: "sphere",
			effectType: "white-strobe",
			strobe: !0,
			starLife: 1200 + e * 150,
			particleCountMultiplier: 1.3,
			pistil: Math.random() < .4
		};
	}
	strobeBreathingPulseShell(e = 1) {
		return {
			...this.basePreset(e),
			color: 16738740,
			shellType: "strobe_breathing_pulse",
			shapeType: "sphere",
			dynamicsType: "standard",
			effectType: "standard",
			effects: ["breathing-pulse"],
			starLife: 3200 + e * 400,
			burstSmoke: !1,
			hasBurstSmoke: !1,
			noSmoke: !0
		};
	}
	glitterDiamondScintillationShell(e = 1) {
		return {
			...this.basePreset(e),
			color: 16777215,
			shellType: "glitter_diamond_scintillation",
			shapeType: "sphere",
			dynamicsType: "standard",
			effectType: "standard",
			effects: ["diamond-scintillation"],
			starLife: 3e3 + e * 400,
			burstSmoke: !1,
			hasBurstSmoke: !1,
			noSmoke: !0
		};
	}
	glitterStrobeShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "glitterStrobe",
			shapeType: "sphere",
			effectType: "glitter-strobe",
			strobe: !0,
			starLife: 1500 + e * 200,
			particleCountMultiplier: 1.6,
			pistil: !1
		};
	}
	floralShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "floral",
			shapeType: "flower",
			effectType: "floral",
			particleCountMultiplier: 1.25,
			floral: !0,
			starDensity: .12,
			starLife: 500 + e * 50,
			starLifeVariation: .5,
			pistil: !1,
			streamers: !1
		};
	}
	bouquetShell(e = 1) {
		return {
			type: "bouquet",
			shellType: "bouquet",
			shapeType: "sphere",
			effectType: "standard",
			shellSize: e
		};
	}
	bouquetCometShell(e = 1) {
		return {
			type: "bouquetComet",
			shellType: "bouquetComet",
			shapeType: "sphere",
			effectType: "standard",
			shellSize: e
		};
	}
	bouquetCometSphereShell(e = 1) {
		return {
			type: "bouquetCometSphere",
			shellType: "bouquetCometSphere",
			shapeType: "sphere",
			effectType: "standard",
			shellSize: e
		};
	}
	bouquetV2Shell(e = 1) {
		return {
			type: "bouquetv2",
			shellType: "bouquetv2",
			shapeType: "sphere",
			effectType: "standard",
			shellSize: e,
			colorMode: "parent",
			launchTrail: !0
		};
	}
	bouquetV2MulticolorShell(e = 1) {
		return {
			type: "bouquetv2",
			shellType: "bouquetv2",
			shapeType: "sphere",
			effectType: "standard",
			shellSize: e,
			colorMode: "random",
			launchTrail: !0
		};
	}
	fallingLeavesShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "fallingLeaves",
			shapeType: "sphere",
			effectType: "falling-leaves",
			particleCountMultiplier: .75,
			fallingLeaves: !0,
			starDensity: .12,
			starLife: 1200 + e * 120,
			starLifeVariation: .5,
			glitter: "light",
			glitterColor: P.Gold,
			pistil: !1,
			streamers: !1
		};
	}
	ovalShell(e = 1) {
		return {
			...this.basePreset(e),
			pistil: !1,
			shellType: "oval",
			shapeType: "oval",
			effectType: "oval",
			oval: !0
		};
	}
	snowShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "snow",
			shapeType: "sphere",
			effectType: "snow",
			snow: !0
		};
	}
	fishShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "fish",
			shapeType: "fish",
			effectType: "flow",
			fish: !0
		};
	}
	fishV2Shell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "fishV2",
			shapeType: "sphere",
			effectType: "flow",
			fish: !0
		};
	}
	fishV3Shell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "fishV3",
			shapeType: "sphere",
			effectType: "swimming-star",
			dynamicsType: "swimming-star",
			effects: [],
			fish: !0,
			flow: !0,
			noTrail: !0,
			pistil: !1,
			pistilColor: null,
			glitter: "",
			streamers: !1,
			nestedBurst: !1,
			isNestedChild: !1,
			flower: !1,
			smiley: !1,
			hearth: !1,
			star: !1,
			doubleRing: !1
		};
	}
	smileyShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "smiley",
			shapeType: "smiley",
			effectType: "strobe",
			smiley: !0
		};
	}
	waveShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "wave",
			shapeType: "sphere",
			effectType: "wave",
			strobe: !0,
			wave: !0
		};
	}
	hearthShell(e = 1) {
		return {
			...this.basePreset(e),
			pistil: !1,
			starLife: 850 + e * 150,
			shellType: "heart",
			shapeType: "heart",
			effectType: "heart",
			shapeRenderMode: "outline",
			particleCountMultiplier: .85,
			outlineThickness: .03,
			heartEdgeBias: 1,
			heartSegmentCount: 96,
			heartEdgeSharpness: 1.06,
			hearth: !0
		};
	}
	starShell(e = 1) {
		return {
			...this.basePreset(e),
			pistil: !1,
			starLife: 850 + e * 150,
			shellType: "star",
			shapeType: "star",
			effectType: "star",
			shapeRenderMode: "outline",
			particleCountMultiplier: .9,
			star: !0
		};
	}
	ghostShell(e = 1) {
		let t = this.basePreset(e), n = t.color;
		return {
			...t,
			color: n,
			shellType: "ghost",
			shapeType: "sphere",
			effectType: "ghost",
			effects: ["ghost"],
			particleCountMultiplier: 1.35,
			starLife: 2800 + e * 400,
			ghost: !0
		};
	}
	cometCluster(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_cluster",
			shapeType: "sphere",
			effectType: "standard",
			clusterCount: 8 + Math.floor(Math.random() * 4),
			particleCountMultiplier: 1.5,
			crackle: !1,
			launchTrail: !0
		};
	}
	cometClusterNoTrail(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_cluster_notrail",
			shapeType: "sphere",
			effectType: "standard",
			effects: ["no-trail"],
			noTrail: !0,
			clusterCount: 8 + Math.floor(Math.random() * 4),
			particleCountMultiplier: 1.5,
			crackle: !1,
			launchTrail: !1,
			launchSmoke: !0
		};
	}
	cometClusterCC(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_cluster_cc",
			shapeType: "sphere",
			effectType: "standard",
			effects: [],
			clusterCount: 8 + Math.floor(Math.random() * 4),
			particleCountMultiplier: 1.5,
			crackle: !1,
			launchTrail: !0,
			launchSmoke: !0
		};
	}
	cometClusterThick(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_cluster_thick",
			shapeType: "sphere",
			effectType: "standard",
			effects: [],
			clusterCount: 8 + Math.floor(Math.random() * 4),
			particleCountMultiplier: 1.5,
			crackle: !1,
			launchTrail: !0,
			thickTrail: !0
		};
	}
	cometClusterDetached(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_cluster_detached",
			shapeType: "sphere",
			effectType: "standard",
			effects: ["no-trail"],
			noTrail: !0,
			clusterCount: 36 + Math.floor(Math.random() * 9),
			detachedHeadScale: .42,
			detachedLifetime: 2.5,
			detachedSweepDuration: .22,
			particleCountMultiplier: 1.5,
			crackle: !1,
			launchTrail: !0,
			detachedTrail: !0,
			cometTrail: "detached"
		};
	}
	cometClusterCascade(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_cluster_cascade",
			shapeType: "sphere",
			effectType: "standard",
			clusterCount: 18 + Math.floor(Math.random() * 5),
			particleCountMultiplier: 1.5,
			crackle: !1,
			launchTrail: !0,
			thickTrail: !0,
			isCascade: !0,
			shellSize: e
		};
	}
	cometSingle(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_single",
			shapeType: "sphere",
			effectType: "standard",
			clusterCount: 1,
			isSingleComet: !0,
			superBrightHead: !0,
			particleCountMultiplier: 1,
			crackle: !1,
			launchTrail: !0,
			color: this.randomColor({ limitWhite: !0 }),
			shellSize: e
		};
	}
	cometTadpoleBurst(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_tadpole_burst",
			shapeType: "sphere",
			dynamicsType: "tadpole-spiral",
			effectType: "standard",
			effects: [],
			clusterCount: 1,
			isTadpole: !0,
			particleCountMultiplier: 1.2,
			launchTrail: !0,
			burstSmoke: !1,
			noSmoke: !0,
			launchSmoke: !1,
			color: this.randomColor({ limitWhite: !0 }),
			shellSize: e
		};
	}
	chrysanthemumTadpoleBurst(e = 1) {
		return {
			type: "shell",
			shellType: "chrysanthemum_tadpole_burst",
			shapeType: "sphere",
			dynamicsType: "tadpole-spiral",
			effectType: "tadpole-flurry",
			effects: ["tadpole-flurry"],
			isTadpoleShell: !0,
			clusterCount: 22,
			particleCountMultiplier: 2.2,
			burstSmoke: !1,
			noSmoke: !0,
			launchSmoke: !1,
			color: this.randomColor({ limitWhite: !0 }),
			shellSize: e
		};
	}
	sparklingComet(e = 1) {
		return {
			type: "comet_cluster",
			shellType: "comet_cluster",
			shapeType: "sphere",
			effectType: "standard",
			clusterCount: 6 + Math.floor(Math.random() * 3),
			particleCountMultiplier: 1.2,
			crackle: !1,
			launchTrail: !0,
			sparkleAtEnd: !0,
			maxDecayTime: 1.8,
			strobe: !0
		};
	}
	sparklingCometBranchesShell(e = 1) {
		return {
			type: "sparkling_comet_branches",
			shellType: "sparkling_comet_branches",
			shapeType: "sparkling-branches",
			dynamicsType: "sparkling-branch-comet",
			effectType: "sparkle-trail",
			effects: ["sparkle-apex"],
			branchCount: 5,
			cometsPerBranch: 5,
			sparkleAtEnd: !0,
			thinTrail: !0,
			launchTrail: !0,
			instantBurst: !1,
			color: this.randomColor({ limitWhite: !0 }),
			shellSize: e
		};
	}
	fallingCometsShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "fallingComets",
			shapeType: "sphere",
			effectType: "falling-comets",
			particleCountMultiplier: .4,
			starLife: 2e3 + e * 500,
			color: this.whiteOrGold(),
			crackle: !1,
			launchTrail: !0,
			pistil: !1,
			streamers: !1
		};
	}
	validatePreset(e) {
		let t = e?.shapeType ?? "sphere", n = e?.effectType ?? "standard", r = !this.shapeRegistry.has(t), i = !this.effectRegistry.has(n), a = [];
		return r && a.push(`[ShellPresetFactory] Unknown shapeType "${t}". Falling back to sphere.`), i && a.push(`[ShellPresetFactory] Unknown effectType "${n}". Falling back to standard.`), {
			...e,
			shapeType: r ? "sphere" : t,
			effectType: i ? "standard" : n,
			strobe: !!e?.strobe,
			crackle: !!e?.crackle,
			__contract: {
				shapeFallback: r,
				effectFallback: i,
				warnings: a
			}
		};
	}
	weepingWillowCometsShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "weepingWillow",
			shapeType: "willow",
			effectType: "falling-comets",
			instantBurst: !0,
			color: this.whiteOrGold(),
			particleCountMultiplier: .7,
			starLife: 2e3 + e * 500,
			pistil: !1
		};
	}
	weepingWillowCometsV2Shell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "weepingWillowV2",
			shapeType: "willow-up",
			effectType: "falling-comets",
			instantBurst: !0,
			color: this.whiteOrGold(),
			particleCountMultiplier: .8,
			starLife: 2500 + e * 500,
			pistil: !1
		};
	}
	weepingWillowCometsV3Shell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "weepingWillowV3",
			shapeType: "willow-up",
			effectType: "falling-comets-glitter",
			instantBurst: !0,
			color: this.whiteOrGold(),
			particleCountMultiplier: .8,
			starLife: 2500 + e * 500,
			pistil: !1
		};
	}
	weepingWillowArchShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "weepingWillowArch",
			shapeType: "willow-arch",
			dynamicsType: "bouquet-comet",
			effectType: "falling-comets",
			instantBurst: !0,
			color: this.whiteOrGold(),
			particleCountMultiplier: 1,
			starLife: 3800,
			pistil: !1
		};
	}
	splitFlashShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "splitFlash",
			shapeType: "split-flash",
			effectType: "standard",
			particleCountMultiplier: 2.2,
			launchTrail: !0
		};
	}
	halfFlashShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "halfFlash",
			shapeType: "half-flash",
			effectType: "standard",
			particleCountMultiplier: 2.1,
			launchTrail: !0
		};
	}
	randomColor(e = {}) {
		let t = F[Math.floor(Math.random() * F.length)];
		return e.limitWhite && Math.random() < .2 ? P.White : (e.notColor, t);
	}
	makePistilColor(e) {
		return e === P.White ? P.Gold : P.White;
	}
	whiteOrGold() {
		return Math.random() < .5 ? P.White : P.Gold;
	}
	galaxyShell(e = 1.45) {
		let t = Math.random() < .5 ? 46296 : 43158;
		return {
			...this.basePreset(e),
			shellType: "galaxy",
			shapeType: "galaxy",
			effectType: "galaxy-spin",
			color: t,
			secondColor: 16766720,
			strobe: !1,
			pistil: !1,
			glitter: "light",
			glitterColor: 16766720,
			particleCountMultiplier: .65,
			shellSize: e
		};
	}
	ghostKamuroShell(e = 1.45) {
		return {
			...this.basePreset(e),
			shellType: "ghostKamuro",
			shapeType: "sphere",
			effectType: "ghost-kamuro",
			color: 16766720,
			secondColor: 16769126,
			starLife: 2400 + e * 450,
			particleCountMultiplier: .75,
			crackle: !1,
			strobe: !1,
			pistil: !1,
			launchTrail: !0,
			thickTrail: !0
		};
	}
	doubleHelixShell(e = 1) {
		let t = this.randomColor({ limitWhite: !0 }), n = this.randomColor({
			notColor: t,
			limitWhite: !0
		});
		return {
			...this.basePreset(e),
			shellType: "doubleHelix",
			shapeType: "double-helix",
			effectType: "double-helix",
			color: t,
			secondColor: n,
			starLife: 1800 + e * 300,
			particleCountMultiplier: .85,
			crackle: !1,
			strobe: !1,
			pistil: !1,
			launchTrail: !0
		};
	}
	crossetteShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "crossette",
			shapeType: "sphere",
			dynamicsType: "crossette",
			effectType: "crossette",
			crossette: !0,
			color: this.randomColor({ limitWhite: !0 }),
			particleCountMultiplier: 1.15,
			starLife: 2600 + e * 300,
			pistil: !1,
			launchTrail: !0
		};
	}
	sphereErraticDartShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "sphere_erratic_dart",
			shapeType: "sphere",
			dynamicsType: "standard",
			effectType: "erratic-dart",
			effects: ["erratic-dart"],
			erraticDart: !0,
			color: this.randomColor({ limitWhite: !0 }),
			particleCountMultiplier: 1.05,
			starLife: 2600 + e * 300,
			pistil: !1,
			launchTrail: !0,
			burstSmoke: !1
		};
	}
	horsetailWaterfallShell(e = 1) {
		return {
			...this.basePreset(e),
			shellType: "horsetail_waterfall",
			shapeType: "horsetail",
			dynamicsType: "horsetail",
			effectType: "horsetail",
			color: 16758832,
			color2: 16765557,
			particleCountMultiplier: .2,
			starLife: 3800 + e * 400,
			particleSize: 14,
			pistil: !1,
			launchTrail: !0,
			burstSmoke: !1
		};
	}
	textWordShell(e = 1, t = {}) {
		let n = p(t.word || t.textWord || "HELLO") || "HELLO", r = h(n, {
			scale: t.textScale ?? .38,
			letterSpacing: t.letterSpacing ?? 1.5
		}), i = t.textScale ?? .38, a = t.letterSpacing ?? 1.5;
		return {
			...this.basePreset(e),
			shellType: "text_word",
			shapeType: "text_word",
			dynamicsType: "standard",
			effectType: t.effectType ?? "standard",
			color: t.color || 16638023,
			textWord: n,
			textPoints: r,
			_glyphCacheKey: `${n}_${i}_${a}`,
			textScale: i,
			letterSpacing: a,
			tiltAngle: t.tiltAngle ?? 18,
			drag: 1.85,
			starLife: 2400 + e * 400,
			starLifeMultiplier: 1.2,
			pistil: !1,
			instantBurst: !1,
			burstSmoke: !1,
			launchSmoke: !1
		};
	}
}, L = [
	{
		name: "ruby_gold",
		primary: "#ff2244",
		secondary: "#ffbb22"
	},
	{
		name: "electric_cyan",
		primary: "#00e5ff",
		secondary: "#ffffff"
	},
	{
		name: "emerald_lime",
		primary: "#00e676",
		secondary: "#b2ff59"
	},
	{
		name: "amethyst_rose",
		primary: "#d500f9",
		secondary: "#ff4081"
	},
	{
		name: "royal_twilight",
		primary: "#3d5afe",
		secondary: "#ff9100"
	},
	{
		name: "golden_kamuro",
		primary: "#ffaa00",
		secondary: "#ffe082"
	},
	{
		name: "silver_strobe",
		primary: "#ffffff",
		secondary: "#80d8ff"
	}
], R = {
	mini: {
		minParticles: 120,
		maxParticles: 220,
		allowedShapes: [
			"sphere",
			"ring",
			"heart",
			"star",
			"flower"
		],
		allowedDynamics: [
			"standard",
			"flow",
			"falling-leaves",
			"sparking"
		],
		allowedEffects: [
			"strobe",
			"white-strobe",
			"glitter-strobe",
			"sparkle-apex"
		],
		pistilChance: .15,
		strobeChance: .4
	},
	medium: {
		minParticles: 280,
		maxParticles: 450,
		allowedShapes: [
			"sphere",
			"ring",
			"heart",
			"star",
			"flower",
			"galaxy",
			"oval"
		],
		allowedDynamics: [
			"willow",
			"falling-comets",
			"crysanthemum-spiral-v2",
			"crossette",
			"flow"
		],
		allowedEffects: [
			"strobe",
			"glitter-strobe",
			"crackle",
			"ghost",
			"crossette"
		],
		pistilChance: .45,
		strobeChance: .6
	},
	grand: {
		minParticles: 550,
		maxParticles: 850,
		allowedShapes: [
			"sphere",
			"galaxy",
			"double-helix",
			"star",
			"ring",
			"sparkling-branches"
		],
		allowedDynamics: [
			"willow",
			"falling-comets-glitter",
			"crysanthemum-spiral-v2",
			"double-helix",
			"ghost-kamuro"
		],
		allowedEffects: [
			"strobe",
			"crackle",
			"ghost",
			"crossette",
			"tadpole-flurry",
			"diamond-scintillation"
		],
		pistilChance: .8,
		strobeChance: .85
	},
	super: {
		minParticles: 900,
		maxParticles: 1250,
		allowedShapes: [
			"sphere",
			"galaxy",
			"double-helix",
			"sparkling-branches",
			"sphere_rings"
		],
		allowedDynamics: [
			"ghost-kamuro",
			"falling-comets-glitter",
			"crysanthemum-spiral-v2",
			"willow"
		],
		allowedEffects: [
			"strobe",
			"glitter-strobe",
			"crackle",
			"ghost",
			"crossette",
			"breathing-pulse"
		],
		pistilChance: 1,
		strobeChance: .95
	}
}, z = class {
	constructor() {
		this.history = [];
	}
	generate(e = {}) {
		let t = e.tier && R[e.tier] ? e.tier : "mini", n = R[t], r = e.shape || this.pickRandom(n.allowedShapes), i = e.dynamics || this.pickRandom(n.allowedDynamics), a = e.palette || this.pickRandom(L), o = e.particleCount ? Math.max(n.minParticles, Math.min(n.maxParticles, e.particleCount)) : Math.floor(n.minParticles + Math.random() * (n.maxParticles - n.minParticles)), s = {}, c = [];
		(e.pistil === void 0 ? Math.random() < n.pistilChance : e.pistil) && (s.pistil = !0, s.pistilColor = a.secondary, s.pistilCount = Math.floor(o * .25));
		let l = e.effect || (Math.random() < n.strobeChance ? this.pickRandom(n.allowedEffects) : null);
		l && E.includes(l) && (c.push(l), s[l] = !0);
		let u = e.speed || (t === "super" ? 36 : t === "grand" ? 32 : t === "medium" ? 28 : 24);
		return {
			type: "firework",
			shape: r,
			shapeRenderMode: r === "heart" || r === "ring" || r === "star" ? "outline" : "standard",
			effect: i,
			color: e.color || a.primary,
			secondaryColor: a.secondary,
			particleCount: o,
			speed: u,
			size: e.size || (t === "super" ? 4.5 : t === "grand" ? 3.8 : t === "medium" ? 3.2 : 2.6),
			effectTags: c,
			modifiers: s,
			burstSmoke: !0,
			tier: t,
			proceduralName: "procedural_" + t + "_" + r + "_" + i
		};
	}
	generateVolley(e = 3, t = {}) {
		let n = [], r = Math.max(1, Math.min(e, 8));
		for (let e = 0; e < r; e++) {
			let i = e * .25, a = (e - (r - 1) * .5) * 6.5, o = this.generate(t);
			n.push({
				shell: o,
				delay: i,
				offsetPosition: {
					x: a,
					y: 0,
					z: (Math.random() - .5) * 6
				}
			});
		}
		return n;
	}
	pickRandom(e) {
		return !e || e.length === 0 ? null : e[Math.floor(Math.random() * e.length)];
	}
}, ne = new z(), B = .6, re = 10, ie = 3.8, V = .95, ae = class t {
	static STATE = {
		INIT: "init",
		LAUNCHING: "launching",
		BURSTED: "bursted",
		DEAD: "dead"
	};
	constructor({ position: r, velocity: i, burstHeight: a, color: o, shape: s, shellType: c = null, shapeType: l = null, preset: u = null }) {
		this.type = "shell", this.velocity = i, this.burstHeight = a, this.color = o, this.shape = s, this.shellType = c ?? s, this.shapeType = l ?? s, this.preset = u, this.gravityScale = u?.gravityScale === void 0 ? 1 : u.gravityScale, this.age = 0, this.state = t.STATE.INIT, this.basePosition = r.clone(), this.prevPosition = r.clone(), this.initialY = r.y, this.trailOffset = new e.Vector3(0, 0, 0), this.prevTrailOffset = new e.Vector3(0, 0, 0), this.sputterKick = new e.Vector3(0, 0, 0);
		let d = n.ASCENT;
		this.wobbleEnabled = d?.wobbleEnabled !== !1, this.wobblePhase = Math.random() * Math.PI * 2;
		let f = d?.baseWobbleFreq ?? 15;
		this.wobbleFreq = f * (.45 + Math.random() * .55);
		let p = d?.maxWobbleAmp ?? 1.15;
		(this.shellType === "floral-child" || this.preset?.thinTrail) && (p *= .12), this.wobbleMaxAmp = p * (.35 + Math.random() * .65), this.heightExponent = d?.heightExponent ?? 1.4;
		let m = Math.max(1, d?.midWobbleBoost ?? 1.5);
		this.midWobbleBoost = 1 + Math.random() * (m - 1), this.spinDirection = Math.random() < .5 ? 1 : -1, this.spinAngle = this.wobblePhase, this.speedModulationAmp = d?.speedModulationAmp ?? .22, this.phaseMod1 = Math.random() * Math.PI * 2, this.phaseMod2 = Math.random() * Math.PI * 2;
		let h = d?.eccentricityMin ?? .12, g = d?.eccentricityMax ?? .32;
		this.eccentricity = h + Math.random() * (g - h);
		let _ = d?.harmonicRatioMin ?? .18, v = d?.harmonicRatioMax ?? .32;
		this.harmonicRatio = _ + Math.random() * (v - _), this.harmonicPhase = Math.random() * Math.PI * 2, this.harmonicMultiplier = 1.9 + Math.random() * .5, this.jitterPhase1 = Math.random() * Math.PI * 2, this.jitterPhase2 = Math.random() * Math.PI * 2, this.axisDriftAmp = (d?.axisDriftAmp ?? .38) * this.wobbleMaxAmp, this.driftPhaseX = Math.random() * Math.PI * 2, this.driftPhaseZ = Math.random() * Math.PI * 2;
		let y = n.SHELL_COMET_PHASES;
		this.launchEndRatio = y?.launchEndRatio ?? .35, this.launchStartIntensity = y?.launchStartIntensity ?? .25;
		let b = y?.fadeStartMin ?? .72, x = y?.fadeStartMax ?? .82;
		this.endFadeStart = b + Math.random() * (x - b);
		let S = y?.turnOffChance ?? .75;
		if (Math.random() < S) this.endTargetIntensity = 0;
		else {
			let e = y?.dimTargetMin ?? .15, t = y?.dimTargetMax ?? .25;
			this.endTargetIntensity = e + Math.random() * (t - e);
		}
		this.currentTrailIntensity = this.launchStartIntensity, this.sputterEnabled = y?.sputterEnabled !== !1;
		let C = y?.sputterShellChance ?? .7;
		this.hasSputter = this.sputterEnabled && Math.random() < C, this.shellType === "floral-child" && (this.hasSputter = !1, this.launchStartIntensity = 1), this.sputterTimer = 0, this.sputterIntervalMin = y?.sputterIntervalMin ?? .22, this.sputterIntervalMax = y?.sputterIntervalMax ?? .48, this.nextSputterTime = this.sputterIntervalMin + Math.random() * (this.sputterIntervalMax - this.sputterIntervalMin), this.sputterDurationMin = y?.sputterDurationMin ?? .035, this.sputterDurationMax = y?.sputterDurationMax ?? .075, this.sputterKickAmp = y?.sputterKickAmp ?? .85, this.currentSputterRemaining = 0, this.isSputtering = !1, this.endFlicker = y?.endFlicker !== !1;
		let w = Array.isArray(u?.effects) ? u.effects : [];
		this.isStrobe = !!u?.strobe || w.includes("strobe") || w.includes("white-strobe") || w.includes("glitter-strobe") || u?.effectType === "glitter-strobe" || u?.effectType === "falling-comets-glitter", this.strobePhase = Math.random() * Math.PI * 2, this.strobeSpeed = 38 + Math.random() * 16, this.mesh = new e.Group();
		let T = !!u?.detachedTrail || u?.cometTrail === "detached" || u?.cometTrail === "detached-trail" || this.shellType === "comet_cluster_detached", E = !!u?.thinTrail && !T, ee = T ? B * 1.85 : E ? B * 1.35 : B, D = new e.SphereGeometry(ee, 8, 8), O = T ? o.clone().offsetHSL(0, .05, .3).multiplyScalar(8.5) : E ? o.clone().offsetHSL(0, .05, .22).multiplyScalar(3.5) : o.clone().multiplyScalar(3.2), k = new e.MeshBasicMaterial({
			color: O,
			transparent: !0,
			opacity: 1,
			depthWrite: !1,
			blending: e.AdditiveBlending,
			toneMapped: !1
		});
		this.coreMesh = new e.Mesh(D, k), this.mesh.add(this.coreMesh);
		let te = T ? .7 : E ? .55 : .5, A = T ? 10 : E ? 4 : 3.5, j = new e.SphereGeometry(ee * te, 8, 8), M = new e.MeshBasicMaterial({
			color: new e.Color(16777215).multiplyScalar(A),
			transparent: !0,
			opacity: 1,
			depthWrite: !1,
			blending: e.AdditiveBlending,
			toneMapped: !1
		});
		this.innerCoreMesh = new e.Mesh(j, M), this.mesh.add(this.innerCoreMesh);
		let N = T ? 28 : E ? 18 : re, P = new Float32Array(N * 3), F = new Float32Array(N * 3);
		for (let t = 0; t < N; t++) {
			let n = Math.random() * Math.PI * 2, r = (Math.random() - .5) * Math.PI, i = ie * (T ? .15 + Math.random() * .35 : E ? .28 + Math.random() * .55 : .35 + Math.random() * .65), a = new e.Vector3(Math.cos(n) * Math.cos(r) * i, Math.sin(r) * i * .75, Math.sin(n) * Math.cos(r) * i);
			P[t * 3] = a.x, P[t * 3 + 1] = a.y, P[t * 3 + 2] = a.z;
			let s = o.clone().offsetHSL((Math.random() - .5) * .04, (Math.random() - .5) * .08, (Math.random() - .5) * .14), c = T ? 7 : E ? 3.2 : 2.2;
			F[t * 3] = s.r * c, F[t * 3 + 1] = s.g * c, F[t * 3 + 2] = s.b * c;
		}
		let I = new e.BufferGeometry();
		I.setAttribute("position", new e.BufferAttribute(P, 3)), I.setAttribute("color", new e.BufferAttribute(F, 3));
		let L = T ? V * 2.6 : E ? V * 1.6 : V, R = new e.PointsMaterial({
			size: L,
			color: 16777215,
			vertexColors: !0,
			transparent: !0,
			opacity: E || T ? 1 : .8,
			depthWrite: !1,
			blending: e.AdditiveBlending,
			toneMapped: !1
		});
		this.haloPoints = new e.Points(I, R), this.mesh.add(this.haloPoints), this.mesh.position.copy(r), this.state = t.STATE.LAUNCHING;
	}
	getProgress() {
		if (this.shellType === "floral-child") {
			let e = this.preset?.starLife ? this.preset.starLife / 1e3 : 2.5;
			return Math.min(1, Math.max(0, this.age / e));
		}
		let e = Math.max(15, this.burstHeight - this.initialY), t = Math.max(0, this.basePosition.y - this.initialY);
		return Math.min(1, Math.max(0, t / e));
	}
	getTrailIntensity() {
		return this.currentTrailIntensity === void 0 ? 1 : this.currentTrailIntensity;
	}
	update(n) {
		if (this.state !== t.STATE.LAUNCHING) return !1;
		this.velocity.y += -30 * this.gravityScale * n, this.basePosition.addScaledVector(this.velocity, n), this.age += n, this.prevPosition.copy(this.mesh.position), this.prevTrailOffset.copy(this.trailOffset), this.sputterKick.lengthSq() > 1e-4 && this.sputterKick.multiplyScalar(Math.max(0, 1 - n * 3.5));
		let r = this.getProgress();
		if (this.hasSputter && r > this.launchEndRatio * .4) {
			if (this.isSputtering) {
				if (this.currentSputterRemaining -= n, this.currentSputterRemaining <= 0) {
					this.isSputtering = !1, this.sputterTimer = 0, this.nextSputterTime = this.sputterIntervalMin + Math.random() * (this.sputterIntervalMax - this.sputterIntervalMin), this.spinAngle += (.6 + Math.random() * .9) * Math.PI * (Math.random() < .5 ? 1 : -1), this.driftPhaseX = Math.random() * Math.PI * 2, this.driftPhaseZ = Math.random() * Math.PI * 2, this.harmonicPhase = Math.random() * Math.PI * 2;
					let e = this.sputterKickAmp * this.wobbleMaxAmp, t = Math.random() * Math.PI * 2;
					this.sputterKick.set(Math.cos(t) * e, 0, Math.sin(t) * e);
				}
			} else this.sputterTimer += n, this.sputterTimer >= this.nextSputterTime && (this.isSputtering = !0, this.currentSputterRemaining = this.sputterDurationMin + Math.random() * (this.sputterDurationMax - this.sputterDurationMin));
		}
		let i = 1;
		if (this.shellType === "floral-child") {
			if (r > .85) {
				let t = (r - .85) / .15;
				i = e.MathUtils.lerp(1, .25, t);
			} else i = 1;
		} else if (r < this.launchEndRatio) {
			let t = r / Math.max(.01, this.launchEndRatio);
			i = e.MathUtils.lerp(this.launchStartIntensity, 1, t);
		} else if (r < this.endFadeStart) i = 1;
		else {
			let t = e.MathUtils.clamp((r - this.endFadeStart) / Math.max(.01, 1 - this.endFadeStart), 0, 1);
			i = e.MathUtils.lerp(1, this.endTargetIntensity, t), this.endFlicker && this.endTargetIntensity === 0 && t < .85 && Math.sin(this.age * 36) < -.3 && (i = 0);
		}
		if (this.isSputtering && (i = 0), this.currentTrailIntensity = i, this.wobbleEnabled) {
			let e = 1 + this.speedModulationAmp * Math.sin(this.age * 12 + this.phaseMod1) + this.speedModulationAmp * .6 * Math.cos(this.age * 5.5 + this.phaseMod2);
			this.spinAngle += this.spinDirection * this.wobbleFreq * e * n;
			let t = Math.sin(Math.PI * r), i = this.wobbleMaxAmp * (.28 + (this.midWobbleBoost - .28) * t ** .9), a = 1 + .18 * Math.sin(this.spinAngle * .45 + this.jitterPhase1) + .12 * Math.cos(this.age * 15 + this.jitterPhase2), o = i * Math.max(.25, a), s = this.spinAngle * this.harmonicMultiplier + this.harmonicPhase, c = o * this.harmonicRatio, l = o * (1 + this.eccentricity), u = o * (1 - this.eccentricity), d = Math.sin(this.age * 3.8 + this.driftPhaseX) * (this.axisDriftAmp * t), f = Math.cos(this.age * 3.2 + this.driftPhaseZ) * (this.axisDriftAmp * t), p = Math.cos(this.spinAngle) * l + Math.sin(s) * c + d + this.sputterKick.x, m = Math.sin(this.spinAngle) * u + Math.cos(s) * c + f + this.sputterKick.z;
			this.trailOffset.set(p, 0, m);
		} else this.trailOffset.set(0, 0, 0);
		this.mesh.position.copy(this.basePosition);
		let a = !!(this.preset?.sparkleAtEnd && r > .6);
		if (this.isStrobe && !this.preset?.sparkleAtEnd || a) {
			let e = Math.sin(this.age * this.strobeSpeed + this.strobePhase) > .35, t = e ? 1.8 + Math.random() * .8 : .35;
			this.mesh.scale.setScalar(t), this.coreMesh.material && (a && e && this.coreMesh.material.color.setHex(16777215), this.coreMesh.material.opacity = e ? 1 : .2), this.innerCoreMesh?.material && (this.innerCoreMesh.material.opacity = e ? 1 : .2), this.haloPoints.material && (this.haloPoints.material.opacity = e ? 1 : .1, this.haloPoints.material.size = V * (e ? 2.8 : .4));
		} else this.mesh.scale.setScalar(1 + Math.sin(this.age * 12) * .05), this.coreMesh.material && (this.coreMesh.material.opacity = 1), this.innerCoreMesh?.material && (this.innerCoreMesh.material.opacity = 1), this.haloPoints.material && (this.haloPoints.material.opacity = .95, this.haloPoints.material.size = V * 1.5);
		return this.canBurst();
	}
	canBurst() {
		if (this.preset?.noBurst) {
			let e = this.preset.starLife / 1e3 || 2.5;
			return this.age >= e;
		}
		return this.basePosition.y >= this.burstHeight || this.velocity.y <= 0;
	}
	markBursted() {
		this.state = t.STATE.BURSTED;
	}
	markDead() {
		this.state = t.STATE.DEAD;
	}
}, oe = 1.2, se = new e.Vector3(), ce = new e.Vector3(), le = new e.Quaternion(), ue = new e.Vector3(0, 1, 0), de = new e.Vector3(1, 0, 0), fe = new e.Vector3(), H = new e.Vector3(), pe = new e.Vector3(), me = new e.Vector3(), U = class t {
	static STATE = {
		INIT: "init",
		LAUNCHING: "launching",
		DECAYING: "decaying",
		DEAD: "dead"
	};
	constructor({ position: r, velocity: i, color: a, preset: o = null, spiral: s = null, lifetime: c = null }) {
		this.type = "comet", this.velocity = i, this.color = a, this.preset = o, this.gravityScale = o?.gravityScale === void 0 ? 1 : o.gravityScale, this.spiral = s || o?.spiral || null, this.age = 0, this.decayTime = 0, this.ballisticPosition = r.clone(), this.prevPosition = r.clone(), this.lastTrailSpawnPos = new e.Vector3(Infinity, Infinity, Infinity);
		let l = o?.maxDecayTime ?? .8;
		this.maxDecayTime = l * (.8 + Math.random() * .4), this.state = t.STATE.INIT, this.mesh = new e.Group(), this.coreColor = a.clone(), this.initialVy = i.y, this.launchY = r.y, this.timeToApex = this.initialVy / 30;
		let u = .65 + Math.random() * .3;
		this.fadeStartTime = this.timeToApex * u, this.synchronizedLifetime = Number.isFinite(c) && c > 0 ? c : null, this.synchronizedLifetime !== null && (this.maxDecayTime = Math.min(1.1, this.synchronizedLifetime * .6), this.fadeStartTime = this.synchronizedLifetime - this.maxDecayTime), this.totalLifetime = this.synchronizedLifetime ?? this.timeToApex + this.maxDecayTime, this.isFading = !1;
		let d = Array.isArray(o?.effects) ? o.effects : [], f = d.map((e) => typeof e == "object" && e ? e.type || e.key : e), p = o?.effectType || "";
		this.hasLongBurn = !!(o?.longBurn || f.includes("long-burn") || p === "long-burn");
		let m = o?.starLifeMultiplier !== void 0 && !isNaN(Number(o.starLifeMultiplier)) ? Math.max(.2, Number(o.starLifeMultiplier)) : this.hasLongBurn ? 2 : 1;
		m !== 1 && (this.maxDecayTime *= m, this.totalLifetime = this.synchronizedLifetime ?? this.timeToApex + this.maxDecayTime, this.fadeStartTime = Math.max(this.fadeStartTime, this.totalLifetime - this.maxDecayTime)), this.hasApexHang = !!(o?.apexHang || f.includes("apex-hang") || p === "apex-hang"), this.hasApexHang && (this.maxDecayTime = Math.max(this.maxDecayTime, 1.8), this.totalLifetime = this.synchronizedLifetime ?? this.timeToApex + this.maxDecayTime, this.fadeStartTime = Math.max(this.fadeStartTime, this.totalLifetime - this.maxDecayTime)), this.hasSlowBurst = !!(o?.slowBurst || o?.["slow-burst"] || o?.slow_burst || f.includes("slow-burst") || f.includes("slow_burst") || p === "slow-burst" || p === "slow_burst"), this.hasCrackle = !!(o?.crackle || f.includes("crackle") || p === "crackle"), this.hasCrossette = !!(o?.crossette || f.includes("crossette") || p === "crossette"), this.hasFlow = !!(o?.flow || f.includes("flow") || p === "flow"), this.hasGhost = !!(o?.ghost || f.includes("ghost") || p === "ghost"), this.hasGhostFlare = !!(o?.ghostFlare || o?.["ghost-flare"] || f.includes("ghost-flare") || p === "ghost-kamuro"), this.isGhostFlare = this.hasGhostFlare;
		let h = S.getEffectTiming(d, "no-trail", this.totalLifetime) || S.getEffectTiming(d, "notrail", this.totalLifetime) || S.getEffectTiming(d, "noTrail", this.totalLifetime);
		if (this.noTrailTiming = h, this.hasNoTrail = !!(o?.noTrail || f.includes("no-trail") || f.includes("notrail") || p === "no-trail" || p === "notrail" || o?.shellType === "comet_cluster_notrail"), this.hasNoBurst = !!(o?.noBurst || f.includes("no-burst") || p === "no-burst"), this.isTadpole = !!(o?.isTadpole || o?.shellType === "comet_tadpole_burst" || o?.dynamicsType === "tadpole-spiral" || o?.dynamics === "tadpole-spiral" || f.includes("tadpole-flurry") || f.includes("tadpole_flurry") || p === "tadpole-flurry" || p === "tadpole_flurry"), this.isTadpole) {
			let e = n.COMET_TADPOLE?.variance || {}, t = Math.random() < (e.wildDeflectionChance ?? .3);
			this.tadpoleDeflectionScale = t ? 1.8 + Math.random() * ((e.deflectionMax ?? 3.2) - 1.8) : (e.deflectionMin ?? .25) + Math.random() * .75, this.tadpoleSizeScale = (e.sizeMin ?? .55) + Math.random() * ((e.sizeMax ?? 1.65) - (e.sizeMin ?? .55)), this.tadpoleDensityScale = (e.densityMin ?? .5) + Math.random() * ((e.densityMax ?? 1.8) - (e.densityMin ?? .5));
		}
		this.isWhiteStrobe = f.includes("white-strobe") || p === "white-strobe", this.isGlitterStrobe = f.includes("glitter-strobe") || p === "glitter-strobe", this.hasStrobe = !!(o?.strobe || f.includes("strobe") || this.isWhiteStrobe || this.isGlitterStrobe), this.hasFlow && (this.flowPhase = Math.random() * Math.PI * 2, this.flowSpeed = 4.5 + Math.random() * 2, this.flowAmp = 3.5 + Math.random() * 2), this.hasGhost && (this.ghostIgniteTime = this.timeToApex * (.42 + Math.random() * .12));
		let g = this.isGlitterStrobe ? 6.5 + Math.random() * 2.5 : 4.5 + Math.random() * 3, _ = this.isWhiteStrobe ? new e.Color(16777215) : this.isGlitterStrobe ? new e.Color(16770457) : new e.Color(16777215);
		this.strobe = {
			state: "smolder",
			stateTime: 0,
			nextFlashInterval: -Math.log(1 - Math.random() * .99) / g,
			flashDuration: this.isGlitterStrobe ? .035 + Math.random() * .02 : .045 + Math.random() * .025,
			recoveryDuration: .03 + Math.random() * .02,
			flashRate: g,
			activationThreshold: .5 + Math.random() * .18,
			energy: 0,
			intensity: 0,
			peakScaleBoost: this.isGlitterStrobe ? 2.6 : 2 + Math.random() * .8,
			peakEmission: this.isWhiteStrobe ? 4.2 : this.isGlitterStrobe ? 3.6 : 2.5 + Math.random() * 1.5,
			attackRate: 150,
			decayRate: 40,
			doubleFlashChance: this.isGlitterStrobe ? .35 : .15,
			isDoubleFlash: !1,
			flashColor: _,
			tempColor: new e.Color()
		}, this.isGhostFlare && (this.ghostFlare = {
			stage: "ascent",
			flarePeakScale: .78,
			flareMaxOpacity: .65,
			tempColor: new e.Color()
		}), this.isStrobeStar = o?.isStrobeStar === void 0 ? this.hasStrobe && (this.isGlitterStrobe || Math.random() < (o?.strobeRatio ?? .3)) : o.isStrobeStar, this.dimStartTime = this.timeToApex * (.45 + Math.random() * .15), this.preset?.shellType === "comet_cluster_cc" && this.preset?.secondColor && (this.color1 = a.clone(), this.color2 = new e.Color(this.preset.secondColor), this.color2.offsetHSL((Math.random() - .5) * .05, (Math.random() - .5) * .1, (Math.random() - .5) * .2));
		let v = !!this.preset?.detachedTrail || this.preset?.cometTrail === "detached" || this.preset?.cometTrail === "detached-trail" || this.preset?.shellType === "comet_cluster_detached", y = v ? Number.isFinite(o?.detachedHeadScale) && o.detachedHeadScale > 0 ? o.detachedHeadScale : .42 : 1;
		if (this.preset?.shellType === "comet_cluster_notrail" || this.hasNoTrail) {
			let t = new e.BufferGeometry();
			t.setAttribute("position", new e.BufferAttribute(new Float32Array([
				0,
				0,
				0
			]), 3)), t.setAttribute("color", new e.BufferAttribute(new Float32Array([
				a.r * 4,
				a.g * 4,
				a.b * 4
			]), 3));
			let n = new e.PointsMaterial({
				size: 34 * y,
				vertexColors: !0,
				transparent: !0,
				opacity: .95,
				depthTest: !0,
				depthWrite: !1,
				blending: e.AdditiveBlending,
				toneMapped: !1
			});
			n.onBeforeCompile = (e) => {
				e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", "\n          #include <color_fragment>\n          \n          vec2 p = gl_PointCoord - vec2(0.5, 0.38);\n          float aspect = 1.85;\n          float px = p.x * aspect;\n          float py = p.y;\n          float taper = py > 0.0 ? (1.0 + py * 1.5) : 1.0;\n          float dist = length(vec2(px * taper, py * 1.25)) * 2.0;\n          if (dist > 1.0) discard;\n          \n          vec2 coreP = gl_PointCoord - vec2(0.5, 0.34);\n          float coreDist = length(vec2(coreP.x * 2.2, coreP.y * 1.8)) * 2.0;\n          \n          vec4 stop0 = vec4(4.0, 4.0, 4.0, 1.0);\n          vec4 stop1 = vec4(diffuseColor.rgb * 2.0 + vec3(0.4), 0.90);\n          vec4 stop2 = vec4(diffuseColor.rgb * 1.2, 0.45);\n          vec4 stop3 = vec4(diffuseColor.rgb * 0.4, 0.12);\n          vec4 stop4 = vec4(0.0, 0.0, 0.0, 0.0);\n          \n          vec4 gradientColor;\n          if (coreDist < 0.08) {\n              float ct = coreDist / 0.08;\n              gradientColor = mix(stop0, stop1, ct);\n          } else if (dist < 0.28) {\n              float t = (dist - 0.08) / (0.28 - 0.08);\n              gradientColor = mix(stop1, stop2, clamp(t, 0.0, 1.0));\n          } else if (dist < 0.65) {\n              float t = (dist - 0.28) / (0.65 - 0.28);\n              gradientColor = mix(stop2, stop3, t);\n          } else {\n              float t = (dist - 0.65) / (1.0 - 0.65);\n              gradientColor = mix(stop3, stop4, t);\n          }\n          \n          diffuseColor = vec4(gradientColor.rgb, gradientColor.a * diffuseColor.a);\n          ");
			}, this.coreMesh = new e.Points(t, n), this.mesh.add(this.coreMesh);
		} else {
			let t = !!this.isTadpole, n = v || !!this.preset?.isSingleComet || !!this.preset?.superBrightHead || t || this.preset?.shellType === "comet_single", r = !!this.isStrobeStar;
			n ? this.coreColor = a.clone().offsetHSL(0, .05, .3).multiplyScalar(9) : r ? this.coreColor.multiplyScalar(.4) : this.coreColor = a.clone().offsetHSL(0, .04, .15).multiplyScalar(4.5);
			let i = (t || n ? oe * 1.6 : oe) * y, o = new e.SphereGeometry(i, 8, 8), s = new e.MeshBasicMaterial({
				color: this.coreColor,
				transparent: !0,
				opacity: r ? .85 : 1,
				depthWrite: !1,
				blending: e.AdditiveBlending,
				toneMapped: !1
			});
			this.coreMesh = new e.Mesh(o, s), r ? this.coreMesh.scale.set(.4, 1.2, .4) : t ? this.coreMesh.scale.set(.9, 1.6, .9) : n ? this.coreMesh.scale.set(.85, 1.7, .85) : this.coreMesh.scale.set(.65, 1.65, .65), this.mesh.add(this.coreMesh);
			let c = t ? .68 : n ? .7 : .6, l = t ? 11 : n ? 12 : 8, u = new e.SphereGeometry(i * c, 8, 8), d = new e.MeshBasicMaterial({
				color: new e.Color(16777215).multiplyScalar(l),
				transparent: !0,
				opacity: r ? .85 : 1,
				depthWrite: !1,
				blending: e.AdditiveBlending,
				toneMapped: !1
			});
			this.innerMesh = new e.Mesh(u, d);
			let f = r ? .4 : t || n ? .85 : .65, p = r ? 1.2 : t ? 1.55 : n ? 1.7 : 1.65;
			this.innerMesh.scale.set(f, p, f), this.mesh.add(this.innerMesh);
		}
		this.mesh.traverse((e) => {
			e.layers.enable(1);
		}), this.mesh.position.copy(r), this.updateRotation(), this.state = t.STATE.LAUNCHING, this.initialCoreOpacity = this.coreMesh.material.opacity, this.initialPointSize = this.coreMesh.isPoints ? this.coreMesh.material.size : null;
	}
	get isGhostDarkPhase() {
		return !!(this.isGhostFlare && this.ghostFlare?.stage === "dark");
	}
	get isGhostFlaring() {
		return !!(this.isGhostFlare && this.ghostFlare?.stage === "flare");
	}
	get isGhostInvisible() {
		return !!(this.hasGhost && this.age < this.ghostIgniteTime);
	}
	shouldSpawnTrail(e = .64) {
		return this.hasNoTrail || this.isGhostDarkPhase || this.isGhostInvisible ? !1 : this.lastTrailSpawnPos.distanceToSquared(this.mesh.position) >= e && (this.lastTrailSpawnPos.copy(this.mesh.position), !0);
	}
	updateRotation() {
		se.subVectors(this.mesh.position, this.prevPosition), se.lengthSq() > 1e-4 ? (se.normalize(), le.setFromUnitVectors(ue, se), this.mesh.setRotationFromQuaternion(le)) : this.velocity.lengthSq() > 0 && (ce.copy(this.velocity).normalize(), le.setFromUnitVectors(ue, ce), this.mesh.setRotationFromQuaternion(le));
	}
	calculateFlashEnvelope(e, t, n) {
		if (e <= 0) return 0;
		let r = (1 - Math.exp(-t * e)) * Math.exp(-n * e), i = Math.log(1 + t / n) / t, a = (1 - Math.exp(-t * i)) * Math.exp(-n * i);
		return Math.min(1, r / (a || 1));
	}
	update(n) {
		if (this.state === t.STATE.DEAD) return !0;
		if (this.state === t.STATE.LAUNCHING) {
			if (this.prevPosition.copy(this.mesh.position), this.velocity.y += -30 * this.gravityScale * n, this.ballisticPosition.addScaledVector(this.velocity, n), this.age += n, this.isGhostFlare && this.ghostFlare.stage === "ascent" && this.age >= this.ghostFlare.darkStartTime && (this.ghostFlare.stage = "dark"), this.isTadpole) {
				let e = this.preset?.maxDecayTime ?? (this.initialVy > 0 ? Math.max(.1, this.initialVy / 30) : 1.8), t = Math.min(1, this.age / e);
				this.tadpoleProgress = t;
				let r = .3 + .4 * Math.sin(t * Math.PI * .95), i = 1.85 * Math.PI * 2;
				this.tadpolePhase = (this.tadpolePhase || 0) + i * n, this.tadpoleSwayAngle === void 0 && (this.tadpoleSwayAngle = Math.random() * Math.PI * 2);
				let a = Math.sin(this.tadpolePhase) * r, o = Math.sin(this.tadpolePhase * .6) * (r * .25);
				if (this.velocity.lengthSq() > .04) {
					fe.copy(this.velocity).normalize();
					let e = Math.abs(fe.y) > .88 ? de : ue;
					H.crossVectors(fe, e).normalize(), pe.crossVectors(H, fe).normalize(), me.set(0, 0, 0).addScaledVector(H, a * Math.cos(this.tadpoleSwayAngle) - o * Math.sin(this.tadpoleSwayAngle)).addScaledVector(pe, a * Math.sin(this.tadpoleSwayAngle) + o * Math.cos(this.tadpoleSwayAngle)), this.mesh.position.copy(this.ballisticPosition).add(me);
				} else this.mesh.position.copy(this.ballisticPosition);
			} else if (this.spiral) {
				let e = Math.max(.1, this.initialVy / 30), t = Math.min(1, this.age / e), n = Math.sin(t * Math.PI * .95), r = (this.spiral.radius ?? 11.5) * (.25 + .75 * n), i = (this.spiral.frequency ?? 4.6) * Math.PI * 2, a = (this.spiral.phase ?? 0) + (this.spiral.direction ?? 1) * i * (this.age / e), o = r * Math.cos(a), s = r * Math.sin(a);
				this.mesh.position.set(this.ballisticPosition.x + o, this.ballisticPosition.y, this.ballisticPosition.z + s);
			} else if (this.hasFlow) {
				let e = this.age * this.flowSpeed + this.flowPhase, t = Math.sin(e) * this.flowAmp, n = Math.cos(e * 1.3) * (this.flowAmp * .8);
				this.mesh.position.set(this.ballisticPosition.x + t, this.ballisticPosition.y, this.ballisticPosition.z + n);
			} else this.mesh.position.copy(this.ballisticPosition);
			if (this.updateRotation(), this.preset?.shellType === "comet_cluster_cc" && this.color2) {
				let e = this.initialVy / 30, t = Math.min(1, this.age / e), n = 1, r = this.color1;
				t < .4 ? (r = this.color1, n = 1) : t < .5 ? (r = this.color1, n = (.5 - t) / .1) : t < .6 ? (r = this.color2, n = (t - .5) / .1) : (r = this.color2, n = 1), this.color.setRGB(r.r * n, r.g * n, r.b * n), this.coreColor.copy(this.color).multiplyScalar(4.5), this.coreMesh && this.coreMesh.material && this.coreMesh.material.color.copy(this.coreColor);
			}
			this.velocity.y <= 0 && (this.state = t.STATE.DECAYING, this.isGhostFlare && this.synchronizedLifetime === null && (this.ghostFlare.stage === "dark" || this.ghostFlare.stage === "ascent") && (this.ghostFlare.stage = "flare", this.ghostFlare.flareTimer = 0));
		} else this.state === t.STATE.DECAYING && ((this.synchronizedLifetime !== null || this.isGhostFlare) && (this.age += n), this.prevPosition.copy(this.mesh.position), this.velocity.multiplyScalar(Math.max(0, 1 - 8 * n)), this.ballisticPosition.addScaledVector(this.velocity, n), this.mesh.position.copy(this.ballisticPosition), this.velocity.lengthSq() > .01 && this.updateRotation(), this.isGhostFlare && this.synchronizedLifetime === null && (this.ghostFlare.stage === "dark" || this.ghostFlare.stage === "ascent") && (this.ghostFlare.stage = "flare", this.ghostFlare.flareTimer = 0));
		if (!this.isGhostFlare && (!this.isFading && (this.age >= this.fadeStartTime || this.synchronizedLifetime === null && this.state === t.STATE.DECAYING) && (this.isFading = !0), this.isFading)) {
			this.decayTime = this.synchronizedLifetime === null ? this.decayTime + n : Math.max(0, this.age - this.fadeStartTime);
			let e = Math.min(1, this.decayTime / this.maxDecayTime);
			if (e >= 1) this.synchronizedLifetime !== null && (this.coreMesh.material.opacity = 0, this.innerMesh && (this.innerMesh.material.opacity = 0)), this.state = t.STATE.DEAD;
			else {
				let t = this.synchronizedLifetime !== null, n = t ? e * e * (3 - 2 * e) : e ** 2.2, r = t ? this.initialCoreOpacity * (1 - n) ** 2 : 1 - n;
				this.coreMesh.material.opacity = r, this.innerMesh && this.innerMesh.material && (this.innerMesh.material.opacity = r), t && this.initialPointSize !== null && (this.coreMesh.material.size = this.initialPointSize * (.3 + .7 * (1 - n)));
				let i = 1 - n * .8;
				if (this.preset?.shellType !== "comet_cluster_notrail") {
					let e = !!this.preset?.detachedTrail || this.preset?.cometTrail === "detached" || this.preset?.cometTrail === "detached-trail" || this.preset?.shellType === "comet_cluster_detached" || !!this.preset?.isSingleComet || !!this.preset?.superBrightHead || this.preset?.shellType === "comet_single", t = this.preset?.sparkleAtEnd ? .4 : e ? .85 : .65, n = this.preset?.sparkleAtEnd ? 1.2 : e ? 1.7 : 1.65;
					this.coreMesh.scale.set(t * i, n * i, t * i), this.innerMesh && this.innerMesh.scale.set(t * i, n * i, t * i);
				}
			}
		}
		let r = this.initialVy ? this.initialVy * this.initialVy / 60 : 0, i = this.mesh.position.y - (this.launchY ?? 0), a = r > 0 ? i / r : 0, o = !!(this.preset?.strobe || Array.isArray(this.preset?.effects) && (this.preset.effects.includes("strobe") || this.preset.effects.includes("white-strobe") || this.preset.effects.includes("glitter-strobe"))), s = o && this.isStrobeStar && this.state === t.STATE.LAUNCHING && a >= (this.strobe?.activationThreshold ?? .5) && !this.isFading && !this.isGhostFlare, c = o && this.synchronizedLifetime === null && !this.isStrobeStar && this.state === t.STATE.LAUNCHING && this.age >= this.dimStartTime && !this.isGhostFlare;
		if (s) {
			switch (this.strobe.stateTime += n, this.strobe.state) {
				case "smolder":
					this.strobe.energy = 0, this.strobe.intensity = 0, this.strobe.stateTime >= this.strobe.nextFlashInterval && (this.strobe.state = "flash", this.strobe.stateTime = 0, this.strobe.flashDuration = .045 + Math.random() * .025);
					break;
				case "flash": {
					let e = this.calculateFlashEnvelope(this.strobe.stateTime, this.strobe.attackRate, this.strobe.decayRate);
					this.strobe.intensity = e, this.strobe.energy = e ** .55, this.strobe.stateTime >= this.strobe.flashDuration && (!this.strobe.isDoubleFlash && Math.random() < this.strobe.doubleFlashChance ? (this.strobe.isDoubleFlash = !0, this.strobe.state = "smolder", this.strobe.stateTime = 0, this.strobe.nextFlashInterval = .02 + Math.random() * .03) : (this.strobe.isDoubleFlash = !1, this.strobe.state = "recovery", this.strobe.stateTime = 0));
					break;
				}
				case "recovery": {
					let e = Math.min(1, this.strobe.stateTime / this.strobe.recoveryDuration);
					this.strobe.energy = (1 - e) * .08, this.strobe.intensity = this.strobe.energy, e >= 1 && (this.strobe.state = "smolder", this.strobe.stateTime = 0, this.strobe.nextFlashInterval = -Math.log(1 - Math.random() * .99) / this.strobe.flashRate);
					break;
				}
			}
			this.coreMesh.visible = !0, this.innerMesh && (this.innerMesh.visible = !0);
			let e = this.strobe.energy;
			this.coreMesh.material.opacity = .18 + e * .82, this.innerMesh && this.innerMesh.material && (this.innerMesh.material.opacity = .18 + e * .82);
			let t = 1 + e * (this.strobe.peakScaleBoost - 1), r = !!this.preset?.detachedTrail || this.preset?.cometTrail === "detached" || this.preset?.cometTrail === "detached-trail" || this.preset?.shellType === "comet_cluster_detached" || !!this.preset?.isSingleComet || !!this.preset?.superBrightHead || this.preset?.shellType === "comet_single", i = this.preset?.sparkleAtEnd ? .4 : r ? .85 : .65, a = this.preset?.sparkleAtEnd ? 1.2 : r ? 1.7 : 1.65;
			if (this.coreMesh.scale.set(i * t, a * t, i * t), this.innerMesh && this.innerMesh.scale.set(i * t, a * t, i * t), this.coreMesh.material && this.coreMesh.material.color) {
				let t = e ** 1.2;
				this.strobe.tempColor.copy(this.coreColor).lerp(this.strobe.flashColor, t), e > .05 && this.strobe.tempColor.multiplyScalar(1 + e * this.strobe.peakEmission), this.coreMesh.material.color.copy(this.strobe.tempColor);
			}
		} else if (c) {
			let e = Math.max(.1, this.timeToApex - this.dimStartTime), t = Math.min(1, (this.age - this.dimStartTime) / e), n = Math.max(0, 1 - t ** 1.3);
			this.coreMesh.visible = n > .02, this.innerMesh && (this.innerMesh.visible = this.coreMesh.visible), this.coreMesh.material && (this.coreMesh.material.opacity = n, this.innerMesh && this.innerMesh.material && (this.innerMesh.material.opacity = n), this.coreMesh.material.color && this.coreMesh.material.color.copy(this.coreColor));
			let r = Math.max(.1, 1 - t * .75), i = !!this.preset?.detachedTrail || this.preset?.cometTrail === "detached" || this.preset?.cometTrail === "detached-trail" || this.preset?.shellType === "comet_cluster_detached" || !!this.preset?.isSingleComet || !!this.preset?.superBrightHead || this.preset?.shellType === "comet_single", a = this.preset?.sparkleAtEnd ? .4 : i ? .85 : .65, o = this.preset?.sparkleAtEnd ? 1.2 : i ? 1.7 : 1.65;
			this.coreMesh.scale.set(a * r, o * r, a * r), this.innerMesh && this.innerMesh.scale.set(a * r, o * r, a * r);
		} else if (this.isGhostFlare) {
			let n = this.totalLifetime || this.synchronizedLifetime || this.timeToApex + this.maxDecayTime, r = n > 0 ? Math.min(1, this.age / n) : 1;
			if (r >= 1) return this.ghostFlare.stage = "decayed", this.coreMesh.material.opacity = 0, this.innerMesh && this.innerMesh.material && (this.innerMesh.material.opacity = 0), this.state = t.STATE.DEAD, !0;
			let i = 0, a = 1, o = 1;
			if (r < .35) this.ghostFlare.stage = "ascent", i = this.initialCoreOpacity, a = 1, o = 1;
			else if (r < .6) {
				this.ghostFlare.stage = "dark";
				let t = Math.min(1, (r - .35) / .15), n = t * t * (3 - 2 * t);
				i = e.MathUtils.lerp(this.initialCoreOpacity, .06, n), a = e.MathUtils.lerp(1, .35, n), o = Math.max(.15, 1 - n * .75);
			} else if (r < .76) {
				this.ghostFlare.stage = "flare";
				let t = (r - .6) / .16, n = t * t * (3 - 2 * t), s = this.ghostFlare.flareMaxOpacity ?? .65, c = this.ghostFlare.flarePeakScale ?? .78;
				i = e.MathUtils.lerp(.06, s, n), a = e.MathUtils.lerp(.35, c, n), o = .25 + .45 * n;
			} else {
				this.ghostFlare.stage = "flare";
				let e = (1 - Math.min(1, Math.max(0, (r - .76) / .24))) ** 3.5, t = this.ghostFlare.flareMaxOpacity ?? .65, n = this.ghostFlare.flarePeakScale ?? .78;
				i = t * e, a = n * e, o = .7 * e;
			}
			if (this.coreMesh.visible = i > .005, this.coreMesh.material && (this.coreMesh.material.opacity = i, this.initialPointSize !== null && (this.coreMesh.material.size = this.initialPointSize * a), this.coreMesh.material.color && (this.ghostFlare.tempColor.copy(this.coreColor).multiplyScalar(o), this.coreMesh.material.color.copy(this.ghostFlare.tempColor))), this.preset?.shellType !== "comet_cluster_notrail") {
				let e = !!this.preset?.detachedTrail || this.preset?.cometTrail === "detached" || this.preset?.cometTrail === "detached-trail" || this.preset?.shellType === "comet_cluster_detached" || !!this.preset?.isSingleComet || !!this.preset?.superBrightHead || this.preset?.shellType === "comet_single", t = this.preset?.sparkleAtEnd ? .4 : e ? .85 : .65, n = this.preset?.sparkleAtEnd ? 1.2 : e ? 1.7 : 1.65;
				this.coreMesh.scale.set(t * a, n * a, t * a);
			}
			this.innerMesh && (this.innerMesh.visible = this.coreMesh.visible, this.innerMesh.material && (this.innerMesh.material.opacity = this.coreMesh.material.opacity), this.innerMesh.scale.copy(this.coreMesh.scale));
		} else if (this.isGhostInvisible) this.coreMesh.visible = !1, this.innerMesh && (this.innerMesh.visible = !1);
		else {
			let e = 1;
			if (this.hasGhost) {
				let t = this.age - this.ghostIgniteTime;
				e = Math.min(1, Math.max(0, t / .12));
			}
			let n = !this.preset?.sparkleAtEnd || this.state === t.STATE.DECAYING || this.isFading;
			if (this.coreMesh.visible = n, this.innerMesh && (this.innerMesh.visible = n), this.coreMesh.material && this.coreMesh.material.color && (this.coreMesh.material.color.copy(this.coreColor), this.hasGhost && (this.coreMesh.material.opacity = e, this.innerMesh && this.innerMesh.material && (this.innerMesh.material.opacity = e))), !this.isFading && this.preset?.shellType !== "comet_cluster_notrail") {
				let t = !!this.isTadpole, n = !!this.preset?.detachedTrail || this.preset?.cometTrail === "detached" || this.preset?.cometTrail === "detached-trail" || this.preset?.shellType === "comet_cluster_detached" || !!this.preset?.isSingleComet || !!this.preset?.superBrightHead || t || this.preset?.shellType === "comet_single", r = this.preset?.sparkleAtEnd ? .4 : t ? .9 : n ? .85 : .65, i = this.preset?.sparkleAtEnd ? 1.2 : t ? 1.6 : n ? 1.7 : 1.65, a = this.hasGhost ? .3 + .7 * e : 1;
				this.coreMesh.scale.set(r * a, i * a, r * a), this.innerMesh && this.innerMesh.scale.set(r * a, i * a, r * a);
			}
		}
		return this.state === t.STATE.DEAD;
	}
	markDead() {
		this.state = t.STATE.DEAD;
	}
	dispose() {
		this.mesh.traverse((e) => {
			(e.isMesh || e.isPoints) && (e.geometry && e.geometry.dispose(), e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.dispose()) : e.material.dispose()));
		});
	}
}, he = class {
	constructor(t, n = 300) {
		this.scene = t, this.maxShells = n;
		let r = new e.SphereGeometry(.6, 8, 8), i = new e.MeshBasicMaterial({
			color: 16777215,
			transparent: !0,
			opacity: 1,
			depthWrite: !1,
			blending: e.AdditiveBlending,
			toneMapped: !1
		});
		this.coreMesh = new e.InstancedMesh(r, i, this.maxShells), this.coreMesh.frustumCulled = !1, this.scene.add(this.coreMesh), this.maxHaloPoints = this.maxShells * 10, this.haloGeometry = new e.BufferGeometry(), this.haloPositions = new Float32Array(this.maxHaloPoints * 3), this.haloColors = new Float32Array(this.maxHaloPoints * 3), this.haloGeometry.setAttribute("position", new e.BufferAttribute(this.haloPositions, 3)), this.haloGeometry.setAttribute("color", new e.BufferAttribute(this.haloColors, 3));
		let a = new e.PointsMaterial({
			size: .95,
			color: 16777215,
			vertexColors: !0,
			transparent: !0,
			opacity: .8,
			depthWrite: !1,
			blending: e.AdditiveBlending,
			toneMapped: !1
		});
		this.haloPoints = new e.Points(this.haloGeometry, a), this.haloPoints.frustumCulled = !1, this.scene.add(this.haloPoints), this.dummy = new e.Object3D(), this.dummy.position.set(0, -1e3, 0), this.dummy.updateMatrix();
		let o = new e.Color(0, 0, 0);
		for (let e = 0; e < this.maxShells; e++) this.coreMesh.setMatrixAt(e, this.dummy.matrix), this.coreMesh.setColorAt(e, o);
		this.coreMesh.instanceMatrix.needsUpdate = !0, this.coreMesh.instanceColor && (this.coreMesh.instanceColor.needsUpdate = !0);
	}
	update(e) {
		let t = Math.min(e.length, this.maxShells);
		this.coreMesh.count = t;
		let n = 0;
		for (let r = 0; r < t; r++) {
			let t = e[r];
			this.dummy.position.copy(t.mesh.position), this.dummy.scale.copy(t.mesh.scale), this.dummy.updateMatrix(), this.coreMesh.setMatrixAt(r, this.dummy.matrix);
			let i = t.coreMesh.material ? t.coreMesh.material.opacity : 1, a = t.color.clone().multiplyScalar(i);
			this.coreMesh.setColorAt(r, a);
			let o = t.haloPoints.material ? t.haloPoints.material.opacity : .8, s = t.haloPoints.geometry.attributes.position.array, c = t.haloPoints.geometry.attributes.color.array;
			for (let e = 0; e < 10; e++) {
				let r = s[e * 3], i = s[e * 3 + 1], a = s[e * 3 + 2], l = r * t.mesh.scale.x + t.mesh.position.x, u = i * t.mesh.scale.y + t.mesh.position.y, d = a * t.mesh.scale.z + t.mesh.position.z;
				this.haloPositions[n * 3] = l, this.haloPositions[n * 3 + 1] = u, this.haloPositions[n * 3 + 2] = d, this.haloColors[n * 3] = c[e * 3] * o, this.haloColors[n * 3 + 1] = c[e * 3 + 1] * o, this.haloColors[n * 3 + 2] = c[e * 3 + 2] * o, n++;
			}
		}
		for (let e = t; e < this.maxShells; e++) this.dummy.position.set(0, -1e3, 0), this.dummy.updateMatrix(), this.coreMesh.setMatrixAt(e, this.dummy.matrix);
		this.maxHaloPoints - n > 0 && (this.haloPositions.fill(0, n * 3), this.haloColors.fill(0, n * 3)), this.coreMesh.instanceMatrix.needsUpdate = !0, this.coreMesh.instanceColor && (this.coreMesh.instanceColor.needsUpdate = !0), t > 0 ? (this.haloGeometry.getAttribute("position").needsUpdate = !0, this.haloGeometry.getAttribute("color").needsUpdate = !0, this.haloPoints.geometry.setDrawRange(0, n), this.haloPoints.visible = !0) : this.haloPoints.visible = !1;
	}
	destroy() {
		this.scene.remove(this.coreMesh), this.scene.remove(this.haloPoints), this.coreMesh.geometry && this.coreMesh.geometry.dispose(), this.coreMesh.material && this.coreMesh.material.dispose(), this.haloGeometry && this.haloGeometry.dispose(), this.haloPoints.material && this.haloPoints.material.dispose();
	}
}, ge = n.GRAVITY, _e = n.BURST.baseParticles, ve = n.BURST.minParticles, W = n.BURST.maxParticles, ye = n.BURST.baseSpeed, be = n.BURST.baseLife, xe = n.BURST.dissolveStart, Se = n.BURST.baseDrag ?? 2.2, Ce = n.BURST.dragJitter ?? .5, we = n.BURST.speedJitter ?? .15, Te = n.BURST.lifeJitter ?? .2, Ee = n.SYSTEM.colors, De = n.SYSTEM.burstFadeExponent;
n.SYSTEM.crackleCloudSpeed;
var Oe = n.SYSTEM.baseBurstPointSize;
n.SYSTEM.defaultTrailColor;
var G = n.SYSTEM.crackleSparkColor, K = new e.Vector3(), ke = new e.Vector3(), q = new e.Vector3(), Ae = new e.Vector3(), J = [
	new e.Vector3(),
	new e.Vector3(),
	new e.Vector3(),
	new e.Vector3()
], Y = {
	strobeFreqMultiplier: 1,
	isSpiralIgnited: !0,
	spiralFlashBonus: 1,
	isRingIgnited: !0,
	ringFlashBonus: 1,
	hasGhostFlare: !1,
	profile: null
}, je = {
	r: 0,
	g: 0,
	b: 0
}, Me = new e.Vector3(), X = new e.Vector3(), Ne = new e.Vector3(), Pe = new e.Color(), Fe = new e.Color(14542318), Ie = new e.Vector3(), Le = new e.Color(), Re = new e.Vector3(), Z = new e.Color(16777215), ze = class {
	constructor(t, n, r = null, i = null) {
		this.scene = t, this.trailSystem = n, this.smokeSystem = r, this.activeFireworks = [], this.shellPresetFactory = i || new I(), this.launchZone = o, this.launchPosition = this.launchZone.center.clone(), this.autoLaunchEnabled = !1, this.autoLaunchTimer = 0, this.autoLaunchInterval = 3, this.shellSequence = 0, this.lastSecondBurstAudioTime = 0, this.diagnostics = {
			launched: 0,
			bursted: 0,
			shapeFallbacks: 0,
			effectFallbacks: 0,
			warnings: 0,
			lastWarning: "none"
		}, this.heightScalingConfig = {
			enabled: !0,
			minBurstY: this.launchZone.minBurstY,
			maxBurstY: this.launchZone.maxBurstY,
			sizeMin: 1.05,
			sizeMax: 1.95,
			brightnessMin: .9,
			brightnessMax: 1.45,
			sizeCurve: .9,
			brightnessCurve: 1.15
		}, this.instancedShellRenderer = new he(t), this.allocatedMaxBurstParticles = 5e4, this.maxBurstParticles = 6e3, this.graphicsQualityMultiplier = 1, this.burstParticles = [], this.burstPositionsArray = new Float32Array(this.allocatedMaxBurstParticles * 3), this.burstColorsArray = new Float32Array(this.allocatedMaxBurstParticles * 3), this.burstSizesArray = new Float32Array(this.allocatedMaxBurstParticles), this.burstOpacitiesArray = new Float32Array(this.allocatedMaxBurstParticles), this.globalBurstGeometry = new e.BufferGeometry(), this.globalBurstGeometry.setAttribute("position", new e.BufferAttribute(this.burstPositionsArray, 3)), this.globalBurstGeometry.setAttribute("color", new e.BufferAttribute(this.burstColorsArray, 3)), this.globalBurstGeometry.setAttribute("aSize", new e.BufferAttribute(this.burstSizesArray, 1)), this.globalBurstGeometry.setAttribute("aOpacity", new e.BufferAttribute(this.burstOpacitiesArray, 1)), this.burstUniforms = { uEdgeSoftness: { value: s.post?.particleEdgeSoftness ?? .75 } }, this.globalBurstMaterial = new e.PointsMaterial({
			vertexColors: !0,
			transparent: !0,
			depthTest: !0,
			depthWrite: !1,
			blending: e.AdditiveBlending
		}), this.globalBurstMaterial.onBeforeCompile = (e) => {
			e.uniforms.uEdgeSoftness = this.burstUniforms.uEdgeSoftness, this.burstShader = e, e.vertexShader = "\n        attribute float aSize;\n        attribute float aOpacity;\n        varying float vOpacity;\n      " + e.vertexShader.replace("#include <common>", "\n        #include <common>\n        ").replace("gl_PointSize = size;", "\n        gl_PointSize = aSize;\n        vOpacity = aOpacity;\n        "), e.fragmentShader = "\n        uniform float uEdgeSoftness;\n        varying float vOpacity;\n      " + e.fragmentShader.replace("#include <color_fragment>", "\n        #include <color_fragment>\n        \n        vec2 coord = gl_PointCoord - vec2(0.5);\n        float dist = length(coord) * 2.0;\n        if (dist > uEdgeSoftness) discard;\n        \n        vec4 stop0 = vec4(1.0, 1.0, 1.0, 1.0);\n        vec4 stop1 = vec4(diffuseColor.rgb, 0.34);\n        vec4 stop2 = vec4(diffuseColor.rgb, 0.16);\n        vec4 stop3 = vec4(diffuseColor.rgb, 0.0);\n        \n        float outerStart = min(0.32, uEdgeSoftness * 0.45);\n        vec4 gradientColor;\n        if (dist < 0.024) {\n            gradientColor = stop0;\n        } else if (dist < min(0.125, outerStart)) {\n            float t = (dist - 0.024) / max(0.001, min(0.125, outerStart) - 0.024);\n            gradientColor = mix(stop0, stop1, t);\n        } else if (dist < outerStart) {\n            float t = (dist - min(0.125, outerStart)) / max(0.001, outerStart - min(0.125, outerStart));\n            gradientColor = mix(stop1, stop2, t);\n        } else {\n            float t = (dist - outerStart) / max(0.001, uEdgeSoftness - outerStart);\n            gradientColor = mix(stop2, stop3, t);\n        }\n        \n        diffuseColor = vec4(gradientColor.rgb, gradientColor.a * diffuseColor.a * vOpacity);\n        ");
		}, this.globalBurstPoints = new e.Points(this.globalBurstGeometry, this.globalBurstMaterial), this.globalBurstPoints.frustumCulled = !1, this.globalBurstPoints.layers.enable(1), this.scene.add(this.globalBurstPoints), this.burstLinePositionsArray = new Float32Array(this.allocatedMaxBurstParticles * 2 * 3), this.burstLineColorsArray = new Float32Array(this.allocatedMaxBurstParticles * 2 * 3), this.burstLinesGeometry = new e.BufferGeometry(), this.burstLinesPositionsAttr = new e.BufferAttribute(this.burstLinePositionsArray, 3), this.burstLinesColorsAttr = new e.BufferAttribute(this.burstLineColorsArray, 3), this.burstLinesGeometry.setAttribute("position", this.burstLinesPositionsAttr), this.burstLinesGeometry.setAttribute("color", this.burstLinesColorsAttr), this.burstLinesGeometry.setDrawRange(0, 0), this.burstLinesMaterial = new e.LineBasicMaterial({
			vertexColors: !0,
			transparent: !0,
			depthTest: !0,
			depthWrite: !1,
			blending: e.AdditiveBlending
		}), this.burstLines = new e.LineSegments(this.burstLinesGeometry, this.burstLinesMaterial), this.burstLines.frustumCulled = !1, this.burstLines.layers.enable(1), this.scene.add(this.burstLines), this.scheduledBursts = [], this.burstPositionsAttr = this.globalBurstGeometry.getAttribute("position"), this.burstColorsAttr = this.globalBurstGeometry.getAttribute("color"), this.burstSizesAttr = this.globalBurstGeometry.getAttribute("aSize"), this.burstOpacitiesAttr = this.globalBurstGeometry.getAttribute("aOpacity"), this.activeShellIdsSet = /* @__PURE__ */ new Set(), this.eventSubscriptions = [], this.setGraphicsQuality(typeof localStorage < "u" && localStorage?.getItem && localStorage.getItem("graphics_quality") || "medium"), this.eventSubscriptions.push(l.on("graphics:quality", (e) => {
			this.setGraphicsQuality(e);
		}), l.on("firework:clear", () => {
			this.clear();
		}));
	}
	setParticleEdgeSoftness(e) {
		this.burstUniforms && this.burstUniforms.uEdgeSoftness && (this.burstUniforms.uEdgeSoftness.value = e), this.trailSystem && typeof this.trailSystem.setParticleEdgeSoftness == "function" && this.trailSystem.setParticleEdgeSoftness(e);
	}
	getParticleEdgeSoftness() {
		return this.burstUniforms?.uEdgeSoftness?.value ?? s.post?.particleEdgeSoftness ?? .75;
	}
	setGraphicsQuality(e) {
		this.graphicsQuality = e;
		let t = n.SYSTEM.maxBurstParticles;
		e === "low" ? (this.graphicsQualityMultiplier = .5, this.maxBurstParticles = Math.round(t * .5)) : e === "medium" ? (this.graphicsQualityMultiplier = 1, this.maxBurstParticles = t) : e === "high" && (this.graphicsQualityMultiplier = 1.5, this.maxBurstParticles = Math.round(t * 1.6667));
	}
	emitFireworkEvent(e, t) {
		l.emit(e, t);
	}
	emitDiagnostics() {
		this.emitFireworkEvent("firework:diagnostics", { ...this.diagnostics });
	}
	registerWarning(e) {
		this.diagnostics.warnings += 1, this.diagnostics.lastWarning = e, console.warn(e), this.emitDiagnostics();
	}
	launchRandom(t = null, n = {}) {
		let { ratioX: r, ratioY: i, ratioZ: a, sectorId: o, color: s, angleOffset: c = 0, effectOverrides: l } = n, u = t;
		typeof t == "string" && (u = this.shellPresetFactory.createPresetByKey(t)), l && typeof l == "object" && (l.textWord && l.textWord !== u?.textWord && (l.textPoints = null, l._glyphCacheKey = null), u = {
			...u,
			...l
		});
		let d = this.shellPresetFactory.validatePreset(u ?? this.shellPresetFactory.randomPreset()), f = ++this.shellSequence, p = this.resolveLaunchPosition(r, a, o), m = this.resolveBurstHeight(d, i), h = e.MathUtils.clamp((m - this.launchZone.minBurstY) / Math.max(this.launchZone.maxBurstY - this.launchZone.minBurstY, 1), 0, 1), g = e.MathUtils.lerp(.6, 1, h);
		d.shellSize = (d.shellSize ?? 1) * g;
		let _ = this.resolveLaunchVelocity(m, c), v = !!s || !!l?.color || !!d.hasCustomColor || !!d.customColor;
		d.hasCustomColor = v;
		let y = s || (d.color ? d.color : Ee[Math.floor(Math.random() * Ee.length)]), b = new e.Color(y), x = Array.isArray(d.effects) && d.effects.includes("no-burst") || !!d["no-burst"], S = !!d.instantBurst || x, C = _ && _.lengthSq() > .001 ? _.clone().normalize() : new e.Vector3(0, 1, 0);
		if (S) {
			this.emitFireworkEvent("firework:launch", {
				shellId: f,
				shellType: d.shellType ?? d.shapeType,
				shapeType: d.shapeType,
				effectType: d.effectType ?? "standard",
				colorHex: b.getHex(),
				hasCustomColor: v,
				sound: d.sound || null,
				position: {
					x: p.x,
					y: p.y,
					z: p.z
				},
				velocity: {
					x: _.x,
					y: _.y,
					z: _.z
				},
				direction: {
					x: C.x,
					y: C.y,
					z: C.z
				},
				intensity: .2 + (d.shellSize ?? 1) / 6 * .45
			});
			let t = new e.Vector3(p.x, m, p.z);
			if (this.isBouquetShell(d)) {
				let n = _ && _.lengthSq() > .001 ? _.clone().normalize() : new e.Vector3(0, 1, 0);
				this.triggerBouquetBurst(t, b, d, f, n, _);
			} else this.createBurst(t, b, d.shapeType ?? "willow", d, f);
			this.diagnostics.bursted += 1;
			for (let e of d.__contract?.warnings ?? []) this.registerWarning(`[Shell ${f}] ${e}`);
			this.emitDiagnostics();
			let n = .35 + ((d.shellSize ?? 1) - 1) / 5 * .65, r = Array.isArray(d.effects) && d.effects.includes("strobe") || d.effectType === "strobe" || !!d.strobe, i = !!d.isDyingEmber, a = d?.starLifeMultiplier !== void 0 && !isNaN(Number(d.starLifeMultiplier)) ? Math.max(.2, Number(d.starLifeMultiplier)) : 1, o = !x && (Array.isArray(d.effects) && d.effects.some((e) => (typeof e == "object" && e ? e.type || e.key : e) === "burst-smoke") || !!d["burst-smoke"] || !!d.burstSmoke);
			this.emitFireworkEvent("firework:burst", {
				shellId: f,
				shellType: d.shellType ?? d.shapeType,
				shapeType: d.shapeType,
				effectType: d.effectType,
				effects: d.effects,
				hasBurstSmoke: o,
				burstSmoke: o,
				sound: d.sound || null,
				noBurstSound: x || !!d.noBurstSound,
				colorHex: b.getHex(),
				position: {
					x: t.x,
					y: t.y,
					z: t.z
				},
				intensity: n,
				duration: 1.25 + n * 1.1,
				particleLife: be * (i ? 2 : 1) * a,
				isStrobe: r
			});
			return;
		}
		let w = this.createShell(p, _, m, b, d, f);
		this.activeFireworks.push(w), this.diagnostics.launched += 1;
		for (let e of d.__contract?.warnings ?? []) this.registerWarning(`[Shell ${f}] ${e}`);
		this.emitDiagnostics(), this.emitFireworkEvent("firework:launch", {
			shellId: f,
			shellType: w.shellType,
			shapeType: w.shapeType,
			effectType: d.effectType ?? "standard",
			colorHex: b.getHex(),
			hasCustomColor: v,
			sound: d.sound || null,
			position: {
				x: p.x,
				y: p.y,
				z: p.z
			},
			velocity: {
				x: _.x,
				y: _.y,
				z: _.z
			},
			direction: {
				x: C.x,
				y: C.y,
				z: C.z
			},
			intensity: .2 + (d.shellSize ?? 1) / 6 * .45
		});
	}
	getLaunchZone() {
		return {
			center: this.launchZone.center.clone(),
			launchRadiusX: this.launchZone.launchRadiusX,
			launchRadiusZ: this.launchZone.launchRadiusZ,
			noEntryHalfWidth: this.launchZone.noEntryHalfWidth,
			noEntryHalfDepth: this.launchZone.noEntryHalfDepth,
			boundaryPadding: this.launchZone.boundaryPadding,
			minBurstY: this.launchZone.minBurstY,
			maxBurstY: this.launchZone.maxBurstY
		};
	}
	resolveLaunchPosition(t, n, r) {
		let i = t ?? Math.random(), a = n ?? Math.random(), o;
		r && this.launchZone.sectors && (o = this.launchZone.sectors.find((e) => e.id === r)), !o && this.launchZone.sectors && (o = this.launchZone.sectors[Math.floor(Math.random() * this.launchZone.sectors.length)]);
		let s = o ? o.minAngle : Math.PI / 4, c = o ? o.maxAngle : 3 * Math.PI / 4, l = c - i * (c - s);
		this._lastLaunchAngle = l;
		let u = (this.launchZone.arcRadius || 360) + (a - .5) * this.launchZone.launchRadiusZ * 2, d = u * Math.cos(l), f = -u * Math.sin(l);
		return this.launchZone.center.clone().add(new e.Vector3(d, 0, f));
	}
	resolveBurstHeight(t = null, n) {
		if (n !== void 0) return e.MathUtils.lerp(this.launchZone.minBurstY, this.launchZone.maxBurstY, n);
		let r = (Math.max(1, Math.min(6, t?.shellSize ?? 1)) - 1) / 5, i = e.MathUtils.lerp(this.launchZone.minBurstY, this.launchZone.maxBurstY, .42 + r * .32), a = e.MathUtils.lerp(16, 28, r);
		return e.MathUtils.clamp(i + (Math.random() - .5) * a, this.launchZone.minBurstY, this.launchZone.maxBurstY);
	}
	resolveLaunchVelocity(t, r = 0) {
		let i = Math.abs(n.GRAVITY), a = this.launchZone.center.y, o = Math.max(t - a, 5), s = Math.sqrt(2 * i * o) * 1.02, c = e.MathUtils.clamp((t - this.launchZone.minBurstY) / Math.max(this.launchZone.maxBurstY - this.launchZone.minBurstY, 1), 0, 1), l = e.MathUtils.lerp(5, 9, 1 - c), u = this._lastLaunchAngle || Math.PI / 2, d = Math.PI / 180 * 85, f = e.MathUtils.clamp(r, -d, d), p = s * Math.tan(f), m = 20 * Math.cos(u) + p * Math.sin(u) + (Math.random() - .5) * l, h = s, g = -20 * Math.sin(u) + p * Math.cos(u) + (Math.random() - .5) * l;
		return new e.Vector3(m, h, g);
	}
	pickFireworkShape() {
		let e = Math.random();
		return e < .48 ? "sphere" : e < .68 ? "ring" : e < .86 ? "heart" : e < .94 ? "willow" : e < .985 ? "star" : "lightning";
	}
	createShell(e, t, n, r, i = null, a = null) {
		let o = i?.shapeType ?? i?.shape ?? this.pickFireworkShape();
		return new ae({
			shellId: a,
			position: e,
			velocity: t,
			burstHeight: n,
			color: r,
			shape: o,
			shellType: i?.shellType ?? i?.preset ?? o,
			shapeType: i?.shapeType ?? i?.shape ?? o,
			preset: i
		});
	}
	isBouquetShell(e) {
		if (!e) return !1;
		let t = (e.shellType || e.type || e.preset || "").toLowerCase();
		return t === "weepingwillowarch" || e.shapeType === "willow-arch" || t === "sparklingcometbranches" || t === "sparkling_comet_branches" || e.shapeType === "sparkling-branches" || e.dynamicsType === "sparkling-branch-comet" ? !0 : e.shapeType && e.shapeType !== "upward-spray" && e.dynamicsType && e.dynamicsType !== "bouquet-comet" ? !1 : e.dynamicsType === "bouquet-comet" || e.dynamics === "bouquet-comet" || e.shapeType === "upward-spray" || t === "bouquet" || t === "bouquetcomet" || t === "bouquetcometsphere" || t === "bouquetv2" || t === "bouquetv2multicolor";
	}
	triggerBouquetBurst(t, r, i, a, o = null, s = null) {
		let c = (i?.shellType || i?.type || i?.preset || "").toLowerCase(), l = new e.Vector3(0, 1, 0), u = new e.Vector3(0, 1, 0), d = !1;
		o && o.lengthSq() > .001 && (u.copy(o), u.x * u.x + u.z * u.z < .04 && u.y <= 0 ? u.set(0, 1, 0) : u.y < -.25 && (u.y = -.25, u.normalize()), d = !0);
		let f = new e.Quaternion();
		if (d && f.setFromUnitVectors(l, u), c === "weepingwillowarch" || i?.shapeType === "willow-arch") {
			let n = 6 + Math.floor(Math.random() * 4), o = Math.hypot(u.x, u.z), c = d && o > .15 ? Math.atan2(u.x, u.z) : Math.random() * Math.PI * 2;
			for (let o = 0; o < n; o++) {
				let l = r.clone(), u = o / Math.max(1, n - 1), d = 4 + u * 7.5 + (Math.random() - .5) * 1, f = 8 + u * 11 + (Math.random() - .5) * 1, p = (Math.random() - .5) * 1.2, m = Math.sin(c) * d + Math.cos(c) * p, h = Math.cos(c) * d - Math.sin(c) * p, g = f, _ = new e.Vector3(m, g, h);
				s && _.addScaledVector(s, .12);
				let v = t.y + 1e3, y = this.shellPresetFactory.basePreset(.65);
				y.isBouquetComet = !0, y.thickTrail = !0, y.noBurst = !0, y.gravityScale = .52, y.starLife = 4e3 + Math.random() * 800, y.trailLifeMultiplier = 1.05, y.trailChance = 1, y.color = r.getHex();
				let b = Array.isArray(i?.effects) ? i.effects : [], x = !!i?.strobe || b.includes("strobe") || b.includes("white-strobe") || b.includes("glitter-strobe") || i?.effectType === "glitter-strobe" || i?.effectType === "falling-comets-glitter";
				y.strobe = x, x && (y.effects = ["strobe"], y.effectType = "falling-comets-glitter");
				let S = this.createShell(t.clone(), _, v, l, y, a + "-arch-" + o);
				this.activeFireworks.push(S), this.diagnostics.launched += 1;
			}
		} else if (c === "sparklingcometbranches" || c === "sparkling_comet_branches" || i?.shapeType === "sparkling-branches") {
			let n = i?.branchCount ?? 5 + Math.floor(Math.random() * 2), o = i?.cometsPerBranch ?? 4 + Math.floor(Math.random() * 2), c = Math.random() * Math.PI * 2;
			for (let i = 0; i < n; i++) {
				let l = c + i / n * Math.PI * 2 + (Math.random() - .5) * .22, u = i % 3, d = (u === 0 ? .62 : u === 1 ? .28 : -.08) + (Math.random() - .5) * .12, f = new e.Vector3(Math.cos(l) * Math.cos(d), Math.sin(d), Math.sin(l) * Math.cos(d)).normalize(), p = Math.abs(f.y) > .9 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), m = new e.Vector3().crossVectors(f, p).normalize(), h = new e.Vector3().crossVectors(m, f).normalize();
				for (let e = 0; e < o; e++) {
					let n = r.clone().offsetHSL((Math.random() - .5) * .04, (Math.random() - .5) * .08, (Math.random() - .5) * .12), o = .04 + Math.random() * .12, c = Math.random() * Math.PI * 2, l = 78 + Math.random() * 34, u = f.clone().addScaledVector(m, Math.cos(c) * Math.sin(o)).addScaledVector(h, Math.sin(c) * Math.sin(o)).normalize().multiplyScalar(l);
					s && u.addScaledVector(s, .18);
					let d = t.y + 950, p = this.shellPresetFactory.basePreset(.55);
					p.shellType = "sparklingCometBranchChild", p.isBouquetComet = !0, p.sparkleAtEnd = !0, p.thinTrail = !0, p.launchTrail = !0, p.noBurst = !0, p.strobe = !1, p.gravityScale = .52, p.starLife = 1800 + Math.random() * 500, p.trailLifeMultiplier = .85, p.trailChance = 1, p.color = n.getHex();
					let g = this.createShell(t.clone(), u, d, n, p, a + "-branch-" + i + "-comet-" + e);
					this.activeFireworks.push(g), this.diagnostics.launched += 1;
				}
			}
		} else if (c === "bouquet" || c === "bouquetcomet" || c === "bouquetcometsphere") {
			let i;
			if (c === "bouquetcometsphere") {
				let e = n.BOUQUET.cometSphere;
				i = e.clusterCountMin + Math.floor(Math.random() * (e.clusterCountMax - e.clusterCountMin + 1));
			} else {
				let e = n.BOUQUET.default;
				i = e.clusterCountMin + Math.floor(Math.random() * (e.clusterCountMax - e.clusterCountMin + 1));
			}
			for (let o = 0; o < i; o++) {
				let l = c === "bouquetcomet" || c === "bouquetcometsphere" ? r.getHex() : Ee[Math.floor(Math.random() * Ee.length)], u = new e.Color(l), p, m, h;
				if (c === "bouquetcometsphere") {
					let e = (o + .5) / i, t = Math.acos(1 - 2 * e), n = Math.PI * (1 + Math.sqrt(5)) * o, r = 55 + Math.random() * 5;
					p = Math.cos(n) * Math.sin(t) * r, m = Math.cos(t) * r, h = Math.sin(n) * Math.sin(t) * r;
				} else if (d) {
					let t = 35 + Math.random() * 45, n = .05 + Math.random() * .65, r = Math.random() * Math.PI * 2, i = new e.Vector3(Math.sin(n) * Math.cos(r), Math.cos(n), Math.sin(n) * Math.sin(r));
					i.applyQuaternion(f), p = i.x * t, m = i.y * t, h = i.z * t;
				} else {
					let e = 25 + Math.random() * 50, t = Math.random() * Math.PI / 2.2, n = Math.random() * Math.PI * 2;
					p = Math.sin(t) * Math.cos(n) * e, h = Math.sin(t) * Math.sin(n) * e, m = (Math.cos(t) * e + 30) * (.75 + Math.random() * .5);
				}
				let g = new e.Vector3(p, m, h);
				if (s) {
					let e = c === "bouquetcometsphere" ? .25 : .35;
					g.addScaledVector(s, e);
				}
				let _ = t.y + 1e3, v;
				if (c === "bouquetcomet" || c === "bouquetcometsphere") {
					v = this.shellPresetFactory.basePreset(.5), v.noBurst = !0, v.shellType = "floral-child", v.isBouquetComet = !0, v.thickTrail = !0;
					let e = c === "bouquetcometsphere" ? n.BOUQUET.cometSphere.starLife : n.BOUQUET.default.starLife;
					v.starLife = e * (.8 + Math.random() * .4), v.trailChance = 1;
				} else v = this.shellPresetFactory.glitterStrobeShell(.45), v.color = l, v.shellType = "floral-child", v.particleCountMultiplier = .5, v.starLife && (v.starLife *= .75 + Math.random() * .5), v.trailChance = n.BOUQUET.default.trailChance;
				let y = this.createShell(t.clone(), g, _, u, v, a + "-c" + o);
				this.activeFireworks.push(y), this.diagnostics.launched += 1;
			}
		} else if (c === "bouquetv2" || c === "bouquetv2multicolor") {
			let o = n.BOUQUET.v2, c = o.clusterCountMin + Math.floor(Math.random() * (o.clusterCountMax - o.clusterCountMin + 1)), l = i?.colorMode ?? "parent";
			for (let n = 0; n < c; n++) {
				let i = l === "random" ? Ee[Math.floor(Math.random() * Ee.length)] : r.getHex(), c = new e.Color(i), u, p, m;
				if (d) {
					let t = 40 + Math.random() * 35, n = .05 + Math.random() * .72, r = Math.random() * Math.PI * 2, i = new e.Vector3(Math.sin(n) * Math.cos(r), Math.cos(n), Math.sin(n) * Math.sin(r));
					i.applyQuaternion(f), u = i.x * t, p = i.y * t, m = i.z * t;
				} else {
					let e = 40 + Math.random() * 35, t = Math.random() * Math.PI / 2.2, n = Math.random() * Math.PI * 2;
					u = Math.sin(t) * Math.cos(n) * e, m = Math.sin(t) * Math.sin(n) * e, p = Math.cos(t) * e + 38;
				}
				let h = new e.Vector3(u, p, m);
				s && h.addScaledVector(s, .3);
				let g = t.y + 1e3, _ = this.shellPresetFactory.glitterStrobeShell(.5);
				_.color = i, _.shellType = "floral-child", _.particleCountMultiplier = o.particleCountMultiplier, _.launchTrail = !0, _.trailChance = o.trailChance;
				let v = this.createShell(t.clone(), h, g, c, _, a + "-c2-" + n);
				this.activeFireworks.push(v), this.diagnostics.launched += 1;
			}
		}
	}
	triggerTadpoleBurstShell(t, r, i, a, o = null, s = null) {
		let c = n.COMET_TADPOLE?.burstShell || {}, u = c.clusterCountMin || 18, d = c.clusterCountMax || 26, f = i?.clusterCount ?? u + Math.floor(Math.random() * (d - u + 1)), p = c.burstSpeedMin || 45, m = c.burstSpeedMax || 68, h = c.childStarLife || 2.2, g = c.gravityScale || .45;
		for (let n = 0; n < f; n++) {
			let i = (n + .5) / f, a = Math.acos(1 - 2 * i), o = Math.PI * (1 + Math.sqrt(5)) * n, c = new e.Vector3(Math.cos(o) * Math.sin(a), Math.cos(a), Math.sin(o) * Math.sin(a)).normalize();
			c.y < -.32 && (c.y = -.32, c.normalize());
			let u = p + Math.random() * (m - p), d = c.multiplyScalar(u);
			s && d.addScaledVector(s, .15);
			let _ = r.clone().offsetHSL((Math.random() - .5) * .06, .05, .08), v = {
				shellType: "comet_tadpole_burst",
				dynamicsType: "tadpole-spiral",
				isTadpole: !0,
				maxDecayTime: h * (.85 + Math.random() * .3),
				gravityScale: g,
				thickTrail: !1,
				thinTrail: !0,
				launchTrail: !0,
				burstSmoke: !1,
				noSmoke: !0,
				launchSmoke: !1
			};
			l.emit("comet:spawn", {
				position: t.clone(),
				velocity: d,
				color: _,
				preset: v
			});
		}
		if (this.trailSystem && typeof this.trailSystem.spawnEffectSpark == "function") for (let n = 0; n < 36; n++) {
			let n = t.clone().add(new e.Vector3((Math.random() - .5) * 4.5, (Math.random() - .5) * 4.5, (Math.random() - .5) * 4.5));
			this.trailSystem.spawnEffectSpark(n, r, !0, null, Math.random() * 1e3, .6 + Math.random() * .35, !1);
		}
	}
	spawnBurstParticleArrowSparks(t, r = 1) {
		if (!this.trailSystem || typeof this.trailSystem.spawnTrailParticle != "function") return;
		let i = t.velocity;
		if (i.length() < .8) return;
		let a = i.clone().normalize(), o = Math.abs(a.y) > .88 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), s = new e.Vector3().crossVectors(a, o).normalize(), c = new e.Vector3().crossVectors(s, a).normalize(), l = n.COMET_TADPOLE || {}, u = t?.tadpoleSizeScale ?? 1, d = t?.tadpoleDensityScale ?? 1, f = t?.tadpoleDeflectionScale ?? 1, p = l.standoffDistance ?? .25, m = t.position.clone().addScaledVector(a, -p), h = (l.sparkBrightnessMultiplier ?? 4.2) * r * (.85 + .3 * Math.random()), g = Math.max(1, Math.round((1 + +(Math.random() < .45)) * d)), _ = !!(t.isStrobe || Array.isArray(t.effects) && t.effects.includes("strobe")), v = (l.arrowSpeedMin ?? 28) * u, y = (l.arrowSpeedMax ?? 48) * u, b = l.needleDragScale ?? .38, x = (l.centerCoreBrightness ?? 7.5) * r * Math.min(1.4, Math.max(.7, u)), S = new e.Color(16777215).lerp(t.baseColor, .25).multiplyScalar(x), C = a.clone().multiplyScalar(2.2);
		this.trailSystem.spawnTrailParticle(m, S, 1, !1, .15 + Math.random() * .1, 1, _, C, .2, 1, !1, null, !0);
		for (let n = 0; n < g; n++) {
			let n = Math.random() * Math.PI * 2, r = (1.05 + Math.random() * .4) * Math.min(1.15, Math.max(.85, u)), o = Math.cos(n) * Math.sin(r), d = Math.sin(n) * Math.sin(r), f = -Math.cos(r) * .45, p = new e.Vector3().addScaledVector(s, o).addScaledVector(c, d).addScaledVector(a, f).normalize(), g = (v + Math.random() * (y - v)) * .65, x = p.multiplyScalar(g);
			x.addScaledVector(i, .25);
			let S = t.baseColor.clone().offsetHSL((Math.random() - .5) * .04, .08, .3 + Math.random() * .16).multiplyScalar(h), C = (l.arrowStarLife ?? .48) * Math.sqrt(u) * (.8 + Math.random() * .35);
			this.trailSystem.spawnTrailParticle(m, S, 1, !1, C, 1, _, x, .2, b, !1, null, !0);
		}
		if (t.crackle && Math.random() < .1 && typeof this.trailSystem.spawnMicroCrackle == "function" && this.trailSystem.spawnMicroCrackle(m, t.baseColor), i && f > .05) {
			let t = l.variance?.kickImpulseBase ?? 2.8, n = Math.random() * Math.PI * 2, r = t * f * (.7 + Math.random() * .6), a = new e.Vector3().addScaledVector(s, Math.cos(n) * r).addScaledVector(c, Math.sin(n) * r);
			i.add(a);
		}
	}
	spawnBurstParticleFlurry(t, r = 1) {
		if (!this.trailSystem || typeof this.trailSystem.spawnTrailParticle != "function") return;
		let i = t.velocity, a = i && i.lengthSq() > .01 ? i.clone().normalize() : new e.Vector3(0, 1, 0), o = Math.abs(a.y) > .88 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), s = new e.Vector3().crossVectors(a, o).normalize(), c = new e.Vector3().crossVectors(s, a).normalize(), l = n.COMET_TADPOLE || {}, u = t?.tadpoleSizeScale ?? 1, d = t?.tadpoleDensityScale ?? 1, f = t?.tadpoleDeflectionScale ?? 1, p = l.standoffDistance ?? .25, m = t.position.clone().addScaledVector(a, -p), h = (l.sparkBrightnessMultiplier ?? 4.2) * r, g = 5 + Math.floor(Math.random() * 4), _ = Math.max(3, Math.round(g * d)), v = !!(t.isStrobe || Array.isArray(t.effects) && t.effects.includes("strobe")), y = (l.arrowSpeedMin ?? 28) * u, b = (l.arrowSpeedMax ?? 48) * u, x = l.needleDragScale ?? .38, S = (l.centerCoreBrightness ?? 7.5) * 1.15 * r * u, C = new e.Color(16777215).lerp(t.baseColor, .2).multiplyScalar(S);
		this.trailSystem.spawnTrailParticle(m, C, 1, !0, .18 + Math.random() * .1, 1, !1, null, 0, 1, !1, null, !0);
		for (let n = 0; n < _; n++) {
			let r = n / _ * Math.PI * 2 + (Math.random() - .5) * .35, o = (.95 + Math.random() * .5) * Math.min(1.15, Math.max(.85, u)), d = Math.cos(r) * Math.sin(o), f = Math.sin(r) * Math.sin(o), p = -Math.cos(o) * .4, g = new e.Vector3().addScaledVector(s, d).addScaledVector(c, f).addScaledVector(a, p).normalize(), S = (y + Math.random() * (b - y)) * .7, C = g.multiplyScalar(S);
			i && C.addScaledVector(i, .2);
			let w = t.baseColor.clone().offsetHSL((Math.random() - .5) * .05, .08, .32 + Math.random() * .16).multiplyScalar(h), T = (l.flurryStarLife ?? .58) * Math.sqrt(u) * (.8 + Math.random() * .35);
			this.trailSystem.spawnTrailParticle(m, w, 1, !1, T, 1, v, C, .2, x, !1, null, !0);
		}
		if (t.crackle && Math.random() < .2 && typeof this.trailSystem.spawnMicroCrackle == "function" && this.trailSystem.spawnMicroCrackle(m, t.baseColor), i && f > .05) {
			let t = (l.variance?.kickImpulseBase ?? 2.8) * 1.35, n = Math.random() * Math.PI * 2, r = t * f * (.6 + Math.random() * .8), a = new e.Vector3().addScaledVector(s, Math.cos(n) * r).addScaledVector(c, Math.sin(n) * r);
			i.add(a);
		}
	}
	spawnErraticDartStreak(t, r = 1) {
		if (!this.trailSystem || typeof this.trailSystem.spawnTrailParticle != "function") return;
		let i = n.ERRATIC_DART || {}, a = r, o = i.streakBrightnessMultiplier ?? 1.35, s = i.trailOpacity ?? .48, c = !!(t.isStrobe || Array.isArray(t.effects) && t.effects.includes("strobe")), l = t.velocity ? t.velocity.clone().multiplyScalar(.015) : new e.Vector3(0, 0, 0), u = new e.Color(16777215), d = t.baseColor.clone().lerp(u, .18).multiplyScalar(a * o), f = (i.trailParticleLife ?? .9) * (.85 + Math.random() * .3);
		this.trailSystem.spawnTrailParticle(t.position, d, 1, !1, f, s, c, l, .03, .98, !1, null, !0), t.crackle && Math.random() < .15 && typeof this.trailSystem.spawnMicroCrackle == "function" && this.trailSystem.spawnMicroCrackle(t.position, t.baseColor);
	}
	getDefaultNestedStages(e = null) {
		return [
			{
				shapeType: "sphere",
				dynamicsType: "standard",
				color: e && e.getHexString ? "#" + e.getHexString() : "#ff4400",
				delay: 0,
				scale: 1,
				effects: ["strobe"]
			},
			{
				shapeType: "ring",
				dynamicsType: "flow",
				color: "#00e5ff",
				delay: .45,
				scale: .82,
				effects: []
			},
			{
				shapeType: "sphere",
				dynamicsType: "crossette",
				color: "#ffd700",
				delay: .9,
				scale: .65,
				effects: ["crossette"]
			},
			{
				shapeType: "sphere",
				dynamicsType: "willow",
				color: "#ffffff",
				delay: 1.35,
				scale: .5,
				effects: ["glitter-strobe"]
			}
		];
	}
	triggerMultiNestedBurst(t, n, r, i) {
		let a = (Array.isArray(r?.stages) && r.stages.length > 0 ? r.stages : this.getDefaultNestedStages(n)).slice(0, 5), o = r?.nestingMode === "satellite", s = Math.max(.6, Math.min(6, r?.shellSize ?? 1));
		for (let c = 0; c < a.length; c++) {
			let l = a[c], u = Math.max(0, l.delay ?? c * .45), d = Math.max(.2, Math.min(2, l.scale ?? 1 - c * .14)), f = l.color ? typeof l.color == "string" ? new e.Color(l.color) : l.color.clone() : n.clone(), p = t.clone();
			if (o && c > 0) {
				let e = (c - 1) / (a.length - 1) * Math.PI * 2 + Math.random() * .2, t = (16 + Math.random() * 8) * s, n = (Math.random() - .5) * 10 * s;
				p.x += Math.cos(e) * t, p.y += n, p.z += Math.sin(e) * t;
			}
			let m = Array.isArray(l.effects) ? l.effects : [], h = m.map((e) => typeof e == "object" && e ? e.type || e.key : e), g = l.particleCountMultiplier === void 0 ? 1 : Math.max(.25, Math.min(3, Number(l.particleCountMultiplier) || 1)), _ = {
				...r,
				multiNested: !1,
				stages: null,
				shapeType: l.shapeType || "sphere",
				dynamicsType: l.dynamicsType || "standard",
				effects: m,
				shellSize: s * d,
				particleCountMultiplier: g,
				strobe: h.includes("strobe") || !!l.strobe,
				crackle: h.includes("crackle") || !!l.crackle,
				noTrail: h.includes("no-trail") || !!l.noTrail,
				crossette: h.includes("crossette") || !!l.crossette
			};
			u <= .001 ? this.createBurst(p, f, _.shapeType, _, i + "-stage-" + c) : this.scheduledBursts.push({
				timeRemaining: u,
				position: p,
				color: f,
				shape: _.shapeType,
				preset: _,
				shellId: i + "-stage-" + c
			});
		}
	}
	triggerAscentSubBurst(t, n) {
		let r = t.mesh.position.clone(), i = Math.random() * Math.PI * 2, a = 1 + Math.random() * 1.2;
		r.x += Math.cos(i) * a, r.z += Math.sin(i) * a;
		let o = t.preset?.ascentSubShellType || "random", s = null;
		if (o !== "random" && this.shellPresetFactory.presetsRegistry.has(o)) {
			let e = this.shellPresetFactory.presetsRegistry.get(o);
			s = e ? e(.18) : this.shellPresetFactory.createPresetByKey(o);
		} else s = o === "crossette" ? this.shellPresetFactory.crossetteShell(.18) : o === "strobe" ? this.shellPresetFactory.strobeShell(.18) : o === "crackle" ? this.shellPresetFactory.crackleShell(.18) : o === "willow" ? this.shellPresetFactory.weepingWillowCometsShell(.18) : o === "ring" ? this.shellPresetFactory.ringShell(.18) : o === "star" ? this.shellPresetFactory.starShell(.18) : o === "flow" ? this.shellPresetFactory.fishShell(.18) : o === "sparking" ? this.shellPresetFactory.sparkingShell(.18) : this.shellPresetFactory.crysanthemumShell(.18);
		s ||= this.shellPresetFactory.crysanthemumShell(.18);
		let c = Math.max(.6, t.preset?.shellSize ?? 1);
		s.shellSize = .175 * c, s.isAscentChild = !0, s.multiNested = !1, s.stages = null, s.ascentBursts = !1, s.spreadSize = (s.spreadSize || 300) * .45, s.starLife = Math.min(650, (s.starLife || 800) * .6);
		let l = this.shellPresetFactory.randomColor(), u = new e.Color(l);
		this.createBurst(r, u, s.shapeType || "sphere", s, t.shellId + "-ascent-" + n), this.emitFireworkEvent("firework:burst", {
			shellId: t.shellId + "-ascent-" + n,
			shellType: s.shellType || "ascent-sub-shell",
			shapeType: s.shapeType || "sphere",
			effectType: s.effectType || "standard",
			colorHex: u.getHex(),
			position: {
				x: r.x,
				y: r.y,
				z: r.z
			},
			intensity: .15,
			duration: .5
		});
	}
	resolveBurstParticleCount(e, t, r) {
		if (e === "text_word" || r?.textWord) {
			let e = r?.textWord || r?.word || "HELLO", t = r?.textScale ?? .38, n = r?.letterSpacing ?? 1.5, i = `${e}_${t}_${n}`, a = r?.textPoints;
			return a && Array.isArray(a) && a.length !== 0 && r?._glyphCacheKey === i || (a = h(e, {
				scale: t,
				letterSpacing: n
			}), r && (r.textPoints = a, r._glyphCacheKey = i)), a && a.length > 0 ? a.length : 60;
		}
		if (r?.isAscentChild) return Math.round((14 + Math.floor(Math.random() * 6)) * this.graphicsQualityMultiplier);
		if (r?.shellType === "ringComet") return 10 + Math.floor(Math.random() * 6);
		if (r?.isNestedChild) return Math.round((10 + Math.floor(Math.random() * 3)) * this.graphicsQualityMultiplier);
		let i = n.SHAPE_MULTIPLIERS, a = n.EFFECT_MULTIPLIERS, o = Math.max(.25, Math.min(3, r?.particleCountMultiplier ?? 1)), s = r?.shapeRenderMode === "outline" || r?.shapeRenderMode === "jupiter" ? 1.12 : 1, c = new Set(this.burstParticles.map((e) => e.shellId)).size, l = 1;
		this.graphicsQuality !== "high" && (c > 12 ? l = .72 : c > 8 && (l = .86));
		let u = Array.isArray(r?.effects) ? r.effects : [], d = !!r?.crossette || u.includes("crossette") || t === "crossette", f = d && t !== "crossette" ? .6 : 1, p = !!(r?.secondBurst?.enabled || r?.secondBurstEnabled), m = p ? .78 : 1, g = n.BURST?.throttling || {
			enabled: !0,
			threshold: .7,
			minFloor: .5,
			outlineMinFloor: .7
		}, _ = 1;
		if (g.enabled) {
			let t = (Array.isArray(this.burstParticles) ? this.burstParticles.length : 0) / Math.max(1, this.maxBurstParticles || 6e3);
			if (t > g.threshold) {
				let n = r?.shapeRenderMode === "outline" || e === "star" || e === "heart" || e === "ring" || e === "ring_v2" || e === "smiley" ? g.outlineMinFloor ?? .7 : g.minFloor ?? .5, i = Math.min(1, Math.max(0, (t - g.threshold) / (1 - g.threshold)));
				_ = 1 - (1 - n) * i;
			}
		}
		let v = i[e] ?? 1, y = a[t] ?? 1, b = Math.max(.6, Math.min(6, r?.shellSize ?? 1)), x = e === "horsetail" || r?.shapeType === "horsetail" || r?.dynamicsType === "horsetail" || r?.shellType === "horsetail_waterfall" ? 16 : d || p ? Math.round(ve * .6) : ve, S = Math.round(x * this.graphicsQualityMultiplier), C = Math.round(W * this.graphicsQualityMultiplier), w = _e * v * y * f * m * o * s * l * b * _ * this.graphicsQualityMultiplier, T = Math.max(16, Math.round(S * Math.max(.65, _)));
		return Math.max(T, Math.min(C, Math.round(w)));
	}
	createBurst(t, r, i = "sphere", a = null, o = null) {
		let s = a?.shapeType || a?.shape || i || "sphere", c = _.resolveShape(s);
		c !== s && (this.diagnostics.shapeFallbacks += 1, this.registerWarning(`[Burst] Shape fallback from "${s}" to "${c}".`));
		let l = Array.isArray(a?.effects) ? a.effects : [], u = l.map((e) => typeof e == "object" && e ? e.type || e.key : e), d = !!a?.crackle || u.includes("crackle"), f = a?.dynamicsType || a?.dynamics || (a?.flow === void 0 ? a?.effectType : a.flow ? "flow" : "standard") || c, p = v.normalizeEffectType(f);
		p !== f && (this.diagnostics.effectFallbacks += 1, this.registerWarning(`[Burst] Effect fallback from "${f}" to "${p}".`));
		let m = this.resolveBurstParticleCount(c, p, a), h = this.createRandomBurstRotation(), g = Math.random() * Math.PI * 2, y = new e.Quaternion().setFromAxisAngle(new e.Vector3(0, 1, 0), g), b = this.heightScalingConfig.enabled ? v.createHeightProfile(t.y, this.heightScalingConfig) : {
			normalized: 0,
			sizeMultiplier: 1,
			brightnessMultiplier: 1
		}, x = Math.min(Math.max((b.brightnessMultiplier - 1) / 1.2, 0), .75), C = Math.min(Math.max(b.brightnessMultiplier, 1), 1.3), w = r.clone().lerp(new e.Color(16777215), x), T = new e.Color(16777215), E = {
			...v.initialize(p, m, a),
			shapeType: c
		}, ee = p === "ghost" || Array.isArray(a?.effects) && a.effects.includes("ghost") || !!a?.ghost || a?.shellType === "ghost", D = p === "crysanthemum-cc" || Array.isArray(a?.effects) && a.effects.includes("crysanthemum-cc") || a?.shellType === "crysanthemumCC", O = null;
		if (ee || D) {
			let t;
			if (a && a.secondColor && a.secondColor !== a.color) t = new e.Color(a.secondColor);
			else {
				let n = r.getHex(), i = {
					16766720: 49151,
					16729344: 8388564,
					49151: 16738740,
					16738740: 8388564,
					8388564: 9055202,
					9055202: 16766720,
					16777215: 16729344
				};
				if (i[n] !== void 0) t = new e.Color(i[n]);
				else {
					let n = {
						h: 0,
						s: 0,
						l: 0
					};
					if (r.getHSL(n), n.s < .1 || n.l > .95) t = new e.Color(16729344);
					else {
						let r = (n.h + .5) % 1;
						t = new e.Color().setHSL(r, n.s, n.l);
					}
				}
			}
			O = t.clone().lerp(new e.Color(16777215), x);
		}
		let k = c === "ring" && a?.shapeRenderMode === "jupiter", te = !!a?.pistil && !ee && !D, A = k || te, j = 0;
		k ? j = Math.min(.85, Math.max(.15, a?.ringCoreRatio ?? .42)) : te && (j = m < 80 ? .5 : .65);
		let M = A ? Math.max(8, Math.floor(m * j)) : 0;
		A && m - M < 16 && (M = Math.max(8, m - 16));
		let P = Math.max(1, m - M), F = k ? {
			...a,
			shapeRenderMode: "outline"
		} : a;
		w.clone().multiplyScalar(C);
		let I = O ? O.clone().multiplyScalar(C) : null, L = !(!a?.nestedBurst || a?.isNestedChild), R = /* @__PURE__ */ new Set();
		if (L) for (let e = 0; e < 8; e++) {
			let t = Math.floor((e + .5) * (m / 8));
			R.add(t);
		}
		let z = be * .82, { isCrossetteShell: ne, isTadpoleFlurryShell: B, isErraticDartShell: re, hasBurstSmoke: ie, isLongBurn: V, isApexHang: ae, isSlowBurst: oe, hasNoTrail: se } = S.resolveActiveEffectFlags({
			preset: a,
			effects: l,
			dynamicsType: p
		}), ce = a?.starLifeMultiplier !== void 0 && !isNaN(Number(a.starLifeMultiplier)) ? Math.max(.2, Number(a.starLifeMultiplier)) : V ? n.BURST?.longBurnMultiplier ?? 2.2 : 1, le = V || ce >= 1.5, ue = /* @__PURE__ */ new Map();
		if (ne && m > 0) {
			let t = [];
			for (let e = 0; e < m; e++) A && e < M || t.push(e);
			let r = t.length >= 6 ? t : Array.from({ length: m }, (e, t) => t), i = n.CROSSETTE?.minSplitParticles ?? 6, a = n.CROSSETTE?.maxSplitParticles ?? 8, o = Math.min(r.length, i + Math.floor(Math.random() * (a - i + 1)));
			for (let e = 0; e < o; e++) {
				let t = e + Math.floor(Math.random() * (r.length - e)), n = r[e];
				r[e] = r[t], r[t] = n;
			}
			let s = r.slice(0, o);
			for (let e = 0; e < s.length; e++) {
				let t = e + Math.floor(Math.random() * (s.length - e)), n = s[e];
				s[e] = s[t], s[t] = n;
			}
			for (let t = 0; t < s.length; t++) {
				let n = s[t], r = .35 + (s.length > 1 ? t / (s.length - 1) : .5) * .3 + (Math.random() - .5) * .04;
				ue.set(n, e.MathUtils.clamp(r, .32, .68));
			}
		}
		let de = !!((a?.secondBurst?.enabled || a?.secondBurstEnabled) && m > 0), fe = /* @__PURE__ */ new Map();
		if (de) {
			let t = N(a).childShells, n = [];
			for (let e = 0; e < m; e++) A && e < M || n.push(e);
			let r = n.length >= 8 ? [...n] : Array.from({ length: m }, (e, t) => t);
			for (let e = 0; e < r.length; e++) {
				let t = e + Math.floor(Math.random() * (r.length - e)), n = r[e];
				r[e] = r[t], r[t] = n;
			}
			let i = 0;
			t.forEach((t) => {
				let n = typeof t.ratio == "number" ? t.ratio : .2, a = Math.min(r.length - i, Math.max(1, Math.round(m * n)));
				if (a <= 0) return;
				let o = r.slice(i, i + a);
				i += a;
				let s = typeof t.triggerTiming == "number" ? t.triggerTiming : .5, c = t.distributionMode || "random";
				for (let n = 0; n < o.length; n++) {
					let r = o[n], i = s;
					if (c === "sequential") {
						let t = o.length > 1 ? n / (o.length - 1) : .5;
						i = e.MathUtils.clamp(s - .15 + t * .3 + (Math.random() - .5) * .02, .15, .85);
					} else i = c === "random" ? e.MathUtils.clamp(s + (Math.random() - .5) * .3, .15, .85) : e.MathUtils.clamp(s + (Math.random() - .5) * .04, .15, .85);
					fe.set(r, {
						childShell: t,
						timingRatio: i
					});
				}
			});
		}
		let H = [];
		for (let r = 0; r < m; r++) {
			let i = A && r < M, s = i ? "sphere" : c, u = i ? r : r - M, f = i ? M : P, g = u / f * Math.PI * 2, x = p === "crysanthemum-spiral-v2", k = x ? Math.floor(m * .38) : 0, te = x && r < k, j, N = null;
			if (te) {
				let t = r / Math.max(1, k - 1), n = t * 3.5 * Math.PI * 2, i = Math.acos(Math.max(-1, Math.min(1, 1 - 2 * t)));
				j = new e.Vector3(Math.sin(i) * Math.cos(n), Math.cos(i), Math.sin(i) * Math.sin(n)).applyQuaternion(h);
			} else N = _.direction(s, g, u, f, i ? a : F), j = s === "willow-arch" || s === "willow-up" ? N.applyQuaternion(y) : s === "heart" || s === "text_word" ? N.clone() : N.applyQuaternion(h);
			let V = !i && F?.shapeRenderMode === "outline" && (s === "ring" || s === "heart" || s === "star") || s === "half-flash" || s === "split-flash" || s === "galaxy" || s === "egg" || s === "sphere_rings" || s === "text_word";
			V || j.normalize();
			let pe = .9 + Math.random() * .2, me = .5 + Math.random() * .8, U = .34 + Math.random() * .18, he = v.getDynamicsProfile(p, s, i ? a : F), ge = he?.baseSpeed ?? ye, _e;
			if (i) _e = ge * U;
			else if (s === "text_word") _e = ge * (.98 + (Math.random() - .5) * .04);
			else if (s === "ring" || s === "heart" || s === "star") {
				let e = .12;
				(a?.shellType === "ring" || a?.shellType === "ringV2" || a?.shellType === "ring_v2") && (e = .015), _e = ge * (1 + (Math.random() - .5) * e);
			} else if (s === "galaxy") _e = ge * (1.15 + Math.random() * .2);
			else if (s === "egg") _e = ge * (.96 + Math.random() * .08);
			else if (s === "sphere_rings") _e = ge * (.98 + (Math.random() - .5) * .04);
			else if (s === "horsetail" || s === "waterfall") {
				let e = Math.max(f, 1);
				_e = ge * (.9 + (u + .5) / e * .2 + (Math.random() - .5) * .05);
			} else _e = s === "sphere" || s === "half-flash" || s === "split-flash" ? ge * (s === "half-flash" || s === "split-flash" ? .97 + Math.random() * .06 : pe) : ge * me;
			let ve = Math.max(.6, Math.min(6, a?.shellSize ?? 1)), W = a?.shellType === "strobeDyingEmbers" && Math.random() < .5 || Math.random() < .05, xe = he?.speedJitter ?? we, De = s === "text_word" ? 1 : 1 + (Math.random() - .5) * (xe * 2), Oe = ae ? n.BURST?.apexSpeedMultiplier ?? 3 : 1, G = oe ? (n.DYNAMICS_PROFILES?.floating?.baseSpeed ?? 36) / (n.BURST?.baseSpeed ?? 74) : 1, K = _e * (V ? 1.15 : 1) * ve * De * (W ? .85 : 1) * Oe * G, ke = j.clone().normalize(), q = j.multiplyScalar(K), Ae = w;
			if (i) {
				let t = new e.Color(Ee[Math.random() * Ee.length | 0]);
				Ae = (a?.pistilColor ? new e.Color(a.pistilColor) : t).lerp(T, .08 + Math.random() * .12);
			} else if (p === "ghost") Ae = ke.x * E.ghostAxis.x + ke.y * E.ghostAxis.y + ke.z * E.ghostAxis.z < 0 ? w : O;
			else if (p === "crysanthemum-cc") Ae = w;
			else if (s === "sphere_rings" && N?.ringIndex !== void 0) {
				if (a?.ringColors && Array.isArray(a.ringColors) && a.ringColors.length > 0) {
					let t = a.ringColors[N.ringIndex % a.ringColors.length];
					Ae = new e.Color(t);
				} else Ae = a?.colorPerRing && O ? N.ringIndex % 2 == 0 ? w : O : w;
			}
			let J = Ae.clone().multiplyScalar(C), Y = 0;
			if (p === "ghost") {
				let e = q.length(), t = e > 0 ? q.x / e : 0, n = e > 0 ? q.y / e : 0, r = e > 0 ? q.z / e : 0;
				Y = t * E.ghostAxis.x + n * E.ghostAxis.y + r * E.ghostAxis.z;
			}
			let je = 0;
			if (p === "crysanthemum-spiral") {
				let e = q.length(), t = e > 0 ? q.x / e : 0, n = e > 0 ? q.y / e : 0, r = e > 0 ? q.z / e : 0, i = (n + 1) * .5, a = (Math.atan2(r, t) + Math.PI) / (Math.PI * 2), o = (1 - i) * 3.5 + a;
				je = Math.max(0, Math.min(1, o / 4.5));
			} else p === "crysanthemum-spiral-v2" && (je = te ? r / Math.max(1, k - 1) : 1);
			let Me = L && R.has(r), X, Ne = q;
			if (Me) {
				X = z;
				let e = ge * 1 * ve;
				Ne = j.clone().normalize().multiplyScalar(e);
			} else {
				let e = he?.lifeJitter ?? Te;
				X = be * (1 + (Math.random() - .5) * (e * 2)) * (le ? ce : W ? 2 * ce : (ae ? 1.35 : 1) * ce);
			}
			let Pe = a?.drag === void 0 ? he?.baseDrag ?? Se : a.drag, Fe = he?.dragJitter ?? Ce, Ie = s === "text_word" ? 1 : 1 + (Math.random() - .5) * (Fe * 2), Le = Math.max(.1, Pe * Ie), Re = B && !W && Math.random() < (n.COMET_TADPOLE?.burstActivationRatio ?? .35), Z = n.COMET_TADPOLE?.variance || {}, ze = Math.random() < (Z.wildDeflectionChance ?? .3) ? 1.8 + Math.random() * ((Z.deflectionMax ?? 3.2) - 1.8) : (Z.deflectionMin ?? .25) + Math.random() * .75, Be = (Z.sizeMin ?? .55) + Math.random() * ((Z.sizeMax ?? 1.65) - (Z.sizeMin ?? .55)), Ve = (Z.densityMin ?? .5) + Math.random() * ((Z.densityMax ?? 1.8) - (Z.densityMin ?? .5)), He = re && !W && Math.random() < (n.ERRATIC_DART?.activationRatio ?? .4), Ue = S.createParticle({
				position: t,
				velocity: Ne,
				color: J,
				baseColor: J,
				color2: I,
				age: 0,
				maxLife: X,
				isLongBurn: le,
				isApexHang: ae,
				isSlowBurst: oe,
				effectType: ee ? "ghost" : D ? "crysanthemum-cc" : p,
				crackle: !a?.isNestedChild && !W && (d || p === "crackle"),
				crackleTriggered: !1,
				phase: s === "sphere_rings" && N?.ringIndex !== void 0 && N?.ringIndex !== null ? N.ringIndex * .75 : E.phase ? E.phase[r] : 0,
				preset: a,
				heightProfile: b,
				effectState: E,
				ghostDot: Y,
				spiralIndex: je,
				isSpiralArm: !!te,
				ringIndex: N?.ringIndex ?? null,
				particleIndex: r,
				totalParticleCount: m,
				shellId: o ?? Math.floor(Math.random() * 1e8),
				isDyingEmber: W,
				isNestedTrigger: Me,
				effects: l,
				hasNoTrail: se,
				dragCoefficient: Le,
				dynamicsProfile: he,
				hasBurstSmoke: ie,
				burstSmokeLimit: .28 + Math.random() * .1,
				isCrossette: ne && !W && ue.has(r),
				crossetteSplitTime: X * (ue.get(r) ?? .5),
				crossetteSplitDone: !1,
				isSecondBurst: de && !W && fe.has(r),
				secondBurstConfig: fe.get(r)?.childShell || null,
				secondBurstTime: X * (fe.get(r)?.timingRatio ?? .5),
				secondBurstDone: !1,
				hasTadpoleFlurry: Re,
				tadpoleArrowTimer: Math.random() * .065,
				tadpoleDeflectionScale: ze,
				tadpoleSizeScale: Be,
				tadpoleDensityScale: Ve,
				hasFlurried: !1,
				hasErraticDart: He,
				erraticDartTriggerRatio: (n.ERRATIC_DART?.triggerRatioMin ?? .7) + Math.random() * ((n.ERRATIC_DART?.triggerRatioMax ?? .76) - (n.ERRATIC_DART?.triggerRatioMin ?? .7)),
				erraticDartTriggered: !1,
				erraticDartTrailTimer: Math.random() * (n.ERRATIC_DART?.trailInterval ?? .032),
				erraticDartFlash: 1,
				erraticDartWigglePhase: Math.random() * Math.PI * 2,
				erraticDartWiggleFreq: (n.ERRATIC_DART?.wobbleFreq ?? 22) * (.85 + Math.random() * .3),
				erraticDartWiggleAmp: (n.ERRATIC_DART?.wobbleAmp ?? 26) * (.85 + Math.random() * .3)
			});
			H.push(Ue);
		}
		if (B && H.length > 0 && !H.some((e) => e.hasTadpoleFlurry)) {
			let e = H.find((e) => !e.isDyingEmber) || H[0];
			e && (e.hasTadpoleFlurry = !0);
		}
		if (re && H.length > 0 && !H.some((e) => e.hasErraticDart)) {
			let e = H.find((e) => !e.isDyingEmber) || H[0];
			e && (e.hasErraticDart = !0);
		}
		let pe = this.burstParticles.length + H.length - this.maxBurstParticles;
		pe > 0 && this.burstParticles.splice(0, pe);
		for (let e = 0; e < H.length; e++) this.burstParticles.push(H[e]);
	}
	createRandomBurstRotation() {
		return S.createRandomBurstRotation();
	}
	spawnSecondBurst(t, r) {
		if (!t || !t.secondBurstConfig) return;
		let i = t.secondBurstConfig, a = _.resolveShape(i.shapeType || "sphere"), o = i.dynamicsType || "standard", s = typeof i.scale == "number" ? i.scale : .35, c = new e.Color(i.color || "#ffd700"), l = Array.isArray(i.effects) ? i.effects : [], u = !!i.instantBurst, d = !!i.pistil, f = n.SECOND_BURST || {}, p = f.minParticlesPerChild ?? 8, m = f.maxParticlesPerChild ?? 16, h = Math.round(e.MathUtils.lerp(p, m, (s - .15) / .65) * this.graphicsQualityMultiplier), g = d ? Math.max(4, Math.min(18, Math.round(h * .4))) : 0, y = h + g, b = n.SYSTEM?.maxBurstParticles ?? 2e4;
		if (r.length + y > b) return;
		let x = u ? 1.25 : 1, C = (f.baseSpeed ?? 38) * (.8 + s * .5) * x, w = (f.defaultLife ?? .9) * (.85 + Math.random() * (f.lifeJitter ?? .3)), T = t.velocity.clone().multiplyScalar(.2), E = t.position.clone(), ee = this.createRandomBurstRotation(), { isCrossetteShell: D, isTadpoleFlurryShell: O, isErraticDartShell: k, hasBurstSmoke: te, isGhostEffect: A, isCCEffect: j, isLongBurn: M, isApexHang: N, isSlowBurst: P, hasNoTrail: F } = S.resolveActiveEffectFlags({
			preset: i,
			effects: l,
			dynamicsType: o
		}), I = i?.starLifeMultiplier !== void 0 && !isNaN(Number(i.starLifeMultiplier)) ? Math.max(.2, Number(i.starLifeMultiplier)) : M ? n.BURST?.longBurnMultiplier ?? 2.2 : 1, L = null;
		i.secondColor && i.secondColor !== i.color ? L = new e.Color(i.secondColor) : (A || j) && (L = c.clone());
		let R = /* @__PURE__ */ new Map();
		if (D && h >= 4) {
			let t = Math.max(2, Math.min(4, Math.floor(h * .3))), n = Array.from({ length: h }, (e, t) => t);
			for (let e = 0; e < t; e++) {
				let t = e + Math.floor(Math.random() * (n.length - e)), r = n[e];
				n[e] = n[t], n[t] = r;
			}
			for (let r = 0; r < t; r++) {
				let i = n[r], a = .35 + r / Math.max(1, t - 1) * .25;
				R.set(i, e.MathUtils.clamp(a, .3, .65));
			}
		}
		let z = {
			...v.initialize(o, h, {
				...i,
				effects: l,
				strobe: l.includes("strobe") || l.includes("white-strobe") || l.includes("glitter-strobe") || !!i.strobe,
				crackle: l.includes("crackle") || !!i.crackle,
				flow: l.includes("flow") || o === "flow",
				ghost: A,
				crossette: D
			}),
			shapeType: a
		}, ne = v.getDynamicsProfile(o, a, i), B = [];
		for (let e = 0; e < h; e++) {
			let d = e / h * Math.PI * 2, f = _.direction(a, d, e, h, i).applyQuaternion(ee).normalize(), p = (u ? .95 : .85) + Math.random() * .3, m = N ? n.BURST?.apexSpeedMultiplier ?? 3 : 1, g = P ? (n.DYNAMICS_PROFILES?.floating?.baseSpeed ?? 36) / (n.BURST?.baseSpeed ?? 74) : 1, v = f.multiplyScalar(C * p * m * g).add(T), y = k && Math.random() < (n.ERRATIC_DART?.activationRatio ?? .4), b = O && Math.random() < (n.COMET_TADPOLE?.burstActivationRatio ?? .35), x = n.COMET_TADPOLE?.variance || {}, re = Math.random() < (x.wildDeflectionChance ?? .3) ? 1.8 + Math.random() * ((x.deflectionMax ?? 3.2) - 1.8) : (x.deflectionMin ?? .25) + Math.random() * .75, ie = (x.sizeMin ?? .55) + Math.random() * ((x.sizeMax ?? 1.65) - (x.sizeMin ?? .55)), V = (x.densityMin ?? .5) + Math.random() * ((x.densityMax ?? 1.8) - (x.densityMin ?? .5)), ae = S.createParticle({
				position: E,
				velocity: v,
				color: c,
				baseColor: c,
				color2: L,
				age: 0,
				maxLife: M ? w * (n.BURST?.longBurnMultiplier ?? 2.2) : w * I * (N ? 1.35 : 1),
				isLongBurn: M || I >= 1.5,
				isApexHang: N,
				isSlowBurst: P,
				effectType: A ? "ghost" : j ? "crysanthemum-cc" : o,
				crackle: l.includes("crackle") || !!i.crackle,
				phase: z.phase && z.phase[e] !== void 0 ? z.phase[e] : Math.random() * Math.PI * 2,
				preset: {
					shapeType: a,
					dynamicsType: o,
					effects: l,
					secondBurst: null
				},
				heightProfile: t.heightProfile,
				effectState: z,
				particleIndex: e,
				totalParticleCount: h,
				shellId: t.shellId,
				effects: l,
				hasNoTrail: F,
				hasBurstSmoke: te,
				burstSmokeLimit: .28 + Math.random() * .1,
				isCrossette: D && R.has(e),
				crossetteSplitTime: w * (R.get(e) ?? .5),
				crossetteSplitDone: !1,
				renderSize: Math.max(16, (t.renderSize || Oe) * s * 1.35),
				renderOpacity: .85,
				isSecondBurstChild: !0,
				dynamicsProfile: ne,
				dragCoefficient: ne?.baseDrag ?? Se,
				hasTadpoleFlurry: b,
				tadpoleArrowTimer: Math.random() * .065,
				tadpoleDeflectionScale: re,
				tadpoleSizeScale: ie,
				tadpoleDensityScale: V,
				hasErraticDart: y,
				erraticDartTriggerRatio: (n.ERRATIC_DART?.triggerRatioMin ?? .7) + Math.random() * ((n.ERRATIC_DART?.triggerRatioMax ?? .76) - (n.ERRATIC_DART?.triggerRatioMin ?? .7)),
				erraticDartTrailTimer: Math.random() * (n.ERRATIC_DART?.trailInterval ?? .032),
				erraticDartFlash: 1,
				erraticDartWigglePhase: Math.random() * Math.PI * 2,
				erraticDartWiggleFreq: (n.ERRATIC_DART?.wobbleFreq ?? 22) * (.85 + Math.random() * .3),
				erraticDartWiggleAmp: (n.ERRATIC_DART?.wobbleAmp ?? 26) * (.85 + Math.random() * .3)
			});
			B.push(ae), r.push(ae);
		}
		if (k && B.length > 0 && !B.some((e) => e.hasErraticDart) && (B[0].hasErraticDart = !0), O && B.length > 0 && !B.some((e) => e.hasTadpoleFlurry) && (B[0].hasTadpoleFlurry = !0), d && g > 0) {
			let a = new e.Color(i.pistilColor || "#ffffff"), o = C * .42, c = {
				...v.initialize("standard", g, { effects: [] }),
				shapeType: "sphere"
			};
			for (let e = 0; e < g; e++) {
				let l = e / g * Math.PI * 2, u = _.direction("sphere", l, e, g, i).applyQuaternion(ee).normalize(), d = .9 + Math.random() * .2, f = N ? n.BURST?.apexSpeedMultiplier ?? 3 : 1, p = u.multiplyScalar(o * d * f).add(T), m = S.createParticle({
					position: E,
					velocity: p,
					color: a,
					baseColor: a,
					color2: null,
					age: 0,
					maxLife: w * .85,
					isApexHang: N,
					effectType: "standard",
					crackle: !1,
					crackleTriggered: !1,
					phase: c.phase && c.phase[e] !== void 0 ? c.phase[e] : Math.random() * Math.PI * 2,
					preset: {
						shapeType: "sphere",
						dynamicsType: "standard",
						effects: [],
						secondBurst: null
					},
					heightProfile: t.heightProfile,
					effectState: c,
					particleIndex: e,
					totalParticleCount: g,
					shellId: t.shellId,
					renderSize: Math.max(14, (t.renderSize || Oe) * s * 1.15),
					renderOpacity: .85,
					isSecondBurstChild: !0,
					dragCoefficient: Se
				});
				r.push(m);
			}
		}
		let re = performance.now(), ie = f.audioThrottleMs ?? 45;
		if (re - this.lastSecondBurstAudioTime > ie) {
			this.lastSecondBurstAudioTime = re;
			let e = i.burstSound || "standard", t = .98 + Math.random() * .12;
			this.emitFireworkEvent("firework:burst", {
				position: {
					x: E.x,
					y: E.y,
					z: E.z
				},
				intensity: .65,
				isSubBurst: !0,
				isSecondBurst: !0,
				sound: {
					burst: e,
					volumeMultiplier: .85,
					pitchMultiplier: t
				}
			});
		}
	}
	handleShellUpdate(t, r, i) {
		let a = t.update(r);
		if (t.preset?.cometTrail === "ascent-bursts" || t.preset?.ascentBursts) {
			if (!t._ascentBurstMilestones) {
				let e = Math.max(2, Math.min(6, t.preset?.ascentBurstCount || 4));
				t._ascentBurstMilestones = [];
				let n = (.8 - .22) / Math.max(1, e - 1);
				for (let r = 0; r < e; r++) t._ascentBurstMilestones.push(.22 + r * n);
				t._nextAscentBurstIndex = 0;
			}
			t._nextAscentBurstIndex < t._ascentBurstMilestones.length && (t.getProgress ? t.getProgress() : 0) >= t._ascentBurstMilestones[t._nextAscentBurstIndex] && (this.triggerAscentSubBurst(t, t._nextAscentBurstIndex), t._nextAscentBurstIndex++);
		}
		let o = t.preset?.cometTrail === "smoke" || !!t.preset?.flightSmoke && t.preset?.launchTrail === !1, s = t.preset?.launchTrail !== !1 && !o, c = t.preset?.trailChance === void 0 ? 1 : t.preset.trailChance, u = t.getTrailIntensity ? t.getTrailIntensity() : 1;
		if (s && u > .01 && Math.random() < c) {
			let r = null;
			if (t.preset?.noBurst && t.preset?.starLife) {
				let e = t.preset.starLife / 1e3, n = Math.max(.1, e - t.age), i = (2 + Math.random() * 3) * .5;
				r = Math.min(i, n);
			}
			let i = t.shellType === "floral-child", a = !!t.preset?.detachedTrail || t.preset?.cometTrail === "detached" || t.preset?.cometTrail === "detached-trail" || t.shellType === "comet_cluster_detached", o = (!!t.preset?.thinTrail || a) && !i, s = (t.preset?.isBouquetComet || i && t.preset?.thickTrail) && !o, c = (t.preset?.thickTrail || s) && !o, l = n.ASCENT, d;
			d = a ? .2 : o ? .22 : s ? .95 : c ? .7 : l?.trailLifeMultiplier ?? .55;
			let f = a ? .2 : o ? .22 : d * (.6 + .4 * u), p = a ? .38 * u : o ? .65 * u : Math.min(1, (l?.trailOpacity ?? 1) * u * (s ? 1.4 : 1)), m = t.getProgress ? t.getProgress() : .5, h = Math.sin(Math.PI * m), g = l?.trailDispersion ?? .22, _ = l?.midDispersionBoost ?? 2.2, v;
			v = o || a ? 0 : s ? .35 + Math.random() * .2 : g * (.5 + _ * h ** .9);
			let y;
			if (o || a) y = 2;
			else if (s) y = 2;
			else {
				let e = l?.subSteps ?? 2, t = l?.midSubStepsBonus ?? 2;
				y = e + Math.round(t * h ** .85);
			}
			let b = t.prevPosition || t.mesh.position, x = t.mesh.position, S = o || a ? 0 : s ? .85 : (l?.midExtraParticleChance ?? .75) * h ** .85, C = s ? t.color.clone().offsetHSL(0, 0, .15) : a ? t.color.clone().offsetHSL(0, -.15, -.12) : o ? t.color.clone().offsetHSL(0, .05, .05) : t.color;
			for (let n = 1; n <= y; n++) {
				let i = n / y, o = new e.Vector3().lerpVectors(b, x, i);
				if (t.trailOffset) {
					let n = t.prevTrailOffset || t.trailOffset, r = t.trailOffset, a = new e.Vector3().lerpVectors(n, r, i);
					o.add(a);
				}
				if (a) {
					let n = t.velocity, r = n ? n.length() : 0, i = r > .1 ? n.clone().normalize() : new e.Vector3(0, 1, 0), a = Math.max(16, Math.min(28, r * .22));
					o.addScaledVector(i, -a);
				}
				if (v > .02 && (o.x += (Math.random() - .5) * v, o.z += (Math.random() - .5) * v), this.trailSystem.spawnTrailParticle(o, C, f, !1, r, p, !1), S > .2 && !a && Math.random() < S) {
					let e = o.clone(), t = Math.random() * Math.PI * 2, n = (.25 + .75 * Math.random()) * v;
					e.x += Math.cos(t) * n, e.z += Math.sin(t) * n, this.trailSystem.spawnTrailParticle(e, C, f * .9, !1, r, p * .95, !1);
				}
				if ((s ? Math.random() < .35 : u >= .85 && Math.random() < .2 + .15 * h) && !t.preset?.sparkleAtEnd && !a) {
					let e = s ? t.color.clone().offsetHSL(0, 0, .35) : t.color.clone().offsetHSL(0, 0, .2);
					this.trailSystem.spawnEffectSpark(o, e, !1, null, 0, .6 + Math.random() * .5);
				}
				if (t.preset?.sparkleAtEnd && m > .65) {
					let t = .38 + ((m - .65) / .35) ** 1.4 * .62;
					if (Math.random() < t) {
						let t = new e.Color(16777215), n = new e.Vector3((Math.random() - .5) * 4.5, -1.5 - Math.random() * 4, (Math.random() - .5) * 4.5);
						this.trailSystem.spawnEffectSpark(x, t, !0, n, Math.random() * 1e3, .3 + Math.random() * .25);
					}
				}
			}
		}
		if (o && u > .01) {
			let r = t.prevPosition || t.mesh.position, i = t.mesh.position, a = new e.Vector3().subVectors(i, r), o = a.length(), s = o > .001 ? a.clone().normalize() : t.velocity && t.velocity.lengthSq() > .01 ? t.velocity.clone().normalize() : new e.Vector3(0, 1, 0), c = n.SMOKE, d = c?.flightSmokeStepDist || 1.2, f = Math.max(1, Math.min(8, Math.ceil(o / d))), p = new e.Color(15922680), m = t.color ? p.clone().lerp(t.color, .22) : p;
			for (let t = 1; t <= f; t++) {
				let n = t / f, a = new e.Vector3().lerpVectors(r, i, n), o = (.2 + .35 * (1 - n)) * ((c?.flightSmokeScale || 4.8) * .12);
				a.x += (Math.random() - .5) * o, a.y += (Math.random() - .5) * o, a.z += (Math.random() - .5) * o;
				let d = s.clone().multiplyScalar((-1.6 - Math.random() * 1.2) * (.8 + .4 * (1 - n))).add(new e.Vector3((Math.random() - .5) * .8, .3 + Math.random() * .8, (Math.random() - .5) * .8)), p = {
					life: ((c?.flightSmokeLifeMin || 3.5) + Math.random() * ((c?.flightSmokeLifeMax || 6.5) - (c?.flightSmokeLifeMin || 3.5))) * u,
					scale: (c?.flightSmokeScale || 4.8) * (.72 + .38 * (1 - n)) * (.7 + .3 * u) + Math.random() * 1.2,
					growth: c?.flightSmokeGrowth || 3.2,
					drag: c?.flightSmokeDrag || 1.8,
					buoyancy: c?.flightSmokeBuoyancy || .38,
					opacity: (c?.flightSmokeOpacity || .28) * (1.15 - .25 * (1 - n)) * u,
					color: m
				};
				c?.onlyBurstSmoke || (this.smokeSystem ? this.smokeSystem.addSmokePoint(a, d, p) : l.emit("smoke:spawn", {
					position: a,
					velocity: d,
					options: p
				}));
			}
		} else if (t.preset?.flightSmoke && u > .01 && Math.random() < .35 * u && !n.SMOKE?.onlyBurstSmoke) {
			let r = t.velocity ? t.velocity.clone().multiplyScalar(-.15) : new e.Vector3(0, -1.2, 0), i = n.SMOKE, a = {
				life: (i.trailLifeMin + Math.random() * (i.trailLifeMax - i.trailLifeMin)) * u,
				scale: (i.trailBaseScale * .8 + Math.random() * 2.5) * (.6 + .4 * u),
				growth: i.trailGrowth,
				drag: i.trailDrag,
				buoyancy: i.trailBuoyancy,
				opacity: i.trailOpacity * u,
				color: t.color ? t.color.clone() : new e.Color(15922680)
			};
			this.smokeSystem ? this.smokeSystem.addSmokePoint(t.mesh.position, r, a) : l.emit("smoke:spawn", {
				position: t.mesh.position.clone(),
				velocity: r,
				options: a
			});
		}
		if (!a) return;
		let d = t.mesh.position.clone(), f = !!(t.preset?.isTadpoleShell || t.preset?.shellType === "chrysanthemum_tadpole_burst" || t.shellType === "chrysanthemum_tadpole_burst");
		if (Array.isArray(t.preset?.effects) && (t.preset.effects.includes("tadpole-flurry") || t.preset.effects.includes("tadpole_flurry")) || Array.isArray(t.effects) && (t.effects.includes("tadpole-flurry") || t.effects.includes("tadpole_flurry")), f) {
			let n = t.velocity ? t.velocity.clone() : null, r = n && n.lengthSq() > .001 ? n.clone().normalize() : new e.Vector3(0, 1, 0);
			this.triggerTadpoleBurstShell(d, t.color, t.preset, t.shellId, r, n), t.markBursted?.(), i.push(t), this.diagnostics.bursted += 1, this.emitDiagnostics();
			let a = Array.isArray(t.preset?.effects) && t.preset.effects.includes("no-burst") || !!t.preset?.["no-burst"], o = .35 + (Math.max(1, Math.min(6, t.preset?.shellSize ?? 1)) - 1) / 5 * .65;
			this.emitFireworkEvent("firework:burst", {
				shellId: t.shellId,
				shellType: "chrysanthemum_tadpole_burst",
				shapeType: t.shapeType ?? "sphere",
				effectType: "tadpole-flurry",
				effects: ["tadpole-flurry"],
				sound: t.preset?.sound || null,
				hasBurstSmoke: !1,
				burstSmoke: !1,
				hasCustomColor: !!t.preset?.hasCustomColor,
				noBurstSound: a || !!t.preset?.noBurstSound,
				colorHex: t.color.getHex(),
				position: {
					x: d.x,
					y: d.y,
					z: d.z
				},
				intensity: o,
				duration: 1.25 + o * 1.1
			});
			return;
		}
		if (this.isBouquetShell(t) || this.isBouquetShell(t.preset)) {
			let n = t.velocity ? t.velocity.clone() : null, r = n && n.lengthSq() > .001 ? n.clone().normalize() : new e.Vector3(0, 1, 0);
			this.triggerBouquetBurst(d, t.color, t.preset, t.shellId, r, n), t.markBursted?.(), i.push(t);
			let a = .35 + (Math.max(1, Math.min(6, t.preset?.shellSize ?? 1)) - 1) / 5 * .65, o = Array.isArray(t.preset?.effects) && t.preset.effects.includes("no-burst") || !!t.preset?.["no-burst"], s = !o && (Array.isArray(t.preset?.effects) && t.preset.effects.some((e) => (typeof e == "object" && e ? e.type || e.key : e) === "burst-smoke") || !!t.preset?.["burst-smoke"] || !!t.preset?.burstSmoke);
			this.emitFireworkEvent("firework:burst", {
				shellId: t.shellId,
				shellType: t.shellType ?? t.shape,
				shapeType: t.shapeType ?? t.shape,
				effectType: t.preset?.effectType ?? t.shape,
				effects: t.preset?.effects,
				hasBurstSmoke: s,
				burstSmoke: s,
				hasCustomColor: !!t.preset?.hasCustomColor,
				noBurstSound: o || !!t.preset?.noBurstSound,
				colorHex: t.color.getHex(),
				position: {
					x: d.x,
					y: d.y,
					z: d.z
				},
				intensity: a,
				duration: 1.25 + a * 1.1
			});
			return;
		}
		if (t.preset?.noBurst) {
			if (t.preset?.sparkleAtEnd) {
				let t = 8 + Math.floor(Math.random() * 5);
				for (let n = 0; n < t; n++) {
					let t = new e.Color(16777215), n = new e.Vector3((Math.random() - .5) * 6.5, -1 - Math.random() * 4.5, (Math.random() - .5) * 6.5);
					this.trailSystem.spawnEffectSpark(d, t, !0, n, Math.random() * 1e3, .45 + Math.random() * .35);
				}
			}
			t.markBursted?.(), i.push(t);
			return;
		}
		t.preset?.multiNested || t.preset?.preset === "multi_nested" || t.preset?.preset === "multiNested" || Array.isArray(t.preset?.stages) && t.preset.stages.length > 0 ? this.triggerMultiNestedBurst(d, t.color, t.preset, t.shellId) : this.createBurst(d, t.color, t.shapeType ?? t.shape, t.preset, t.shellId);
		let p = Math.max(1, Math.min(6, t.preset?.shellSize ?? 1)), m = .35 + (p - 1) / 5 * .65;
		t.markBursted?.(), i.push(t), this.diagnostics.bursted += 1, this.emitDiagnostics();
		let h = Array.isArray(t.preset?.effects) && t.preset.effects.includes("no-burst") || !!t.preset?.["no-burst"], g = Array.isArray(t.preset?.effects) && t.preset.effects.includes("ghost") || t.preset?.effectType === "ghost" || !!t.preset?.ghost, _ = !h && (Array.isArray(t.preset?.effects) && t.preset.effects.some((e) => (typeof e == "object" && e ? e.type || e.key : e) === "burst-smoke") || !!t.preset?.["burst-smoke"] || !!t.preset?.burstSmoke), v = Array.isArray(t.preset?.effects) && t.preset.effects.includes("strobe") || t.preset?.effectType === "strobe" || !!t.preset?.strobe, y = !!t.preset?.isDyingEmber, b = t.preset?.starLifeMultiplier !== void 0 && !isNaN(Number(t.preset.starLifeMultiplier)) ? Math.max(.2, Number(t.preset.starLifeMultiplier)) : 1;
		this.emitFireworkEvent("firework:burst", {
			shellId: t.shellId,
			shellType: t.shellType ?? t.shape,
			shapeType: t.shapeType ?? t.shape,
			effectType: t.preset?.effectType ?? t.shape,
			effects: t.preset?.effects,
			sound: t.preset?.sound || null,
			hasBurstSmoke: _,
			burstSmoke: _,
			hasCustomColor: !!t.preset?.hasCustomColor,
			noBurstSound: h || !!t.preset?.noBurstSound,
			colorHex: t.color.getHex(),
			color2Hex: t.color2 ? t.color2.getHex() : null,
			position: {
				x: d.x,
				y: d.y,
				z: d.z
			},
			burstRadius: 45 * (.75 + .25 * p),
			intensity: g ? 0 : m,
			duration: 1.25 + m * 1.1,
			particleLife: be * (y ? 2 : 1) * b,
			isStrobe: v
		});
	}
	updateBurstParticles(t) {
		let r = [], i = [];
		this.activeShellIdsSet.clear();
		for (let e = 0; e < this.burstParticles.length && (this.activeShellIdsSet.add(this.burstParticles[e].shellId), !(this.activeShellIdsSet.size > 8)); e++);
		let a = this.activeShellIdsSet.size > 8 ? 1.25 : 1;
		for (let o = 0; o < this.burstParticles.length; o++) {
			let s = this.burstParticles[o];
			if (s.age += t, s.age >= s.maxLife) {
				s.isNestedTrigger && i.push({
					position: s.position.clone(),
					color: s.color.clone(),
					shellId: s.shellId,
					strobe: !!s.preset?.strobe
				});
				continue;
			}
			let { gravityScale: c, dragCoefficient: u, emitSpark: f, spawnTrail: p, trailLife: m, trailIntensity: h, trailSpawnChance: g, spawnSmoke: _, smokeLife: y, smokeOpacity: b } = v.updateVelocity(s.velocity, s.particleIndex, t, s.age, s.maxLife, s.effectState);
			if (s.isCrossetteBranch) {
				let e = n.CROSSETTE;
				m = e?.trailLife ?? .3, h = e?.trailIntensity ?? .6, g = e?.trailSpawnChance ?? .4, _ = !1;
			}
			let x = s.crackleStart === void 0 ? s.maxLife * .65 : s.crackleStart, C = s.crackleEnd === void 0 ? x : s.crackleEnd;
			if (s.crackle && !s.isDyingEmber) {
				if (s.age >= x && s.age < C) Math.random() < .2 && typeof this.trailSystem?.spawnMicroCrackle == "function" && this.trailSystem.spawnMicroCrackle(s.position, s.baseColor);
				else if (s.age >= C && !s.crackleTriggered) {
					if (s.crackleTriggered = !0, Math.random() < .65 && typeof this.trailSystem?.spawnMicroCrackle == "function") {
						let e = s.position.clone(), t = s.baseColor.clone();
						this.trailSystem.spawnMicroCrackle(e, t), this.emitFireworkEvent("firework:crackle", {
							sound: s.preset?.sound || null,
							isSubBurst: !!(s.isSecondBurst || s.secondBurstDone),
							source: "burst-particle",
							position: {
								x: e.x,
								y: e.y,
								z: e.z
							}
						});
					}
					s.baseColor.setRGB(0, 0, 0);
				}
			}
			if (s.isCrossette && !s.crossetteSplitDone && s.age >= s.crossetteSplitTime && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01) {
				s.crossetteSplitDone = !0;
				let e = s.velocity.length();
				e > .001 ? K.copy(s.velocity).divideScalar(e) : K.set(0, 1, 0), Math.abs(K.y) > .85 ? ke.set(1, 0, 0) : ke.set(0, 1, 0), q.crossVectors(K, ke).normalize(), Ae.crossVectors(K, q).normalize(), J[0].copy(q), J[1].copy(q).negate(), J[2].copy(Ae), J[3].copy(Ae).negate();
				let t = Math.max(.65, s.maxLife - s.age), n = !!s.preset?.noTrail || !!(s.hasNoTrail && s.noTrailStart === void 0) || v.isEffectActive(s, "no-trail") || s.effectType === "no-trail" || s.effectType === "notrail", i = S.createCrossetteBranches({
					parentParticle: s,
					branchDirs: J,
					speed: e,
					dir: K,
					splitOrigin: s.position,
					branchColor: s.baseColor,
					remainingLife: t,
					hasNoTrail: n
				});
				for (let e = 0; e < i.length; e++) r.push(i[e]);
				s.baseColor.setRGB(0, 0, 0), s.renderOpacity = 0, s.age = s.maxLife;
				continue;
			}
			s.isSecondBurst && !s.secondBurstDone && s.age >= s.secondBurstTime && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01 && (s.secondBurstDone = !0, this.spawnSecondBurst(s, r), s.baseColor.setRGB(0, 0, 0), s.renderOpacity = 0);
			let w = s.maxLife > 0 ? s.age / s.maxLife : 1;
			if (s.lastVelocity) {
				let e = s.velocity.x - s.lastVelocity.x, t = s.velocity.y - s.lastVelocity.y, n = s.velocity.z - s.lastVelocity.z, r = Math.sqrt(e * e + t * t + n * n);
				if (r > 1.8) {
					let e = Math.min(1, (r - 1.8) * .16);
					s.frictionHeat = Math.min(1.5, (s.frictionHeat || 0) + e);
				}
			}
			let T = s.velocity.x, E = s.velocity.y, ee = s.velocity.z, D = v.processErraticDart(s, t, w, c), O = s.dynamicsProfile ?? n.DYNAMICS_PROFILES?.standard, k = u === void 0 ? s.dragCoefficient ?? O?.baseDrag ?? Se : u;
			if (O?.delayedGravity && !s.preset?.fixedGravity && u === void 0) {
				let t = O.gravityRampStart ?? .32, n = O.gravityRampFull ?? .55, r = O.minGravity ?? .05, i = r + (1 - r) * e.MathUtils.smoothstep(w, t, n);
				D *= i;
			}
			let te = Math.exp(-k * t);
			if (s.velocity.x *= te, s.velocity.y *= te, s.velocity.z *= te, s.isLongBurn || s.isDyingEmber) {
				let e = s.isLongBurn ? n.BURST?.longBurnGravityScale ?? .85 : 1.3;
				D *= e, s.velocity.multiplyScalar(s.isLongBurn ? .995 : .994);
			}
			if (s.isApexHang) {
				let r = n.BURST?.apexExpansionDrag ?? 3.8, i = Math.exp(-r * t);
				s.velocity.x *= i, s.velocity.y *= i, s.velocity.z *= i;
				let a = s.ejectionDir, o = s.initialSpeed ?? 0;
				if (a && o > .001) {
					let t = Math.max(0, s.velocity.dot(a)) / o, r = n.BURST?.apexGravityThreshold ?? .18;
					if (t > r) D = 0;
					else {
						let n = 1 - t / r;
						D = e.MathUtils.smoothstep(n, 0, 1);
					}
				} else {
					let t = n.BURST?.apexHangEnd ?? .48;
					if (w < t) D = 0;
					else {
						let n = Math.min(1, (w - t) / .18);
						D = e.MathUtils.smoothstep(n, 0, 1);
					}
				}
			}
			let A = this.smokeSystem && this.smokeSystem.currentWind || d.currentWind;
			if (A && (s.isLongBurn || s.isDyingEmber || s.isSlowBurst || s.effectType === "willow" || s.effectType === "willow-arch" || s.effectType === "falling-leaves" || s.effectType === "kamuro")) {
				let r = n.BURST, i = r?.windCouplingScale ?? .25, a = s.isLongBurn ? r?.windInfluenceLongBurn ?? .65 * i : s.isDyingEmber ? r?.windInfluenceDyingEmber ?? .85 * i : r?.windInfluenceFloating ?? .45 * i;
				s.velocity.x = e.MathUtils.lerp(s.velocity.x, A.x, t * a), s.velocity.z = e.MathUtils.lerp(s.velocity.z, A.z, t * a);
			}
			if (s.velocity.y += ge * t * D, w >= (n.BURST?.phaseApexEnd ?? .65)) {
				let r = O?.terminalVelocity ?? (s.isLongBurn ? -10 : n.BURST?.terminalVelocity ?? -15);
				s.velocity.y < r && (s.velocity.y = e.MathUtils.lerp(s.velocity.y, r, t * 4.5));
			}
			let j = s.velocity.x - T, M = s.velocity.y - E, N = s.velocity.z - ee, P = Math.sqrt(j * j + M * M + N * N);
			if (P > 1.8) {
				let e = Math.min(1, (P - 1.8) * .16);
				s.frictionHeat = Math.min(1.5, (s.frictionHeat || 0) + e);
			}
			if (s.frictionHeat > .001 ? s.frictionHeat *= Math.exp(-t * 12) : s.frictionHeat = 0, s.lastVelocity ||= new e.Vector3(), s.lastVelocity.set(s.velocity.x, s.velocity.y, s.velocity.z), s.prevPosition ? s.prevPosition.copy(s.position) : s.prevPosition = s.position.clone(), s.position.addScaledVector(s.velocity, t), s.position.y <= 0) {
				if (s.baseColor.r + s.baseColor.g + s.baseColor.b > .08 && s.age < s.maxLife * .95) {
					if (Math.random() < .35) {
						X.set((Math.random() - .5) * .8, .6 + Math.random() * .8, (Math.random() - .5) * .8), Me.set(s.position.x, .05, s.position.z);
						let e = {
							life: .7 + Math.random() * .5,
							scale: 1.8 + Math.random() * 1.2,
							growth: 2.2,
							drag: 2.8,
							buoyancy: .9,
							opacity: .12,
							color: Fe
						};
						this.smokeSystem ? this.smokeSystem.addSmokePoint(Me, X, e) : l.emit("smoke:spawn", {
							position: Me.clone(),
							velocity: X.clone(),
							options: e
						});
					}
					Math.random() < .25 && (Ne.set((Math.random() - .5) * 3.5, 1.2 + Math.random() * 2, (Math.random() - .5) * 3.5), Me.set(s.position.x, .05, s.position.z), Pe.copy(s.baseColor).lerp(Z, .5), this.trailSystem?.spawnEffectSpark?.(Me, Pe, !1, Ne, 0, .15 + Math.random() * .1));
				}
				continue;
			}
			f && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01 && this.trailSystem?.spawnEffectSpark?.(s.position, G);
			let F = s.isLongBurn ? O?.longBurnDissolveStart ?? n.BURST?.longBurnDissolveStart ?? .72 : O?.dissolveStart ?? xe, I = w > F ? (1 - (w - F) / (1 - F)) ** 2 : 1, L = !0, R = 1;
			if (s.effectType === "crysanthemum-spiral") {
				let e = Math.min(1, w / .65), t = s.spiralIndex ?? 0;
				if (L = t <= e, L) {
					let n = e - t;
					n < .08 && (R = 1 + (1 - n / .08) * .75);
				}
			} else if (s.effectType === "crysanthemum-spiral-v2") {
				if (s.isSpiralArm) {
					let e = Math.min(1, w / .52), t = s.spiralIndex ?? 0;
					if (L = t <= e, L) {
						let n = e - t;
						n < .08 && (R = 1 + (1 - n / .08) * .85);
					}
				} else if (L = w >= .52, L) {
					let e = w - .52;
					e < .1 && (R = 1 + (1 - e / .1) * .95);
				}
			}
			let z = !0, ne = 1, B = s.effectType === "sphere_rings_wave" || s.effectType === "sphere-rings-wave" || s.preset?.dynamicsType === "sphere_rings_wave" || s.preset?.dynamicsType === "sphere-rings-wave";
			if (B) {
				let e = s.ringIndex !== null && s.ringIndex !== void 0 ? s.ringIndex : 2, t = s.preset?.ringWaveMode || "equator-outward", n = .08;
				if (n = t === "pole-to-pole" ? .06 + e * .08 : .08 + Math.abs(e - 2) * .14, z = w >= n, z) {
					let e = w - n;
					e < .08 && (ne = 1 + (1 - e / .08) * 1.5);
				}
			}
			let re = s.effectType === "crysanthemum-spiral" || s.effectType === "crysanthemum-spiral-v2", ie = s.effectWindows && s.effectWindows.ghost || Array.isArray(s.effects) && s.effects.some((e) => typeof e == "object" && !!e && (e.type || e.key) === "ghost"), V = v.isEffectActive(s, "ghost"), ae = V || !ie && (s.effectType === "ghost" || Array.isArray(s.effects) && s.effects.includes("ghost") || Array.isArray(s.preset?.effects) && s.preset.effects.includes("ghost") || !!s.preset?.ghost || s.preset?.shellType === "ghost");
			s.effectType === "crysanthemum-cc" || Array.isArray(s.effects) && s.effects.includes("crysanthemum-cc") || Array.isArray(s.preset?.effects) && s.preset.effects.includes("crysanthemum-cc") || s.preset?.shellType;
			let oe = V || !ie && ae && w < .4, se = s.effects?.includes("ghost-flare") || s.preset?.effects?.includes("ghost-flare") || s.effectType === "ghost-kamuro", ce = se && w <= .6, le = s.effectWindows && s.effectWindows["no-trail"] || Array.isArray(s.effects) && s.effects.some((e) => typeof e == "object" && !!e && [
				"no-trail",
				"notrail",
				"noTrail"
			].includes(e.type || e.key)), ue = v.isEffectActive(s, "no-trail") || !le && !!s.preset?.noTrail || s.effectType === "no-trail" || s.effectType === "notrail";
			if (p && (!re || L) && (!B || z) && !ce && !oe && !ue && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01) {
				let e = s.effectState?.shapeType === "half-flash" && s.particleIndex >= s.totalParticleCount - 4, t = s.effectState?.shapeType === "split-flash" && s.particleIndex >= s.totalParticleCount - 5, r = s.effectState?.effectType === "comet-ring", i = n.BURST, a = i?.defaultTrailSpawnChance ?? .95;
				if (Math.random() < (g === void 0 ? e || t || r || re ? .95 : w < .65 ? a : .8 : g) * I) {
					let e = (h ?? .25) * I;
					Le.copy(s.baseColor).multiplyScalar(e);
					let t = (m || .8) * (.2 + .8 * I);
					Re.copy(s.velocity).multiplyScalar(r ? .7 : .25);
					let n = r ? 0 : .8, a = r ? 1.2 : 1.6, o = s.prevPosition || s.position, c = o.distanceTo(s.position), l = g !== void 0 && g < .5, u = i?.trailStride ?? .45, d = i?.maxTrailSubSteps ?? 3, f = l ? 1 : Math.min(d, Math.max(1, Math.ceil(c / u)));
					for (let e = 1; e <= f; e++) {
						let i = e / f;
						Ie.lerpVectors(o, s.position, i), this.trailSystem?.spawnTrailParticle?.(Ie, Le, r ? 1 : t, !1, r ? t : null, .65, !1, Re, n, a);
					}
				}
			}
			if (s.hasTadpoleFlurry && !oe && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01) {
				let e = s.tadpoleStart === void 0 ? s.maxLife * .18 : s.tadpoleStart, r = s.tadpoleEnd === void 0 ? s.maxLife * .85 : s.tadpoleEnd;
				if (s.age >= e && s.age <= r) {
					s.tadpoleArrowTimer = (s.tadpoleArrowTimer || 0) + t;
					let e = n.COMET_TADPOLE?.arrowInterval ?? .065;
					s.tadpoleArrowTimer >= e && (s.tadpoleArrowTimer = 0, this.spawnBurstParticleArrowSparks(s, I));
				}
				s.age >= r && !s.hasFlurried && (s.hasFlurried = !0, this.spawnBurstParticleFlurry(s, I));
			}
			if (s.hasErraticDart && s.erraticDartTriggered && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01) {
				s.erraticDartTrailTimer = (s.erraticDartTrailTimer || 0) + t;
				let e = (n.ERRATIC_DART || {}).trailInterval ?? .032;
				s.erraticDartTrailTimer >= e && (s.erraticDartTrailTimer = 0, this.spawnErraticDartStreak(s, I));
			}
			let de = s.hasBurstSmoke && !s.isCrossetteBranch && (s.burstSmokeEnd === void 0 ? w <= (s.burstSmokeLimit ?? .33) : s.age >= (s.burstSmokeStart ?? 0) && s.age <= s.burstSmokeEnd);
			if ((_ || de) && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01 && !n.SMOKE?.onlyBurstSmoke) {
				let t = .5;
				t = de ? w < .15 ? .95 : .65 : w < .12 ? 1 : w < .52 ? .85 : .85 * (1 - (w - .52) / .48);
				let r = this.smokeSystem && this.smokeSystem.quality === "high" ? 3 : 5;
				if (s.particleIndex % r === 0 && Math.random() < t) {
					let t = new e.Color(15922681), r = s.preset?.hasCustomColor ? s.baseColor.clone() : t, i = s.velocity.clone().multiplyScalar(.14), a = de ? 1.1 : _ ? 1.4 : 1, o = n.SMOKE, c = y || (o.trailLifeMin + o.trailLifeMax) * .5, u = {
						category: de ? "burst" : "aerial",
						force: de,
						life: c * (.8 + .4 * Math.random()),
						scale: (2.8 + Math.random() * 1.8) * a,
						growth: 2.8,
						drag: 2.5,
						buoyancy: o.trailBuoyancy,
						opacity: (b || .15) * I * (w < .15 ? 1.25 : 1) * a,
						color: r
					};
					this.smokeSystem ? this.smokeSystem.addSmokePoint(s.position, i, u) : l.emit("smoke:spawn", {
						position: s.position.clone(),
						velocity: i,
						options: u
					});
				}
			}
			if ((s.effectType === "sparking" || s.effectType === "sparkling-branch-comet" || s.effectType === "sparkle-trail" || s.effectType === "sparkle-apex") && w > .4 && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01) {
				let t = .46 + s.particleIndex * 7 % 11 * .01;
				if (s.particleIndex % 2 == 0 && w > t) {
					let n = .42 * (1 - (w - t) / (1 - t)) ** 1.8;
					if (Math.random() < n) {
						let t = Math.random(), n;
						n = t < .52 ? new e.Color(16746496).lerp(new e.Color(16766720), Math.random()) : t < .82 ? new e.Color(16777215).lerp(new e.Color(16775885), Math.random()) : new e.Color(4473924);
						let r = new e.Vector3((Math.random() - .5) * 4.5, -3 - Math.random() * 5, (Math.random() - .5) * 4.5), i = Math.floor(s.particleIndex / 12) * 180, a = .3 + Math.random() * .25;
						this.trailSystem.spawnEffectSpark(s.position, n, Math.random() < .85, r, i, a);
					}
				}
			}
			if (s.effectType === "sparking-v2" && s.baseColor.r + s.baseColor.g + s.baseColor.b > .01) {
				let t = .38 * (1 - w) ** 1.8;
				if (Math.random() < t) {
					let t = Math.random(), n;
					n = t < .52 ? new e.Color(16746496).lerp(new e.Color(16766720), Math.random()) : t < .82 ? new e.Color(16777215).lerp(new e.Color(16775885), Math.random()) : new e.Color(4473924);
					let r = new e.Vector3((Math.random() - .5) * 4.5, -3 - Math.random() * 5, (Math.random() - .5) * 4.5), i = Math.floor(s.particleIndex / 12) * 180, a = .3 + Math.random() * .25;
					this.trailSystem.spawnEffectSpark(s.position, n, Math.random() < .85, r, i, a);
				}
			}
			let fe = s.heightProfile ?? {
				sizeMultiplier: 1,
				brightnessMultiplier: 1
			}, H = Math.min(Math.max(.82 + (fe.brightnessMultiplier - 1) * .24, .72), 1.15), pe = H;
			s.isSecondBurstChild && (pe *= .85);
			let me = s.isLongBurn ? O?.longBurnDissolveStart ?? n.BURST?.longBurnDissolveStart ?? .72 : O?.dissolveStart ?? xe, U = O?.attenuationStart ?? n.BURST?.attenuationStart ?? .35;
			if (w > U && w <= me) {
				let e = (w - U) / (me - U);
				pe *= 1 - e * .15;
			} else if (w > me) {
				let t = e.MathUtils.clamp((w - me) / (1 - me), 0, 1), n = O?.dissolveExponent ?? De;
				pe = Math.max((1 - t) ** n * (H * .85), (1 - t) * .08);
			}
			if (s.hasErraticDart && s.erraticDartTriggered) {
				let e = n.ERRATIC_DART?.boostLifeDuration ?? .95, t = (s.maxLife - s.age) / e;
				pe = t > .12 ? Math.max(pe, .98) : Math.max(0, t / .12);
			}
			let he = s.effectType;
			if (Array.isArray(s.effects)) {
				for (let e of s.effects) if (v.effectsRegistry.has(e) && typeof v.effectsRegistry.get(e)?.materialOpacity == "function") {
					he = e;
					break;
				}
			}
			let _e = v.materialOpacity(he, s.age, s.maxLife, pe);
			Y.strobeFreqMultiplier = a, Y.isSpiralIgnited = L, Y.spiralFlashBonus = R, Y.isRingIgnited = z, Y.ringFlashBonus = ne, Y.hasGhostFlare = se, Y.profile = O, v.resolveParticleColor(s, w, Y, je);
			let ve = s.brightnessVariance ?? 1;
			s.color.setRGB(je.r * ve, je.g * ve, je.b * ve);
			let W = (s.preset?.particleSize ?? Oe) * fe.sizeMultiplier, ye = W;
			if (ae) {
				if (ie ? V : w < .4) ye = 0;
				else if (!ie && w < .48) {
					let t = (w - .4) / .08;
					ye = W * e.MathUtils.lerp(0, 1, t);
				}
			} else if (B && !z) ye = 0;
			else {
				let t = 1;
				if (s.hasErraticDart && s.erraticDartTriggered) t = 1;
				else if (w < .12) {
					let n = .035;
					if (w < n) {
						let r = w / n;
						t = e.MathUtils.lerp(.82, 1.25, e.MathUtils.smoothstep(r, 0, 1));
					} else t = 1.25 - (w - n) / .08499999999999999 * .25;
				} else w > U && (t = 1 - (w - U) / (1 - U) * .45);
				let n = 1 + Math.min(.25, (s.frictionHeat || 0) * .2);
				ye = W * t * n;
			}
			let be = s.sizeVariance ?? 1;
			s.renderSize = ye * be, s.renderOpacity = _e, r.push(s);
		}
		if (this.burstParticles = r, i.length > 0) {
			let e = i[0];
			this.emitFireworkEvent("firework:crackle", {
				sound: e.preset?.sound || null,
				position: {
					x: e.position.x,
					y: e.position.y,
					z: e.position.z
				}
			});
			for (let e = 0; e < i.length; e++) {
				let t = i[e], n = {
					shellType: "crysanthemumNestedChild",
					shapeType: "sphere",
					effectType: "standard",
					dynamicsType: "standard",
					effects: [],
					shellSize: .55,
					particleSize: 18,
					starLife: 350,
					particleCountMultiplier: .1,
					isNestedChild: !0,
					crackle: !1,
					strobe: t.strobe
				};
				this.createBurst(t.position, t.color, "sphere", n, t.shellId + "-nested-child-" + e);
			}
		}
		let o = Math.min(this.burstParticles.length, this.maxBurstParticles, this.allocatedMaxBurstParticles), s = .038;
		for (let t = 0; t < o; t++) {
			let n = this.burstParticles[t];
			this.burstPositionsArray[t * 3] = n.position.x, this.burstPositionsArray[t * 3 + 1] = n.position.y, this.burstPositionsArray[t * 3 + 2] = n.position.z, this.burstColorsArray[t * 3] = n.color.r, this.burstColorsArray[t * 3 + 1] = n.color.g, this.burstColorsArray[t * 3 + 2] = n.color.b, this.burstSizesArray[t] = n.renderSize, this.burstOpacitiesArray[t] = n.renderOpacity;
			let r = t * 6, i = r + 3;
			this.burstLinePositionsArray[r] = n.position.x, this.burstLinePositionsArray[r + 1] = n.position.y, this.burstLinePositionsArray[r + 2] = n.position.z;
			let a = n.velocity?.x || 0, o = n.velocity?.y || 0, c = n.velocity?.z || 0, l = a * s, u = o * s, d = c * s, f = l * l + u * u + d * d;
			if (f > 6.25) {
				let e = 2.5 / Math.sqrt(f);
				l *= e, u *= e, d *= e;
			}
			this.burstLinePositionsArray[i] = n.position.x - l, this.burstLinePositionsArray[i + 1] = n.position.y - u, this.burstLinePositionsArray[i + 2] = n.position.z - d;
			let p = n.renderOpacity ?? 1;
			p > .001 && (n.renderSize || 0) > .001 && n.color.r + n.color.g + n.color.b > .001 ? (this.burstLineColorsArray[r] = e.MathUtils.lerp(n.color.r, 1, .65) * p, this.burstLineColorsArray[r + 1] = e.MathUtils.lerp(n.color.g, 1, .65) * p, this.burstLineColorsArray[r + 2] = e.MathUtils.lerp(n.color.b, 1, .65) * p, this.burstLineColorsArray[i] = n.color.r * p * .15, this.burstLineColorsArray[i + 1] = n.color.g * p * .15, this.burstLineColorsArray[i + 2] = n.color.b * p * .15) : (this.burstLineColorsArray[r] = 0, this.burstLineColorsArray[r + 1] = 0, this.burstLineColorsArray[r + 2] = 0, this.burstLineColorsArray[i] = 0, this.burstLineColorsArray[i + 1] = 0, this.burstLineColorsArray[i + 2] = 0);
		}
		o > 0 ? (this.burstPositionsAttr.needsUpdate = !0, this.burstColorsAttr.needsUpdate = !0, this.burstSizesAttr.needsUpdate = !0, this.burstOpacitiesAttr.needsUpdate = !0, this.burstPositionsAttr.updateRange && (this.burstPositionsAttr.updateRange.offset = 0, this.burstPositionsAttr.updateRange.count = o * 3), this.burstColorsAttr.updateRange && (this.burstColorsAttr.updateRange.offset = 0, this.burstColorsAttr.updateRange.count = o * 3), this.burstSizesAttr.updateRange && (this.burstSizesAttr.updateRange.offset = 0, this.burstSizesAttr.updateRange.count = o), this.burstOpacitiesAttr.updateRange && (this.burstOpacitiesAttr.updateRange.offset = 0, this.burstOpacitiesAttr.updateRange.count = o), this.globalBurstGeometry.setDrawRange(0, o), this.burstLinesPositionsAttr.needsUpdate = !0, this.burstLinesColorsAttr.needsUpdate = !0, this.burstLinesPositionsAttr.updateRange && (this.burstLinesPositionsAttr.updateRange.offset = 0, this.burstLinesPositionsAttr.updateRange.count = o * 6), this.burstLinesColorsAttr.updateRange && (this.burstLinesColorsAttr.updateRange.offset = 0, this.burstLinesColorsAttr.updateRange.count = o * 6), this.burstLinesGeometry.setDrawRange(0, o * 2)) : (this.globalBurstGeometry.setDrawRange(0, 0), this.burstLinesGeometry.setDrawRange(0, 0));
	}
	clear() {
		this.activeFireworks = [], this.instancedShellRenderer.update([]), this.burstParticles = [], this.scheduledBursts = [], this.updateBurstParticles(0);
	}
	destroy() {
		this.clear();
		for (let e of this.eventSubscriptions) typeof e == "function" && e();
		this.eventSubscriptions.length = 0, this.burstLines && (this.scene && this.scene.remove(this.burstLines), this.burstLinesGeometry?.dispose(), this.burstLinesMaterial?.dispose());
	}
	burstAll() {
		let e = this.activeFireworks.filter((e) => e.type === "shell" && e.state === ae.STATE.LAUNCHING);
		for (let t of e) t.velocity.y = -1;
	}
	update(e) {
		if (this.autoLaunchEnabled && (this.autoLaunchTimer += e, this.autoLaunchTimer >= this.autoLaunchInterval && (this.launchRandom(), this.autoLaunchTimer = 0)), this.scheduledBursts && this.scheduledBursts.length > 0) for (let t = this.scheduledBursts.length - 1; t >= 0; t--) {
			let n = this.scheduledBursts[t];
			n.timeRemaining -= e, n.timeRemaining <= 0 && (this.createBurst(n.position, n.color, n.shape, n.preset, n.shellId), this.scheduledBursts.splice(t, 1));
		}
		let t = [];
		for (let n of this.activeFireworks) n.type === "shell" && this.handleShellUpdate(n, e, t);
		this.activeFireworks = this.activeFireworks.filter((e) => !t.includes(e));
		let n = this.activeFireworks.filter((e) => e.type === "shell");
		this.instancedShellRenderer.update(n), this.updateBurstParticles(e);
	}
}, Be = n.GRAVITY, Ve = new e.Color(16766720), He = new e.Color(16766842), Ue = new e.Color();
n.SYSTEM.maxTrailParticles;
var We = class {
	constructor(t, r = {}) {
		this.scene = t, this.trailParticles = [], this.eventSubscriptions = [], this.particlePool = [], this.maxPoolSize = 1e5, this.currentTime = 0;
		let i = n.SYSTEM.maxTrailParticles;
		this.allocatedMaxTrailParticles = Math.max(1e5, Math.round(i * 2)), this.maxTrailParticles = i;
		let a = typeof process < "u" && (process.env?.VITEST || process.env.NODE_ENV === "test") || typeof window > "u";
		this.useGpuSimulation = r.useGpuSimulation === void 0 ? !a : !!r.useGpuSimulation, this.gpuCursor = 0, this.gpuParticleCount = 0, this.gpuDirtyMin = -1, this.gpuDirtyMax = -1, this.gpuDirtyWrapped = !1, this.trailGeometry = new e.BufferGeometry(), this.positionsArray = new Float32Array(this.allocatedMaxTrailParticles * 3), this.velocitiesArray = new Float32Array(this.allocatedMaxTrailParticles * 3), this.colorsArray = new Float32Array(this.allocatedMaxTrailParticles * 4), this.baseColorsArray = new Float32Array(this.allocatedMaxTrailParticles * 4), this.paramsArray = new Float32Array(this.allocatedMaxTrailParticles * 4), this.effectParamsArray = new Float32Array(this.allocatedMaxTrailParticles * 4), this.paramsArray.fill(-999999), this.positionsAttr = new e.BufferAttribute(this.positionsArray, 3), this.positionsAttr.setUsage(e.DynamicDrawUsage), this.trailGeometry.setAttribute("position", this.positionsAttr), this.velocitiesAttr = new e.BufferAttribute(this.velocitiesArray, 3), this.velocitiesAttr.setUsage(e.DynamicDrawUsage), this.trailGeometry.setAttribute("aVelocity", this.velocitiesAttr), this.colorsAttr = new e.BufferAttribute(this.colorsArray, 4), this.colorsAttr.setUsage(e.DynamicDrawUsage), this.trailGeometry.setAttribute("color", this.colorsAttr), this.baseColorsAttr = new e.BufferAttribute(this.baseColorsArray, 4), this.baseColorsAttr.setUsage(e.DynamicDrawUsage), this.trailGeometry.setAttribute("aBaseColor", this.baseColorsAttr), this.paramsAttr = new e.BufferAttribute(this.paramsArray, 4), this.paramsAttr.setUsage(e.DynamicDrawUsage), this.trailGeometry.setAttribute("aParams", this.paramsAttr), this.effectParamsAttr = new e.BufferAttribute(this.effectParamsArray, 4), this.effectParamsAttr.setUsage(e.DynamicDrawUsage), this.trailGeometry.setAttribute("aEffectParams", this.effectParamsAttr), this.trailUniforms = {
			uEdgeSoftness: { value: s.post?.particleEdgeSoftness ?? .75 },
			uTime: { value: 0 },
			uGravity: { value: Be },
			uGpuSim: { value: +!!this.useGpuSimulation }
		}, this.trailMaterial = new e.PointsMaterial({
			size: 8,
			color: 16777215,
			vertexColors: !0,
			transparent: !0,
			opacity: .95,
			depthWrite: !1,
			blending: e.AdditiveBlending
		}), this.trailMaterial.onBeforeCompile = (e) => {
			e.uniforms.uEdgeSoftness = this.trailUniforms.uEdgeSoftness, e.uniforms.uTime = this.trailUniforms.uTime, e.uniforms.uGravity = this.trailUniforms.uGravity, e.uniforms.uGpuSim = this.trailUniforms.uGpuSim, this.trailShader = e, e.vertexShader &&= "\n          attribute vec3 aVelocity;\n          attribute vec4 aBaseColor;\n          attribute vec4 aParams;\n          attribute vec4 aEffectParams;\n          uniform float uTime;\n          uniform float uGravity;\n          uniform float uGpuSim;\n          varying vec4 vGpuTrailColor;\n          varying float vGpuIsDead;\n        " + e.vertexShader.replace("#include <begin_vertex>", "\n          #include <begin_vertex>\n          vGpuIsDead = 0.0;\n          if (uGpuSim > 0.5) {\n            float birthTime = aParams.x;\n            float life = aParams.y;\n            float age = uTime - birthTime;\n\n            if (age < 0.0 || age >= life) {\n              transformed = vec3(0.0, -99999.0, 0.0);\n              vGpuTrailColor = vec4(0.0);\n              vGpuIsDead = 1.0;\n            } else {\n              float gravityScale = aParams.z;\n              float dragScale = aParams.w;\n              float k = max(0.001, 4.0 * dragScale);\n              float gEff = 0.5 * uGravity * gravityScale;\n              float dragFactor = (1.0 - exp(-k * age)) / k;\n\n              vec3 calculatedPos = position + aVelocity * dragFactor;\n              calculatedPos.y += (gEff / k) * (age - dragFactor);\n\n              if (calculatedPos.y <= 0.0) {\n                transformed = vec3(0.0, -99999.0, 0.0);\n                vGpuTrailColor = vec4(0.0);\n                vGpuIsDead = 1.0;\n              } else {\n                transformed = calculatedPos;\n\n                float lifeRatio = clamp(age / life, 0.0, 1.0);\n                float invR = max(0.0, 1.0 - lifeRatio);\n                float mode = aEffectParams.x;\n\n                float decay = (mode == 3.0)\n                  ? pow(invR, 1.6)\n                  : (invR * invR * sqrt(invR));\n                float alphaBase = (mode == 3.0) ? 1.0 : 0.75;\n                float alpha = decay * aBaseColor.a * alphaBase;\n                vec3 c = aBaseColor.rgb;\n\n                if (mode == 0.0) {\n                  if (lifeRatio < 0.15) {\n                    float flashT = (1.0 - lifeRatio / 0.15) * 0.35;\n                    c.r += (max(c.r, 1.05) - c.r) * flashT;\n                    c.g += (max(c.g, 1.02) - c.g) * (flashT * 0.857);\n                    c.b += (max(c.b, 1.0) - c.b) * (flashT * 0.714);\n                  } else if (lifeRatio > 0.65) {\n                    float coolT = (lifeRatio - 0.65) / 0.35;\n                    c.r += (0.95 - c.r) * (coolT * 0.5);\n                    c.g += (0.38 - c.g) * (coolT * 0.6);\n                    c.b += (0.05 - c.b) * (coolT * 0.8);\n                  }\n                } else if (mode == 1.0) {\n                  float timeMs = uTime * 1000.0 + aEffectParams.y;\n                  float freq = max(1.0, aEffectParams.z);\n                  float duty = aEffectParams.w;\n                  float cycle = mod(timeMs, freq);\n                  if (cycle >= freq * duty) {\n                    alpha = 0.0;\n                  } else {\n                    c = vec3(1.0);\n                  }\n                } else if (mode == 2.0) {\n                  float timeMs = uTime * 1000.0 + aEffectParams.y;\n                  float speed = aEffectParams.z > 0.0 ? aEffectParams.z : 0.05;\n                  float sVal = 0.2 + 0.8 * abs(sin(timeMs * speed));\n                  alpha *= sVal;\n                  float blendFactor = 0.5 + 0.5 * sin(timeMs * speed);\n                  c = mix(c, vec3(1.0), blendFactor);\n                }\n\n                vGpuTrailColor = vec4(c, alpha);\n              }\n            }\n          } else {\n            vGpuTrailColor = vec4(1.0);\n          }\n          ").replace("gl_PointSize = size;", "\n          if (uGpuSim > 0.5 && vGpuIsDead > 0.5) {\n            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);\n            gl_PointSize = 0.0;\n          } else {\n            gl_PointSize = size;\n          }\n          "), e.fragmentShader &&= "\n          uniform float uEdgeSoftness;\n          uniform float uGpuSim;\n          varying vec4 vGpuTrailColor;\n        " + e.fragmentShader.replace("#include <color_fragment>", "\n          #include <color_fragment>\n          \n          vec2 coord = gl_PointCoord - vec2(0.5);\n          float dist = length(coord) * 2.0;\n          if (dist > uEdgeSoftness) discard;\n\n          vec3 baseRgb = (uGpuSim > 0.5) ? vGpuTrailColor.rgb : diffuseColor.rgb;\n          float baseAlpha = (uGpuSim > 0.5) ? vGpuTrailColor.a : diffuseColor.a;\n          if (baseAlpha <= 0.001) discard;\n\n          vec4 stop0 = vec4(1.0, 1.0, 1.0, 1.0);\n          vec4 stop1 = vec4(baseRgb, 0.3);\n          vec4 stop2 = vec4(baseRgb, 0.13);\n          vec4 stop3 = vec4(baseRgb, 0.0);\n          \n          float outerStart = min(0.32, uEdgeSoftness * 0.45);\n          vec4 gradientColor;\n          if (dist < 0.024) {\n              gradientColor = stop0;\n          } else if (dist < min(0.125, outerStart)) {\n              float t = (dist - 0.024) / max(0.001, min(0.125, outerStart) - 0.024);\n              gradientColor = mix(stop0, stop1, t);\n          } else if (dist < outerStart) {\n              float t = (dist - min(0.125, outerStart)) / max(0.001, outerStart - min(0.125, outerStart));\n              gradientColor = mix(stop1, stop2, t);\n          } else {\n              float t = (dist - outerStart) / max(0.001, uEdgeSoftness - outerStart);\n              gradientColor = mix(stop2, stop3, t);\n          }\n          \n          diffuseColor = vec4(gradientColor.rgb, gradientColor.a * baseAlpha);\n          ");
		}, this.trailPoints = new e.Points(this.trailGeometry, this.trailMaterial), this.trailPoints.frustumCulled = !1, this.trailPoints.layers.enable(1), this.scene.add(this.trailPoints), this.eventSubscriptions.push(l.on("firework:clear", () => this.clear()));
		let o = typeof localStorage < "u" && localStorage?.getItem && localStorage.getItem("graphics_quality") || "medium";
		this.setGraphicsQuality(o), this.eventSubscriptions.push(l.on("graphics:quality", (e) => this.setGraphicsQuality(e)));
	}
	setGpuSimulation(e) {
		this.useGpuSimulation = !!e, this.trailUniforms?.uGpuSim && (this.trailUniforms.uGpuSim.value = +!!this.useGpuSimulation), this.clear();
	}
	isGpuSimulationEnabled() {
		return this.useGpuSimulation;
	}
	markGpuIndexDirty(e) {
		this.gpuDirtyMin === -1 ? (this.gpuDirtyMin = e, this.gpuDirtyMax = e) : (e < this.gpuDirtyMin && (this.gpuDirtyMin = e), e > this.gpuDirtyMax && (this.gpuDirtyMax = e));
	}
	setParticleEdgeSoftness(e) {
		this.trailUniforms && this.trailUniforms.uEdgeSoftness && (this.trailUniforms.uEdgeSoftness.value = e);
	}
	getParticleEdgeSoftness() {
		return this.trailUniforms?.uEdgeSoftness?.value ?? s.post?.particleEdgeSoftness ?? .75;
	}
	setGraphicsQuality(e) {
		let t = n.SYSTEM.maxTrailParticles;
		e === "low" ? this.maxTrailParticles = Math.round(t * .4) : e === "medium" ? this.maxTrailParticles = t : e === "high" && (this.maxTrailParticles = Math.round(t * 1.6));
	}
	destroy() {
		for (let e of this.eventSubscriptions) e();
	}
	spawnTrailParticle(t, n, r = 1, i = !1, a = null, o = .65, s = !1, c = null, l = 1, u = 1, d = !1, f = null, p = !1) {
		p ? Ue.copy(n) : Math.random() < .75 ? Ue.copy(n).offsetHSL((Math.random() - .5) * .04, (Math.random() - .5) * .08, (Math.random() - .5) * .12) : Ue.copy(Ve);
		let m = c ? c.x : i ? 0 : (Math.random() - .5) * 5, h = c ? c.y : i ? 0 : (Math.random() - .5) * 5, g = c ? c.z : i ? 0 : (Math.random() - .5) * 5, _ = a === null ? (2 + Math.random() * 3) * r : a;
		if (this.useGpuSimulation) {
			let e = this.gpuCursor, n = e * 3, r = e * 4;
			this.positionsArray[n] = t.x, this.positionsArray[n + 1] = t.y, this.positionsArray[n + 2] = t.z, this.velocitiesArray[n] = m, this.velocitiesArray[n + 1] = h, this.velocitiesArray[n + 2] = g, this.baseColorsArray[r] = Ue.r, this.baseColorsArray[r + 1] = Ue.g, this.baseColorsArray[r + 2] = Ue.b, this.baseColorsArray[r + 3] = o, this.paramsArray[r] = this.currentTime, this.paramsArray[r + 1] = _, this.paramsArray[r + 2] = l, this.paramsArray[r + 3] = u;
			let i = s ? 1 : d ? 2 : p ? 3 : 0, a = f === null ? Math.random() * 1e3 : f, c = 90 + Math.random() * 90, v = .25 + Math.random() * .2, y = .03 + Math.random() * .04;
			this.effectParamsArray[r] = i, this.effectParamsArray[r + 1] = a, this.effectParamsArray[r + 2] = s ? c : d ? y : 0, this.effectParamsArray[r + 3] = s ? v : 0, this.markGpuIndexDirty(e);
			let b = (this.gpuCursor + 1) % this.maxTrailParticles;
			b < this.gpuCursor && (this.gpuDirtyWrapped = !0), this.gpuCursor = b, this.gpuParticleCount < this.maxTrailParticles && this.gpuParticleCount++;
			return;
		}
		if (this.trailParticles.length >= this.maxTrailParticles) return;
		let v;
		this.particlePool.length > 0 ? (v = this.particlePool.pop(), v.position.set(t.x, t.y, t.z), v.velocity.set(m, h, g), v.color.copy(Ue), v.life = _, v.age = 0, v.opacity = o, v.strobe = s, v.shimmer = d, v.exactColor = p, v.phase = f === null ? Math.random() * 1e3 : f, v.strobeFreq = 90 + Math.random() * 90, v.dutyRatio = .25 + Math.random() * .2, v.shimmerSpeed = .03 + Math.random() * .04, v.gravityScale = l, v.dragScale = u) : v = {
			position: new e.Vector3(t.x, t.y, t.z),
			velocity: new e.Vector3(m, h, g),
			color: Ue.clone(),
			life: _,
			age: 0,
			opacity: o,
			strobe: s,
			shimmer: d,
			exactColor: p,
			phase: f === null ? Math.random() * 1e3 : f,
			strobeFreq: 90 + Math.random() * 90,
			dutyRatio: .25 + Math.random() * .2,
			shimmerSpeed: .03 + Math.random() * .04,
			gravityScale: l,
			dragScale: u
		}, this.trailParticles.push(v);
	}
	spawnEffectSpark(t, n, r = !1, i = null, a = null, o = null, s = !1) {
		let c = i ? i.x : (Math.random() - .5) * 6, l = i ? i.y : Math.random() * 5, u = i ? i.z : (Math.random() - .5) * 6, d = o === null ? 1.5 + Math.random() * 1.2 : o;
		if (this.useGpuSimulation) {
			let e = this.gpuCursor, i = e * 3, o = e * 4;
			this.positionsArray[i] = t.x, this.positionsArray[i + 1] = t.y, this.positionsArray[i + 2] = t.z, this.velocitiesArray[i] = c, this.velocitiesArray[i + 1] = l, this.velocitiesArray[i + 2] = u, this.baseColorsArray[o] = n.r, this.baseColorsArray[o + 1] = n.g, this.baseColorsArray[o + 2] = n.b, this.baseColorsArray[o + 3] = .65, this.paramsArray[o] = this.currentTime, this.paramsArray[o + 1] = d, this.paramsArray[o + 2] = 1, this.paramsArray[o + 3] = 1;
			let f = r ? 1 : s ? 2 : 0, p = a === null ? Math.random() * 1e3 : a, m = 90 + Math.random() * 90, h = .25 + Math.random() * .2, g = .03 + Math.random() * .04;
			this.effectParamsArray[o] = f, this.effectParamsArray[o + 1] = p, this.effectParamsArray[o + 2] = r ? m : s ? g : 0, this.effectParamsArray[o + 3] = r ? h : 0, this.markGpuIndexDirty(e);
			let _ = (this.gpuCursor + 1) % this.maxTrailParticles;
			_ < this.gpuCursor && (this.gpuDirtyWrapped = !0), this.gpuCursor = _, this.gpuParticleCount < this.maxTrailParticles && this.gpuParticleCount++;
			return;
		}
		if (this.trailParticles.length >= this.maxTrailParticles) return;
		let f;
		this.particlePool.length > 0 ? (f = this.particlePool.pop(), f.position.set(t.x, t.y, t.z), f.velocity.set(c, l, u), f.color.copy(n), f.life = d, f.age = 0, f.opacity = .65, f.strobe = r, f.shimmer = s, f.exactColor = !1, f.phase = a === null ? Math.random() * 1e3 : a, f.strobeFreq = 90 + Math.random() * 90, f.dutyRatio = .25 + Math.random() * .2, f.shimmerSpeed = .03 + Math.random() * .04, f.gravityScale = 1, f.dragScale = 1) : f = {
			position: new e.Vector3(t.x, t.y, t.z),
			velocity: new e.Vector3(c, l, u),
			color: n.clone(),
			life: d,
			age: 0,
			opacity: .65,
			strobe: r,
			shimmer: s,
			exactColor: !1,
			phase: a === null ? Math.random() * 1e3 : a,
			strobeFreq: 90 + Math.random() * 90,
			dutyRatio: .25 + Math.random() * .2,
			shimmerSpeed: .03 + Math.random() * .04,
			gravityScale: 1,
			dragScale: 1
		}, this.trailParticles.push(f);
	}
	spawnMicroCrackle(t, n) {
		let r = 12 + Math.floor(Math.random() * 4), i = n || He;
		for (let n = 0; n < r; n++) {
			let n = Math.random(), r = Math.random(), a = n * 2 * Math.PI, o = Math.acos(2 * r - 1), s = Math.sin(o), c = (.5 + Math.random() * .5) * 14, l = s * Math.cos(a) * c, u = s * Math.sin(a) * c, d = Math.cos(o) * c, f = .8 + Math.random() * .4;
			if (this.useGpuSimulation) {
				let e = this.gpuCursor, n = e * 3, r = e * 4;
				this.positionsArray[n] = t.x, this.positionsArray[n + 1] = t.y, this.positionsArray[n + 2] = t.z, this.velocitiesArray[n] = l, this.velocitiesArray[n + 1] = u, this.velocitiesArray[n + 2] = d, this.baseColorsArray[r] = i.r, this.baseColorsArray[r + 1] = i.g, this.baseColorsArray[r + 2] = i.b, this.baseColorsArray[r + 3] = .75, this.paramsArray[r] = this.currentTime, this.paramsArray[r + 1] = f, this.paramsArray[r + 2] = 1, this.paramsArray[r + 3] = 1, this.effectParamsArray[r] = 0, this.effectParamsArray[r + 1] = 0, this.effectParamsArray[r + 2] = 0, this.effectParamsArray[r + 3] = 0, this.markGpuIndexDirty(e);
				let a = (this.gpuCursor + 1) % this.maxTrailParticles;
				a < this.gpuCursor && (this.gpuDirtyWrapped = !0), this.gpuCursor = a, this.gpuParticleCount < this.maxTrailParticles && this.gpuParticleCount++;
			} else {
				if (this.trailParticles.length >= this.maxTrailParticles) break;
				this.trailParticles.push({
					position: new e.Vector3(t.x, t.y, t.z),
					velocity: new e.Vector3(l, u, d),
					color: i.clone(),
					life: f,
					age: 0
				});
			}
		}
	}
	update(e) {
		if (this.currentTime += e, this.useGpuSimulation) {
			if (this.trailUniforms?.uTime && (this.trailUniforms.uTime.value = this.currentTime), this.gpuDirtyMin !== -1) {
				let e = this.gpuDirtyWrapped ? 0 : this.gpuDirtyMin, t = this.gpuDirtyWrapped ? this.maxTrailParticles : this.gpuDirtyMax - this.gpuDirtyMin + 1;
				this.positionsAttr.needsUpdate = !0, this.velocitiesAttr.needsUpdate = !0, this.baseColorsAttr.needsUpdate = !0, this.paramsAttr.needsUpdate = !0, this.effectParamsAttr.needsUpdate = !0, this.positionsAttr.updateRange && (this.positionsAttr.updateRange.offset = e * 3, this.positionsAttr.updateRange.count = t * 3), this.velocitiesAttr.updateRange && (this.velocitiesAttr.updateRange.offset = e * 3, this.velocitiesAttr.updateRange.count = t * 3), this.baseColorsAttr.updateRange && (this.baseColorsAttr.updateRange.offset = e * 4, this.baseColorsAttr.updateRange.count = t * 4), this.paramsAttr.updateRange && (this.paramsAttr.updateRange.offset = e * 4, this.paramsAttr.updateRange.count = t * 4), this.effectParamsAttr.updateRange && (this.effectParamsAttr.updateRange.offset = e * 4, this.effectParamsAttr.updateRange.count = t * 4), this.gpuDirtyMin = -1, this.gpuDirtyMax = -1, this.gpuDirtyWrapped = !1;
			}
			this.trailGeometry.setDrawRange(0, this.gpuParticleCount);
			return;
		}
		let t = 0, n = performance.now(), r = e, i = Be * r * .5;
		for (let e = 0; e < this.trailParticles.length; e++) {
			let a = this.trailParticles[e], o = 1 - 4 * r * (a.dragScale ?? 1), s = a.velocity.x * o, c = a.velocity.y * o + i * (a.gravityScale ?? 1), l = a.velocity.z * o;
			if (a.velocity.x = s, a.velocity.y = c, a.velocity.z = l, a.position.x += s * r, a.position.y += c * r, a.position.z += l * r, a.age += r, a.position.y <= 0) this.particlePool.length < this.maxPoolSize && this.particlePool.push(a);
			else if (a.age < a.life) {
				if (t < this.maxTrailParticles) {
					let r = a.age / a.life, i = Math.max(0, 1 - r), o = a.exactColor ? 1 : .75, s = (a.exactColor ? i ** 1.6 : i * i * Math.sqrt(i)) * (a.opacity ?? .65) * o, c = a.color.r, l = a.color.g, u = a.color.b;
					if (!a.strobe && !a.shimmer && !a.exactColor) {
						if (r < .15) {
							let e = (1 - r / .15) * .35;
							c += (Math.max(c, 1.05) - c) * e, l += (Math.max(l, 1.02) - l) * (e * .857), u += (Math.max(u, 1) - u) * (e * .714);
						} else if (r > .65) {
							let e = (r - .65) / .35;
							c += (.95 - c) * (e * .5), l += (.38 - l) * (e * .6), u += (.05 - u) * (e * .8);
						}
					}
					if (a.strobe) {
						let e = n + (a.phase ?? 0), t = a.strobeFreq ?? 120;
						e % t < t * (a.dutyRatio ?? .35) ? (c = 1, l = 1, u = 1) : s = 0;
					} else if (a.shimmer) {
						let e = n + (a.phase ?? 0), t = a.shimmerSpeed ?? .05, r = .2 + .8 * Math.abs(Math.sin(e * t));
						s *= r;
						let i = .5 + .5 * Math.sin(e * t);
						c += (1 - c) * i, l += (1 - l) * i, u += (1 - u) * i;
					}
					let d = t * 3;
					this.positionsArray[d] = a.position.x, this.positionsArray[d + 1] = a.position.y, this.positionsArray[d + 2] = a.position.z;
					let f = t * 4;
					this.colorsArray[f] = c, this.colorsArray[f + 1] = l, this.colorsArray[f + 2] = u, this.colorsArray[f + 3] = s, e !== t && (this.trailParticles[t] = a), t++;
				}
			} else this.particlePool.length < this.maxPoolSize && this.particlePool.push(a);
		}
		this.trailParticles.length = t, t > 0 ? (this.positionsAttr.needsUpdate = !0, this.colorsAttr.needsUpdate = !0, this.positionsAttr.updateRange && (this.positionsAttr.updateRange.offset = 0, this.positionsAttr.updateRange.count = t * 3), this.colorsAttr.updateRange && (this.colorsAttr.updateRange.offset = 0, this.colorsAttr.updateRange.count = t * 4), this.trailGeometry.setDrawRange(0, t)) : this.trailGeometry.setDrawRange(0, 0);
	}
	clear() {
		if (this.gpuCursor = 0, this.gpuParticleCount = 0, this.gpuDirtyMin = -1, this.gpuDirtyMax = -1, this.gpuDirtyWrapped = !1, this.paramsArray && (this.paramsArray.fill(-999999), this.paramsAttr && (this.paramsAttr.needsUpdate = !0, this.paramsAttr.updateRange && (this.paramsAttr.updateRange.offset = 0, this.paramsAttr.updateRange.count = this.allocatedMaxTrailParticles * 4))), this.particlePool && this.trailParticles.length > 0) for (let e = 0; e < this.trailParticles.length; e++) this.particlePool.length < this.maxPoolSize && this.particlePool.push(this.trailParticles[e]);
		if (this.trailParticles = [], this.trailGeometry) {
			this.trailGeometry.setDrawRange(0, 0);
			let e = this.trailGeometry.getAttribute("position");
			e && (e.needsUpdate = !0);
		}
	}
}, Ge = new e.Color(), Ke = new e.Color(), Q = new e.Object3D(), qe = new e.Vector3(), Je = new e.Color(0, 0, 0), Ye = class {
	constructor(t, n = 1200) {
		this.scene = t, this.maxComets = n, this.isAttached = !1;
		let r = Math.random;
		Math.random = () => .5;
		try {
			let t = new e.SphereGeometry(1, 8, 8), n = new e.MeshBasicMaterial({
				color: 16777215,
				transparent: !0,
				opacity: 1,
				depthWrite: !1,
				blending: e.AdditiveBlending,
				toneMapped: !1
			});
			this.coreMesh = new e.InstancedMesh(t, n, this.maxComets), this.coreMesh.frustumCulled = !1, this.coreMesh.instanceMatrix.setUsage(e.DynamicDrawUsage), this.coreMesh.instanceColor = new e.InstancedBufferAttribute(new Float32Array(this.maxComets * 3), 3), this.coreMesh.instanceColor.setUsage(e.DynamicDrawUsage), this.coreMesh.layers && typeof this.coreMesh.layers.enable == "function" && this.coreMesh.layers.enable(1);
			let r = new e.SphereGeometry(1, 8, 8), i = new e.MeshBasicMaterial({
				color: 16777215,
				transparent: !0,
				opacity: 1,
				depthWrite: !1,
				blending: e.AdditiveBlending,
				toneMapped: !1
			});
			this.innerMesh = new e.InstancedMesh(r, i, this.maxComets), this.innerMesh.frustumCulled = !1, this.innerMesh.instanceMatrix.setUsage(e.DynamicDrawUsage), this.innerMesh.instanceColor = new e.InstancedBufferAttribute(new Float32Array(this.maxComets * 3), 3), this.innerMesh.instanceColor.setUsage(e.DynamicDrawUsage), this.innerMesh.layers && typeof this.innerMesh.layers.enable == "function" && this.innerMesh.layers.enable(1), Q.position.set(0, -9999, 0), Q.scale.set(0, 0, 0), Q.updateMatrix();
			for (let e = 0; e < this.maxComets; e++) this.coreMesh.setMatrixAt(e, Q.matrix), this.coreMesh.setColorAt(e, Je), this.innerMesh.setMatrixAt(e, Q.matrix), this.innerMesh.setColorAt(e, Je);
			this.coreMesh.instanceMatrix.needsUpdate = !0, this.coreMesh.instanceColor && (this.coreMesh.instanceColor.needsUpdate = !0), this.innerMesh.instanceMatrix.needsUpdate = !0, this.innerMesh.instanceColor && (this.innerMesh.instanceColor.needsUpdate = !0), this.coreMesh.count = 0, this.innerMesh.count = 0;
		} finally {
			Math.random = r;
		}
	}
	update(e) {
		let t = 0, n = Array.isArray(e) ? e.length : 0;
		for (let r = 0; r < n && t < this.maxComets; r++) {
			let n = e[r];
			if (!n || n.state === "dead" || !n.coreMesh || n.coreMesh.isPoints) continue;
			let i = n.coreMesh.visible !== !1, a = n.coreMesh.material?.opacity ?? 1;
			if (!i || a <= .001) continue;
			Q.position.copy(n.mesh.position), Q.quaternion.copy(n.mesh.quaternion);
			let o = n.coreMesh.geometry?.parameters?.radius || 1;
			qe.set(o * n.coreMesh.scale.x * n.mesh.scale.x, o * n.coreMesh.scale.y * n.mesh.scale.y, o * n.coreMesh.scale.z * n.mesh.scale.z), Q.scale.copy(qe), Q.updateMatrix(), this.coreMesh.setMatrixAt(t, Q.matrix);
			let s = n.coreMesh.material?.color || n.coreColor;
			if (Ge.copy(s).multiplyScalar(a), this.coreMesh.setColorAt(t, Ge), n.innerMesh && n.innerMesh.visible !== !1) {
				let e = n.innerMesh.material?.opacity ?? 1, r = n.innerMesh.geometry?.parameters?.radius || 1;
				qe.set(r * n.innerMesh.scale.x * n.mesh.scale.x, r * n.innerMesh.scale.y * n.mesh.scale.y, r * n.innerMesh.scale.z * n.mesh.scale.z), Q.scale.copy(qe), Q.updateMatrix(), this.innerMesh.setMatrixAt(t, Q.matrix);
				let i = n.innerMesh.material?.color || Je;
				Ke.copy(i).multiplyScalar(e), this.innerMesh.setColorAt(t, Ke);
			} else Q.scale.set(0, 0, 0), Q.updateMatrix(), this.innerMesh.setMatrixAt(t, Q.matrix), this.innerMesh.setColorAt(t, Je);
			t++;
		}
		this.coreMesh.count = t, this.innerMesh.count = t, t > 0 ? (!this.isAttached && this.scene && typeof this.scene.add == "function" && (this.scene.add(this.coreMesh), this.scene.add(this.innerMesh), this.isAttached = !0), this.coreMesh.instanceMatrix.needsUpdate = !0, this.coreMesh.instanceColor && (this.coreMesh.instanceColor.needsUpdate = !0), this.innerMesh.instanceMatrix.needsUpdate = !0, this.innerMesh.instanceColor && (this.innerMesh.instanceColor.needsUpdate = !0), this.coreMesh.visible = !0, this.innerMesh.visible = !0) : (this.isAttached && this.scene && typeof this.scene.remove == "function" && (this.scene.remove(this.coreMesh), this.scene.remove(this.innerMesh), this.isAttached = !1), this.coreMesh.visible = !1, this.innerMesh.visible = !1);
	}
	destroy() {
		this.isAttached && this.scene && typeof this.scene.remove == "function" && (this.scene.remove(this.coreMesh), this.scene.remove(this.innerMesh), this.isAttached = !1), this.coreMesh.geometry && this.coreMesh.geometry.dispose(), this.coreMesh.material && this.coreMesh.material.dispose(), this.innerMesh.geometry && this.innerMesh.geometry.dispose(), this.innerMesh.material && this.innerMesh.material.dispose();
	}
}, Xe = [
	16766720,
	16729344,
	49151,
	16738740,
	8388564,
	9055202,
	16777215
], Ze = [
	[
		16719424,
		16742144,
		16765440,
		1096065,
		440020,
		9133302,
		16777215
	],
	[
		14222377,
		16347926,
		16498468,
		16777215
	],
	[
		1981066,
		165063,
		440020,
		3462041,
		16777215
	],
	[
		16007006,
		9133302,
		440020,
		16777215
	]
], Qe = new e.Color(), $e = new e.Color(), et = new e.Color(16769154), tt = new e.Color(16777215), nt = new e.Color(7831696), rt = new e.Color(14542318);
function it(e, t) {
	let n = Math.max(0, Math.min(1, t)), r = e.length - 1, i = n * r, a = Math.min(Math.floor(i), r - 1), o = i - a;
	return Qe.setHex(e[a]), $e.setHex(e[a + 1]), Qe.clone().lerp($e, o);
}
var at = new e.Vector3(), ot = new e.Vector3(), st = new e.Vector3(), ct = new e.Vector3(), lt = new e.Vector3(), ut = new e.Vector3(), dt = new e.Vector3(), ft = new e.Vector3(), pt = new e.Vector3(), mt = new e.Vector3(), ht = new e.Color(), gt = new e.Color(15922680), _t = new e.Color(), vt = new e.Color(6710886), yt = new e.Color(10057472), bt = class {
	constructor(e, t, n = null) {
		this.scene = e, this.trailSystem = t, this.smokeSystem = n, this.activeComets = [], this.pendingDetachedLaunches = [], this.simulationTime = 0, this.launchZone = o, this.shellPresetFactory = new I(), this.instancedCometRenderer = new Ye(this.scene), this.eventSubscriptions = [], this.graphicsQualityMultiplier = 1, this.setGraphicsQuality(typeof localStorage < "u" && localStorage?.getItem && localStorage.getItem("graphics_quality") || "medium"), this.eventSubscriptions.push(l.on("graphics:quality", (e) => this.setGraphicsQuality(e)), l.on("firework:clear", () => this.clear()), l.on("comet:spawn", (e) => this.spawnComet(e)));
	}
	setGraphicsQuality(e) {
		this.graphicsQuality = e, e === "low" ? this.graphicsQualityMultiplier = .6 : e === "medium" ? this.graphicsQualityMultiplier = 1 : e === "high" && (this.graphicsQualityMultiplier = 1.25);
	}
	destroy() {
		this.clear();
		for (let e of this.eventSubscriptions) typeof e == "function" && e();
		this.eventSubscriptions.length = 0, this.instancedCometRenderer && this.instancedCometRenderer.destroy();
	}
	emitFireworkEvent(e, t) {
		l.emit(e, t);
	}
	spawnComet({ position: t, velocity: n, color: r, preset: i = null, spiral: a = null, lifetime: o = null }) {
		if (!t || !n) return null;
		let s = r instanceof e.Color ? r.clone() : new e.Color(r ?? 16777215), c = new U({
			position: t.clone(),
			velocity: n.clone(),
			color: s,
			preset: i,
			spiral: a,
			lifetime: o
		});
		return c.mesh.traverse((e) => {
			e.layers.enable(1);
		}), c.coreMesh?.isPoints && this.scene.add(c.mesh), this.activeComets.push(c), c;
	}
	launchRandom(t = null, n = {}) {
		let { ratioX: r, ratioY: i, ratioZ: a, sectorId: o, angleOffset: s, color: c, effectOverrides: l, spiral: u } = n, d = t;
		typeof t == "string" ? d = this.shellPresetFactory.createPresetByKey(t) : t === null && (d = this.shellPresetFactory.createPresetByKey("comet_cluster"));
		let f = d;
		l && typeof l == "object" && (f = {
			...d || {},
			...l
		});
		let p = u || l?.spiral || f?.spiral || null, m = f?.clusterCount ?? 1, h = m > 1 ? Math.max(2, Math.round(m * this.graphicsQualityMultiplier)) : 1, g = this.resolveLaunchPosition(r, a, o), _ = c ? new e.Color(c) : new e.Color(Xe[Math.floor(Math.random() * Xe.length)]);
		if (f?.shellType === "comet_cluster_cc" && this.preset?.secondColor) {
			let e = _.getHex();
			f.secondColor = {
				16777215: 16729344,
				16766720: 49151,
				16729344: 8388564,
				49151: 16738740,
				16738740: 8388564,
				8388564: 9055202,
				9055202: 16766720
			}[e] || 16777215;
		}
		let v = !!(f?.strobe || Array.isArray(f?.effects) && (f.effects.includes("strobe") || f.effects.includes("white-strobe") || f.effects.includes("glitter-strobe"))), y = v ? Math.max(1, Math.min(3, Math.round(h * .3))) : 0, b = !!f?.isCascade || f?.shellType === "comet_cluster_cascade", x = b && !c ? Ze[Math.floor(Math.random() * Ze.length)] : null, S = !b && h > 1 && !!(f?.shellType === "comet_cluster_detached" || f?.detachedTrail || ["detached", "detached-trail"].includes(f?.cometTrail)), C = S ? this.resolveBurstHeight(f, i) : null, w = S ? this.resolveLaunchVelocity(C, s || 0) : null, T = [], E = null;
		if (S) {
			let t = w.clone().normalize(), n = Math.abs(t.y) > .9 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), r = new e.Vector3().crossVectors(t, n).normalize(), i = new e.Vector3().crossVectors(t, r).normalize(), a = (e) => {
				for (let t = e.length - 1; t > 0; t--) {
					let n = Math.floor(Math.random() * (t + 1));
					[e[t], e[n]] = [e[n], e[t]];
				}
				return e;
			}, o = w.length(), s = a(Array.from({ length: h }, (e, t) => {
				let n = (t + Math.random()) / h, r = .22 + .94 * (.35 * n + .65 * n ** .9), i = (Math.random() - .5) * .04;
				return Math.max(.2, r + i);
			})), c = a(Array.from({ length: h }, (e, t) => 5 * Math.sqrt((t + Math.random()) / h))), l = a(Array.from({ length: h }, (e, t) => Math.PI * 2 * (t + Math.random()) / h));
			for (let e = 0; e < h; e++) {
				let t = l[e], n = s[e], a = Math.min(5, Math.max(1.5, n * o * Math.tan(.14))), u = .85 + Math.random() * .3, d = Math.min(c[e] * u, a), f = r.clone().multiplyScalar(Math.cos(t)).addScaledVector(i, Math.sin(t)).multiplyScalar(d);
				T.push(w.clone().multiplyScalar(s[e]).add(f));
			}
			let u = T.map((e, t) => ({
				vy: e.y,
				index: t
			})).sort((e, t) => e.vy - t.vy);
			E = Array(h);
			for (let e = 0; e < u.length; e++) E[u[e].index] = h > 1 ? e / (h - 1) : 0;
		}
		for (let e = 0; e < h; e++) {
			let n, r, a;
			if (b) {
				let o = h > 1 ? e / (h - 1) : .5, l = Math.min(1, Math.max(0, o + (Math.random() - .5) * (.8 / h))), u = .3 + l * 1;
				n = this.resolveBurstHeight(t, i) * u, r = this.resolveLaunchVelocity(n, s || 0);
				let d = (1.2 + l * 6.8) * Math.sqrt(Math.random()), p = Math.random() * Math.PI * 2;
				r.x += Math.cos(p) * d, r.z += Math.sin(p) * d, f?.secondColor && c ? (Qe.set(c), $e.set(f.secondColor), a = Qe.clone().lerp($e, l)) : a = c ? _.clone().offsetHSL((l - .5) * .16, .05, (l - .4) * .4) : it(x, l), a.offsetHSL((Math.random() - .5) * .02, (Math.random() - .5) * .03, (Math.random() - .5) * .05);
			} else S ? r = T[e] : (n = this.resolveBurstHeight(t, i) * (.97 + Math.random() * .06), r = this.resolveLaunchVelocity(n, s || 0)), h > 1 && !S && (r.x += (Math.random() - .5) * 5, r.z += (Math.random() - .5) * 5, r.y *= .95 + Math.random() * .1), a = h > 1 ? _.clone().offsetHSL((Math.random() - .5) * .05, (Math.random() - .5) * .1, (Math.random() - .5) * .2) : _.clone();
			let o = Number.isFinite(f?.detachedHeadScale) && f.detachedHeadScale > 0 ? f.detachedHeadScale : .42, l = S ? o * (.8 + Math.random() * .4) : o, u = {
				...v ? {
					...f,
					isStrobeStar: e < y
				} : f,
				...S ? { detachedHeadScale: l } : {}
			}, d = Math.ceil(h * .25), m = S && e >= d ? .12 * (e - d + Math.random()) / (h - d) : 0, C = Number.isFinite(f?.detachedLifetime) && f.detachedLifetime > 0 ? f.detachedLifetime : 2.5, w = Number.isFinite(f?.detachedSweepDuration) && f.detachedSweepDuration > 0 ? f.detachedSweepDuration : .12, ee = C - .04, D = S && E ? E[e] * w : 0, O = {
				position: g.clone(),
				velocity: r,
				color: a,
				preset: u,
				spiral: p,
				lifetime: S ? Math.max(.1, ee + D - m) : null
			};
			if (S && e >= d) {
				let e = (t) => typeof t != "object" || !t ? t : typeof t.clone == "function" ? t.clone() : Array.isArray(t) ? t.map(e) : Object.fromEntries(Object.entries(t).map(([t, n]) => [t, e(n)]));
				this.pendingDetachedLaunches.push({
					time: this.simulationTime + m,
					launch: e(O)
				});
			} else this.spawnComet(O);
		}
		this.pendingDetachedLaunches.sort((e, t) => e.time - t.time);
		let ee = C ?? this.resolveBurstHeight(t, i), D = w || this.resolveLaunchVelocity(ee, s || 0), O = D.lengthSq() > .001 ? D.clone().normalize() : new e.Vector3(0, 1, 0);
		this.emitFireworkEvent("firework:launch", {
			shellId: Date.now(),
			shellType: "comet_cluster",
			shapeType: "comet",
			effectType: "comet",
			colorHex: _.getHex(),
			sound: (S ? f?.sound : t?.sound) || null,
			position: {
				x: g.x,
				y: g.y,
				z: g.z
			},
			velocity: {
				x: D.x,
				y: D.y,
				z: D.z
			},
			direction: {
				x: O.x,
				y: O.y,
				z: O.z
			},
			intensity: .8
		});
	}
	resolveLaunchPosition(t, n, r) {
		let i = t ?? Math.random(), a = n ?? Math.random(), o;
		r && this.launchZone.sectors && (o = this.launchZone.sectors.find((e) => e.id === r)), !o && this.launchZone.sectors && (o = this.launchZone.sectors[Math.floor(Math.random() * this.launchZone.sectors.length)]);
		let s = o ? o.minAngle : Math.PI / 4, c = o ? o.maxAngle : 3 * Math.PI / 4, l = c - i * (c - s);
		this._lastLaunchAngle = l;
		let u = (this.launchZone.arcRadius || 360) + (a - .5) * this.launchZone.launchRadiusZ * 2, d = u * Math.cos(l), f = -u * Math.sin(l);
		return this.launchZone.center.clone().add(new e.Vector3(d, 0, f));
	}
	resolveBurstHeight(t = null, n) {
		let r = e.MathUtils.lerp(this.launchZone.minBurstY, this.launchZone.maxBurstY, .65);
		return n === void 0 ? e.MathUtils.lerp(30, r, .35 + Math.random() * .2) : e.MathUtils.lerp(30, r, n);
	}
	resolveLaunchVelocity(t, n = 0) {
		let r = this.launchZone.center.y, i = Math.max(t - r, 5), a = Math.sqrt(60 * i), o = this._lastLaunchAngle || Math.PI / 2, s = a, c = Math.PI / 180 * 85, l = e.MathUtils.clamp(n, -c, c), u = a * Math.tan(l), d = 15 * Math.cos(o) + u * Math.sin(o), f = -15 * Math.sin(o) + u * Math.cos(o);
		return new e.Vector3(d, s, f);
	}
	clear() {
		this.pendingDetachedLaunches.length = 0;
		for (let e = 0; e < this.activeComets.length; e++) {
			let t = this.activeComets[e];
			t && (t.mesh?.parent ? t.mesh.parent.remove(t.mesh) : t.mesh && this.scene && typeof this.scene.remove == "function" && this.scene.remove(t.mesh), t.dispose?.());
		}
		this.activeComets.length = 0, this.instancedCometRenderer && this.instancedCometRenderer.update([]);
	}
	spawnCrossetteCross(t, n, r) {
		let i = r.lengthSq() > .001 ? r.clone().normalize() : new e.Vector3(0, 1, 0), a = Math.abs(i.y) > .85 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), o = new e.Vector3().crossVectors(i, a).normalize(), s = new e.Vector3().crossVectors(i, o).normalize(), c = [
			o,
			o.clone().negate(),
			s,
			s.clone().negate()
		];
		for (let e = 0; e < 4; e++) {
			let r = c[e].clone().multiplyScalar(15 + Math.random() * 3.5);
			r.y += 1.5;
			let i = new U({
				position: t.clone(),
				velocity: r,
				color: n.clone().offsetHSL(0, .05, .15),
				preset: {
					thickTrail: !1,
					thinTrail: !0,
					maxDecayTime: .55,
					noBurst: !0,
					launchTrail: !0
				}
			});
			i.mesh.traverse((e) => {
				e.layers.enable(1);
			}), i.coreMesh?.isPoints && this.scene.add(i.mesh), this.activeComets.push(i);
		}
		this.trailSystem.spawnMicroCrackle(t.clone(), n);
	}
	spawnTadpoleArrowSparks(t, r, i, a = !1, o = !1, s = {}) {
		let c = i && i.lengthSq() > .01 ? i.clone().normalize() : new e.Vector3(0, 1, 0), l = Math.abs(c.y) > .88 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), u = new e.Vector3().crossVectors(c, l).normalize(), d = new e.Vector3().crossVectors(u, c).normalize(), f = n.COMET_TADPOLE || {}, p = s?.tadpoleSizeScale ?? s?.sizeScale ?? 1, m = s?.tadpoleDensityScale ?? s?.densityScale ?? 1, h = s?.tadpoleDeflectionScale ?? s?.deflectionScale ?? 1, g = f.standoffDistance ?? .25, _ = t.clone().addScaledVector(c, -g), v = f.arrowSparksMin ?? 5, y = f.arrowSparksMax ?? 8, b = v + Math.floor(Math.random() * (y - v + 1)), x = Math.max(2, Math.round(b * m)), S = (f.sparkBrightnessMultiplier ?? 4.2) * (.85 + .3 * Math.random()), C = (f.arrowSpeedMin ?? 28) * p, w = (f.arrowSpeedMax ?? 48) * p, T = f.needleDragScale ?? .38;
		if (this.trailSystem && typeof this.trailSystem.spawnTrailParticle == "function") {
			let t = (f.centerCoreBrightness ?? 7.5) * Math.min(1.4, Math.max(.7, p)), n = new e.Color(16777215).lerp(r, .25).multiplyScalar(t), i = c.clone().multiplyScalar(2.2);
			this.trailSystem.spawnTrailParticle(_, n, 1, !1, .16 + Math.random() * .1, 1, a, i, .2, 1, !1, null, !0);
		}
		for (let t = 0; t < x; t++) {
			let t = Math.random() * Math.PI * 2, n = (1.05 + Math.random() * .4) * Math.min(1.15, Math.max(.85, p)), o = Math.cos(t) * Math.sin(n), s = Math.sin(t) * Math.sin(n), l = -Math.cos(n) * .45, m = new e.Vector3().addScaledVector(u, o).addScaledVector(d, s).addScaledVector(c, l).normalize(), h = C + Math.random() * (w - C), g = m.multiplyScalar(h);
			i && g.addScaledVector(i, .35);
			let v = r.clone().offsetHSL((Math.random() - .5) * .04, .1, .3 + Math.random() * .16).multiplyScalar(S), y = (f.arrowStarLife ?? .48) * Math.sqrt(p) * (.85 + Math.random() * .35);
			this.trailSystem && typeof this.trailSystem.spawnTrailParticle == "function" && this.trailSystem.spawnTrailParticle(_, v, 1, !1, y, 1, a, g, .2, T, !1, null, !0);
		}
		if ((o || Math.random() < .3) && this.trailSystem && typeof this.trailSystem.spawnMicroCrackle == "function") {
			let t = _.clone().add(new e.Vector3((Math.random() - .5) * 2.5, -Math.random() * 3, (Math.random() - .5) * 2.5));
			this.trailSystem.spawnMicroCrackle(t, r);
		}
		if (i && h > .05) {
			let t = f.variance?.kickImpulseBase ?? 2.8, n = Math.random() * Math.PI * 2, r = t * h * (.7 + Math.random() * .6), a = new e.Vector3().addScaledVector(u, Math.cos(n) * r).addScaledVector(d, Math.sin(n) * r);
			i.add(a);
		}
	}
	spawnTadpoleFlurry(t, r, i, a = !1, o = !1, s = {}) {
		let c = i && i.lengthSq() > .01 ? i.clone().normalize() : new e.Vector3(0, 1, 0), l = Math.abs(c.y) > .88 ? new e.Vector3(1, 0, 0) : new e.Vector3(0, 1, 0), u = new e.Vector3().crossVectors(c, l).normalize(), d = new e.Vector3().crossVectors(u, c).normalize(), f = n.COMET_TADPOLE || {}, p = s?.tadpoleSizeScale ?? s?.sizeScale ?? 1, m = s?.tadpoleDensityScale ?? s?.densityScale ?? 1, h = s?.tadpoleDeflectionScale ?? s?.deflectionScale ?? 1, g = f.standoffDistance ?? .25, _ = t.clone().addScaledVector(c, -g), v = f.flurryCount || 36, y = Math.max(12, Math.round(v * m)), b = (f.arrowSpeedMin ? f.arrowSpeedMin * 1.15 : 32) * p, x = (f.arrowSpeedMax ? f.arrowSpeedMax * 1.15 : 54) * p, S = (f.flurryStarLife || .58) * Math.sqrt(p), C = (f.sparkBrightnessMultiplier ?? 4.2) * 1.15, w = f.needleDragScale ?? .38;
		if (this.trailSystem && typeof this.trailSystem.spawnTrailParticle == "function") {
			let t = (f.centerCoreBrightness ?? 7.5) * 1.25 * p, n = new e.Color(16777215).lerp(r, .2).multiplyScalar(t);
			for (let e = 0; e < 2; e++) this.trailSystem.spawnTrailParticle(_, n, 1, !0, .2 + Math.random() * .12, 1, !1, null, 0, 1, !1, null, !0);
		}
		for (let t = 0; t < y; t++) {
			let n = t / y * Math.PI * 2 + (Math.random() - .5) * .35, o = (.95 + Math.random() * .55) * Math.min(1.15, Math.max(.85, p)), s = Math.cos(n) * Math.sin(o), l = Math.sin(n) * Math.sin(o), f = -Math.cos(o) * .4, m = new e.Vector3().addScaledVector(u, s).addScaledVector(d, l).addScaledVector(c, f).normalize(), h = b + Math.random() * (x - b), g = m.multiplyScalar(h);
			i && g.addScaledVector(i, .25);
			let v = r.clone().offsetHSL((Math.random() - .5) * .06, .1, .32 + Math.random() * .16).multiplyScalar(C), T = S * (.85 + Math.random() * .35);
			this.trailSystem && typeof this.trailSystem.spawnTrailParticle == "function" && this.trailSystem.spawnTrailParticle(_, v, 1, !1, T, 1, a, g, .2, w, !1, null, !0);
		}
		if (this.trailSystem && typeof this.trailSystem.spawnEffectSpark == "function") {
			let t = Math.round(14 * m);
			for (let n = 0; n < t; n++) {
				let t = _.clone().add(new e.Vector3((Math.random() - .5) * 2.5 * p, -Math.random() * 3 * p, (Math.random() - .5) * 2.5 * p));
				this.trailSystem.spawnEffectSpark(t, r, !0, null, Math.random() * 1e3, (.4 + Math.random() * .25) * Math.sqrt(p), !1);
			}
		}
		if (this.trailSystem && typeof this.trailSystem.spawnMicroCrackle == "function") for (let n = 0; n < 6; n++) {
			let n = t.clone().add(new e.Vector3((Math.random() - .5) * 3.5, -Math.random() * 3.5, (Math.random() - .5) * 3.5));
			this.trailSystem.spawnMicroCrackle(n, r);
		}
		if (i && h > .05) {
			let t = (f.variance?.kickImpulseBase ?? 2.8) * 1.35, n = Math.random() * Math.PI * 2, r = t * h * (.6 + Math.random() * .8), a = new e.Vector3().addScaledVector(u, Math.cos(n) * r).addScaledVector(d, Math.sin(n) * r);
			i.add(a);
		}
	}
	update(e) {
		let t = this.simulationTime + e;
		for (; this.pendingDetachedLaunches.length && this.pendingDetachedLaunches[0].time <= t + 1e-10;) {
			let e = this.pendingDetachedLaunches.shift(), n = this.spawnComet(e.launch);
			n._launchFrameDeltaTime = Math.max(0, t - e.time);
		}
		this.simulationTime = t;
		let r = 0;
		for (let t = 0; t < this.activeComets.length; t++) {
			let i = this.activeComets[t], a = i._launchFrameDeltaTime !== void 0, o = i._launchFrameDeltaTime ?? e;
			if (delete i._launchFrameDeltaTime, a && o === 0) {
				this.activeComets[r++] = i;
				continue;
			}
			let s = i.update(o), c = i.initialVy ? i.initialVy * i.initialVy / 60 : 0, u = i.mesh.position.y - (i.launchY ?? 0), d = c > 0 ? u / c : 0, f = i.hasStrobe && i.isStrobeStar && i.state === U.STATE.LAUNCHING && d >= (i.strobe?.activationThreshold ?? .5), p = i.hasStrobe && !i.isStrobeStar && i.state === U.STATE.LAUNCHING && i.age >= (i.dimStartTime ?? 999), m = !!i.isGhostDarkPhase, h = !!i.isGhostInvisible, g = i.preset?.cometTrail === "smoke" || !!i.preset?.flightSmoke && i.preset?.launchTrail === !1 || !!i.preset?.launchSmoke && i.preset?.launchTrail === !1, _ = !1;
			if (i.noTrailTiming) {
				let e = i.noTrailTiming.start ?? 0, t = i.noTrailTiming.end ?? i.totalLifetime ?? 9999;
				_ = i.age >= e && i.age <= t;
			}
			let v = (i.noTrailTiming ? _ : !!i.hasNoTrail) || i.preset?.launchTrail === !1 || g;
			i.hasCrossette && !i.hasSplitCrossette && (i.state === U.STATE.DECAYING || i.velocity.y <= 0) && (i.hasSplitCrossette = !0, this.spawnCrossetteCross(i.mesh.position, i.color, i.velocity));
			let y = n.COMET_TADPOLE?.arrowFlurryStartProgress ?? .28;
			if (i.isTadpole && i.state === U.STATE.LAUNCHING && i.tadpoleProgress !== void 0 && i.tadpoleProgress >= y) {
				i.tadpoleArrowTimer = (i.tadpoleArrowTimer || 0) + o;
				let e = n.COMET_TADPOLE?.arrowInterval ?? .065;
				i.tadpoleArrowTimer >= e && (i.tadpoleArrowTimer = 0, this.spawnTadpoleArrowSparks(i.mesh.position, i.color, i.velocity, !!i.hasStrobe, !!i.hasCrackle, i));
			}
			let b = i.state === U.STATE.DECAYING || i.tadpoleProgress !== void 0 && i.tadpoleProgress >= .88 || i.initialVy > 15 && i.velocity.y <= 6;
			if (i.isTadpole && !i.hasFlurried && b && (i.hasFlurried = !0, this.spawnTadpoleFlurry(i.mesh.position, i.color, i.velocity, !!i.hasStrobe, !!i.hasCrackle, i)), i.hasCrackle && !i.hasCrackled && (i.state === U.STATE.DECAYING || i.velocity.y <= 0) && (i.hasCrackled = !0, this.trailSystem && typeof this.trailSystem.spawnMicroCrackle == "function")) for (let e = 0; e < 6; e++) ut.set((Math.random() - .5) * 4.5, (Math.random() - .5) * 4.5, (Math.random() - .5) * 4.5), pt.copy(i.mesh.position).add(ut), this.trailSystem.spawnMicroCrackle(pt, i.color);
			let x = !!(i.preset?.clusterCount && i.preset.clusterCount > 1 || i.preset?.shellType?.startsWith("comet_cluster") || i.preset?.type === "comet_cluster");
			if (i.state === U.STATE.LAUNCHING) {
				if (g && !m && !h) {
					let e = i.prevPosition || i.mesh.position, t = i.mesh.position;
					ot.subVectors(t, e);
					let r = ot.length();
					r > .001 ? st.copy(ot).normalize() : i.velocity && i.velocity.lengthSq() > .01 ? st.copy(i.velocity).normalize() : st.set(0, 1, 0);
					let a = n.SMOKE, o = a?.flightSmokeStepDist || 1.2, s = Math.max(1, Math.min(x ? 3 : 8, Math.ceil(r / o)));
					ht.copy(gt), i.color && ht.lerp(i.color, .22);
					for (let n = 1; n <= s; n++) {
						let r = n / s;
						ct.lerpVectors(e, t, r);
						let i = (.2 + .35 * (1 - r)) * ((a?.flightSmokeScale || 4.8) * .12);
						ct.x += (Math.random() - .5) * i, ct.y += (Math.random() - .5) * i, ct.z += (Math.random() - .5) * i, ut.set((Math.random() - .5) * .8, .3 + Math.random() * .8, (Math.random() - .5) * .8), lt.copy(st).multiplyScalar((-1.6 - Math.random() * 1.2) * (.8 + .4 * (1 - r))).add(ut);
						let o = {
							life: (a?.flightSmokeLifeMin || 3.5) + Math.random() * ((a?.flightSmokeLifeMax || 6.5) - (a?.flightSmokeLifeMin || 3.5)),
							scale: (a?.flightSmokeScale || 4.8) * (.72 + .38 * (1 - r)) + Math.random() * 1.2,
							growth: a?.flightSmokeGrowth || 3.2,
							drag: a?.flightSmokeDrag || 1.8,
							buoyancy: a?.flightSmokeBuoyancy || .38,
							opacity: (a?.flightSmokeOpacity || .28) * (1.15 - .25 * (1 - r)),
							color: ht
						};
						this.smokeSystem ? this.smokeSystem.addSmokePoint(ct, lt, o) : l.emit("smoke:spawn", {
							position: ct.clone(),
							velocity: lt.clone(),
							options: o
						});
					}
				} else if (!v && !m && !h) {
					let e = !i.coreMesh || i.coreMesh.visible || i.preset?.sparkleAtEnd, t = i.coreMesh?.material?.opacity ?? 1, n = i.velocity.y > 0 ? i.velocity.y / 30 * .85 : .05;
					if (f) i.shouldSpawnTrail(.49) && this.trailSystem.spawnTrailParticle(i.mesh.position, i.color, .8, !0, n * .6, .85, !0, null, 1, 1, !1, Math.random() * 1e3), Math.random() < .25 && !i.preset?.sparkleAtEnd && this.trailSystem.spawnEffectSpark(i.mesh.position, i.isGlitterStrobe ? et : i.color, !0, null, Math.random() * 1e3, n * .5, !1);
					else if (p) t > .08 && i.shouldSpawnTrail(1.2) && Math.random() < .35 * t && this.trailSystem.spawnTrailParticle(i.mesh.position, i.color, .5, !0, n * .4, .15 * t, !1);
					else if (e) {
						let e = !!i.preset?.detachedTrail || i.preset?.cometTrail === "detached" || i.preset?.cometTrail === "detached-trail" || i.preset?.shellType === "comet_cluster_detached", t = !!i.preset?.isCascade || i.preset?.shellType === "comet_cluster_cascade", r = this.activeComets.length > 50 ? Math.min(2.5, 1 + (this.activeComets.length - 50) * .01) : 1, a = (i.isTadpole ? 1.44 : t ? .9 : i.preset?.thickTrail ? .36 : i.preset?.thinTrail || e ? 1 : .64) * r;
						if (i.shouldSpawnTrail(a)) {
							let r = i.mesh.position;
							if (e) {
								let e = i.velocity, t = e ? e.length() : 0;
								t > .1 ? ft.copy(e).normalize() : ft.set(0, 1, 0);
								let n = Math.max(16, Math.min(28, t * .22));
								dt.copy(i.mesh.position).addScaledVector(ft, -n), r = dt;
							}
							if (i.isTadpole) {
								let e = Math.max(.75, n * .9);
								this.trailSystem.spawnTrailParticle(i.mesh.position, i.color, 1.4, !1, e, .8, !1);
							} else e ? (_t.copy(i.color).offsetHSL(0, -.15, -.12), this.trailSystem.spawnTrailParticle(r, _t, .5, !1, n * .5, .38, !1)) : t ? this.trailSystem.spawnTrailParticle(i.mesh.position, i.color, 1.4, !1, Math.min(1.5, n * .7), .85, !1) : i.preset?.thickTrail ? this.trailSystem.spawnTrailParticle(i.mesh.position, i.color, 1.5, !1, n, .9, !1) : i.preset?.thinTrail ? this.trailSystem.spawnTrailParticle(i.mesh.position, i.color, .6, !1, n * .7, .05, !1) : this.trailSystem.spawnTrailParticle(i.mesh.position, i.color, 1, !0, n, .12, !1);
						}
						let o = (t ? .015 : .08) / r;
						Math.random() < o && !i.preset?.sparkleAtEnd && !e && this.trailSystem.spawnEffectSpark(i.mesh.position, i.color, !1);
						let s = (x ? .1 : .25) / r;
						if (i.preset?.launchSmoke && Math.random() < s && !e) {
							at.copy(i.velocity).multiplyScalar(-.12);
							let e = {
								life: 1.5 + Math.random() * .7,
								scale: 4.8 + Math.random() * 2.2,
								growth: 3.2,
								opacity: .22,
								color: i.color
							};
							this.smokeSystem ? this.smokeSystem.addSmokePoint(i.mesh.position, at, e) : l.emit("smoke:spawn", {
								position: i.mesh.position.clone(),
								velocity: at.clone(),
								options: e
							});
						}
					}
				}
				i.hasCrackle && Math.random() < .1 && this.trailSystem.spawnMicroCrackle(i.mesh.position, i.color), this.smokeSystem && i.preset?.launchSmoke && !v && Math.random() < (x ? .08 : .2) && (mt.set((Math.random() - .5) * .5, Math.random() * .5 + .2, (Math.random() - .5) * .5), this.smokeSystem.spawnPuff(i.mesh.position, mt, {
					life: 1 + Math.random() * .5,
					scale: 2.5 + Math.random() * 2,
					growth: 2.5,
					opacity: .12 + Math.random() * .08,
					color: nt
				}));
			}
			if (i.state === U.STATE.DECAYING || i.isFading || i.isGhostFlaring) {
				if (i.isGhostFlaring && !i.hasEmittedGhostFlare) {
					i.hasEmittedGhostFlare = !0;
					for (let e = 0; e < 4; e++) this.trailSystem.spawnEffectSpark(i.mesh.position, tt, !0, null, Math.random() * 1e3, .35 + Math.random() * .2, !1);
					i.hasCrackle && this.trailSystem.spawnMicroCrackle(i.mesh.position, i.color);
				}
				if (!i.hasNoBurst) {
					if (i.preset?.sparkleAtEnd) {
						let e = i.decayTime / i.maxDecayTime;
						if (e > .4) {
							let t = .25 + (e - .4) ** 2 * .75;
							if (Math.random() < t) {
								let e = Math.random() < .55 ? vt : yt;
								this.trailSystem.spawnEffectSpark(i.mesh.position, e, !!i.hasStrobe);
							}
						}
					}
					i.hasCrackle && Math.random() < .1 && this.trailSystem.spawnMicroCrackle(i.mesh.position, i.color);
				}
			}
			i.mesh.position.y <= 0 && i.age > .1 && (this.smokeSystem && (lt.set((Math.random() - .5) * .8, 1 + Math.random() * .8, (Math.random() - .5) * .8), ct.set(i.mesh.position.x, .05, i.mesh.position.z), this.smokeSystem.spawnPuff(ct, lt, {
				life: .9 + Math.random() * .5,
				scale: 2.8 + Math.random() * 1.5,
				growth: 2.5,
				opacity: .16,
				color: rt
			})), s = !0), s ? (i.mesh?.parent ? i.mesh.parent.remove(i.mesh) : i.mesh && this.scene && typeof this.scene.remove == "function" && this.scene.remove(i.mesh), i.dispose()) : (t !== r && (this.activeComets[r] = i), r++);
		}
		this.activeComets.length = r, this.instancedCometRenderer && this.instancedCometRenderer.update(this.activeComets);
	}
}, xt = s.smoke?.qualityCapacities ?? n.SMOKE?.qualityCapacities ?? {
	off: {
		launch: 0,
		aerial: 0
	},
	low: {
		launch: 150,
		aerial: 450
	},
	medium: {
		launch: 450,
		aerial: 1350
	},
	high: {
		launch: 5e3,
		aerial: 1e4
	},
	unlimited: {
		launch: 1e4,
		aerial: 15e3
	}
}, St = (xt.unlimited?.launch ?? 1e4) + (xt.unlimited?.aerial ?? 15e3), Ct = s.smoke?.maxLights ?? n.SMOKE?.maxLights ?? 4, wt = class {
	constructor(t) {
		this.atmosphereManager = d, this.scene = t.instance, this.quality = s.smoke?.quality ?? "medium", this.density = s.smoke?.density ?? 1, this.windSpeed = s.smoke?.windSpeed ?? 1, this.windDirection = s.smoke?.windDirection ?? 25, this.unlimited = !!s.smoke?.unlimited, this.lifespanMultiplier = s.smoke?.lifespanMultiplier ?? 1, this.activePuffCount = 0, this.activeLaunchCount = 0, this.activeAerialCount = 0, this.updateCapacities(), this.smokeTexture = this.createSmokeTexture(), this.puffs = [], this.eventSubscriptions = [], this.baseWind = new e.Vector3(), this.currentWind = new e.Vector3(), this.updateWindVectors(), this.positionsArray = new Float32Array(St * 3), this.colorsArray = new Float32Array(St * 3), this.sizesArray = new Float32Array(St), this.opacitiesArray = new Float32Array(St), this.seedsArray = new Float32Array(St), this.smokeGeometry = new e.BufferGeometry(), this.smokeGeometry.setAttribute("position", new e.BufferAttribute(this.positionsArray, 3)), this.smokeGeometry.setAttribute("color", new e.BufferAttribute(this.colorsArray, 3)), this.smokeGeometry.setAttribute("aSize", new e.BufferAttribute(this.sizesArray, 1)), this.smokeGeometry.setAttribute("aOpacity", new e.BufferAttribute(this.opacitiesArray, 1)), this.smokeGeometry.setAttribute("aSeed", new e.BufferAttribute(this.seedsArray, 1)), this.smokeUniforms = {
			uTime: { value: 0 },
			uActiveLightCount: { value: 0 },
			uLightPositions: { value: [
				new e.Vector3(0, 100, 0),
				new e.Vector3(0, 100, 0),
				new e.Vector3(0, 100, 0),
				new e.Vector3(0, 100, 0)
			] },
			uLightColors: { value: [
				new e.Color(0),
				new e.Color(0),
				new e.Color(0),
				new e.Color(0)
			] },
			uLightIntensities: { value: new Float32Array(Ct) },
			uLightRadii: { value: new Float32Array([
				650,
				650,
				650,
				650
			]) },
			uFlashPos: { value: new e.Vector3(0, 100, 0) },
			uFlashColor: { value: new e.Color(0) },
			uFlashIntensity: { value: 0 },
			uFlashRadius: { value: 650 }
		}, this.smokeMaterial = new e.PointsMaterial({
			map: this.smokeTexture,
			transparent: !0,
			depthWrite: !1,
			depthTest: !0,
			blending: e.NormalBlending,
			vertexColors: !0
		}), this.smokeMaterial.onBeforeCompile = (e) => {
			e.uniforms.uTime = this.smokeUniforms.uTime, e.uniforms.uActiveLightCount = this.smokeUniforms.uActiveLightCount, e.uniforms.uLightPositions = this.smokeUniforms.uLightPositions, e.uniforms.uLightColors = this.smokeUniforms.uLightColors, e.uniforms.uLightIntensities = this.smokeUniforms.uLightIntensities, e.uniforms.uLightRadii = this.smokeUniforms.uLightRadii, e.uniforms.uFlashPos = this.smokeUniforms.uFlashPos, e.uniforms.uFlashColor = this.smokeUniforms.uFlashColor, e.uniforms.uFlashIntensity = this.smokeUniforms.uFlashIntensity, e.uniforms.uFlashRadius = this.smokeUniforms.uFlashRadius, e.vertexShader = "\n        uniform float uTime;\n        attribute float aSize;\n        attribute float aOpacity;\n        attribute float aSeed;\n        varying float vOpacity;\n        varying float vSeed;\n        varying vec3 vWorldPos;\n      " + e.vertexShader.replace("#include <common>", "\n        #include <common>\n        ").replace("gl_PointSize = size;", "\n        float sizeNoise = sin(uTime * 1.6 + aSeed * 19.37) * 0.12;\n        gl_PointSize = aSize * (1.0 + sizeNoise);\n        vOpacity = aOpacity;\n        vSeed = aSeed;\n        vWorldPos = position;\n        "), e.fragmentShader = "\n        #define MAX_LIGHTS 4\n        uniform float uTime;\n        uniform float uActiveLightCount;\n        uniform vec3 uLightPositions[MAX_LIGHTS];\n        uniform vec3 uLightColors[MAX_LIGHTS];\n        uniform float uLightIntensities[MAX_LIGHTS];\n        uniform float uLightRadii[MAX_LIGHTS];\n        uniform vec3 uFlashPos;\n        uniform vec3 uFlashColor;\n        uniform float uFlashIntensity;\n        uniform float uFlashRadius;\n        varying float vOpacity;\n        varying float vSeed;\n        varying vec3 vWorldPos;\n      " + e.fragmentShader.replace("#include <map_particle_fragment>", "\n        #ifdef USE_MAP\n          float angle = vSeed * 6.2831853 + uTime * (0.12 + 0.08 * fract(vSeed * 5.71));\n          vec2 centered = gl_PointCoord - vec2(0.5);\n          float s = sin(angle);\n          float c = cos(angle);\n          vec2 rotated = vec2(\n            centered.x * c - centered.y * s,\n            centered.x * s + centered.y * c\n          );\n\n          // Organic harmonic contour warping (bien dang vien thanh cac thuy meo mo go ghe)\n          float pAngle = atan(rotated.y, rotated.x);\n          float pDist = length(rotated);\n          float warp = sin(pAngle * 3.0 + vSeed * 11.3) * 0.11\n                     + cos(pAngle * 5.0 - vSeed * 7.7) * 0.07;\n          vec2 warpedCoord = rotated * (1.0 + warp) + vec2(0.5);\n          vec4 mapTexel = texture2D( map, warpedCoord );\n          float edgeCutoff = smoothstep(0.50, 0.44, pDist * (1.0 + warp * 0.65));\n          mapTexel.a *= edgeCutoff;\n          diffuseColor *= mapTexel;\n        #endif\n\n        // Troi dem: khoi khong tu phat sang, co mau tram toi mac dinh\n        vec3 nightAmbient = diffuseColor.rgb * 0.16;\n        vec3 accumulatedDyedColor = vec3(0.0);\n        float totalIllumAccum = 0.0;\n\n        // Pseudo-spherical normal across billboard point sprite\n        vec2 centeredP = gl_PointCoord - vec2(0.5);\n        float r2 = clamp(dot(centeredP, centeredP) * 4.0, 0.0, 1.0);\n        float nz = sqrt(max(0.0, 1.0 - r2));\n        float edgeScattering = pow(1.0 - nz, 1.6) * 0.55;\n\n        int activeLights = int(clamp(uActiveLightCount, 0.0, float(MAX_LIGHTS)));\n\n        if (activeLights > 0) {\n          for (int i = 0; i < MAX_LIGHTS; i++) {\n            if (i >= activeLights) {\n              break;\n            }\n            float lIntensity = uLightIntensities[i];\n            if (lIntensity <= 0.001) {\n              continue;\n            }\n\n            vec3 lPos = uLightPositions[i];\n            vec3 lColor = uLightColors[i];\n            float lRadius = max(10.0, uLightRadii[i]);\n\n            vec3 toLight = lPos - vWorldPos;\n            float distToLight = length(toLight);\n            if (distToLight >= lRadius) {\n              continue;\n            }\n\n            float lightAtten = clamp(1.0 - distToLight / lRadius, 0.0, 1.0);\n            lightAtten = lightAtten * lightAtten;\n\n            vec2 dirToLight2D = normalize(toLight.xz + vec2(0.0001));\n            float NdotL = clamp(\n              dot(centeredP * 2.0, dirToLight2D) * 0.45 + nz * 0.55 + 0.2,\n              0.2,\n              1.25\n            );\n\n            float lightIllum = (NdotL + edgeScattering) * lightAtten * lIntensity * 2.5;\n\n            // Phan tich do bao hoa mau (color saturation) cua anh sang phao hoa\n            float maxChan = max(lColor.r, max(lColor.g, lColor.b));\n            float minChan = min(lColor.r, min(lColor.g, lColor.b));\n            float colorSat = (maxChan > 0.001) ? ((maxChan - minChan) / maxChan) : 0.0;\n\n            vec3 illuminatedWhite = diffuseColor.rgb * 1.45;\n            float dyeRatio = clamp(0.35 + colorSat * 0.60, 0.35, 0.95);\n            vec3 dyedColor = mix(\n              illuminatedWhite,\n              lColor * 1.85,\n              dyeRatio\n            );\n\n            float illumFactor = clamp(lightIllum, 0.0, 1.0);\n            accumulatedDyedColor += dyedColor * illumFactor;\n            accumulatedDyedColor += dyedColor * (max(0.0, lightIllum - 1.0) * 0.35);\n            totalIllumAccum += illumFactor;\n          }\n\n          if (totalIllumAccum > 0.001) {\n            float blendWeight = clamp(totalIllumAccum, 0.0, 1.0);\n            diffuseColor.rgb = mix(\n              nightAmbient,\n              accumulatedDyedColor,\n              blendWeight\n            );\n          } else {\n            diffuseColor.rgb = nightAmbient;\n          }\n        } else if (uFlashIntensity > 0.001) {\n          // Fallback legacy single-light path\n          vec3 toLight = uFlashPos - vWorldPos;\n          float distToFlash = length(toLight);\n          float flashAtten = clamp(1.0 - distToFlash / uFlashRadius, 0.0, 1.0);\n          flashAtten = flashAtten * flashAtten;\n\n          vec2 dirToLight2D = normalize(toLight.xz + vec2(0.0001));\n          float NdotL = clamp(\n            dot(centeredP * 2.0, dirToLight2D) * 0.45 + nz * 0.55 + 0.2,\n            0.2,\n            1.25\n          );\n\n          float totalIllum = (NdotL + edgeScattering) * flashAtten * uFlashIntensity * 2.5;\n          float maxChan = max(uFlashColor.r, max(uFlashColor.g, uFlashColor.b));\n          float minChan = min(uFlashColor.r, min(uFlashColor.g, uFlashColor.b));\n          float colorSat = (maxChan > 0.001) ? ((maxChan - minChan) / maxChan) : 0.0;\n\n          vec3 illuminatedWhite = diffuseColor.rgb * 1.45;\n          float dyeRatio = clamp(0.35 + colorSat * 0.60, 0.35, 0.95);\n          vec3 dyedColor = mix(\n            illuminatedWhite,\n            uFlashColor * 1.85,\n            dyeRatio\n          );\n\n          float illumFactor = clamp(totalIllum, 0.0, 1.0);\n          diffuseColor.rgb = mix(\n            nightAmbient,\n            dyedColor,\n            illumFactor\n          );\n          diffuseColor.rgb += dyedColor * (max(0.0, totalIllum - 1.0) * 0.35);\n        } else {\n          diffuseColor.rgb = nightAmbient;\n        }\n        ").replace("vec4 diffuseColor = vec4( diffuse, opacity );", "\n        vec4 diffuseColor = vec4( diffuse, opacity * vOpacity );\n        ");
		}, this.smokePoints = new e.Points(this.smokeGeometry, this.smokeMaterial), this.smokePoints.frustumCulled = !1, this.scene.add(this.smokePoints), this.setupEventListeners();
	}
	setMultiLights(e = []) {
		let t = (n.SMOKE?.qualityMaxLights ?? {
			low: 1,
			medium: 2,
			high: Ct,
			unlimited: Ct
		})[this.quality] ?? Ct, r = Math.min(t, Math.min(Ct, e.length));
		this.smokeUniforms.uActiveLightCount.value = r;
		for (let t = 0; t < Ct; t++) if (t < r) {
			let n = e[t];
			n.position && this.smokeUniforms.uLightPositions.value[t].copy(n.position), n.color && this.smokeUniforms.uLightColors.value[t].copy(n.color), this.smokeUniforms.uLightIntensities.value[t] = Math.max(0, Number(n.intensity) || 0), this.smokeUniforms.uLightRadii.value[t] = Math.max(10, Number(n.radius) || 450);
		} else this.smokeUniforms.uLightIntensities.value[t] = 0;
		if (r > 0) {
			let t = e[0];
			t.position && this.smokeUniforms.uFlashPos.value.copy(t.position), t.color && this.smokeUniforms.uFlashColor.value.copy(t.color), this.smokeUniforms.uFlashIntensity.value = t.intensity || 0, this.smokeUniforms.uFlashRadius.value = t.radius || 650;
		} else this.smokeUniforms.uFlashIntensity.value = 0;
	}
	setBurstFlash(e, t, n, r = 650) {
		e && this.smokeUniforms.uFlashPos.value.copy(e), t && this.smokeUniforms.uFlashColor.value.copy(t), this.smokeUniforms.uFlashIntensity.value = n || 0, this.smokeUniforms.uFlashRadius.value = r || 650, n > .001 && e && t ? this.setMultiLights([{
			position: e,
			color: t,
			intensity: n,
			radius: r
		}]) : this.setMultiLights([]);
	}
	setupEventListeners() {
		this.eventSubscriptions.push(l.on("firework:launch", (e) => this.onLaunch(e)), l.on("firework:burst", (e) => this.onBurst(e)), l.on("firework:clear", () => this.clear()), l.on("smoke:spawn", (e) => {
			e && e.position && e.velocity && this.spawnPuff(e.position, e.velocity, e.options);
		}));
	}
	updateCapacities() {
		let e = this.unlimited ? xt.unlimited : xt[this.quality] ?? xt.medium, t = typeof e == "number" ? Math.round(e * .25) : e?.launch ?? 450, n = typeof e == "number" ? Math.round(e * .75) : e?.aerial ?? 1350;
		this.maxPuffs = {
			launch: t,
			aerial: n,
			total: t + n
		};
	}
	setQuality(e) {
		this.quality = e, this.updateCapacities(), this.quality === "off" ? (this.clear(), this.smokePoints.visible = !1) : this.smokePoints.visible = !0;
	}
	setUnlimited(e) {
		this.unlimited = !!e, this.updateCapacities();
	}
	setLifespanMultiplier(e) {
		this.lifespanMultiplier = Math.max(.5, Math.min(10, Number(e) || 1));
	}
	setDensity(e) {
		this.density = Math.max(.1, e);
	}
	updateWindVectors() {
		this.atmosphereManager.windDirection = this.windDirection, this.atmosphereManager.windSpeed = this.windSpeed, this.atmosphereManager.updateWindVectors(), this.baseWind.copy(this.atmosphereManager.baseWind), this.currentWind.copy(this.atmosphereManager.currentWind);
	}
	setWindDirection(e) {
		this.windDirection = Number(e) || 0, this.updateWindVectors();
	}
	setWindSpeed(e) {
		this.windSpeed = Math.max(0, e), this.updateWindVectors();
	}
	destroy() {
		for (let e of this.eventSubscriptions) e();
		this.clear(), this.smokeTexture && this.smokeTexture.dispose(), this.smokeGeometry && this.smokeGeometry.dispose(), this.smokeMaterial && this.smokeMaterial.dispose(), this.scene.remove(this.smokePoints);
	}
	createSmokeTexture() {
		if (typeof document > "u") return null;
		let t = document.createElement("canvas");
		t.width = 128, t.height = 128;
		let n = t.getContext("2d");
		[
			{
				x: 62,
				y: 65,
				r: 25,
				alpha: .72
			},
			{
				x: 67,
				y: 61,
				r: 21,
				alpha: .62
			},
			{
				x: 81,
				y: 53,
				r: 21,
				alpha: .54
			},
			{
				x: 46,
				y: 57,
				r: 22,
				alpha: .5
			},
			{
				x: 53,
				y: 82,
				r: 20,
				alpha: .48
			},
			{
				x: 83,
				y: 77,
				r: 18,
				alpha: .45
			},
			{
				x: 66,
				y: 43,
				r: 18,
				alpha: .46
			},
			{
				x: 43,
				y: 70,
				r: 17,
				alpha: .44
			},
			{
				x: 85,
				y: 62,
				r: 16,
				alpha: .4
			},
			{
				x: 70,
				y: 87,
				r: 16,
				alpha: .42
			}
		].forEach((e) => {
			let t = n.createRadialGradient(e.x, e.y, e.r * .1, e.x, e.y, e.r);
			t.addColorStop(0, `rgba(255, 255, 255, ${e.alpha})`), t.addColorStop(.45, `rgba(255, 255, 255, ${e.alpha * .65})`), t.addColorStop(.8, `rgba(255, 255, 255, ${e.alpha * .2})`), t.addColorStop(1, "rgba(255, 255, 255, 0.0)"), n.fillStyle = t, n.beginPath(), n.arc(e.x, e.y, e.r, 0, Math.PI * 2), n.fill();
		});
		let r = new e.CanvasTexture(t);
		return r.needsUpdate = !0, r;
	}
	addSmokePoint(e, t, r = {}) {
		this.quality !== "off" && (!n.SMOKE?.disableFlightSmoke || r.category === "burst" || r.force) && this.spawnPuff(e, t, {
			category: "aerial",
			...r
		});
	}
	spawnPuff(t, r, i = {}) {
		if (this.quality === "off") return;
		let a = i.category === "launch" ? "launch" : "aerial", o = this.maxPuffs[a] ?? 0, s = a === "launch" ? this.activeLaunchCount : this.activeAerialCount;
		if (o === 0 || s >= o || this.puffs.length >= St) return;
		let c = n.SMOKE, l = c.trailLifeMin + Math.random() * (c.trailLifeMax - c.trailLifeMin), u = (i.life ?? l) * this.lifespanMultiplier, d = i.growth ?? c.trailGrowth, f = !!i.isHaze, p = c.hazeChance ?? .22, m = !!(i.isNucleus === void 0 ? i.isHazePromoter === void 0 ? Math.random() < p : i.isHazePromoter : i.isNucleus), h = !f && m, g = i.nucleusBoost ?? c.coalescenceExpansionBoost ?? 3.5;
		this.puffs.push({
			category: a,
			position: t.clone(),
			velocity: r.clone(),
			age: 0,
			life: u,
			initialLife: u,
			growth: d,
			drag: i.drag ?? c.trailDrag,
			buoyancy: i.buoyancy ?? c.trailBuoyancy,
			seed: i.seed ?? Math.random(),
			color: i.color ? i.color.clone() : new e.Color(15922681),
			baseScale: (i.scale ?? c.trailBaseScale) * this.density,
			baseOpacity: (i.opacity ?? c.trailOpacity) * this.density,
			isHaze: f,
			isHazePromoter: h,
			isNucleus: m,
			nucleusBoost: g
		}), a === "launch" ? this.activeLaunchCount++ : this.activeAerialCount++, this.activePuffCount = this.puffs.length;
	}
	onLaunch(t = {}) {
		if (this.quality === "off") return;
		let r = n.SMOKE, i = new e.Vector3(t.position?.x ?? 0, (t.position?.y ?? -50) + 2, t.position?.z ?? 0), a = this.unlimited ? 14 : this.quality === "high" ? 8 : this.quality === "low" ? 3 : 5, o = new e.Color(15922681), s = t.hasCustomColor && t.colorHex !== void 0 ? new e.Color(t.colorHex) : o;
		for (let t = 0; t < a; t++) {
			let n = t === 0, a = new e.Vector3((Math.random() - .5) * 1.2, 1.5 + Math.random() * 1, (Math.random() - .5) * 1.2), o = new e.Vector3((Math.random() - .5) * 1.8, Math.random() * 1.2, (Math.random() - .5) * 1.8);
			this.spawnPuff(i.clone().add(o), a, {
				category: "launch",
				isNucleus: n,
				nucleusBoost: 3.2,
				life: r.trailLifeMin + Math.random() * (r.trailLifeMax - r.trailLifeMin),
				scale: r.trailBaseScale + Math.random() * 3,
				growth: r.trailGrowth,
				drag: r.trailDrag,
				buoyancy: r.trailBuoyancy,
				opacity: r.trailOpacity + Math.random() * .1,
				color: s
			});
		}
	}
	onBurst(t = {}) {
		if (this.quality === "off") return;
		let r = n.SMOKE, i = new e.Vector3(t.position?.x ?? 0, t.position?.y ?? 160, t.position?.z ?? 0), a = e.MathUtils.clamp(t.intensity ?? .5, .1, 1), o = t.burstRadius ? t.burstRadius : 38 + a * 22;
		if (this.puffs.length > 0) {
			let e = o * (r.blastImpulseRadiusMultiplier ?? 1.5), t = (r.blastImpulseScale ?? 22) * a;
			for (let n = 0; n < this.puffs.length; n++) {
				let r = this.puffs[n], a = r.position.distanceTo(i);
				if (a < e && a > .05) {
					let n = 1 - a / e, o = n * n * t, s = r.position.clone().sub(i).normalize();
					r.velocity.addScaledVector(s, o), r.velocity.lengthSq() > 1225 && r.velocity.normalize().multiplyScalar(35);
				}
			}
		}
		let s = new e.Color(15922681), c = t.hasCustomColor && t.colorHex !== void 0 ? new e.Color(t.colorHex) : s;
		if (!(t.hasBurstSmoke || t.burstSmoke || t["burst-smoke"] || Array.isArray(t.effects) && t.effects.some((e) => (typeof e == "object" && e ? e.type || e.key : e) === "burst-smoke"))) return;
		let l = .85 + Math.random() * .55, u = .58 + Math.random() * .42, d = .85 + Math.random() * .55, f = Math.random() * Math.PI * 2, p = (Math.random() - .5) * Math.PI * .65, m = new e.Vector3(Math.cos(p) * Math.cos(f), Math.sin(p), Math.cos(p) * Math.sin(f)).normalize(), h = Math.random() * Math.PI * 2, g = o * (.18 + .08 * a), _ = this.unlimited ? 6 : this.quality === "high" ? 4 : this.quality === "low" ? 2 : 3;
		for (let t = 0; t < _; t++) {
			let n = t === 0, a = new e.Vector3((Math.random() - .5) * 6.5 * l, (Math.random() - .5) * 4.5 * u, (Math.random() - .5) * 6.5 * d), o = a.clone().normalize().multiplyScalar(.8 + Math.random() * 1.5), s = r.burstLifeMin + Math.random() * (r.burstLifeMax - r.burstLifeMin), f = r.burstDragMin + Math.random() * (r.burstDragMax - r.burstDragMin), p = r.burstBuoyancyMin + Math.random() * (r.burstBuoyancyMax - r.burstBuoyancyMin);
			this.spawnPuff(i.clone().add(a), o, {
				category: "aerial",
				isNucleus: n,
				nucleusBoost: 3.8,
				life: s,
				scale: r.burstBaseScale * .95 + Math.random() * 2.5,
				growth: r.burstGrowth * .55 + Math.random() * .8,
				drag: f,
				buoyancy: p,
				seed: t * .23 % 1,
				opacity: r.burstOpacity * 1.15 + Math.random() * .08,
				color: c
			});
		}
		let v = this.unlimited ? 8 : this.quality === "high" ? 6 : this.quality === "low" ? 3 : 4, y = this.unlimited ? 4 : this.quality === "high" ? 3 : 2;
		for (let t = 0; t < v; t++) {
			let n = t / v * Math.PI * 2 + (Math.random() - .5) * .5, a = (Math.random() - .5) * Math.PI * .75, o = new e.Vector3(Math.cos(a) * Math.cos(n), Math.sin(a), Math.cos(a) * Math.sin(n)).normalize(), s = Math.sin(n * 2 + h) * .25 + Math.cos(n * 3 - h * .5) * .16 + Math.sin(a * 2.5) * .14, f = Math.max(0, o.dot(m)), p = f ** 1.6 * .4, _ = Math.max(0, -o.dot(m)) * .22, b = g * Math.max(.55, .82 + s + p - _), x = new e.Vector3(o.x * b * l, o.y * b * u, o.z * b * d), S = f > .6 ? 1.35 + Math.random() * .4 : .75 + Math.random() * .35, C = i.clone().add(x), w = Math.random();
			for (let t = 0; t < y; t++) {
				let n = t === 0, i = new e.Vector3((Math.random() - .5) * 6.5 * l, (Math.random() - .5) * 4.5 * u, (Math.random() - .5) * 6.5 * d), a = x.clone().normalize().multiplyScalar(1.6 + Math.random() * 3.2).add(new e.Vector3((Math.random() - .5) * 1.5, .5 + Math.random() * 1.5, (Math.random() - .5) * 1.5)), o = r.burstLifeMin + Math.random() * (r.burstLifeMax - r.burstLifeMin), s = r.burstDragMin + Math.random() * (r.burstDragMax - r.burstDragMin), f = r.burstBuoyancyMin + Math.random() * (r.burstBuoyancyMax - r.burstBuoyancyMin);
				this.spawnPuff(C.clone().add(i), a, {
					category: "aerial",
					isNucleus: n,
					nucleusBoost: 3.5,
					life: o,
					scale: r.burstBaseScale * S + Math.random() * 3.2,
					growth: r.burstGrowth * .6 + Math.random() * .8,
					drag: s,
					buoyancy: f,
					seed: (w + t * .19) % 1,
					opacity: r.burstOpacity + Math.random() * .08,
					color: c
				});
			}
		}
		let b = this.unlimited ? 10 : this.quality === "high" ? 7 : this.quality === "low" ? 2 : 4;
		for (let t = 0; t < b; t++) {
			let t = Math.random() * Math.PI * 2, n = (Math.random() - .5) * Math.PI * .8, a = new e.Vector3(Math.cos(n) * Math.cos(t), Math.sin(n), Math.cos(n) * Math.sin(t)).normalize(), o = g * (.85 + Math.random() * .65), s = new e.Vector3(a.x * o * l, a.y * o * u, a.z * o * d), f = r.burstLifeMin * .8 + Math.random() * 4, p = r.burstDragMin + Math.random() * .8, m = r.burstBuoyancyMin + Math.random() * .3;
			this.spawnPuff(i.clone().add(s), a.clone().multiplyScalar(2.5 + Math.random() * 3.5), {
				life: f,
				scale: r.burstBaseScale * .85 + Math.random() * 4,
				growth: r.burstGrowth * .5 + Math.random() * .7,
				drag: p,
				buoyancy: m,
				seed: Math.random(),
				opacity: r.burstOpacity * .78 + Math.random() * .06,
				color: c
			});
		}
		if (!r.onlyBurstSmoke) {
			let t = this.unlimited ? 14 : this.quality === "high" ? 9 : this.quality === "low" ? 3 : 6;
			for (let n = 0; n < t; n++) {
				let t = Math.random() * Math.PI * 2, a = (Math.random() - .5) * Math.PI * .85, s = new e.Vector3(Math.cos(a) * Math.cos(t), Math.sin(a), Math.cos(a) * Math.sin(t)).normalize(), f = o * (.24 + Math.random() * .14), p = this.quality === "low" ? 2 : 3;
				for (let t = 1; t <= p; t++) {
					let a = t / p, o = f * (a * .75 + .25 * Math.random()), m = i.clone().add(new e.Vector3(s.x * o * l, s.y * o * u, s.z * o * d)), h = s.clone().multiplyScalar((2.2 + Math.random() * 2.8) * (1.1 - a * .4)).add(new e.Vector3((Math.random() - .5) * 1.2, .4 + Math.random() * 1, (Math.random() - .5) * 1.2)), g = r.burstLifeMin * .85 + Math.random() * 3.5, _ = r.burstDragMin + Math.random() * .6, v = r.burstBuoyancyMin + Math.random() * .25;
					this.spawnPuff(m, h, {
						life: g,
						scale: r.burstBaseScale * (.55 + .35 * (1 - a * .5)) + Math.random() * 1.8,
						growth: r.burstGrowth * .52 + Math.random() * .6,
						drag: _,
						buoyancy: v,
						seed: (n * .17 + t * .29) % 1,
						opacity: r.burstOpacity * (.85 - a * .25) + Math.random() * .05,
						color: c
					});
				}
			}
		}
	}
	spawnAmbientBurstSmoke(t, n, r, i) {
		let a = i.ambientBurstPuffCount ?? {
			low: 1,
			medium: 2,
			high: 2,
			unlimited: 3
		}, o = this.unlimited ? a.unlimited ?? 3 : a[this.quality] ?? 2, s = i.ambientBurstScaleMultiplier ?? .95, c = i.ambientBurstOpacityMultiplier ?? .75;
		for (let n = 0; n < o; n++) {
			let a = new e.Vector3((Math.random() - .5) * 8, (Math.random() - .5) * 6, (Math.random() - .5) * 8), o = a.clone().normalize().multiplyScalar(.6 + Math.random() * 1.5), l = (i.burstLifeMin + Math.random() * (i.burstLifeMax - i.burstLifeMin)) * .85, u = i.burstDragMin + Math.random() * (i.burstDragMax - i.burstDragMin), d = (i.burstBuoyancyMin + Math.random() * (i.burstBuoyancyMax - i.burstBuoyancyMin)) * .75, f = i.burstBaseScale * (.9 + Math.random() * .25) * s, p = i.burstOpacity * (.85 + Math.random() * .15) * c;
			this.spawnPuff(t.clone().add(a), o, {
				category: "aerial",
				isNucleus: n === 0,
				nucleusBoost: 1.8,
				life: l,
				scale: f,
				growth: i.burstGrowth * .65,
				drag: u,
				buoyancy: d,
				seed: Math.random(),
				opacity: p,
				color: r
			});
		}
	}
	update(t) {
		if (this.quality === "off") {
			this.activePuffCount > 0 && this.clear();
			return;
		}
		let r = performance.now() / 1e3;
		this.smokeUniforms.uTime.value = r;
		let i = [], a = n.SMOKE, o = s.smoke?.hazeConsolidation ?? a.hazeConsolidation ?? !0, c = a.hazeHandoverRatio ?? .3, l = a.hazeLifeRatio ?? .7, u = c * 1.25;
		for (let n = 0; n < this.puffs.length; n++) {
			let s = this.puffs[n];
			if (s.age += t, s.isHaze) {
				if (s.age < s.life) {
					let n = s.age / s.life, a = Math.exp(-s.drag * t);
					s.velocity.multiplyScalar(a);
					let o = .78 + .44 * s.seed, c = this.currentWind.x * o, l = this.currentWind.z * o, u = this.currentWind.y;
					s.velocity.x = e.MathUtils.lerp(s.velocity.x, c, t * .72), s.velocity.z = e.MathUtils.lerp(s.velocity.z, l, t * .72), s.velocity.y = e.MathUtils.lerp(s.velocity.y, u, t * .5);
					let d = .45 + 2.2 * n, f = Math.sin(r * 1.6 + s.seed * 19.3) * d, p = Math.cos(r * 1.4 + s.seed * 23.7) * d;
					s.velocity.x += f * t, s.velocity.z += p * t, s.velocity.y += s.buoyancy * t, s.position.addScaledVector(s.velocity, t), i.push(s);
				}
			} else {
				let n = s.age / s.life;
				if (o && s.isHazePromoter && n >= c) {
					let t = n ** .55, r = 1 + s.growth * t * .45, o = s.isNucleus ? 1 + (s.nucleusBoost - 1) * e.MathUtils.smoothstep(n, .05, c) : 1, u = s.baseScale * r * o, d = Math.max(0, 1 - n), f = 1 / Math.sqrt(Math.max(1, r * o * .28)), p = d * d * s.baseOpacity * f;
					s.isHaze = !0, s.isHazePromoter = !1, s.age = 0, s.life = (s.initialLife || s.life) * l, s.baseScale = u, s.baseOpacity = p, s.drag = a.hazeDrag ?? .65, s.buoyancy = a.hazeBuoyancy ?? .16, s.growth = a.hazeGrowth ?? 1.45, s.velocity.multiplyScalar(.45), i.push(s);
				} else if (n < (s.isHazePromoter ? c : u)) {
					let a = Math.exp(-s.drag * t);
					s.velocity.multiplyScalar(a), !s.isNucleus && n > .06 && s.velocity.multiplyScalar(Math.exp(-.85 * t));
					let o = .78 + .44 * s.seed, c = this.currentWind.x * o, l = this.currentWind.z * o, u = this.currentWind.y;
					s.velocity.x = e.MathUtils.lerp(s.velocity.x, c, t * .72), s.velocity.z = e.MathUtils.lerp(s.velocity.z, l, t * .72), s.velocity.y = e.MathUtils.lerp(s.velocity.y, u, t * .5);
					let d = .45 + 2.2 * n, f = Math.sin(r * 1.6 + s.seed * 19.3) * d, p = Math.cos(r * 1.4 + s.seed * 23.7) * d;
					s.velocity.x += f * t, s.velocity.z += p * t, s.velocity.y += s.buoyancy * t, s.position.addScaledVector(s.velocity, t), i.push(s);
				}
			}
		}
		let d = 0, f = 0;
		for (let e = 0; e < i.length; e++) i[e].category === "launch" ? d++ : f++;
		this.activeLaunchCount = d, this.activeAerialCount = f, this.puffs = i, this.activePuffCount = this.puffs.length;
		let p = this.puffs.length;
		for (let t = 0; t < p; t++) {
			let n = this.puffs[t];
			this.positionsArray[t * 3] = n.position.x, this.positionsArray[t * 3 + 1] = n.position.y, this.positionsArray[t * 3 + 2] = n.position.z, this.colorsArray[t * 3] = n.color.r, this.colorsArray[t * 3 + 1] = n.color.g, this.colorsArray[t * 3 + 2] = n.color.b;
			let r = n.age / n.life;
			if (n.isHaze) {
				let e = 1 + n.growth * .35 * r ** .6;
				this.sizesArray[t] = n.baseScale * e;
				let i = Math.max(0, 1 - r);
				this.opacitiesArray[t] = n.baseOpacity * i ** 1.35;
			} else {
				let i = r ** .55, a = 1 + n.growth * i * .45;
				if (n.isNucleus) {
					let i = e.MathUtils.smoothstep(r, .05, c), o = 1 + (n.nucleusBoost - 1) * i;
					this.sizesArray[t] = n.baseScale * a * o;
					let s = Math.max(0, 1 - r), l = 1 / Math.sqrt(Math.max(1, a * o * .28));
					this.opacitiesArray[t] = s * s * n.baseOpacity * l;
				} else {
					this.sizesArray[t] = n.baseScale * a;
					let i = 1 - e.MathUtils.smoothstep(r, .06, u), o = 1 / Math.sqrt(Math.max(1, a * .25));
					this.opacitiesArray[t] = i * i * n.baseOpacity * o;
				}
			}
			this.seedsArray[t] = n.seed;
		}
		p > 0 ? (this.smokeGeometry.getAttribute("position").needsUpdate = !0, this.smokeGeometry.getAttribute("color").needsUpdate = !0, this.smokeGeometry.getAttribute("aSize").needsUpdate = !0, this.smokeGeometry.getAttribute("aOpacity").needsUpdate = !0, this.smokeGeometry.getAttribute("aSeed").needsUpdate = !0, this.smokeGeometry.setDrawRange(0, p)) : this.smokeGeometry.setDrawRange(0, 0);
	}
	clear() {
		if (this.puffs = [], this.activePuffCount = 0, this.activeLaunchCount = 0, this.activeAerialCount = 0, this.smokeGeometry) {
			this.smokeGeometry.setDrawRange(0, 0);
			let e = this.smokeGeometry.getAttribute("position");
			e && (e.needsUpdate = !0);
		}
	}
}, Tt = class {
	constructor(t, n = null, r = null) {
		this.sceneManager = t, this.smokeSystem = n, this.droneSystem = r, this.scene = t.instance, this.reactions = [], this.maxReactions = 8, this.eventSubscriptions = [], this.baseSkyColor = t.baseSkyColor.clone(), this.baseAmbientIntensity = t.baseAmbientIntensity, this.baseHemisphereIntensity = t.baseHemisphereIntensity, this.reusableBurstLight = new e.PointLight(16777215, 0, 900, 2), this.scene.add(this.reusableBurstLight), this.eventSubscriptions.push(l.on("firework:burst", (e) => this.onBurst(e)));
	}
	destroy() {
		for (let e of this.eventSubscriptions) e();
	}
	onBurst(t = {}) {
		if (t.intensity !== void 0 && t.intensity <= .001) return;
		let n = new e.Color(t.colorHex ?? 16777215), r = t.color2Hex !== void 0 && t.color2Hex !== null ? new e.Color(t.color2Hex) : null, i = e.MathUtils.clamp(t.intensity ?? .6, .1, 1) ** 1.35, a = e.MathUtils.clamp(t.duration ?? 1.2, .35, 1.6), o = e.MathUtils.clamp(t.particleLife ?? 2 + i * 1.5, 1.2, 6), s = new e.Vector3(t.position?.x ?? 0, t.position?.y ?? 120, t.position?.z ?? 0);
		this.reactions.push({
			color: n,
			color2: r,
			intensity: i,
			skyDuration: a,
			starDuration: o,
			age: 0,
			position: s,
			burstRadius: t.burstRadius ?? 45,
			isStrobe: !!t.isStrobe
		}), this.reactions.length > this.maxReactions && this.reactions.shift();
	}
	update(t) {
		if (this.reactions.length === 0) {
			this.resetToBase(t);
			return;
		}
		let n = [], r = new e.Color(0, 0, 0), i = 0, a = 0, o = null, s = null, c = [];
		for (let l of this.reactions) {
			if (l.age += t, l.age >= l.starDuration) continue;
			let u = l.age / l.skyDuration, d = 0;
			u < 1 && (d = Math.exp(-4.6 * u) * l.intensity + Math.exp(-1.55 * u) * l.intensity * .42, i += d, a += d, r.add(l.color.clone().multiplyScalar(d)));
			let f = l.age / l.starDuration, p = Math.exp(-7.5 * l.age) * l.intensity * 1.6, m = Math.max(0, 1 - f) ** 1.2, h = l.intensity * .9 * m;
			if (l.isStrobe) {
				let e = Math.sin(l.age * 36) > 0 ? 1.4 : .2;
				h *= e;
			}
			let g = p + h, _ = e.MathUtils.lerp(180, 420, Math.min(1, l.age * .85)), v = l.color2 ? l.color.clone().lerp(l.color2, f) : l.color;
			g > .005 && c.push({
				position: l.position,
				color: v,
				intensity: e.MathUtils.clamp(g * 1.35, 0, 1.8),
				radius: _,
				weight: g
			});
			let y = Math.max(d, g);
			!o || y > o.weight ? (s = o, o = {
				weight: y,
				position: l.position,
				color: v
			}) : (!s || y > s.weight) && (s = {
				weight: y,
				position: l.position,
				color: v
			}), n.push(l);
		}
		this.reactions = n;
		let l = this.getDroneLight();
		l && c.push(l), c.sort((e, t) => t.intensity - e.intensity), this.smokeSystem && (typeof this.smokeSystem.setMultiLights == "function" ? this.smokeSystem.setMultiLights(c) : typeof this.smokeSystem.setBurstFlash == "function" && (c.length > 0 ? this.smokeSystem.setBurstFlash(c[0].position, c[0].color, c[0].intensity, c[0].radius) : this.smokeSystem.setBurstFlash(null, null, 0))), this.sceneManager.cloudSystem && typeof this.sceneManager.cloudSystem.setMultiLights == "function" && this.sceneManager.cloudSystem.setMultiLights(c);
		let u = i > 0 ? r.multiplyScalar(1 / i) : this.baseSkyColor.clone(), d = e.MathUtils.clamp(a * 8e-4, 0, .0015), f = e.MathUtils.clamp(a * 8e-4, 0, .0015), p = e.MathUtils.clamp(a * 5e-4, 0, .001), m = e.MathUtils.clamp(a * 5e-4, 0, .001), h = this.baseSkyColor.clone().lerp(u, d), g = this.baseSkyColor.clone().lerp(u, f);
		if (this.scene.background.copy(h), this.scene.fog.color.copy(g), this.sceneManager.skyDome && this.sceneManager.skyDome.setSkyColors(h, g), this.sceneManager.ambientLight.intensity = this.baseAmbientIntensity + p, this.sceneManager.hemisphereLight.intensity = this.baseHemisphereIntensity + m, this.sceneManager.hemisphereLight.color.copy(h), o) {
			this.reusableBurstLight.color.copy(o.color), this.reusableBurstLight.position.copy(o.position), this.reusableBurstLight.intensity = e.MathUtils.clamp(o.weight * 3.5, 0, 2);
			let t = e.MathUtils.clamp(o.weight * 1.5, 0, 1);
			if (this.sceneManager.waterSurface && typeof this.sceneManager.waterSurface.setBurstFlash == "function" && this.sceneManager.waterSurface.setBurstFlash(o.position, o.color, t), this.sceneManager.distantMountains) {
				if (typeof this.sceneManager.distantMountains.updateFlashes == "function") {
					let e = c.slice(0, 2).map((e, t) => ({
						position: e.position,
						color: e.color,
						intensity: e.intensity * (t === 0 ? .45 : .35)
					}));
					this.sceneManager.distantMountains.updateFlashes(e);
				} else typeof this.sceneManager.distantMountains.setBurstFlash == "function" && this.sceneManager.distantMountains.setBurstFlash(o.color, t * .25, o.position);
			}
			this.sceneManager.skyDome && typeof this.sceneManager.skyDome.setBurstFlash == "function" && this.sceneManager.skyDome.setBurstFlash(o.position, o.color, t);
		} else this.reusableBurstLight.intensity = 0, this.sceneManager.waterSurface && typeof this.sceneManager.waterSurface.setBurstFlash == "function" && this.sceneManager.waterSurface.setBurstFlash(null, null, 0), this.sceneManager.distantMountains && (typeof this.sceneManager.distantMountains.updateFlashes == "function" ? this.sceneManager.distantMountains.updateFlashes([]) : typeof this.sceneManager.distantMountains.setBurstFlash == "function" && this.sceneManager.distantMountains.setBurstFlash(null, 0)), this.sceneManager.skyDome && typeof this.sceneManager.skyDome.setBurstFlash == "function" && this.sceneManager.skyDome.setBurstFlash(null, null, 0);
	}
	resetToBase(t) {
		let n = 1 - Math.exp(-4 * t);
		this.scene.background.lerp(this.baseSkyColor, n), this.scene.fog.color.lerp(this.baseSkyColor, n), this.sceneManager.skyDome && this.sceneManager.skyDome.setSkyColors(this.scene.background, this.scene.fog.color), this.sceneManager.ambientLight.intensity = e.MathUtils.lerp(this.sceneManager.ambientLight.intensity, this.baseAmbientIntensity, n), this.sceneManager.hemisphereLight.intensity = e.MathUtils.lerp(this.sceneManager.hemisphereLight.intensity, this.baseHemisphereIntensity, n), this.reusableBurstLight.intensity = e.MathUtils.lerp(this.reusableBurstLight.intensity, 0, n);
		let r = this.getDroneLight(), i = r ? [r] : [];
		this.smokeSystem && (typeof this.smokeSystem.setMultiLights == "function" ? this.smokeSystem.setMultiLights(i) : typeof this.smokeSystem.setBurstFlash == "function" && (i.length > 0 ? this.smokeSystem.setBurstFlash(i[0].position, i[0].color, i[0].intensity, i[0].radius) : this.smokeSystem.setBurstFlash(null, null, 0))), this.sceneManager.cloudSystem && typeof this.sceneManager.cloudSystem.setMultiLights == "function" && this.sceneManager.cloudSystem.setMultiLights(i), this.sceneManager.waterSurface && typeof this.sceneManager.waterSurface.setBurstFlash == "function" && this.sceneManager.waterSurface.setBurstFlash(null, null, 0), this.sceneManager.distantMountains && typeof this.sceneManager.distantMountains.setBurstFlash == "function" && this.sceneManager.distantMountains.setBurstFlash(null, 0), this.sceneManager.skyDome && typeof this.sceneManager.skyDome.setBurstFlash == "function" && this.sceneManager.skyDome.setBurstFlash(null, null, 0);
	}
	getDroneLight() {
		if (!this.droneSystem || typeof this.droneSystem.getLuminousCentroid != "function") return null;
		let e = this.droneSystem.getLuminousCentroid();
		return !e || e.intensity <= .01 ? null : {
			position: e.position,
			color: e.color,
			intensity: e.intensity,
			radius: e.radius,
			weight: e.intensity
		};
	}
}, Et = class {
	constructor() {
		this.handlers = /* @__PURE__ */ new Map(), this.initializeDefaultHandlers();
	}
	register(e, t) {
		this.handlers.set(e, t);
	}
	dispatch(e, t) {
		let n = this.handlers.get(e.type);
		n ? n(e, t) : console.warn(`[ShowEventDispatcher] Unknown event type: ${e.type}`);
	}
	initializeDefaultHandlers() {
		this.register("single", (e, t) => {
			let n = e.effectOverrides;
			(e.instantBurst !== void 0 || e.shellSize !== void 0 || e.starLifeMultiplier !== void 0 || e.shapeType !== void 0 || e.dynamicsType !== void 0 || e.pistil !== void 0 || e.effects !== void 0 || e.strobe !== void 0 || e["white-strobe"] !== void 0 || e["glitter-strobe"] !== void 0 || e.crackle !== void 0 || e.ghost !== void 0 || e["ghost-flare"] !== void 0 || e.ghostFlare !== void 0 || e.flow !== void 0 || e.crossette !== void 0 || e.noTrail !== void 0 || e["no-trail"] !== void 0 || e.noBurst !== void 0 || e["no-burst"] !== void 0 || e["sparkle-apex"] !== void 0 || e["burst-smoke"] !== void 0 || e.burstSmoke !== void 0 || e["apex-hang"] !== void 0 || e.apexHang !== void 0 || e["slow-burst"] !== void 0 || e.slowBurst !== void 0 || e.cometTrail !== void 0 || e.stages !== void 0 || e.nestingMode !== void 0 || e.multiNested !== void 0 || e.secondBurst !== void 0 || e.secondBurstEnabled !== void 0 || e.textWord !== void 0 || e.textScale !== void 0 || e.letterSpacing !== void 0 || e.tiltAngle !== void 0) && (n = { ...n || {} }, e.instantBurst !== void 0 && (n.instantBurst = e.instantBurst), e.shellSize !== void 0 && (n.shellSize = e.shellSize), e.starLifeMultiplier !== void 0 && (n.starLifeMultiplier = e.starLifeMultiplier), e.shapeType !== void 0 && (n.shapeType = e.shapeType), e.textWord !== void 0 && (n.textWord = e.textWord), e.textScale !== void 0 && (n.textScale = e.textScale), e.letterSpacing !== void 0 && (n.letterSpacing = e.letterSpacing), e.tiltAngle !== void 0 && (n.tiltAngle = e.tiltAngle), e.dynamicsType !== void 0 && (n.dynamicsType = e.dynamicsType), e.pistil !== void 0 && (n.pistil = e.pistil), e.effects !== void 0 && (n.effects = e.effects), e.strobe !== void 0 && (n.strobe = e.strobe), e["white-strobe"] !== void 0 && (n["white-strobe"] = e["white-strobe"]), e["glitter-strobe"] !== void 0 && (n["glitter-strobe"] = e["glitter-strobe"]), e.crackle !== void 0 && (n.crackle = e.crackle), e.ghost !== void 0 && (n.ghost = e.ghost), e["ghost-flare"] !== void 0 && (n["ghost-flare"] = e["ghost-flare"]), e.ghostFlare !== void 0 && (n["ghost-flare"] = e.ghostFlare), e.flow !== void 0 && (n.flow = e.flow), e.noTrail !== void 0 && (n.noTrail = e.noTrail), e["no-trail"] !== void 0 && (n.noTrail = e["no-trail"]), e["no-burst"] !== void 0 && (n.noBurst = e["no-burst"]), e.noBurst !== void 0 && (n.noBurst = e.noBurst), e.crossette !== void 0 && (n.crossette = e.crossette), e["sparkle-apex"] !== void 0 && (n["sparkle-apex"] = e["sparkle-apex"]), e["burst-smoke"] !== void 0 && (n["burst-smoke"] = e["burst-smoke"]), e.burstSmoke !== void 0 && (n["burst-smoke"] = e.burstSmoke), e["apex-hang"] !== void 0 && (n["apex-hang"] = e["apex-hang"]), e.apexHang !== void 0 && (n["apex-hang"] = e.apexHang), e["slow-burst"] !== void 0 && (n["slow-burst"] = e["slow-burst"]), e.slowBurst !== void 0 && (n["slow-burst"] = e.slowBurst), e.slow_burst !== void 0 && (n["slow-burst"] = e.slow_burst), e.stages !== void 0 && (n.stages = e.stages), e.nestingMode !== void 0 && (n.nestingMode = e.nestingMode), e.multiNested !== void 0 && (n.multiNested = e.multiNested), e.secondBurst !== void 0 && (n.secondBurst = e.secondBurst), e.secondBurstEnabled !== void 0 && (n.secondBurstEnabled = e.secondBurstEnabled), e.cometTrail !== void 0 && (e.cometTrail === "none" ? (n.launchTrail = !1, n.thickTrail = !1, n.thinTrail = !1, n.instantBurst = !0) : e.cometTrail === "thick" ? (n.launchTrail = !0, n.thickTrail = !0, n.thinTrail = !1) : e.cometTrail === "thin" ? (n.launchTrail = !0, n.thickTrail = !1, n.thinTrail = !0, n.detachedTrail = !1) : e.cometTrail === "detached" || e.cometTrail === "detached-trail" ? (n.launchTrail = !0, n.thickTrail = !1, n.thinTrail = !1, n.detachedTrail = !0, n.cometTrail = "detached") : e.cometTrail === "smoke" || e.cometTrail === "smoke_trail" ? (n.launchTrail = !1, n.thickTrail = !1, n.thinTrail = !1, n.detachedTrail = !1, n.flightSmoke = !0, n.instantBurst = !1, n.cometTrail = "smoke") : e.cometTrail === "normal" ? (n.launchTrail = !0, n.thickTrail = !1, n.thinTrail = !1, n.detachedTrail = !1) : e.cometTrail === "ascent-bursts" && (n.launchTrail = !0, n.thickTrail = !1, n.thinTrail = !1, n.ascentBursts = !0, n.ascentSubShellType = e.ascentSubShellType || "random", n.ascentBurstCount = e.ascentBurstCount ? parseInt(e.ascentBurstCount, 10) : 4)), e.ascentSubShellType !== void 0 && (n.ascentSubShellType = e.ascentSubShellType), e.ascentBurstCount !== void 0 && (n.ascentBurstCount = parseInt(e.ascentBurstCount, 10)), (e.sound || e.launchSound || e.burstSound || e.crackleSound || e.soundVolume !== void 0) && (n.sound = {
				launch: e.sound?.launch || e.launchSound || void 0,
				burst: e.sound?.burst || e.burstSound || void 0,
				crackle: e.sound?.crackle || e.crackleSound || void 0,
				volumeMultiplier: e.sound?.volumeMultiplier === void 0 ? e.soundVolume === void 0 ? void 0 : e.soundVolume : e.sound.volumeMultiplier,
				pitchMultiplier: e.sound?.pitchMultiplier
			})), (e.preset && (e.preset.type === "comet_cluster" || e.preset.type === "comet" || e.preset.type?.startsWith("comet")) || typeof e.preset == "string" && (e.preset === "comet" || e.preset.startsWith("comet_") || e.preset.startsWith("comet"))) && t.sequencer && t.sequencer.cometSystem ? t.sequencer.cometSystem.launchRandom(e.preset, {
				ratioX: e.ratioX,
				ratioY: e.ratioY,
				ratioZ: e.ratioZ,
				sectorId: e.sectorId,
				color: e.color,
				effectOverrides: n
			}) : t.fireworkSystem && t.fireworkSystem.launchRandom(e.preset, {
				ratioX: e.ratioX,
				ratioY: e.ratioY,
				ratioZ: e.ratioZ,
				sectorId: e.sectorId,
				color: e.color,
				effectOverrides: n
			});
		}), this.register("sequence", (e, t) => {
			t.sequencer && t.sequencer.playPattern(e.pattern, e);
		}), this.register("cometsequence", (e, t) => {
			t.sequencer && t.sequencer.playCometSequence(e.pattern, e);
		}), this.register("finale", (e, t) => {
			t.sequencer && t.sequencer.playFinale(e.totalShells, e.duration);
		}), this.register("audio", () => {}), this.register("droneshow", () => {});
	}
}, $ = {
	SHAPE: "shape",
	DYNAMICS: "dynamics",
	OPTICAL_EFFECT: "effect",
	PRESET: "preset",
	PATTERN: "pattern"
}, Dt = {
	standard: {
		name: "Peony",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/standard.mp4",
		tags: ["Spherical Spread", "Clean Dissolve"],
		summary: "Standard spherical burst with smooth radial expansion and clean fade out."
	},
	"crysanthemum-trail": {
		name: "Chrysanthemum Trail",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/crysanthemum-trail.mp4",
		tags: ["Gold Trails", "Sparkling Tail"],
		summary: "Expanding stars leave dense glowing particle trails behind them."
	},
	"crysanthemum-smoke": {
		name: "Chrysanthemum Smoke",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/crysanthemum-smoke.mp4",
		tags: ["Smoke Trails", "Volumetric Glow"],
		summary: "Burst stars leave dense smoky trail ribbons across the sky."
	},
	"crysanthemum-spiral": {
		name: "Chrysanthemum Spiral",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/crysanthemum-spiral.mp4",
		tags: ["Vortex Rotation", "Spiral Burst"],
		summary: "Stars spiral outwards in a high-speed rotational swirl."
	},
	"crysanthemum-spiral-v2": {
		name: "Chrysanthemum Spiral V2",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/crysanthemum-spiral-v2.mp4",
		tags: ["Dual Vortex", "Dense Trails"],
		summary: "Enhanced helical vortex with high density spinning particle streamers."
	},
	crysanthemum_discrete_trail: {
		name: "Chrysanthemum Discrete Trail",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/crysanthemum_discrete_trail.mp4",
		tags: [
			"Curved Arc Trajectory",
			"Discrete Trails",
			"Decelerating Velocity"
		],
		summary: "Continuous gravity and decelerating radial velocity trace graceful curved trails with long sporadic droplet sparks."
	},
	"crysanthemum-discrete-trail": {
		name: "Chrysanthemum Discrete Trail",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/crysanthemum_discrete_trail.mp4",
		tags: [
			"Curved Arc Trajectory",
			"Discrete Trails",
			"Decelerating Velocity"
		],
		summary: "Continuous gravity and decelerating radial velocity trace graceful curved trails with long sporadic droplet sparks."
	},
	sphere_rings_wave: {
		name: "Sphere Rings Staggered Wave",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/sphere_rings_wave.mp4",
		tags: [
			"Equator to Poles",
			"Sequential Wave",
			"Stealth Delayed Flash"
		],
		summary: "Staggered outward ring ignition wave starting at the equator and cascading toward the polar latitude rings."
	},
	"sphere-rings-wave": {
		name: "Sphere Rings Staggered Wave",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/sphere_rings_wave.mp4",
		tags: [
			"Equator to Poles",
			"Sequential Wave",
			"Stealth Delayed Flash"
		],
		summary: "Staggered outward ring ignition wave starting at the equator and cascading toward the polar latitude rings."
	},
	willow: {
		name: "Willow",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/willow.mp4",
		tags: ["Heavy Gravity", "Long Gold Droop"],
		summary: "Long-lasting glowing trails that droop gracefully toward the ground."
	},
	horsetail: {
		name: "Horsetail Waterfall",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/horsetail.mp4",
		tags: [
			"Waterfall Drop",
			"Golden Streamers",
			"Vertical Cascade"
		],
		summary: "Soft break burst where heavy golden embers cascade vertically downward like a shining waterfall."
	},
	crossette: {
		name: "Crossette",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/crossette.mp4",
		tags: ["Star Split", "Cross Pattern"],
		summary: "Each burst comet breaks into four perpendicular splitting stars."
	},
	"ghost-kamuro": {
		name: "Ghost Kamuro",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/ghost-kamuro.mp4",
		tags: ["Color Morph", "Long Canopy"],
		summary: "Dense gold canopy that transforms smoothly into bright contrasting colors."
	},
	"falling-leaves": {
		name: "Falling Leaves",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/falling-leaves.mp4",
		tags: ["Gentle Sway", "Slow Drift"],
		summary: "Glowing embers sway gently side-to-side while floating downward."
	},
	"falling-comets": {
		name: "Falling Comets",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/falling-comets.mp4",
		tags: ["Meteor Stream", "Directional Drop"],
		summary: "Bright meteoric stars drop straight down leaving thick trail lines."
	},
	"falling-comets-glitter": {
		name: "Falling Comets Glitter",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/falling-comets-glitter.mp4",
		tags: ["Meteor Stream", "Gold Glitter"],
		summary: "Falling comet trails accompanied by sparkling gold glitter micro-sparks."
	},
	snow: {
		name: "Snow Flurry",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/snow.mp4",
		tags: ["Soft Drift", "Turbulent Scatter"],
		summary: "Delicate light particles drifting randomly like fluttering snow."
	},
	wave: {
		name: "Wave",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/wave.mp4",
		tags: ["Sinusoidal Motion", "Rippling Spread"],
		summary: "Particles oscillate in wave patterns during outward expansion."
	},
	"galaxy-spin": {
		name: "Galaxy Spin",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/galaxy-spin.mp4",
		tags: ["Orbital Velocity", "Spiral Arms"],
		summary: "Pinwheel burst with high rotational inertia forming spinning arms."
	},
	"bouquet-comet": {
		name: "Bouquet Comet",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/bouquet-comet.mp4",
		tags: ["Multi Comet", "Upward Thrusters"],
		summary: "Cluster of thick comet tails rising together in a fountain spray."
	},
	"comet-ring": {
		name: "Comet Ring",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/comet-ring.mp4",
		tags: ["Planar Ring", "Comet Streamers"],
		summary: "Expanding flat circular ring composed of thick trailing comets."
	},
	sparking: {
		name: "Sparking",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/sparking.mp4",
		tags: ["Electric Flashes", "Glitter Sparks"],
		summary: "Stars emit intermittent rapid electrical sparks along their path."
	},
	"sparking-v2": {
		name: "Sparking V2",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/sparking-v2.mp4",
		tags: ["Dense Sparks", "Golden Crackle"],
		summary: "High-frequency shimmering spark cloud surrounding the burst perimeter."
	},
	"swimming-star": {
		name: "Swimming Star",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/swimming-star.mp4",
		tags: ["Snake Motion", "Erratic Path"],
		summary: "Stars dart unpredictably in squiggly serpent paths across the sky."
	},
	"double-helix": {
		name: "Double Helix",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/double-helix.mp4",
		tags: ["Twin Spirals", "Intertwined Strands"],
		summary: "Two opposing spiral arms intertwine into a rotating 3D DNA helix."
	},
	flow: {
		name: "Flow",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/flow.mp4",
		tags: ["Smooth Stream", "Continuous Motion"],
		summary: "Continuous fluid stream of stars flowing along directional vectors."
	},
	"sparkle-trail": {
		name: "Sparkle Trail",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/sparkle-trail.mp4",
		tags: ["Thin Trail", "Crisp Streak"],
		summary: "Sub-comet stars travel with slender crisp trails and clean contrast."
	},
	"sparkling-branch-comet": {
		name: "Sparkling Branch Comet",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/sparkle-trail.mp4",
		tags: ["Branch Comet", "Apex Sparkle"],
		summary: "Branching sub-comets streaming outwards with synchronized apex sparkling."
	},
	"tadpole-spiral": {
		name: "Tadpole Swimming Spiral",
		category: $.DYNAMICS,
		videoUrl: "previews/dynamics/tadpole-spiral.mp4",
		tags: ["Corkscrew Spiral", "Accelerating Wiggle"],
		summary: "Comet star ascends with a widening corkscrew spiral and accelerates into erratic wriggles."
	},
	sphere: {
		name: "Sphere",
		category: $.SHAPE,
		videoUrl: "previews/shapes/sphere.mp4",
		tags: ["Isotropic 3D", "Classic Shell"],
		summary: "Uniform 360-degree spherical explosion expanding in all directions."
	},
	sphere_uniform: {
		name: "Sphere Uniform",
		category: $.SHAPE,
		videoUrl: "previews/shapes/sphere_uniform.mp4",
		tags: ["Fibonacci Lattice", "Equidistant Spherical Distribution"],
		summary: "Mathematically uniform spherical particle distribution based on Fibonacci spiral lattice."
	},
	"sphere-uniform": {
		name: "Sphere Uniform",
		category: $.SHAPE,
		videoUrl: "previews/shapes/sphere_uniform.mp4",
		tags: ["Fibonacci Lattice", "Equidistant Spherical Distribution"],
		summary: "Mathematically uniform spherical particle distribution based on Fibonacci spiral lattice."
	},
	"sparkling-branches": {
		name: "Sparkling Branches",
		category: $.SHAPE,
		videoUrl: "previews/shapes/sparkling-branches.mp4",
		tags: ["Multi Branch", "Directional Beams"],
		summary: "Burst partitions into four to five directional sub-comet star clusters."
	},
	ring: {
		name: "Ring",
		category: $.SHAPE,
		videoUrl: "previews/shapes/ring.mp4",
		tags: ["Planar Circle", "Saturn Ring"],
		summary: "Planar circular ring of stars bursting along a 2D plane in 3D space."
	},
	heart: {
		name: "Heart",
		category: $.SHAPE,
		videoUrl: "previews/shapes/heart.mp4",
		tags: ["Cardioid Shape", "Romantic Form"],
		summary: "Crisp heart contour shape expanding cleanly with symmetry."
	},
	star: {
		name: "Star",
		category: $.SHAPE,
		videoUrl: "previews/shapes/star.mp4",
		tags: ["Five Point Star", "Geometric Silhouette"],
		summary: "Five-pointed geometric star bursting with sharp angular vertices."
	},
	flower: {
		name: "Flower",
		category: $.SHAPE,
		videoUrl: "previews/shapes/flower.mp4",
		tags: ["Petal Cluster", "Flora Contour"],
		summary: "Multi-lobed floral pattern with distinct petal clusters."
	},
	galaxy: {
		name: "Galaxy",
		category: $.SHAPE,
		videoUrl: "previews/shapes/galaxy.mp4",
		tags: ["Spiral Arms", "Core Disk"],
		summary: "Cosmic spiral disk with prominent galactic arms and dense core."
	},
	smiley: {
		name: "Smiley Face",
		category: $.SHAPE,
		videoUrl: "previews/shapes/smiley.mp4",
		tags: ["Iconic Face", "Pattern Burst"],
		summary: "Curved smile and eye dots formed by spatial particle distribution."
	},
	fish: {
		name: "Fish",
		category: $.SHAPE,
		videoUrl: "previews/shapes/fish.mp4",
		tags: ["Marine Outline", "Tail Fin"],
		summary: "Aquatic silhouette featuring a curved body and distinct tail fin."
	},
	cat: {
		name: "Cat",
		category: $.SHAPE,
		videoUrl: "previews/shapes/cat.mp4",
		tags: ["Cat Silhouette", "Ear Outlines"],
		summary: "Charming feline outline with distinct pointed ear tips."
	},
	lightning: {
		name: "Lightning",
		category: $.SHAPE,
		videoUrl: "previews/shapes/lightning.mp4",
		tags: ["Zigzag Bolt", "Angular Flash"],
		summary: "Sharp zigzag lightning bolt discharge through the atmosphere."
	},
	oval: {
		name: "Oval",
		category: $.SHAPE,
		videoUrl: "previews/shapes/oval.mp4",
		tags: ["Elliptical Spread", "Egg Contour"],
		summary: "Stretched elliptical spatial distribution expanding outward."
	},
	egg: {
		name: "Egg Shell",
		category: $.SHAPE,
		videoUrl: "previews/shapes/egg.mp4",
		tags: [
			"Ovoid Contour",
			"Hollow Shell",
			"Surface Distribution"
		],
		summary: "Slightly elongated ovoid shape with particles concentrated strictly on the outer crust."
	},
	sphere_rings: {
		name: "Sphere Latitude Rings",
		category: $.SHAPE,
		videoUrl: "previews/shapes/sphere_rings.mp4",
		tags: [
			"Latitude Rings",
			"Spherical Bands",
			"Parallel Circles"
		],
		summary: "Parallel circular latitude rings distributed symmetrically across a spherical surface."
	},
	"sphere-rings": {
		name: "Sphere Latitude Rings",
		category: $.SHAPE,
		videoUrl: "previews/shapes/sphere_rings.mp4",
		tags: [
			"Latitude Rings",
			"Spherical Bands",
			"Parallel Circles"
		],
		summary: "Parallel circular latitude rings distributed symmetrically across a spherical surface."
	},
	"upward-spray": {
		name: "Upward Spray",
		category: $.SHAPE,
		videoUrl: "previews/shapes/upward-spray.mp4",
		tags: ["Fan Spray", "Mineshot Burst"],
		summary: "Upward angled fan dispersion resembling a ground mine cannon."
	},
	"half-flash": {
		name: "Half Flash",
		category: $.SHAPE,
		videoUrl: "previews/shapes/half-flash.mp4",
		tags: ["Hemisphere Split", "Dual Tone"],
		summary: "Two hemisphere zones with contrasting particle characteristics."
	},
	"split-flash": {
		name: "Split Flash",
		category: $.SHAPE,
		videoUrl: "previews/shapes/split-flash.mp4",
		tags: ["Quadrant Split", "Alternating Sectors"],
		summary: "Geometric quadrants bursting in alternating directional flashes."
	},
	text_word: {
		name: "Text Word",
		category: $.SHAPE,
		videoUrl: "previews/shapes/text_word.mp4",
		tags: [
			"Alphabet Glyphs",
			"Typography Pattern",
			"Custom Text"
		],
		summary: "Planar typography layout projecting glowing text and alphabet characters into the sky."
	},
	strobe: {
		name: "Strobe",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/strobe.mp4",
		tags: ["High Frequency Pulse", "Flicker"],
		summary: "Rapid rhythmic flashing of stars creating a pulsing strobing halo."
	},
	"white-strobe": {
		name: "White Strobe",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/white-strobe.mp4",
		tags: ["Brilliant White", "Intense Pulse"],
		summary: "High-intensity pure white flashes strobing against dark sky."
	},
	"glitter-strobe": {
		name: "Glitter Strobe",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/glitter-strobe.mp4",
		tags: ["Twinkle Stars", "Micro Shimmer"],
		summary: "Subtle twinkling shimmer of gold and diamond glitter stars."
	},
	crackle: {
		name: "Crackle (Dragon Eggs)",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/crackle.mp4",
		tags: ["Popping Sparks", "Delayed Crackle"],
		summary: "Delayed secondary micro-explosions producing loud pops and bright flashes."
	},
	ghost: {
		name: "Ghost Shell",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/ghost.mp4",
		tags: ["Color Transition", "Delayed Reveal"],
		summary: "Stars travel invisible before suddenly igniting into vibrant colors."
	},
	"ghost-flare": {
		name: "Ghost Flare",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/ghost-flare.mp4",
		tags: ["Sudden Ignition", "Bright Surge"],
		summary: "Terminal flare surge where stars intensify in brightness before fading."
	},
	pistil: {
		name: "Pistil Inner Core",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/pistil.mp4",
		tags: ["Dual Shell", "Inner Core Burst"],
		summary: "Compact inner core burst inside a larger outer shell canopy."
	},
	"sparkle-apex": {
		name: "Sparkle Apex Flash",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/sparkle-apex.mp4",
		tags: ["Apex Flash", "Sparkle Flash"],
		summary: "Bright synchronized sparkling flash at the apex and decay point of stars."
	},
	"erratic-dart": {
		name: "Erratic Darting",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/erratic-dart.mp4",
		tags: ["Sudden Deflection", "Bright Streak"],
		summary: "Stars suddenly accelerate and dart erratically near burnout drawing luminous streaks."
	},
	"breathing-pulse": {
		name: "Breathing Pulse",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/breathing-pulse.mp4",
		tags: [
			"Harmonic Pulse",
			"Smooth Heartbeat",
			"Radiant Core"
		],
		summary: "Low-frequency sinusoidal breathing modulation undulating smoothly between soft warm embers and incandescent glowing peaks."
	},
	"diamond-scintillation": {
		name: "Diamond Scintillation",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/diamond-scintillation.mp4",
		tags: [
			"Prism Dispersion",
			"Jewel Sparkle",
			"Specular Flash"
		],
		summary: "High-frequency multi-chromatic jewel dispersion with brilliant specular flashes simulating facet reflections."
	},
	"slow-burst": {
		name: "Slow Burst",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/slow-burst.mp4",
		tags: [
			"Gentle Expansion",
			"Snow Drift",
			"Soft Floating"
		],
		summary: "Soft, decelerated radial expansion where stars float and sway organically like falling snow."
	},
	slow_burst: {
		name: "Slow Burst",
		category: $.OPTICAL_EFFECT,
		videoUrl: "previews/effects/slow-burst.mp4",
		tags: [
			"Gentle Expansion",
			"Snow Drift",
			"Soft Floating"
		],
		summary: "Soft, decelerated radial expansion where stars float and sway organically like falling snow."
	},
	strobe_breathing_pulse: {
		name: "Breathing Pulse Shell",
		category: $.PRESET,
		videoUrl: "previews/presets/strobe-breathing-pulse.mp4",
		tags: [
			"Harmonic Pulse",
			"Breathing Cycle",
			"Pink Hot Core"
		],
		summary: "Spherical firework bursting into glowing stars that rhythmically breathe in and out in smooth harmonic waves."
	},
	glitter_diamond_scintillation: {
		name: "Diamond Scintillation Shell",
		category: $.PRESET,
		videoUrl: "previews/presets/glitter-diamond-scintillation.mp4",
		tags: [
			"Diamond Sparkle",
			"Multi-Chromatic",
			"Jewel Dispersion"
		],
		summary: "Pure diamond white core dispersing into sparkling jewel facets with brilliant multi-colored specular flares."
	},
	"sparkling-comet-branches": {
		name: "Sparkling Comet Multi Branch",
		category: $.PRESET,
		videoUrl: "previews/presets/sparkling-comet-branches.mp4",
		tags: ["Multi Branch", "Apex Sparkle"],
		summary: "Shell explodes into four to five sub-comet branches with sparkling flashes at the apex."
	},
	comet_tadpole_burst: {
		name: "Comet Tadpole Burst",
		category: $.PRESET,
		videoUrl: "previews/presets/comet-tadpole-burst.mp4",
		tags: ["Tadpole Swim", "Apex Flurry Burst"],
		summary: "Bulbous star with short thick trail swims upward in a widening corkscrew spiral and erupts into a flurry of sparks near apex."
	},
	sphere_erratic_dart: {
		name: "Sphere Erratic Dart",
		category: $.PRESET,
		videoUrl: "previews/presets/sphere-erratic-dart.mp4",
		tags: ["Sphere Burst", "Erratic Darting"],
		summary: "Symmetrical spherical burst whose stars suddenly deflect erratically in random directions drawing vivid streak lines near burnout."
	},
	crysanthemum_uniform_sphere: {
		name: "Chrysanthemum Uniform Sphere",
		category: $.PRESET,
		videoUrl: "previews/presets/crysanthemum_uniform_sphere.mp4",
		tags: [
			"Uniform Sphere",
			"Curved Streamers",
			"Discrete Trails"
		],
		summary: "Perfect spherical burst whose stars curve gracefully under continuous gravity and decaying velocity, leaving long sporadic droplet trails."
	},
	"crysanthemum-uniform-sphere": {
		name: "Chrysanthemum Uniform Sphere",
		category: $.PRESET,
		videoUrl: "previews/presets/crysanthemum_uniform_sphere.mp4",
		tags: [
			"Uniform Sphere",
			"Curved Streamers",
			"Discrete Trails"
		],
		summary: "Perfect spherical burst whose stars curve gracefully under continuous gravity and decaying velocity, leaving long sporadic droplet trails."
	},
	egg_crysanthemum: {
		name: "Egg Chrysanthemum",
		category: $.PRESET,
		videoUrl: "previews/presets/egg_crysanthemum.mp4",
		tags: [
			"Egg Shell",
			"Hollow Crust",
			"Trailing Stars"
		],
		summary: "Ovoid outer-crust shell burst leaving graceful glowing trails from the egg contour."
	},
	"egg-crysanthemum": {
		name: "Egg Chrysanthemum",
		category: $.PRESET,
		videoUrl: "previews/presets/egg_crysanthemum.mp4",
		tags: [
			"Egg Shell",
			"Hollow Crust",
			"Trailing Stars"
		],
		summary: "Ovoid outer-crust shell burst leaving graceful glowing trails from the egg contour."
	},
	crysanthemum_sphere_rings: {
		name: "Chrysanthemum Sphere Rings",
		category: $.PRESET,
		videoUrl: "previews/presets/crysanthemum_sphere_rings.mp4",
		tags: [
			"Sphere Rings",
			"Latitude Bands",
			"Trailing Stars"
		],
		summary: "Expanding spherical firework whose stars form distinct glowing circular latitude bands."
	},
	"crysanthemum-sphere-rings": {
		name: "Chrysanthemum Sphere Rings",
		category: $.PRESET,
		videoUrl: "previews/presets/crysanthemum_sphere_rings.mp4",
		tags: [
			"Sphere Rings",
			"Latitude Bands",
			"Trailing Stars"
		],
		summary: "Expanding spherical firework whose stars form distinct glowing circular latitude bands."
	},
	sphere_rings_cascade: {
		name: "Sphere Rings Cascade",
		category: $.PRESET,
		videoUrl: "previews/presets/sphere_rings_cascade.mp4",
		tags: [
			"Sphere Rings",
			"Cascading Wave",
			"Equator to Poles"
		],
		summary: "Equator latitude ring ignites first followed in cascading waves by temperate and polar rings."
	},
	"sphere-rings-cascade": {
		name: "Sphere Rings Cascade",
		category: $.PRESET,
		videoUrl: "previews/presets/sphere_rings_cascade.mp4",
		tags: [
			"Sphere Rings",
			"Cascading Wave",
			"Equator to Poles"
		],
		summary: "Equator latitude ring ignites first followed in cascading waves by temperate and polar rings."
	},
	sphere_rings_strobe: {
		name: "Sphere Rings Synchronous Strobe",
		category: $.PRESET,
		videoUrl: "previews/presets/sphere_rings_strobe.mp4",
		tags: [
			"Sphere Rings",
			"Harmonic Strobe",
			"Synchronized Rings"
		],
		summary: "Parallel latitude rings pulsing in synchronized phase-locked harmonic strobing flashes."
	},
	"sphere-rings-strobe": {
		name: "Sphere Rings Synchronous Strobe",
		category: $.PRESET,
		videoUrl: "previews/presets/sphere_rings_strobe.mp4",
		tags: [
			"Sphere Rings",
			"Harmonic Strobe",
			"Synchronized Rings"
		],
		summary: "Parallel latitude rings pulsing in synchronized phase-locked harmonic strobing flashes."
	},
	horsetail_waterfall: {
		name: "Horsetail Waterfall",
		category: $.PRESET,
		videoUrl: "previews/presets/horsetail_waterfall.mp4",
		tags: [
			"Horsetail",
			"Waterfall Cascade",
			"Gold Embers"
		],
		summary: "Soft break shell releasing an umbrella of golden embers that plunge vertically like a liquid waterfall."
	},
	"horsetail-waterfall": {
		name: "Horsetail Waterfall",
		category: $.PRESET,
		videoUrl: "previews/presets/horsetail_waterfall.mp4",
		tags: [
			"Horsetail",
			"Waterfall Cascade",
			"Gold Embers"
		],
		summary: "Soft break shell releasing an umbrella of golden embers that plunge vertically like a liquid waterfall."
	},
	random: {
		name: "Random Scattering",
		category: $.PATTERN,
		videoUrl: "previews/patterns/random.mp4",
		tags: ["Scattered Firing", "Random Positions"],
		summary: "Randomized firework shells launching across diverse launch positions and sector arcs."
	},
	sweep: {
		name: "Linear Sweep",
		category: $.PATTERN,
		videoUrl: "previews/patterns/sweep.mp4",
		tags: ["Left to Right", "Directional Wave"],
		summary: "Sequential linear sweep firing smoothly from one side of the barge to the opposite side."
	},
	"sweep-arc": {
		name: "Curved Arc Sweep",
		category: $.PATTERN,
		videoUrl: "previews/patterns/sweep-arc.mp4",
		tags: ["Curved Arc", "Barge Geometry"],
		summary: "Sweeping sequential firing following the curved circular arc geometry of the launch zone."
	},
	"sweep-arc-out": {
		name: "Outward Arc Sweep",
		category: $.PATTERN,
		videoUrl: "previews/patterns/sweep-arc-out.mp4",
		tags: ["Outward Burst", "Expanding Arc"],
		summary: "Outward expanding curved arc firing from inner center positions to perimeter extremes."
	},
	"cascade-slope": {
		name: "Cascade Slope",
		category: $.PATTERN,
		videoUrl: "previews/patterns/cascade-slope.mp4",
		tags: ["Stepped Altitude", "Diagonal Slope"],
		summary: "Stepped altitude sequence creating a continuous ascending or descending diagonal slope of bursts."
	},
	"chasing-scissors": {
		name: "Chasing Scissors",
		category: $.PATTERN,
		videoUrl: "previews/patterns/chasing-scissors.mp4",
		tags: ["Dual Sweep", "Intersecting Beams"],
		summary: "Dual opposing sweeps crossing each other at high velocity resembling opening and closing scissors."
	},
	"waterfall-curtain": {
		name: "Waterfall Curtain",
		category: $.PATTERN,
		videoUrl: "previews/patterns/waterfall-curtain.mp4",
		tags: ["Curtain Wall", "Dense Barrage"],
		summary: "Dense high-density wall of simultaneous and rapid-fire shells creating a glowing curtain."
	},
	"sinusoidal-wave": {
		name: "Sinusoidal Wave",
		category: $.PATTERN,
		videoUrl: "previews/patterns/sinusoidal-wave.mp4",
		tags: ["Harmonic Wave", "Undulating Height"],
		summary: "Harmonic wave firing pattern undulating smoothly between varying burst altitudes."
	},
	"petal-bloom": {
		name: "Petal Bloom",
		category: $.PATTERN,
		videoUrl: "previews/patterns/petal-bloom.mp4",
		tags: ["Radial Expansion", "Flower Bloom"],
		summary: "Rhythmic radial sequence opening outward from center like blooming flower petals."
	},
	"teeter-totter": {
		name: "Teeter Totter",
		category: $.PATTERN,
		videoUrl: "previews/patterns/teeter-totter.mp4",
		tags: ["Alternating Flanks", "Pendulum Rhythm"],
		summary: "Alternating left-right pendulum firing rocking back and forth between opposing flanks."
	},
	"vortex-tunnel": {
		name: "Vortex Tunnel",
		category: $.PATTERN,
		videoUrl: "previews/patterns/vortex-tunnel.mp4",
		tags: ["Rotating Vortex", "Cylindrical Depth"],
		summary: "Rotating vortex trajectory firing creating a three-dimensional spiral tunnel effect."
	},
	"stepping-stones": {
		name: "Stepping Stones",
		category: $.PATTERN,
		videoUrl: "previews/patterns/stepping-stones.mp4",
		tags: ["Rhythmic Beats", "Sector March"],
		summary: "Discrete rhythmic step bursts marching cleanly across launch sectors in synchronized intervals."
	},
	"intertwined-helix": {
		name: "Intertwined Helix",
		category: $.PATTERN,
		videoUrl: "previews/patterns/intertwined-helix.mp4",
		tags: ["DNA Helix", "Dual Spiral"],
		summary: "Dual interlocking spiral comet streams ascending in a synchronized helical twist."
	},
	fan: {
		name: "Symmetrical Fan",
		category: $.PATTERN,
		videoUrl: "previews/patterns/fan.mp4",
		tags: ["Angled Volley", "Wide Horizon"],
		summary: "Wide-angle symmetrical fan volley spanning the entire sky from angled launch tubes."
	},
	"fan-sweep": {
		name: "Fan Sweep",
		category: $.PATTERN,
		videoUrl: "previews/patterns/fan-sweep.mp4",
		tags: ["Angled Sweep", "Panoramic Spray"],
		summary: "Directional panoramic fan sweep spraying angled beams progressively across the horizon."
	},
	"fan-sweep-continuous": {
		name: "Continuous Fan Sweep",
		category: $.PATTERN,
		videoUrl: "previews/patterns/fan-sweep-continuous.mp4",
		tags: ["Rapid Fan", "Continuous Beam"],
		summary: "High-speed continuous barrage of angled fan beams sweeping repeatedly without pause."
	},
	"fan-burst": {
		name: "Fan Burst",
		category: $.PATTERN,
		videoUrl: "previews/patterns/fan-burst.mp4",
		tags: ["Simultaneous Volley", "Instant Fan"],
		summary: "Simultaneous instant fan volley detonating synchronized bursts across wide sector angles."
	},
	crossfire: {
		name: "Crossfire",
		category: $.PATTERN,
		videoUrl: "previews/patterns/crossfire.mp4",
		tags: ["Interlocking Angles", "X-Cross Pattern"],
		summary: "Angled opposing comets fired from opposite sides crossing paths mid-air in an X formation."
	},
	"crossfire-burst": {
		name: "Crossfire Burst",
		category: $.PATTERN,
		videoUrl: "previews/patterns/crossfire-burst.mp4",
		tags: ["Crossing Volleys", "Apex Detonation"],
		summary: "Opposing crossfire beams that simultaneously detonate aerial shell bursts at their intersection apex."
	},
	"v-shape": {
		name: "V-Shape Formation",
		category: $.PATTERN,
		videoUrl: "previews/patterns/v-shape.mp4",
		tags: ["Symmetrical V", "Outward Angles"],
		summary: "Symmetrical V-formation firing outward from center with mirrored launch angles."
	},
	"spiral-helix": {
		name: "Spiral Helix",
		category: $.PATTERN,
		videoUrl: "previews/patterns/spiral-helix.mp4",
		tags: ["Single Column", "Spiral Stream"],
		summary: "Spinning spiral column sequence ascending into the sky with continuous rotational trajectory."
	},
	ripple: {
		name: "Concentric Ripple",
		category: $.PATTERN,
		videoUrl: "previews/patterns/ripple.mp4",
		tags: ["Expanding Rings", "Water Ripple"],
		summary: "Concentric circular sequence expanding outwards from the center barge like water ripples."
	},
	converge: {
		name: "Converge",
		category: $.PATTERN,
		videoUrl: "previews/patterns/converge.mp4",
		tags: ["Inward Focus", "Center Focal Point"],
		summary: "Beams fired inward from perimeter boundaries meeting at a single central focal point."
	},
	diverge: {
		name: "Diverge",
		category: $.PATTERN,
		videoUrl: "previews/patterns/diverge.mp4",
		tags: ["Outward Spread", "Radial Fanout"],
		summary: "Beams fired outward from the center bursting toward outer perimeter boundaries."
	},
	zigzag: {
		name: "Zigzag",
		category: $.PATTERN,
		videoUrl: "previews/patterns/zigzag.mp4",
		tags: ["Alternating Angles", "Dynamic Zigzag"],
		summary: "Dynamic zigzag sequence alternating launch angles and firing directions in rapid succession."
	},
	continuous: {
		name: "Continuous Barrage",
		category: $.PATTERN,
		videoUrl: "previews/patterns/continuous.mp4",
		tags: ["Rapid Fire", "Non-Stop Barrage"],
		summary: "Continuous sustained barrage of shells firing in relentless rapid succession."
	}
};
export { A as AVAILABLE_CHILD_PRESETS, w as AVAILABLE_DYNAMICS, D as AVAILABLE_EFFECT_TAGS, T as AVAILABLE_MODIFIERS, C as AVAILABLE_SHAPES, u as AtmosphereManager, v as BurstEffectProcessor, S as BurstParticleFactory, _ as BurstShapeGenerator, L as COLOR_PALETTES, U as CometEntity, bt as CometSystem, j as DEFAULT_SECOND_BURST_CHILD_CONFIG, M as DEFAULT_SECOND_BURST_CONFIG, Dt as EFFECT_PREVIEW_METADATA, c as EventBus, n as FIREWORK_CONFIG, ze as FireworkSystem, Ye as InstancedCometRenderer, he as InstancedShellRenderer, o as LAUNCH_ZONE_CONFIG, r as LAYER_DEFAULT, i as LAYER_REFLECTION, a as LAYER_WATER, O as PRESET_TEMPLATES, $ as PREVIEW_CATEGORIES, z as ProceduralShellGenerator, ae as ShellEntity, I as ShellPresetFactory, Et as ShowEventDispatcher, Tt as SkyLightReactionSystem, wt as SmokeSystem, f as TEXT_GLYPHS, R as TIER_BUDGETS, E as TIMED_EFFECT_TAGS, ee as TOGGLE_MODIFIER_TAGS, g as TextGlyphAtlas, We as TrailSystem, d as atmosphereManager, k as getTemplateForPreset, l as globalEventBus, h as layoutWord, ne as proceduralShellGenerator, s as renderingConfig, te as resolveFireworkComposition, N as resolveSecondBurstConfig, p as sanitizeText, m as splitCommentIntoWords };
