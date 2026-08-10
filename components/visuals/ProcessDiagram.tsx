export function ProcessDiagram({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 200" className={`w-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="100" x2="550" y2="100" className="stroke-border" strokeWidth="4" strokeDasharray="8 8" />
      <circle cx="100" cy="100" r="30" className="fill-primary" />
      <text x="100" y="105" textAnchor="middle" fill="white" className="font-mono text-sm font-bold">1</text>
      <text x="100" y="160" textAnchor="middle" className="fill-foreground font-sans text-sm font-medium">Verify Visa</text>

      <circle cx="300" cy="100" r="30" className="fill-secondary" />
      <text x="300" y="105" textAnchor="middle" fill="white" className="font-mono text-sm font-bold">2</text>
      <text x="300" y="160" textAnchor="middle" className="fill-foreground font-sans text-sm font-medium">Check Healthcare</text>

      <circle cx="500" cy="100" r="30" className="fill-accent" />
      <text x="500" y="105" textAnchor="middle" fill="white" className="font-mono text-sm font-bold">3</text>
      <text x="500" y="160" textAnchor="middle" className="fill-foreground font-sans text-sm font-medium">Model Taxes</text>
    </svg>
  );
}
