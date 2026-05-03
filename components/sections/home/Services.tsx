import { homeContent } from "@/content/home";
import { AnimatedServiceIcons } from "@/components/visuals/AnimatedServiceIcons";
import Link from "next/link";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {homeContent.services.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeContent.services.items.map((service, idx) => {
            // Map the title to the specific ServiceType string expected by AnimatedServiceIcons
            let iconType: "preventive" | "restorative" | "cosmetic" | "pediatric" = "preventive";
            if (service.title.toLowerCase().includes("cosmetic")) iconType = "cosmetic";
            if (service.title.toLowerCase().includes("restorative")) iconType = "restorative";
            if (service.title.toLowerCase().includes("pediatric")) iconType = "pediatric";

            return (
              <div
                key={idx}
                className="group flex flex-col bg-background rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="mb-6">
                  <AnimatedServiceIcons type={iconType} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.link.href}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {service.link.label}
                  <HugeiconsIcon icon={ArrowRight02Icon} className="ml-2 size-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
