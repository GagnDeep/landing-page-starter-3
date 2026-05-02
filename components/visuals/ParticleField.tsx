"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ParticleField({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate static random values once mounted to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 20}s`,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 rounded-full bg-primary/20 animate-float motion-reduce:animate-none"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
