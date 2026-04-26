import { ReactNode } from "react";

export function PipelineContainer({ children, theme }: { children: ReactNode, theme: "cyber" | "earth" }) {
  return (
    <div id="pipeline" className="relative flex flex-col w-full mt-32 min-h-screen">
      <div className="mb-24">
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
          The <span className={theme === "cyber" ? "text-rose-400" : "text-stone-400"}>Pipeline.</span>
        </h2>
        <p className={`max-w-2xl text-lg ${theme === "cyber" ? "text-zinc-400" : "text-stone-500"}`}>
          Our comprehensive end-to-end workflow from initial consultation to final delivery.
        </p>
      </div>
      <div className="flex flex-col gap-32 relative">
        {children}
      </div>
    </div>
  );
}
