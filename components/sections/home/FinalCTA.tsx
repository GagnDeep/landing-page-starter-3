import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Soft background shape */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute bottom-0 left-1/2 w-full max-w-5xl aspect-[3/1] bg-primary/10 rounded-[100%] blur-3xl -translate-x-1/2 translate-y-1/2 -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {homeContent.finalCta.title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          {homeContent.finalCta.subtitle}
        </p>

        <CTAGlow>
          <Button size="lg" asChild className="rounded-full px-10 h-14 text-lg">
            <Link href={homeContent.finalCta.cta.href}>
              {homeContent.finalCta.cta.label}
            </Link>
          </Button>
        </CTAGlow>
      </div>
    </section>
  );
}
