"use client";

import { globalContent } from "@/content/global";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MenuIcon, Cancel01Icon, Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatedToothIllustration } from "@/components/visuals/AnimatedToothIllustration";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Handle scroll effect for transparent -> solid header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
  }, [pathname]);

  const toggleTheme = () => {
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 0);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="relative h-8 w-8 text-primary overflow-hidden">
            {/* Scale down the animated tooth for the logo */}
            <AnimatedToothIllustration className="absolute -top-12 -left-12 w-32 h-32 scale-[0.25]" />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-foreground">
            Dr. Bansal&apos;s <span className="font-sans text-lg font-medium text-muted-foreground">Dental Care</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {globalContent.navigation.main.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hidden md:flex text-muted-foreground hover:text-foreground rounded-full"
            aria-label="Toggle theme"
          >
            <HugeiconsIcon icon={Sun01Icon} className="h-5 w-5 dark:hidden" strokeWidth={2} />
            <HugeiconsIcon icon={Moon02Icon} className="hidden h-5 w-5 dark:block" strokeWidth={2} />
          </Button>

          <Button asChild className="hidden md:inline-flex rounded-full">
            <Link href="/contact">{globalContent.globalCtas.bookAppointment}</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <HugeiconsIcon icon={mobileMenuOpen ? Cancel01Icon : MenuIcon} className="h-6 w-6" strokeWidth={2} />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-6 shadow-lg animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4">
            {globalContent.navigation.main.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-2 border-b border-border/50",
                  pathname === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4">
              <Button asChild className="w-full mr-4 rounded-full">
                <Link href="/contact">{globalContent.globalCtas.bookAppointment}</Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full shrink-0"
                aria-label="Toggle theme"
              >
                <HugeiconsIcon icon={Sun01Icon} className="h-5 w-5 dark:hidden" strokeWidth={2} />
                <HugeiconsIcon icon={Moon02Icon} className="hidden h-5 w-5 dark:block" strokeWidth={2} />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
