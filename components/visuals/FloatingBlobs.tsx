"use client";

import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden blur-3xl opacity-30 pointer-events-none", className)} aria-hidden="true">
      {/* Primary Blob */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen animate-[blob_20s_infinite] motion-reduce:animate-none"
      />
      {/* Secondary Blob */}
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply dark:mix-blend-screen animate-[blob_25s_infinite] [animation-delay:2s] motion-reduce:animate-none"
      />
      {/* Accent Blob */}
      <div
        className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen animate-[blob_22s_infinite] [animation-delay:4s] motion-reduce:animate-none"
      />
    </div>
  );
}