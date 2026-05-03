"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: React.ReactNode[];
  speed?: "fast" | "normal" | "slow";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function LogoMarquee({
  className,
  logos,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  ...props
}: LogoMarqueeProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const speedMs = {
    fast: "20s",
    normal: "40s",
    slow: "60s",
  }[speed];

  // Duplicate logos to create seamless loop
  const content = [...logos, ...logos, ...logos];

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden border-y border-[var(--border)] bg-[var(--background)] py-8",
        className
      )}
      style={{
        '--marquee-duration': speedMs,
        '--marquee-direction': direction === "left" ? "normal" : "reverse",
      } as React.CSSProperties}
      {...props}
    >
      <div
        className={cn(
          "flex w-max min-w-full shrink-0 animate-marquee items-center justify-around gap-16 px-8",
          pauseOnHover && "hover:[animation-play-state:paused]",
          !isMounted && "invisible" // Prevent hydration flash
        )}
      >
        {content.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center text-[var(--muted-foreground)] opacity-60 transition-opacity duration-300 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100"
          >
            {logo}
          </div>
        ))}
      </div>

      {/* Gradient fades for smooth entry/exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[var(--background)] to-transparent" />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (prefers-reduced-motion: no-preference) {
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.3333%); } /* Translates exactly 1/3 since we tripled the content */
          }
          .animate-marquee {
            animation: marquee var(--marquee-duration) linear infinite var(--marquee-direction);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused !important;
            transform: translateX(0) !important;
          }
        }
      `}} />
    </div>
  );
}
