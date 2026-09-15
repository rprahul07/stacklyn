import type { FAQItem } from "@/components/velora/FAQ";

export type AICategory = "AI Development" | "Business Automation" | "AI for Kerala Industries";

export interface AIPoint {
  title: string;
  desc: string;
}

export interface AIAutomationPage {
  slug: string;
  category: AICategory;
  /** Short label used in cards, breadcrumbs, and schema. */
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  headline: string;
  intro: string;
  context: { heading: string; body: string };
  /** Kerala / India specific considerations — the part that makes each page locally useful. */
  localAngle: { heading: string; points: AIPoint[] };
  useCases: AIPoint[];
  deliverables: AIPoint[];
  stack: string[];
  faqs: FAQItem[];
  /** Slugs of other AI automation pages. Unknown slugs are skipped at render time. */
  related: string[];
  relatedServices: Array<{ name: string; href: string }>;
}
