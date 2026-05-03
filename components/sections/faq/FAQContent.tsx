import React from "react";
import Link from "next/link";
import { faqContent } from "@/content/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FAQContent() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Quick Links Sidebar */}
          <div className="lg:col-span-3 space-y-2 hidden lg:block sticky top-32 h-fit">
             <h3 className="font-heading font-bold text-lg mb-4">Categories</h3>
             {faqContent.categories.map((cat, idx) => (
               <a
                 key={idx}
                 href={`#category-${idx}`}
                 className="block py-2 text-muted-foreground hover:text-primary transition-colors"
               >
                 {cat.title}
               </a>
             ))}
          </div>

          {/* FAQ Accordions */}
          <div className="lg:col-span-9 space-y-16">
             {faqContent.categories.map((category, catIdx) => (
               <div key={catIdx} id={`category-${catIdx}`} className="scroll-mt-32">
                 <h2 className="font-heading text-2xl font-bold mb-6 pb-2 border-b border-border/40">
                   {category.title}
                 </h2>
                 <Accordion type="multiple" className="w-full">
                   {category.questions.map((faq, qIdx) => (
                     <AccordionItem key={qIdx} value={`cat-${catIdx}-q-${qIdx}`} className="border-border/40">
                       <AccordionTrigger className="text-left font-heading font-bold text-lg hover:text-primary transition-colors py-6">
                         {faq.q}
                       </AccordionTrigger>
                       <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                         {faq.a}
                       </AccordionContent>
                     </AccordionItem>
                   ))}
                 </Accordion>
               </div>
             ))}

             {/* CTA Box */}
             <div className="mt-16 bg-muted/20 border border-border/50 rounded-3xl p-8 md:p-12 text-center">
                <h3 className="font-heading text-2xl font-bold mb-4">{faqContent.cta.title}</h3>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  {faqContent.cta.message}
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">{faqContent.cta.cta}</Link>
                </Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
