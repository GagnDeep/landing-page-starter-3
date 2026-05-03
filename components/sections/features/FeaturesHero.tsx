import React from "react";
import Image from "next/image";
import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function FeaturesHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
      <AnimatedGradientMesh variant="secondary" className="opacity-70 dark:opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            {featuresContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {featuresContent.hero.subtitle}
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-border/20 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <Image
            src={images.features.hero.src}
            alt={images.features.hero.alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
      </div>
    </section>
  );
}
