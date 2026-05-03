import { contactContent } from "@/content/contact";
import { globalContent } from "@/content/global";
import { Location01Icon, CallIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ContactInfoGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="flex flex-col items-center text-center p-8 bg-muted/10 rounded-[2rem] border border-border/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
              <HugeiconsIcon icon={Location01Icon} className="size-8" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              {contactContent.infoGrid.addressTitle}
            </h3>
            <p className="text-muted-foreground mb-4">
              {globalContent.contact.address}
            </p>
            <a href={globalContent.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline mt-auto">
              {contactContent.location.directionsLabel}
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-muted/10 rounded-[2rem] border border-border/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
              <HugeiconsIcon icon={CallIcon} className="size-8" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              {contactContent.infoGrid.phoneTitle}
            </h3>
            <p className="text-muted-foreground mb-2">
              {contactContent.location.generalPhoneLabel} <a href={`tel:${globalContent.contact.phone}`} className="hover:text-foreground transition-colors">{globalContent.contact.phone}</a>
            </p>
            <p className="text-muted-foreground text-sm font-medium text-destructive mb-4">
              {contactContent.location.emergencyPhoneLabel} <a href={`tel:${globalContent.contact.emergencyPhone}`} className="hover:underline">{globalContent.contact.emergencyPhone}</a>
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-muted/10 rounded-[2rem] border border-border/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
              <HugeiconsIcon icon={Mail01Icon} className="size-8" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              {contactContent.infoGrid.emailTitle}
            </h3>
            <p className="text-muted-foreground mb-4">
              {globalContent.contact.email}
            </p>
            <a href={`mailto:${globalContent.contact.email}`} className="text-primary font-semibold hover:underline mt-auto">
              {contactContent.location.emailLabel}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
