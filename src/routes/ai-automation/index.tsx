import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/velora/Nav";
import { Footer } from "@/components/velora/Footer";
import { FAQ } from "@/components/velora/FAQ";
import { SchemaMarkup } from "@/components/velora/SchemaMarkup";
import { aiAutomationPages, aiCategories, aiPagePath } from "@/data/ai-automation";

const BASE_URL = "https://stacklyn.in";

const hubFaqs = [
  {
    q: "Is there an AI automation company in Kerala?",
    a: "Yes. Stacklyn is an AI and software development company based in Kerala, India, building AI chatbots, AI agents, WhatsApp automation, Malayalam voice and chat assistants, document processing, and business process automation for companies across Kerala, India, and the Gulf.",
  },
  {
    q: "What can AI automate for a small business in India?",
    a: "Common high-value automations include answering WhatsApp and website enquiries, qualifying leads, sending payment and appointment reminders, extracting data from invoices, reconciling GST data, generating daily reports, and answering staff questions from internal documents.",
  },
  {
    q: "How much does AI automation cost in India?",
    a: "Simple workflow automations typically start from $500–1,500. AI chatbots and document processing projects usually start from $2,400–3,600, and AI agent or multi-department automation programmes range from $10,000 upward. AI model, speech, and WhatsApp messaging usage are billed separately at provider rates.",
  },
  {
    q: "Can Stacklyn build AI that works in Malayalam?",
    a: "Yes. We build chatbots and voice assistants that handle Malayalam script, Malayalam typed in English letters, Hindi, and English, and we test them on real customer conversations before launch.",
  },
  {
    q: "Is AI automation safe for business data?",
    a: "It can be when engineered properly. We use enterprise AI APIs under which providers do not train on your data, apply role-based access and encryption, keep human approval before financial or compliance actions, align data handling with India's DPDP Act, and can deploy in Indian cloud regions or on your own servers.",
  },
  {
    q: "How long does an AI automation project take?",
    a: "Individual workflow automations typically take one to three weeks, AI chatbots three to six weeks, and AI agents or document processing platforms four to ten weeks, including evaluation and a supervised pilot.",
  },
];

const hubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "AI & Automation", "item": `${BASE_URL}/ai-automation` },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/ai-automation#list`,
      "name": "AI and Automation Services by Stacklyn",
      "itemListElement": aiAutomationPages.map((page, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": page.name,
        "url": `${BASE_URL}${aiPagePath(page.slug)}`,
      })),
    },
    {
      "@type": "FAQPage",
      "mainEntity": hubFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/ai-automation/")({
  head: () => ({
    meta: [
      { title: "AI & Automation Company in Kerala, India | Chatbots, Agents, WhatsApp | Stacklyn" },
      {
        name: "description",
        content:
          "Stacklyn is a Kerala-based AI and automation company building AI chatbots, AI agents, WhatsApp automation, Malayalam voice bots, document AI, Tally and GST automation, and business process automation for Indian businesses.",
      },
      {
        name: "keywords",
        content:
          "AI automation company Kerala, AI company Kochi, AI development company India, business automation Kerala, AI chatbot Kerala, WhatsApp automation India, Malayalam AI chatbot, AI agents India, Tally automation, document AI India, n8n automation agency India, AI consultant Kerala",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/ai-automation` },
      { property: "og:title", content: "AI & Automation Company in Kerala, India | Stacklyn" },
      {
        property: "og:description",
        content:
          "AI chatbots, AI agents, WhatsApp automation, Malayalam voice bots, document AI, and business automation for Kerala and Indian businesses.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI & Automation Company in Kerala, India | Stacklyn" },
      {
        name: "twitter:description",
        content: "AI chatbots, agents, WhatsApp and Malayalam AI, document AI, and business automation. Based in Kerala.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/ai-automation` }],
  }),
  component: AIAutomationHub,
});

function AIAutomationHub() {
  const groups = aiCategories
    .map((category) => ({
      ...category,
      pages: aiAutomationPages.filter((page) => page.category === category.name),
    }))
    .filter((group) => group.pages.length > 0);

  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={hubSchema} />
      <Nav />

      <main>
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li className="opacity-40">/</li>
                <li className="text-foreground font-medium">AI &amp; Automation</li>
              </ol>
            </nav>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              AI &amp; Automation · Built in Kerala · Serving India and the Gulf
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
            >
              AI and Automation That Does Real Work for Indian Businesses
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            >
              Stacklyn is a Kerala-based AI and software company. We build chatbots that answer from your own data,
              agents that complete multi-step tasks, WhatsApp and Malayalam assistants, and automations that connect
              Tally, Zoho, and the tools your team already uses — engineered with evaluation, guardrails, and human
              approval where it matters.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-medium shadow-glow hover:bg-primary-deep transition-colors"
              >
                Get a Free AI Assessment <span aria-hidden>→</span>
              </a>
              <a
                href="https://wa.me/919544451720"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 h-12 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {groups.map((group) => (
          <section key={group.name} className="py-16 md:py-20 border-t border-border">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{group.name}</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{group.blurb}</h2>
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.pages.map((page, i) => (
                  <motion.a
                    key={page.slug}
                    href={aiPagePath(page.slug)}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="group rounded-2xl border border-border bg-background p-7 hover:border-primary/30 hover:bg-surface transition-all"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold">{page.name}</h3>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{page.eyebrow}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-4">{page.intro}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        ))}

        <FAQ items={hubFaqs} title="AI & Automation in Kerala and India — FAQs" includeSchema={false} />
      </main>

      <Footer />
    </div>
  );
}
