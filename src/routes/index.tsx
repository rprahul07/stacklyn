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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      "name": "Stacklyn",
      "alternateName": "Stacklyn Software",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon.png`,
        "width": 512,
        "height": 512,
      },
      "description": "Stacklyn is a custom software development company in Kerala, India, providing full stack development, AI solutions, SaaS development, and startup MVP development for startups and enterprises globally.",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Kerala",
        "addressLocality": "Kerala",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "10.8505",
        "longitude": "76.2711",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-99617-46849",
          "contactType": "customer service",
          "email": "veenaprasad@stacklyn.in",
          "availableLanguage": ["English"],
          "areaServed": "Worldwide",
        },
      ],
      "founder": {
        "@type": "Person",
        "@id": `${BASE_URL}/#rahul-rp`,
        "name": "Rahul R P",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@id": `${BASE_URL}/#organization` },
        "knowsAbout": [
          "Software Engineering", "AI Development", "Backend Development",
          "MERN Stack", "Cloud Architecture", "Node.js", "React", "Next.js",
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Cochin University of Science and Technology",
        },
      },
      "member": {
        "@type": "Person",
        "name": "Veena Prasad",
        "jobTitle": "Co-Founder",
        "worksFor": { "@id": `${BASE_URL}/#organization` },
      },
      "areaServed": ["IN", "US", "GB", "AE", "SG", "AU", "Worldwide"],
      "priceRange": "$$",
      "currenciesAccepted": "INR, USD",
      "paymentAccepted": "Bank Transfer, Wire Transfer",
      "serviceType": [
        "Full Stack Development", "MERN Stack Development", "Node.js Development",
        "React Development", "Next.js Development", "AI Application Development",
        "SaaS Development", "Startup MVP Development", "Custom Software Development",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Stack Development", "url": `${BASE_URL}/services/full-stack-development` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MERN Stack Development", "url": `${BASE_URL}/services/mern-development` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Application Development", "url": `${BASE_URL}/services/ai-development` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MVP Development", "url": `${BASE_URL}/services/mvp-development` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development", "url": `${BASE_URL}/services/custom-software-development` } },
        ],
      },
      "sameAs": [BASE_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "Stacklyn",
      "description": "Custom software development, AI solutions, and startup MVP development in Kerala, India.",
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "inLanguage": "en",
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${BASE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      "url": BASE_URL,
      "name": "Stacklyn — Custom Software Development Company | Kerala, India",
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${BASE_URL}/#organization` },
      "description": "Stacklyn builds scalable web apps, AI solutions, SaaS products, and MVPs. MERN stack, Node.js, React, and Next.js experts based in Kerala, India.",
      "inLanguage": "en",
      "datePublished": "2024-01-01",
      "dateModified": "2026-06-09",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stacklyn — Custom Software Development Company | Kerala, India" },
      {
        name: "description",
        content:
          "Stacklyn is a custom software development company in Kerala, India. We build scalable web apps, AI solutions, SaaS products, and startup MVPs. Expert MERN stack, Node.js, React, and Next.js developers. Serving global clients.",
      },
      { name: "keywords", content: "software development company Kerala, custom software development India, MERN stack developers, Node.js developers India, React developers, Next.js developers, AI development company, startup MVP development India, SaaS development agency, full stack developers India, hire software developers India" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL },
      { property: "og:title", content: "Stacklyn — Custom Software Development Company | Kerala, India" },
      { property: "og:description", content: "Custom software development company in Kerala, India. We build scalable web apps, AI solutions, SaaS products, and startup MVPs using React, Node.js, and modern cloud technologies." },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Stacklyn" },
      { property: "og:locale", content: "en_IN" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Stacklyn — Custom Software Development Company" },
      { name: "twitter:description", content: "We build scalable web apps, AI solutions, SaaS products, and MVPs. MERN, Node.js, React, Next.js experts from Kerala, India." },
      { name: "twitter:image", content: `${BASE_URL}/og-image.png` },
      { name: "twitter:creator", content: "@stacklyn" },
    ],
    links: [
      { rel: "canonical", href: BASE_URL },
    ],
  }),
  component: StacklynHome,
});

function StacklynHome() {
  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={organizationSchema} />
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
