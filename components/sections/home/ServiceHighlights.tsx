import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";

export function ServiceHighlights() {
  return (
    <section className="py-24 bg-background relative" id="services">
      <DotMatrixGrid className="opacity-40" />
      <div className="container mx-auto px-4 md:px-6 space-y-32">

        {/* Highlight 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col space-y-6">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm">
              {homeContent.serviceHighlight1.tagline}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              {homeContent.serviceHighlight1.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {homeContent.serviceHighlight1.description}
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/features">
                  {homeContent.serviceHighlight1.cta}
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative w-full aspect-square max-w-lg mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-muted">
             <Image
                src={images.home.serviceImplants.src}
                alt={images.home.serviceImplants.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
             />
          </div>
        </div>

        {/* Highlight 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-square max-w-lg mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-muted">
             <Image
                src={images.home.serviceCosmetics.src}
                alt={images.home.serviceCosmetics.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
             />
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm">
              {homeContent.serviceHighlight2.tagline}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              {homeContent.serviceHighlight2.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {homeContent.serviceHighlight2.description}
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/features">
                  {homeContent.serviceHighlight2.cta}
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
