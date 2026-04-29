import { StickySidebar } from "@/components/navigation/StickySidebar";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { PipelineContainer } from "@/components/pipeline/PipelineContainer";
import { StageOneBubble } from "@/components/pipeline/StageOneBubble";
import { StageTwoTimeline } from "@/components/pipeline/StageTwoTimeline";
import { StageThreeParallax } from "@/components/pipeline/StageThreeParallax";
import { StageFourRefraction } from "@/components/pipeline/StageFourRefraction";
import { StageFiveDelivery } from "@/components/pipeline/StageFiveDelivery";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Offsite",
  description: "Experience deep focus, pure aesthetic control, and technical perfection completely tuned to elevate your overarching brand identity.",
};

export default function StudioPage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-stone-100 font-sans">
      <StickySidebar theme="cyber" />
      
      <main className="flex-1 px-8 py-24 sm:px-12 lg:px-24 mb-32">
        <div className="mb-24 max-w-3xl pt-10">
          <h1 className="mb-6 text-6xl font-light tracking-tight sm:text-7xl lg:text-8xl">
            Precision <span className="text-rose-400">Offsite.</span>
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400">
            Welcome to the Studio. Experience deep focus, pure aesthetic control, and technical perfection completely tuned to elevate your overarching brand identity.
          </p>
        </div>

        <BentoGrid>
          <BentoCard
            id="brand"
            title="Brand & Corporate"
            description="Executive headshots and comprehensive office coverage that humanizes your corporate identity."
            theme="cyber"
            className="md:col-span-2 md:row-span-2 min-h-[22rem] md:min-h-[28rem]"
          >
            <Image src="/brand_corporate.png" alt="Brand & Corporate" fill className="object-cover opacity-50 mix-blend-overlay" />
          </BentoCard>

          <BentoCard
            id="commercial"
            title="Commercial Photography"
            description="High-impact product and lifestyle visuals aimed at supercharging marketing campaigns."
            theme="cyber"
            className="col-span-1 min-h-[16rem] md:min-h-[auto]"
          >
            <Image src="/commercial_photo.png" alt="Commercial Photo" fill className="object-cover opacity-50 mix-blend-overlay" />
          </BentoCard>

          <BentoCard
            id="podcast"
            title="Podcast & Interview"
            description="Studio Production, Content Media, and Photography Branding perfectly synced."
            theme="cyber"
            className="col-span-1 md:col-span-3 min-h-[20rem] md:min-h-[24rem]"
          >
            <Image src="/podcast_interview.png" alt="Podcast Integration" fill className="object-cover opacity-50 mix-blend-overlay" />
          </BentoCard>

          <BentoCard
            id="brand-design"
            title="Brand Design"
            description="Coming soon: A complete architectural approach to scaling visual identity."
            theme="cyber"
            frosted
            className="col-span-1 md:col-span-2 min-h-[14rem]"
          />

          <BentoCard
            id="ad-commercials"
            title="Ad Commercials"
            description="Coming soon: Moving pictures designed for aggressive user acquisition."
            theme="cyber"
            frosted
            className="col-span-1 min-h-[14rem]"
          />
        </BentoGrid>

        <PipelineContainer theme="cyber">
          <StageOneBubble theme="cyber" />
          <StageTwoTimeline theme="cyber" />
          <StageThreeParallax theme="cyber" />
          <StageFourRefraction theme="cyber" />
          <StageFiveDelivery theme="cyber" />
        </PipelineContainer>
      </main>
    </div>
  );
}
