import { ReactNode } from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full ${className}`}>
      {children}
    </div>
  );
}

export function BentoCard({
  title,
  description,
  className,
  children,
  theme = "earth",
  frosted = false,
  id,
}: {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  theme?: "cyber" | "earth";
  frosted?: boolean;
  id?: string;
}) {
  const isCyber = theme === "cyber";

  const baseStyle = frosted
    ? isCyber
      ? "bg-zinc-800/30 backdrop-blur-md border-zinc-700/50 text-white"
      : "bg-white/40 backdrop-blur-md border-white/60 text-stone-900 shadow-[0_8px_32px_0_rgba(100,100,100,0.07)]"
    : isCyber
    ? "bg-zinc-900 border-zinc-800 text-stone-100 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
    : "bg-white border-stone-200 text-stone-900 shadow-sm";

  return (
    <div
      id={id}
      className={`relative row-span-1 rounded-3xl group/bento transition duration-500 overflow-hidden border p-8 flex flex-col justify-end min-h-[16rem] ${baseStyle} ${className}`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover/bento:opacity-90" />
        {children}
      </div>
      <div className="relative z-20 transform transition duration-300 group-hover/bento:-translate-y-1">
        <div className={`font-semibold text-2xl tracking-wide font-sans mb-2 ${frosted ? (isCyber ? "text-stone-300" : "text-stone-700") : "text-white"}`}>
          {title}
        </div>
        {description && (
          <div className={`font-light text-sm leading-relaxed max-w-xs ${frosted ? (isCyber ? "text-stone-400" : "text-stone-500") : "text-stone-200"}`}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
