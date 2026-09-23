import type { BlogPost } from "./types";
import { oilGasPosts } from "./oil-gas";
import { buyingGuidePosts } from "./buying-guides";

export type { BlogPost, BlogSection } from "./types";

/** Newest first. */
export const blogPosts: BlogPost[] = [...oilGasPosts, ...buyingGuidePosts].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

const bySlug = new Map(blogPosts.map((post) => [post.slug, post]));

export function getBlogPost(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

export function blogPostPath(slug: string): string {
  return `/blog/${slug}`;
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
