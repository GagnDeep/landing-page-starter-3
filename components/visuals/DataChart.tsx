export function DataChart({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={`w-full max-w-lg mx-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid */}
      <line x1="40" y1="250" x2="380" y2="250" className="stroke-border" strokeWidth="2" />
      <line x1="40" y1="50" x2="40" y2="250" className="stroke-border" strokeWidth="2" />
      <line x1="40" y1="150" x2="380" y2="150" className="stroke-border stroke-dashed opacity-50" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="40" y1="50" x2="380" y2="50" className="stroke-border stroke-dashed opacity-50" strokeWidth="1" strokeDasharray="4 4" />

      {/* Bars */}
      <rect x="70" y="80" width="40" height="170" rx="4" className="fill-primary" />
      <rect x="140" y="140" width="40" height="110" rx="4" className="fill-secondary" />
      <rect x="210" y="60" width="40" height="190" rx="4" className="fill-accent" />
      <rect x="280" y="190" width="40" height="60" rx="4" className="fill-muted-foreground" />

      {/* Labels */}
      <text x="90" y="270" textAnchor="middle" className="fill-muted-foreground font-mono text-xs">PT</text>
      <text x="160" y="270" textAnchor="middle" className="fill-muted-foreground font-mono text-xs">PA</text>
      <text x="230" y="270" textAnchor="middle" className="fill-muted-foreground font-mono text-xs">ES</text>
      <text x="300" y="270" textAnchor="middle" className="fill-muted-foreground font-mono text-xs">MX</text>
    </svg>
  );
}
