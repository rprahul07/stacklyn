import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FAQ } from "./FAQ";
import { SchemaMarkup } from "./SchemaMarkup";
import { getAIPage, aiPagePath, type AIAutomationPage } from "@/data/ai-automation";

const BASE_URL = "https://stacklyn.in";

const processSteps = [
  { title: "Discovery on your real data", desc: "We review sample conversations, documents, or workflows and confirm feasibility before you commit to a build." },
  { title: "Pilot with measured accuracy", desc: "A working pilot on a slice of real data, scored against an evaluation set agreed with your team." },
  { title: "Build, integrate, and harden", desc: "Production build with integrations, guardrails, monitoring, and human handover or approval steps." },
  { title: "Launch, monitor, and improve", desc: "Supervised launch, weekly quality reviews in the first month, and ongoing improvement from real usage." },
];

function buildSchema(page: AIAutomationPage) {
  const url = `${BASE_URL}${aiPagePath(page.slug)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        "name": page.name,
        "serviceType": page.name,
        "description": page.metaDescription,
        "url": url,
        "provider": { "@type": "Organization", "@id": `${BASE_URL}/#organization`, "name": "Stacklyn", "url": BASE_URL },
        "areaServed": [
          { "@type": "State", "name": "Kerala" },
          { "@type": "Country", "name": "India" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "AI & Automation", "item": `${BASE_URL}/ai-automation` },
          { "@type": "ListItem", "position": 3, "name": page.name, "item": url },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": page.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      },
    ],
  };
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AIAutomationPageView({ page }: { page: AIAutomationPage }) {
  const related = page.related
    .map((slug) => getAIPage(slug))
    .filter((p): p is AIAutomationPage => Boolean(p));

  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={buildSchema(page)} />
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li className="opacity-40">/</li>
                <li><a href="/ai-automation" className="hover:text-primary transition-colors">AI &amp; Automation</a></li>
                <li className="opacity-40">/</li>
                <li className="text-foreground font-medium">{page.name}</li>
              </ol>
            </nav>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {page.eyebrow}
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
            >
              {page.headline}
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            >
              {page.intro}
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
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
            </motion.div>
          </div>
        </section>

        {/* Context + local angle */}
        <section className="py-20 md:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">The Real Problem</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">{page.context.heading}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{page.context.body}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Kerala &amp; India</div>
              <h3 className="text-xl font-semibold mb-6">{page.localAngle.heading}</h3>
              <ul className="space-y-5">
                {page.localAngle.points.map((point) => (
                  <li key={point.title} className="flex gap-3">
                    <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{point.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Use Cases</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">What {page.name} Can Do for Your Business</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.useCases.map((useCase, i) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-background p-7 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-base font-semibold">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 md:py-24 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">What We Deliver</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">What You Get From Stacklyn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {page.deliverables.map((item, i) => (
                <div key={item.title} className="rounded-2xl border border-border bg-background p-7">
                  <div className="text-4xl font-bold text-primary/10 mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">How We Work</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">From Idea to a Measured, Working System</h2>
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Stack */}
        <section className="py-16 md:py-20 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Technology</div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Models, Platforms, and Tools We Use</h2>
            <div className="flex flex-wrap gap-3">
              {page.stack.map((tool) => (
                <span key={tool} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FAQ items={page.faqs} title={`${page.name} — Frequently Asked Questions`} includeSchema={false} />

        {/* Related */}
        <section className="py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
            {related.length > 0 && (
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Related</div>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">More AI &amp; Automation Solutions</h2>
                <div className="flex flex-wrap gap-3">
                  {related.map((item) => (
                    <a
                      key={item.slug}
                      href={aiPagePath(item.slug)}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {item.name} →
                    </a>
                  ))}
                </div>
              </div>
            )}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Services</div>
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Engineering Services Behind It</h2>
              <div className="flex flex-wrap gap-3">
                {page.relatedServices.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {service.name} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Get Started</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Find out what <span className="text-primary">{page.name}</span> can do for you.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Share your use case and a few real examples. We will tell you honestly what AI can and cannot do for it, and send a scoped proposal within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 h-12 text-sm font-medium shadow-glow hover:bg-primary-deep transition-colors"
              >
                Get a Free Assessment <span aria-hidden>→</span>
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
              Based in Kerala · Serving businesses across India and the Gulf
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
