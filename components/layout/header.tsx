"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu11Icon, Cancel01Icon, Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { globalContent } from "@/content/global";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-quart",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-heading transition-transform group-hover:scale-105">
            N
          </div>
          <span className="font-heading font-semibold text-xl text-foreground tracking-tight">
            {globalContent.navigation.logo.text}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {globalContent.navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
                pathname === link.href ? "text-primary after:scale-x-100 after:origin-bottom-left" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9 border border-border/50 text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <HugeiconsIcon icon={Sun03Icon} size={18} strokeWidth={2} />
            ) : (
              <HugeiconsIcon icon={Moon02Icon} size={18} strokeWidth={2} />
            )}
          </Button>
          <Button asChild className="rounded-full px-6 font-medium shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <Link href={globalContent.navigation.cta.href}>
              {globalContent.navigation.cta.label}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9"
          >
            {mounted && theme === "dark" ? (
              <HugeiconsIcon icon={Sun03Icon} size={18} strokeWidth={2} />
            ) : (
              <HugeiconsIcon icon={Moon02Icon} size={18} strokeWidth={2} />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HugeiconsIcon icon={Cancel01Icon} size={24} strokeWidth={2} />
            ) : (
              <HugeiconsIcon icon={Menu11Icon} size={24} strokeWidth={2} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in p-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {globalContent.navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "p-3 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="w-full mt-2 rounded-full">
            <Link href={globalContent.navigation.cta.href} onClick={() => setMobileMenuOpen(false)}>
              {globalContent.navigation.cta.label}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
