import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[90vh] flex items-center justify-center pt-24 pb-16">
      <AnimatedGradientMesh variant="primary" className="opacity-70 dark:opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="flex flex-col space-y-8 animate-fade-in text-center lg:text-left">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              {homeContent.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed font-sans">
              {homeContent.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="rounded-full px-8 text-base h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Link href="/contact">
                  {homeContent.hero.primaryCta}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base h-14 bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all duration-300">
                <Link href="#services">
                  {homeContent.hero.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "200ms" }}>
            <AnimatedHeroIllustration className="w-full max-w-[500px] h-[500px] shadow-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
