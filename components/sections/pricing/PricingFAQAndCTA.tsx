import { pricingContent } from "@/content/pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function PricingFAQAndCTA() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-8">

        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            {pricingContent.faq.title}
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {pricingContent.faq.items.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-background border border-border/50 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            {pricingContent.finalCta.title}
          </h2>
          <CTAGlow>
            <Button size="lg" asChild className="rounded-full px-10 h-14 text-lg">
              <Link href={pricingContent.finalCta.cta.href}>
                {pricingContent.finalCta.cta.label}
              </Link>
            </Button>
          </CTAGlow>
        </div>

      </div>
    </section>
  );
}
