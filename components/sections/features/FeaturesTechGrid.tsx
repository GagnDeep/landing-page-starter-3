import React from "react";
import { featuresContent } from "@/content/features";
import { ScanIcon, LaptopProgrammingIcon, FirstAidKitIcon, ZapIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FeaturesTechGrid() {
  const icons = [ScanIcon, ZapIcon, LaptopProgrammingIcon, FirstAidKitIcon];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresContent.technology.map((tech, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="bg-card p-10 rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <HugeiconsIcon icon={Icon} size={32} className="text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
