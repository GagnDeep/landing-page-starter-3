"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps extends React.HTMLAttributes<HTMLDivElement> {
  baseColor?: string;
  blobColors?: string[];
  opacity?: number;
}

export function AnimatedGradientMesh({
  className,
  baseColor = "var(--background)",
  blobColors = ["var(--primary)", "var(--accent)", "var(--secondary)"],
  opacity = 0.4,
  ...props
}: AnimatedGradientMeshProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch by only rendering animations after mount
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-[var(--background)] transition-opacity duration-1000",
        isMounted ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ backgroundColor: baseColor, opacity }}
      {...props}
    >
      <div
        className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full mix-blend-multiply blur-[100px] sm:blur-[120px]"
        style={{
          backgroundColor: blobColors[0],
          animation: isMounted ? "blob-drift-1 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute top-[20%] right-[-10%] h-[60%] w-[40%] rounded-full mix-blend-multiply blur-[100px] sm:blur-[120px]"
        style={{
          backgroundColor: blobColors[1],
          animation: isMounted ? "blob-drift-2 25s infinite alternate-reverse cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] h-[50%] w-[60%] rounded-full mix-blend-multiply blur-[100px] sm:blur-[120px]"
        style={{
          backgroundColor: blobColors[2],
          animation: isMounted ? "blob-drift-3 22s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          opacity: 0.4,
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (prefers-reduced-motion: no-preference) {
          @keyframes blob-drift-1 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(10%, 15%) scale(1.1); }
            100% { transform: translate(-5%, 5%) scale(0.9); }
          }
          @keyframes blob-drift-2 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-10%, -10%) scale(1.05); }
            100% { transform: translate(5%, -15%) scale(0.95); }
          }
          @keyframes blob-drift-3 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-5%, -5%) scale(1.15); }
            100% { transform: translate(10%, 10%) scale(0.85); }
          }
        }
        .dark .mix-blend-multiply {
          mix-blend-mode: screen;
        }
      `}} />
    </div>
  );
}
