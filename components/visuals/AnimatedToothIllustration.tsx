import { cn } from "@/lib/utils";
import React from "react";

export function AnimatedToothIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-32 h-32 md:w-48 md:h-48 drop-shadow-md", className)}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-primary"
      >
        <path
          d="M30 20 C20 20 15 30 15 40 C15 55 25 75 35 85 C40 90 45 80 50 75 C55 80 60 90 65 85 C75 75 85 55 85 40 C85 30 80 20 70 20 C60 20 55 30 50 35 C45 30 40 20 30 20 Z"
          fill="currentColor"
          className="animate-in fade-in zoom-in duration-1000"
        />
        <path
          d="M50 35 C55 30 60 20 70 20 C80 20 85 30 85 40 C85 55 75 75 65 85"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-50"
        />
        {/* Simple sparkle */}
        <path
          d="M75 15 L80 10 M75 5 L80 10 M85 15 L80 10 M85 5 L80 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-secondary origin-center animate-spin"
          style={{ animationDuration: '4s', transformOrigin: '80px 10px' }}
        />
      </svg>
    </div>
  );
}
