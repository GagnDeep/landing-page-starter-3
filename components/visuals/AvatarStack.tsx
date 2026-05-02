"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

// Using placeholder distinct colors instead of images for the stack
export function AvatarStack({ className }: Props) {
  return (
    <div className={cn("flex -space-x-4 hover:space-x-1 transition-all duration-300 ease-in-out motion-reduce:transition-none", className)}>
      <div className="w-12 h-12 rounded-full border-2 border-background bg-slate-200 z-30" />
      <div className="w-12 h-12 rounded-full border-2 border-background bg-emerald-200 z-20" />
      <div className="w-12 h-12 rounded-full border-2 border-background bg-orange-200 z-10" />
      <div className="w-12 h-12 rounded-full border-2 border-background bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold z-0">
        4.9★
      </div>
    </div>
  );
}
