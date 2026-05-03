import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";

export function AboutFacility() {
  return (
    <section className="py-24 bg-foreground text-background" id="tour">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              {aboutContent.facility.title}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-2" />
            <p className="text-lg text-background/80 leading-relaxed">
              {aboutContent.facility.description}
            </p>
          </div>

          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-lg mx-auto lg:ml-auto rounded-[2rem] overflow-hidden border border-border/20 shadow-2xl">
            <Image
              src={images.about.facility.src}
              alt={images.about.facility.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
