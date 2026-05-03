import { aboutContent } from "@/content/about";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function FacilityAndCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">

        {/* Facility & Community (Split Layout) */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-muted/20 border border-border/40 rounded-[2.5rem] p-10">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {aboutContent.facility.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {aboutContent.facility.description}
            </p>
          </div>
          <div className="bg-secondary/10 border border-secondary/20 rounded-[2.5rem] p-10">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {aboutContent.community.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {aboutContent.community.description}
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            {aboutContent.finalCta.title}
          </h2>
          <CTAGlow>
            <Button size="lg" asChild className="rounded-full px-10 h-14 text-lg">
              <Link href={aboutContent.finalCta.cta.href}>
                {aboutContent.finalCta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>

      </div>
    </section>
  );
}
