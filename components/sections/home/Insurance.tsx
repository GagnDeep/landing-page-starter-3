import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { Shield01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";

export function Insurance() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-secondary/20 border border-border/40 rounded-3xl p-8 md:p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-background shadow-sm flex items-center justify-center mx-auto mb-6">
             <HugeiconsIcon icon={Shield01Icon} size={32} className="text-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {homeContent.insurance.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            {homeContent.insurance.description}
          </p>
                              <div className="flex flex-wrap justify-center gap-6 items-center opacity-60 grayscale mb-8 font-heading font-bold text-lg">
             {homeContent.insurance.partners && homeContent.insurance.partners.map((partner, idx) => (
               <span key={idx}>{partner}</span>
             ))}
          </div>
          <Button asChild variant="outline" className="rounded-full">
             <Link href="/pricing">View All Partners</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
