import Link from "next/link"
import { siteMetadata } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} {siteMetadata.name}. All rights
          reserved.
        </p>
        <nav className="flex items-center space-x-4 text-sm font-medium text-muted-foreground">
          <Link
            href="/about/"
            className="hover:text-foreground hover:underline"
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  )
}
