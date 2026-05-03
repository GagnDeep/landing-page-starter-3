import { homeContent } from "@/content/home";
import { CheckmarkBadge02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function TechAndOffer() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Technology & Comforts */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              {homeContent.technology.title}
            </h2>
            <ul className="space-y-6">
              {homeContent.technology.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-muted-foreground">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <HugeiconsIcon icon={CheckmarkBadge02Icon} className="size-5" strokeWidth={2} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* New Patient Special Offer Box */}
          <div className="relative rounded-[2.5rem] bg-secondary/10 border border-secondary/20 p-8 md:p-12 overflow-hidden flex flex-col justify-center text-center items-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-background px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-6 shadow-sm">
              Limited Time
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">
              {homeContent.specialOffer.title}
            </h3>

            <p className="text-lg text-muted-foreground mb-8 relative z-10 max-w-sm">
              {homeContent.specialOffer.description}
            </p>

            <CTAGlow className="relative z-10">
              <Button size="lg" asChild className="rounded-full px-8 bg-secondary text-secondary-foreground hover:bg-secondary/80">
                <Link href={homeContent.specialOffer.cta.href}>
                  {homeContent.specialOffer.cta.label}
                </Link>
              </Button>
            </CTAGlow>
          </div>

        </div>

        {/* Financing Callout */}
        <div className="mt-16 md:mt-24 text-center max-w-3xl mx-auto p-8 rounded-3xl bg-muted/30 border border-border/40">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            {homeContent.financing.title}
          </h3>
          <p className="text-muted-foreground mb-6">
            {homeContent.financing.description}
          </p>
          <Link href={homeContent.financing.link.href} className="text-primary font-semibold hover:underline">
            {homeContent.financing.link.label} &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
