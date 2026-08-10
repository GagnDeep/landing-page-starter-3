export function GeometricMotif({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={`w-full max-w-sm mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-4 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer subtle glow/texture circle */}
      <circle cx="200" cy="200" r="180" className="fill-primary/5" />
      {/* Dynamic structural lines representing "comparisons" */}
      <rect x="180" y="80" width="40" height="240" rx="20" className="fill-secondary/80" />
      <rect x="80" y="180" width="240" height="40" rx="20" className="fill-secondary/80" />
      {/* Data overlap motif */}
      <path d="M200 100L300 200L200 300L100 200L200 100Z" className="fill-primary/30" />
      <path d="M200 120L280 200L200 280L120 200L200 120Z" className="fill-primary/50" />
      {/* Core focus point */}
      <circle cx="200" cy="200" r="50" className="fill-accent shadow-lg" />
      <circle cx="200" cy="200" r="25" className="fill-background" />
      <circle cx="200" cy="200" r="10" className="fill-primary" />
    </svg>
  );
}
