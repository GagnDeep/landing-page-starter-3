"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export function CTAGlow({ children, className }: Props) {
  return (
    <div className={cn("relative group inline-block", className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200 motion-reduce:transition-none" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
