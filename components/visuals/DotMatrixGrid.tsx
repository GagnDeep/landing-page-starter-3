import React from "react";
import { cn } from "@/lib/utils";

interface DotMatrixGridProps {
  className?: string;
  spacing?: number;
  size?: number;
}

export const DotMatrixGrid: React.FC<DotMatrixGridProps> = ({
  className,
  spacing = 20,
  size = 2
}) => {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(var(--border) ${size}px, transparent ${size}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        backgroundPosition: '0 0'
      }}
      aria-hidden="true"
    />
  );
};
