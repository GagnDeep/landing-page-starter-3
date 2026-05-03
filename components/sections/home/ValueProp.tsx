import React from "react";
import { homeContent } from "@/content/home";
import { Shield01Icon, StethoscopeIcon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ValueProp() {
  const icons = [Shield01Icon, SparklesIcon, StethoscopeIcon];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{homeContent.valueProposition.title}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeContent.valueProposition.points.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <HugeiconsIcon icon={Icon} size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
