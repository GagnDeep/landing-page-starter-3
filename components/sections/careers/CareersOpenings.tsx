import { careersContent } from "@/content/careers";
import { Briefcase02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function CareersOpenings() {
  return (
    <section className="py-24 bg-background border-y border-border/40">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {careersContent.openings.title}
          </h2>
          {careersContent.openings.items.length === 0 && (
            <p className="text-lg text-muted-foreground">
              {careersContent.openings.noOpeningsMessage}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {careersContent.openings.items.length > 0 ? (
            careersContent.openings.items.map((job: {title: string, type: string, location: string}, idx: number) => (
              <Link key={idx} href="#apply" className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-[2rem] bg-muted/10 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HugeiconsIcon icon={Briefcase02Icon} className="size-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center text-primary font-semibold">
                  {careersContent.openings.applyNowLabel}
                  <HugeiconsIcon icon={ArrowRight02Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </div>
              </Link>
            ))
          ) : (
             <div className="p-8 text-center bg-muted/10 border border-border/50 rounded-[2rem]">
               <HugeiconsIcon icon={Briefcase02Icon} className="size-10 text-muted-foreground/30 mx-auto mb-4" strokeWidth={2} />
               <p className="text-muted-foreground font-medium">{careersContent.openings.noRolesLabel}</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
