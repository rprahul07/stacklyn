import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/velora/Nav";
import { Footer } from "@/components/velora/Footer";
import { FAQ } from "@/components/velora/FAQ";
import { SchemaMarkup } from "@/components/velora/SchemaMarkup";
import { trackLead } from "@/lib/analytics";

const BASE_URL = "https://stacklyn.in";
const PAGE_URL = `${BASE_URL}/tools/software-cost-estimator`;

// Ranges follow Stacklyn's published USD pricing for focused modules and integrated platforms.
const MODULES = [
  { id: "website", label: "Business website", min: 1500, max: 4000 },
  { id: "webapp", label: "Web app / customer portal", min: 4000, max: 12000 },
  { id: "mobile", label: "Mobile app (iOS + Android)", min: 6000, max: 15000 },
  { id: "ecommerce", label: "E-commerce store", min: 2000, max: 12000 },
  { id: "erp", label: "ERP / CRM / inventory module", min: 5000, max: 12000 },
  { id: "saas", label: "SaaS product / MVP", min: 4000, max: 12000 },
  { id: "ptw", label: "Digital permit to work (ePTW)", min: 6000, max: 12000 },
  { id: "hse", label: "HSE incidents, audits & inspections", min: 6000, max: 12000 },
  { id: "icv", label: "ICV / IKTVA / localisation reporting", min: 5000, max: 12000 },
  { id: "crew", label: "Crew rotation & competency tracking", min: 5000, max: 10000 },
  { id: "docs", label: "Document control & vendor portal", min: 6000, max: 12000 },
  { id: "ops", label: "Operations & production dashboards", min: 7000, max: 14000 },
  { id: "aidocs", label: "AI document processing", min: 3000, max: 9000 },
  { id: "assistant", label: "WhatsApp / AI assistant", min: 2400, max: 8000 },
] as const;

const SCALE = [
  { id: "one", label: "1 location", factor: 1 },
  { id: "few", label: "2–5 locations", factor: 1.2 },
  { id: "many", label: "6+ locations", factor: 1.4 },
] as const;

const INTEGRATIONS = [
  { id: "none", label: "None", min: 0, max: 0 },
  { id: "some", label: "1–2 systems (e.g. SAP, Tally)", min: 3000, max: 7000 },
  { id: "many", label: "3 or more systems", min: 7000, max: 15000 },
] as const;

type ScaleId = (typeof SCALE)[number]["id"];
type IntegrationId = (typeof INTEGRATIONS)[number]["id"];

const roundTo500 = (value: number) => Math.round(value / 500) * 500;
const usd = (value: number) => `$${value.toLocaleString("en-US")}`;

function estimate(
  moduleIds: string[],
  offline: boolean,
  arabic: boolean,
  gccHosting: boolean,
  scale: ScaleId,
  integrations: IntegrationId,
) {
  const chosen = MODULES.filter((m) => moduleIds.includes(m.id));
  if (chosen.length === 0) return null;
  // Modules share one platform (users, roles, admin, reporting), so combined builds cost less than the sum.
  const shared = chosen.length > 1 ? 0.85 : 1;
  let min = chosen.reduce((sum, m) => sum + m.min, 0) * shared;
  let max = chosen.reduce((sum, m) => sum + m.max, 0) * shared;
  if (arabic) {
    min *= 1.15;
    max *= 1.15;
  }
  if (offline) {
    min += 4000;
    max += 8000;
  }
  const integration = INTEGRATIONS.find((i) => i.id === integrations)!;
  min += integration.min;
  max += integration.max;
  if (gccHosting) {
    min += 1500;
    max += 3000;
  }
  const factor = SCALE.find((s) => s.id === scale)!.factor;
  min = roundTo500(min * factor);
  max = roundTo500(max * factor);
  const timeline =
    max <= 5000
      ? "3–5 weeks"
      : max < 15000
        ? "6–10 weeks"
        : max < 40000
          ? "3–5 months"
          : "5–9 months, delivered in phases";
  return { min, max, timeline };
}

