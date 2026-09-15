import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Fintech & BFSI",
  slug: "fintech-software",
  headline: "Custom Fintech & BFSI Software Development",
  tagline: "Lending Platforms · Payments · KYC & Onboarding · Wealth Tech · Risk & Reporting",
  intro:
    "Stacklyn builds custom fintech and BFSI software for lenders, NBFCs, payment businesses, wealth platforms, and financial services startups. We deliver loan origination and management systems, payment and settlement infrastructure, digital KYC and onboarding journeys, investment and wealth dashboards, collections platforms, and regulatory reporting tooling built for reconciliation-grade accuracy.",
  industryContext:
    "Financial software is unforgiving in a specific way: everything must reconcile. A retail product can tolerate an eventually-consistent counter; a lending or payments platform cannot tolerate a ledger that disagrees with the bank statement. The engineering that matters is therefore unglamorous — idempotent transaction handling, immutable ledgers, deterministic interest and fee computation, replayable webhooks, and audit trails that survive a regulatory inspection years later. Most fintech incidents trace back to one of those fundamentals being treated as an afterthought during a rush to launch.",
  painPoints: [
    { title: "Reconciliation Breaks at Scale", desc: "Payment gateway settlements, internal ledgers, and bank statements diverging daily, consuming finance team hours and hiding real losses." },
    { title: "Manual, Drop-Off Heavy Onboarding", desc: "KYC journeys with document upload friction and manual verification queues, where most applicants abandon before completion." },
    { title: "Rigid Off-the-Shelf LOS/LMS", desc: "Loan platforms that cannot express your actual credit policy, forcing workarounds in spreadsheets outside the system of record." },
    { title: "Interest & Fee Computation Disputes", desc: "Interest, penal charges, and foreclosure calculations implemented inconsistently across systems, producing customer disputes and audit findings." },
    { title: "Collections Run on Spreadsheets", desc: "Delinquency buckets, allocation to agents, and promise-to-pay tracking managed outside the core system with no field visibility." },
    { title: "Painful Regulatory Reporting", desc: "Periodic regulatory and bureau submissions assembled manually each cycle, with format errors discovered only after rejection." },
  ],
  solutions: [
    {
      title: "Loan Origination System (LOS)",
      desc: "Configurable application journeys, document collection, bureau pulls, rule-driven credit policy and scorecards, deviation and approval hierarchies, sanction letters, and disbursement workflows.",
    },
    {
      title: "Loan Management System (LMS)",
      desc: "Immutable ledger, amortisation and repayment schedules, deterministic interest, penal charge and foreclosure computation, restructuring, NPA classification, and statement generation.",
    },
    {
      title: "Digital KYC & Onboarding Journeys",
      desc: "Document capture with OCR extraction, liveness and face match, verification API orchestration, risk-based flows, re-KYC scheduling, and drop-off analytics on every journey step.",
    },
    {
      title: "Payments & Settlement Infrastructure",
      desc: "Gateway and bank integrations, idempotent transaction handling, replayable webhooks, payout and refund flows, automated settlement reconciliation, and exception queues for finance teams.",
    },
    {
      title: "Collections & Recovery Platform",
      desc: "Delinquency bucketing, agent allocation strategies, field collection mobile app with geo-tagged visits, promise-to-pay tracking, receipting, and recovery performance dashboards.",
    },
    {
      title: "Wealth, Investment & Portfolio Dashboards",
      desc: "Portfolio aggregation, holdings and transaction views, XIRR and returns computation, goal tracking, model portfolios, and advisor-facing tools with client reporting packs.",
    },
    {
      title: "Risk, Limits & Fraud Controls",
      desc: "Rule engines for exposure limits, velocity checks, device and behaviour signals, anomaly flags, case management for review queues, and configurable escalation workflows.",
    },
    {
      title: "Regulatory & MIS Reporting",
      desc: "Automated generation of periodic regulatory submissions, bureau reporting files, portfolio MIS, ageing and provisioning reports, with format validation before submission.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "Redis", "Kafka / Event Streams",
    "Double-Entry Ledger Design",
    "Idempotency & Exactly-Once Transaction Patterns",
    "Payment Gateway & Banking API Integration",
    "UPI / NACH / Card Rails Integration",
    "KYC, Bureau & Verification API Orchestration",
    "React Native (Customer & Field Apps)",
    "REST API", "GraphQL", "Webhooks",
    "Encryption, Tokenisation & Secrets Management",
    "AWS", "Azure", "Docker", "Kubernetes",
    "Python (Scoring, Risk & Analytics)",
  ],
  clients: [
    "NBFCs and digital lending companies",
    "Banks and cooperative financial institutions",
    "Payment and settlement businesses",
    "Wealth management and investment platforms",
    "Insurance distribution and broking firms",
    "Embedded finance and BNPL products",
    "Fintech startups building regulated products",
  ],
  whyStacklyn: [
    { title: "Ledger-First Architecture", desc: "We design the ledger before the screens. Immutable, double-entry records with idempotent posting are what keep a platform reconcilable at ten thousand transactions a day and at ten million." },
    { title: "Money Movement Done Carefully", desc: "Retries, duplicate webhooks, partial failures, and timeouts are designed for explicitly, so a network blip never becomes a double disbursement or a lost repayment." },
    { title: "Credit Policy as Configuration", desc: "Rules, scorecards, deviation matrices, and approval hierarchies are configurable by your credit team, so policy changes do not queue behind an engineering release." },
    { title: "Reconciliation Is a Feature", desc: "Automated settlement matching with exception queues is built in from day one, because a finance team spending its month-end in spreadsheets is a product defect." },
    { title: "Audit-Ready Records", desc: "Immutable event history, user attribution, and reproducible computation mean an inspection or dispute is answered from the system rather than reconstructed from memory." },
    { title: "Clear on the Compliance Line", desc: "We build the technical controls, documentation, and evidence your compliance and audit functions need. Licensing, regulatory approval, and legal attestation remain yours, and we support that process rather than making claims on your behalf." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom lending software (LOS and LMS)?",
      a: "Yes. Stacklyn builds custom loan origination systems with configurable application journeys, bureau pulls, rule-driven credit policy and scorecards, deviation and approval hierarchies, and disbursement workflows — plus loan management systems with immutable ledgers, repayment schedules, interest and penal charge computation, restructuring, and NPA classification.",
    },
    {
      q: "Can Stacklyn build digital KYC and onboarding journeys?",
      a: "Yes. We build KYC journeys with document capture and OCR extraction, liveness detection and face match, orchestration of verification APIs, risk-based routing, re-KYC scheduling, and step-level drop-off analytics so you can see exactly where applicants abandon.",
    },
    {
      q: "How do you make sure the platform reconciles correctly?",
      a: "We design ledger-first: immutable double-entry records, idempotent transaction posting, and replayable webhooks, combined with automated settlement matching between gateway reports, internal ledgers, and bank statements, with exception queues for anything that does not match.",
    },
    {
      q: "Can you integrate payment gateways, UPI, NACH, and banking APIs?",
      a: "Yes. We integrate payment gateways, UPI, NACH mandates, card rails, and direct banking APIs, with careful handling of retries, duplicate callbacks, partial failures, and timeouts so money movement stays correct under real-world network conditions.",
    },
    {
      q: "Is fintech software built by Stacklyn RBI compliant?",
      a: "We implement the technical controls that regulated products require — audit trails, data residency configuration, encryption and tokenisation, access control, and reporting outputs — and we document them for your compliance team. Regulatory licensing, approval, and attestation are the responsibility of your organisation as the regulated entity; we build to your compliance requirements and provide the supporting evidence.",
    },
    {
      q: "Can Stacklyn build a collections and recovery platform?",
      a: "Yes. We build collections platforms with delinquency bucketing, agent allocation strategies, a field collection mobile app with geo-tagged visits and receipting, promise-to-pay tracking, and recovery performance dashboards by agent, bucket, and portfolio.",
    },
    {
      q: "Do you build wealth management and investment platforms?",
      a: "Yes. We build portfolio aggregation, holdings and transaction views, XIRR and returns computation, goal-based tracking, model portfolios, and advisor tools with automated client reporting packs.",
    },
    {
      q: "Can the system handle fraud and risk controls?",
      a: "Yes. We build rule engines for exposure limits, velocity checks, device and behavioural signals, and anomaly flagging, with case management queues for manual review and configurable escalation workflows.",
    },
    {
      q: "How much does custom fintech software development cost?",
      a: "A focused module such as a KYC journey, collections app, or reconciliation engine starts from $8,000-16,000. A full lending platform with LOS, LMS, payments, collections, and reporting typically ranges from $30,000-120,000 depending on product complexity and integration count.",
    },
    {
      q: "How do I start a fintech software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your product profile — the financial product, expected volumes, and integrations required. We run a free technical discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Insurance Software", href: "/industries/insurance-software" },
    { name: "E-commerce & Retail Software", href: "/industries/ecommerce-retail-software" },
    { name: "Real Estate & PropTech", href: "/industries/proptech-real-estate-software" },
    { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "MVP Development", href: "/services/mvp-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/fintech-software#service`,
      "name": "Fintech & BFSI Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom fintech and BFSI software development: loan origination and management systems, payments and settlement infrastructure, digital KYC and onboarding, collections platforms, wealth dashboards, risk controls, and regulatory reporting.",
      "areaServed": ["IN", "AE", "SA", "SG", "GB", "US", "QA"],
      "serviceType": "Custom Software Development for Fintech and BFSI",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Fintech Software", "item": `${BASE_URL}/industries/fintech-software` },
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

export const Route = createFileRoute("/industries/fintech-software")({
  head: () => ({
    meta: [
      { title: "Fintech Software Development Company | Lending, Payments, KYC | Stacklyn" },
      {
        name: "description",
        content:
          "Stacklyn builds custom fintech and BFSI software: loan origination and management systems, payments and settlement, digital KYC, collections, wealth dashboards, and regulatory reporting. Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "fintech software development India, loan origination system development, LMS loan management software company, digital KYC onboarding development, payment gateway integration company, collections software development, NBFC software development India, wealth management platform development, BFSI software company Kerala, lending app development India",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/fintech-software` },
      { property: "og:title", content: "Fintech & BFSI Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Loan origination and management, payments and settlement, digital KYC, collections, and risk controls. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fintech & BFSI Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "LOS/LMS, payments, KYC, collections, and reconciliation-grade ledgers. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/fintech-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
