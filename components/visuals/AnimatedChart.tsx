"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: number[] // Array of percentages (0-100)
  labels: string[]
}

export function AnimatedChart({ data, labels, className, ...props }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 100) // Slight delay for animation effect on mount
  }, [])

  return (
    <div
      className={cn(
        "flex h-48 w-full items-end justify-between gap-4 rounded-xl border border-border/50 bg-card/50 p-4",
        className
      )}
      {...props}
    >
      {data.map((val, i) => (
        <div key={i} className="group flex flex-1 flex-col items-center gap-2">
          <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-md bg-muted/30">
            <div
              className="w-full rounded-t-sm bg-primary transition-all duration-1000 ease-out group-hover:bg-primary/80"
              style={{
                height: mounted ? `${val}%` : "0%",
                transitionDelay: `${i * 100}ms`,
              }}
            />
          </div>
          <span className="w-full truncate text-center text-xs font-medium text-muted-foreground">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  )
}
