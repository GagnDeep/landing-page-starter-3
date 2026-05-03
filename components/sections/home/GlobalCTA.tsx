import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function GlobalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center">
      <AnimatedGradientMesh variant="secondary" className="opacity-80 dark:opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8 bg-background/40 backdrop-blur-md border border-border/50 p-8 md:p-16 rounded-[3rem] shadow-xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {homeContent.globalCta.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {homeContent.globalCta.subtitle}
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Link href="/contact">
                {homeContent.globalCta.cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
