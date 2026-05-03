import React from "react";
import { pricingContent } from "@/content/pricing";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center border-b border-border/40">
      <AnimatedGradientMesh variant="dark" className="opacity-100" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-8">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in text-background">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {pricingContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            {pricingContent.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
