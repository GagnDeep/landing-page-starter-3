import React from "react";
import { homeContent } from "@/content/home";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";

export function Technology() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              {homeContent.technology.title}
            </h2>
            <ul className="space-y-4">
              {homeContent.technology.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-background/80">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={Tick02Icon} size={18} className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto perspective-1000">
             <div className="transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-0">
                <CodeWindowTyping />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
