import React from "react";
import { homeContent } from "@/content/home";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQHighlights() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
             <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
               {homeContent.faqHighlights.title}
             </h2>
             <div className="h-1 w-20 bg-primary rounded-full mb-8" />
             <p className="text-muted-foreground text-lg mb-8">
               We believe in full transparency. Here are quick answers to the questions we hear most often from new patients.
             </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {homeContent.faqHighlights.questions.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-border/40 px-2">
                  <AccordionTrigger className="text-left font-heading font-bold text-lg hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                    {faq.a}
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
