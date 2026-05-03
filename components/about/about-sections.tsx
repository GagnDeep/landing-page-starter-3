import {
  aboutHero,
  aboutMission,
  aboutTeam,
  aboutTeamTitle,
  aboutTeamSubtitle,
  aboutFacility,
  aboutWhy,
  aboutTimeline,
  aboutTimelineTitle,
  aboutCommunity,
  aboutCta
} from "@/content/about"
import Image from "next/image"
import { AnimatedGradientMesh, FloatingBlobs } from "@/components/visuals"
import { SITE_IMAGES } from "@/lib/images"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <AnimatedGradientMesh />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
          {aboutHero.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {aboutHero.subheading}
        </p>
      </div>
    </section>
  )
}

export function AboutMission() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
              {aboutMission.headline}
            </h2>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>{aboutMission.body}</p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-sm">
             <Image
                src={SITE_IMAGES.clinic.operatory.src}
                alt={SITE_IMAGES.clinic.operatory.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutTeam() {
  // Mapping team IDs to actual images from registry
  const getTeamImage = (id: string) => {
    if (id === "dr-vikramjit") return SITE_IMAGES.team.drVikramjit
    if (id === "dr-arshiya") return SITE_IMAGES.team.drArshiya
    return SITE_IMAGES.team.drVikramjit // fallback
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-4">
            {aboutTeamTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {aboutTeamSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {aboutTeam.map((member) => {
            const img = getTeamImage(member.id)
            return (
              <div key={member.id} className="group relative rounded-3xl bg-card border shadow-sm overflow-hidden flex flex-col">
                <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function AboutWhy() {
  return (
    <section className="py-16 md:py-24 bg-background border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
          {aboutWhy.headline}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {aboutWhy.body}
        </p>
      </div>
    </section>
  )
}

export function AboutTimeline() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">
          {aboutTimelineTitle}
        </h2>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {aboutTimeline.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm">
                {item.year.substring(2)}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border rounded-2xl p-6 shadow-sm">
                <div className="font-heading text-xl font-semibold mb-2">{item.title}</div>
                <div className="text-muted-foreground">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutCommunity() {
  return (
    <section className="py-16 md:py-24 bg-background border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
          {aboutCommunity.headline}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {aboutCommunity.body}
        </p>
      </div>
    </section>
  )
}

export function AboutCta() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="font-heading text-3xl md:text-5xl font-medium mb-6">
          {aboutCta.headline}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
          {aboutCta.subheading}
        </p>
        {aboutCta.cta && (
          <Link
            href={aboutCta.cta.href}
            className="inline-flex h-12 items-center justify-center rounded-full bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-background/90"
          >
            {aboutCta.cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}

export function AboutFacility() {
  return (
    <section className="relative py-16 md:py-24 bg-primary/5 overflow-hidden">
      <div className="absolute -left-32 top-0 opacity-30 pointer-events-none w-96 h-96">
        <FloatingBlobs />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
          {aboutFacility.headline}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          {aboutFacility.body}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[SITE_IMAGES.clinic.reception, SITE_IMAGES.clinic.operatory, SITE_IMAGES.hero.home].map((img, idx) => (
             <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
