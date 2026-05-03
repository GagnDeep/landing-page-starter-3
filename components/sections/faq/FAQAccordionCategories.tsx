import { faqContent } from "@/content/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQAccordionCategories() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="space-y-16">
          {faqContent.categories.map((category, catIdx) => (
            <div key={catIdx} id={`cat-${catIdx}`}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 pb-4 border-b border-border/50">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.items.map((item, itemIdx) => (
                  <AccordionItem key={itemIdx} value={`item-${catIdx}-${itemIdx}`} className="bg-muted/10 border border-border/50 rounded-2xl px-6">
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
          ))}
        </div>
      </div>
    </section>
  );
}
