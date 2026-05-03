"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowTypingProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  speed?: number;
  prefix?: string;
}

export function CodeWindowTyping({
  className,
  text,
  speed = 40,
  prefix = "> ",
  ...props
}: CodeWindowTypingProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
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

  useEffect(() => {
    if (!inView) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [inView, text, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-md overflow-hidden relative",
        className
      )}
      {...props}
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-[var(--muted-foreground)] opacity-30" />
        <div className="h-3 w-3 rounded-full bg-[var(--muted-foreground)] opacity-30" />
        <div className="h-3 w-3 rounded-full bg-[var(--muted-foreground)] opacity-30" />
      </div>
      <div className="font-sans text-[var(--foreground)] leading-relaxed">
        <span className="text-[var(--primary)] opacity-70">{prefix}</span>
        {displayedText}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
}
