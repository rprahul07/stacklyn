import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Marine & Shipping",
  slug: "marine-shipping-software",
  headline: "Custom Software Development for Marine, Shipping & Port Operations",
  tagline: "Fleet Operations · Crew Management · Port Calls · Planned Maintenance · Bunker & Voyage",
  intro:
    "Stacklyn builds custom marine and shipping software for ship owners, ship managers, port and terminal operators, and offshore marine contractors. We deliver fleet operations dashboards, crew management and certification systems, planned maintenance systems (PMS), voyage and bunker analytics, port call coordination platforms, and vessel inspection apps designed for low-bandwidth shipboard use.",
  industryContext:
    "Shipping runs on documentation, certification, and narrow operational windows, under regulators that do not accept excuses — IMO, class societies, flag states, and port state control. A vessel is a remote site with expensive connectivity, a rotating crew, and mandatory records that must survive audit years later. Most operators run licensed suites that fit large fleets but leave managers of 5 to 40 vessels paying for complexity they do not need while still keeping the real work in Excel. Purpose-built software closes the gap: shipboard tools that work on a satellite link, and shore dashboards that see the whole fleet.",
  painPoints: [
    { title: "Crew Certification Expiry Risk", desc: "STCW certificates, medicals, and visas tracked in spreadsheets, with expiries discovered during port state control rather than before crew change." },
    { title: "Bandwidth-Hostile Systems", desc: "Shore systems that shipboard users cannot practically operate over satellite links, forcing email attachments and manual re-keying ashore." },
    { title: "Fragmented Voyage & Bunker Data", desc: "Noon reports, bunker figures, and port costs arriving by email in inconsistent formats, making voyage profitability an after-the-fact estimate." },
    { title: "Maintenance Records Under Audit Pressure", desc: "Planned maintenance evidence scattered across vessel folders, creating a scramble before class survey or vetting inspection." },
    { title: "Port Call Coordination by Email", desc: "Agents, terminals, suppliers, and surveyors coordinated over long email chains with no shared timeline or cost visibility." },
    { title: "Inspection & Deficiency Backlogs", desc: "Internal audits, vetting observations, and deficiency close-outs tracked manually, so overdue items surface only at the next inspection." },
  ],
  solutions: [
    {
      title: "Fleet Operations Dashboard",
      desc: "Shore-side view of vessel positions, voyage status, cargo, off-hire events, and operational KPIs across the fleet, with AIS integration and exception alerts for management and operations teams.",
    },
    {
      title: "Crew Management & Certification System",
      desc: "Crew database with rank history, STCW certificates, medicals, visas, contract and relief planning, crew change logistics, and automated expiry alerts well ahead of the crew change window.",
    },
    {
      title: "Planned Maintenance System (PMS)",
      desc: "Equipment register by vessel, running-hour and calendar-based maintenance jobs, spares inventory, requisition workflow, and audit-ready maintenance history synchronised between ship and shore.",
    },
    {
      title: "Voyage, Bunker & Performance Analytics",
      desc: "Structured noon report capture, fuel consumption and speed analysis, bunker stock reconciliation, weather-adjusted performance, and voyage profit and loss per leg and per charter.",
    },
    {
      title: "Port Call & Agency Coordination Platform",
      desc: "Shared port call timeline covering ETA and ETB updates, agent appointments, service orders, disbursement account tracking, and document exchange with terminals and suppliers.",
    },
    {
      title: "Vessel Inspection & Audit App",
      desc: "Offline tablet app for internal audits, vetting preparation, safety rounds, and deficiency capture with photo evidence, corrective action assignment, and close-out tracking across the fleet.",
    },
    {
      title: "Ship-Shore Sync & Low-Bandwidth Architecture",
      desc: "Delta-based replication designed for satellite links: compressed payloads, resumable transfers, conflict resolution, and full shipboard operation with no live connection required.",
    },
    {
      title: "Terminal & Yard Operations Software",
      desc: "For port and terminal operators: gate operations, container and cargo yard tracking, equipment allocation, berth planning support, and billing integration for terminal services.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "PostGIS", "SQLite (Shipboard)", "Redis",
    "Offline-First Sync & Delta Replication",
    "AIS & Vessel Tracking API Integration",
    "React Native / Electron (Shipboard Apps)",
    "REST API", "GraphQL", "WebSockets",
    "Mapbox / Leaflet (Fleet & Route Maps)",
    "Weather & Routing Data Integration",
    "ERP & Accounting Integration",
    "AWS", "Azure", "Docker", "Kubernetes",
    "PDF & Report Generation (Class/PSC Formats)",
  ],
  clients: [
    "Ship owners and third-party ship managers",
    "Offshore marine and OSV operators",
    "Port, terminal, and stevedoring companies",
    "Shipping agencies and freight operators",
    "Crew management and manning agencies",
    "Marine engineering and survey firms",
    "Dredging and marine construction contractors",
  ],
  whyStacklyn: [
    { title: "Built for the Satellite Link", desc: "Shipboard software is designed around scarce bandwidth: local-first data, compressed delta sync, and resumable transfers instead of chatty cloud calls." },
    { title: "Certification Expiry Never Slips", desc: "Automated alerting chains for STCW, medicals, visas, and class certificates give shore teams weeks of warning, not port state control surprises." },
    { title: "Audit Evidence as a Byproduct", desc: "Maintenance, inspection, and deficiency records are captured with timestamps and photos at the point of work, so class survey and vetting preparation stops being a fire drill." },
    { title: "Right-Sized for 5 to 40 Vessel Fleets", desc: "Managers of small and mid-size fleets get exactly the modules they operate, without licensing an enterprise suite built for two hundred ships." },
    { title: "Integrates With Existing Marine Software", desc: "We connect to AIS providers, accounting systems, and existing PMS or crewing tools rather than demanding a full replacement on day one." },
    { title: "Shore and Ship Share One Model", desc: "The same data model serves the master onboard and the operations manager ashore, ending the re-keying and version conflicts that email-based workflows create." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom software for shipping and ship management companies?",
      a: "Yes. Stacklyn builds custom marine software for ship owners, ship managers, and offshore operators — including fleet operations dashboards, crew management and certification systems, planned maintenance systems, voyage and bunker analytics, and vessel inspection apps.",
    },
    {
      q: "Can shipboard software work with limited satellite connectivity?",
      a: "Yes. We design shipboard applications to be local-first: all work is done against onboard storage, and synchronisation happens through compressed delta transfers that are resumable over intermittent satellite links, so no user action depends on being online.",
    },
    {
      q: "Can Stacklyn build a crew management and certification tracking system?",
      a: "Yes. We build crew databases covering rank history, STCW certificates, medicals, visas, contracts, and relief planning, with automated expiry alert chains and crew change logistics so certification gaps are caught long before a port state control inspection.",
    },
    {
      q: "Do you build planned maintenance systems (PMS) for vessels?",
      a: "Yes. We build PMS platforms with per-vessel equipment registers, running-hour and calendar-based job scheduling, spares inventory and requisition workflows, and audit-ready maintenance history that stays synchronised between ship and shore.",
    },
    {
      q: "Can Stacklyn build voyage performance and bunker analysis tools?",
      a: "Yes. We build structured noon report capture with fuel consumption and speed analysis, bunker stock reconciliation, weather-adjusted performance evaluation, and voyage profit and loss reporting per leg and per charter party.",
    },
    {
      q: "Does Stacklyn build software for port and terminal operators?",
      a: "Yes. We build terminal and yard operations software covering gate operations, container and cargo yard tracking, equipment allocation, berth planning support, service order management, and billing integration for terminal services.",
    },
    {
      q: "Can the system integrate AIS vessel tracking?",
      a: "Yes. We integrate AIS and vessel tracking data providers into fleet dashboards with position history, ETA monitoring, port call detection, and geofence-based alerts for arrival, departure, and deviation events.",
    },
    {
      q: "Can you build inspection and deficiency tracking for vetting preparation?",
      a: "Yes. We build offline tablet apps for internal audits, safety rounds, and vetting preparation with photo-evidenced deficiency capture, corrective action assignment, due-date tracking, and fleet-wide close-out dashboards.",
    },
    {
      q: "How much does custom marine or shipping software cost?",
      a: "A focused module such as crew certification tracking or an inspection app starts from $7,000-14,000. An integrated fleet platform covering crewing, PMS, voyage analytics, and ship-shore sync typically ranges from $30,000-95,000 depending on fleet size and integrations.",
    },
    {
      q: "How do I start a marine software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your fleet or terminal profile and the workflow you want to fix first. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
    { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
    { name: "HSE & Compliance Software", href: "/industries/hse-compliance-software" },
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
      "@id": `${BASE_URL}/industries/marine-shipping-software#service`,
      "name": "Marine & Shipping Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom marine and shipping software development: fleet operations dashboards, crew management and certification systems, planned maintenance systems, voyage and bunker analytics, port call platforms, and offline vessel inspection apps.",
      "areaServed": ["IN", "AE", "SG", "GB", "NO", "GR", "QA", "SA"],
      "serviceType": "Custom Software Development for Marine and Shipping Industry",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Marine & Shipping Software", "item": `${BASE_URL}/industries/marine-shipping-software` },
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

export const Route = createFileRoute("/industries/marine-shipping-software")({
  head: () => ({
    meta: [
      { title: "Marine & Shipping Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom marine software: fleet operations dashboards, crew management and certification, planned maintenance systems, voyage and bunker analytics, port call platforms. Kerala, India. Serving shipping companies globally.",
      },
      {
        name: "keywords",
        content:
          "marine software development India, shipping software development company, crew management software development, planned maintenance system PMS software, voyage performance software, bunker analysis software, port terminal software development, vessel inspection app, ship management software India, AIS integration software",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/marine-shipping-software` },
      { property: "og:title", content: "Marine & Shipping Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Fleet operations, crew certification, planned maintenance, voyage analytics, and port call software for shipping companies. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Marine & Shipping Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "Fleet ops, crew certification, PMS, voyage analytics, and offline vessel apps. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/marine-shipping-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
