import { homeContent } from "@/content/home";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";

export function TrustIndicators() {
  return (
    <section className="bg-background relative z-20">
      <LogoMarquee items={homeContent.trustIndicators} className="py-8 bg-background border-border/40" />
    </section>
  );
}
