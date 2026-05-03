import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";

export function AboutTeam() {
  // Simulating a team since the specific copy for team members was kept brief in content file.
  // Using the culture image as a placeholder for team dynamic.
  return (
    <section className="py-24 bg-muted/10 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {aboutContent.team.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            {aboutContent.team.description}
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-xl border border-border/20">
            <Image
              src={images.careers.culture.src}
              alt={images.careers.culture.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
        </div>
      </div>
    </section>
  );
}
