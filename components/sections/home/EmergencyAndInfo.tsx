import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert01Icon, Location01Icon, TimeQuarterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { globalContent } from "@/content/global";

export function EmergencyAndInfo() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Emergency Callout */}
          <div className="bg-destructive/5 border border-destructive/10 rounded-3xl p-8 flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-6">
              <HugeiconsIcon icon={Alert01Icon} className="size-6" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              {homeContent.emergency.title}
            </h3>
            <p className="text-muted-foreground mb-8 flex-1">
              {homeContent.emergency.description}
            </p>
            <Button variant="destructive" asChild className="rounded-full w-full sm:w-auto">
              <a href={homeContent.emergency.cta.href}>
                {homeContent.emergency.cta.label}
              </a>
            </Button>
          </div>

          {/* Location Info */}
          <div className="bg-muted/20 border border-border/40 rounded-3xl p-8 flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <HugeiconsIcon icon={Location01Icon} className="size-6" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              {homeContent.location.title}
            </h3>
            <p className="text-muted-foreground mb-8 flex-1">
              {homeContent.location.subtitle}
              <br /><br />
              <span className="font-medium">{globalContent.contact.address}</span>
            </p>
            <Button variant="outline" asChild className="rounded-full w-full sm:w-auto">
              <a href={globalContent.contact.mapUrl} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>

          {/* Operating Hours (Spans full width on tablet, 1 col on desktop) */}
          <div className="md:col-span-2 lg:col-span-1 bg-muted/20 border border-border/40 rounded-3xl p-8 flex flex-col items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <HugeiconsIcon icon={TimeQuarterIcon} className="size-6" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Operating Hours
            </h3>
            <ul className="w-full space-y-4 text-muted-foreground">
              {globalContent.hours.map((hour, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0 last:pb-0">
                  <span className="font-medium text-foreground">{hour.day}</span>
                  <span className="text-sm">{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
