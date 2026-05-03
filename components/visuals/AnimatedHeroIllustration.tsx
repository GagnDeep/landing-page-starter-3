"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedHeroIllustrationProps {
  className?: string;
}

export function AnimatedHeroIllustration({ className }: AnimatedHeroIllustrationProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return <div className={cn("w-full h-full min-h-[400px] bg-muted/20 animate-pulse rounded-3xl", className)} aria-hidden="true" />;
  }

  return (
    <div className={cn("relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden", className)}>
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-in fade-in duration-1000" />

      {/* Abstract Clinical/Dental SVG Representation */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-[80%] text-primary drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer protective ring (Hygiene/Safety) */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-[spin_60s_linear_infinite] opacity-30 motion-reduce:animate-none"
        />

        {/* Inner solid ring */}
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-20"
        />

        {/* Abstract Tooth / Shield Shape */}
        <path
          d="M100 50 C 130 50, 140 70, 140 100 C 140 130, 115 145, 110 150 C 105 155, 95 155, 90 150 C 85 145, 60 130, 60 100 C 60 70, 70 50, 100 50 Z"
          fill="currentColor"
          className="opacity-10 dark:opacity-20 animate-in zoom-in duration-1000"
        />

        <path
          d="M100 50 C 130 50, 140 70, 140 100 C 140 130, 115 145, 110 150 C 105 155, 95 155, 90 150 C 85 145, 60 130, 60 100 C 60 70, 70 50, 100 50 Z"
          stroke="currentColor"
          strokeWidth="3"
          className="animate-[pulse_4s_ease-in-out_infinite] motion-reduce:animate-none"
        />

        {/* Precise alignment crosshairs (Technology/Precision) */}
        <line x1="100" y1="20" x2="100" y2="40" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="160" x2="100" y2="180" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="100" x2="40" y2="100" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" />
        <line x1="160" y1="100" x2="180" y2="100" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" />

        {/* Floating precise dots */}
        <circle cx="65" cy="65" r="3" fill="var(--color-accent)" className="animate-bounce [animation-delay:0ms] motion-reduce:animate-none" />
        <circle cx="135" cy="65" r="3" fill="var(--color-accent)" className="animate-bounce [animation-delay:500ms] motion-reduce:animate-none" />
        <circle cx="100" cy="135" r="3" fill="var(--color-accent)" className="animate-bounce [animation-delay:1000ms] motion-reduce:animate-none" />
      </svg>
    </div>
  );
}