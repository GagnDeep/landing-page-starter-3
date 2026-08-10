import Link from "next/link"
import { siteConfig } from "@/lib/site"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Independence Strip */}
      <div className="bg-muted px-4 py-1.5 text-center text-xs font-medium text-muted-foreground">
        Setu Direct is an independent private company. We are not a government agency.
      </div>
      <div className="container flex h-14 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-heading text-lg font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/oci" className="transition-colors hover:text-primary">OCI</Link>
          <Link href="/passport" className="transition-colors hover:text-primary">Passport</Link>
          <Link href="/visa" className="transition-colors hover:text-primary">Visa</Link>
          <Link href="/packages" className="transition-colors hover:text-primary">Packages</Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/start" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Start Application
          </Link>
        </div>
      </div>
    </header>
  )
}
