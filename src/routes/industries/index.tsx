import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/velora/Nav";
import { Footer } from "@/components/velora/Footer";
import { SchemaMarkup } from "@/components/velora/SchemaMarkup";

const BASE_URL = "https://stacklyn.in";

const industries = [
  {
    name: "Oil & Gas",
    href: "/industries/oil-gas-software",
    tagline: "Digital oilfield · HSE · SCADA · Crew management",
    desc: "Digital oilfield platforms, HSE compliance systems, SCADA integration dashboards, crew rotation management, and regulatory reporting tools for oil & gas operators and EPC contractors.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v4M12 18v4M4 12H2M22 12h-2M6.34 6.34 4.93 4.93M19.07 19.07l-1.41-1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    keywords: ["Oil rig software", "Upstream software", "SCADA integration", "HSE platform", "Crew management"],
  },
  {
    name: "Mining",
    href: "/industries/mining-software",
    tagline: "Fleet management · HSE · Environmental monitoring · Ore tracking",
    desc: "Mine operations platforms, fleet telematics integration, HSE compliance tools, environmental monitoring dashboards, and geospatial GIS visualization for mining companies globally.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 20h20M4 20V10l8-8 8 8v10M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    keywords: ["Mine operations", "Fleet management", "MineStar integration", "Environmental monitoring", "Spatial GIS"],
  },
  {
    name: "Industrial Workforce Management",
    href: "/industries/workforce-management-software",
    tagline: "Labour mobilization · Competency tracking · Biometric attendance · Payroll",
    desc: "End-to-end workforce management platforms for construction, oil & gas, and manufacturing companies: crew scheduling, competency tracking, biometric attendance, site access, and payroll integration.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    keywords: ["Labour mobilization", "Competency tracking", "Biometric attendance", "Site access control", "Contractor management"],
  },
  {
    name: "EPC & Engineering",
    href: "/industries/epc-engineering-software",
    tagline: "Document control · Project portals · Vendor management · Commissioning",
    desc: "Engineering document control systems, multi-party project management portals, vendor expediting platforms, construction field apps, and commissioning management tools for EPC contractors.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    keywords: ["Document control", "EPC project management", "Primavera integration", "Vendor management", "Commissioning"],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
  ],
};

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industry Software Solutions | Oil & Gas, Mining, Workforce Management | Stacklyn" },
      {
        name: "description",
        content:
          "Stacklyn builds custom software for industrial MNCs: oil & gas digital oilfield platforms, mining operations systems, industrial workforce management, and EPC project management tools. Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "industrial software development India, oil gas software company Kerala, mining software India, workforce management software construction, EPC software development India, MNC software development India, industrial digital transformation software",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries` },
      { property: "og:title", content: "Industry Software Solutions | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom software for oil & gas, mining, industrial workforce, and EPC companies. Enterprise-grade platforms from Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Industry Software Solutions | Stacklyn" },
      {
        name: "twitter:description",
        content: "Custom software for oil & gas, mining, industrial workforce, and EPC companies. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries` }],
  }),
  component: IndustriesIndexPage,
});

function IndustriesIndexPage() {
  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={breadcrumbSchema} />
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li className="opacity-40">/</li>
                <li className="text-foreground font-medium">Industries</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Industry-Specific Software Solutions · Kerala, India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
            >
              Enterprise Software Built for Heavy Industry
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            >
              Stacklyn builds custom software for the world's most demanding industries — oil & gas, mining, industrial
              construction, and EPC. We combine enterprise-grade architecture with deep domain knowledge to deliver
              software that actually fits how your operations work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-medium shadow-glow hover:bg-primary-deep transition-colors"
              >
                Discuss Your Industry Project <span aria-hidden>→</span>
              </a>
              <a
                href="https://wa.me/919544451720"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 h-12 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </section>

        {/* Industry Cards */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Industries We Serve</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
              Industry Software Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, i) => (
                <motion.a
                  key={industry.href}
                  href={industry.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-border bg-background p-8 hover:border-primary/30 hover:bg-surface transition-all"
                >
                  <div className="flex items-start gap-5">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {industry.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{industry.name}</h3>
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{industry.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{industry.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {industry.keywords.map((kw) => (
                          <span key={kw} className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Heavy Industry Needs Custom Software */}
        <section className="py-20 md:py-24 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Our Approach</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Why Heavy Industry Needs Custom Software
            </h2>
            <p className="max-w-2xl text-muted-foreground leading-relaxed mb-12">
              Generic enterprise software is built for the average business. Oil & gas operators, mining companies, and
              EPC contractors are not average businesses. They need software that understands their operational
              vocabulary, their regulatory environment, and the realities of field operations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Domain-Specific Workflows",
                  desc: "Industry software must understand concepts like crew rotation, ore grade reconciliation, and permit-to-work — not generic 'tasks' and 'projects'.",
                },
                {
                  title: "Regulatory Compliance Built-In",
                  desc: "Oil & gas, mining, and construction operate under strict regulatory frameworks (OSHA, MSHA, HSE, BSEE). Compliance must be embedded in the software architecture.",
                },
                {
                  title: "Field-Ready, Offline-Capable",
                  desc: "Remote sites, limited connectivity, harsh environments. Industrial software must work offline, on ruggedized tablets, in conditions generic SaaS tools were never designed for.",
                },
                {
                  title: "Integration with Industrial Systems",
                  desc: "SCADA, fleet telematics, biometric readers, PI Historian, Primavera — industrial software must talk to the specialized systems these companies already run.",
                },
                {
                  title: "Enterprise Security",
                  desc: "Critical infrastructure operators handle sensitive production, safety, and financial data. Enterprise-grade RBAC, audit logging, and encryption are non-negotiable.",
                },
                {
                  title: "No Licensing Trap",
                  desc: "You own the source code. No vendor lock-in to a software company that may change pricing, discontinue products, or get acquired. Your competitive IP stays yours.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-2xl border border-border bg-background p-7"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Global Reach</div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Serving Industrial Companies Worldwide from Kerala, India
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-sm leading-relaxed mb-8">
              Based in Kerala, India, Stacklyn delivers industrial software to MNCs and operators across the UAE, UK, USA,
              Australia, Singapore, and beyond — at India-based engineering rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              {["🇮🇳 India", "🇦🇪 UAE", "🇬🇧 United Kingdom", "🇺🇸 United States", "🇦🇺 Australia", "🇸🇬 Singapore"].map((country) => (
                <span key={country} className="rounded-full border border-border bg-surface px-4 py-2 text-foreground">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Get Started</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Build industrial software that actually{" "}
                <span className="text-primary">fits your operations</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Tell us about your industry and your software requirements. We'll respond with a detailed technical
                proposal within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 h-12 text-sm font-medium shadow-glow hover:bg-primary-deep transition-colors"
                >
                  Get a Free Quote <span aria-hidden>→</span>
                </a>
                <a
                  href="mailto:rahulrp@stacklyn.in"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 h-12 text-sm font-medium text-foreground hover:bg-surface transition-colors"
                >
                  Email Us
                </a>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Response within 24 hours · Kerala, India · Serving global industrial MNCs
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
