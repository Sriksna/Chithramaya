"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { memo, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { liquidGlassFragment, liquidGlassVertex } from "./shaders/liquidGlass";

const LEFT = new THREE.Color("#09090b");
const RIGHT = new THREE.Color("#f5f5f4");

type GlassMeshProps = {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
};

function GlassMesh({ mouseRef }: GlassMeshProps) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, viewport, camera } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColorLeft: { value: LEFT.clone() },
      uColorRight: { value: RIGHT.clone() },
      uSplit: { value: 0.5 },
    }),
    [],
  );

  useLayoutEffect(() => {
    uniforms.uResolution.value.set(size.width * viewport.dpr, size.height * viewport.dpr);
  }, [size, viewport.dpr, uniforms]);

  useLayoutEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    const mesh = meshRef.current;
    if (!mesh) return;
    const dist = Math.abs(cam.position.z);
    const vFov = (cam.fov * Math.PI) / 180;
    const worldH = 2 * Math.tan(vFov / 2) * dist;
    const worldW = worldH * cam.aspect;
    const stripW = Math.max(worldW * 0.034, 0.07);
    mesh.scale.set(stripW, worldH * 1.02, 1);
  }, [camera, size.height, size.width]);

  useFrame((state) => {
    const m = matRef.current;
    if (!m) return;
    m.uniforms.uTime.value = state.clock.elapsedTime;
    m.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
    m.uniforms.uSplit.value = 0.5;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} raycast={() => null} renderOrder={10}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={matRef}
        transparent
        depthWrite={false}
        depthTest={false}
        uniforms={uniforms}
        vertexShader={liquidGlassVertex}
        fragmentShader={liquidGlassFragment}
        toneMapped={false}
      />
    </mesh>
  );
}

function Scene({ mouseRef }: GlassMeshProps) {
  return <GlassMesh mouseRef={mouseRef} />;
}

function GlassDividerInner() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20"
      aria-hidden
    >
      <Canvas
        style={{ pointerEvents: "none" }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 5], fov: 42, near: 0.01, far: 80 }}
      >
        <Scene mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}

export const GlassDivider = memo(GlassDividerInner);
