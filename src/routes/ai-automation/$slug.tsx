import { createFileRoute, notFound } from "@tanstack/react-router";
import { AIAutomationPageView } from "@/components/velora/AIAutomationPageTemplate";
import { getAIPage, aiPagePath } from "@/data/ai-automation";

const BASE_URL = "https://stacklyn.in";

export const Route = createFileRoute("/ai-automation/$slug")({
  loader: ({ params }) => {
    const page = getAIPage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `${BASE_URL}${aiPagePath(loaderData.slug)}`;
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { name: "keywords", content: loaderData.keywords },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:image", content: `${BASE_URL}/og-image.png` },
        { property: "og:site_name", content: "Stacklyn" },
        { property: "og:locale", content: "en_IN" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle },
        { name: "twitter:description", content: loaderData.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: AIAutomationSlugRoute,
});

function AIAutomationSlugRoute() {
  const page = Route.useLoaderData();
  return <AIAutomationPageView page={page} />;
}
