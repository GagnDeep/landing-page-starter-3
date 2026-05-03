import { termsContent } from "@/content/terms";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function TermsHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-border/40">
      <AnimatedGradientMesh className="opacity-30 dark:opacity-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          {termsContent.hero.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {termsContent.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
