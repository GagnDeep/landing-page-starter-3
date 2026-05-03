import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tick01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
export function SpecialOffer() {
  return (
    <section className="py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-primary text-primary-foreground rounded-[3rem] p-10 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-2xl rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-semibold mb-8 backdrop-blur-md">
                {pricingContent.newPatientSpecial.badge}
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                {pricingContent.newPatientSpecial.title}
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-md">
                {pricingContent.newPatientSpecial.description}
              </p>
              <div className="text-5xl md:text-6xl font-bold font-heading mb-10">
                {pricingContent.newPatientSpecial.price}
              </div>

              <Button size="lg" variant="secondary" asChild className="rounded-full px-10 h-14 text-lg">
                <Link href={pricingContent.newPatientSpecial.cta.href}>
                  {pricingContent.newPatientSpecial.cta.label}
                </Link>
              </Button>
            </div>

            <div className="bg-background/5 rounded-[2rem] p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="font-heading text-2xl font-bold mb-6">{pricingContent.newPatientSpecial.includesTitle}</h3>
              <ul className="space-y-4">
                {pricingContent.newPatientSpecial.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg text-primary-foreground/90">
                    <HugeiconsIcon icon={Tick01Icon} className="size-6 text-secondary shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
