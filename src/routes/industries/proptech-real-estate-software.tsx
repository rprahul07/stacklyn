import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Real Estate & PropTech",
  slug: "proptech-real-estate-software",
  headline: "Custom Real Estate & PropTech Software Development",
  tagline: "Inventory & CRM · Booking to Registration · Channel Partners · Lease · Portals",
  intro:
    "Stacklyn builds custom real estate and proptech software for developers, brokerages, lease and asset managers, and property marketplaces. We deliver unit inventory and sales CRM platforms, booking-to-registration workflows, channel partner portals, collection and demand schedules, lease and tenancy management, customer portals, and property listing marketplaces with map-based discovery.",
  industryContext:
    "Real estate sales fail in the gap between marketing and finance. Leads arrive from a dozen sources, site visits are logged in notebooks, a unit gets blocked verbally over a phone call, and by the time the booking reaches accounts nobody is certain what discount was promised or whether that unit was already held for someone else. Meanwhile collections depend on construction milestones that live in a different system entirely. Custom software fixes this by making unit inventory the single locked source of truth, and by tying every booking, discount, demand, and receipt to it.",
  painPoints: [
    { title: "Double-Blocked Units", desc: "Units held verbally by different sales agents with no system-level locking, producing customer-facing embarrassment and cancelled bookings." },
    { title: "Lead Leakage Across Sources", desc: "Portal, campaign, walk-in, and channel partner leads landing in separate inboxes with no attribution, so marketing spend cannot be judged." },
    { title: "Discount Approvals by WhatsApp", desc: "Price concessions agreed informally with no approval trail, surfacing only when finance reconciles the booking against the price list." },
    { title: "Milestone Collections Slipping", desc: "Construction-linked demand generation done manually, so demand letters go late and collections lag behind the build programme." },
    { title: "Channel Partner Friction", desc: "Brokers without visibility of live inventory, their own lead status, or brokerage payouts, generating constant calls to the sales desk." },
    { title: "Post-Sales Silence", desc: "Customers with no visibility of payment schedule, construction progress, or documentation status, driving complaints and escalations." },
  ],
  solutions: [
    {
      title: "Unit Inventory & Sales CRM",
      desc: "Live project, tower, floor, and unit inventory with system-enforced blocking and expiry, price lists and views-based pricing, lead capture with source attribution, site visit tracking, and sales pipeline dashboards.",
    },
    {
      title: "Booking to Registration Workflow",
      desc: "Digital booking forms, KYC collection, discount approval hierarchies, allotment letters, agreement generation, registration tracking, and possession handover checklists with document archives.",
    },
    {
      title: "Collections & Demand Management",
      desc: "Construction-milestone-linked demand generation, payment schedules, automated demand letters and reminders, receipting, interest on delayed payment, and outstanding ageing dashboards.",
    },
    {
      title: "Channel Partner & Broker Portal",
      desc: "Broker registration and empanelment, live inventory visibility, lead submission with ownership rules, site visit scheduling, brokerage slabs, payout tracking, and performance leaderboards.",
    },
    {
      title: "Lease & Tenancy Management",
      desc: "Lease abstraction, rent rolls and escalation schedules, CAM charges, renewal and exit pipelines, deposit tracking, invoicing, and occupancy and yield reporting for commercial portfolios.",
    },
    {
      title: "Customer Portal & Post-Sales App",
      desc: "Payment schedule and receipts, online payment, construction progress with photo updates, document downloads, service requests, and snag reporting during fit-out and handover.",
    },
    {
      title: "Property Marketplace & Listings",
      desc: "Map-based search with polygon and radius filters, verified listing workflows, media galleries and virtual tours, enquiry routing to agents, and SEO-optimised listing pages with structured data.",
    },
    {
      title: "Facility & Society Management Module",
      desc: "Post-handover community operations covering maintenance billing, complaint and helpdesk workflows, amenity booking, visitor management, and resident communication.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "PostGIS", "MongoDB", "Redis",
    "Mapbox / Google Maps (Map-Based Discovery)",
    "React Native (Sales, Broker & Customer Apps)",
    "Document Generation & E-Signature",
    "Payment Gateway & NACH Integration",
    "WhatsApp / SMS / Email Automation",
    "Tally / SAP / Zoho Books Integration",
    "REST API", "GraphQL", "WebSockets",
    "Structured Data & SEO for Listings",
    "AWS", "Azure", "Docker", "Kubernetes",
    "Recharts / D3.js (Sales & Collection Dashboards)",
  ],
  clients: [
    "Residential and township developers",
    "Commercial and office space developers",
    "Real estate brokerages and agency networks",
    "Property marketplaces and listing platforms",
    "Lease and commercial asset managers",
    "Co-working and managed space operators",
    "Property management and society administrators",
  ],
  whyStacklyn: [
    { title: "Inventory Is Locked, Not Negotiated", desc: "Unit blocking is enforced by the system with expiry timers and audit history, which removes the single most damaging failure in developer sales operations." },
    { title: "Every Discount Has an Approval Trail", desc: "Concessions route through configurable approval hierarchies before a booking can proceed, so finance never discovers a price variance after the fact." },
    { title: "Collections Follow the Build", desc: "Demand generation is driven by construction milestones, turning collections into an automated schedule rather than a monthly manual exercise." },
    { title: "Channel Partners Serve Themselves", desc: "Brokers get live inventory, lead ownership clarity, and payout visibility, which reduces sales desk call volume and improves partner loyalty." },
    { title: "Post-Sales Is a Retention Asset", desc: "Customers who can see their schedule, receipts, and construction progress escalate less and refer more — the cheapest lead source a developer has." },
    { title: "Listings Built to Be Found", desc: "Marketplace pages are built with structured data, clean URLs, and server-side rendering, because property discovery still begins with a search engine." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build real estate CRM and inventory management software?",
      a: "Yes. Stacklyn builds real estate sales platforms with live project, tower, floor, and unit inventory, system-enforced unit blocking with expiry, price lists and view-based pricing, lead capture with source attribution, site visit tracking, and sales pipeline dashboards.",
    },
    {
      q: "Can the system prevent two agents from blocking the same unit?",
      a: "Yes. Unit blocking is enforced at the system level with holding timers, automatic expiry, and full audit history of who blocked what and when. Verbal holds outside the system are exactly the failure this design removes.",
    },
    {
      q: "Can Stacklyn build booking to registration workflows?",
      a: "Yes. We build the full post-sale journey — digital booking forms, KYC collection, discount approval hierarchies, allotment letters, agreement generation, registration tracking, and possession handover checklists with complete document archives.",
    },
    {
      q: "Does the platform handle construction-linked collections?",
      a: "Yes. We build demand management driven by construction milestones, with automated demand letter generation, payment schedules, staged reminders, receipting, interest on delayed payment, and outstanding ageing dashboards by project and tower.",
    },
    {
      q: "Can Stacklyn build a channel partner or broker portal?",
      a: "Yes. We build broker portals with empanelment and registration, live inventory visibility, lead submission with clear ownership and duplicate rules, site visit scheduling, brokerage slab configuration, payout tracking, and partner performance leaderboards.",
    },
    {
      q: "Do you build lease and tenancy management software?",
      a: "Yes. We build lease management with lease abstraction, rent rolls and escalation schedules, CAM charge computation, renewal and exit pipelines, deposit tracking, automated invoicing, and occupancy and yield reporting for commercial portfolios.",
    },
    {
      q: "Can Stacklyn build a property listing marketplace?",
      a: "Yes. We build property marketplaces with map-based search including polygon and radius filters, verified listing workflows, media galleries and virtual tours, enquiry routing to agents, and SEO-optimised listing pages with structured data for search visibility.",
    },
    {
      q: "Can the software integrate with Tally, SAP, or our accounting system?",
      a: "Yes. We integrate bookings, demands, receipts, and invoices with Tally, SAP, Zoho Books, or your existing accounting platform, so the sales system and the books stay reconciled without duplicate data entry.",
    },
    {
      q: "How much does custom real estate software development cost?",
      a: "A focused build such as an inventory and sales CRM or a broker portal starts from $6,000-14,000. A full platform covering inventory, bookings, collections, channel partners, customer portal, and accounting integration typically ranges from $20,000-75,000 depending on project count and module scope.",
    },
    {
      q: "How do I start a real estate software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your profile — number of projects and units, sales team and channel partner count, and the systems you use today. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Construction Software", href: "/industries/construction-software" },
    { name: "Facility Management Software", href: "/industries/facility-management-software" },
    { name: "Fintech & BFSI Software", href: "/industries/fintech-software" },
    { name: "E-commerce & Retail Software", href: "/industries/ecommerce-retail-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "Next.js Development", href: "/services/nextjs-development" },
    { name: "MVP Development", href: "/services/mvp-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/proptech-real-estate-software#service`,
      "name": "Real Estate & PropTech Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom real estate and proptech software development: unit inventory and sales CRM, booking to registration workflows, construction-linked collections, channel partner portals, lease management, customer portals, and property marketplaces.",
      "areaServed": ["IN", "AE", "SA", "QA", "OM", "GB", "SG"],
      "serviceType": "Custom Software Development for Real Estate and PropTech",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Real Estate & PropTech Software", "item": `${BASE_URL}/industries/proptech-real-estate-software` },
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

export const Route = createFileRoute("/industries/proptech-real-estate-software")({
  head: () => ({
    meta: [
      { title: "Real Estate & PropTech Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom real estate software: unit inventory and sales CRM, booking to registration, construction-linked collections, broker portals, lease management, and property marketplaces. Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "real estate software development India, proptech development company, real estate CRM development, property management software development, unit inventory management software builders, channel partner portal real estate, lease management software development, property listing marketplace development, builder ERP software India, real estate collection software",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/proptech-real-estate-software` },
      { property: "og:title", content: "Real Estate & PropTech Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Unit inventory and sales CRM, bookings, collections, broker portals, lease management, and property marketplaces. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Real Estate & PropTech Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "Inventory and sales CRM, bookings, collections, broker portals, and lease management. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/proptech-real-estate-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
