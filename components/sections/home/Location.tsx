import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Location01Icon, Time01Icon, Call02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Location() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {homeContent.location.title}
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="mt-1">
                   <HugeiconsIcon icon={Location01Icon} size={24} className="text-primary" />
                 </div>
                 <div>
                   <h3 className="font-bold mb-1">{homeContent.location.labels.address}</h3>
                   <p className="text-muted-foreground">{homeContent.location.address}</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="mt-1">
                   <HugeiconsIcon icon={Time01Icon} size={24} className="text-primary" />
                 </div>
                 <div>
                   <h3 className="font-bold mb-1">{homeContent.location.labels.hours}</h3>
                   <p className="text-muted-foreground">{homeContent.location.hours}</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="mt-1">
                   <HugeiconsIcon icon={Call02Icon} size={24} className="text-primary" />
                 </div>
                 <div>
                   <h3 className="font-bold mb-1">{homeContent.location.labels.contact}</h3>
                   <p className="text-muted-foreground">{homeContent.location.phone}</p>
                 </div>
               </div>
            </div>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  {homeContent.location.cta}
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-muted rounded-[2rem] overflow-hidden border border-border/50 relative">
             {/* Map Placeholder */}
             <div className="absolute inset-0 bg-secondary/50 flex flex-col items-center justify-center text-center p-6">
                <HugeiconsIcon icon={Location01Icon} size={48} className="text-primary/50 mb-4" />
                <p className="text-muted-foreground font-medium">{homeContent.location.labels.mapPlaceholder}</p>
                <p className="text-sm text-muted-foreground opacity-70">Leela Bhawan, Patiala</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
