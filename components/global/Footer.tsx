import { globalContent } from "@/content/global";
import { siteImages } from "@/lib/images";
import Link from "next/link";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, CallIcon, Mail01Icon } from "@hugeicons/core-free-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Extract unique photographer credits
  const creditsMap = new Map();
  Object.values(siteImages).forEach((img) => {
    if (!creditsMap.has(img.credit.url)) {
      creditsMap.set(img.credit.url, img.credit);
    }
  });
  const uniqueCredits = Array.from(creditsMap.values());

  return (
    <footer className="border-t border-border bg-muted/20 pb-8 pt-16 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 xl:gap-24">

          {/* Brand & Contact Info (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Dr. Bansal&apos;s <span className="font-sans text-xl font-medium text-muted-foreground">Dental Care</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Providing calm, comprehensive, and gentle dental care to families in Patiala. Your healthy smile is our priority.
            </p>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <HugeiconsIcon icon={Location01Icon} className="mt-0.5 shrink-0 text-primary" strokeWidth={2} />
                <a href={globalContent.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {globalContent.contact.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={CallIcon} className="shrink-0 text-primary" strokeWidth={2} />
                <a href={`tel:${globalContent.contact.phone}`} className="hover:text-primary transition-colors">
                  {globalContent.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={Mail01Icon} className="shrink-0 text-primary" strokeWidth={2} />
                <a href={`mailto:${globalContent.contact.email}`} className="hover:text-primary transition-colors">
                  {globalContent.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Columns */}
          {globalContent.navigation.footer.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="font-heading text-lg font-semibold text-foreground">{group.title}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Operating Hours & Emergency Callout */}
        <div className="my-12 rounded-2xl bg-primary/5 border border-primary/10 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h4 className="font-heading text-lg font-semibold text-foreground">Clinic Hours</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {globalContent.hours.map((hour, idx) => (
                <li key={idx}>
                  <span className="font-medium text-foreground">{hour.day}:</span> {hour.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2 md:text-right">
            <h4 className="font-heading text-lg font-semibold text-destructive">Dental Emergency?</h4>
            <p className="text-sm text-muted-foreground">We reserve daily appointments for urgent care.</p>
            <p className="text-lg font-bold text-foreground">
              <a href={`tel:${globalContent.contact.emergencyPhone}`} className="hover:text-destructive transition-colors">
                {globalContent.contact.emergencyPhone}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border text-xs text-muted-foreground/60">
          <p>© {currentYear} Dr. Bansal&apos;s Dental Care. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {globalContent.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Image Credits (Hidden by default, expandable or just subtly placed) */}
        <div className="mt-8 pt-4 border-t border-border/50 text-[10px] text-muted-foreground/40 text-center max-w-3xl mx-auto">
          Photography sourced via Unsplash. Credits to:{" "}
          {uniqueCredits.map((credit, i) => (
            <React.Fragment key={credit.url}>
              <a href={credit.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {credit.name}
              </a>
              {i < uniqueCredits.length - 1 ? ", " : "."}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
