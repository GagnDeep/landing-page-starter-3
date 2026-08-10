import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-heading font-bold uppercase tracking-tight text-lg">They Are Tracking</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Brokers</Link>
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Guides</Link>
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Tracker</Link>
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Compare Services</Link>
        </nav>
      </div>
    </header>
  );
}
