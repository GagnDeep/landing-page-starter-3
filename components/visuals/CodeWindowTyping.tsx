"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CodeWindowTypingProps {
  className?: string;
  codeLines: string[];
}

export function CodeWindowTyping({ className, codeLines }: CodeWindowTypingProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      const skipTimer = setTimeout(() => setDisplayedLines(codeLines), 0);
      return () => clearTimeout(skipTimer);
    }

    if (currentLineIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, codeLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, 800); // Clinical, deliberate typing speed
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, codeLines]);

  return (
    <div className={cn("rounded-lg border border-border bg-card shadow-lg overflow-hidden flex flex-col font-mono text-sm", className)}>
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-destructive/50" />
        <div className="w-3 h-3 rounded-full bg-accent/50" />
        <div className="w-3 h-3 rounded-full bg-primary/50" />
        <div className="ml-2 text-xs text-muted-foreground font-sans">protocol.log</div>
      </div>

      {/* Window Body */}
      <div className="p-4 flex flex-col gap-2 min-h-[120px]">
        {displayedLines.map((line, idx) => (
          <div key={idx} className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="text-muted-foreground select-none opacity-50">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className={line.includes("SUCCESS") ? "text-primary" : "text-card-foreground"}>
              {line}
            </span>
          </div>
        ))}
        {currentLineIndex < codeLines.length && (
          <div className="flex gap-4 items-center">
            <span className="text-muted-foreground select-none opacity-50">
              {String(currentLineIndex + 1).padStart(2, '0')}
            </span>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}