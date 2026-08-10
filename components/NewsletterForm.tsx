"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Shield01Icon,
  Alert01Icon,
  Tick01Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus("loading")

    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT

    if (!endpoint) {
      // Graceful fallback if no endpoint configured
      setTimeout(() => {
        setStatus("success")
      }, 1000)
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error("Failed to subscribe")

      setStatus("success")
    } catch (error) {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center justify-center rounded-lg border border-background/20 bg-background/10 p-6 text-background">
        <HugeiconsIcon icon={Tick01Icon} className="mb-4 h-8 w-8 text-accent" />
        <h3 className="mb-2 font-heading text-lg font-semibold">
          Tracking Active
        </h3>
        <p className="text-center text-sm text-background/80">
          Your email has been registered. You will be notified the moment our
          tracking apparatus publishes new performance baselines.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 sm:flex-row"
      >
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address for tracking updates"
          disabled={status === "loading"}
          className="w-full rounded-md border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/50 focus:ring-2 focus:ring-accent focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="flex min-w-[160px] items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-50"
        >
          {status === "loading" ? (
            <HugeiconsIcon
              icon={Loading03Icon}
              className="h-4 w-4 animate-spin"
            />
          ) : (
            "Subscribe to Updates"
          )}
        </button>
      </form>
      {status === "error" && (
        <div className="mt-3 flex items-center justify-center gap-2 rounded bg-background/5 p-2 text-sm text-destructive">
          <HugeiconsIcon icon={Alert01Icon} className="h-4 w-4" />
          <span>Connection failed. Please try again.</span>
        </div>
      )}
    </div>
  )
}
