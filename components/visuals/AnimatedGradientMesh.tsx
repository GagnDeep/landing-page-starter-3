"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedGradientMesh({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={cn("absolute inset-0 bg-background", className)} />;

  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10 pointer-events-none", className)}>
      <div className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000 mix-blend-soft-light">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-[100px] animate-blob motion-reduce:animate-none" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] animate-blob animation-delay-2000 motion-reduce:animate-none" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-accent/30 blur-[100px] animate-blob animation-delay-4000 motion-reduce:animate-none" />
      </div>
    </div>
  );
}
