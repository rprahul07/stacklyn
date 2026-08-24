import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Construction",
  slug: "construction-software",
  headline: "Custom Software Development for Construction Companies",
  tagline: "Project Controls · Site Progress · BOQ Billing · Subcontractor Management · QA/QC",
  intro:
    "Stacklyn builds enterprise construction software for contractors, infrastructure developers, and construction MNCs. We deliver project controls platforms, digital site progress tracking, subcontractor and BOQ billing systems, QA/QC and snag list apps, and material and plant tracking software built for the realities of multi-site construction delivery.",
  industryContext:
    "Construction runs on thin margins, long supply chains, and thousands of daily decisions taken at site level — yet most contractors still coordinate through WhatsApp groups, Excel trackers, and PDF drawings. Large contractors run Primavera P6 or MS Project at the planning layer and SAP or Tally at the finance layer, but the site execution layer between them is almost always a spreadsheet. That gap is where cost overruns, rework, delayed variations, and disputed claims are created. Purpose-built execution software closes it by capturing progress, quality, labour, and material data at source.",
  painPoints: [
    { title: "Site Progress Trapped in Excel", desc: "Daily progress reports compiled manually from site engineers, reaching management days late and too aggregated to act on." },
    { title: "Drawing Version Chaos", desc: "Site teams working from superseded drawings and revisions, causing rework that is only discovered at inspection stage." },
    { title: "Subcontractor Billing Disputes", desc: "Manual measurement books and work-done certification creating disputes, delayed RA bills, and unrecoverable claims." },
    { title: "Material & Equipment Leakage", desc: "No real-time visibility of material consumption against BOQ, idle plant hire, and untracked movement of equipment between sites." },
    { title: "QA/QC and Snag Backlogs", desc: "Paper-based inspection checklists and snag lists that never close out, holding up handover and retention release." },
    { title: "Labour Productivity Blind Spots", desc: "No reliable data on manpower deployed versus output achieved per activity, making productivity claims impossible to defend." },
  ],
  solutions: [
    {
      title: "Construction Project Controls Platform",
      desc: "Unified dashboard for planned versus actual progress, S-curves, cost-to-complete, and variance analysis. Integrates with Primavera P6 and MS Project schedules while capturing execution data from site.",
    },
    {
      title: "Digital Daily Progress Reporting (DPR)",
      desc: "Mobile-first DPR app for site engineers: activity-wise progress, manpower deployed, plant utilised, weather, and hold-ups — captured offline at site and rolled up into management dashboards automatically.",
    },
    {
      title: "BOQ, Measurement & Subcontractor Billing",
      desc: "Digital measurement book, work-done certification workflows, RA bill generation, deduction and retention handling, and subcontractor billing portals that shorten certification cycles from weeks to days.",
    },
    {
      title: "QA/QC, Snagging & Handover App",
      desc: "Configurable inspection and test plans (ITP), digital checklists, photo-evidenced snag capture with drawing pinning, NCR workflows, and handover dossier generation for client acceptance.",
    },
    {
      title: "Drawing & Document Control System",
      desc: "Controlled revision management for drawings, RFIs, transmittals, and specifications with automatic superseding, distribution matrices, and mobile access to the current revision at site.",
    },
    {
      title: "Material, Store & Inventory Management",
      desc: "GRN-to-consumption tracking against BOQ, indent and issue workflows, multi-store stock visibility, reconciliation reports, and wastage analysis integrated with procurement and ERP systems.",
    },
    {
      title: "Plant, Equipment & Hire Management",
      desc: "Equipment register, log sheet capture, utilisation and idle-hour analysis, hire cost tracking, preventive maintenance scheduling, and inter-site transfer workflows for owned and hired plant.",
    },
    {
      title: "Site Safety & Permit-to-Work System",
      desc: "Digital permit-to-work issue and closure, toolbox talk records, safety observation rounds, incident and near-miss reporting, and workforce induction tracking across all active project sites.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "Redis",
    "REST API", "GraphQL", "WebSockets",
    "React Native (Offline Site Apps)",
    "Primavera P6 / MS Project Integration",
    "SAP / Tally / Zoho Books Integration",
    "AWS", "Azure", "Docker", "Kubernetes",
    "Mapbox / Leaflet (Site & Asset Mapping)",
    "IFC / BIM Data Integration",
    "Recharts / D3.js (S-Curves & Dashboards)",
  ],
  clients: [
    "Civil and infrastructure contractors",
    "Real estate and township developers",
    "MEP and specialist subcontractors",
    "Industrial and plant construction contractors",
    "Roads, bridges, and highway project companies",
    "Project management consultancies (PMC)",
    "Construction equipment and plant hire companies",
  ],
  whyStacklyn: [
    { title: "We Speak Construction, Not Generic SaaS", desc: "BOQ, RA bills, measurement books, ITPs, NCRs, retention, and variation orders are the vocabulary we design around — not an afterthought bolted onto a generic project tool." },
    { title: "Offline-First Site Apps", desc: "Basements, tunnels, and remote alignments have no signal. Our site apps capture data offline and sync automatically when connectivity returns, with conflict-safe merging." },
    { title: "Integrates With What You Already Run", desc: "We connect to Primavera P6, MS Project, SAP, Tally, and existing ERP investments rather than asking you to rip out working systems." },
    { title: "Built for Multi-Project, Multi-Entity Groups", desc: "Role-based access by project, entity, and region, with consolidated group-level reporting for management and board review." },
    { title: "Photo & Evidence-Led Workflows", desc: "Every progress claim, snag, and inspection carries timestamped, geotagged photo evidence — the difference between a claim that is paid and one that is disputed." },
    { title: "Rapid Pilot, Then Scale", desc: "We start with one live project as a pilot in 8-12 weeks, prove value against real site data, then roll out across the portfolio." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom construction management software?",
      a: "Yes. Stacklyn builds custom construction management software for contractors, developers, and infrastructure companies — including project controls dashboards, daily progress reporting apps, BOQ and subcontractor billing systems, QA/QC and snagging platforms, and material and plant management software.",
    },
    {
      q: "Can Stacklyn integrate construction software with Primavera P6 or MS Project?",
      a: "Yes. We integrate with Primavera P6 and Microsoft Project through XER/XML exchange, database integration, and available APIs, so planned schedule data flows into your execution dashboards and actual progress captured at site flows back for schedule updates.",
    },
    {
      q: "Can site engineers use the software without internet connectivity?",
      a: "Yes. We build offline-first mobile apps using React Native with local storage and background sync. Site engineers can record progress, snags, checklists, and measurements in basements, tunnels, or remote sites, and the data syncs automatically once connectivity is restored.",
    },
    {
      q: "Can Stacklyn build a digital measurement book and RA bill system?",
      a: "Yes. We build digital measurement books with BOQ-linked item measurement, work-done certification workflows, multi-level approvals, deduction and retention handling, and automated RA bill generation in printable formats matching your contract requirements.",
    },
    {
      q: "Does Stacklyn build snagging and QA/QC apps for construction handover?",
      a: "Yes. We build QA/QC platforms with configurable inspection and test plans, digital checklists, photo-evidenced snag capture pinned to drawings or floor plans, NCR and corrective action workflows, and automated handover dossier generation.",
    },
    {
      q: "Can the software handle multiple projects and multiple companies in a group?",
      a: "Yes. Our construction platforms are built multi-tenant and multi-project from the start, with role-based access by project, entity, and region, plus consolidated group-level dashboards for management and board reporting.",
    },
    {
      q: "How long does it take to build construction software?",
      a: "A focused module such as digital DPR, snagging, or measurement books takes 8-14 weeks. A full construction project controls platform covering progress, billing, quality, materials, and plant typically takes 5-9 months depending on integrations and scope.",
    },
    {
      q: "How much does custom construction software development cost?",
      a: "Focused construction modules start from ₹5-10 lakh. Integrated project controls platforms with ERP and scheduling integrations, offline mobile apps, and multi-project support typically range from ₹20-70 lakh. We provide a fixed scoped estimate after discovery.",
    },
    {
      q: "Is custom software better than off-the-shelf construction ERP?",
      a: "Off-the-shelf construction ERP suits standard back-office processes. Custom software wins at the execution layer, where every contractor has a different BOQ structure, certification workflow, and reporting format. Most of our clients keep their ERP for finance and use custom software for site execution, connected by integration.",
    },
    {
      q: "How do I start a construction software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with a description of your requirements. We schedule a free technical discovery call, walk through your current site workflows, and deliver a detailed proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "EPC & Engineering Software", href: "/industries/epc-engineering-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
    { name: "Manufacturing Software", href: "/industries/manufacturing-software" },
    { name: "Facility Management Software", href: "/industries/facility-management-software" },
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
      "@id": `${BASE_URL}/industries/construction-software#service`,
      "name": "Construction Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom software development for construction companies: project controls platforms, digital daily progress reporting, BOQ and subcontractor billing, QA/QC and snagging apps, material and plant management.",
      "areaServed": ["IN", "AE", "SA", "QA", "OM", "GB", "US", "AU"],
      "serviceType": "Custom Software Development for Construction Industry",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Construction Software", "item": `${BASE_URL}/industries/construction-software` },
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

export const Route = createFileRoute("/industries/construction-software")({
  head: () => ({
    meta: [
      { title: "Construction Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom construction software: project controls, digital DPR, BOQ and subcontractor billing, QA/QC and snagging apps, material and plant management. Kerala, India. Serving contractors globally.",
      },
      {
        name: "keywords",
        content:
          "construction software development India, construction management software company, digital daily progress report app, BOQ billing software, subcontractor billing system, QA QC snagging software construction, construction project controls platform, Primavera P6 integration software, construction ERP development India, site progress tracking software",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/construction-software` },
      { property: "og:title", content: "Construction Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom construction software: project controls, digital progress reporting, BOQ billing, QA/QC and snagging, material and plant management. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Construction Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "Project controls, digital DPR, BOQ billing, QA/QC and snagging apps for contractors. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/construction-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
