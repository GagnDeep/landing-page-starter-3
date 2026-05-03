import { homeContent } from "@/content/home";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Features() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="max-w-xl sticky top-32">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {homeContent.features.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine modern clinical excellence with a compassionate, human-centered approach to ensure you receive the best possible care without the anxiety.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {homeContent.features.items.map((feature, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-muted/20 border border-border/40 hover:border-primary/20 transition-colors">
                <div className="shrink-0 mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-6" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
