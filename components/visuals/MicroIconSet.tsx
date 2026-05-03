"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type IconType = "tooth" | "sparkle" | "face" | "shield";

interface MicroIconSetProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
  animateOnHover?: boolean;
}

export function MicroIconSet({
  className,
  icon,
  animateOnHover = true,
  ...props
}: MicroIconSetProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const baseClasses = cn(
    "h-6 w-6 text-[var(--primary)] transition-transform duration-500",
    animateOnHover && "group-hover:scale-110",
    className
  );

  const getIconContent = () => {
    switch (icon) {
      case "tooth":
        return (
          <>
            <path d="M12 21 C14 21 16 18 16 15 C16 12 18 9 18 6 C18 3 15 2 12 2 C9 2 6 3 6 6 C6 9 8 12 8 15 C8 18 10 21 12 21 Z"
              stroke="currentColor" strokeWidth="1.5" fill="none" className="transition-all duration-300" />
            <path d="M12 2 L12 10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          </>
        );
      case "sparkle":
        return (
          <>
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
              stroke="currentColor" strokeWidth="1.5" fill="none"
              className={cn(isMounted && animateOnHover ? "group-hover:animate-[spin_4s_linear_infinite]" : "")} />
          </>
        );
      case "face":
        return (
          <>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M8 14 C8 14 10 17 12 17 C14 17 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9 9 L9.01 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 9 L15.01 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case "shield":
        return (
          <>
            <path d="M12 22 C12 22 20 18 20 12 V5 L12 2 L4 5 V12 C4 18 12 22 12 22 Z"
              stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M9 12 L11 14 L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
    }
  };

  return (
    <svg viewBox="0 0 24 24" className={baseClasses} {...props}>
      {getIconContent()}
    </svg>
  );
}
