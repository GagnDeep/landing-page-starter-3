import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Alert02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function EmergencyBanner() {
  return (
    <section className="bg-destructive text-destructive-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-background/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
          <div className="flex items-center gap-6">
             <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
               <HugeiconsIcon icon={Alert02Icon} size={28} className="text-white" />
             </div>
             <div>
               <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                 {homeContent.emergencyBanner.title}
               </h2>
               <p className="text-white/90">
                 {homeContent.emergencyBanner.description}
               </p>
             </div>
          </div>
          <Button asChild size="lg" variant="secondary" className="rounded-full shrink-0 font-bold whitespace-nowrap">
            <Link href="/contact">
              {homeContent.emergencyBanner.cta}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
