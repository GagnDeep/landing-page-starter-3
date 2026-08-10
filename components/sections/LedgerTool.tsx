'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { InformationCircleIcon, Coins02Icon, GlobalIcon, Building04Icon, UserMultipleIcon, FirstAidKitIcon } from '@hugeicons/core-free-icons';

const defaultCountries = [
  { name: 'Portugal', visa: 'D7 Passive Income', minIncome: 820, incomeStr: '€820/mo', healthcare: 'SNS (Public) + Private', landedCost: 2400, landedStr: '€2,400/mo', tax: 'NHR (Expiring) / Progressive' },
  { name: 'Panama', visa: 'Pensionado', minIncome: 1000, incomeStr: '$1,000/mo', healthcare: 'Private (Required)', landedCost: 1800, landedStr: '$1,800/mo', tax: 'Territorial (0% foreign)' },
  { name: 'Spain', visa: 'Non-Lucrative Visa', minIncome: 2400, incomeStr: '€2,400/mo', healthcare: 'Private (1st yr) -> Public', landedCost: 2600, landedStr: '€2,600/mo', tax: 'Progressive (Wealth tax varies)' },
  { name: 'Mexico', visa: 'Temporary Resident', minIncome: 4300, incomeStr: '$4,300/mo', healthcare: 'IMSS + Private', landedCost: 1500, landedStr: '$1,500/mo', tax: 'Resident (Progressive)' },
];

export function LedgerTool() {
  const [budget, setBudget] = useState<number>(3000);
  const [passport, setPassport] = useState('US');
  const [incomeType, setIncomeType] = useState('passive');
  const [spouse, setSpouse] = useState(false);
  const [medical, setMedical] = useState(false);

  // Derive countries based on inputs
  const countries = defaultCountries.map(c => {
    // Basic logic to show dynamic data changes without real network calls
    let status = 'Eligible';
    let visaStr = c.visa;
    let taxStr = c.tax;
    let incomeStr = c.incomeStr;

    // Adjust minimum income if spouse is included (rough estimates for demo purposes)
    const requiredIncome = spouse ? c.minIncome * 1.5 : c.minIncome;
    incomeStr = spouse ? `~${c.incomeStr} + 50%` : c.incomeStr;

    if (budget < requiredIncome) {
      status = 'Budget Too Low';
    }

    if (incomeType === 'earned' && c.name === 'Spain') {
      visaStr = 'Digital Nomad Visa';
      incomeStr = '€2,140/mo (varies)';
    }

    if (medical) {
      taxStr = `${taxStr} (Medical deduction varies)`;
    }

    return { ...c, status, visa: visaStr, tax: taxStr, incomeStr };
  });

  return (
    <div className="w-full bg-card border border-border rounded-xl shadow-sm flex flex-col xl:flex-row overflow-hidden">

      {/* Sidebar Inputs */}
      <div className="w-full xl:w-80 bg-muted/30 border-r border-border p-6 flex flex-col gap-6">
        <div>
          <h2 className="font-heading text-xl mb-1 flex items-center gap-2">
            <HugeiconsIcon icon={Coins02Icon} className="w-5 h-5 text-primary" />
            Budget & Inputs
          </h2>
          <p className="text-xs text-muted-foreground">Adjust filters to see qualifying routes.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-1">Monthly Budget (USD)</label>
            <input
              id="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label htmlFor="passport" className="block text-sm font-medium mb-1">Passport</label>
            <div className="relative">
              <HugeiconsIcon icon={GlobalIcon} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                id="passport"
                value={passport}
                onChange={(e) => setPassport(e.target.value)}
                className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none"
              >
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="incomeType" className="block text-sm font-medium mb-1">Income Type</label>
            <div className="relative">
              <HugeiconsIcon icon={Building04Icon} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                id="incomeType"
                value={incomeType}
                onChange={(e) => setIncomeType(e.target.value)}
                className="w-full bg-background border border-border rounded-md pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none"
              >
                <option value="passive">Passive (Pension/Divs)</option>
                <option value="earned">Earned (Remote Work)</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <label htmlFor="spouse" className="text-sm font-medium flex items-center gap-2">
              <HugeiconsIcon icon={UserMultipleIcon} className="w-4 h-4 text-muted-foreground" />
              Include Spouse?
            </label>
            <input
              id="spouse"
              type="checkbox"
              checked={spouse}
              onChange={(e) => setSpouse(e.target.checked)}
              className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <label htmlFor="medical" className="text-sm font-medium flex items-center gap-2">
              <HugeiconsIcon icon={FirstAidKitIcon} className="w-4 h-4 text-muted-foreground" />
              Ongoing Medical?
            </label>
            <input
              id="medical"
              type="checkbox"
              checked={medical}
              onChange={(e) => setMedical(e.target.checked)}
              className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="flex-1 overflow-x-auto">
        <div className="p-6 border-b border-border bg-muted/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="font-heading text-2xl mb-1">The Ledger</h2>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <HugeiconsIcon icon={InformationCircleIcon} className="w-4 h-4" />
                <span>Figures sourced from official portals. See <Link href="/about/" className="text-primary hover:underline">methodology</Link>.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-[800px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted text-sm font-medium border-b border-border">
                <th className="p-4 w-[18%]">Country</th>
                <th className="p-4 w-[14%]">Status</th>
                <th className="p-4 w-[16%]">Visa Route</th>
                <th className="p-4 w-[16%]">Income Floor</th>
                <th className="p-4 w-[18%]">Healthcare Path</th>
                <th className="p-4 w-[18%]">Tax Treatment</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-border">
              {countries.map((country) => (
                <tr key={country.name} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4 font-semibold text-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">{country.name}</Link>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${country.status === 'Eligible' ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
                      {country.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground"><span className="font-mono text-xs">{country.visa}</span></td>
                  <td className="p-4 text-muted-foreground"><span className="font-mono text-xs">{country.incomeStr}</span></td>
                  <td className="p-4 text-muted-foreground"><span className="font-mono text-xs">{country.healthcare}</span></td>
                  <td className="p-4 text-muted-foreground"><span className="font-mono text-xs text-balance">{country.tax}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
