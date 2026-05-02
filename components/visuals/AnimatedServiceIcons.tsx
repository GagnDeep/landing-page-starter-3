"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Scissors, Sparkles, HandMetal, Flower2, Heart, Droplets } from "lucide-react";

type IconType = "hair" | "skin" | "nails" | "spa" | "care" | "pure";

interface Props {
  type: IconType;
  className?: string;
}

export function AnimatedServiceIcons({ type, className }: Props) {
  const IconMap = {
    hair: Scissors,
    skin: Sparkles,
    nails: HandMetal,
    spa: Flower2,
    care: Heart,
    pure: Droplets,
  };

  const Icon = IconMap[type] || Sparkles;

  return (
    <div className={cn("relative group flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary transition-colors duration-500 hover:bg-primary hover:text-primary-foreground", className)}>
      <Icon className="w-8 h-8 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 motion-reduce:transition-none" strokeWidth={1.5} />
      {/* Subtle ping effect behind */}
      <div className="absolute inset-0 rounded-full border border-primary/30 opacity-0 group-hover:animate-ping-slow motion-reduce:animate-none pointer-events-none" />
    </div>
  );
}
