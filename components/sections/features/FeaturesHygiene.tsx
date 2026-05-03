import React from "react";
import Image from "next/image";
import { featuresContent } from "@/content/features";
import { images } from "@/lib/images";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FeaturesHygiene() {
  return (
    <section className="py-24 bg-background border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {featuresContent.hygiene.title}
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuresContent.hygiene.description}
              </p>
            </div>

            <div className="space-y-4">
              {featuresContent.hygiene.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-muted/20">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <HugeiconsIcon icon={Tick02Icon} size={20} className="text-primary" />
                   </div>
                   <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/5] max-w-lg mx-auto lg:ml-auto rounded-[2rem] overflow-hidden shadow-xl border border-border/20">
            <Image
              src={images.features.sterilization.src}
              alt={images.features.sterilization.alt}
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
