import React from "react";
import { aboutContent } from "@/content/about";

export function AboutHistory() {
  return (
    <section className="py-24 bg-background border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            {aboutContent.history.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {aboutContent.history.description}
          </p>
        </div>
      </div>
    </section>
  );
}
