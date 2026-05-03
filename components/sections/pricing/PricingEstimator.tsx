import React from "react";
import { pricingContent } from "@/content/pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingEstimator() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          <div className="text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              {pricingContent.philosophy.title}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {pricingContent.philosophy.description}
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="mb-8 space-y-2">
              <h3 className="font-heading text-2xl font-bold">{pricingContent.estimator.title}</h3>
              <p className="text-sm text-muted-foreground italic">{pricingContent.estimator.note}</p>
            </div>

            <Accordion type="multiple" className="w-full space-y-4">
              {pricingContent.estimator.categories.map((category, idx) => (
                <AccordionItem key={idx} value={`category-${idx}`} className="border border-border/40 rounded-2xl px-6 bg-muted/10">
                  <AccordionTrigger className="font-heading font-bold text-lg hover:text-primary hover:no-underline py-6">
                    {category.name}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-3 border-b border-border/20 last:border-0">
                          <span className="font-medium text-foreground/90">{item.name}</span>
                          <span className="text-primary font-semibold font-mono bg-primary/10 px-3 py-1 rounded-md">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
