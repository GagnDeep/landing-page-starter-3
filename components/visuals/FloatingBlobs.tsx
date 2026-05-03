"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Props = React.HTMLAttributes<HTMLDivElement>

export function FloatingBlobs({ className, ...props }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 0)
  }, [])

  if (!mounted) return null

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-[blob_7s_infinite] rounded-full bg-primary/20 mix-blend-multiply blur-[60px] filter motion-reduce:animate-none dark:mix-blend-screen" />
      <div className="absolute top-1/3 right-1/4 h-72 w-72 animate-[blob_9s_infinite_2s] rounded-full bg-secondary/20 mix-blend-multiply blur-[80px] filter motion-reduce:animate-none dark:mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/3 h-80 w-80 animate-[blob_8s_infinite_4s] rounded-full bg-accent/20 mix-blend-multiply blur-[70px] filter motion-reduce:animate-none dark:mix-blend-screen" />
    </div>
  )
}
