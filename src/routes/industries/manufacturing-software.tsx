import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Manufacturing",
  slug: "manufacturing-software",
  headline: "Custom Manufacturing Software & Industry 4.0 Development",
  tagline: "MES · OEE Dashboards · Production Tracking · Quality Control · Maintenance",
  intro:
    "Stacklyn builds custom manufacturing software for plants, process industries, and manufacturing MNCs. We deliver manufacturing execution systems (MES), real-time OEE and production dashboards, quality control and traceability platforms, maintenance and CMMS systems, and IoT-connected shop floor applications that turn machine data into decisions.",
  industryContext:
    "Manufacturers sit on more operational data than almost any other sector — PLC tags, SCADA historians, machine controllers, quality gauges, ERP transactions — and use a fraction of it. ERP tells you what was planned and what was invoiced; it rarely tells you why line 3 lost four hours yesterday. The gap between the ERP layer and the shop floor is where Industry 4.0 investments either pay back or stall. Custom MES and analytics software bridges that gap by capturing production, downtime, quality, and maintenance events at the machine and turning them into OEE, traceability, and predictive insight.",
  painPoints: [
    { title: "No Real-Time OEE Visibility", desc: "Availability, performance, and quality losses calculated in Excel a week later, long after the shift that could have acted on them." },
    { title: "Manual Production Logging", desc: "Operators recording output, rejections, and downtime reasons on paper registers that are keyed into ERP with delay and error." },
    { title: "Machine Data Locked in PLCs", desc: "PLC, SCADA, and historian data siloed by vendor with no unified plant-wide view for production and maintenance teams." },
    { title: "Weak Batch & Lot Traceability", desc: "Genealogy from raw material lot to finished goods reconstructed manually, making recalls slow and audits painful." },
    { title: "Reactive Maintenance Culture", desc: "Breakdowns driving the maintenance calendar because condition data and work order history are never analysed together." },
    { title: "Multi-Plant Reporting Chaos", desc: "Every plant reporting differently, so group management cannot compare performance or roll up numbers without manual consolidation." },
  ],
  solutions: [
    {
      title: "Manufacturing Execution System (MES)",
      desc: "Custom MES covering work order execution, operator terminals, production confirmation, rejection and rework capture, WIP tracking, and shift handover — sized for your process rather than a bloated off-the-shelf suite.",
    },
    {
      title: "Real-Time OEE & Production Dashboard",
      desc: "Live OEE calculation with availability, performance, and quality breakdown by line, machine, shift, and SKU. Andon-style plant floor displays and drill-down loss analysis for continuous improvement teams.",
    },
    {
      title: "PLC, SCADA & IoT Data Integration",
      desc: "Machine connectivity via OPC-UA, Modbus, and MQTT, with edge collection, time-series storage in TimescaleDB or InfluxDB, and normalised tag models across mixed-vendor equipment.",
    },
    {
      title: "Quality Control & Traceability Platform",
      desc: "In-process and final inspection capture, SPC charts, non-conformance and CAPA workflows, certificate of analysis generation, and full batch and lot genealogy from raw material to dispatch.",
    },
    {
      title: "Maintenance Management & CMMS",
      desc: "Preventive and condition-based maintenance scheduling, digital work orders, spare parts inventory, breakdown analysis, MTBF and MTTR reporting, and mobile job cards for technicians.",
    },
    {
      title: "Production Planning & Scheduling Tools",
      desc: "Finite-capacity scheduling boards, changeover optimisation, material availability checks against ERP stock, and what-if planning views for plant planners.",
    },
    {
      title: "Warehouse, Dispatch & Barcode Systems",
      desc: "Barcode and RFID-driven goods receipt, bin management, picking, packing, and dispatch with handheld scanner apps integrated into ERP and customer delivery schedules.",
    },
    {
      title: "AI Predictive Maintenance & Vision QC",
      desc: "Machine learning models on sensor histories to flag developing failures, and computer vision inspection for surface defects, assembly verification, and label and packaging checks.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "TimescaleDB", "InfluxDB", "Redis",
    "OPC-UA", "MQTT", "Modbus",
    "Node-RED / Edge Gateways",
    "SAP / Oracle / Dynamics Integration",
    "REST API", "GraphQL", "WebSockets",
    "Python (ML & Predictive Models)",
    "Computer Vision (OpenCV, ONNX)",
    "AWS IoT", "Azure IoT Hub", "Docker", "Kubernetes",
    "Recharts / D3.js (OEE & SPC Charts)",
  ],
  clients: [
    "Discrete and process manufacturing plants",
    "Automotive and auto component manufacturers",
    "Food, beverage, and FMCG processors",
    "Pharmaceutical and life sciences manufacturers",
    "Textile, rubber, and plastics manufacturers",
    "Steel, cement, and heavy industry plants",
    "Contract manufacturers and OEM suppliers",
  ],
  whyStacklyn: [
    { title: "Shop Floor to Boardroom in One Model", desc: "We design a single data model that serves operator terminals, supervisor dashboards, and group-level plant comparison — rather than three disconnected reporting tools." },
    { title: "Vendor-Neutral Machine Connectivity", desc: "We integrate mixed-vendor equipment through OPC-UA, Modbus, MQTT, and file or database drops, so a 20-year-old machine and a new line land in the same dataset." },
    { title: "Time-Series Engineering Done Right", desc: "High-frequency machine data needs purpose-built storage. We use TimescaleDB and InfluxDB with downsampling and retention strategies that keep dashboards fast at scale." },
    { title: "ERP-Complementary, Not ERP-Replacing", desc: "Your SAP, Oracle, or Dynamics investment stays. We build the execution and analytics layer around it and integrate cleanly at order, confirmation, and inventory boundaries." },
    { title: "Operator-First Interfaces", desc: "Shop floor terminals are used with gloves, in poor light, under time pressure. We design large-target, low-keystroke interfaces that operators actually adopt." },
    { title: "Audit-Ready by Design", desc: "Electronic records, audit trails, user attribution, and traceability are built into the core — important for pharma, food, and automotive quality audits." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom MES (manufacturing execution system) software?",
      a: "Yes. Stacklyn builds custom manufacturing execution systems covering work order execution, operator terminals, production confirmation, rejection and rework capture, WIP tracking, and shift handover — scoped to your process instead of forcing a generic off-the-shelf suite onto your plant.",
    },
    {
      q: "Can Stacklyn build a real-time OEE dashboard for our plant?",
      a: "Yes. We build live OEE platforms that calculate availability, performance, and quality by line, machine, shift, and SKU, with drill-down loss analysis, Andon plant floor displays, and automated shift and daily reports for production management.",
    },
    {
      q: "Can you connect our PLCs, SCADA systems, and machines to a web dashboard?",
      a: "Yes. We integrate machine data via OPC-UA, Modbus, and MQTT, and read from existing historians and SCADA databases. Data is collected at the edge, normalised into a common tag model, and stored in time-series databases such as TimescaleDB or InfluxDB for fast querying.",
    },
    {
      q: "Does Stacklyn build batch traceability and quality software?",
      a: "Yes. We build quality and traceability platforms with in-process and final inspection capture, SPC charts, non-conformance and CAPA workflows, certificate of analysis generation, and complete batch and lot genealogy from raw material receipt through to dispatch.",
    },
    {
      q: "Can Stacklyn build a CMMS or maintenance management system?",
      a: "Yes. We build maintenance platforms with preventive and condition-based scheduling, digital work orders, spare parts inventory, breakdown and root-cause analysis, MTBF and MTTR reporting, and mobile job cards for maintenance technicians.",
    },
    {
      q: "Do you build AI predictive maintenance for manufacturing equipment?",
      a: "Yes. Where sufficient sensor history exists, we build machine learning models that detect developing failures from vibration, temperature, current, and cycle-time signatures. We also build computer vision inspection for surface defects, assembly verification, and packaging checks.",
    },
    {
      q: "Will custom manufacturing software work alongside our SAP or Oracle ERP?",
      a: "Yes. We treat ERP as the system of record for orders, materials, and finance, and integrate at well-defined boundaries — production orders in, confirmations and consumption out. Your ERP investment stays intact while the shop floor gets software designed for its pace.",
    },
    {
      q: "Can the software support multiple plants and consolidated group reporting?",
      a: "Yes. We build multi-plant platforms with a standard data model, per-plant configuration, role-based access, and consolidated group dashboards so management can compare plant performance on identical definitions of OEE, quality, and downtime.",
    },
    {
      q: "How much does custom manufacturing software development cost?",
      a: "A focused module such as an OEE dashboard or digital quality inspection starts from $7,000-14,000. A full MES with machine connectivity, traceability, maintenance, and multi-plant rollout typically ranges from $30,000-110,000 depending on line count and integration complexity.",
    },
    {
      q: "How do I start a manufacturing software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your plant profile and the problem you want solved first. We run a free technical discovery call, assess your machine and ERP landscape, and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Mining Software", href: "/industries/mining-software" },
    { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain-software" },
    { name: "Facility Management Software", href: "/industries/facility-management-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "AI Application Development", href: "/services/ai-development" },
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/manufacturing-software#service`,
      "name": "Manufacturing Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom manufacturing software development: MES, real-time OEE dashboards, PLC and SCADA integration, quality and traceability platforms, CMMS maintenance systems, and AI predictive maintenance.",
      "areaServed": ["IN", "AE", "SA", "GB", "US", "DE", "SG", "AU"],
      "serviceType": "Custom Software Development for Manufacturing Industry",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Manufacturing Software", "item": `${BASE_URL}/industries/manufacturing-software` },
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

export const Route = createFileRoute("/industries/manufacturing-software")({
  head: () => ({
    meta: [
      { title: "Manufacturing Software Development & MES Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom manufacturing software: MES, real-time OEE dashboards, PLC and SCADA integration, quality traceability, CMMS, and AI predictive maintenance. Kerala, India. Serving manufacturing MNCs globally.",
      },
      {
        name: "keywords",
        content:
          "manufacturing software development India, custom MES development company, OEE dashboard software, Industry 4.0 software India, SCADA integration software, PLC data dashboard, batch traceability software manufacturing, CMMS software development, predictive maintenance software India, shop floor management system",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/manufacturing-software` },
      { property: "og:title", content: "Manufacturing Software & MES Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom MES, OEE dashboards, machine connectivity, traceability, and predictive maintenance for manufacturing plants. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Manufacturing Software & MES Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "MES, OEE dashboards, OPC-UA machine connectivity, traceability, and CMMS for plants. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/manufacturing-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
