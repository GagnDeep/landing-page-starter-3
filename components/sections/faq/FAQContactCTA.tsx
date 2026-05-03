import { faqContent } from "@/content/faq";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function FAQContactCTA() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          {faqContent.finalCta.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {faqContent.finalCta.subtitle}
        </p>
        <CTAGlow>
          <Button size="lg" asChild className="rounded-full px-10 h-14 text-lg">
            <Link href={faqContent.finalCta.cta.href}>
              {faqContent.finalCta.cta.label}
            </Link>
          </Button>
        </CTAGlow>
      </div>
    </section>
  );
}
