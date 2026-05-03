import React from "react";
import { featuresContent } from "@/content/features";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Sofa01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FeaturesAmenities() {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-t border-border/40">
      <FloatingBlobs className="opacity-40" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-card/60 backdrop-blur-md p-12 rounded-[3rem] border border-border/50 shadow-lg">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
             <HugeiconsIcon icon={Sofa01Icon} size={40} className="text-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            {featuresContent.amenities.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {featuresContent.amenities.description}
          </p>
        </div>
      </div>
    </section>
  );
}
