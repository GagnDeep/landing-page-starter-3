import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";

export function AboutDrGupta() {
  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl border border-border/20">
            <Image
              src={images.home.drGupta.src}
              alt={images.home.drGupta.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6 lg:pl-8">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2">
                {aboutContent.drGupta.title}
              </h2>
              <p className="text-primary font-semibold text-lg">
                {aboutContent.drGupta.subtitle}
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {aboutContent.drGupta.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Signature Placeholder */}
            <div className="pt-6">
              <div className="font-heading italic text-3xl opacity-50 text-foreground/80">
                Dr. Anshum Gupta
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
