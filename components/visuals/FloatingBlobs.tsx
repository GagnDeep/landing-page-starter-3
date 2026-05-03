"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

export const FloatingBlobs: React.FC<FloatingBlobsProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)} aria-hidden="true">
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-[80px] motion-safe:animate-[blob_7s_infinite]"
      />
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-[80px] motion-safe:animate-[blob_9s_infinite_2s]"
      />
      <div
        className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-secondary/30 rounded-full mix-blend-multiply filter blur-[80px] motion-safe:animate-[blob_8s_infinite_4s]"
      />
    </div>
  );
};
