"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
  className?: string;
}

export function HowItWorksDiagram({ steps, className }: Props) {
  return (
    <div className={cn("w-full max-w-5xl mx-auto py-12", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connecting Line (visible on md+) */}
        <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-border -z-10" />

        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center text-3xl font-heading text-primary relative mb-6 transition-all duration-500 group-hover:border-primary group-hover:shadow-lg motion-reduce:transition-none">
              <span className="relative z-10">{step.number}</span>
              <div className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out motion-reduce:transition-none" />
            </div>
            <h3 className="text-xl font-heading mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
