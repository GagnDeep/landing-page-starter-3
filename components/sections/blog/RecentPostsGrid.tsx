import { blogContent } from "@/content/blog";
import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/lib/images";

export function RecentPostsGrid() {
  const posts = [
    { ...blogContent.mockPosts[0], image: siteImages.servicePediatric.src },
    { ...blogContent.mockPosts[1], image: siteImages.serviceCosmetic.src },
    { ...blogContent.mockPosts[2], image: siteImages.clinicInterior1.src },
  ];

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
          {blogContent.recentPostsHeading}
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-background rounded-3xl border border-border/40 overflow-hidden hover:border-primary/30 transition-colors">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/20">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
