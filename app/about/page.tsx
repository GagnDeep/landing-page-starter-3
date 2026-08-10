import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Prose } from '../../components/layout/Prose';

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Prose>
            <h1 className="font-heading text-4xl md:text-5xl">About Us</h1>
            <p className="text-xl text-muted-foreground">The Institute of Retirement is built by one person, driven by data transparency.</p>
            <p>
              The relocation industry is heavily incentivized to paint a rosy picture. Agents are paid when you move. We built this platform because we believe the admission of unverified data is a feature, not a bug.
            </p>
            <p>
              We provide a disclosed-methodology comparison of countries to retire to. We do not offer financial, tax, immigration, or medical advice. Everything we present is sourced, dated, and strictly informational.
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
    </>
  );
}
