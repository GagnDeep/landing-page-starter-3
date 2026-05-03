import { careersContent } from "@/content/careers";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function CareersHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border/40">
      <AnimatedGradientMesh className="opacity-50 dark:opacity-30" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {careersContent.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {careersContent.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
