import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FAQ, type FAQItem } from "./FAQ";
import { SchemaMarkup } from "./SchemaMarkup";

export interface IndustryData {
  industry: string;
  slug: string;
  headline: string;
  tagline: string;
  intro: string;
  industryContext: string;
  painPoints: Array<{ title: string; desc: string }>;
  solutions: Array<{ title: string; desc: string }>;
  techStack: string[];
  clients: string[];
  whyStacklyn: Array<{ title: string; desc: string }>;
  faqs: FAQItem[];
  relatedIndustries: Array<{ name: string; href: string }>;
  relatedServices: Array<{ name: string; href: string }>;
}

interface IndustryPageProps {
  data: IndustryData;
  schema: object;
}

export function IndustryPage({ data, schema }: IndustryPageProps) {
  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={schema} />
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li className="opacity-40">/</li>
                <li><a href="/industries" className="hover:text-primary transition-colors">Industries</a></li>
                <li className="opacity-40">/</li>
                <li className="text-foreground font-medium">{data.industry}</li>
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
                Discuss Your Project <span aria-hidden>→</span>
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

        {/* Industry Context */}
        <section className="py-20 md:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Industry Background</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Software Challenges in the {data.industry} Sector
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{data.industryContext}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Who We Serve</div>
              <h3 className="text-xl font-semibold mb-5">Our {data.industry} Clients</h3>
              <ul className="space-y-3">
                {data.clients.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 md:py-24 bg-surface/60">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Industry Pain Points</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
              Problems We Solve for {data.industry} Companies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.painPoints.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-2xl border border-border bg-background p-7"
                >
                  <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 3v7m0 4h.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">What We Build</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
              Software Solutions for {data.industry} Companies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.solutions.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative rounded-2xl border border-border bg-background p-7 hover:border-primary/30 transition-colors"
                >
                  <div className="text-4xl font-bold text-primary/10 mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 md:py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Technologies</div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Tech Stack We Use</h2>
            <div className="flex flex-wrap gap-3">
              {data.techStack.map((t) => (
                <span key={t} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Stacklyn */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Why Stacklyn</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
              Why {data.industry} Companies Choose Stacklyn
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.whyStacklyn.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex gap-4 p-6 rounded-2xl border border-border bg-background hover:bg-surface transition-colors"
                >
                  <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{w.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 bg-primary/5 border-y border-primary/10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">
                See How Stacklyn Builds for {data.industry}
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">Real products built and shipped by Stacklyn for industrial clients.</p>
            </div>
            <a
              href="/#work"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-5 h-10 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Our Work →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={data.faqs} title={`${data.industry} Software — Frequently Asked Questions`} includeSchema={false} />

        {/* Related Industries */}
        <section className="py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Related Industries</div>
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Other Industries We Serve</h2>
              <div className="flex flex-wrap gap-3">
                {data.relatedIndustries.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {i.name} →
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Related Services</div>
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Our Core Services</h2>
              <div className="flex flex-wrap gap-3">
                {data.relatedServices.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {s.name} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
                Ready to build software for your{" "}
                <span className="text-primary">{data.industry}</span> operations?
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Tell us about your project and we'll respond with a detailed technical proposal within 24 hours.
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
                Response within 24 hours · Kerala, India · Global clients
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
