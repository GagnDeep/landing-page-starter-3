export function DataChart({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={`w-full max-w-lg mx-auto animate-in slide-in-from-right-8 duration-700 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid Background */}
      <rect width="400" height="300" rx="16" className="fill-card border border-border" />

      <line x1="50" y1="250" x2="350" y2="250" className="stroke-border" strokeWidth="2" />
      <line x1="50" y1="50" x2="50" y2="250" className="stroke-border" strokeWidth="2" />

      {/* Data Lines/Grid */}
      <line x1="50" y1="150" x2="350" y2="150" className="stroke-border stroke-dashed opacity-50" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="50" y1="100" x2="350" y2="100" className="stroke-border stroke-dashed opacity-50" strokeWidth="1" strokeDasharray="4 4" />

      {/* Bars - representing cost comparisons */}
      <rect x="80" y="80" width="40" height="170" rx="4" className="fill-primary/80 hover:fill-primary transition-all duration-300" />
      <rect x="150" y="140" width="40" height="110" rx="4" className="fill-secondary/80 hover:fill-secondary transition-all duration-300" />
      <rect x="220" y="60" width="40" height="190" rx="4" className="fill-accent/80 hover:fill-accent transition-all duration-300" />
      <rect x="290" y="190" width="40" height="60" rx="4" className="fill-muted-foreground/50 hover:fill-muted-foreground transition-all duration-300" />

      {/* Labels */}
      <text x="100" y="275" textAnchor="middle" fill="currentColor" className="font-mono text-xs font-semibold text-muted-foreground">PT</text>
      <text x="170" y="275" textAnchor="middle" fill="currentColor" className="font-mono text-xs font-semibold text-muted-foreground">PA</text>
      <text x="240" y="275" textAnchor="middle" fill="currentColor" className="font-mono text-xs font-semibold text-muted-foreground">ES</text>
      <text x="310" y="275" textAnchor="middle" fill="currentColor" className="font-mono text-xs font-semibold text-muted-foreground">MX</text>
    </svg>
  );
}
