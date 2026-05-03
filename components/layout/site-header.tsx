"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { mainNav, globalCta } from "@/content/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { MicroIconSet } from "@/components/visuals"

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <MicroIconSet
            iconType="tooth"
            size={28}
            className="bg-primary/5 p-2 text-primary"
          />
          <span className="font-heading text-2xl font-semibold tracking-tight">
            Spacedent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Button asChild className="rounded-full px-6">
            <Link href={globalCta.href}>{globalCta.label}</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="h-10 w-10 rounded-full"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 flex w-full animate-in flex-col space-y-4 border-t border-border/40 bg-background p-4 pb-8 shadow-lg slide-in-from-top-2 md:hidden">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "rounded-md px-4 py-3 text-lg font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-border/40 px-4 pt-4">
            <Button asChild className="w-full rounded-full" size="lg">
              <Link
                href={globalCta.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {globalCta.label}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
