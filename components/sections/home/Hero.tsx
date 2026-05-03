import { homeContent } from "@/content/home";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { siteImages } from "@/lib/images";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      <AnimatedGradientMesh className="opacity-70 dark:opacity-40" />
      <FloatingBlobs className="opacity-50 dark:opacity-20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              {homeContent.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              {homeContent.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {homeContent.hero.primaryCta && (
                <CTAGlow>
                  <Button size="lg" asChild className="w-full sm:w-auto text-base rounded-full px-8">
                    <Link href={homeContent.hero.primaryCta.href}>
                      {homeContent.hero.primaryCta.label}
                    </Link>
                  </Button>
                </CTAGlow>
              )}
              {homeContent.hero.secondaryCta && (
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-base rounded-full px-8 bg-background/50 backdrop-blur-sm">
                  <Link href={homeContent.hero.secondaryCta.href}>
                    {homeContent.hero.secondaryCta.label}
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-[4/5] lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] rotate-3 scale-105 -z-10 blur-2xl" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src={siteImages.heroHome.src}
                alt={siteImages.heroHome.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
