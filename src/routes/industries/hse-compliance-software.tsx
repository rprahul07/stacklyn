import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "HSE & Compliance",
  slug: "hse-compliance-software",
  headline: "Custom HSE, Safety & Compliance Software Development",
  tagline: "Permit to Work · Incident Reporting · Audits & Inspections · Risk Assessment · Training Matrix",
  intro:
    "Stacklyn builds custom HSE and compliance software for industrial enterprises, contractors, and multi-site operators. We deliver digital permit-to-work systems, incident and near-miss reporting platforms, audit and inspection apps, risk assessment and JSA tools, training and competency matrices, and compliance dashboards that hold audit-grade evidence for every safety obligation.",
  industryContext:
    "Safety performance is judged on evidence, not intent. Regulators, clients, and insurers all ask the same question after an incident: show me the permit, the risk assessment, the training record, and the close-out of the last three observations. Most organisations can produce those documents eventually, from files, registers, and email — which is exactly why audits consume weeks and why leading indicators never inform decisions in time. Digital HSE systems change the economics: evidence is captured at the point of work, leading indicators become live, and audit preparation turns into a report export.",
  painPoints: [
    { title: "Paper Permits at the Work Face", desc: "Permit-to-work issued on paper with signatures collected physically, making live visibility of active high-risk work impossible for control rooms." },
    { title: "Under-Reported Near Misses", desc: "Reporting friction so high that near misses go unrecorded, removing the leading indicator that prevents the next serious incident." },
    { title: "Observation Close-Out Drift", desc: "Safety observations and audit findings raised enthusiastically then left open for months with no owner, due date, or escalation." },
    { title: "Training & Competency Gaps", desc: "Certificates and inductions tracked in spreadsheets, so unqualified personnel reach restricted work areas undetected." },
    { title: "Contractor Compliance Exposure", desc: "Contractor documentation, insurance, inductions, and worker qualifications verified manually at gates, leaving legal exposure on multi-contractor sites." },
    { title: "Audit Preparation Fire Drills", desc: "Weeks of manual document assembly before every client audit, regulatory inspection, or ISO 45001 certification review." },
  ],
  solutions: [
    {
      title: "Digital Permit to Work (ePTW)",
      desc: "Configurable permit types — hot work, confined space, working at height, electrical isolation, excavation — with risk assessment linkage, multi-level approval, gas test records, live permit board, and time-bound auto-expiry.",
    },
    {
      title: "Incident, Near Miss & Investigation Platform",
      desc: "Low-friction reporting from mobile with photo capture, severity classification, investigation workflows, root cause analysis (5-why, fishbone), corrective actions, and statutory notification tracking.",
    },
    {
      title: "Audit & Inspection App",
      desc: "Configurable checklist builder for safety walks, ISO 45001 and 14001 audits, equipment inspections, and client audits, with scoring, photo evidence, findings register, and automatic action assignment.",
    },
    {
      title: "Risk Assessment, JSA & HIRA Tools",
      desc: "Digital job safety analysis and hazard identification with reusable hazard libraries, control hierarchies, residual risk scoring, approval workflows, and linkage from assessments to permits and toolbox talks.",
    },
    {
      title: "Training, Competency & Induction Matrix",
      desc: "Role-based competency matrix, certificate repository with expiry alerts, induction tracking, refresher scheduling, and gate-level verification that a worker is qualified for the task they are assigned.",
    },
    {
      title: "Contractor HSE Compliance Portal",
      desc: "Contractor self-service upload of insurance, statutory documents, worker qualifications, and method statements, with verification workflows, expiry monitoring, and site access gating on compliance status.",
    },
    {
      title: "Safety Observation & Behaviour Programme",
      desc: "BBS observation capture, unsafe act and condition trending, positive reinforcement tracking, participation leaderboards by department, and closure accountability dashboards.",
    },
    {
      title: "HSE Analytics & Leading Indicator Dashboard",
      desc: "Live TRIFR, LTIFR, severity rate, observation ratios, permit compliance, and action closure metrics by site, contractor, and department, with board-ready monthly HSE report packs.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "Redis",
    "React Native (Offline Field Apps)",
    "QR / NFC Asset & Location Tagging",
    "Geofencing & Location Verification",
    "Digital Signature & Approval Workflows",
    "REST API", "GraphQL", "WebSockets",
    "SAP / SuccessFactors / HRMS Integration",
    "Power BI / Metabase Export",
    "AWS", "Azure", "Docker", "Kubernetes",
    "Recharts / D3.js (Safety KPI Dashboards)",
  ],
  clients: [
    "Oil, gas, and petrochemical operators",
    "Mining and heavy industry companies",
    "Construction and EPC contractors",
    "Manufacturing plants and process industries",
    "Power, utilities, and renewable operators",
    "Ports, logistics, and warehousing operators",
    "Multi-contractor industrial facilities",
  ],
  whyStacklyn: [
    { title: "Configurable to Your HSE Management System", desc: "Permit types, risk matrices, checklist templates, and escalation rules are configuration, not code — because no two HSE management systems classify risk identically." },
    { title: "Designed to Reduce Reporting Friction", desc: "If reporting a near miss takes more than a minute on a phone with gloves on, it does not get reported. Interface speed is treated as a safety feature." },
    { title: "Works at the Work Face", desc: "Confined spaces, plant rooms, and remote sites have no signal. Field apps run fully offline with location and time capture preserved for audit integrity." },
    { title: "Audit-Grade Evidence Trail", desc: "Immutable records, user attribution, timestamps, and photo evidence are built into the data model, so ISO 45001, client, and regulatory audits become exports rather than exercises." },
    { title: "Leading Indicators, Not Just Lagging", desc: "Observation rates, permit compliance, action closure speed, and training currency are surfaced live — the metrics that move before an incident, not after." },
    { title: "Contractor-Inclusive by Design", desc: "Most industrial incidents involve contractor personnel. Contractors get portal access, compliance gating, and their own performance dashboards inside the same system." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom HSE software?",
      a: "Yes. Stacklyn builds custom HSE and safety management software including digital permit-to-work systems, incident and near-miss reporting, audit and inspection apps, risk assessment and JSA tools, training and competency matrices, and HSE analytics dashboards.",
    },
    {
      q: "Can Stacklyn build a digital permit-to-work (ePTW) system?",
      a: "Yes. We build configurable ePTW systems supporting hot work, confined space, working at height, electrical isolation, and excavation permits, with risk assessment linkage, multi-level approvals, gas test records, a live permit board for control rooms, and time-bound automatic expiry.",
    },
    {
      q: "Will the safety app work without internet at site?",
      a: "Yes. Our HSE field apps are offline-first. Workers and supervisors can raise observations, complete inspections, capture incidents, and record permit checks in confined spaces or remote areas, with timestamps and location preserved and automatic sync when connectivity returns.",
    },
    {
      q: "Can the system support ISO 45001 and ISO 14001 audits?",
      a: "Yes. We build configurable audit templates aligned to ISO 45001, ISO 14001, and client-specific protocols, with scoring, photo-evidenced findings, corrective action assignment and tracking, and exportable audit report packs for certification bodies.",
    },
    {
      q: "Does Stacklyn build contractor safety compliance portals?",
      a: "Yes. We build contractor portals for self-service upload of insurance, statutory documents, worker qualifications, and method statements, with verification workflows, expiry monitoring, and site access gating based on live compliance status.",
    },
    {
      q: "Can the platform track training certificates and competency expiry?",
      a: "Yes. We build role-based competency matrices with certificate repositories, automated expiry alerting, induction and refresher tracking, and verification at gate or task assignment so unqualified personnel are not deployed to restricted work.",
    },
    {
      q: "What HSE metrics can the dashboard report?",
      a: "We build live dashboards covering TRIFR, LTIFR, severity rate, near-miss and observation ratios, permit compliance, action closure ageing, training currency, and contractor-wise performance, sliced by site, department, and period, with automated monthly HSE report packs.",
    },
    {
      q: "Can HSE software integrate with our HRMS or SAP system?",
      a: "Yes. We integrate with SAP, SuccessFactors, and other HRMS platforms so employee master data, org structure, and contractor records stay synchronised, avoiding duplicate maintenance of personnel data across systems.",
    },
    {
      q: "How much does custom HSE software development cost?",
      a: "A focused module such as incident reporting or digital inspections starts from $6,000-12,000. A full HSE suite with ePTW, incidents, audits, risk assessment, competency, and contractor portals typically ranges from $22,000-78,000 depending on site count and integrations.",
    },
    {
      q: "How do I start an HSE software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your HSE management system documents and the process you want digitised first. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
    { name: "Mining Software", href: "/industries/mining-software" },
    { name: "Construction Software", href: "/industries/construction-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "AI Application Development", href: "/services/ai-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/hse-compliance-software#service`,
      "name": "HSE & Compliance Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom HSE and compliance software development: digital permit to work, incident and near-miss reporting, audit and inspection apps, risk assessment and JSA tools, competency matrices, contractor compliance portals, and safety analytics dashboards.",
      "areaServed": ["IN", "AE", "SA", "QA", "OM", "GB", "AU", "ZA"],
      "serviceType": "Custom Software Development for HSE and Compliance",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "HSE & Compliance Software", "item": `${BASE_URL}/industries/hse-compliance-software` },
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

export const Route = createFileRoute("/industries/hse-compliance-software")({
  head: () => ({
    meta: [
      { title: "HSE & Safety Compliance Software Development | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom HSE software: digital permit to work, incident and near-miss reporting, audit and inspection apps, risk assessment, competency matrix, contractor compliance portals. Kerala, India. Serving industrial MNCs.",
      },
      {
        name: "keywords",
        content:
          "HSE software development India, digital permit to work system, ePTW software development, incident reporting software industrial, safety audit inspection app, ISO 45001 software development, risk assessment JSA software, contractor compliance portal development, safety management system software India, near miss reporting app",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/hse-compliance-software` },
      { property: "og:title", content: "HSE & Safety Compliance Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Digital permit to work, incident reporting, audits, risk assessment, competency tracking, and contractor compliance. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HSE & Safety Compliance Software | Stacklyn" },
      {
        name: "twitter:description",
        content: "ePTW, incident reporting, audits, JSA, and contractor compliance software for industry. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/hse-compliance-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
