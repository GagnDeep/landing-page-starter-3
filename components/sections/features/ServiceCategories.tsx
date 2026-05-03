import { featuresContent } from "@/content/features";
import { AnimatedServiceIcons } from "@/components/visuals/AnimatedServiceIcons";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ServiceCategories() {
  const sections = [
    { ...featuresContent.preventive, iconType: "preventive" as const },
    { ...featuresContent.restorative, iconType: "restorative" as const },
    { ...featuresContent.cosmetic, iconType: "cosmetic" as const },
    { ...featuresContent.pediatric, iconType: "pediatric" as const },
  ];

  return (
    <div className="py-12">
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-[160px] py-16 md:py-24 border-b border-border/40 last:border-0"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

              {/* Info Side */}
              <div className="lg:w-1/3">
                <div className="sticky top-[180px]">
                  <AnimatedServiceIcons type={section.iconType} className="mb-6" />
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Services List Side */}
              <div className="lg:w-2/3 flex flex-col gap-6">
                {section.services.map((service, sIdx) => (
                  <div key={sIdx} className="bg-muted/10 border border-border/50 rounded-[2rem] p-8 md:p-10 hover:shadow-sm transition-shadow">
                    <h3 className="flex items-center gap-4 font-heading text-xl font-bold text-foreground mb-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-5" strokeWidth={2} />
                      </div>
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground pl-12 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
