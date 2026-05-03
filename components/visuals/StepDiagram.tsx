import { cn } from "@/lib/utils";
import React from "react";

interface Step {
  title: string;
  description: string;
}

interface StepDiagramProps {
  steps: Step[];
  className?: string;
}

export function StepDiagram({ steps, className }: StepDiagramProps) {
  return (
    <div className={cn("relative flex flex-col md:flex-row gap-8 justify-between", className)}>
      {/* Connecting Line */}
      <div className="absolute top-8 left-8 right-8 h-0.5 bg-border hidden md:block -z-10">
        <div className="h-full bg-primary/50 animate-[width_2s_ease-out_forwards]" style={{ width: '100%' }} />
      </div>

      {/* Vertical Connecting Line for Mobile */}
      <div className="absolute top-8 bottom-8 left-8 w-0.5 bg-border md:hidden -z-10" />

      {steps.map((step, index) => (
        <div key={index} className="relative flex flex-col items-start md:items-center text-left md:text-center group">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary/10 text-xl font-bold text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground mb-4">
            {index + 1}
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
