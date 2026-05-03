"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Briefcase01Icon,
  Calendar01Icon,
  StethoscopeIcon,
  Shield01Icon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface MicroIconSetProps {
  className?: string;
  variant?: "solid" | "outline";
}

export const MicroIconSet: React.FC<MicroIconSetProps> = ({
  className,
  variant = "outline"
}) => {
  const icons = [
    { Icon: StethoscopeIcon, color: "text-primary", bg: "bg-primary/10" },
    { Icon: Shield01Icon, color: "text-accent", bg: "bg-accent/10" },
    { Icon: Calendar01Icon, color: "text-secondary-foreground", bg: "bg-secondary" },
    { Icon: Briefcase01Icon, color: "text-foreground", bg: "bg-muted" },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {icons.map(({ Icon, color, bg }, idx) => (
        <div
          key={idx}
          className={cn(
            "p-3 rounded-2xl transition-all duration-300 ease-out-quart group cursor-pointer",
            variant === "solid" ? bg : "border border-border bg-card",
            "hover:scale-110 hover:shadow-md hover:-translate-y-1"
          )}
          style={{ transitionDelay: `${idx * 50}ms` }}
        >
          <HugeiconsIcon icon={Icon}
            size={24}
            className={cn(
              color,
              "transition-transform duration-300 group-hover:rotate-6"
            )}
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
};
