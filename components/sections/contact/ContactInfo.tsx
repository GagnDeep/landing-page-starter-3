import React from "react";
import { contactContent } from "@/content/contact";
import { Location01Icon, Time01Icon, Call02Icon, Mail02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ContactInfo() {
  return (
    <div className="space-y-8">

      {/* Details Card */}
      <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 space-y-8">
        <h3 className="font-heading text-2xl font-bold">Clinic Details</h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Location01Icon} size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Address</p>
              <p className="text-muted-foreground leading-relaxed">{contactContent.info.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Time01Icon} size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Working Hours</p>
              <p className="text-muted-foreground leading-relaxed">{contactContent.info.hours}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Call02Icon} size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Phone</p>
              <p className="text-muted-foreground leading-relaxed">{contactContent.info.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <HugeiconsIcon icon={Mail02Icon} size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Email</p>
              <p className="text-muted-foreground leading-relaxed">{contactContent.info.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Card */}
      <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8">
        <h3 className="font-heading text-xl font-bold text-destructive mb-3">Emergency Care</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {contactContent.info.emergency}
        </p>
        <p className="font-bold text-foreground">{contactContent.info.phone}</p>
      </div>

    </div>
  );
}
