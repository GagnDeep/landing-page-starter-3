import React from "react";
import Link from "next/link";
import { globalContent } from "@/content/global";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = globalContent.footer.bottom.copyright.replace("{year}", currentYear.toString());

  return (
    <footer className="bg-foreground text-background border-t border-border/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-foreground font-bold font-heading transition-transform group-hover:scale-105">
                N
              </div>
              <span className="font-heading font-semibold text-xl tracking-tight">
                {globalContent.navigation.logo.text}
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              {globalContent.footer.description}
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-medium text-lg mb-6">{globalContent.footer.links.services.title}</h4>
            <ul className="space-y-4">
              {globalContent.footer.links.services.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-background/70 hover:text-background text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-lg mb-6">{globalContent.footer.links.clinic.title}</h4>
            <ul className="space-y-4">
              {globalContent.footer.links.clinic.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-background/70 hover:text-background text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-lg mb-6">{globalContent.footer.links.legal.title}</h4>
            <ul className="space-y-4">
              {globalContent.footer.links.legal.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-background/70 hover:text-background text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>{copyrightText}</p>
          <p>{globalContent.footer.bottom.address}</p>
        </div>
      </div>
    </footer>
  );
}
