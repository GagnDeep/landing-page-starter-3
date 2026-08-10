import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-12 mt-16">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-heading text-xl mb-4">Institute of Retirement</h2>
          <p className="text-sm text-foreground/80">A disclosed-methodology comparison of countries to retire to, built by one person.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link href="/" className="hover:text-foreground">Countries</Link></li>
            <li><Link href="/" className="hover:text-foreground">Compare</Link></li>
            <li><Link href="/" className="hover:text-foreground">Visas</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Details</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link href="/" className="hover:text-foreground">Healthcare</Link></li>
            <li><Link href="/" className="hover:text-foreground">Taxes</Link></li>
            <li><Link href="/" className="hover:text-foreground text-primary font-medium">Methodology</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Premium</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link href="/" className="hover:text-foreground">Dossiers</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 mt-12 pt-8 border-t border-border/50 text-xs text-foreground/60">
        <p>This is a comparison resource. Not financial, tax, immigration or medical advice.</p>
      </div>
    </footer>
  );
}
