export function GeometricMotif({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={`w-full max-w-sm mx-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" rx="200" className="fill-primary/10" />
      <path d="M200 100L300 200L200 300L100 200L200 100Z" className="fill-primary/20" />
      <circle cx="200" cy="200" r="50" className="fill-accent" />
      <rect x="180" y="80" width="40" height="240" rx="20" className="fill-secondary/50" />
      <rect x="80" y="180" width="240" height="40" rx="20" className="fill-secondary/50" />
    </svg>
  );
}
