export function Prose({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`max-w-[70ch] mx-auto text-base leading-relaxed space-y-6 ${className}`}>
      {children}
    </div>
  );
}
