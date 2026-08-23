import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Mining",
  slug: "mining-software",
  headline: "Custom Software Development for Mining Companies",
  tagline: "Surface Mining · Underground Mining · Mine Operations · Fleet Management · Safety Compliance",
  intro:
    "Stacklyn builds enterprise software for mining companies, from junior explorers to multinational mining conglomerates. We deliver mine operations platforms, fleet and equipment management systems, HSE compliance tools, environmental monitoring dashboards, and workforce management software tailored to the unique demands of open-pit, underground, and bulk materials mining operations.",
  industryContext:
    "Mining is a capital-intensive, safety-critical industry operating under strict regulatory oversight globally — from MSHA in the USA to DGMS in India, HSE in the UK, and SIMTARS in Australia. Mines generate enormous volumes of operational data — blast patterns, haul cycle times, ore grade data, equipment health metrics — that are locked in siloed systems. Modern mining MNCs require integrated digital platforms that bring this data together for operational intelligence, safety compliance, and cost optimization.",
  painPoints: [
    { title: "Fragmented Operational Data", desc: "Production data, equipment telematics, and blast data trapped in separate vendor systems with no unified view for operations managers." },
    { title: "Manual Safety Compliance", desc: "Paper-based JSA, HARC reports, and safety audits creating compliance gaps and slow incident response in high-risk mining environments." },
    { title: "Fleet & Equipment Downtime", desc: "Unplanned equipment failures in haul trucks, excavators, and drills causing production losses worth millions daily." },
    { title: "Workforce Management at Scale", desc: "Tracking thousands of contract and direct workforce employees across multiple mine sites, shifts, zones, and competency requirements." },
    { title: "Environmental Monitoring", desc: "Manual environmental data collection for dust, noise, water, and tailings monitoring that fails regulatory reporting requirements." },
    { title: "Supply Chain Inefficiency", desc: "Manual procurement of explosives, consumables, and critical spare parts creating delivery delays and stock-outs in remote mine locations." },
  ],
  solutions: [
    {
      title: "Mine Operations Control Centre Platform",
      desc: "Real-time mine operations dashboard integrating fleet telematics (Caterpillar MineStar, Modular, Wenco), blast data, ore grade tracking, and shift production KPIs. Command-and-control visibility for mine controllers and management.",
    },
    {
      title: "Fleet & Equipment Management System",
      desc: "Custom fleet dispatch and maintenance system integrating GPS telematics, haul cycle analysis, fuel consumption monitoring, CMMS work orders, and predictive maintenance alerts for haul trucks, loaders, and drilling equipment.",
    },
    {
      title: "Mining HSE & Safety Management Platform",
      desc: "Digital safety platform for JSA/HARC (Job Safety Analysis, Hazard Identification and Risk Control), incident reporting, MSHA/DGMS compliance, near-miss tracking, safety observation rounds, and corrective action management.",
    },
    {
      title: "Workforce & Contractor Management",
      desc: "Site access control, induction management, contractor qualification tracking, fatigue monitoring compliance, shift scheduling, and workforce attendance for multi-contractor mine sites.",
    },
    {
      title: "Environmental Monitoring Dashboard",
      desc: "Real-time environmental monitoring platform aggregating dust (PM10/PM2.5), noise, vibration, water quality, and tailings dam instrumentation data. Automated regulatory report generation for environmental compliance.",
    },
    {
      title: "Ore Grade & Geological Data Platform",
      desc: "Custom platforms for drill and blast data management, ore grade reconciliation, block model integration, and geological data visualization. Bridges the gap between desktop geology software and operational systems.",
    },
    {
      title: "Mine Supply Chain & Procurement Portal",
      desc: "Custom procurement and inventory management for mining consumables, explosives, fuel, parts, and reagents. Integrates with SAP/Oracle and supports remote mine site logistics workflows.",
    },
    {
      title: "Tailings & Waste Management System",
      desc: "Digital platform for tailings storage facility (TSF) monitoring, dam safety inspections, storage volume calculations, and MAC/ICMM conformance reporting — critical for environmental risk management.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "TimescaleDB", "PostGIS",
    "REST API", "GraphQL", "WebSockets",
    "Fleet Telematics APIs (MineStar, Wenco, Modular)",
    "IoT / MQTT / OPC-UA",
    "AWS", "Azure", "Docker", "Kubernetes",
    "Redis", "InfluxDB",
    "Mapbox / Leaflet (Spatial Visualization)",
    "D3.js / Recharts (Production Charts)",
    "React Native (Site Mobile Apps)",
  ],
  clients: [
    "Open-pit and underground coal mining companies",
    "Iron ore, gold, copper, and bauxite mining operators",
    "Mining EPC and engineering consultancies",
    "Mining equipment OEMs and service providers",
    "Junior mining explorers and developers",
    "Bulk materials terminal operators",
    "Mineral processing and beneficiation plants",
  ],
  whyStacklyn: [
    { title: "Mining-Specific Domain Knowledge", desc: "We understand mine production cycles, blast-and-shoot operations, haul truck dispatching, ore grade reconciliation, and mining regulatory frameworks — not generic manufacturing concepts." },
    { title: "Fleet Telematics Integration", desc: "We integrate with major fleet management systems (Caterpillar MineStar, Wenco, Modular Mining) and GPS telematics providers used across mining operations globally." },
    { title: "Remote & Offline-First Design", desc: "Mine sites in remote locations have limited connectivity. We build offline-capable mobile apps and bandwidth-efficient systems designed for the realities of remote mine site operations." },
    { title: "Regulatory Compliance Built In", desc: "Mining platforms built by Stacklyn have audit trails, MSHA/DGMS/HSE reporting formats, and compliance dashboards built into the core architecture." },
    { title: "Spatial Data Capability", desc: "Mining involves geospatial data — pit boundaries, stockpile locations, blast designs, infrastructure maps. We build platforms with embedded GIS visualization using PostGIS, Mapbox, and Leaflet." },
    { title: "Enterprise Security & Multi-Site", desc: "Mining MNCs operate multiple sites globally. We build multi-tenant, multi-site platforms with role-based access, site isolation, and centralized management across all operations." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build software for mining companies?",
      a: "Yes. Stacklyn builds custom enterprise software specifically for mining companies — from junior miners to multinational mining conglomerates. We build mine operations platforms, fleet management systems, HSE compliance tools, environmental monitoring dashboards, and workforce management software.",
    },
    {
      q: "Can Stacklyn integrate with mining fleet management systems like MineStar or Wenco?",
      a: "Yes. We integrate custom dashboards and analytics platforms with fleet management systems including Caterpillar MineStar, Modular Mining (Komatsu), and Wenco via available APIs, data exports, and direct database integration.",
    },
    {
      q: "What HSE software can Stacklyn build for mining?",
      a: "We build JSA and HARC digital tools, incident reporting systems (MSHA/DGMS-compliant), near-miss tracking, safety observation platforms, corrective action management, and digital audit systems. These replace paper-based safety processes that create compliance and liability risks.",
    },
    {
      q: "Can Stacklyn build workforce management software for large mining operations?",
      a: "Yes. Mining workforce management is a core capability. We build site access systems, contractor induction tracking, competency and certification management, fatigue management compliance, shift scheduling, and multi-site workforce reporting.",
    },
    {
      q: "Can Stacklyn build environmental monitoring software for mines?",
      a: "Yes. We build custom environmental monitoring dashboards that aggregate dust, noise, vibration, water quality, and tailings dam sensor data. We also automate regulatory environmental reporting for EPA, DGMS, and other regulatory bodies.",
    },
    {
      q: "Does Stacklyn work with mining companies globally?",
      a: "Yes. We serve mining clients in Australia, India, UAE, South Africa, and Southeast Asia. We have built software aligned with MSHA (USA), DGMS (India), HSE (UK/Australia), and SIMTARS (Queensland) regulatory frameworks.",
    },
    {
      q: "How long does it take to build mining software?",
      a: "A focused module (HSE system, workforce tracking, fleet dashboard) takes 8–14 weeks. A full integrated mine operations platform takes 5–10 months depending on integrations, data sources, and scope. We provide detailed timelines after discovery.",
    },
    {
      q: "How much does custom mining software development cost?",
      a: "Focused mining software modules start from ₹5–10 lakh. Integrated operations platforms with fleet telematics, GIS visualization, and multi-site support range from ₹20–80 lakh. Contact us for a scoped estimate.",
    },
    {
      q: "Can Stacklyn build GIS and spatial mapping features for mine operations?",
      a: "Yes. We build spatial visualization features using PostGIS (geospatial PostgreSQL), Mapbox, and Leaflet. Use cases include pit boundary mapping, haul road network visualization, stockpile location tracking, and blast design overlays.",
    },
    {
      q: "How do I start a software project with Stacklyn for my mining company?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with a description of your mining software requirements. We'll schedule a free technical discovery call and deliver a detailed proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
    { name: "EPC & Engineering Software", href: "/industries/epc-engineering-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
    { name: "AI Application Development", href: "/services/ai-development" },
    { name: "Backend Development", href: "/services/backend-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/mining-software#service`,
      "name": "Mining Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Stacklyn",
        "url": BASE_URL,
      },
      "description":
        "Custom software development for mining companies: mine operations platforms, fleet management, HSE compliance, environmental monitoring, and workforce management for open-pit and underground mining.",
      "areaServed": ["AU", "IN", "ZA", "AE", "GB", "US"],
      "serviceType": "Custom Software Development for Mining Industry",
    },
    {
      "@type": "FAQPage",
      "mainEntity": data.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ],
};

export const Route = createFileRoute("/industries/mining-software")({
  head: () => ({
    meta: [
      { title: "Mining Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom software for mining companies: mine operations platforms, fleet management, HSE compliance tools, environmental monitoring, and workforce management. Kerala, India. Serving global mining MNCs.",
      },
      {
        name: "keywords",
        content:
          "mining software development India, mine operations software, fleet management software mining, HSE software mining company, environmental monitoring mining, mining workforce management system, MineStar integration, mining digital transformation, underground mining software, open pit mining software India",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/mining-software` },
      { property: "og:title", content: "Mining Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom software for mining companies: operations platforms, fleet management, HSE compliance, environmental monitoring, workforce management. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mining Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content:
          "Mine operations platforms, fleet management, HSE systems, environmental monitoring for mining MNCs. From Kerala, India.",
      },
    ],
    links: [
      { rel: "canonical", href: `${BASE_URL}/industries/mining-software` },
    ],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
