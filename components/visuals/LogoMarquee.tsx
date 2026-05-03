"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  logos: React.ReactNode[]
  speed?: "fast" | "normal" | "slow"
}

export function LogoMarquee({
  logos,
  speed = "normal",
  className,
  ...props
}: Props) {
  const speedClass = {
    fast: "animate-[marquee_15s_linear_infinite]",
    normal: "animate-[marquee_30s_linear_infinite]",
    slow: "animate-[marquee_45s_linear_infinite]",
  }[speed]

  return (
    <div
      className={cn(
        "group mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent) flex overflow-hidden",
        className
      )}
      {...props}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-16 py-4 motion-reduce:animate-none",
          speedClass,
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {logos.map((logo, index) => (
          <div
            key={`logo-1-${index}`}
            className="flex items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            {logo}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-16 py-4 motion-reduce:animate-none",
          speedClass,
          "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <div
            key={`logo-2-${index}`}
            className="flex items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
