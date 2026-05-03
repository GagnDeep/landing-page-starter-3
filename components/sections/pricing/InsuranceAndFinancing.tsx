import { pricingContent } from "@/content/pricing";
import { Shield01Icon, CreditCardIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function InsuranceAndFinancing() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">

          <div className="bg-muted/10 border border-border/50 rounded-[2.5rem] p-10 md:p-14">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8">
              <HugeiconsIcon icon={Shield01Icon} className="size-7" strokeWidth={2} />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              {pricingContent.insurance.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {pricingContent.insurance.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {pricingContent.insurance.acceptedProviders.map((provider, idx) => (
                <span key={idx} className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                  {provider}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-secondary/5 border border-secondary/20 rounded-[2.5rem] p-10 md:p-14">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-8">
              <HugeiconsIcon icon={CreditCardIcon} className="size-7" strokeWidth={2} />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              {pricingContent.financing.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {pricingContent.financing.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
