"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Props = React.HTMLAttributes<HTMLDivElement>

export function AnimatedGradientMesh({ className, ...props }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Avoid hydration mismatch by waiting for mount
    setTimeout(() => setMounted(true), 0)
  }, [])

  if (!mounted) {
    return <div className={cn("bg-primary/10", className)} {...props} />
  }

  return (
    <div
      className={cn("relative overflow-hidden bg-background", className)}
      {...props}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 h-[150%] w-[150%] animate-[spin_60s_linear_infinite] rounded-full bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_50%)] opacity-30 mix-blend-multiply blur-[120px] motion-reduce:animate-none dark:mix-blend-screen" />
        <div className="absolute -right-1/4 -bottom-1/4 h-[120%] w-[120%] animate-[spin_45s_linear_infinite_reverse] rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_50%)] opacity-20 mix-blend-multiply blur-[100px] motion-reduce:animate-none dark:mix-blend-screen" />
      </div>
    </div>
  )
}
