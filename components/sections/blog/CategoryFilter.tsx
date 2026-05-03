"use client";

import { blogContent } from "@/content/blog";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function CategoryFilter() {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <div className="container mx-auto px-4 md:px-8 pb-12">
      <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-4 border-b border-border/50">
        {blogContent.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={cn(
              "whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-colors",
              activeCat === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
