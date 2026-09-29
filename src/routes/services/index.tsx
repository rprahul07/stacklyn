import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/velora/Nav";
import { Footer } from "@/components/velora/Footer";
import { SchemaMarkup } from "@/components/velora/SchemaMarkup";

const BASE_URL = "https://stacklyn.in";

const PAGE_TITLE =
  "Software Development Services | Full Stack, MERN, React, Node.js & AI | Stacklyn";
const PAGE_DESCRIPTION =
  "Stacklyn's software development services: full stack, MERN stack, React, Next.js, Node.js, backend, AI application development, MVP development, and custom software. Engineered in Kerala, India for clients worldwide.";

type Service = {
  name: string;
  /** Literal route path — keeps <Link to> type-checked against the route tree. */
  to: string;
  slug: string;
  tagline: string;
  desc: string;
  keywords: string[];
};

/**
 * Hub content mirrors the intro copy on each service page so the two never
 * describe the same offering differently.
 */
const services: Service[] = [
  {
    name: "Full Stack Development",
    to: "/services/full-stack-development",
    slug: "full-stack-development",
    tagline: "End-to-end web development",
    desc: "Complete web applications under one roof — React frontends, Node.js backends, PostgreSQL databases, and cloud deployment for startups, SaaS companies, and enterprises.",
    keywords: ["React + Node.js", "PostgreSQL", "Cloud deployment", "API design"],
  },
  {
    name: "MERN Stack Development",
    to: "/services/mern-development",
    slug: "mern-development",
    tagline: "MongoDB · Express · React · Node.js",
    desc: "High-performance SaaS platforms, B2B dashboards, real-time web apps, and API-first products built on the most widely adopted JavaScript full stack.",
    keywords: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    name: "React Development",
    to: "/services/react-development",
    slug: "react-development",
    tagline: "React 19 · TypeScript · Tailwind",
    desc: "Single-page apps, interactive dashboards, and complex SaaS frontends — performant, accessible, and maintainable user interfaces for startups and enterprises.",
    keywords: ["React 19", "TypeScript", "Tailwind CSS", "Design systems"],
  },
  {
    name: "Next.js Development",
    to: "/services/nextjs-development",
    slug: "nextjs-development",
    tagline: "Next.js 15 · App Router · SSR",
    desc: "Production-grade Next.js applications with server-side rendering, static generation, API routes, and the App Router — for SaaS, e-commerce, and enterprise platforms.",
    keywords: ["App Router", "SSR & SSG", "ISR", "Edge runtime"],
  },
  {
    name: "Node.js Development",
    to: "/services/nodejs-development",
    slug: "nodejs-development",
    tagline: "Node.js · Express · Fastify · NestJS",
    desc: "High-performance Node.js backends for web applications, APIs, real-time systems, and microservices — clean architecture on scalable infrastructure.",
    keywords: ["REST & GraphQL", "Microservices", "Real-time", "NestJS"],
  },
  {
    name: "Backend Development",
    to: "/services/backend-development",
    slug: "backend-development",
    tagline: "APIs · Databases · Infrastructure",
    desc: "Robust, scalable server-side systems — REST APIs, GraphQL services, microservices architectures, authentication, and real-time backends that perform reliably at scale.",
    keywords: ["API design", "PostgreSQL", "Auth & RBAC", "Queues"],
  },
  {
    name: "AI Application Development",
    to: "/services/ai-development",
    slug: "ai-development",
    tagline: "LLMs · RAG · AI Agents",
    desc: "Production-grade AI applications using large language models, retrieval-augmented generation, AI agents, and generative AI — added to existing products or built AI-first.",
    keywords: ["LLM integration", "RAG pipelines", "AI agents", "Vector search"],
  },
  {
    name: "MVP Development",
    to: "/services/mvp-development",
    slug: "mvp-development",
    tagline: "Idea to production in 8–12 weeks",
    desc: "Product scoping, UI/UX design, full stack build, cloud deployment, and post-launch iteration — a production-ready product that validates your market.",
    keywords: ["Product scoping", "8–12 weeks", "Launch ready", "Iteration"],
  },
  {
    name: "Custom Software Development",
    to: "/services/custom-software-development",
    slug: "custom-software-development",
    tagline: "Tailored software · Scalable architecture",
    desc: "Bespoke platforms, internal tools, workflow automation, and data systems engineered precisely to your business requirements when off-the-shelf tools do not fit.",
    keywords: ["Bespoke platforms", "Internal tools", "Automation", "Integrations"],
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/services/#webpage`,
      url: `${BASE_URL}/services`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/services/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/services/#itemlist`,
      name: "Software Development Services",
      numberOfItems: services.length,
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `${BASE_URL}/services/${s.slug}`,
      })),
    },
  ],
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "software development services India, full stack development company Kerala, MERN stack development services, React development company India, Next.js development services, Node.js development company, backend development services India, AI application development company, MVP development services India, custom software development company",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/services` },
      { property: "og:title", content: "Software Development Services | Stacklyn" },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Software Development Services | Stacklyn" },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: `${BASE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/services` }],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={servicesSchema} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="grid-bg grid-bg-fade absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-foreground">
                  Services
                </li>
              </ol>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Nine engineering services · One delivery team
            </div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl"
            >
              Software development services built for production
            </motion.h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Stacklyn designs, builds, and ships custom software end to end — full stack web
              platforms, AI applications, and startup MVPs. Every engagement is led hands-on by
              senior engineers from our team in Kerala, India, for clients across the GCC, Europe,
              and the United States.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-glow transition-colors hover:bg-primary-deep"
              >
                Start Your Project <span aria-hidden>→</span>
              </a>
              <a
                href="https://wa.me/919544451720"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Service grid */}
        <section className="cv-auto border-b border-border py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">
              What we build
            </h2>
            <p className="mb-12 max-w-2xl text-muted-foreground">
              Pick the engagement that matches where your product is today.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={s.to}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/40"
                >
                  <div className="mb-2 text-xs font-semibold tracking-wider text-primary uppercase">
                    {s.tagline}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.keywords.map((k) => (
                      <li
                        key={k}
                        className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {k}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Explore {s.name} <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links to the other silos */}
        <section className="cv-auto border-b border-border py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">Explore further</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Industries we serve", "/industries", "Software for 18 industrial sectors"],
                ["Markets we work in", "/markets", "India, GCC, Europe, and the US"],
                ["AI automation", "/ai-automation", "AI agents and process automation"],
                ["Engineering blog", "/blog", "Guides, benchmarks, and buying advice"],
              ].map(([label, href, sub]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Tell us what you are building
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Send us the problem and we will come back with scope, timeline, and a fixed quote —
              usually within two working days.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-glow transition-colors hover:bg-primary-deep"
              >
                Get a Quote <span aria-hidden>→</span>
              </a>
              <a
                href="/tools/software-cost-estimator"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Estimate Your Cost
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
