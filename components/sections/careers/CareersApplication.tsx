"use client";

import { careersContent } from "@/content/careers";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckmarkBadge01Icon, Upload02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function CareersApplication() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="apply" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="bg-primary/5 rounded-[3rem] p-8 md:p-12 border border-primary/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 -translate-x-1/2" />

          <div className="text-center mb-10 relative z-10">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              {careersContent.form.title}
            </h2>
            <p className="text-muted-foreground">
              {careersContent.form.description}
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500 relative z-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-10" strokeWidth={2} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{careersContent.form.successTitle}</h3>
              <p className="text-muted-foreground">{careersContent.form.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">{careersContent.form.fields.name}</label>
                  <Input id="name" required className="h-12 bg-background border-border/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">{careersContent.form.fields.email}</label>
                  <Input id="email" type="email" required className="h-12 bg-background border-border/50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">{careersContent.form.fields.phone}</label>
                  <Input id="phone" type="tel" required className="h-12 bg-background border-border/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-foreground">{careersContent.form.fields.role}</label>
                  <Input id="role" className="h-12 bg-background border-border/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">{careersContent.form.fields.message}</label>
                <Textarea id="message" rows={4} className="bg-background border-border/50 resize-none" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{careersContent.form.fields.file}</label>
                <div className="relative">
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                  <label
                    htmlFor="file"
                    className="flex items-center justify-center gap-3 w-full h-16 rounded-2xl border-2 border-dashed border-primary/30 bg-background hover:bg-primary/5 cursor-pointer transition-colors text-muted-foreground"
                  >
                    <HugeiconsIcon icon={Upload02Icon} className="size-5" strokeWidth={2} />
                    {fileName ? <span className="text-foreground font-medium">{fileName}</span> : <span>{careersContent.form.uploadPlaceholder}</span>}
                  </label>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full rounded-full h-14 text-lg mt-6">
                {isSubmitting ? careersContent.form.submittingLabel : careersContent.form.submitLabel}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
