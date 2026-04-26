import { StickySidebar } from "@/components/navigation/StickySidebar";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { PipelineContainer } from "@/components/pipeline/PipelineContainer";
import { StageOneBubble } from "@/components/pipeline/StageOneBubble";
import { StageTwoTimeline } from "@/components/pipeline/StageTwoTimeline";
import { StageThreeParallax } from "@/components/pipeline/StageThreeParallax";
import { StageFourRefraction } from "@/components/pipeline/StageFourRefraction";
import { StageFiveDelivery } from "@/components/pipeline/StageFiveDelivery";
import Image from "next/image";

export default function LifestylePage() {
  return (
    <div className="flex min-h-screen bg-stone-50 text-stone-900 font-sans">
      <StickySidebar theme="earth" />
      
      <main className="flex-1 px-8 py-24 sm:px-12 lg:px-24 mb-32">
        <div className="mb-24 max-w-3xl pt-10">
          <h1 className="mb-6 text-6xl font-light tracking-tight sm:text-7xl lg:text-8xl">
            Human <span className="text-stone-400">Onsite.</span>
          </h1>
          <p className="text-lg leading-relaxed text-stone-500">
            Welcome to Lifestyle. Experience the raw human element, authentic environments, and the organic flexibility perfectly tuned to build genuine connections with your audience.
          </p>
        </div>

        <BentoGrid>
          <BentoCard
            id="brand"
            title="Brand & Corporate"
            description="Executive headshots and comprehensive office coverage that humanizes your corporate identity."
            theme="earth"
            className="md:col-span-2 md:row-span-2 min-h-[22rem] md:min-h-[28rem]"
          >
            <Image src="/brand_corporate.png" alt="Brand & Corporate" fill className="object-cover opacity-60 mix-blend-overlay grayscale-[0.5]" />
          </BentoCard>

          <BentoCard
            id="commercial"
            title="Commercial Photography"
            description="High-impact product and lifestyle visuals aimed at supercharging marketing campaigns."
            theme="earth"
            className="col-span-1 min-h-[16rem] md:min-h-[auto]"
          >
            <Image src="/commercial_photo.png" alt="Commercial Photo" fill className="object-cover opacity-60 mix-blend-overlay grayscale-[0.5]" />
          </BentoCard>

          <BentoCard
            id="podcast"
            title="Podcast & Interview"
            description="Studio Production, Content Media, and Photography Branding perfectly synced."
            theme="earth"
            className="col-span-1 md:col-span-3 min-h-[20rem] md:min-h-[24rem]"
          >
            <Image src="/podcast_interview.png" alt="Podcast Integration" fill className="object-cover opacity-60 mix-blend-hard-light grayscale-[0.5]" />
          </BentoCard>

          <BentoCard
            id="brand-design"
            title="Brand Design"
            description="Coming soon: A complete architectural approach to scaling visual identity."
            theme="earth"
            frosted
            className="col-span-1 md:col-span-2 min-h-[14rem]"
          />

          <BentoCard
            id="ad-commercials"
            title="Ad Commercials"
            description="Coming soon: Moving pictures designed for aggressive user acquisition."
            theme="earth"
            frosted
            className="col-span-1 min-h-[14rem]"
          />
        </BentoGrid>

        <PipelineContainer theme="earth">
          <StageOneBubble theme="earth" />
          <StageTwoTimeline theme="earth" />
          <StageThreeParallax theme="earth" />
          <StageFourRefraction theme="earth" />
          <StageFiveDelivery theme="earth" />
        </PipelineContainer>
      </main>
    </div>
  );
}
