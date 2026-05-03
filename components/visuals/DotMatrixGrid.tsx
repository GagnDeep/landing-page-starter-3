"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  spacing?: number
  color?: string
  opacity?: number
}

export function DotMatrixGrid({
  size = 1.5,
  spacing = 24,
  color = "var(--color-primary)",
  opacity = 0.2,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `radial-gradient(circle at center, ${color} ${size}px, transparent 0)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: opacity,
      }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  )
}
