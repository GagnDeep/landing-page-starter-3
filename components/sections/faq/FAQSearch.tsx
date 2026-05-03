"use client";

import { faqContent } from "@/content/faq";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FAQSearch() {
  return (
    <div className="container mx-auto px-4 md:px-8 -mt-8 relative z-20">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-muted-foreground">
            <HugeiconsIcon icon={Search01Icon} className="size-5" strokeWidth={2} />
          </div>
          <input
            type="text"
            placeholder={faqContent.searchPlaceholder}
            className="w-full h-16 pl-14 pr-6 rounded-full bg-background border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-base"
          />
        </div>
      </div>
    </div>
  );
}
