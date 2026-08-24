import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Field Service",
  slug: "field-service-management-software",
  headline: "Custom Field Service Management (FSM) Software Development",
  tagline: "Job Scheduling · Technician Apps · AMC Contracts · Spare Parts · Service Billing",
  intro:
    "Stacklyn builds custom field service management software for equipment OEMs, service contractors, and after-sales organisations. We deliver job scheduling and dispatch systems, offline technician mobile apps, AMC and warranty contract management, spare parts and service inventory tracking, customer service portals, and profitability dashboards for distributed service operations.",
  industryContext:
    "After-sales service is where equipment businesses either build annuity revenue or quietly leak margin. The economics turn on a handful of numbers: first-time fix rate, technician utilisation, average response time, AMC renewal rate, and parts consumed per call. Almost none of those can be measured when jobs are assigned over phone calls, service reports are handwritten carbon copies, and AMC renewals live in a sales manager's calendar reminders. Custom FSM software instruments the whole cycle — from customer complaint to signed service report to invoice — and makes each of those numbers visible per technician, region, and contract.",
  painPoints: [
    { title: "Phone-Based Dispatch", desc: "Jobs assigned by call with no view of technician location, skill match, or current workload, producing avoidable travel and missed SLAs." },
    { title: "Handwritten Service Reports", desc: "Carbon-copy job sheets that arrive at the office days later, delaying invoicing and losing the data needed for failure analysis." },
    { title: "AMC Renewals Slipping", desc: "Annual maintenance contracts expiring unnoticed, with renewals chased reactively and revenue lost to competitors." },
    { title: "Low First-Time Fix Rates", desc: "Technicians arriving without the right part or equipment history, forcing repeat visits that destroy service profitability." },
    { title: "Spare Parts Blind Spots", desc: "Van stock, branch stock, and consumption per job untracked, causing both stock-outs and slow-moving inventory buildup." },
    { title: "No Service Profitability View", desc: "Cost of labour, travel, and parts per job never compared against contract or billing value, so loss-making contracts renew unchallenged." },
  ],
  solutions: [
    {
      title: "Job Scheduling & Dispatch Console",
      desc: "Drag-and-drop dispatch board with skill-based matching, geography-aware assignment, SLA countdowns, technician availability, and automatic escalation for jobs approaching breach.",
    },
    {
      title: "Offline Technician Mobile App",
      desc: "Job acceptance, equipment history lookup, guided checklists, parts consumption, photo capture, customer signature, and service report generation — all working fully offline at customer premises.",
    },
    {
      title: "AMC, Warranty & Contract Management",
      desc: "Contract master with covered equipment, visit entitlements, PPM schedules, warranty validation, renewal pipeline alerts, and automated contract profitability reporting.",
    },
    {
      title: "Equipment & Installed Base Registry",
      desc: "Serial-number-level installed base with QR tagging, location, warranty status, complete service history, and failure trend analysis per model for engineering feedback.",
    },
    {
      title: "Spare Parts & Van Stock Management",
      desc: "Multi-location inventory across branch, warehouse, and technician vans with consumption per job, replenishment triggers, part reservation for scheduled jobs, and reconciliation workflows.",
    },
    {
      title: "Customer Service Portal & Notifications",
      desc: "Self-service complaint logging, live job status with technician ETA, service history, AMC visibility, quotation approval, and automated notifications by email, SMS, and WhatsApp.",
    },
    {
      title: "Service Billing & Quotation Engine",
      desc: "Automated invoicing from completed jobs with labour, travel, and parts rules, AMC versus chargeable classification, quotation workflows for repairs, and accounting system integration.",
    },
    {
      title: "Service Analytics & SLA Dashboards",
      desc: "First-time fix rate, mean response and resolution time, technician utilisation and productivity, SLA compliance by contract, parts consumption trends, and per-job profitability.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "Redis",
    "React Native (Offline Technician Apps)",
    "Mapbox / Google Maps (Routing & Geo-Assignment)",
    "QR / Barcode Equipment Tagging",
    "WhatsApp Business / SMS / Email APIs",
    "REST API", "GraphQL", "WebSockets",
    "Tally / Zoho / SAP Integration",
    "Payment Gateway Integration",
    "AWS", "Azure", "Docker", "Kubernetes",
    "Recharts / D3.js (Service KPI Dashboards)",
  ],
  clients: [
    "Equipment OEMs and after-sales divisions",
    "HVAC, elevator, and building services contractors",
    "Medical equipment service organisations",
    "IT and networking infrastructure service firms",
    "Industrial machinery service providers",
    "Solar and energy equipment O&M companies",
    "Home appliance and consumer service networks",
  ],
  whyStacklyn: [
    { title: "Built Around First-Time Fix", desc: "Equipment history, prior failures, and required parts reach the technician before the visit, because the single biggest lever in service economics is not going back twice." },
    { title: "Genuinely Offline Field Apps", desc: "Basements, plant rooms, and customer sites with no signal are the norm. Our technician apps complete the entire job flow offline and sync safely afterwards." },
    { title: "AMC Revenue Treated as an Asset", desc: "Renewal pipelines, entitlement consumption, and contract-level profitability are first-class features, not a spreadsheet the service head maintains privately." },
    { title: "Van Stock That Reconciles", desc: "Parts issued to technicians, consumed on jobs, and returned are tracked as inventory movements, so van stock stops being an unmeasured warehouse on wheels." },
    { title: "Customer-Visible Service Quality", desc: "Live job status, technician ETA, and digital service reports raise perceived service quality — often the difference at renewal time." },
    { title: "Deploys Region by Region", desc: "We roll out by branch or region so early adopters generate real data and process fixes before a national or multi-country rollout." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom field service management (FSM) software?",
      a: "Yes. Stacklyn builds custom FSM platforms covering job scheduling and dispatch, offline technician mobile apps, AMC and warranty contract management, installed base registries, spare parts and van stock tracking, customer portals, service billing, and analytics dashboards.",
    },
    {
      q: "Can technicians complete jobs without internet connectivity?",
      a: "Yes. Our technician apps are fully offline-capable. Technicians can view job details and equipment history, complete checklists, record parts consumed, capture photos, and take customer signatures with no connection, and everything syncs automatically once back in coverage.",
    },
    {
      q: "Can the system manage AMC contracts and renewals?",
      a: "Yes. We build contract management with covered equipment lists, visit entitlements, preventive maintenance schedules, warranty validation, renewal pipeline alerts ahead of expiry, and contract-level profitability reporting comparing service cost against contract value.",
    },
    {
      q: "Does the software support skill-based and location-based job assignment?",
      a: "Yes. The dispatch console supports skill matching, geography-aware assignment, technician availability and workload balancing, SLA countdown timers, and automatic escalation for jobs approaching a breach.",
    },
    {
      q: "Can Stacklyn build spare parts and van stock tracking?",
      a: "Yes. We build multi-location inventory covering warehouse, branch, and technician van stock, with parts consumption recorded per job, replenishment triggers, reservation of parts for scheduled jobs, and periodic van stock reconciliation.",
    },
    {
      q: "Can customers track their service requests online?",
      a: "Yes. We build customer portals and notification flows for self-service complaint logging, live job status with technician ETA, service history access, AMC entitlement visibility, quotation approval, and updates over email, SMS, and WhatsApp.",
    },
    {
      q: "Can the FSM system generate invoices and integrate with accounting software?",
      a: "Yes. We automate invoicing from completed jobs with configurable labour, travel, and parts rules, AMC versus chargeable classification, and integration with Tally, Zoho Books, SAP, or your existing accounting platform.",
    },
    {
      q: "What service KPIs can the platform report?",
      a: "We build dashboards for first-time fix rate, mean response and resolution time, technician utilisation and jobs per day, SLA compliance by contract and customer, parts consumption trends, AMC renewal rate, and per-job and per-contract profitability.",
    },
    {
      q: "How much does custom field service management software cost?",
      a: "A focused build with dispatch and a technician app starts from $7,000-14,000. A full FSM platform with AMC management, spare parts, customer portal, billing integration, and analytics typically ranges from $22,000-72,000 depending on technician count and integrations.",
    },
    {
      q: "How do I start a field service software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your service operation profile — technician count, job volumes, and contract types. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Facility Management Software", href: "/industries/facility-management-software" },
    { name: "Manufacturing Software", href: "/industries/manufacturing-software" },
    { name: "Renewable Energy Software", href: "/industries/renewable-energy-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "MVP Development", href: "/services/mvp-development" },
    { name: "Backend Development", href: "/services/backend-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/field-service-management-software#service`,
      "name": "Field Service Management Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom field service management software development: job scheduling and dispatch, offline technician mobile apps, AMC and warranty contract management, spare parts and van stock tracking, customer service portals, and service analytics.",
      "areaServed": ["IN", "AE", "SA", "QA", "GB", "US", "SG", "AU"],
      "serviceType": "Custom Software Development for Field Service Management",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Field Service Management Software", "item": `${BASE_URL}/industries/field-service-management-software` },
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

export const Route = createFileRoute("/industries/field-service-management-software")({
  head: () => ({
    meta: [
      { title: "Field Service Management Software Development | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom field service management software: job dispatch, offline technician apps, AMC and warranty management, spare parts tracking, customer portals, service billing. Kerala, India. Serving OEMs and service contractors.",
      },
      {
        name: "keywords",
        content:
          "field service management software development India, custom FSM software company, technician mobile app development, AMC management software, service management software development, job dispatch scheduling software, spare parts van stock software, after sales service software India, warranty management system development, service billing software",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/field-service-management-software` },
      { property: "og:title", content: "Field Service Management Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Job dispatch, offline technician apps, AMC management, spare parts tracking, customer portals, and service analytics. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Field Service Management Software | Stacklyn" },
      {
        name: "twitter:description",
        content: "Dispatch, offline technician apps, AMC contracts, spare parts, and service KPIs. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/field-service-management-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
