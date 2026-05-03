"use client";

import { contactContent } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Alert01Icon, CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">

        {/* Emergency Callout Reminder */}
        <div className="flex items-start gap-4 p-6 bg-destructive/5 border border-destructive/10 rounded-2xl mb-12">
          <HugeiconsIcon icon={Alert01Icon} className="text-destructive shrink-0 mt-1 size-6" strokeWidth={2} />
          <div>
            <h4 className="font-bold text-destructive mb-1">{contactContent.emergencyCallout.title}</h4>
            <p className="text-sm text-muted-foreground">{contactContent.emergencyCallout.description}</p>
          </div>
        </div>

        <div className="bg-background rounded-[3rem] p-8 md:p-12 border border-border/50 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              {contactContent.form.title}
            </h2>
            <p className="text-muted-foreground">
              {contactContent.form.description}
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-10" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{contactContent.form.successTitle}</h3>
              <p className="text-muted-foreground">{contactContent.form.successMessage}</p>
              <Button variant="outline" className="mt-8 rounded-full" onClick={() => setIsSubmitted(false)}>
                {contactContent.form.successButton}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">{contactContent.form.fields.name}</label>
                  <Input id="name" required className="h-12 bg-muted/10 border-border/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">{contactContent.form.fields.phone}</label>
                  <Input id="phone" type="tel" required className="h-12 bg-muted/10 border-border/50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">{contactContent.form.fields.email}</label>
                  <Input id="email" type="email" required className="h-12 bg-muted/10 border-border/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-foreground">{contactContent.form.fields.date}</label>
                  <Input id="date" type="date" className="h-12 bg-muted/10 border-border/50 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-medium text-foreground">{contactContent.form.fields.reason}</label>
                <Input id="reason" placeholder={contactContent.form.fields.reasonPlaceholder} className="h-12 bg-muted/10 border-border/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">{contactContent.form.fields.message}</label>
                <Textarea id="message" rows={4} className="bg-muted/10 border-border/50 resize-none" />
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full rounded-full h-14 text-lg mt-4">
                {isSubmitting ? contactContent.form.sendingLabel : contactContent.form.submitLabel}
              </Button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
