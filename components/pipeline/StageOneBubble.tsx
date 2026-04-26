"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll, motion, MotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function Bubble({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const mesh = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Scale from 1 to 1.3 based on scroll
      setScale(1 + latest * 0.3);
    });
  }, [scrollYProgress]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    // float animation
    mesh.current.position.y = Math.sin(t) * 0.1;
    mesh.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color="#ffffff"
        transmission={1}
        opacity={1}
        metalness={0.1}
        roughness={0.1}
        ior={1.5}
        thickness={2}
        envMapIntensity={1}
      />
    </mesh>
  );
}

export function StageOneBubble({ theme }: { theme: "cyber" | "earth" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row items-center gap-12 min-h-[40vh]">
      <div className="flex-1 space-y-4 z-10 relative">
        <div className="text-xs font-bold uppercase tracking-widest opacity-50">Stage 01</div>
        <h3 className="text-3xl sm:text-4xl font-semibold">Initial Consultation</h3>
        <p className={`text-lg leading-relaxed ${theme === "cyber" ? "text-zinc-400" : "text-stone-500"}`}>
          We begin with an in-depth exploration of your brand identity, target demographics, and the primary objectives of the creative campaign. This is where the core idea takes shape and the creative bubble begins to expand.
        </p>
      </div>
      <div className="flex-1 h-64 md:h-96 relative w-full">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 45 }}
          style={{ pointerEvents: "none" }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} color={theme === "cyber" ? "#fb7185" : "#ffffff"} />
          <Bubble scrollYProgress={scrollYProgress} />
        </Canvas>
      </div>
    </div>
  );
}
