import { cn } from "@/lib/utils";
import React from "react";

export function FloatingBlobs({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-20", className)}>
      <svg className="absolute left-[10%] top-[20%] w-64 h-64 text-secondary/30 blur-3xl animate-[spin_30s_linear_infinite] md:w-96 md:h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M42.7,-74.6C56.6,-66.6,69.9,-56.3,78.2,-43.1C86.5,-29.9,89.8,-15,88.7,-0.6C87.6,13.8,82.1,27.5,73.5,39.2C64.9,50.9,53.2,60.6,40.1,68.4C27,76.2,13.5,82.1,-0.5,83C-14.5,83.9,-29,79.8,-41.8,72C-54.6,64.2,-65.7,52.8,-73.2,39.6C-80.7,26.4,-84.6,11.5,-84.2,-3.3C-83.8,-18.1,-79.1,-32.8,-70.7,-44.6C-62.3,-56.4,-50.2,-65.3,-37,-73.6C-23.8,-81.9,-11.9,-89.6,1.4,-92C14.7,-94.4,28.8,-82.6,42.7,-74.6Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute right-[5%] bottom-[10%] w-72 h-72 text-primary/20 blur-3xl animate-[spin_40s_linear_infinite_reverse] md:w-[400px] md:h-[400px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M47.7,-70.3C59.7,-59.5,66.1,-42.6,71.2,-25.9C76.3,-9.2,80.1,7.3,75.9,21.7C71.7,36.1,59.5,48.4,45.8,58.3C32.1,68.2,16.1,75.7,1.1,73.8C-13.9,71.9,-27.8,60.6,-40.8,50C-53.8,39.4,-65.9,29.5,-71.4,16.5C-76.9,3.5,-75.8,-12.6,-68.9,-26.1C-62,-39.6,-49.3,-50.5,-35.8,-60.8C-22.3,-71.1,-11.2,-80.8,3.2,-86.3C17.6,-91.8,35.7,-81.1,47.7,-70.3Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
}
