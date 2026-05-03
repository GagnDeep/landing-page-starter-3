"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface DotMatrixGridProps {
  className?: string;
  rows?: number;
  cols?: number;
}

export function DotMatrixGrid({ className, rows = 10, cols = 10 }: DotMatrixGridProps) {
  const [activeDots, setActiveDots] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const totalDots = rows * cols;
    const interval = setInterval(() => {
      setActiveDots((prev) => {
        const next = new Set(prev);
        // Randomly turn on a dot
        next.add(Math.floor(Math.random() * totalDots));
        // Randomly turn off a dot to keep it sparse
        if (next.size > totalDots * 0.1) {
          const arr = Array.from(next);
          next.delete(arr[Math.floor(Math.random() * arr.length)]);
        }
        return next;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [rows, cols]);

  return (
    <div
      className={cn("grid gap-4", className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
      }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1.5 h-1.5 rounded-full transition-all duration-1000",
            activeDots.has(i)
              ? "bg-primary scale-150 opacity-100"
              : "bg-muted-foreground/20 scale-100 opacity-40"
          )}
        />
      ))}
    </div>
  );
}