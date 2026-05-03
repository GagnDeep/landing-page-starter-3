import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";

export function QuizTeaser() {
  return (
    <section className="py-24 bg-background border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            {homeContent.quizTeaser.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {homeContent.quizTeaser.description}
          </p>
          <div className="pt-4">
             <Button asChild size="lg" className="rounded-full px-8">
               <Link href="/contact">
                 {homeContent.quizTeaser.cta}
               </Link>
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
