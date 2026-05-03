import React from "react";
import { homeContent } from "@/content/home";
import {
  SmileIcon,
  AlignLeftIcon,
  FirstAidKitIcon,
  Baby01Icon,
  MedicalFileIcon,
  StethoscopeIcon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ServicesGrid() {
  const icons = [FirstAidKitIcon, AlignLeftIcon, SmileIcon, Baby01Icon, MedicalFileIcon, StethoscopeIcon];

  return (
    <section className="py-24 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {homeContent.servicesGrid.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.servicesGrid.services.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <HugeiconsIcon icon={Icon} size={24} className="text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
