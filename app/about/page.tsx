import { Metadata } from "next"
import { aboutSeo } from "@/content/about"
import {
  AboutHero,
  AboutMission,
  AboutWhy,
  AboutTimeline,
  AboutTeam,
  AboutFacility,
  AboutCommunity,
  AboutCta
} from "@/components/about"

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.description,
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AboutHero />
      <AboutMission />
      <AboutWhy />
      <AboutTimeline />
      <AboutTeam />
      <AboutFacility />
      <AboutCommunity />
      <AboutCta />
    </div>
  )
}
