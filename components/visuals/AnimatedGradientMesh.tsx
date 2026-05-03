import { cn } from "@/lib/utils";
import React from "react";

export function AnimatedGradientMesh({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[100px] animate-pulse mix-blend-multiply opacity-50 dark:opacity-20" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[120px] animate-pulse mix-blend-multiply opacity-50 dark:opacity-20" style={{ animationDuration: '14s', animationDelay: '2s' }} />
      <div className="absolute -bottom-[30%] left-[20%] w-[80%] h-[80%] rounded-full bg-accent/15 blur-[150px] animate-pulse mix-blend-multiply opacity-50 dark:opacity-20" style={{ animationDuration: '18s', animationDelay: '4s' }} />
    </div>
  );
}
