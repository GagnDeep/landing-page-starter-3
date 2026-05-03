import React from "react";
import { homeContent } from "@/content/home";
import { AnimatedChart } from "@/components/visuals/AnimatedChart";

export function Statistics() {
  return (
    <section className="py-20 bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {homeContent.statistics.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center pt-8 md:pt-0 first:pt-0">
               {idx === 0 && <div className="w-full max-w-[200px] mb-6 opacity-80"><AnimatedChart color="primary" /></div>}
               <div className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-2 flex items-baseline justify-center">
                 {stat.value}
                 {stat.suffix && <span className="text-xl text-primary font-sans font-semibold ml-2">{stat.suffix}</span>}
               </div>
               <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                 {stat.label}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
