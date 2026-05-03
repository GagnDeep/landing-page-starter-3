import { blogContent } from "@/content/blog";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/lib/images"; // Using a general image for the featured post

export function FeaturedPost() {
  const post = blogContent.featuredPost;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <Link href={`/blog/${post.slug}`} className="group block relative rounded-[3rem] overflow-hidden bg-muted/10 border border-border/40 hover:border-primary/20 transition-colors">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-video lg:aspect-auto w-full h-full overflow-hidden">
              <Image
                src={siteImages.servicePreventive.src} // Placeholder image for featured post
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center text-primary font-semibold">
                {blogContent.readArticleLabel}
                <HugeiconsIcon icon={ArrowRight02Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
