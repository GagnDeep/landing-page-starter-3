import React from "react";
import Link from "next/link";
import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import { Shield01Icon, CreditCardIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function PricingFinancials() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-card border border-border/50 p-8 md:p-10 rounded-3xl">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
               <HugeiconsIcon icon={Shield01Icon} size={28} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">{pricingContent.insurance.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {pricingContent.insurance.description}
            </p>
            <div className="flex flex-wrap gap-4 opacity-60 font-heading font-bold grayscale">
               {pricingContent.insurance.partners.map((p, i) => <span key={i}>{p}</span>)}
            </div>
          </div>

          <div className="bg-card border border-border/50 p-8 md:p-10 rounded-3xl">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
               <HugeiconsIcon icon={CreditCardIcon} size={28} className="text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">{pricingContent.financing.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {pricingContent.financing.description}
            </p>
            <div className="flex flex-wrap gap-4 opacity-60 font-heading font-bold grayscale">
               {pricingContent.financing.partners.map((p, i) => <span key={i}>{p}</span>)}
            </div>
          </div>

        </div>

        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">{pricingContent.faq.title}</h2>
          <div className="text-left space-y-6 bg-card border border-border/40 p-8 rounded-3xl">
            {pricingContent.faq.questions.map((faq, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            <Link href="/contact">{pricingContent.cta.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
