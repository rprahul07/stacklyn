import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostView } from "@/components/velora/BlogPostTemplate";
import { blogPostPath, getBlogPost } from "@/data/blog";

const BASE_URL = "https://stacklyn.in";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `${BASE_URL}${blogPostPath(loaderData.slug)}`;
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { name: "keywords", content: loaderData.keywords },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:image", content: `${BASE_URL}/og-image.png` },
        { property: "og:site_name", content: "Stacklyn" },
        { property: "article:published_time", content: loaderData.datePublished },
        { property: "article:modified_time", content: loaderData.dateModified },
        { property: "article:section", content: loaderData.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle },
        { name: "twitter:description", content: loaderData.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BlogPostRoute,
});

function BlogPostRoute() {
  const post = Route.useLoaderData();
  return <BlogPostView post={post} />;
}
