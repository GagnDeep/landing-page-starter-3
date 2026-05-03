"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedChartProps {
  className?: string;
  data?: number[];
  color?: "primary" | "accent";
}

export const AnimatedChart: React.FC<AnimatedChartProps> = ({
  className,
  data = [40, 70, 45, 90, 65, 100],
  color = "primary"
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const colorClass = color === "primary" ? "bg-primary" : "bg-accent";

  return (
    <div className={cn("flex items-end justify-between h-32 gap-2 p-4 rounded-xl border border-border bg-card shadow-sm", className)}>
      {data.map((val, i) => (
        <div key={i} className="w-full relative h-full flex items-end group">
          <div
            className={cn("w-full rounded-t-sm transition-all duration-1000 ease-out-quart", colorClass)}
            style={{
              height: mounted ? `${val}%` : '0%',
              transitionDelay: `${i * 100}ms`
            }}
          />
          {/* Tooltip on hover */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {val}%
          </div>
        </div>
      ))}
    </div>
  );
};
