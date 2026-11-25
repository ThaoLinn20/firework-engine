import * as THREE from 'three';
import { renderingConfig } from '../config/rendering.js';

/**
 * Creates a unified pyrotechnic star-head PointsMaterial with:
 * - Sharp white pinhole core (dist < 0.024)
 * - Soft optical halo with Whiteness-Adaptive Optical Falloff (suppressing chalky edges on white stars)
 * - Optional per-particle attributes (aSize, aOpacity) for batched point clouds (FireworkSystem)
 *   or standard material size/opacity for single-star entities (CometEntity)
 *
 * @param {Object} [options]
 * @param {number} [options.size=1.0]
 * @param {number} [options.opacity=1.0]
 * @param {boolean} [options.toneMapped=true]
 * @param {number} [options.edgeSoftness=1.0]
 * @param {boolean} [options.usePerParticleAttributes=false]
 * @returns {{ material: THREE.PointsMaterial, uniforms: { uEdgeSoftness: { value: number } } }}
 */
export function createStarHeadMaterial(options = {}) {
  const {
    size = 1.0,
    opacity = 1.0,
    toneMapped = true,
    edgeSoftness = renderingConfig.post?.particleEdgeSoftness ?? 0.75,
    usePerParticleAttributes = false
  } = options;

  const uniforms = {
    uEdgeSoftness: {
      value: edgeSoftness
    }
  };

  const material = new THREE.PointsMaterial({
    size,
    opacity,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uEdgeSoftness = uniforms.uEdgeSoftness;

    if (usePerParticleAttributes) {
      shader.vertexShader = `
        attribute float aSize;
        attribute float aOpacity;
        varying float vOpacity;
      ` + shader.vertexShader.replace(
        '#include <common>',
        `
        #include <common>
        `
      ).replace(
        'gl_PointSize = size;',
        `
        gl_PointSize = aSize;
        vOpacity = aOpacity;
        `
      );
    }

    const opacityVaryingDecl = usePerParticleAttributes ? 'varying float vOpacity;\n' : '';
    const opacityFactor = usePerParticleAttributes ? ' * vOpacity' : '';

    shader.fragmentShader = `
      uniform float uEdgeSoftness;
      ${opacityVaryingDecl}
    ` + shader.fragmentShader.replace(
      '#include <color_fragment>',
      `
      #include <color_fragment>

      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord) * 2.0;
      if (dist > uEdgeSoftness) discard;

      // Whiteness-Adaptive Optical Falloff:
      // Preserves 100% of warm colored halo for chromatic stars,
      // while cleanly suppressing the chalky grey circular fringe on pure white stars.
      float lum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
      float maxC = max(max(diffuseColor.r, diffuseColor.g), diffuseColor.b);
      float minC = min(min(diffuseColor.r, diffuseColor.g), diffuseColor.b);
      float sat = maxC > 0.001 ? (maxC - minC) / maxC : 0.0;
      float whiteness = smoothstep(0.70, 0.98, lum) * (1.0 - smoothstep(0.05, 0.35, sat));
      float edgeDamp = mix(1.0, 0.70, whiteness);

      vec4 stop0 = vec4(1.0, 1.0, 1.0, 1.0);
      vec4 stop1 = vec4(diffuseColor.rgb, 0.34 * edgeDamp);
      vec4 stop2 = vec4(diffuseColor.rgb, 0.16 * edgeDamp);
      vec4 stop3 = vec4(diffuseColor.rgb, 0.0);

      float outerStart = min(0.32, uEdgeSoftness * 0.45);
      vec4 gradientColor;
      if (dist < 0.024) {
          gradientColor = stop0;
      } else if (dist < min(0.125, outerStart)) {
          float t = (dist - 0.024) / max(0.001, min(0.125, outerStart) - 0.024);
          gradientColor = mix(stop0, stop1, t);
      } else if (dist < outerStart) {
          float t = (dist - min(0.125, outerStart)) / max(0.001, outerStart - min(0.125, outerStart));
          gradientColor = mix(stop1, stop2, t);
      } else {
          float t = (dist - outerStart) / max(0.001, uEdgeSoftness - outerStart);
          gradientColor = mix(stop2, stop3, t);
      }

      diffuseColor = vec4(gradientColor.rgb, gradientColor.a * diffuseColor.a${opacityFactor});
      `
    );
  };

  return {
    material,
    uniforms
  };
}
