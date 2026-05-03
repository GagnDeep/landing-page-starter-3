"use client"

import React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  StethoscopeIcon,
  Hospital02Icon,
  SparklesIcon,
  AiBrain01Icon,
  MedicalFileIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  iconType: "tooth" | "stethoscope" | "hospital" | "sparkles" | "tech"
  size?: number
}

export function MicroIconSet({
  iconType,
  size = 24,
  className,
  ...props
}: Props) {
  const iconMap = {
    tooth: MedicalFileIcon, // Fallback since ToothIcon might not exist in this version
    stethoscope: StethoscopeIcon,
    hospital: Hospital02Icon,
    sparkles: SparklesIcon,
    tech: AiBrain01Icon,
  }

  const IconComponent = iconMap[iconType]

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20",
        className
      )}
      {...props}
    >
      <HugeiconsIcon
        icon={IconComponent}
        width={size}
        height={size}
        strokeWidth={1.5}
      />
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-primary/20 ring-inset" />
    </div>
  )
}
