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

const PAGE_TITLE = "Stacklyn — Custom Software Development Company | Kerala, India";
const PAGE_DESCRIPTION =
  "Custom software development company in Kerala, India. We build web apps, mobile apps, ERP and CRM systems, SaaS products, and AI automation for businesses worldwide.";
const LAST_MODIFIED = "2026-10-16";

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
          "software development company Kerala, software company Kochi, custom software development India, web application development India, mobile app development company Kerala, app development company India, ERP software development India, CRM development company, SaaS development company India, e-commerce development India, AI development company India, UI UX design company Kerala, MVP development India, hire software developers India",
      },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL },
      { property: "og:title", content: PAGE_TITLE },
      {
        property: "og:description",
        content:
          "Custom software development company in Kerala, India. Web apps, mobile apps, ERP and CRM, SaaS products, e-commerce, and AI automation for businesses worldwide.",
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
          "Web apps, mobile apps, ERP/CRM, SaaS, and AI automation — built by senior engineers in Kerala, India.",
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
