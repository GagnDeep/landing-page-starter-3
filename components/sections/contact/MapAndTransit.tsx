import { contactContent } from "@/content/contact";
import { globalContent } from "@/content/global";
import { Location01Icon, TimeQuarterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function MapAndTransit() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <HugeiconsIcon icon={Location01Icon} className="text-primary size-8" strokeWidth={2} />
                {contactContent.location.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {contactContent.location.parkingInfo}
              </p>
              <p className="text-lg text-muted-foreground">
                {contactContent.location.transitInfo}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <HugeiconsIcon icon={TimeQuarterIcon} className="text-primary size-7" strokeWidth={2} />
                {contactContent.hoursTitle}
              </h2>
              <ul className="w-full max-w-sm space-y-3 text-muted-foreground">
                {globalContent.hours.map((hour, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium text-foreground">{hour.day}</span>
                    <span>{hour.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-border/50 shadow-sm bg-muted/20">
            {/* Embedded Google Map iframe - using a generic generic maps embed for Patiala as placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27572.247841315995!2d76.3813955!3d30.342533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab2c3664d9%3A0xc3b43ef7a8eb64ea!2sLeela%20Bhawan%20Market%2C%20Patiala%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
