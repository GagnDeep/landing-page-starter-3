import React from "react"
import Link from "next/link"
import { footerLinks, clinicInfo } from "@/content/navigation"
import { MicroIconSet } from "@/components/visuals"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-1 flex flex-col space-y-6 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <MicroIconSet
                iconType="tooth"
                size={24}
                className="rounded-md bg-primary/5 p-2 text-primary"
              />
              <span className="font-heading text-xl font-semibold tracking-tight">
                {clinicInfo.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Gentle, technology-driven care. We are redefining the dental
              experience to prioritize your comfort and well-being.
            </p>
            <div className="mt-2 flex flex-col space-y-2">
              <a
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {clinicInfo.phone}
              </a>
              <a
                href={`mailto:${clinicInfo.email}`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {clinicInfo.email}
              </a>
              <p className="text-sm text-muted-foreground">
                {clinicInfo.address}
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
            <div className="flex flex-col space-y-4">
              <h4 className="font-heading text-lg font-semibold text-foreground">
                Treatments
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h4 className="font-heading text-lg font-semibold text-foreground">
                Clinic
              </h4>
              <ul className="space-y-3">
                {footerLinks.clinic.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 flex flex-col space-y-4 sm:col-span-1">
              <h4 className="font-heading text-lg font-semibold text-foreground">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-center text-xs text-muted-foreground md:text-left">
            {clinicInfo.copyright}
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            Designed with{" "}
            <MicroIconSet
              iconType="sparkles"
              size={12}
              className="inline-flex bg-transparent p-0 hover:scale-100 hover:bg-transparent"
            />{" "}
            in Patiala
          </div>
        </div>
      </div>
    </footer>
  )
}
