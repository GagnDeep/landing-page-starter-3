import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HugeiconsIcon } from "@hugeicons/react"
import { Shield01Icon } from "@hugeicons/core-free-icons"
import { buildWebsiteJsonLd } from "@/lib/json-ld"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "The resource you are looking for has been removed, had its name changed, or is temporarily unavailable. Return to the home page to continue navigating.",
  path: "/404",
})

export default function NotFound() {
  const jsonLd = buildWebsiteJsonLd()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="max-w-md text-center">
          <HugeiconsIcon
            icon={Shield01Icon}
            className="mx-auto mb-6 h-12 w-12 text-muted-foreground"
          />
          <h1 className="text-display mb-4 font-mono text-accent">404</h1>
          <h2 className="text-h2 mb-4">Page Not Found</h2>
          <p className="mb-8 text-[17px] leading-[1.7] text-muted-foreground">
            The resource you are looking for has been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
