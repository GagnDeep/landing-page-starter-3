import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Prose } from '../../components/layout/Prose';
import { CheckoutForm } from '../../components/sections/CheckoutForm';
import { buildMetadata } from '../../lib/metadata';
import { Metadata } from 'next';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  File01Icon,
  Shield01Icon,
  Target01Icon,
  CheckmarkCircle01Icon
} from '@hugeicons/core-free-icons';

export const metadata: Metadata = buildMetadata({
  title: 'Dossiers',
  description: 'Comprehensive, verified data packets for specific countries, updated monthly. No agents, no bias, just the raw verifiable data you need to retire abroad.',
  path: '/dossiers/',
});

export default function Dossiers() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-bold tracking-wider text-primary uppercase">The Dossiers</span>
              <h1 className="text-4xl md:text-5xl font-heading leading-tight mt-2 mb-6">
                Verified Data Packets. No Agent Bias.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                The relocation industry is incentivized to sell you a move. We are incentivized to provide you with the most accurate, dated, and sourced information available. Our premium dossiers are exhaustive teardowns of the visa, healthcare, and tax systems of our covered countries.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <HugeiconsIcon icon={Shield01Icon} className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl mb-2">Independent Research</h3>
                    <p className="text-muted-foreground text-sm">We are not affiliated with any government, real estate agency, or immigration firm. Our data is gathered independently from primary sources and treaty texts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <HugeiconsIcon icon={File01Icon} className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl mb-2">Exhaustive Detail</h3>
                    <p className="text-muted-foreground text-sm">Each dossier covers not just the headline figures, but the nuanced edge cases, expiring tax regimes, and private healthcare mandates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <HugeiconsIcon icon={Target01Icon} className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl mb-2">Actionable Clarity</h3>
                    <p className="text-muted-foreground text-sm">Clear, step-by-step breakdowns of the bureaucratic processes, complete with typical timelines and required documentation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-lg sticky top-8">
              <h2 className="font-heading text-2xl mb-2">Purchase Dossier Access</h2>
              <p className="text-muted-foreground mb-6">Immediate access to all country dossiers, updated monthly.</p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-heading">$149</span>
                <span className="text-muted-foreground">/ one-time</span>
              </div>

              <CheckoutForm />

              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-primary" />
                  <span>Full access to Portugal, Spain, Panama, Mexico</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-primary" />
                  <span>Monthly data updates for 12 months</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-primary" />
                  <span>Printable PDF exports</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed breakdown to meet the 1800 word floor for pillar/hub/money pages.
            To achieve this cleanly, we'll construct a very detailed manifest of what's included.
            Since I cannot reliably generate 1800 words of meaningful non-fluff text in a single block without risking quality or repeating myself, I will use a robust FAQ and methodology breakdown section.
        */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <Prose className="max-w-4xl">
              <h2 className="font-heading text-3xl mb-8">What exactly is inside a Dossier?</h2>

              <p>
                When planning a relocation, the sheer volume of information available online can be overwhelming. More concerning, however, is the lack of verifiable accuracy. The Institute of Retirement Dossiers are designed to be the antidote to this information chaos. Instead of reading dozens of conflicting blog posts, you receive a single, structured, and exhaustively researched document for your target country.
              </p>

              <p>
                Below is a detailed breakdown of the sections included in every country dossier. We hold ourselves to a strict standard: if a claim cannot be verified against a primary source (a government portal, a piece of legislation, or an official treaty text), it is marked as unconfirmed or omitted entirely.
              </p>

              <h3 className="font-heading text-2xl mt-12 mb-4">1. The Visa and Residency Matrix</h3>
              <p>
                The foundational step for any relocation is securing the legal right to reside in the country. Our dossiers break down the specific visa routes available to retirees and those with passive income.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Income Requirements:</strong> We detail the exact monthly or annual income thresholds required, including how these figures are calculated (e.g., based on the local minimum wage, which changes annually).</li>
                <li><strong>Passive vs. Earned Income:</strong> We clarify whether the required income must be strictly passive (pensions, dividends, rental income) or if remote work income is permitted under the specific visa category.</li>
                <li><strong>Documentation:</strong> A comprehensive list of the standard documents required, such as apostilled background checks, proof of health insurance, and bank statements.</li>
                <li><strong>Processing Timelines:</strong> We provide realistic timelines for the initial consulate appointment, the visa approval, and the final issuance of the residency card in-country. We distinguish between the statutory processing time and the actual, observed timelines.</li>
                <li><strong>Path to Citizenship:</strong> If applicable, we outline the timeline and requirements for converting temporary residency to permanent residency, and eventually, citizenship. This includes language requirements and physical presence tests.</li>
              </ul>

              <h3 className="font-heading text-2xl mt-12 mb-4">2. The Healthcare Infrastructure</h3>
              <p>
                Understanding how you will access and pay for healthcare is arguably the most critical component of a retirement plan. The dossiers provide a clear-eyed assessment of both the public and private healthcare systems.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Public System Access:</strong> We detail whether your chosen visa route grants you access to the national healthcare system, when that access begins, and what it covers. We also note any required contributions or co-pays.</li>
                <li><strong>Private Insurance Mandates:</strong> Many popular retirement visas require applicants to hold comprehensive private health insurance for the first year (or longer). We clarify the specific requirements this insurance must meet (e.g., no co-pays, no waiting periods, repatriation coverage).</li>
                <li><strong>Pre-existing Conditions:</strong> We address the critical issue of pre-existing conditions, detailing how they are handled by both the public system (if accessible) and typical private insurers in the region.</li>
                <li><strong>Infrastructure Quality:</strong> While avoiding subjective rankings, we provide data on the distribution of major hospitals and specialized care centers, helping you understand the healthcare landscape outside of the major metropolitan areas.</li>
              </ul>

              <h3 className="font-heading text-2xl mt-12 mb-4">3. Tax Liability and Structuring</h3>
              <p>
                The tax implications of relocating can dramatically alter the financial viability of your plan. Our tax sections are strictly informational and rely entirely on published tax codes and bilateral treaties. <em>We provide no tax advice; you must consult a qualified tax professional.</em>
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Tax Residency Triggers:</strong> We outline the specific criteria that trigger tax residency in the destination country (e.g., the 183-day rule, center of vital interests).</li>
                <li><strong>Special Tax Regimes:</strong> We detail any specific tax incentives designed to attract foreign residents, such as flat tax rates on foreign income or exemptions for pensions. Crucially, we highlight the expiration dates and strict qualifying criteria for these regimes.</li>
                <li><strong>Double Taxation Treaties:</strong> We examine the relevant double taxation treaties between the destination country and major source countries (like the US, UK, and Canada), focusing on how pensions, Social Security, and dividend income are typically treated.</li>
                <li><strong>Wealth and Inheritance Taxes:</strong> We provide the current thresholds and rates for wealth taxes and inheritance taxes, which can be a significant surprise for retirees moving from jurisdictions without these levies.</li>
              </ul>

              <h3 className="font-heading text-2xl mt-12 mb-4">4. The Cost of Landing</h3>
              <p>
                The &quot;cost of living&quot; is highly subjective and depends entirely on your lifestyle. Therefore, we do not provide generic monthly budgets. Instead, we focus on the &quot;Cost of Landing&quot; — the specific, quantifiable expenses you will incur to establish yourself in the country.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Visa and Government Fees:</strong> A line-item breakdown of the fees payable to the consulate, the immigration authorities, and local municipalities.</li>
                <li><strong>Legal and Administrative Costs:</strong> Typical ranges for necessary professional services, such as immigration lawyers (if used), sworn translators, and apostille services.</li>
                <li><strong>Housing Setup:</strong> Details on standard rental contract terms, typical required deposits (which can sometimes be up to 12 months for foreigners without local guarantors), and the costs associated with connecting utilities.</li>
                <li><strong>Importing Goods:</strong> The rules, taxes, and practical realities of importing personal effects or a vehicle.</li>
              </ul>

              <h3 className="font-heading text-2xl mt-12 mb-4">5. Sourcing and Methodology</h3>
              <p>
                Every dossier concludes with our methodology section. This is where we provide the direct links to the primary sources we used to compile the data.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Primary Source Links:</strong> URLs leading directly to the relevant government portals, legislative databases, and treaty texts.</li>
                <li><strong>Verification Dates:</strong> A clear log indicating exactly when each data point was last checked and confirmed.</li>
                <li><strong>Unverified Claims:</strong> A dedicated section explicitly listing any common claims made by the relocation industry that we were unable to substantiate through official channels.</li>
              </ul>

              <h2 className="font-heading text-3xl mt-16 mb-8">Why Charge for This Data?</h2>
              <p>
                The information contained in these dossiers is technically public. However, it is scattered across dozens of poorly designed government websites, hidden inside dense legal texts, often requires translation from the local language, and changes frequently without notice.
              </p>
              <p>
                The relocation industry thrives on this asymmetry of information. Agents offer to guide you through the process, but their business model is built on commissions—from real estate sales, from partnering legal firms, or from the visa application itself. This creates an inherent conflict of interest. They are incentivized to downplay the difficulties, gloss over the tax implications, and present the most optimistic timelines.
              </p>
              <p>
                We charge a one-time fee for our dossiers so that we can remain entirely independent. We do not accept commissions, we do not partner with real estate agents, and we do not sell your data. Our only product is clarity. By purchasing a dossier, you are funding the hundreds of hours required to research, translate, verify, and monitor this data. You are buying the confidence that comes from knowing the ground truth before you make a significant life decision.
              </p>
              <p>
                Furthermore, purchasing the dossier package grants you a full 12 months of updates. Immigration rules and tax codes are not static. Minimum wage increases can alter visa income requirements overnight. New governments can repeal favorable tax regimes. We monitor these changes continuously and update the dossiers accordingly, ensuring that the data you are relying on is never stale.
              </p>
              <p>
                Our commitment is to transparency. If we do not know the answer to a specific question, or if the official sources are ambiguous, we state that clearly. We believe that acknowledging uncertainty is far more valuable than providing a false sense of security. The dossiers are designed for the analytical, independent planner who demands data, not sales pitches.
              </p>

              <h3 className="font-heading text-2xl mt-12 mb-4">6. Property and Real Estate Pitfalls</h3>
              <p>
                Many retirees choose to purchase property, either as a primary residence or to qualify for a &quot;Golden Visa&quot; type program. The dossiers include a dedicated section on the legal and structural realities of the local real estate market, stripping away the marketing language used by local agents.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Foreign Ownership Restrictions:</strong> We clarify any legal boundaries on where foreigners can buy property (e.g., restricted zones near borders or coastlines) and the specific trusts or legal entities required to navigate them.</li>
                <li><strong>Transaction Costs:</strong> A clear, unvarnished look at the real costs of buying property, including notary fees, property transfer taxes, stamp duties, and typical agent commissions (and who pays them). These can easily add 10-15% to the headline purchase price.</li>
                <li><strong>Legal Protections:</strong> An assessment of the escrow process, title insurance availability, and the standard level of due diligence required to avoid purchasing property with undeclared debts or structural illegalities.</li>
              </ul>

              <h3 className="font-heading text-2xl mt-12 mb-4">7. Banking and Financial Mechanics</h3>
              <p>
                Establishing local banking is often a prerequisite for a residency application, yet it remains one of the most consistently frustrating hurdles for new arrivals. We detail the mechanical reality of moving and managing your money across borders.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Account Opening Requirements:</strong> A list of the specific documentation required by major retail banks to open an account as a non-resident versus a resident, including local tax identification numbers.</li>
                <li><strong>FATCA and CRS Compliance:</strong> For US citizens and others from heavily regulated jurisdictions, we note the banks that are generally willing to accept your business and the compliance forms you must prepare.</li>
                <li><strong>Capital Controls and Transfer Limits:</strong> An overview of any legal or practical friction when moving large sums of money into or out of the country to fund a property purchase or cover living expenses.</li>
              </ul>

            </Prose>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
