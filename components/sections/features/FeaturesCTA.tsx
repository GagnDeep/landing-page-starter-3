import { featuresContent } from "@/content/features";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function FeaturesCTA() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-8">

        {/* Emergency Callout (Features version) */}
        <div className="bg-destructive/5 border border-destructive/10 rounded-[3rem] p-10 md:p-16 mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-6">
              <HugeiconsIcon icon={Alert01Icon} className="size-6" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
              {featuresContent.emergency.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {featuresContent.emergency.description}
            </p>
          </div>
          <Button variant="destructive" size="lg" asChild className="rounded-full shrink-0 w-full md:w-auto text-base px-8">
            <a href={featuresContent.emergency.cta.href}>
              {featuresContent.emergency.cta.label}
            </a>
          </Button>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {featuresContent.finalCta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {featuresContent.finalCta.subtitle}
          </p>
          <CTAGlow>
            <Button size="lg" asChild className="rounded-full px-10 h-14 text-lg">
              <Link href={featuresContent.finalCta.cta.href}>
                {featuresContent.finalCta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>

      </div>
    </div>
  );
}
