import React from "react"
import Link from "next/link"
import { homeServicesGrid } from "@/content/home"
import { MicroIconSet } from "@/components/visuals"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { ArrowRightIcon } from "lucide-react"

export function ServicesGrid() {
  const iconMapping: Record<
    string,
    "sparkles" | "tooth" | "hospital" | "tech" | "stethoscope"
  > = {
    "Clear Aligners": "sparkles",
    "Dental Implants": "tech",
    "Cosmetic Dentistry": "tooth",
    "Preventive Care": "hospital",
  }

  return (
    <section className="w-full bg-background py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Comprehensive Dental Care
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            Tailored treatments to meet all your oral health needs under one
            roof.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeServicesGrid.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                <CardHeader className="space-y-4">
                  <MicroIconSet
                    iconType={iconMapping[service.title] || "tooth"}
                    size={32}
                    className="h-16 w-16"
                  />
                  <CardTitle className="font-heading text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn more{" "}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
