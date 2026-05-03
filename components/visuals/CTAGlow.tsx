import { cn } from "@/lib/utils";
import React from "react";

export function CTAGlow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative group inline-block", className)}>
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur transition duration-1000 group-hover:opacity-70 group-hover:duration-200" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
