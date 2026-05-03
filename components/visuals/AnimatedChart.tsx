"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ChartDataPoint {
  label: string;
  value: number; // 0 to 100
}

interface AnimatedChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ChartDataPoint[];
  color?: string;
}

export function AnimatedChart({
  className,
  data,
  color = "var(--primary)",
  ...props
}: AnimatedChartProps) {
  const [inView, setInView] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Avoid React 18 strict mode double-firing visual issues
          setTimeout(() => setInView(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={chartRef} className={cn("flex w-full items-end gap-2 sm:gap-4 h-48", className)} {...props}>
      {data.map((point, i) => (
        <div key={i} className="group relative flex h-full flex-1 flex-col justify-end">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded bg-[var(--popover)] px-2 py-1 text-xs text-[var(--popover-foreground)] shadow-sm">
              {point.value}%
            </span>
          </div>
          <div
            className="w-full rounded-t-md bg-[var(--primary)] transition-all duration-1000 ease-out-expo"
            style={{
              height: inView ? `${point.value}%` : "0%",
              backgroundColor: color,
              transitionDelay: `${i * 150}ms`,
            }}
          />
          <div className="mt-2 text-center text-xs font-medium text-[var(--muted-foreground)]">
            {point.label}
          </div>
        </div>
      ))}
    </div>
  );
}
