import React from "react";
import { contactContent } from "@/content/contact";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { Call02Icon, Mail02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center justify-center text-center">
      <AnimatedGradientMesh variant="primary" className="opacity-60 dark:opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            {contactContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {contactContent.hero.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
           <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-border/50 px-6 py-4 rounded-full shadow-lg">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
               <HugeiconsIcon icon={Call02Icon} size={20} className="text-primary" />
             </div>
             <span className="font-heading font-bold text-lg">{contactContent.info.phone}</span>
           </div>

           <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-border/50 px-6 py-4 rounded-full shadow-lg">
             <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
               <HugeiconsIcon icon={Mail02Icon} size={20} className="text-accent" />
             </div>
             <span className="font-heading font-bold text-lg">{contactContent.info.email}</span>
           </div>
        </div>
      </div>
    </section>
  );
}
