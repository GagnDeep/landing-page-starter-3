"use client"

import React from "react"
import { cn } from "@/lib/utils"

type Props = React.SVGProps<SVGSVGElement>

export function AnimatedHeroIllustration({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full text-primary", className)}
      {...props}
    >
      {/* Background soft glow */}
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="currentColor"
        className="animate-pulse opacity-10 motion-reduce:animate-none"
      />

      {/* Inner rotating ring */}
      <circle
        cx="200"
        cy="200"
        r="120"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="10 10"
        className="origin-center animate-[spin_20s_linear_infinite] opacity-30 motion-reduce:animate-none"
      />

      {/* Abstract Tooth Shape */}
      <path
        d="M200 120 C 160 120, 140 160, 140 200 C 140 240, 160 260, 180 280 C 190 290, 195 280, 200 270 C 205 280, 210 290, 220 280 C 240 260, 260 240, 260 200 C 260 160, 240 120, 200 120 Z"
        fill="currentColor"
        className="origin-center animate-[bounce_4s_ease-in-out_infinite] opacity-90 motion-reduce:animate-none"
      />

      {/* Tech nodes / sparkles */}
      <circle
        cx="160"
        cy="150"
        r="8"
        fill="var(--color-accent)"
        className="animate-ping opacity-50 motion-reduce:animate-none"
      />
      <circle
        cx="250"
        cy="180"
        r="6"
        fill="var(--color-secondary)"
        className="animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60 delay-1000 motion-reduce:animate-none"
      />
      <circle
        cx="170"
        cy="230"
        r="5"
        fill="var(--color-accent)"
        className="animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40 delay-500 motion-reduce:animate-none"
      />
    </svg>
  )
}
