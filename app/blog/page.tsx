import { BlogHero } from "@/components/sections/blog/BlogHero";
import { FeaturedPost } from "@/components/sections/blog/FeaturedPost";
import { CategoryFilter } from "@/components/sections/blog/CategoryFilter";
import { RecentPostsGrid } from "@/components/sections/blog/RecentPostsGrid";
import { NewsletterSignup } from "@/components/sections/blog/NewsletterSignup";
import { blogContent } from "@/content/blog";

export const metadata = {
  title: blogContent.seo.title,
  description: blogContent.seo.description,
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <FeaturedPost />
      <CategoryFilter />
      <RecentPostsGrid />
      <NewsletterSignup />
    </>
  );
}
