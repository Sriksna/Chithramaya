"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { GlassDivider } from "./GlassDivider";
import { KineticText } from "./KineticText";
import { StudioLens } from "./StudioLens";

type Half = "left" | "right";
type ExitTarget = "studio" | "lifestyle";

const spring = { type: "spring" as const, stiffness: 320, damping: 34, mass: 0.85 };
const exitEase = { type: "tween" as const, duration: 0.58, ease: [0.16, 1, 0.3, 1] as const };

export function SplitScreen() {
  const router = useRouter();
  const [hovered, setHovered] = useState<Half | null>(null);
  const [mounted, setMounted] = useState(false);
  const [exitTarget, setExitTarget] = useState<ExitTarget | null>(null);
  const navigatedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const leftWidth =
    exitTarget === "studio"
      ? "100%"
      : exitTarget === "lifestyle"
        ? "0%"
        : hovered === "left"
          ? "55%"
          : hovered === "right"
            ? "45%"
            : "50%";

  const rightWidth =
    exitTarget === "lifestyle"
      ? "100%"
      : exitTarget === "studio"
        ? "0%"
        : hovered === "right"
          ? "55%"
          : hovered === "left"
            ? "45%"
            : "50%";

  const transition = exitTarget ? exitEase : spring;

  const startExit = (target: ExitTarget) => {
    setExitTarget(target);
    setTimeout(() => {
      if (navigatedRef.current) return;
      navigatedRef.current = true;
      router.push(target === "studio" ? "/studio" : "/lifestyle");
    }, 580);
  };

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 flex">
        <motion.button
          type="button"
          aria-label="Enter Chithramaya world"
          className="relative flex h-full flex-col border-0 bg-zinc-950 p-0 text-left outline-none ring-0"
          style={{ willChange: "width, opacity" }}
          initial={false}
          animate={{
            width: leftWidth,
            opacity: exitTarget === "lifestyle" ? 0 : 1,
          }}
          transition={transition}
          onHoverStart={() => setHovered("left")}
          onHoverEnd={() => setHovered((h) => (h === "left" ? null : h))}
          onFocus={() => setHovered("left")}
          onBlur={() => setHovered((h) => (h === "left" ? null : h))}
          onClick={() => startExit("studio")}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,250,250,0.06),transparent_55%)]" />
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-6">
            <motion.div
              animate={{ opacity: exitTarget ? 0 : 1, filter: exitTarget ? "blur(10px)" : "blur(0px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <KineticText
                text="CHITHRAMAYA"
                active={hovered === "left" && !exitTarget}
                className="select-none text-5xl font-extralight tracking-[0.55em] text-stone-100 sm:text-6xl md:text-7xl"
              />
            </motion.div>
            <motion.div
              className="relative h-56 w-56 overflow-hidden rounded-2xl border border-stone-300/60 bg-stone-100/40 shadow-[0_0_0_1px_rgba(0,0,0,0.04)_inset] sm:h-64 sm:w-64"
              animate={{ opacity: exitTarget ? 0 : 1, scale: exitTarget ? 0.94 : 1 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <Image src="/studio_aesthetic.png" alt="Chithramaya Aesthetic" fill className="object-cover" />
            </motion.div>
          </div>
        </motion.button>

        <motion.button
          type="button"
          aria-label="Enter Thalam world"
          className="relative flex h-full flex-col overflow-hidden border-0 bg-stone-100 p-0 text-left outline-none ring-0"
          style={{ willChange: "width, opacity" }}
          initial={false}
          animate={{
            width: rightWidth,
            opacity: exitTarget === "studio" ? 0 : 1,
          }}
          transition={transition}
          onHoverStart={() => setHovered("right")}
          onHoverEnd={() => setHovered((h) => (h === "right" ? null : h))}
          onFocus={() => setHovered("right")}
          onBlur={() => setHovered((h) => (h === "right" ? null : h))}
          onClick={() => startExit("lifestyle")}
        >
          <div className="pointer-events-none absolute inset-0">
            <video
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-3xl"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            >
              <source
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-stone-100/20 to-stone-200/35" />
          </div>
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-6">
            <motion.div
              className="relative h-56 w-56 overflow-hidden rounded-2xl border border-stone-300/60 bg-stone-100/40 shadow-[0_0_0_1px_rgba(0,0,0,0.04)_inset] sm:h-64 sm:w-64"
              animate={{ opacity: exitTarget ? 0 : 1, scale: exitTarget ? 0.94 : 1 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <Image src="/lifestyle_aesthetic.png" alt="Thalam Aesthetic" fill className="object-cover" />
            </motion.div>
            <motion.div
              animate={{ opacity: exitTarget ? 0 : 1, filter: exitTarget ? "blur(10px)" : "blur(0px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <KineticText
                text="THALAM"
                active={hovered === "right" && !exitTarget}
                className="select-none text-5xl font-extralight tracking-[0.35em] text-zinc-900 sm:text-6xl md:text-7xl"
              />
            </motion.div>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {exitTarget ? (
          <motion.div
            key="veil"
            className="pointer-events-none fixed inset-0 z-30 bg-black/0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
        ) : null}
      </AnimatePresence>

      {mounted ? <GlassDivider /> : null}

      <motion.div
        className="pointer-events-none fixed inset-0 z-[25] flex"
        initial={false}
        animate={{
          opacity: exitTarget ? 0 : 1,
        }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex flex-1 items-start justify-center pt-10">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-500">
            Offsite
          </span>
        </div>
        <div className="flex flex-1 items-start justify-center pt-10">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-stone-500">
            Onsite
          </span>
        </div>
      </motion.div>
    </div>
  );
}
