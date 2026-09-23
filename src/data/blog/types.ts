import type { FAQItem } from "@/components/velora/FAQ";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface BlogPost {
  slug: string;
  /** Article H1. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  category: string;
  /** ISO dates, e.g. "2026-09-23". */
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  /** Standfirst shown under the H1. */
  dek: string;
  /** 40–60 word direct answer shown first — the passage answer engines quote. */
  shortAnswer: string;
  sections: BlogSection[];
  faqs: FAQItem[];
  related: Array<{ name: string; href: string }>;
}
