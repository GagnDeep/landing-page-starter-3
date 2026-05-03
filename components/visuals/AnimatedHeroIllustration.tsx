"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FirstAidKitIcon, Shield01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface AnimatedHeroIllustrationProps {
  className?: string;
}

export const AnimatedHeroIllustration: React.FC<AnimatedHeroIllustrationProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  if (!mounted) return <div className={cn("w-full h-full min-h-[400px] bg-muted/20 rounded-3xl", className)} />;

  return (
    <div className={cn("relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-3xl bg-secondary/20", className)}>
      {/* Central Element */}
      <div className="relative z-10 w-48 h-48 bg-background rounded-full shadow-2xl flex items-center justify-center border-8 border-primary/10 animate-fade-in">
        <HugeiconsIcon icon={FirstAidKitIcon} size={80} className="text-primary motion-safe:animate-pulse" strokeWidth={1.5} />
      </div>

      {/* Orbiting Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120%] h-[120%] rounded-full border border-primary/20 motion-safe:animate-[spin_20s_linear_infinite]" />

        {/* Floating Icons positioned absolutely to simulate orbiting */}
        <div className="absolute top-[15%] left-[20%] bg-background p-3 rounded-full shadow-lg motion-safe:animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <HugeiconsIcon icon={Shield01Icon} size={24} className="text-accent" strokeWidth={2} />
        </div>
        <div className="absolute bottom-[20%] right-[15%] bg-background p-3 rounded-full shadow-lg motion-safe:animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}>
          <HugeiconsIcon icon={SparklesIcon} size={24} className="text-primary" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};
