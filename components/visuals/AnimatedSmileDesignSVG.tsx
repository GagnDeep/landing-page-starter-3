"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSmileDesignSVGProps extends React.SVGProps<SVGSVGElement> {
  duration?: number;
  strokeColor?: string;
}

export function AnimatedSmileDesignSVG({
  className,
  duration = 3,
  strokeColor = "var(--primary)",
  ...props
}: AnimatedSmileDesignSVGProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full max-w-md", className)}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .draw-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        @media (prefers-reduced-motion: no-preference) {
          .draw-path.animate {
            animation: draw var(--draw-duration) ease-out-quart forwards;
          }
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .draw-path {
            stroke-dashoffset: 0;
          }
        }
      `}} />

      {/* Abstract structural grid / medical precision lines */}
      <path
        className={cn("draw-path", isMounted && "animate")}
        d="M50 100 L350 100 M200 20 L200 180"
        stroke="var(--border)"
        strokeWidth="1"
        strokeDasharray="4 4"
        style={{ '--draw-duration': `${duration}s` } as React.CSSProperties}
      />

      {/* Golden ratio / facial harmony arcs */}
      <path
        className={cn("draw-path", isMounted && "animate")}
        d="M100 100 A100 100 0 0 1 300 100"
        stroke="var(--muted-foreground)"
        strokeWidth="1"
        opacity="0.5"
        style={{ '--draw-duration': `${duration * 1.2}s` } as React.CSSProperties}
      />

      {/* The Smile Arc */}
      <path
        className={cn("draw-path", isMounted && "animate")}
        d="M120 120 C160 160 240 160 280 120"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        style={{ '--draw-duration': `${duration * 1.5}s`, animationDelay: '0.5s' } as React.CSSProperties}
      />

      {/* Sparkle / Highlight accent */}
      <path
        className={cn("draw-path", isMounted && "animate")}
        d="M275 105 L285 105 M280 100 L280 110 M277 102 L283 108 M277 108 L283 102"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ '--draw-duration': `${duration * 0.5}s`, animationDelay: '2s' } as React.CSSProperties}
      />
    </svg>
  );
}
