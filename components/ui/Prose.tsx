import { cn } from "@/lib/utils";
import React from 'react';

type ProseProps = React.HTMLAttributes<HTMLDivElement>;

export function Prose({ className, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-[70ch]",
        className
      )}
      {...props}
    />
  );
}
