import Link from "next/link"
import { siteMetadata } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-heading text-xl font-semibold sm:inline-block">
            {siteMetadata.name}
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/about/"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="default" size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
