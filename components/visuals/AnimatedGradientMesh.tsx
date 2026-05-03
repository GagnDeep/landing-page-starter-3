"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientMeshProps {
  className?: string;
  variant?: "primary" | "secondary" | "dark";
}

export const AnimatedGradientMesh: React.FC<AnimatedGradientMeshProps> = ({
  className,
  variant = "primary"
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const variantStyles = {
    primary: "from-primary/20 via-background to-accent/20",
    secondary: "from-secondary/30 via-background to-muted/30",
    dark: "from-slate-800 via-background to-slate-900"
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-br",
        variantStyles[variant],
        className
      )}
      aria-hidden="true"
    >
      {mounted && (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        </>
      )}
    </div>
  );
};
