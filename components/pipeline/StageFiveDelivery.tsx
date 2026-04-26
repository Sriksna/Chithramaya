"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function StageFiveDelivery({ theme }: { theme: "cyber" | "earth" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const isCyber = theme === "cyber";
  const folderColor = isCyber ? "text-stone-300" : "text-stone-800";

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row items-center gap-12 min-h-[40vh] py-20 pb-40">
      <div className="flex-1 space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest opacity-50">Stage 05</div>
        <h3 className="text-3xl sm:text-4xl font-semibold">Final Delivery</h3>
        <p className={`text-lg leading-relaxed ${theme === "cyber" ? "text-zinc-400" : "text-stone-500"}`}>
          Packaged, formatted, and delivered. The overarching campaign folder is injected seamlessly into your digital ecosystem, fully ready to deploy.
        </p>
      </div>
      
      <div className="flex-1 w-full h-64 relative flex items-center justify-center">
        {/* Assets Flying In */}
        <motion.div
           initial={{ opacity: 0, x: -100, y: -50, scale: 1.5, rotate: -20 }}
           animate={isInView ? { opacity: [0, 1, 1, 0], x: 0, y: 0, scale: 0.1, rotate: 0 } : { opacity: 0, x: -100, y: -50, scale: 1.5, rotate: -20 }}
           transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
           className="absolute z-20 w-32 h-24 rounded-lg overflow-hidden ring-1 ring-white/20 shadow-xl pointer-events-none"
        >
          <Image src="/commercial_photo.png" fill alt="Asset 1" className="object-cover" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 100, y: -80, scale: 1.2, rotate: 20 }}
           animate={isInView ? { opacity: [0, 1, 1, 0], x: 0, y: 0, scale: 0.1, rotate: 0 } : { opacity: 0, x: 100, y: -80, scale: 1.2, rotate: 20 }}
           transition={{ duration: 1.4, ease: "easeInOut", delay: 0.1 }}
           className="absolute z-10 w-24 h-24 rounded-lg overflow-hidden ring-1 ring-white/20 shadow-xl pointer-events-none"
        >
          <Image src="/brand_corporate.png" fill alt="Asset 2" className="object-cover" />
        </motion.div>
        
        {/* The Folder */}
        <motion.div
          animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className={`relative z-30 ${folderColor}`}
        >
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
           {/* Success Checkmark appearing after fly-in */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1.4, type: "spring" }}
            className={`absolute -bottom-2 -right-2 bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center text-white shadow-lg`}
          >
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
