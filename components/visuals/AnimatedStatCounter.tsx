"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  target: number;
  duration?: number; // in milliseconds
  suffix?: string;
  prefix?: string;
}

export function AnimatedStatCounter({
  className,
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
  ...props
}: AnimatedStatCounterProps) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let animationFrameId: number;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={cn("inline-block", className)} {...props}>
      {prefix}{count}{suffix}
    </span>
  );
}