const faqs = [
  {
    q: "How much does custom software cost?",
    a: "With Stacklyn, a business website typically costs $1,500–4,000, a web app or customer portal $4,000–12,000, a mobile app for iOS and Android $6,000–15,000, and an ERP or CRM module $5,000–12,000. Integrations, offline mobile apps, extra languages, and multiple locations increase the cost.",
  },
  {
    q: "How accurate is this estimate?",
    a: "It uses the same price ranges we quote for real projects, so it is a realistic ballpark. The final price depends on your exact workflows, integrations, and scale, and is fixed in a written proposal after a free discovery call.",
  },
  {
    q: "Why do combined modules cost less than the sum?",
    a: "Modules share one platform — user accounts, roles, approvals, notifications, and reporting — which is built once. The estimator applies a discount when you select more than one module.",
  },
  {
    q: "What running costs should we expect after launch?",
    a: "Cloud hosting for systems like these typically costs $20–300 per month depending on users and data volume. Ongoing support is optional and quoted separately, and AI or messaging usage is billed at provider rates.",
  },
  {
    q: "Can we start with one module and add more later?",
    a: "Yes. Most clients start with one module or a first version, then add modules, locations, and features in fixed-price phases once the first one is proving its value.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${PAGE_URL}#app`,
      name: "Software Development Cost Estimator",
      url: PAGE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Free tool that estimates the cost and timeline of websites, web apps, mobile apps, ERP and CRM, e-commerce, SaaS, AI, and industrial software.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      provider: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Stacklyn",
        url: BASE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Software Cost Estimator", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/tools/software-cost-estimator")({
  head: () => ({
    meta: [
      { title: "Software Development Cost Calculator | Free Estimate | Stacklyn" },
      {
        name: "description",
        content:
          "Free calculator for the cost and timeline of a website, web app, mobile app, ERP or CRM, e-commerce store, SaaS product, or AI automation. Pick what you need and get a USD range in seconds.",
      },
      {
        name: "keywords",
        content:
          "software development cost calculator, app development cost calculator, website cost estimator, mobile app development cost India, ERP development cost, custom software cost estimator, ecommerce website cost",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:title", content: "Software Development Cost Calculator | Stacklyn" },
      {
        property: "og:description",
        content:
          "Estimate the cost and timeline of your website, app, or custom software in seconds.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: CostEstimatorPage,
});

function CostEstimatorPage() {
  const [moduleIds, setModuleIds] = useState<string[]>(["webapp"]);
  const [offline, setOffline] = useState(false);
  const [arabic, setArabic] = useState(false);
  const [gccHosting, setGccHosting] = useState(false);
  const [scale, setScale] = useState<ScaleId>("one");
  const [integrations, setIntegrations] = useState<IntegrationId>("none");

  const result = estimate(moduleIds, offline, arabic, gccHosting, scale, integrations);

  const toggleModule = (id: string) =>
    setModuleIds((current) =>
      current.includes(id) ? current.filter((m) => m !== id) : [...current, id],
    );

  const summary = [
    "Hi Stacklyn, I used your software cost estimator.",
    `Modules: ${
      MODULES.filter((m) => moduleIds.includes(m.id))
        .map((m) => m.label)
        .join(", ") || "none"
    }`,
    `Locations: ${SCALE.find((s) => s.id === scale)!.label}`,
    `Integrations: ${INTEGRATIONS.find((i) => i.id === integrations)!.label}`,
    [
      offline && "Offline mobile app",
      arabic && "Second language (e.g. Arabic)",
      gccHosting && "Private / in-country hosting",
    ]
      .filter(Boolean)
      .join(", ") || "No extra options",
    result ? `Estimate: ${usd(result.min)} – ${usd(result.max)}, ${result.timeline}` : "",
    "I'd like a detailed quote.",
  ]
    .filter(Boolean)
    .join("\n");
  const whatsappHref = `https://wa.me/919544451720?text=${encodeURIComponent(summary)}`;

  return (
    <div className="bg-background text-foreground">
      <SchemaMarkup schema={schema} />
      <Nav />

      <main className="pt-32 pb-8 md:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li className="opacity-40">/</li>
              <li className="text-foreground font-medium">Software Cost Estimator</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
            Software Development Cost Calculator
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Pick the modules and options you need to see a realistic price range and timeline for a
            custom build. The ranges are the ones we quote on real projects.
          </p>

          <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
            <form className="lg:col-span-7 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <fieldset className="rounded-2xl border border-border bg-background p-6">
                <legend className="px-2 text-sm font-semibold">1. Modules</legend>
                <div className="mt-2 grid sm:grid-cols-2 gap-3">
                  {MODULES.map((m) => (
                    <label
                      key={m.id}
                      className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-3 text-sm hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <input
                        type="checkbox"
                        checked={moduleIds.includes(m.id)}
                        onChange={() => toggleModule(m.id)}
                        className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]"
                      />
                      <span>
                        <span className="block font-medium text-foreground">{m.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {usd(m.min)} – {usd(m.max)}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="rounded-2xl border border-border bg-background p-6">
                <legend className="px-2 text-sm font-semibold">2. Scale</legend>
                <div className="mt-2 flex flex-wrap gap-3">
                  {SCALE.map((s) => (
                    <label
                      key={s.id}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <input
                        type="radio"
                        name="scale"
                        checked={scale === s.id}
                        onChange={() => setScale(s.id)}
                        className="accent-[var(--color-primary)]"
                      />
                      {s.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="rounded-2xl border border-border bg-background p-6">
                <legend className="px-2 text-sm font-semibold">
                  3. Integrations with existing systems
                </legend>
                <div className="mt-2 flex flex-wrap gap-3">
                  {INTEGRATIONS.map((i) => (
                    <label
                      key={i.id}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <input
                        type="radio"
                        name="integrations"
                        checked={integrations === i.id}
                        onChange={() => setIntegrations(i.id)}
                        className="accent-[var(--color-primary)]"
                      />
                      {i.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="rounded-2xl border border-border bg-background p-6">
                <legend className="px-2 text-sm font-semibold">4. Options</legend>
                <div className="mt-2 space-y-3 text-sm">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={offline}
                      onChange={(e) => setOffline(e.target.checked)}
                      className="h-4 w-4 accent-[var(--color-primary)]"
                    />
                    Offline mobile app for field staff
                  </label>
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={arabic}
                      onChange={(e) => setArabic(e.target.checked)}
                      className="h-4 w-4 accent-[var(--color-primary)]"
                    />
                    Second language (e.g. Arabic, right-to-left)
                  </label>
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={gccHosting}
                      onChange={(e) => setGccHosting(e.target.checked)}
                      className="h-4 w-4 accent-[var(--color-primary)]"
                    />
                    Private or in-country hosting (data residency)
                  </label>
                </div>
              </fieldset>
            </form>

            <aside
              className="lg:col-span-5 lg:sticky lg:top-24 rounded-2xl border border-primary/30 bg-primary/5 p-8"
              aria-live="polite"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Estimated build cost
              </div>
              {result ? (
                <>
                  <div className="mt-3 text-4xl font-semibold tracking-tight">
                    {usd(result.min)} – {usd(result.max)}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Typical timeline: {result.timeline}
                  </div>
                  <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                    Estimate only. The final price is fixed in a written proposal after a free
                    discovery call. Hosting, optional support, and AI or messaging usage are extra.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackLead("estimator")}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 h-12 text-sm font-semibold text-white hover:bg-[#1ebe5b] transition-colors"
                  >
                    Send this estimate on WhatsApp <span aria-hidden>→</span>
                  </a>
                  <a
                    href="/#contact"
                    className="mt-3 flex w-full items-center justify-center rounded-full border border-border bg-background px-6 h-11 text-sm font-medium hover:bg-surface transition-colors"
                  >
                    Or send a detailed enquiry
                  </a>
                </>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  Select at least one module to see an estimate.
                </p>
              )}
            </aside>
          </div>

          <section className="mt-20 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              How this estimate works
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Each module has a price range based on our real project quotes for a single location.
              When you choose several modules, they share one platform — user accounts, roles,
              approvals, and reporting — so the combined price is lower than the sum. Offline mobile
              apps, extra languages, integrations with systems such as Tally, Zoho, or SAP,
              in-country hosting, and additional locations each add effort, and the estimator
              accounts for them.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Building industrial or HSE software? Read our guide to{" "}
              <a
                href="/blog/custom-oil-gas-software-cost"
                className="text-primary underline underline-offset-4"
              >
                what custom oil and gas and HSE software costs
              </a>
              .
            </p>
          </section>
        </div>

        <FAQ
          items={faqs}
          title="Software Cost — Frequently Asked Questions"
          includeSchema={false}
        />
      </main>

      <Footer />
    </div>
  );
}
