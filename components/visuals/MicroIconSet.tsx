import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Shield01Icon,
  SparklesIcon,
  StethoscopeIcon,
  AiBrain01Icon
} from "@hugeicons/core-free-icons";

interface MicroIconSetProps {
  className?: string;
  variant?: "hygiene" | "technology" | "care";
}

export function MicroIconSet({ className, variant = "care" }: MicroIconSetProps) {

  const iconConfig = {
    hygiene: Shield01Icon,
    technology: AiBrain01Icon,
    care: StethoscopeIcon,
  }[variant];

  return (
    <div className={cn("relative flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary", className)}>
      <HugeiconsIcon icon={iconConfig} strokeWidth={Number(2)} className="w-6 h-6 z-10" />

      {/* Outer rotating ring */}
      <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] motion-reduce:animate-none opacity-50" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      {/* Decorative sparkle */}
      {variant === "hygiene" && (
        <HugeiconsIcon
          icon={SparklesIcon}
          strokeWidth={Number(2)}
          className="absolute -top-1 -right-1 w-4 h-4 text-accent animate-pulse"
        />
      )}
    </div>
  );
}