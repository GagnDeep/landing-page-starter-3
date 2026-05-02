"use client";

import React from "react";
import { cn } from "@/lib/utils";

const logos = [
  "O3+",
  "L'Oréal Professionnel",
  "Wella",
  "Dermalogica",
  "Kérastase",
  "Schwarzkopf",
  "MAC",
  "Bobbi Brown"
];

export function LogoMarquee({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden flex bg-muted/30 py-8 border-y border-border", className)}>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll motion-reduce:animate-none">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <li key={idx} className="text-xl md:text-2xl font-heading text-muted-foreground whitespace-nowrap opacity-70">
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
