import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FAQ, type FAQItem } from "./FAQ";
import { SchemaMarkup } from "./SchemaMarkup";

export interface HireData {
  role: string;
  slug: string;
  headline: string;
  tagline: string;
  intro: string;
  skills: string[];
  benefits: Array<{ title: string; desc: string }>;
  engagementModels: Array<{ name: string; desc: string; price: string }>;
  process: Array<{ step: string; desc: string }>;
  techStack: string[];
  faqs: FAQItem[];
  relatedHire: Array<{ name: string; href: string }>;
  relatedServices: Array<{ name: string; href: string }>;
}

const BASE_URL = "https://stacklyn.in";

function generateHireSchema(data: HireData) {
  return [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/${data.slug}/#service`,
      "name": `Hire ${data.role}`,
      "serviceType": `${data.role} Staffing`,
      "provider": {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "Stacklyn",
        "url": BASE_URL,
      },
      "description": data.intro,
      "areaServed": "Worldwide",
      "url": `${BASE_URL}/${data.slug}`,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": `Hire ${data.role}`, "item": `${BASE_URL}/${data.slug}` },
      ],
    },
  ];
}

interface HirePageProps {
  data: HireData;
}

export function HirePage({ data }: HirePageProps) {
  const schema = generateHireSchema(data);

  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={schema} />
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
                <li className="text-foreground font-medium">Hire {data.role}</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {data.tagline}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-3xl"
            >
              {data.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            >
              {data.intro}
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
                Hire Now <span aria-hidden>→</span>
              </a>
              <a
                href="https://wa.me/919961746849"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 h-12 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-4">
              {["24h Response", "No Long-term Lock-in", "Senior Engineers Only", "India-based Team"].map((t) => (
                <div key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                  <svg viewBox="0 0 20 20" className="h-3 w-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Expertise</div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Skills of Our {data.role}s
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((s) => (
                <span key={s} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Hire from Stacklyn */}
        <section className="py-20 md:py-24 bg-surface/60">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Why Stacklyn</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
              Why Hire {data.role}s from Stacklyn?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-2xl border border-border bg-background p-7"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Engagement</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Engagement Models</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.engagementModels.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`rounded-2xl border p-8 ${i === 1 ? "border-primary bg-primary/5" : "border-border bg-background"}`}
                >
                  {i === 1 && <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Most Popular</div>}
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <div className="mt-2 text-2xl font-bold text-primary">{m.price}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  <a
                    href="/#contact"
                    className="mt-6 block text-center rounded-full border border-primary/30 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Get Started →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">How It Works</div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">Hiring Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.process.map((p, i) => (
                <div key={p.step} className="relative">
                  <div className="text-3xl font-bold text-primary/15 mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-sm font-semibold">{p.step}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-semibold mb-6">Technologies Our {data.role}s Work With</h2>
            <div className="flex flex-wrap gap-3">
              {data.techStack.map((t) => (
                <span key={t} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={data.faqs} title={`Hire ${data.role} — FAQs`} includeSchema />

        {/* Related */}
        <section className="py-16 border-t border-border bg-surface/60">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">More Roles</div>
              <h3 className="text-lg font-semibold mb-4">Hire Other Developers</h3>
              <div className="flex flex-wrap gap-2">
                {data.relatedHire.map((r) => (
                  <a key={r.href} href={r.href} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    {r.name} →
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Explore Services</div>
              <h3 className="text-lg font-semibold mb-4">Related Development Services</h3>
              <div className="flex flex-wrap gap-2">
                {data.relatedServices.map((r) => (
                  <a key={r.href} href={r.href} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    {r.name} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Ready to hire a <span className="text-primary">{data.role}</span>?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Send us your requirements and we'll match you with the right engineer within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 h-12 text-sm font-medium shadow-glow hover:bg-primary-deep transition-colors"
              >
                Hire a {data.role} <span aria-hidden>→</span>
              </a>
              <a
                href="mailto:veenaprasad@stacklyn.in"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 h-12 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                Email Your Requirements
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
