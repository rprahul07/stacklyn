import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/velora/Nav";
import { Footer } from "@/components/velora/Footer";
import { FAQ } from "@/components/velora/FAQ";
import { SchemaMarkup } from "@/components/velora/SchemaMarkup";
import { trackLead } from "@/lib/analytics";
import { marketPages, marketPagePath } from "@/data/markets";

const BASE_URL = "https://stacklyn.in";

const hubFaqs = [
  {
    q: "Can an India-based company build software for oil and gas companies in the Gulf?",
    a: "Yes. Stacklyn builds custom software for oil and gas operators, EPC contractors, and service companies in the UAE, Saudi Arabia, Qatar, Oman, and beyond from Kerala, India. Working hours overlap with the Gulf, and we design software around operator requirements such as ADNOC and Saudi Aramco HSE standards, in-country value reporting, and local data protection laws.",
  },
  {
    q: "Which countries does Stacklyn build oil and gas software for?",
    a: "Our main markets are the UAE, Saudi Arabia, Qatar, and Oman. We also build software for oil and gas and industrial companies in the UK, Europe, North America, and Australia that outsource development to India.",
  },
  {
    q: "How do you manage time zones with Gulf clients?",
    a: "India is 1.5 hours ahead of the UAE and Oman and 2.5 hours ahead of Saudi Arabia and Qatar, so most of your working day overlaps with ours. We schedule demos, reviews, and support within your business hours.",
  },
  {
    q: "Can the software be hosted in the Gulf for data residency?",
    a: "Yes. We deploy to cloud regions inside the GCC or to your own servers when data residency rules or operator policy require it, and we design data handling around local laws such as the UAE and Saudi personal data protection laws.",
  },
  {
    q: "How much does custom oil and gas software cost?",
    a: "Focused modules such as a digital permit-to-work system, ICV reporting tool, or crew rotation tracker typically start from $6,000–14,000. Integrated operations platforms with multiple modules and system integrations usually range from $25,000–85,000. We provide a fixed, phased proposal after a free discovery call.",
  },
];

const hubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Global Markets", "item": `${BASE_URL}/markets` },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/markets#list`,
      "name": "Oil & Gas and Industrial Software by Market",
      "itemListElement": marketPages.map((page, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": page.name,
        "url": `${BASE_URL}${marketPagePath(page.slug)}`,
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

export const Route = createFileRoute("/markets/")({
  head: () => ({
    meta: [
      { title: "Oil & Gas Software Development for the UAE, Saudi Arabia, Qatar & Oman | Stacklyn" },
      {
        name: "description",
        content:
          "Custom oil and gas and industrial software for the UAE, Saudi Arabia, Qatar, Oman, and global markets — permit to work, HSE, ICV reporting, crew rotation, and operations platforms, built by Stacklyn from India.",
      },
      {
        name: "keywords",
        content:
          "oil and gas software development UAE, oil and gas software Saudi Arabia, oil and gas software Qatar, oil and gas software Oman, GCC oil and gas software company, outsource oil and gas software development India, ICV reporting software UAE, permit to work software GCC, HSE software Gulf, industrial software development Middle East",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/markets` },
      { property: "og:title", content: "Oil & Gas Software for the Gulf & Global Markets | Stacklyn" },
      {
        property: "og:description",
        content: "Custom oil and gas software for the UAE, Saudi Arabia, Qatar, Oman, and global markets, built from India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oil & Gas Software for the Gulf & Global Markets | Stacklyn" },
      {
        name: "twitter:description",
        content: "Permit to work, HSE, ICV reporting, and operations software for GCC and global oil and gas companies.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/markets` }],
  }),
  component: MarketsHub,
});

function MarketsHub() {
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
                <li className="text-foreground font-medium">Global Markets</li>
              </ol>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
            >
              Oil &amp; Gas Software for the Gulf and Global Markets
            </motion.h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Stacklyn builds custom software for oil and gas operators, EPC contractors, and service companies in the UAE,
              Saudi Arabia, Qatar, Oman, and worldwide — permit to work, HSE, in-country value reporting, crew rotation, and
              operations platforms designed around each market's operators and regulations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/919544451720?text=Hi%20Stacklyn%2C%20I%27d%20like%20to%20discuss%20an%20oil%20and%20gas%20software%20project."
                target="_blank"
                rel="noreferrer"
                onClick={() => trackLead("whatsapp")}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 h-12 text-sm font-semibold hover:bg-[#1ebe5b] transition-colors"
              >
                Discuss on WhatsApp <span aria-hidden>→</span>
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 h-12 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                Send an Enquiry
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketPages.map((page, i) => (
              <motion.a
                key={page.slug}
                href={marketPagePath(page.slug)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-background p-7 hover:border-primary/30 hover:bg-surface transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{page.region}</div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">{page.name}</h2>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-4">{page.intro}</p>
              </motion.a>
            ))}
          </div>
        </section>

        <FAQ items={hubFaqs} title="Oil & Gas Software for the Gulf — FAQs" includeSchema={false} />
      </main>

      <Footer />
    </div>
  );
}
