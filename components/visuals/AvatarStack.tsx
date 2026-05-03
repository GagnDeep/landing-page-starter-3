import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface AvatarStackProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function AvatarStack({ images, className }: AvatarStackProps) {
  return (
    <div className={cn("flex items-center -space-x-4", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative inline-block h-12 w-12 overflow-hidden rounded-full border-2 border-background ring-2 ring-transparent transition-all duration-300 hover:z-10 hover:ring-primary"
          style={{ zIndex: images.length - index }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
      ))}
    </div>
  );
}
