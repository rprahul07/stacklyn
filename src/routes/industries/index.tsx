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
  {
    name: "Construction",
    href: "/industries/construction-software",
    tagline: "Project controls · Digital DPR · BOQ billing · QA/QC · Plant & material",
    desc: "Project controls platforms, digital daily progress reporting, BOQ and subcontractor billing, QA/QC and snagging apps, and material and plant tracking for contractors and infrastructure developers.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 20h20M5 20V9l7-5 7 5v11M9 20v-5h6v5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4v4" strokeLinecap="round" />
      </svg>
    ),
    keywords: ["Project controls", "Digital DPR", "BOQ & RA bills", "Snagging app", "Measurement book"],
  },
  {
    name: "Manufacturing",
    href: "/industries/manufacturing-software",
    tagline: "MES · OEE dashboards · SCADA integration · Traceability · CMMS",
    desc: "Manufacturing execution systems, real-time OEE dashboards, PLC and SCADA connectivity, batch traceability and quality platforms, CMMS maintenance systems, and AI predictive maintenance for plants.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 20h20M4 20V11l5 3V11l5 3V6l6 4v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    keywords: ["Custom MES", "OEE dashboard", "OPC-UA / Modbus", "Batch traceability", "Predictive maintenance"],
  },
  {
    name: "Logistics & Supply Chain",
    href: "/industries/logistics-supply-chain-software",
    tagline: "TMS · WMS · Fleet tracking · Driver apps · Customer portals",
    desc: "Transport and warehouse management systems, live consignment tracking, driver and POD apps, freight forwarding platforms, and customer visibility portals for 3PL and transport operators.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 8h11v9H1zM12 11h5l4 3v3h-9z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="19" r="1.8" />
        <circle cx="17" cy="19" r="1.8" />
      </svg>
    ),
    keywords: ["Custom TMS", "WMS", "Fleet tracking", "Driver POD app", "E-way bill integration"],
  },
  {
    name: "Marine & Shipping",
    href: "/industries/marine-shipping-software",
    tagline: "Fleet ops · Crew certification · PMS · Voyage & bunker · Port calls",
    desc: "Fleet operations dashboards, crew management and certification tracking, planned maintenance systems, voyage and bunker analytics, and offline vessel inspection apps built for satellite bandwidth.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 18c1.5 1.5 3 1.5 4.5 0S10.5 16.5 12 18s3 1.5 4.5 0S19.5 16.5 21 18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 14l1-6h12l1 6M12 3v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    keywords: ["Fleet operations", "Crew certification", "PMS", "Voyage analytics", "Port call platform"],
  },
  {
    name: "Renewable Energy & Utilities",
    href: "/industries/renewable-energy-software",
    tagline: "Plant monitoring · Inverter & SCADA data · Loss analytics · O&M",
    desc: "Portfolio performance monitoring, multi-OEM inverter and SCADA integration, yield and loss diagnostics, O&M ticketing with offline field apps, and automated generation and PPA reporting.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    keywords: ["Solar monitoring", "Performance ratio", "SCADA integration", "O&M ticketing", "PPA reporting"],
  },
  {
    name: "Facility Management",
    href: "/industries/facility-management-software",
    tagline: "CAFM · CMMS · PPM scheduling · Helpdesk · SLA dashboards",
    desc: "CAFM and CMMS platforms, QR-tagged asset registers, preventive maintenance scheduling, offline technician apps, tenant helpdesk portals, and SLA and penalty tracking for multi-site portfolios.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21V7l7-4 7 4v14M21 21H3M8 21v-5h4v5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10h.01M13 10h.01M7 14h.01M13 14h.01" strokeLinecap="round" />
      </svg>
    ),
    keywords: ["CAFM", "CMMS", "PPM scheduling", "SLA tracking", "QR asset register"],
  },
  {
    name: "Field Service Management",
    href: "/industries/field-service-management-software",
    tagline: "Dispatch · Technician apps · AMC contracts · Spare parts · Billing",
    desc: "Job scheduling and dispatch consoles, offline technician apps, AMC and warranty contract management, van stock and spare parts tracking, customer portals, and service profitability analytics.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6 2 2 2.6-2.6a4 4 0 01-5-5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    keywords: ["FSM software", "Technician app", "AMC management", "First-time fix", "Service billing"],
  },
  {
    name: "HSE & Compliance",
    href: "/industries/hse-compliance-software",
    tagline: "Permit to work · Incidents · Audits · Risk assessment · Competency",
    desc: "Digital permit-to-work, incident and near-miss reporting, audit and inspection apps, JSA and HIRA tools, training and competency matrices, and contractor compliance portals with audit-grade evidence.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    keywords: ["Digital PTW", "Incident reporting", "ISO 45001 audits", "JSA / HIRA", "Contractor compliance"],
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare-software",
    tagline: "HMS · EMR/EHR · Telemedicine · LIS · HL7/FHIR",
    desc: "Hospital management systems, EMR and EHR platforms, telemedicine, patient portals, lab and radiology systems, and HL7, FHIR, and ABDM interoperability for hospitals and healthtech.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12C19 16.5 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 9v5M9.5 11.5h5" strokeLinecap="round" />
      </svg>
    ),
    keywords: ["Hospital management", "EMR / EHR", "Telemedicine", "LIS / RIS", "HL7 / FHIR"],
  },
  {
    name: "Fintech & BFSI",
    href: "/industries/fintech-software",
    tagline: "LOS/LMS · Payments · Digital KYC · Collections · Reporting",
    desc: "Loan origination and management systems, payments and settlement infrastructure, digital KYC journeys, collections platforms, and reconciliation-grade ledgers for lenders and fintechs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" strokeLinecap="round" />
      </svg>
    ),
    keywords: ["Lending platforms", "Digital KYC", "Payments & UPI", "Collections", "Reconciliation"],
  },
  {
    name: "E-commerce & Retail",
    href: "/industries/ecommerce-retail-software",
    tagline: "Headless storefronts · Marketplaces · OMS · Inventory · POS",
    desc: "Headless Next.js storefronts, B2B and B2C marketplaces, order and inventory management, POS and omnichannel tools, and D2C apps for brands that outgrew hosted platforms.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 4h2l2.4 11.2a2 2 0 002 1.6h7.7a2 2 0 002-1.5L21 8H6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="10" cy="20" r="1.2" /><circle cx="17" cy="20" r="1.2" />
      </svg>
    ),
    keywords: ["Headless commerce", "Marketplace", "Order management", "Inventory sync", "POS"],
  },
  {
    name: "EdTech & Education",
    href: "/industries/edtech-software",
    tagline: "LMS · Assessments · Live classes · School ERP · Analytics",
    desc: "Learning management systems, assessment and proctoring engines, live class platforms, school and campus ERP, student apps, and learning analytics for edtech and institutions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 9l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 11v5c3 2 9 2 12 0v-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    keywords: ["Custom LMS", "Online assessments", "School ERP", "Live classes", "Learning analytics"],
  },
  {
    name: "Insurance",
    href: "/industries/insurance-software",
    tagline: "Policy admin · Claims · Quote & bind · Broker portals · Renewals",
    desc: "Policy administration systems, quote and bind engines, claims management, underwriting workbenches, broker portals, commission engines, and renewal platforms for insurers and brokers.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8v8M8 12h8" strokeLinecap="round" />
      </svg>
    ),
    keywords: ["Policy administration", "Claims management", "Quote & bind", "Broker portal", "Commission engine"],
  },
  {
    name: "Real Estate & PropTech",
    href: "/industries/proptech-real-estate-software",
    tagline: "Inventory CRM · Bookings · Collections · Broker portals · Lease",
    desc: "Unit inventory and sales CRM, booking to registration workflows, construction-linked collections, channel partner portals, lease management, and property marketplaces.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21V10l9-7 9 7v11" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    keywords: ["Sales CRM", "Unit inventory", "Collections", "Broker portal", "Lease management"],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/industries#list`,
      "name": "Industries Stacklyn Builds Software For",
      "itemListElement": industries.map((industry, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${industry.name} Software Development`,
        "url": `${BASE_URL}${industry.href}`,
      })),
    },
  ],
};

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industry Software Solutions | Oil & Gas, Mining, Manufacturing, Logistics | Stacklyn" },
      {
        name: "description",
        content:
          "Stacklyn builds custom software for industrial MNCs across 18 sectors: oil & gas, mining, construction, EPC, manufacturing, logistics, marine, renewable energy, facility management, field service, HSE, workforce management, healthcare, fintech, e-commerce, edtech, insurance, and real estate. Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "industrial software development India, oil gas software company Kerala, mining software India, construction software development company, manufacturing MES software India, logistics TMS software development, marine shipping software development, renewable energy software India, facility management CAFM software, field service management software India, HSE permit to work software, workforce management software construction, EPC software development India, MNC software development India, industrial digital transformation software",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries` },
      { property: "og:title", content: "Industry Software Solutions | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom software for oil & gas, mining, construction, manufacturing, logistics, marine, energy, FM, field service, and HSE. Enterprise-grade platforms from Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Industry Software Solutions | Stacklyn" },
      {
        name: "twitter:description",
        content: "Custom software for oil & gas, mining, construction, manufacturing, logistics, marine, energy, FM, and HSE. From Kerala, India.",
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
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Industry-Specific Software Solutions · Kerala, India
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
            >
              Enterprise Software Built for Heavy Industry
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            >
              Stacklyn builds custom software for the world's most demanding industries — oil & gas, mining,
              construction, EPC, manufacturing, logistics, marine, renewable energy, facility management, field service,
              HSE, healthcare, fintech, e-commerce, edtech, insurance, and real estate. We combine enterprise-grade architecture with deep domain knowledge to deliver software that
              actually fits how your operations work.
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
              Generic enterprise software is built for the average business. Oil & gas operators, mining companies,
              manufacturers, logistics networks, shipping managers, and EPC contractors are not average businesses. They
              need software that understands their operational vocabulary, their regulatory environment, and the
              realities of field operations.
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
