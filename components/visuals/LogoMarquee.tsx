"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  children: React.ReactNode;
}

export function LogoMarquee({ className, speed = "normal", direction = "left", children }: LogoMarqueeProps) {
  const durationValue = {
    slow: "60s",
    normal: "40s",
    fast: "20s"
  }[speed];

  const directionClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className={cn("relative flex w-full overflow-hidden bg-background py-8", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 gap-16 px-8 items-center text-muted-foreground motion-reduce:animate-none",
          directionClass
        )}
        style={{ "--marquee-duration": durationValue } as React.CSSProperties}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
      {/* Soft gradient masks for the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}