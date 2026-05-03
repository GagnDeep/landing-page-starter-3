import { pricingContent } from "@/content/pricing";

export function EstimatesTable() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {pricingContent.estimates.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {pricingContent.estimates.description}
          </p>
        </div>

        <div className="bg-background rounded-3xl border border-border/50 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30 border-b border-border/50">
                <th className="py-5 px-6 font-heading font-semibold text-foreground text-lg">Procedure</th>
                <th className="py-5 px-6 font-heading font-semibold text-foreground text-lg text-right">Estimated Range</th>
              </tr>
            </thead>
            <tbody>
              {pricingContent.estimates.items.map((item, idx) => (
                <tr key={idx} className="border-b border-border/50 last:border-0 hover:bg-muted/10 transition-colors">
                  <td className="py-5 px-6 text-foreground font-medium">{item.name}</td>
                  <td className="py-5 px-6 text-muted-foreground text-right">{item.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          {pricingContent.estimates.disclaimer}
        </p>
      </div>
    </section>
  );
}
