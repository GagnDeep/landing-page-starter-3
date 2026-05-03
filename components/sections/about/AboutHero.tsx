import { aboutContent } from "@/content/about";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import Image from "next/image";
import { siteImages } from "@/lib/images";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <AnimatedGradientMesh className="opacity-50 dark:opacity-30" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {aboutContent.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          {aboutContent.hero.subtitle}
        </p>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50">
          <Image
            src={siteImages.heroAbout.src}
            alt={aboutContent.hero.image?.alt || "About our clinic"}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
