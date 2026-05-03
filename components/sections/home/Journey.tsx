import React from "react";
import { homeContent } from "@/content/home";

export function Journey() {
  return (
    <section className="py-24 bg-muted/10 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {homeContent.journey.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border/50" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {homeContent.journey.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center font-heading text-3xl font-bold text-muted-foreground z-10 mb-6 shadow-sm transition-colors duration-300 hover:border-primary hover:text-primary">
                  {step.step}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
