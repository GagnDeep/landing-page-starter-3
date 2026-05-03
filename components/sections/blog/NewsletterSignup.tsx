"use client";

import { blogContent } from "@/content/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-8 md:p-16 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">
            {blogContent.newsletter.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto relative z-10">
            {blogContent.newsletter.description}
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              // UI only implementation
            }}
          >
            <Input
              type="email"
              placeholder={blogContent.newsletter.placeholder}
              className="h-12 rounded-full bg-background border-border/50 focus-visible:ring-primary"
              required
            />
            <Button type="submit" className="h-12 rounded-full px-8 shrink-0">
              {blogContent.newsletter.buttonText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
