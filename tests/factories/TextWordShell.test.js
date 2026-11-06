import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { ShellPresetFactory } from '../../src/factories/ShellPresetFactory.js';
import { getTemplateForPreset } from '../../src/factories/FireworkCompositionHelper.js';
import { layoutWord } from '../../src/factories/TextGlyphAtlas.js';
import { BurstShapeGenerator } from '../../src/factories/BurstShapeGenerator.js';
import { FireworkSystem } from '../../src/systems/FireworkSystem.js';

describe('Text Word Shell and Glyph Fireworks', () => {
  it('should register text_word in ShellPresetFactory and generate preset', () => {
    const factory = new ShellPresetFactory();
    expect(factory.shapeRegistry.has('text_word')).toBe(true);

    const preset = factory.createPresetByKey('text_word');
    expect(preset).not.toBeNull();
    expect(preset.shellType).toBe('text_word');
    expect(preset.shapeType).toBe('text_word');
    expect(preset.textWord).toBe('HELLO');
    expect(preset.burstSmoke).toBe(false);
    expect(preset.launchSmoke).toBe(false);
  });

  it('should resolve text_word template in FireworkCompositionHelper', () => {
    const template = getTemplateForPreset('text_word');
    expect(template).toBeDefined();
    expect(template.shape).toBe('text_word');
    expect(template.dynamics).toBe('standard');
  });

  it('should layout glyph points correctly from TextGlyphAtlas', () => {
    const points = layoutWord('VIETNAM');
    expect(points.length).toBeGreaterThan(0);
    points.forEach((pt) => {
      expect(pt).toBeInstanceOf(THREE.Vector3);
      expect(Number.isFinite(pt.x)).toBe(true);
      expect(Number.isFinite(pt.y)).toBe(true);
      expect(Number.isFinite(pt.z)).toBe(true);
    });
  });

  it('should calculate burst particle count matching glyph points in FireworkSystem', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera();
    const system = new FireworkSystem(scene, camera);

    const preset = {
      shellType: 'text_word',
      shapeType: 'text_word',
      textWord: 'LIVE'
    };

    const count = system.resolveBurstParticleCount('text_word', 'standard', preset);
    const expectedPoints = layoutWord('LIVE');
    expect(count).toBe(expectedPoints.length);
  });

  it('should generate planar unnormalized directions for text_word shape in BurstShapeGenerator', () => {
    const preset = {
      shellType: 'text_word',
      shapeType: 'text_word',
      textWord: 'A'
    };

    const dir0 = BurstShapeGenerator.direction('text_word', 0, 0, 10, preset);
    expect(dir0).toBeInstanceOf(THREE.Vector3);
    expect(Number.isFinite(dir0.x)).toBe(true);
    expect(Number.isFinite(dir0.y)).toBe(true);
  });
});
