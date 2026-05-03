import React from "react";
import { homeContent } from "@/content/home";

export function TrustBar() {
  return (
    <section className="w-full bg-muted/10 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center gap-6">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
          {homeContent.trustBar.title}
        </p>
        <div className="w-full hidden md:block w-px h-8 bg-border/50 shrink-0" />
        <div className="w-full overflow-hidden">
           {/* In a real scenario these logos would be real SVGs, simulating with placeholders */}
           <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-60 grayscale items-center">
             {homeContent.trustBar.logos.map((logo, idx) => (
               <div key={idx} className="font-heading font-bold text-xl">{'text' in logo ? logo.text : logo.alt}</div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
