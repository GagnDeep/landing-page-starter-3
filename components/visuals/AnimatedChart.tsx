"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedChartProps {
  className?: string;
  dataPoints?: number[];
}

export function AnimatedChart({
  className,
  dataPoints = [20, 35, 55, 75, 90, 100] // Simulating success/trust growth
}: AnimatedChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const maxData = Math.max(...dataPoints);

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-48 flex items-end justify-between gap-2 p-4 border-b border-l border-border", className)}
      aria-hidden="true"
    >
      {dataPoints.map((point, index) => {
        const heightPercentage = (point / maxData) * 100;
        return (
          <div
            key={index}
            className="w-full bg-primary/20 dark:bg-primary/40 rounded-t-sm relative group overflow-hidden"
            style={{
              height: isVisible ? `${heightPercentage}%` : "0%",
              transition: "height 1s cubic-bezier(0.25, 1, 0.5, 1)",
              transitionDelay: `${index * 100}ms`
            }}
          >
            {/* Overlay gradient for a modern feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
          </div>
        );
      })}
    </div>
  );
}