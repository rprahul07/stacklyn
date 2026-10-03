import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/velora/Nav";
import { Hero } from "@/components/velora/Hero";
import { Marquee } from "@/components/velora/Marquee";
import { About } from "@/components/velora/About";
import { Capabilities } from "@/components/velora/Capabilities";
import { Work } from "@/components/velora/Work";
import { TechStack } from "@/components/velora/TechStack";
import { Process } from "@/components/velora/Process";
import { WhyVelora } from "@/components/velora/WhyVelora";
import { Testimonials } from "@/components/velora/Testimonials";
import { HomepageFAQ } from "@/components/velora/HomepageFAQ";
import { Contact } from "@/components/velora/Contact";
import { Footer } from "@/components/velora/Footer";
import { SchemaMarkup } from "@/components/velora/SchemaMarkup";

const BASE_URL = "https://stacklyn.in";

const PAGE_TITLE = "Stacklyn —  AI Software Development | India";
const PAGE_DESCRIPTION =
  "Stacklyn builds AI automation software for companies in worldwide — reporting, operations dashboards, and AI agents. Engineering team based in Kerala, India.";
const LAST_MODIFIED = "2026-09-30";

/**
 * Homepage-specific schema only.
 *
 * The Organization, Person and WebSite nodes are defined once in __root.tsx and
 * emitted on every page; redefining them here would put two nodes with the same
 * @id on one page, which Google resolves unpredictably. Reference them instead.
 */
const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: PAGE_TITLE,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      primaryImageOfPage: { "@id": `${BASE_URL}/#logo` },
      description: PAGE_DESCRIPTION,
      inLanguage: "en",
      datePublished: "2024-01-01",
      dateModified: LAST_MODIFIED,
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "software development company Kerala, custom software development India, MERN stack developers, Node.js developers India, React developers, Next.js developers, AI development company, startup MVP development India, SaaS development agency, full stack developers India, hire software developers India, oil and gas software development UAE, oil and gas software Saudi Arabia, permit to work software GCC, ICV reporting software UAE, outsource oil and gas software development India",
      },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL },
      { property: "og:title", content: PAGE_TITLE },
      {
        property: "og:description",
        content:
          "Custom software development company in Kerala, India. We build scalable web apps, AI solutions, SaaS products, and startup MVPs using React, Node.js, and modern cloud technologies.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Stacklyn" },
      { property: "og:locale", content: "en_IN" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Stacklyn — Custom Software Development Company" },
      {
        name: "twitter:description",
        content:
          "We build scalable web apps, AI solutions, SaaS products, and MVPs. MERN, Node.js, React, Next.js experts from Kerala, India.",
      },
      { name: "twitter:image", content: `${BASE_URL}/og-image.png` },
      { name: "twitter:creator", content: "@stacklyn" },
    ],
    links: [{ rel: "canonical", href: BASE_URL }],
  }),
  component: StacklynHome,
});

function StacklynHome() {
  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={homePageSchema} />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <Work />
        <TechStack />
        <Process />
        <WhyVelora />
        <Testimonials />
        <HomepageFAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
