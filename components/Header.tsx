import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <Link href="/" className="mr-8 flex items-center gap-2">
          <span className="font-heading text-lg font-semibold tracking-tight">
            AI and Investing
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/about/"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Methodology
          </Link>
        </nav>
      </div>
    </header>
  )
}
