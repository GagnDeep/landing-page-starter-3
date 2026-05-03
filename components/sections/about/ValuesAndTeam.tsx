import { aboutContent } from "@/content/about";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon, Tick01Icon, Award01Icon, UserMultiple02Icon } from "@hugeicons/core-free-icons";

export function ValuesAndTeam() {
  const getIconForValue = (title: string) => {
    switch (title.toLowerCase()) {
      case 'compassion': return FavouriteIcon;
      case 'integrity': return Tick01Icon;
      case 'excellence': return Award01Icon;
      case 'community': return UserMultiple02Icon;
      default: return FavouriteIcon;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {aboutContent.coreValues.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.coreValues.items.map((value, idx) => (
              <div key={idx} className="bg-muted/10 border border-border/50 rounded-3xl p-8 text-center group hover:bg-muted/30 transition-colors">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  <HugeiconsIcon icon={getIconForValue(value.title)} className="size-8" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {aboutContent.team.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aboutContent.team.members.map((member, idx) => (
              <div key={idx} className="flex flex-col bg-background rounded-3xl p-8 border border-border/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-6">
                  {member.role}
                </p>
                <p className="text-muted-foreground italic leading-relaxed relative z-10">
                  &quot;{member.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
