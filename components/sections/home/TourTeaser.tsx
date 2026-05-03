import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { PlayIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function TourTeaser() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {homeContent.tourTeaser.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {homeContent.tourTeaser.description}
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-border/20">
          <Image
            src={images.home.clinicTourThumbnail.src}
            alt={images.home.clinicTourThumbnail.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
             <div className="w-20 h-20 rounded-full bg-background/90 backdrop-blur flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-110">
               <HugeiconsIcon icon={PlayIcon} size={32} className="text-primary ml-1" />
             </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/about#tour">
              {homeContent.tourTeaser.cta}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
