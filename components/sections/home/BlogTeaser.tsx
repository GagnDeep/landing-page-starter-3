import React from "react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/button";

export function BlogTeaser() {

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {homeContent.blogTeaser.title}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <Button asChild variant="outline" className="rounded-full">
             <Link href="/blog">{homeContent.blogTeaser.cta}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeContent.blogTeaser.posts.map((post, idx) => (
            <Link key={idx} href="/blog" className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={images.blog[post.imgKey as keyof typeof images.blog].src}
                  alt={images.blog[post.imgKey as keyof typeof images.blog].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
