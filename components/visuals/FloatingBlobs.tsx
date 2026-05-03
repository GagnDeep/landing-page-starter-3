"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[];
}

export function FloatingBlobs({
  className,
  colors = ["var(--accent)", "var(--secondary)"],
  ...props
}: FloatingBlobsProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return <div className={cn("absolute inset-0 overflow-hidden", className)} {...props} />;

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} {...props}>
      <div
        className="absolute h-96 w-96 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob"
        style={{
          backgroundColor: colors[0],
          top: "10%",
          left: "10%",
        }}
      />
      <div
        className="absolute h-96 w-96 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob"
        style={{
          backgroundColor: colors[1],
          top: "40%",
          right: "10%",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute h-96 w-96 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob"
        style={{
          backgroundColor: colors[0],
          bottom: "10%",
          left: "30%",
          animationDelay: "4s",
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (prefers-reduced-motion: no-preference) {
          @keyframes float-blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: float-blob 20s infinite ease-in-out;
          }
        }
        .dark .mix-blend-multiply {
          mix-blend-mode: screen;
        }
      `}} />
    </div>
  );
}
