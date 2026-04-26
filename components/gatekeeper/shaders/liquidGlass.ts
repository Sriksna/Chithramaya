export const liquidGlassVertex = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const liquidGlassFragment = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform vec3 uColorLeft;
uniform vec3 uColorRight;
uniform float uSplit;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

vec3 sampleWorld(vec2 uv) {
  float edge = smoothstep(uSplit - 0.004, uSplit + 0.004, uv.x);
  return mix(uColorLeft, uColorRight, edge);
}

void main() {
  vec2 frag = gl_FragCoord.xy / uResolution.xy;
  vec2 m = uMouse * 0.5 + 0.5;

  vec2 dir = frag - m;
  float dist = length(dir) + 1e-4;
  vec2 nDir = dir / dist;

  float swirl = sin(uTime * 1.6 + frag.y * 18.0 + frag.x * 6.0) * 0.012;
  float pulse = sin(uTime * 2.2 + dist * 12.0) * 0.01;

  vec2 ripple = nDir * (0.035 / (1.0 + dist * 6.0)) * sin(uTime * 3.0 + dist * 40.0);
  ripple += vec2(swirl, -swirl) * (uMouse.x * 0.6 + uMouse.y * 0.4);

  vec2 liquid = ripple + vec2(
    noise(frag * 22.0 + uTime * 0.35),
    noise(frag * 22.0 - uTime * 0.28)
  ) - 0.5;
  liquid *= 0.018 + pulse;

  vec2 refractUv = frag + liquid;
  vec3 base = sampleWorld(refractUv);

  float ch = 0.0028;
  float r = sampleWorld(refractUv + vec2(ch, 0.0)).r;
  float g = sampleWorld(refractUv).g;
  float b = sampleWorld(refractUv - vec2(ch, 0.0)).b;
  vec3 chroma = vec3(r, g, b);

  float fresnel = pow(1.0 - abs(vUv.x - 0.5) * 2.0, 3.2);
  vec3 highlight = vec3(0.92) * fresnel * 0.22;

  float caustic = smoothstep(0.35, 0.95, sin(uTime * 2.0 + vUv.y * 30.0) * 0.5 + 0.5);
  highlight += vec3(0.08, 0.1, 0.12) * caustic * 0.12;

  vec3 color = mix(base, chroma, 0.55) + highlight;
  float alpha = 0.78 + fresnel * 0.18;

  gl_FragColor = vec4(color, alpha);
}
`;
