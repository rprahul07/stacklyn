import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FAQ } from "./FAQ";
import { SchemaMarkup } from "./SchemaMarkup";
import { trackLead } from "@/lib/analytics";
import { getMarketPage, marketPagePath, type MarketPage } from "@/data/markets";

const BASE_URL = "https://stacklyn.in";
const PHONE_RAW = "919544451720";

function buildSchema(page: MarketPage) {
  const url = `${BASE_URL}${marketPagePath(page.slug)}`;
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
        "areaServed": page.areaServed,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Global Markets", "item": `${BASE_URL}/markets` },
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

function whatsappHref(page: MarketPage) {
  const text = `Hi Stacklyn, I'm interested in ${page.name}. Can we discuss a project?`;
  return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(text)}`;
}

export function MarketPageView({ page }: { page: MarketPage }) {
  const related = page.related
    .map((slug) => getMarketPage(slug))
    .filter((p): p is MarketPage => Boolean(p));

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
                <li><a href="/markets" className="hover:text-primary transition-colors">Global Markets</a></li>
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

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappHref(page)}
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

        {/* Market context + key facts */}
        <section className="py-20 md:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{page.region}</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">{page.context.heading}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{page.context.body}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/60 p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-5">Key Facts</div>
              <dl className="space-y-4">
                {page.keyFacts.map((fact) => (
                  <div key={fact.label} className="grid grid-cols-3 gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                    <dt className="text-sm font-semibold text-foreground">{fact.label}</dt>
                    <dd className="col-span-2 text-sm text-muted-foreground leading-relaxed">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 md:py-24 bg-surface/60">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Compliance Built In</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-balance">{page.compliance.heading}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {page.compliance.points.map((point) => (
                <div key={point.title} className="rounded-2xl border border-border bg-background p-7">
                  <h3 className="text-base font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">What We Build</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Software We Build for {page.region}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {page.solutions.map((solution, i) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-border bg-background p-7 hover:border-primary/30 transition-colors"
                >
                  <div className="text-4xl font-bold text-primary/10 mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-base font-semibold">{solution.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{solution.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery model */}
        <section className="py-20 md:py-24 bg-surface/60 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">How We Work</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Working With Stacklyn From {page.region}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.delivery.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-background p-7">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
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
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Other Markets</div>
                <h2 className="text-2xl font-semibold tracking-tight mb-6">We Also Serve</h2>
                <div className="flex flex-wrap gap-3">
                  {related.map((item) => (
                    <a
                      key={item.slug}
                      href={marketPagePath(item.slug)}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {item.name} →
                    </a>
                  ))}
                </div>
              </div>
            )}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Capabilities</div>
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Related Solutions</h2>
              <div className="flex flex-wrap gap-3">
                {page.relatedLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {link.name} →
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
              Tell us what your operation needs. <span className="text-primary">We reply within 24 hours.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Share the workflow you want to digitise and the systems you run today. You get a technical assessment and a
              phased, fixed-price proposal — with no obligation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappHref(page)}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackLead("whatsapp")}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-8 h-12 text-sm font-semibold hover:bg-[#1ebe5b] transition-colors"
              >
                Chat on WhatsApp <span aria-hidden>→</span>
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 h-12 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                Send an Enquiry
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
