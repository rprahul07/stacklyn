import type { MarketPage } from "./types";
import { gulfMarketPages } from "./gulf";
import { specialistMarketPages } from "./specialist";

export type { MarketPage, MarketPoint } from "./types";

export const MARKETS_BASE_PATH = "/markets";

export const marketPages: MarketPage[] = [...gulfMarketPages, ...specialistMarketPages];

const bySlug = new Map(marketPages.map((page) => [page.slug, page]));

export function getMarketPage(slug: string): MarketPage | undefined {
  return bySlug.get(slug);
}

export function marketPagePath(slug: string): string {
  return `${MARKETS_BASE_PATH}/${slug}`;
}
