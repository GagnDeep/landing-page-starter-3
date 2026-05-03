import React from "react";
import { faqContent } from "@/content/faq";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Input } from "@/components/ui/input";

export function FAQHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center border-b border-border/40">
      <AnimatedGradientMesh variant="secondary" className="opacity-60 dark:opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {faqContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {faqContent.hero.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto w-full relative animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
             <HugeiconsIcon icon={Search01Icon} size={24} />
          </div>
          <Input
            type="text"
            placeholder={faqContent.cta.searchPlaceholder}
            className="w-full h-16 pl-14 rounded-full bg-background/80 backdrop-blur border-border/50 shadow-lg text-lg focus-visible:ring-primary/50"
          />
        </div>
      </div>
    </section>
  );
}
