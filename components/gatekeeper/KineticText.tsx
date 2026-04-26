"use client";

import { motion, type Variants } from "framer-motion";
import { memo, useMemo } from "react";

type KineticTextProps = {
  text: string;
  active: boolean;
  className?: string;
};

const charVariants: Variants = {
  rest: {
    rotateZ: 0,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 28 },
  },
  dance: (i: number) => ({
    rotateZ: i % 2 === 0 ? 6 : -6,
    y: "-0.16em",
    transition: {
      type: "spring",
      stiffness: 360,
      damping: 22,
      delay: i * 0.012,
    },
  }),
};

function KineticTextInner({ text, active, className }: KineticTextProps) {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <span className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          variants={charVariants}
          initial="rest"
          animate={active ? "dance" : "rest"}
          className="inline-block origin-center will-change-transform"
          style={{ display: char === " " ? "inline-block" : undefined }}
        >
          {char === " " ? "\u00a0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export const KineticText = memo(KineticTextInner);
