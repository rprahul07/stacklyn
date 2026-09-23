import type { FAQItem } from "@/components/velora/FAQ";

export interface MarketPoint {
  title: string;
  desc: string;
}

export interface MarketPage {
  slug: string;
  /** Short label used in cards, breadcrumbs, and schema, e.g. "UAE Oil & Gas Software". */
  name: string;
  /** Region the page targets, e.g. "United Arab Emirates". */
  region: string;
  /** ISO 3166-1 alpha-2 codes for schema areaServed. */
  areaServed: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  headline: string;
  intro: string;
  context: { heading: string; body: string };
  /** Facts a buyer in this market checks first: operators, rules, programmes, data law, time difference. */
  keyFacts: Array<{ label: string; value: string }>;
  compliance: { heading: string; points: MarketPoint[] };
  solutions: MarketPoint[];
  delivery: MarketPoint[];
  faqs: FAQItem[];
  /** Slugs of other market pages. Unknown slugs are skipped at render time. */
  related: string[];
  relatedLinks: Array<{ name: string; href: string }>;
}
