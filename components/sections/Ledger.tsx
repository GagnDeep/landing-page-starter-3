import Link from 'next/link';
import { InformationCircleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export function Ledger() {
  const countries = [
    { name: 'Portugal', visa: 'D7 Passive Income', incomeFloor: '€820/mo', healthcare: 'SNS (Public) + Private', landedCost: '€2,400/mo', tax: 'NHR (Expiring) / Progressive' },
    { name: 'Panama', visa: 'Pensionado', incomeFloor: '$1,000/mo', healthcare: 'Private (Required)', landedCost: '$1,800/mo', tax: 'Territorial (0% foreign)' },
    { name: 'Spain', visa: 'Non-Lucrative Visa', incomeFloor: '€2,400/mo', healthcare: 'Private (1st yr) -> Public', landedCost: '€2,600/mo', tax: 'Progressive (Wealth tax varies)' },
    { name: 'Mexico', visa: 'Temporary Resident', incomeFloor: '$4,300/mo (varies)', healthcare: 'IMSS + Private', landedCost: '$1,500/mo', tax: 'Resident (Progressive)' },
  ];

  return (
    <div className="w-full overflow-hidden bg-card border border-border rounded-xl shadow-sm">
      <div className="p-6 border-b border-border bg-muted/30">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="font-heading text-2xl mb-1">The Ledger: Country Comparison</h2>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <HugeiconsIcon icon={InformationCircleIcon} className="w-4 h-4" />
              <span>Figures sourced from official portals. See <Link href="/about" className="text-primary hover:underline">methodology</Link> for dates and unverified claims.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-muted text-sm font-medium border-b border-border">
              <th className="p-4 w-[20%]">Country</th>
              <th className="p-4 w-[16%]">Visa Route</th>
              <th className="p-4 w-[16%]">Income Floor</th>
              <th className="p-4 w-[16%]">Healthcare Path</th>
              <th className="p-4 w-[16%]">Landed Cost</th>
              <th className="p-4 w-[16%]">Tax Treatment</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-border">
            {countries.map((country) => (
              <tr key={country.name} className="hover:bg-muted/10 transition-colors">
                <td className="p-4 font-semibold text-foreground flex items-center gap-2">
                  <Link href="/" className="hover:text-primary transition-colors">{country.name}</Link>
                </td>
                <td className="p-4 text-muted-foreground"><span className="font-mono text-xs">{country.visa}</span></td>
                <td className="p-4 text-muted-foreground"><span className="font-mono text-xs">{country.incomeFloor}</span></td>
                <td className="p-4 text-muted-foreground"><span className="font-mono text-xs">{country.healthcare}</span></td>
                <td className="p-4 text-muted-foreground"><span className="font-mono text-xs">{country.landedCost}</span></td>
                <td className="p-4 text-muted-foreground"><span className="font-mono text-xs">{country.tax}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
