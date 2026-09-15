import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Insurance",
  slug: "insurance-software",
  headline: "Custom Insurance Software Development for Insurers & Brokers",
  tagline: "Policy Administration · Claims · Quote & Bind · Agent Portals · Underwriting",
  intro:
    "Stacklyn builds custom insurance software for insurers, brokers, MGAs, and insurtech products. We deliver policy administration systems, claims management platforms, quote-and-bind journeys, agent and channel partner portals, underwriting workbenches, renewal and persistency engines, and commission management built around the policy lifecycle rather than a generic CRM.",
  industryContext:
    "Insurance runs on two clocks that rarely align: the sales clock, where a quote must be issued in seconds to win the customer, and the servicing clock, where a policy must be administered correctly for years. Most operators handle the first with a slick front end and the second with legacy systems and email. The result is familiar — quotes that cannot be bound without manual intervention, endorsements processed on spreadsheets, claims status invisible to the customer, and commission statements that brokers dispute every month. Custom software earns its place by making the policy record authoritative across the entire lifecycle.",
  painPoints: [
    { title: "Quote-to-Bind Drop-Off", desc: "Quotes generated quickly but requiring manual underwriting touches to bind, losing customers in the gap between interest and issuance." },
    { title: "Endorsements on Spreadsheets", desc: "Mid-term changes, additions, and deletions handled manually outside the policy system, so the record of truth drifts from what was actually sold." },
    { title: "Opaque Claims Journeys", desc: "Customers and brokers unable to see claim status, document requirements, or next steps, generating call volume and complaints." },
    { title: "Commission Disputes Every Cycle", desc: "Channel commission calculated across slabs, overrides, and clawbacks in spreadsheets, producing monthly disputes with agents and brokers." },
    { title: "Renewals Lost by Silence", desc: "No structured renewal pipeline or lapse-risk signal, so persistency erodes through inaction rather than competition." },
    { title: "Underwriting Without Context", desc: "Underwriters assessing risk without consolidated claims history, exposure, or prior decisioning, producing inconsistent outcomes across the book." },
  ],
  solutions: [
    {
      title: "Policy Administration System (PAS)",
      desc: "Full policy lifecycle from issuance through endorsements, mid-term adjustments, cancellations, and renewals, with versioned policy records, premium computation, and document generation.",
    },
    {
      title: "Quote, Rate & Bind Engine",
      desc: "Configurable rating tables and rules, instant quote generation, straight-through processing where risk permits, referral routing where it does not, and digital proposal, payment, and issuance.",
    },
    {
      title: "Claims Management Platform",
      desc: "Intimation through mobile or portal, document checklists, surveyor and assessor assignment, reserve and settlement workflows, approval hierarchies, and full status visibility for customers and brokers.",
    },
    {
      title: "Underwriting Workbench",
      desc: "Consolidated risk view with claims history, exposure, and prior decisions, rule-driven referral triggers, decision notes and audit trail, and portfolio-level underwriting analytics.",
    },
    {
      title: "Agent, Broker & Channel Portal",
      desc: "Self-service quoting and issuance, lead and pipeline tracking, policy servicing requests, commission statements with drill-down, and performance dashboards by product and period.",
    },
    {
      title: "Commission & Payout Engine",
      desc: "Slab-based and override commission structures, clawback handling on cancellation, TDS and deduction rules, statement generation, and dispute-resolution audit trails.",
    },
    {
      title: "Renewals & Persistency Engine",
      desc: "Automated renewal pipelines with staged reminders across email, SMS, and WhatsApp, lapse-risk scoring, allocation to retention teams, and persistency reporting by cohort and channel.",
    },
    {
      title: "Customer Portal & Self-Service App",
      desc: "Policy documents, premium payment and receipts, endorsement requests, claim intimation and tracking, renewal payment, and nominee and contact updates without a call to the branch.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "Redis", "Event-Driven Architecture",
    "Configurable Rating & Rules Engines",
    "Versioned Policy & Ledger Design",
    "React Native (Customer & Surveyor Apps)",
    "Document Generation & E-Signature",
    "Payment Gateway & NACH Integration",
    "WhatsApp / SMS / Email Notification APIs",
    "REST API", "GraphQL", "Webhooks",
    "OCR & Document Intelligence",
    "AWS", "Azure", "Docker", "Kubernetes",
    "Python (Risk Scoring & Analytics)",
  ],
  clients: [
    "General and life insurance companies",
    "Insurance brokers and broking networks",
    "MGAs and managing general agents",
    "Insurtech and embedded insurance startups",
    "Third-party administrators (TPAs)",
    "Corporate benefits and group insurance teams",
    "Bancassurance and channel distribution partners",
  ],
  whyStacklyn: [
    { title: "The Policy Record Stays Authoritative", desc: "Endorsements, adjustments, and cancellations are versioned against the policy rather than tracked beside it, so the system always reflects what was actually sold." },
    { title: "Rating as Configuration", desc: "Rate tables, loadings, discounts, and referral rules are maintained by your product team, so a pricing revision does not wait for an engineering release cycle." },
    { title: "Straight-Through Where It Is Safe", desc: "We automate issuance for risks that clear the rules and route only genuine exceptions to underwriters, which is where quote-to-bind conversion is won." },
    { title: "Commission Maths That Survives Scrutiny", desc: "Slabs, overrides, clawbacks, and deductions are computed deterministically with full drill-down, ending the monthly reconciliation argument with channel partners." },
    { title: "Claims Visibility Reduces Call Volume", desc: "When customers and brokers can see status, required documents, and next steps, the servicing team stops answering the same question by phone." },
    { title: "Clear on the Regulatory Line", desc: "We build the technical controls, audit trails, and reporting outputs your compliance function requires, and document them. Regulatory licensing and product approval remain with your organisation, and we support that process with evidence." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom policy administration systems?",
      a: "Yes. Stacklyn builds custom policy administration systems covering the full lifecycle — issuance, endorsements, mid-term adjustments, cancellations, and renewals — with versioned policy records, configurable premium computation, and automated document generation.",
    },
    {
      q: "Can Stacklyn build a quote and bind engine?",
      a: "Yes. We build rating and quote engines with configurable rate tables, loadings, discounts, and referral rules, supporting straight-through issuance where the risk clears policy and automatic routing to underwriters where it does not, followed by digital proposal, payment, and issuance.",
    },
    {
      q: "Do you build claims management software?",
      a: "Yes. We build claims platforms with mobile and portal intimation, document checklists, surveyor and assessor assignment, reserve and settlement workflows, multi-level approval hierarchies, and full claim status visibility for customers and brokers.",
    },
    {
      q: "Can the system handle agent and broker commission calculations?",
      a: "Yes. We build commission engines supporting slab-based structures, overrides, clawbacks on cancellation, TDS and deduction rules, automated statement generation, and complete drill-down so channel partners can see exactly how each figure was derived.",
    },
    {
      q: "Can Stacklyn build an agent or broker portal?",
      a: "Yes. We build channel portals with self-service quoting and issuance, lead and pipeline tracking, policy servicing requests, commission statements, and performance dashboards segmented by product, period, and sub-agent.",
    },
    {
      q: "Is insurance software built by Stacklyn IRDAI compliant?",
      a: "We implement the technical controls that regulated insurance products require — audit trails, versioned records, access control, data residency configuration, and reporting outputs — and document them for your compliance team. Regulatory licensing, product filing, and approval rest with your organisation as the regulated entity; we build to your compliance specification and supply supporting evidence.",
    },
    {
      q: "Can the platform improve policy renewals and persistency?",
      a: "Yes. We build renewal engines with automated staged reminders across email, SMS, and WhatsApp, lapse-risk scoring based on payment and engagement history, allocation to retention teams, and persistency reporting by cohort, product, and channel.",
    },
    {
      q: "Can Stacklyn integrate with our existing core insurance system?",
      a: "Yes. We frequently build modern front-end journeys, portals, and servicing layers around an existing core system, integrating through APIs, file exchange, or database interfaces, so you modernise the customer and channel experience without replacing the core in one step.",
    },
    {
      q: "How much does custom insurance software development cost?",
      a: "A focused module such as a customer self-service portal, claims intimation app, or commission engine starts from $7,000-15,000. A full platform with policy administration, rating and bind, claims, channel portals, and renewals typically ranges from $30,000-110,000 depending on product lines and integrations.",
    },
    {
      q: "How do I start an insurance software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your profile — product lines, policy volumes, channel structure, and existing systems. We run a free technical discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Fintech & BFSI Software", href: "/industries/fintech-software" },
    { name: "Healthcare Software", href: "/industries/healthcare-software" },
    { name: "Field Service Management", href: "/industries/field-service-management-software" },
    { name: "Real Estate & PropTech", href: "/industries/proptech-real-estate-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "AI Application Development", href: "/services/ai-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/insurance-software#service`,
      "name": "Insurance Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom insurance software development: policy administration systems, quote and bind engines, claims management, underwriting workbenches, agent and broker portals, commission engines, and renewal and persistency platforms.",
      "areaServed": ["IN", "AE", "SA", "GB", "SG", "US", "QA"],
      "serviceType": "Custom Software Development for Insurance",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Insurance Software", "item": `${BASE_URL}/industries/insurance-software` },
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

export const Route = createFileRoute("/industries/insurance-software")({
  head: () => ({
    meta: [
      { title: "Insurance Software Development Company | PAS, Claims, Broker Portals | Stacklyn" },
      {
        name: "description",
        content:
          "Stacklyn builds custom insurance software: policy administration systems, quote and bind engines, claims management, underwriting workbenches, agent portals, and commission engines. Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "insurance software development India, policy administration system development, claims management software development, quote and bind engine development, insurance broker portal development, commission management software insurance, underwriting software development, insurtech development company India, TPA software development, insurance CRM development Kerala",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/insurance-software` },
      { property: "og:title", content: "Insurance Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Policy administration, quote and bind, claims management, underwriting, broker portals, and commission engines. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Insurance Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "PAS, quote and bind, claims, underwriting, and broker portals. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/insurance-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
