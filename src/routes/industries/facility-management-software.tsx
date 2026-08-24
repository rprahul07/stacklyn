import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Facility Management",
  slug: "facility-management-software",
  headline: "Custom Facility Management & CMMS Software Development",
  tagline: "CAFM · CMMS · Asset Register · PPM Scheduling · Helpdesk · SLA Tracking",
  intro:
    "Stacklyn builds custom facility management software for FM contractors, property owners, and enterprise real estate teams. We deliver CAFM and CMMS platforms, asset registers with QR-tagged equipment, planned preventive maintenance scheduling, technician mobile apps, tenant and helpdesk portals, and SLA and penalty tracking dashboards for multi-site portfolios.",
  industryContext:
    "Facility management is a contract business measured in SLAs, response times, and uptime — but most operators still run on job cards, WhatsApp escalations, and a monthly Excel report assembled the night before a client review. When an FM contract is audited, the operator has to prove that every PPM task was done, every reactive call met its response window, and every asset was serviced on schedule. Without a CAFM system holding timestamped evidence, penalties are argued rather than defended. Custom FM software turns that evidence trail into a byproduct of daily work.",
  painPoints: [
    { title: "Unverifiable PPM Completion", desc: "Planned preventive maintenance signed off on paper with no timestamp, location, or photo evidence to defend during client audits." },
    { title: "SLA Breaches Discovered Late", desc: "Response and resolution breaches surfacing only in the monthly report, after penalties are already contractually due." },
    { title: "Incomplete Asset Registers", desc: "Assets tracked in spreadsheets with no reliable location, warranty, service history, or lifecycle costing per equipment." },
    { title: "Helpdesk Chaos Across Sites", desc: "Complaints arriving by phone, email, and WhatsApp with no single queue, priority logic, or escalation matrix." },
    { title: "Technician Deployment Blind Spots", desc: "No visibility of which technician is where, workload balance across sites, or first-time-fix rates by trade." },
    { title: "Manual Client Reporting", desc: "Days of effort each month compiling SLA, PPM, consumption, and manpower reports per client from disconnected sources." },
  ],
  solutions: [
    {
      title: "CAFM / CMMS Platform",
      desc: "Core facility management system covering asset registers, maintenance planning, work order lifecycle, spares, vendor management, and multi-site portfolio structure with client and building hierarchies.",
    },
    {
      title: "Planned Preventive Maintenance (PPM) Scheduler",
      desc: "Frequency-based and meter-based PPM planning per asset class, auto-generated job cards, checklist templates by trade, compliance percentage tracking, and evidence-backed completion records.",
    },
    {
      title: "Technician Mobile App",
      desc: "Offline-capable app for job assignment, QR asset scanning, checklist completion, photo evidence, spares consumption, time capture, and client signature at closure.",
    },
    {
      title: "Helpdesk & Complaint Management",
      desc: "Single intake queue from portal, email, phone, and QR code with priority rules, auto-assignment by trade and location, escalation matrices, and full communication history per ticket.",
    },
    {
      title: "SLA, KPI & Penalty Dashboard",
      desc: "Contract-configured response and resolution targets with live breach risk indicators, per-client SLA dashboards, penalty exposure calculation, and automated monthly client report packs.",
    },
    {
      title: "Tenant & Client Self-Service Portal",
      desc: "Branded portal for raising requests, tracking status, approving quotations, viewing PPM compliance, downloading reports, and accessing asset documentation and warranties.",
    },
    {
      title: "Energy, Utility & Consumption Tracking",
      desc: "Meter reading capture, BMS and IoT sensor integration, consumption dashboards by building and tenant, anomaly detection, and utility cost allocation and recovery.",
    },
    {
      title: "FM Workforce, Roster & Attendance",
      desc: "Site-wise manpower deployment, shift rosters, biometric or geofenced attendance, contractual headcount compliance per client, and manpower billing reconciliation.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "Redis",
    "React Native (Technician Apps)",
    "QR / NFC Asset Tagging",
    "BMS & IoT Integration (BACnet, MQTT, Modbus)",
    "REST API", "GraphQL", "WebSockets",
    "Geofencing & Location Services",
    "SAP / Oracle / Tally Integration",
    "AWS", "Azure", "Docker", "Kubernetes",
    "Recharts / D3.js (SLA & Energy Dashboards)",
    "PDF Report Generation Pipelines",
  ],
  clients: [
    "Integrated facility management (IFM) contractors",
    "Commercial real estate and property owners",
    "Shopping malls and mixed-use developments",
    "Hospitals, campuses, and institutional facilities",
    "Airports, transit hubs, and public infrastructure",
    "Industrial plants with in-house maintenance teams",
    "Housing societies and residential portfolio managers",
  ],
  whyStacklyn: [
    { title: "Contract-Shaped SLA Engine", desc: "Every FM contract defines response and resolution differently. We make SLA rules configurable per client, per priority, and per asset class rather than hard-coding one model." },
    { title: "Evidence-First Job Closure", desc: "Timestamped, geotagged, photo-backed completion records turn client audits from an argument into a data export." },
    { title: "Works in Basements and Plant Rooms", desc: "Technician apps run fully offline, scan QR-tagged assets without signal, and sync when the technician surfaces." },
    { title: "Portfolio-Scale Architecture", desc: "Client, site, building, floor, and asset hierarchies with role-based access are built in, so one platform serves a hundred sites without forking." },
    { title: "Reporting That Ships Itself", desc: "The monthly client report pack is generated automatically from live data, ending the multi-day scramble before every review meeting." },
    { title: "IoT and BMS Ready", desc: "We integrate BMS, energy meters, and IoT sensors where they exist, so condition-based maintenance can replace blind calendar schedules over time." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom CAFM or CMMS software?",
      a: "Yes. Stacklyn builds custom CAFM and CMMS platforms with asset registers, planned preventive maintenance scheduling, work order lifecycle management, spares and vendor management, technician mobile apps, and multi-site portfolio hierarchies for FM contractors and property owners.",
    },
    {
      q: "Can the system track SLA compliance and contract penalties?",
      a: "Yes. We build SLA engines where response and resolution targets are configured per client, priority, and asset class, with live breach-risk indicators, penalty exposure calculation, and automated monthly SLA report packs per contract.",
    },
    {
      q: "Do technicians need internet connectivity to close jobs?",
      a: "No. Our technician apps are offline-first. Technicians can scan QR-tagged assets, complete checklists, capture photos and spares consumed, and record client signatures in basements and plant rooms, with automatic sync once connectivity returns.",
    },
    {
      q: "Can Stacklyn build QR-code based asset tracking for facilities?",
      a: "Yes. We build QR and NFC asset tagging with a full asset register covering location hierarchy, make and model, warranty, service history, and lifecycle cost, so scanning a tag opens the complete history and pending tasks for that equipment.",
    },
    {
      q: "Can tenants or clients raise and track service requests themselves?",
      a: "Yes. We build branded self-service portals and mobile apps where tenants and client representatives raise requests, track live status, approve quotations, view PPM compliance, and download reports and asset documentation.",
    },
    {
      q: "Can the software integrate with BMS, energy meters, or IoT sensors?",
      a: "Yes. We integrate building management systems and IoT devices over BACnet, Modbus, and MQTT to capture consumption and condition data, enabling energy dashboards, anomaly alerts, and condition-based maintenance triggers.",
    },
    {
      q: "Does the system handle FM manpower rosters and attendance?",
      a: "Yes. We build site-wise deployment planning, shift rosters, biometric or geofenced attendance, contractual headcount compliance tracking per client, and manpower billing reconciliation against the contracted deployment.",
    },
    {
      q: "Can one platform manage multiple clients, sites, and buildings?",
      a: "Yes. Client, site, building, floor, and asset hierarchies with role-based access are core to the architecture, so a single platform can serve an entire FM portfolio with per-client isolation and consolidated management dashboards.",
    },
    {
      q: "How much does custom facility management software cost?",
      a: "A focused module such as a helpdesk with technician app or a PPM scheduler starts from ₹5-10 lakh. A full CAFM platform with SLA engine, tenant portal, energy tracking, and workforce modules typically ranges from ₹18-60 lakh depending on portfolio size and integrations.",
    },
    {
      q: "How do I start a facility management software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your portfolio profile — number of sites, assets, and technicians. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
    { name: "Construction Software", href: "/industries/construction-software" },
    { name: "Manufacturing Software", href: "/industries/manufacturing-software" },
    { name: "HSE & Compliance Software", href: "/industries/hse-compliance-software" },
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
      "@id": `${BASE_URL}/industries/facility-management-software#service`,
      "name": "Facility Management Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom facility management software development: CAFM and CMMS platforms, asset registers, PPM scheduling, technician mobile apps, helpdesk and tenant portals, SLA and penalty dashboards, and energy tracking.",
      "areaServed": ["IN", "AE", "SA", "QA", "OM", "GB", "SG"],
      "serviceType": "Custom Software Development for Facility Management",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Facility Management Software", "item": `${BASE_URL}/industries/facility-management-software` },
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

export const Route = createFileRoute("/industries/facility-management-software")({
  head: () => ({
    meta: [
      { title: "Facility Management & CMMS Software Development | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom facility management software: CAFM and CMMS platforms, asset registers, PPM scheduling, technician apps, helpdesk and tenant portals, SLA dashboards. Kerala, India. Serving FM companies globally.",
      },
      {
        name: "keywords",
        content:
          "facility management software development India, custom CAFM software company, CMMS software development, PPM scheduling software, technician mobile app development, FM helpdesk software, SLA tracking software facility management, QR asset tracking software, tenant portal development, maintenance management system India",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/facility-management-software` },
      { property: "og:title", content: "Facility Management & CMMS Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom CAFM and CMMS platforms, PPM scheduling, technician apps, helpdesk, tenant portals, and SLA dashboards. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Facility Management & CMMS Software | Stacklyn" },
      {
        name: "twitter:description",
        content: "CAFM, CMMS, PPM scheduling, technician apps, and SLA dashboards for FM contractors. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/facility-management-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
