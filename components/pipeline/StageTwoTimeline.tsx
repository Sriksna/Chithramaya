"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const BRIEF_TEXT = "Our creative directors collaborate iteratively with your marketing teams to forge a crystal-clear technical production roadmap.".split(" ");

export function StageTwoTimeline({ theme }: { theme: "cyber" | "earth" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row items-center gap-12 min-h-[40vh]">
      <div className="flex-1 space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest opacity-50">Stage 02</div>
        <h3 className="text-3xl sm:text-4xl font-semibold">Creative Briefing</h3>
        <p className={`text-lg leading-relaxed ${theme === "cyber" ? "text-zinc-400" : "text-stone-500"}`}>
          We align our creative vision with your business metrics, ensuring every frame we execute serves a distinct purpose in your broader marketing funnel.
        </p>
      </div>
      <div className="flex-1 text-2xl sm:text-4xl leading-tight font-medium">
        {BRIEF_TEXT.map((word, i) => {
          const start = i / BRIEF_TEXT.length;
          const end = start + (1 / BRIEF_TEXT.length);
          // React hook loop is fine here because length is constant
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          return (
            <motion.span key={i} style={{ opacity }} className="inline-block mr-2 mb-2">
              {word}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
