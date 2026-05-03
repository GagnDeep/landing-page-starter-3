import React from "react";
import { aboutContent } from "@/content/about";
import { Shield01Icon, StethoscopeIcon, UserLove01Icon, Idea01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function AboutValues() {
  const icons = [StethoscopeIcon, Shield01Icon, UserLove01Icon, Idea01Icon];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {aboutContent.values.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutContent.values.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="bg-card p-8 rounded-3xl border border-border/50 text-center flex flex-col items-center hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <HugeiconsIcon icon={Icon} size={32} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
