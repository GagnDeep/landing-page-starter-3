import { careersContent } from "@/content/careers";
import { FavouriteIcon, BalanceScaleIcon, LaptopProgrammingIcon, BrainIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function CareersBenefits() {
  const getIconForBenefit = (index: number) => {
    switch (index) {
      case 0: return FavouriteIcon;
      case 1: return BalanceScaleIcon;
      case 2: return LaptopProgrammingIcon;
      case 3: return BrainIcon;
      default: return FavouriteIcon;
    }
  };

  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {careersContent.benefits.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {careersContent.benefits.items.map((benefit, idx) => (
            <div key={idx} className="bg-background border border-border/50 rounded-[2rem] p-8 hover:shadow-sm transition-shadow group">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                <HugeiconsIcon icon={getIconForBenefit(idx)} className="size-7" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
