"use client";

import React from "react";
import { homeContent } from "@/content/home";
import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <FloatingBlobs className="opacity-50" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {homeContent.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {homeContent.testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {homeContent.testimonials.reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="bg-card border border-border/50 p-8 rounded-2xl h-full flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <HugeiconsIcon key={i} icon={StarIcon} size={18} className="text-[#FFB800] fill-[#FFB800]" />
                        ))}
                      </div>
                      <p className="text-foreground/90 font-medium text-lg leading-relaxed mb-6 italic">
                        &quot;{review.quote}&quot;
                      </p>
                    </div>
                    <p className="font-heading font-bold text-primary">— {review.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 hidden md:flex" />
            <CarouselNext className="-right-12 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
