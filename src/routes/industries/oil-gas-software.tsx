import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Oil & Gas",
  slug: "oil-gas-software",
  headline: "Custom Software Development for Oil & Gas Companies",
  tagline: "Upstream · Midstream · Downstream · Digital Oilfield · SCADA Integration",
  intro:
    "Stacklyn builds enterprise-grade software for oil & gas operators, EPC contractors, and energy MNCs. From digital oilfield dashboards and SCADA integration platforms to workforce management and HSE compliance systems — we deliver precision-engineered software for one of the world's most demanding industries.",
  industryContext:
    "The oil & gas sector operates in extreme environments with complex logistics, strict regulatory frameworks (OSHA, BSEE, PHMSA), and multi-site global operations spanning onshore, offshore, and subsea. Digital transformation in upstream, midstream, and downstream operations is no longer optional — oil majors and independent operators alike are investing in custom platforms that replace legacy systems, reduce operational downtime, and bring real-time intelligence to field operations.",
  painPoints: [
    { title: "Legacy System Overload", desc: "Outdated SCADA and ERP systems that cannot integrate with modern data pipelines or cloud infrastructure." },
    { title: "Disconnected Field Operations", desc: "Onshore and offshore teams operating in data silos with no real-time visibility into equipment status, production data, or incident reports." },
    { title: "HSE Compliance Complexity", desc: "Manual, paper-based safety audits and incident tracking that fail regulatory inspections and create liability exposure." },
    { title: "Workforce Logistics", desc: "Managing crew rotations, competency tracking, certifications, and mobilization for thousands of field workers across global sites." },
    { title: "Production Data Fragmentation", desc: "Production data spread across historian databases, spreadsheets, and vendor-specific tools with no unified analytics layer." },
    { title: "Procurement & Supply Chain Gaps", desc: "Manual procurement workflows for critical well equipment, parts, and consumables causing delays and cost overruns." },
  ],
  solutions: [
    {
      title: "Digital Oilfield Operations Platform",
      desc: "Real-time production monitoring dashboards integrating SCADA, PI historian, and IoT sensor data. Single pane of glass for well performance, equipment health, and field KPIs across all assets.",
    },
    {
      title: "HSE & Incident Management System",
      desc: "Digital HSE platform for permit-to-work, risk assessments, incident reporting (RIDDOR/OSHA), near-miss tracking, audit checklists, and corrective action management. Replaces paper-based safety systems.",
    },
    {
      title: "Workforce & Crew Management Software",
      desc: "End-to-end crew rotation management, offshore/onshore mobilization scheduling, competency matrix tracking, training certifications, and payroll data integration for large field workforces.",
    },
    {
      title: "Well Data & Production Analytics",
      desc: "Custom analytics platforms that aggregate data from WITSML, PI, OSIsoft, and proprietary historian systems into clean dashboards with production forecasting and anomaly detection.",
    },
    {
      title: "Asset Integrity & Maintenance (AIM) System",
      desc: "Custom CMMS integration and asset integrity platforms for corrosion monitoring, inspection scheduling, equipment lifecycle management, and predictive maintenance alerts.",
    },
    {
      title: "EPC Contractor Management Portal",
      desc: "Multi-party project portals for EPC contractors managing engineering, procurement, and construction milestones, RFIs, submittals, and vendor document control.",
    },
    {
      title: "Field Mobility Apps",
      desc: "Mobile applications for field engineers and technicians — work order management, digital checklists, offline-capable inspection forms, and real-time data sync when connectivity is restored.",
    },
    {
      title: "Regulatory & Compliance Reporting",
      desc: "Automated regulatory reporting for BSEE, EPA, PHMSA, and other regulatory bodies. Auto-generate compliance documents, track permit deadlines, and manage audit trails.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "TimescaleDB", "InfluxDB",
    "REST API", "GraphQL", "WebSockets",
    "SCADA Integration", "OPC-UA", "MQTT",
    "AWS GovCloud", "Azure",
    "Docker", "Kubernetes", "Redis",
    "Power BI Embedding", "D3.js",
    "React Native (Field Mobile Apps)",
  ],
  clients: [
    "Onshore and offshore oil & gas operators",
    "EPC contractors and project management companies",
    "Oil field services companies (OFS)",
    "Refinery and downstream processing plants",
    "LNG terminal operators",
    "Pipeline management companies",
    "Energy trading and midstream companies",
  ],
  whyStacklyn: [
    { title: "Industrial-Grade Architecture", desc: "We design software with the reliability, uptime, and security requirements of critical energy infrastructure — not typical web app standards." },
    { title: "SCADA & Historian Integration Experience", desc: "We've integrated with industrial data systems including OPC-UA, MQTT, PI Historian, and WITSML protocols used across oil & gas operations." },
    { title: "Regulatory Awareness", desc: "Our team understands HSE regulatory frameworks (OSHA, BSEE, PHMSA) and builds software with audit-ready data trails and compliance reporting built in." },
    { title: "Offshore & Remote-Capable Systems", desc: "We build offline-first mobile apps and bandwidth-optimised dashboards that work reliably on limited connectivity in remote field and offshore environments." },
    { title: "Enterprise Security", desc: "Oil & gas systems handle sensitive production, financial, and safety data. We implement end-to-end encryption, RBAC, SSO integration, and audit logging." },
    { title: "Rapid Time-to-Value", desc: "We deliver working MVP software in 8–12 weeks and iterate fast. MNCs don't wait 18 months for enterprise software — we work at field operations speed." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build software for oil & gas companies?",
      a: "Yes. Stacklyn builds custom enterprise software specifically for oil & gas operators, EPC contractors, and oilfield services companies. We build digital oilfield dashboards, HSE systems, crew management platforms, SCADA integration layers, and regulatory compliance tools.",
    },
    {
      q: "Can Stacklyn integrate with SCADA and PI Historian systems?",
      a: "Yes. We integrate custom dashboards and analytics platforms with industrial data systems using OPC-UA, MQTT, REST, and WITSML protocols. We pull data from PI Historian, OSIsoft, and SCADA systems into web-based analytics and reporting platforms.",
    },
    {
      q: "What HSE software can Stacklyn build for oil & gas?",
      a: "We build permit-to-work systems, risk assessment platforms, incident reporting tools (OSHA-compliant), near-miss tracking, corrective action management, and digital audit systems. These replace paper-based HSE processes that create compliance gaps and audit failures.",
    },
    {
      q: "Can Stacklyn build crew and workforce management software for offshore operations?",
      a: "Yes. Offshore workforce management systems are a core use case. We build crew rotation scheduling, mobilization tracking, competency matrix management, offshore certificate tracking (BOSIET, HUET, OPITO), and integration with HR/payroll systems.",
    },
    {
      q: "What is a digital oilfield platform?",
      a: "A digital oilfield platform integrates production data, well performance metrics, equipment status, and field operations data into a single real-time dashboard. It gives operations teams and management real-time visibility across all wells and assets — replacing disconnected spreadsheets and manual reporting.",
    },
    {
      q: "Does Stacklyn build mobile apps for field engineers?",
      a: "Yes. We build offline-capable mobile apps for field engineers and technicians. Use cases include digital work orders, inspection checklists, equipment readings, incident reporting, and photo documentation — all syncing to a central system when connectivity returns.",
    },
    {
      q: "How long does it take to build oil & gas software?",
      a: "A focused HSE or workforce management module takes 8–12 weeks. A full digital oilfield platform or multi-module enterprise system takes 4–9 months depending on integrations and scope. We provide detailed timelines after discovery.",
    },
    {
      q: "Can Stacklyn work with oil & gas companies based in the UAE, UK, or USA?",
      a: "Yes. Stacklyn serves oil & gas clients globally. We have successfully delivered projects for clients in the UAE, UK, USA, and Southeast Asia. We operate in UTC+5:30 (IST) and maintain regular video calls during overlapping working hours.",
    },
    {
      q: "How much does custom oil & gas software cost?",
      a: "Focused modules (HSE system, workforce scheduling) start from $6,000–12,000. Integrated digital oilfield platforms with SCADA connectivity and multi-module scope range from $25,000–72,000. Contact us for a scoped estimate based on your specific requirements.",
    },
    {
      q: "How do I start a software project with Stacklyn for my oil & gas company?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with a description of your software requirements. We'll schedule a free technical discovery call and deliver a detailed proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Mining Industry Software", href: "/industries/mining-software" },
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
      "@id": `${BASE_URL}/industries/oil-gas-software#service`,
      "name": "Oil & Gas Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Stacklyn",
        "url": BASE_URL,
      },
      "description":
        "Custom software development for oil & gas operators, EPC contractors, and energy MNCs. Digital oilfield platforms, HSE systems, crew management, SCADA integration, and regulatory compliance tools.",
      "areaServed": ["AE", "GB", "US", "SG", "IN", "AU"],
      "serviceType": "Custom Software Development for Oil & Gas Industry",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Oil & Gas Software", "item": `${BASE_URL}/industries/oil-gas-software` },
      ],
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

export const Route = createFileRoute("/industries/oil-gas-software")({
  head: () => ({
    meta: [
      { title: "Oil & Gas Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom software for oil & gas companies: digital oilfield platforms, HSE systems, crew management, SCADA integration, and regulatory compliance tools. Kerala, India. Serving UAE, UK, USA clients.",
      },
      {
        name: "keywords",
        content:
          "oil gas software development India, oil rig management software, digital oilfield platform, HSE software oil gas, SCADA integration software India, offshore crew management software, oilfield software company India, EPC software development, oil and gas digital transformation, upstream software development",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/oil-gas-software` },
      { property: "og:title", content: "Oil & Gas Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom software for oil & gas companies: digital oilfield platforms, HSE systems, SCADA integration, offshore crew management. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oil & Gas Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content:
          "Digital oilfield platforms, HSE systems, SCADA integration, crew management software for oil & gas MNCs. From Kerala, India.",
      },
    ],
    links: [
      { rel: "canonical", href: `${BASE_URL}/industries/oil-gas-software` },
    ],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
