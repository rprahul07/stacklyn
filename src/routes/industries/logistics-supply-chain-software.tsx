import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Logistics & Supply Chain",
  slug: "logistics-supply-chain-software",
  headline: "Custom Logistics & Supply Chain Software Development",
  tagline: "TMS · WMS · Fleet Tracking · Freight Forwarding · Last-Mile Delivery",
  intro:
    "Stacklyn builds custom logistics and supply chain software for 3PL providers, freight forwarders, transporters, and distribution-heavy enterprises. We deliver transport management systems (TMS), warehouse management systems (WMS), live fleet and consignment tracking, freight documentation platforms, and last-mile delivery apps with driver and customer visibility built in.",
  industryContext:
    "Logistics margins are decided by utilisation, dwell time, and exception handling — all of which depend on knowing where things are right now. Most operators run a patchwork: an accounting package, a GPS vendor portal, spreadsheets for trip sheets, and email for customer updates. Data never joins up, so nobody can answer basic questions like true cost per trip, detention hours by customer, or on-time delivery by lane. Custom TMS and WMS platforms unify booking, execution, tracking, and billing so that operations and finance finally read from the same source.",
  painPoints: [
    { title: "No Single View of Consignments", desc: "Shipment status spread across GPS portals, driver phone calls, and email chains, so customer service cannot answer where the load is." },
    { title: "Manual Trip Sheets & Billing", desc: "Trip sheets, fuel slips, and freight bills reconciled by hand, delaying invoicing and hiding leakage in detention, halting, and toll costs." },
    { title: "Poor Warehouse Accuracy", desc: "Bin-level stock inaccuracy, mis-picks, and manual stock counts causing dispatch errors and customer claims." },
    { title: "Fragmented Fleet Data", desc: "GPS, fuel, tyre, and maintenance data in separate vendor systems, making true cost per kilometre impossible to calculate." },
    { title: "Customer Visibility Gaps", desc: "Clients demanding portals, ETAs, and proof of delivery that the operator can only supply by manual email, losing tenders to better-instrumented competitors." },
    { title: "Compliance & Documentation Load", desc: "E-way bills, LR/GC notes, customs paperwork, and POD archives handled manually across branches with no audit trail." },
  ],
  solutions: [
    {
      title: "Transport Management System (TMS)",
      desc: "End-to-end booking, indent, vehicle allocation, trip execution, and freight billing with lane-wise rate masters, detention rules, and automated invoice generation for contract and spot movements.",
    },
    {
      title: "Warehouse Management System (WMS)",
      desc: "Barcode and RFID-driven inbound, putaway, bin management, picking strategies, packing, and dispatch with cycle counting, batch and expiry control, and 3PL multi-client billing.",
    },
    {
      title: "Live Fleet & Consignment Tracking",
      desc: "Unified tracking layer aggregating GPS providers, SIM tracking, and driver app pings into one live map with geofence events, ETA prediction, halt detection, and exception alerts.",
    },
    {
      title: "Driver & Last-Mile Delivery App",
      desc: "Mobile app for trip acceptance, digital LR, navigation handoff, POD capture with photo and signature, cash-on-delivery reconciliation, and offline operation in low-coverage corridors.",
    },
    {
      title: "Customer Portal & Shipment Visibility",
      desc: "Branded self-service portal for booking, live tracking, document download, POD retrieval, SLA dashboards, and automated status notifications by email, SMS, and WhatsApp.",
    },
    {
      title: "Freight Forwarding & Customs Documentation",
      desc: "Job file management for air, sea, and land freight with house and master documentation, container tracking, milestone timelines, and customs and clearance document workflows.",
    },
    {
      title: "Fleet Maintenance & Cost Control",
      desc: "Vehicle master, preventive maintenance schedules, tyre and battery lifecycle, fuel efficiency analytics, and true cost per kilometre by vehicle, route, and driver.",
    },
    {
      title: "Supply Chain Control Tower & Analytics",
      desc: "Network-level dashboards for on-time performance, dwell and detention analysis, lane profitability, capacity utilisation, and demand forecasting for planning teams.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "PostGIS", "MongoDB", "Redis",
    "React Native (Driver & Warehouse Apps)",
    "Mapbox / Google Maps / OSRM Routing",
    "GPS Telematics API Integration",
    "Barcode & RFID Scanner Integration",
    "REST API", "GraphQL", "WebSockets",
    "Kafka / Queue-Based Event Pipelines",
    "E-Way Bill & GST API Integration",
    "SAP / Oracle / Tally Integration",
    "AWS", "Azure", "Docker", "Kubernetes",
  ],
  clients: [
    "3PL and contract logistics providers",
    "Freight forwarders and customs brokers",
    "Fleet owners and road transport companies",
    "Distribution and FMCG supply chain operators",
    "Cold chain and pharma logistics companies",
    "Port, CFS, and container yard operators",
    "E-commerce and last-mile delivery businesses",
  ],
  whyStacklyn: [
    { title: "Operations-First Design", desc: "We model the actual movement — indent, allocation, loading, in-transit exception, unloading, POD, billing — instead of a generic order table with a status column." },
    { title: "Telematics Vendor Independence", desc: "We aggregate multiple GPS and telematics vendors behind one tracking API, so changing a hardware supplier does not mean rebuilding your platform." },
    { title: "Low-Connectivity Field Apps", desc: "Driver and warehouse apps work offline across highway dead zones and metal-clad warehouses, syncing reliably once signal returns." },
    { title: "Billing Logic That Matches Reality", desc: "Detention, halting, multi-point delivery, fuel escalation, and slab-based lane rates are configurable — the areas where generic TMS products usually break." },
    { title: "Customer-Facing Visibility as a Tender Asset", desc: "A branded customer portal with live tracking and SLA reporting is often what wins the contract. We build it as a first-class part of the platform." },
    { title: "Scales From One Branch to a Network", desc: "Multi-branch, multi-entity, and multi-client 3PL structures with consolidated reporting are part of the architecture from day one." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom transport management systems (TMS)?",
      a: "Yes. Stacklyn builds custom TMS platforms covering booking and indent management, vehicle allocation, trip execution, live tracking, lane-wise rate masters, detention and halting rules, and automated freight billing for both contract and spot movements.",
    },
    {
      q: "Can Stacklyn build a warehouse management system (WMS)?",
      a: "Yes. We build barcode and RFID-driven WMS platforms with inbound receipt, putaway, bin management, picking strategies, packing, dispatch, cycle counting, batch and expiry control, and multi-client billing for 3PL warehouses.",
    },
    {
      q: "Can you integrate GPS tracking from our existing telematics vendor?",
      a: "Yes. We aggregate data from GPS and telematics providers, SIM-based tracking, and driver mobile apps into one unified tracking layer with geofencing, ETA prediction, halt detection, and exception alerts — so you can change hardware vendors without rebuilding the platform.",
    },
    {
      q: "Do you build driver apps with proof of delivery capture?",
      a: "Yes. Our driver apps support trip acceptance, digital LR, navigation handoff, photo and signature-based POD, cash-on-delivery reconciliation, and full offline operation for highway stretches with poor connectivity.",
    },
    {
      q: "Can Stacklyn build a customer tracking portal for our logistics clients?",
      a: "Yes. We build branded customer portals with self-service booking, live shipment tracking, document and POD download, SLA and on-time performance dashboards, and automated notifications over email, SMS, and WhatsApp.",
    },
    {
      q: "Does Stacklyn build freight forwarding software for air and sea freight?",
      a: "Yes. We build freight forwarding platforms with job file management, house and master documentation, container and milestone tracking, customs and clearance document workflows, and profitability analysis per job.",
    },
    {
      q: "Can the system generate e-way bills and GST-compliant invoices?",
      a: "Yes. We integrate with e-way bill and GST APIs so that LR generation, e-way bill creation, and invoicing happen in one flow, with document archives and audit trails maintained per branch and per consignment.",
    },
    {
      q: "How long does it take to build logistics software?",
      a: "A focused module such as a driver POD app, tracking layer, or customer portal takes 8-14 weeks. A full TMS or WMS with billing, integrations, and mobile apps typically takes 5-9 months, delivered in phases so early modules go live while later ones are built.",
    },
    {
      q: "How much does custom logistics software development cost?",
      a: "Focused logistics modules start from $6,000-14,000. Full TMS or WMS platforms with driver apps, telematics integration, customer portals, and billing engines typically range from $25,000-95,000 depending on scope and network size.",
    },
    {
      q: "How do I start a logistics software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your operation profile — fleet size, warehouse count, or shipment volumes. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Manufacturing Software", href: "/industries/manufacturing-software" },
    { name: "Marine & Shipping Software", href: "/industries/marine-shipping-software" },
    { name: "Mining Software", href: "/industries/mining-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "MVP Development", href: "/services/mvp-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/logistics-supply-chain-software#service`,
      "name": "Logistics & Supply Chain Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom logistics and supply chain software development: transport management systems, warehouse management systems, live fleet and consignment tracking, driver and POD apps, customer visibility portals, and freight forwarding platforms.",
      "areaServed": ["IN", "AE", "SA", "SG", "GB", "US", "AU", "QA"],
      "serviceType": "Custom Software Development for Logistics and Supply Chain",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Logistics & Supply Chain Software", "item": `${BASE_URL}/industries/logistics-supply-chain-software` },
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

export const Route = createFileRoute("/industries/logistics-supply-chain-software")({
  head: () => ({
    meta: [
      { title: "Logistics & Supply Chain Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom logistics software: TMS, WMS, live fleet and consignment tracking, driver POD apps, customer visibility portals, and freight forwarding platforms. Kerala, India. Serving 3PL and transport MNCs.",
      },
      {
        name: "keywords",
        content:
          "logistics software development India, custom TMS development company, warehouse management system development, fleet tracking software India, freight forwarding software development, last mile delivery app development, 3PL software company, supply chain software development India, e-way bill integration software, driver POD app development",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/logistics-supply-chain-software` },
      { property: "og:title", content: "Logistics & Supply Chain Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom TMS, WMS, fleet tracking, driver apps, and customer visibility portals for logistics operators. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Logistics & Supply Chain Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "TMS, WMS, live tracking, driver POD apps, and customer portals for 3PL and transport companies. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/logistics-supply-chain-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
