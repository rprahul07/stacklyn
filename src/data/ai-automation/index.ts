import type { AIAutomationPage, AICategory } from "./types";
import { aiDevelopmentPages } from "./ai-development";
import { businessAutomationPages } from "./business-automation";

export type { AIAutomationPage, AICategory, AIPoint } from "./types";

export const AI_BASE_PATH = "/ai-automation";

export const aiAutomationPages: AIAutomationPage[] = [
  ...aiDevelopmentPages,
  ...businessAutomationPages,
];

export const aiCategories: Array<{ name: AICategory; blurb: string }> = [
  {
    name: "AI Development",
    blurb: "Chatbots, agents, voice AI, and knowledge assistants built on your own data.",
  },
  {
    name: "Business Automation",
    blurb: "Workflow, finance, sales, and HR automation connecting the tools Indian businesses already use.",
  },
  {
    name: "AI for Kerala Industries",
    blurb: "AI and automation shaped around Kerala's key sectors — tourism, healthcare, jewellery, exports, and education.",
  },
];

const bySlug = new Map(aiAutomationPages.map((page) => [page.slug, page]));

export function getAIPage(slug: string): AIAutomationPage | undefined {
  return bySlug.get(slug);
}

export function aiPagePath(slug: string): string {
  return `${AI_BASE_PATH}/${slug}`;
}
