import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { CleanIcon, MedicalFileIcon, DentalToothIcon, SecurityIcon } from "@hugeicons/core-free-icons";
import React from "react";

type ServiceType = "preventive" | "restorative" | "cosmetic" | "pediatric";

interface AnimatedServiceIconsProps {
  type: ServiceType;
  className?: string;
}

export function AnimatedServiceIcons({ type, className }: AnimatedServiceIconsProps) {
  const getIcon = () => {
    switch (type) {
      case "preventive":
        return CleanIcon;
      case "restorative":
        return MedicalFileIcon;
      case "cosmetic":
        return DentalToothIcon; // A sparkling tooth visually represents cosmetic
      case "pediatric":
        return SecurityIcon; // Represents safe/gentle care
      default:
        return DentalToothIcon;
    }
  };

  const Icon = getIcon();

  return (
    <div className={cn("relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground", className)}>
      <HugeiconsIcon
        icon={Icon}
        strokeWidth={2}
        className="size-8 transition-transform duration-500 group-hover:rotate-6"
      />
      {/* Subtle background pulse */}
      <div className="absolute inset-0 rounded-2xl bg-primary/20 scale-150 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
    </div>
  );
}
