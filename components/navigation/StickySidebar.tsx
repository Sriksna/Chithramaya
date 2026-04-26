"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

type Theme = "cyber" | "earth";

type StickySidebarProps = {
  theme: Theme;
};

const SERVICES = [
  { id: "brand", label: "Brand & Corporate" },
  { id: "commercial", label: "Commercial" },
  { id: "podcast", label: "Podcast & Interview" },
  { id: "brand-design", label: "Brand Design (New)" },
  { id: "ad-commercials", label: "Ad Commercials (New)" },
  { id: "pipeline", label: "The Pipeline" },
];

export function StickySidebar({ theme }: StickySidebarProps) {
  const [activeSection, setActiveSection] = useState("brand");

  useEffect(() => {
    const handleScroll = () => {
      // Find the current section in view
      const sections = SERVICES.map((s) => document.getElementById(s.id));
      let currentInfo = "";
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentInfo = section.id;
          }
        }
      });
      if (currentInfo) {
        setActiveSection(currentInfo);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCyber = theme === "cyber";

  const textColor = isCyber ? "text-zinc-500 hover:text-stone-200" : "text-stone-400 hover:text-stone-800";
  const activeColor = isCyber ? "text-rose-400" : "text-stone-800";
  const barColor = isCyber ? "bg-rose-400" : "bg-stone-700";

  return (
    <nav className="sticky top-0 hidden h-screen w-64 flex-col justify-center px-12 lg:flex">
      <div className="flex flex-col gap-6">
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] opacity-40">
          Services
        </div>
        {SERVICES.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <Link
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", `#${s.id}`);
              }}
              className={`group relative flex items-center gap-4 text-sm font-light tracking-wide transition-colors duration-300 ${
                isActive ? activeColor : textColor
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeBar"
                  className={`absolute -left-6 h-[2px] w-4 ${barColor}`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={isActive ? "font-medium" : ""}>{s.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
