"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps {
  className?: string;
  lines?: string[];
  title?: string;
}

export const CodeWindowTyping: React.FC<CodeWindowTypingProps> = ({
  className,
  lines = [
    "Patient: Rahul S.",
    "Status: Appointment Confirmed",
    "Procedure: Advanced Root Canal",
    "Notes: Painless rotary endodontics scheduled.",
    "System: Hygiene protocol class B initialized... OK"
  ],
  title = "clinical_system.log"
}) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTimeout(() => setVisibleLines(lines.length), 0);
      return;
    }

    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= lines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 800); // 800ms between lines

    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className={cn("rounded-xl overflow-hidden bg-foreground text-background shadow-2xl font-mono text-sm border border-border/20", className)}>
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 bg-muted/10 border-b border-border/10">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-accent/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
        </div>
        <div className="text-muted-foreground text-xs opacity-70">{title}</div>
      </div>

      {/* Window Body */}
      <div className="p-4 space-y-2 min-h-[160px]">
        {mounted && lines.map((line, idx) => (
          <div
            key={idx}
            className={cn(
              "transition-opacity duration-300",
              idx < visibleLines ? "opacity-100" : "opacity-0"
            )}
          >
            <span className="text-primary/70 mr-2">{'>'}</span>
            <span className={idx === lines.length - 1 ? "text-accent" : "text-background/90"}>
              {line}
            </span>
          </div>
        ))}
        {mounted && visibleLines < lines.length && (
          <div className="animate-pulse inline-block w-2 h-4 bg-primary/70 ml-1" />
        )}
      </div>
    </div>
  );
};
