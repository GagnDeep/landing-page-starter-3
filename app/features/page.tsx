import { Metadata } from "next"
import { featuresSeo } from "@/content/features"
import {
  FeaturesHero,
  CoreServices,
  TechnologySpotlight,
  FeaturesProcess,
  FeaturesFaq,
  FeaturesCta
} from "@/components/features"

export const metadata: Metadata = {
  title: featuresSeo.title,
  description: featuresSeo.description,
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <FeaturesHero />
      <CoreServices />
      <TechnologySpotlight />
      <FeaturesProcess />
      <FeaturesFaq />
      <FeaturesCta />
    </div>
  )
}
