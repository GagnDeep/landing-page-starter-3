import React from "react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function AboutCommunity() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
             <HugeiconsIcon icon={FavouriteIcon} size={32} className="text-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Community Involvement
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe in giving back to the Patiala community that has supported us. Through regular free dental camps, educational seminars in local schools, and partnerships with local NGOs, we actively work to improve the oral health standards of our city beyond the walls of our clinic.
          </p>
        </div>
      </div>
    </section>
  );
}
