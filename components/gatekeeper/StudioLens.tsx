"use client";

import { Canvas } from "@react-three/fiber";
import { memo, useRef } from "react";
import * as THREE from "three";

export type StudioLensProps = {
  theme?: "dark" | "light";
};

function Lens({ theme }: StudioLensProps) {
  const group = useRef<THREE.Group>(null);
  const cylinderColor = theme === "light" ? "#f5f5f4" : "#18181b";

  return (
    <group ref={group} rotation={[0.4, 0.6, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.22, 48, 96]} />
        <meshPhysicalMaterial
          color="#d4d4d8"
          metalness={0.92}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.12}
          envMapIntensity={1.1}
        />
      </mesh>
      <mesh position={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.55, 0.55, 0.12, 64]} />
        <meshPhysicalMaterial
          color={cylinderColor}
          metalness={0.2}
          roughness={0.35}
          transmission={0.35}
          thickness={0.4}
        />
      </mesh>
    </group>
  );
}

function StudioLensInner({ theme = "dark" }: StudioLensProps) {
  const bgColor = theme === "light" ? "#f5f5f4" : "#09090b";
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.2, 3.2], fov: 38 }}
    >
      <color attach="background" args={[bgColor]} />
      <ambientLight intensity={0.35} />
      <spotLight
        position={[3, 4, 2]}
        intensity={1.4}
        angle={0.45}
        penumbra={0.6}
        castShadow={false}
      />
      <pointLight position={[-2, 1, 2]} intensity={0.6} color="#a1a1aa" />
      <Lens theme={theme} />
    </Canvas>
  );
}

export const StudioLens = memo(StudioLensInner);
