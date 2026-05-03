"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  logos: { src: string; alt: string }[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  logos,
  className,
  speed = "normal"
}) => {
  const speedMap = {
    slow: "60s",
    normal: "40s",
    fast: "20s"
  };

  return (
    <div className={cn("w-full overflow-hidden flex bg-muted/30 py-8 border-y border-border", className)}>
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-16 px-8 animate-marquee motion-reduce:animate-none"
        style={{ '--marquee-duration': speedMap[speed] } as React.CSSProperties}
      >
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            loading="lazy"
          />
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-16 px-8 animate-marquee motion-reduce:animate-none"
        aria-hidden="true"
        style={{ '--marquee-duration': speedMap[speed] } as React.CSSProperties}
      >
        {logos.map((logo, i) => (
          <img
            key={`dup-${i}`}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
