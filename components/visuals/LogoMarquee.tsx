import { cn } from "@/lib/utils";
import React from "react";

interface LogoMarqueeProps {
  items: string[];
  className?: string;
}

export function LogoMarquee({ items, className }: LogoMarqueeProps) {
  return (
    <div className={cn("relative flex w-full overflow-hidden border-y border-border/50 bg-muted/30 py-6", className)}>
      <div className="flex w-max animate-marquee space-x-16 px-8 hover:[animation-play-state:paused] md:space-x-24">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center justify-center font-heading text-lg md:text-xl font-medium text-muted-foreground/60 transition-colors hover:text-primary">
            {item}
          </div>
        ))}
      </div>
      {/* Fallback/Styles for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
