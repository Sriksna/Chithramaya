"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function StageThreeParallax({ theme }: { theme: "cyber" | "earth" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 80]);

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row-reverse items-center gap-12 min-h-[60vh] py-20">
      <div className="flex-1 space-y-4 relative z-40">
        <div className="text-xs font-bold uppercase tracking-widest opacity-50">Stage 03</div>
        <h3 className="text-3xl sm:text-4xl font-semibold">Execution & Shoot</h3>
        <p className={`text-lg leading-relaxed ${theme === "cyber" ? "text-zinc-400" : "text-stone-500"}`}>
          Lights, camera, precision. The set is meticulously orchestrated, blending high-end gear with artistic intuition to capture raw, authentic moments precisely as planned.
        </p>
      </div>
      
      {/* Mobile Layout - Simple Clean Grid */}
      <div className="flex-1 w-full mt-8 flex sm:hidden flex-col gap-4">
        <div className="w-full h-56 relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
          <Image src="/commercial_photo.png" fill alt="Shoot" className="object-cover" />
        </div>
        <div className="flex gap-4 w-full h-40">
          <div className="flex-1 relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10">
            <Image src="/brand_corporate.png" fill alt="Subject" className="object-cover" />
          </div>
          <div className="flex-1 relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10">
            <Image src="/podcast_interview.png" fill alt="Equipment" className="object-cover" />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Parallax */}
      <div className="flex-1 relative h-[500px] w-full hidden sm:block">
        <motion.div style={{ y: y1 }} className="absolute left-0 top-10 w-2/3 h-64 rounded-xl overflow-hidden shadow-2xl z-10 ring-1 ring-white/10">
          <Image src="/commercial_photo.png" fill alt="Shoot" className="object-cover" />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute right-0 bottom-10 w-1/2 h-56 rounded-xl overflow-hidden shadow-2xl z-20 ring-1 ring-white/10">
          <Image src="/brand_corporate.png" fill alt="Subject" className="object-cover" />
        </motion.div>
        
        <motion.div style={{ y: y3 }} className="absolute left-[15%] top-1/2 w-1/3 h-40 rounded-xl overflow-hidden shadow-xl z-30 opacity-90 blur-[1px] ring-1 ring-white/10">
          <Image src="/podcast_interview.png" fill alt="Equipment" className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
}
