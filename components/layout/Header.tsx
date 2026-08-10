import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-border bg-background py-4">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Institute of Retirement
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-foreground/80 hover:text-foreground text-sm font-medium">Countries</Link>
          <Link href="/" className="text-foreground/80 hover:text-foreground text-sm font-medium">Compare</Link>
          <Link href="/" className="text-foreground/80 hover:text-foreground text-sm font-medium">Methodology</Link>
          <Link href="/" className="text-primary hover:text-primary/90 text-sm font-medium">Dossiers</Link>
        </nav>
      </div>
    </header>
  );
}
