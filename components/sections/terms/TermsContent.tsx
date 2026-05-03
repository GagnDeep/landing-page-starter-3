import { termsContent } from "@/content/terms";

export function TermsContent() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="mb-12 text-sm text-muted-foreground font-medium border-b border-border/50 pb-4 inline-block">
          {termsContent.lastUpdated}
        </div>

        <div className="space-y-12">
          {termsContent.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground italic">
            {termsContent.contactInfo}
          </p>
        </div>
      </div>
    </section>
  );
}
