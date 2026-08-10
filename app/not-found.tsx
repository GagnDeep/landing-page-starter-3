import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-24 flex items-center justify-center text-center">
        <div className="container px-4">
          <h1 className="text-6xl font-heading font-bold text-muted-foreground mb-4">404</h1>
          <h2 className="text-2xl font-heading font-bold mb-6">Page not found</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
