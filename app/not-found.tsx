import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex h-[calc(100svh-4rem)] flex-col items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="font-heading text-6xl font-semibold text-primary">
          404
        </h1>
        <h2 className="font-heading text-2xl font-medium text-foreground">
          Page not found
        </h2>
        <p className="mb-8 text-muted-foreground">
          The dispatch you&apos;re looking for has been archived, moved, or
          never existed in our records.
        </p>
        <Button asChild className="font-mono">
          <Link href="/">Return to Desk</Link>
        </Button>
      </div>
    </div>
  )
}
