import Link from "next/link"
import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <h2 className="font-heading text-lg font-bold">{siteConfig.name}</h2>
          <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          <p className="text-xs text-muted-foreground border-l-2 border-primary pl-2">
            Setu Direct privately prepares and checks Indian consular paperwork in the UK. We are an independent business and do not issue visas or passports.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/oci" className="hover:text-primary">OCI Card</Link></li>
            <li><Link href="/passport" className="hover:text-primary">Passport Renewal</Link></li>
            <li><Link href="/visa" className="hover:text-primary">India Visa</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/guides" className="hover:text-primary">Guides</Link></li>
            <li><Link href="/fees-and-timelines" className="hover:text-primary">Fees & Timelines</Link></li>
            <li><Link href="/packages" className="hover:text-primary">Packages</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/start" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 flex flex-col items-center justify-between border-t px-4 pt-6 md:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
