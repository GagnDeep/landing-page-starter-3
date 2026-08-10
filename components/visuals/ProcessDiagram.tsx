export function ProcessDiagram({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 200" className={`w-full max-w-3xl mx-auto animate-in zoom-in-95 duration-1000 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="100" x2="550" y2="100" className="stroke-border" strokeWidth="4" strokeDasharray="8 8" />

      {/* Step 1 */}
      <circle cx="100" cy="100" r="30" className="fill-primary" />
      <circle cx="100" cy="100" r="24" className="stroke-background stroke-2" />
      <text x="100" y="105" textAnchor="middle" fill="currentColor" className="font-mono text-sm font-bold text-background">1</text>
      <text x="100" y="160" textAnchor="middle" fill="currentColor" className="text-small font-medium text-foreground">Verify Visa</text>

      {/* Step 2 */}
      <circle cx="300" cy="100" r="30" className="fill-secondary" />
      <circle cx="300" cy="100" r="24" className="stroke-background stroke-2" />
      <text x="300" y="105" textAnchor="middle" fill="currentColor" className="font-mono text-sm font-bold text-background">2</text>
      <text x="300" y="160" textAnchor="middle" fill="currentColor" className="text-small font-medium text-foreground">Check Healthcare</text>

      {/* Step 3 */}
      <circle cx="500" cy="100" r="30" className="fill-accent" />
      <circle cx="500" cy="100" r="24" className="stroke-background stroke-2" />
      <text x="500" y="105" textAnchor="middle" fill="currentColor" className="font-mono text-sm font-bold text-background">3</text>
      <text x="500" y="160" textAnchor="middle" fill="currentColor" className="text-small font-medium text-foreground">Model Taxes</text>
    </svg>
  );
}
