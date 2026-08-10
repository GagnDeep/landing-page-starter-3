import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto flex flex-col justify-between gap-8 px-4 md:flex-row md:px-8">
        <div className="flex max-w-sm flex-col gap-4">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight"
          >
            AI and Investing
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Independent, reproducible tracking of AI stock-picking tools against
            a buy-and-hold S&P 500 benchmark.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-sm font-semibold">Legal</h3>
          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="cursor-not-allowed opacity-50">
              Privacy Policy
            </span>
            <span className="cursor-not-allowed opacity-50">
              Terms of Service
            </span>
            <span className="cursor-not-allowed opacity-50">Disclosures</span>
          </nav>
        </div>
      </div>
    </footer>
  )
}
