"use client";

import { featuresContent } from "@/content/features";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function StickyNav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      featuresContent.categories.forEach((cat) => {
        const id = cat.href.replace("#", "");
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = id;
        }
      });
      // We must not trigger a cascading render if possible,
      // but since activeSection is local to this small nav bar, it's mostly safe.
      // Wrapping in setTimeout for Next.js strict mode just in case.
      setTimeout(() => setActiveSection(current), 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-[80px] z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center overflow-x-auto py-4 hide-scrollbar gap-8">
          {featuresContent.categories.map((cat) => {
            const id = cat.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={cat.href}
                href={cat.href}
                className={cn(
                  "whitespace-nowrap text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
