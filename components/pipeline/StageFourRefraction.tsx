"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function StageFourRefraction({ theme }: { theme: "cyber" | "earth" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderWidth = useMotionValue(50);

  const clipPath = useTransform(sliderWidth, (val) => `inset(0 ${100 - val}% 0 0)`);
  const leftPos = useTransform(sliderWidth, (val) => `${val}%`);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-12 min-h-[40vh] py-20">
      <div className="flex-1 space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest opacity-50">Stage 04</div>
        <h3 className="text-3xl sm:text-4xl font-semibold">Post-Production</h3>
        <p className={`text-lg leading-relaxed ${theme === "cyber" ? "text-zinc-400" : "text-stone-500"}`}>
          Our meticulous color-grading and retouching process refines the raw capture into a polished, cinematic masterpiece. Drag the lens to reveal the refraction.
        </p>
      </div>
      
      <div className="flex-1 w-full flex justify-center">
        <div ref={containerRef} className="relative h-64 sm:h-96 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-zinc-900">
          
          {/* Base RAW Image */}
          <div className="absolute inset-0 grayscale contrast-75 brightness-75">
            <Image src="/commercial_photo.png" fill alt="Raw Capture" className="object-cover" draggable={false} />
          </div>
          
          {/* Graded Image */}
          <motion.div style={{ clipPath }} className="absolute inset-0 z-10 hue-rotate-[15deg] contrast-125 saturate-150">
            <Image src="/commercial_photo.png" fill alt="Graded Output" className="object-cover" draggable={false} />
          </motion.div>
          
          {/* Draggable Slider Bar */}
          <motion.div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: leftPos }}
          >
            <div className="w-8 h-8 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-lg pointer-events-auto"
              style={{ cursor: "ew-resize" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9L5 12L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 9L19 12L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>

          <input
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            onChange={(e) => sliderWidth.set(Number(e.target.value))}
            className="absolute inset-0 z-30 opacity-0 cursor-ew-resize w-full h-full"
            aria-label="Before/After Slider"
          />
        </div>
      </div>
    </div>
  );
}
