import { homeContent } from "@/content/home";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FAQTeaser() {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {homeContent.faqTeaser.title}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4 mb-10">
            {homeContent.faqTeaser.items.map((item, idx) => (
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

          <div className="text-center">
            <Link
              href={homeContent.faqTeaser.link.href}
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              {homeContent.faqTeaser.link.label}
              <HugeiconsIcon icon={ArrowRight02Icon} className="ml-2 size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
