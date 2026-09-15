import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "E-commerce & Retail",
  slug: "ecommerce-retail-software",
  headline: "Custom E-commerce & Retail Software Development",
  tagline: "Headless Storefronts · Marketplaces · OMS · Inventory · POS · D2C Apps",
  intro:
    "Stacklyn builds custom e-commerce and retail software for D2C brands, multi-brand retailers, marketplaces, and distribution businesses. We deliver headless storefronts, B2B and B2C marketplace platforms, order management and inventory systems, POS and omnichannel tooling, loyalty programmes, and merchandising analytics — built for teams that have outgrown a template-based store.",
  industryContext:
    "Most retail businesses start on a hosted platform and stay there happily until one of three things breaks: catalogue complexity, order orchestration, or margin. A brand with configurable products, tiered B2B pricing, or split fulfilment eventually finds itself paying for apps that half-fit and running the remainder in spreadsheets. The threshold for custom development is rarely design — it is when the order lifecycle spans multiple warehouses, channels, and partners, and no off-the-shelf product can hold the truth about what is actually in stock and where it is going.",
  painPoints: [
    { title: "Platform Limits on Catalogue Logic", desc: "Configurable products, bundles, tiered B2B pricing, and customer-specific catalogues forced into a template model that was never designed for them." },
    { title: "Inventory Truth Scattered Across Channels", desc: "Marketplace, website, POS, and warehouse stock tracked separately, producing oversells, cancellations, and account health penalties." },
    { title: "Manual Order Orchestration", desc: "Split shipments, partial fulfilment, backorders, and returns coordinated by hand across warehouses and courier partners." },
    { title: "App Sprawl and Rising Costs", desc: "A dozen paid plugins layered on a hosted platform, each adding load time, fragility, and a monthly bill that grows with volume." },
    { title: "Slow Storefront Performance", desc: "Heavy themes and third-party scripts pushing Core Web Vitals into failing territory, quietly reducing conversion on every session." },
    { title: "No Margin Visibility by SKU", desc: "Discounts, shipping costs, returns, and marketplace commissions never reconciled per SKU, so best-selling products may be loss-making." },
  ],
  solutions: [
    {
      title: "Headless Commerce Storefront",
      desc: "High-performance Next.js storefronts with server-side rendering, edge caching, structured product data, and SEO-first architecture that scores well on Core Web Vitals under real traffic.",
    },
    {
      title: "B2B & B2C Marketplace Platform",
      desc: "Multi-vendor onboarding, seller dashboards, commission and payout engines, catalogue moderation, dispute handling, and buyer-specific pricing and credit terms for B2B trade.",
    },
    {
      title: "Order Management System (OMS)",
      desc: "Unified order lifecycle across channels with intelligent warehouse allocation, split and partial fulfilment, backorder handling, returns and exchanges, and courier integration with tracking.",
    },
    {
      title: "Inventory & Warehouse Management",
      desc: "Real-time multi-location stock with reservation logic, bin and batch tracking, purchase orders and goods receipt, stock transfers, cycle counting, and low-stock and reorder automation.",
    },
    {
      title: "POS & Omnichannel Retail Tools",
      desc: "Store point-of-sale with offline capability, unified customer profiles across online and store, click-and-collect, ship-from-store, and endless-aisle ordering from the shop floor.",
    },
    {
      title: "D2C Mobile App & Loyalty",
      desc: "React Native shopping apps with personalised feeds, wishlists, push re-engagement, referral mechanics, tiered loyalty points, and coupon and campaign management.",
    },
    {
      title: "ERP, Accounting & Channel Integrations",
      desc: "Two-way integration with SAP, Tally, Zoho, and marketplace APIs including Amazon and Flipkart, keeping catalogue, pricing, stock, orders, and invoices synchronised across systems.",
    },
    {
      title: "Merchandising & Margin Analytics",
      desc: "Dashboards for SKU-level contribution margin after discounts, shipping, returns, and commissions, plus cohort retention, basket analysis, and AI-driven recommendations and search.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "Redis",
    "Headless Commerce Architecture",
    "Elasticsearch / Typesense (Search)",
    "React Native (D2C & POS Apps)",
    "Payment Gateway & Wallet Integration",
    "Shipping & Courier Aggregator APIs",
    "Marketplace APIs (Amazon, Flipkart)",
    "SAP / Tally / Zoho Integration",
    "REST API", "GraphQL", "Webhooks",
    "CDN & Edge Caching", "Core Web Vitals Optimisation",
    "AWS", "Azure", "Docker", "Kubernetes",
  ],
  clients: [
    "D2C brands scaling beyond hosted platforms",
    "Multi-brand and multi-store retailers",
    "B2B distributors and wholesale businesses",
    "Online marketplaces and aggregators",
    "Grocery, fashion, and specialty retail chains",
    "Manufacturers launching direct-to-consumer channels",
    "Subscription and replenishment commerce businesses",
  ],
  whyStacklyn: [
    { title: "Performance Is Revenue", desc: "We build storefronts where server rendering, edge caching, and disciplined third-party scripts keep Core Web Vitals green, because load time shows up directly in conversion rate." },
    { title: "One Source of Stock Truth", desc: "Inventory is modelled once with reservation logic, then projected to every channel — the only reliable way to stop oversells across marketplace, web, and store." },
    { title: "Order Orchestration That Handles Reality", desc: "Split shipments, partial cancellations, exchanges, and multi-warehouse allocation are modelled explicitly rather than patched with manual workarounds." },
    { title: "You Own the Platform", desc: "Custom commerce ends the per-app monthly tax and the ceiling on what your catalogue and pricing logic can express. The codebase and the data are yours." },
    { title: "Margin Made Visible", desc: "We reconcile discounts, shipping, returns, and commissions to SKU level, so merchandising decisions are made on contribution margin rather than gross revenue." },
    { title: "Migrate Without a Blackout", desc: "We run phased migrations with catalogue and customer data mapping, URL and SEO preservation with redirects, and parallel running so search rankings and orders survive the switch." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom e-commerce platforms?",
      a: "Yes. Stacklyn builds custom e-commerce platforms including headless Next.js storefronts, B2B and B2C marketplaces, order management systems, inventory and warehouse management, POS and omnichannel tools, and D2C mobile apps with loyalty programmes.",
    },
    {
      q: "When should we move from Shopify or WooCommerce to custom e-commerce?",
      a: "The usual triggers are catalogue complexity that the platform cannot express (configurable products, bundles, tiered B2B pricing), order orchestration across multiple warehouses and channels, app subscription costs growing with volume, and performance ceilings from heavy themes. If your team is running significant parts of the business in spreadsheets alongside the platform, custom development typically pays back.",
    },
    {
      q: "Can Stacklyn build a headless commerce storefront?",
      a: "Yes. We build headless storefronts in Next.js with server-side rendering, edge caching, structured product data for rich results, and SEO-first architecture designed to hold strong Core Web Vitals scores under real traffic loads.",
    },
    {
      q: "Can you build a multi-vendor marketplace?",
      a: "Yes. We build marketplace platforms with vendor onboarding and KYC, seller dashboards, commission and payout engines, catalogue moderation workflows, dispute handling, and buyer-specific pricing and credit terms for B2B marketplaces.",
    },
    {
      q: "How do you prevent overselling across marketplaces and stores?",
      a: "We model inventory once as a single source of truth with reservation logic at order placement, then project availability to every channel with near-real-time sync. Marketplace listings, the website, POS, and warehouse operations all read from the same stock position rather than maintaining separate counts.",
    },
    {
      q: "Can Stacklyn build a POS system that works with our online store?",
      a: "Yes. We build point-of-sale systems with offline capability, unified customer profiles across online and in-store purchases, click-and-collect, ship-from-store fulfilment, and endless-aisle ordering so store staff can sell inventory held elsewhere.",
    },
    {
      q: "Can the platform integrate with Amazon, Flipkart, SAP, or Tally?",
      a: "Yes. We build two-way integrations with marketplace APIs including Amazon and Flipkart, and with ERP and accounting systems such as SAP, Tally, and Zoho, keeping catalogue, pricing, stock, orders, and invoices synchronised across all systems.",
    },
    {
      q: "Will migrating to a custom platform hurt our SEO?",
      a: "Not if it is planned properly. We preserve URL structures where possible, implement comprehensive 301 redirect maps for those that change, carry over structured data and metadata, and run parallel validation before cutover. Migrations lose rankings when redirects and metadata are treated as an afterthought, so we treat them as part of the build.",
    },
    {
      q: "How much does custom e-commerce development cost?",
      a: "A headless storefront with catalogue, cart, checkout, and payment integration starts from $6,000-14,000. A full commerce platform with OMS, inventory, POS, marketplace features, and ERP integration typically ranges from $20,000-85,000 depending on channel count and catalogue complexity.",
    },
    {
      q: "How do I start an e-commerce project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your business profile — SKU count, channels, order volumes, and current platform. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain-software" },
    { name: "Fintech & BFSI Software", href: "/industries/fintech-software" },
    { name: "Manufacturing Software", href: "/industries/manufacturing-software" },
    { name: "Real Estate & PropTech", href: "/industries/proptech-real-estate-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Next.js Development", href: "/services/nextjs-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "MVP Development", href: "/services/mvp-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/ecommerce-retail-software#service`,
      "name": "E-commerce & Retail Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom e-commerce and retail software development: headless Next.js storefronts, B2B and B2C marketplaces, order management systems, inventory and warehouse management, POS and omnichannel tools, D2C apps, and margin analytics.",
      "areaServed": ["IN", "AE", "SA", "GB", "US", "SG", "AU"],
      "serviceType": "Custom Software Development for E-commerce and Retail",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "E-commerce & Retail Software", "item": `${BASE_URL}/industries/ecommerce-retail-software` },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": data.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/industries/ecommerce-retail-software")({
  head: () => ({
    meta: [
      { title: "E-commerce & Retail Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom e-commerce software: headless Next.js storefronts, marketplaces, order management, inventory, POS and omnichannel, D2C apps. Kerala, India. Serving D2C brands and retailers globally.",
      },
      {
        name: "keywords",
        content:
          "ecommerce software development India, headless commerce development company, custom marketplace development, order management system development, inventory management software ecommerce, POS software development India, D2C app development company, Shopify to custom migration, B2B ecommerce portal development, Next.js ecommerce development",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/ecommerce-retail-software` },
      { property: "og:title", content: "E-commerce & Retail Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Headless storefronts, marketplaces, OMS, inventory, POS, and D2C apps for brands that outgrew hosted platforms. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "E-commerce & Retail Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "Headless storefronts, marketplaces, OMS, inventory, and POS for growing retailers. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/ecommerce-retail-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
