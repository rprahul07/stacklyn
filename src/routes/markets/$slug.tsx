import { createFileRoute, notFound } from "@tanstack/react-router";
import { MarketPageView } from "@/components/velora/MarketPageTemplate";
import { getMarketPage, marketPagePath } from "@/data/markets";

const BASE_URL = "https://stacklyn.in";

export const Route = createFileRoute("/markets/$slug")({
  loader: ({ params }) => {
    const page = getMarketPage(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `${BASE_URL}${marketPagePath(loaderData.slug)}`;
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
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.metaTitle },
        { name: "twitter:description", content: loaderData.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: MarketSlugRoute,
});

function MarketSlugRoute() {
  const page = Route.useLoaderData();
  return <MarketPageView page={page} />;
}
