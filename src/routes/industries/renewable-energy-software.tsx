import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Renewable Energy & Utilities",
  slug: "renewable-energy-software",
  headline: "Custom Software for Renewable Energy, Solar & Utility Companies",
  tagline: "Asset Monitoring · SCADA Integration · O&M Platforms · Generation Analytics · EPC Tracking",
  intro:
    "Stacklyn builds custom software for solar and wind developers, IPPs, EPC contractors, and utility operators. We deliver plant performance monitoring platforms, SCADA and inverter data integration, O&M ticketing and preventive maintenance systems, generation and PPA reporting dashboards, and field engineer mobile apps for distributed renewable assets.",
  industryContext:
    "A renewable portfolio is a fleet of remote, revenue-generating assets whose value depends entirely on uptime and yield. Inverters, string monitors, weather stations, and turbine controllers all emit data, but each OEM ships its own portal — so a developer with plants from four vendors has four dashboards, four alarm conventions, and no portfolio view. Meanwhile O&M is coordinated on phone calls and performance ratio is calculated monthly in Excel, weeks after the underperformance happened. Custom software normalises multi-OEM data, makes losses visible while they are still recoverable, and ties every alarm to a closed O&M ticket.",
  painPoints: [
    { title: "Multi-OEM Portal Fragmentation", desc: "Separate inverter and turbine vendor portals per site with different alarm codes, no portfolio view, and no comparable KPIs." },
    { title: "Underperformance Found Too Late", desc: "Performance ratio and yield losses computed monthly in spreadsheets, long after string faults, soiling, or shading could have been corrected." },
    { title: "O&M Coordinated by Phone", desc: "Field tickets raised by call and closed verbally, leaving no evidence trail for warranty claims or O&M contract SLA reporting." },
    { title: "Manual Generation & PPA Reporting", desc: "Monthly generation, availability, and PPA invoice data compiled by hand across sites, delaying billing and disputes with offtakers." },
    { title: "Weak Warranty & Claims Evidence", desc: "Equipment failures and downtime periods poorly documented, weakening warranty and performance guarantee claims against OEMs and EPCs." },
    { title: "Project Execution Blind Spots", desc: "EPC construction progress across module mounting, stringing, and commissioning tracked in disconnected trackers per site." },
  ],
  solutions: [
    {
      title: "Portfolio Performance Monitoring Platform",
      desc: "Unified monitoring across all plants and OEMs with normalised KPIs — generation, performance ratio, availability, specific yield, and CUF — plus per-site drill-down to inverter and string level.",
    },
    {
      title: "SCADA, Inverter & Turbine Data Integration",
      desc: "Data acquisition from inverters, turbine controllers, weather stations, and energy meters over Modbus, OPC-UA, MQTT, and vendor APIs, normalised into a single time-series model.",
    },
    {
      title: "Loss Analysis & Yield Diagnostics",
      desc: "Automated loss attribution across soiling, shading, curtailment, grid outage, inverter downtime, and degradation, so recoverable losses are separated from unavoidable ones.",
    },
    {
      title: "O&M Ticketing & Preventive Maintenance",
      desc: "Alarm-to-ticket automation, work order assignment to field crews, preventive maintenance schedules per asset class, spares tracking, and SLA and response-time reporting for O&M contracts.",
    },
    {
      title: "Field Engineer Mobile App",
      desc: "Offline-capable app for site visits, string testing, thermography records, cleaning cycles, checklist completion, and photo-evidenced ticket closure at remote plants with poor connectivity.",
    },
    {
      title: "Generation, PPA & Billing Reports",
      desc: "Automated monthly generation and availability statements, PPA and open-access invoice support, deemed generation calculation, and regulator-ready report packs per site and per offtaker.",
    },
    {
      title: "EPC Project Execution Tracker",
      desc: "Construction progress tracking for module mounting, stringing, cabling, and commissioning with punch lists, QA checkpoints, and milestone dashboards across concurrent project sites.",
    },
    {
      title: "AI Anomaly Detection & Forecasting",
      desc: "Machine learning on historical generation and weather data for expected-versus-actual anomaly detection, early fault signatures, and short-term generation forecasting for scheduling.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "TimescaleDB", "InfluxDB", "Redis",
    "Modbus", "OPC-UA", "MQTT", "SunSpec",
    "Inverter & SCADA Vendor API Integration",
    "Python (Analytics & ML Models)",
    "Weather & Irradiance Data APIs",
    "React Native (Field Engineer Apps)",
    "REST API", "GraphQL", "WebSockets",
    "AWS IoT", "Azure IoT Hub", "Docker", "Kubernetes",
    "Recharts / D3.js (Generation Dashboards)",
  ],
  clients: [
    "Solar IPPs and independent power producers",
    "Wind farm developers and operators",
    "Renewable EPC and O&M contractors",
    "Rooftop and C&I solar companies",
    "Utility and distribution companies",
    "Energy trading and open-access aggregators",
    "Battery storage and hybrid plant operators",
  ],
  whyStacklyn: [
    { title: "Vendor-Neutral by Design", desc: "We normalise inverter, turbine, and SCADA data across OEMs into one model, so portfolio KPIs stay comparable no matter who supplied the equipment." },
    { title: "Time-Series at Plant Scale", desc: "Minute-level data from thousands of devices needs purpose-built storage. We use TimescaleDB and InfluxDB with downsampling and retention policies that keep dashboards responsive." },
    { title: "Losses Framed as Money", desc: "Diagnostics are expressed in recoverable kWh and revenue impact, not just alarm counts — which is what makes O&M teams and investors act on them." },
    { title: "Evidence for Warranty Claims", desc: "Downtime windows, alarm history, and field intervention records are captured with timestamps and photos, turning warranty and performance guarantee claims into documented cases." },
    { title: "Remote Site Field Apps", desc: "Plants sit far from coverage. Our field apps work fully offline for string testing, thermography, cleaning records, and ticket closure, syncing when the crew returns to signal." },
    { title: "From One Plant to a Portfolio", desc: "Multi-site, multi-SPV, and multi-client O&M structures with role-based access and per-entity reporting are built into the architecture from the start." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build solar plant monitoring software?",
      a: "Yes. Stacklyn builds custom solar and renewable monitoring platforms with portfolio-level dashboards, normalised KPIs such as performance ratio, availability, specific yield, and CUF, and drill-down to inverter and string level across multiple sites and OEMs.",
    },
    {
      q: "Can you integrate data from different inverter and SCADA vendors?",
      a: "Yes. We acquire data over Modbus, OPC-UA, MQTT, SunSpec, and vendor APIs from inverters, turbine controllers, weather stations, and energy meters, then normalise it into a single time-series model so multi-OEM portfolios can be compared on identical definitions.",
    },
    {
      q: "Can the platform show why a plant is underperforming?",
      a: "Yes. We build loss attribution analytics that separate soiling, shading, curtailment, grid outages, inverter downtime, and degradation, and express each as recoverable energy and revenue impact so O&M teams can prioritise what is worth fixing.",
    },
    {
      q: "Does Stacklyn build O&M ticketing systems for renewable assets?",
      a: "Yes. We build O&M platforms with alarm-to-ticket automation, work order assignment to field crews, preventive maintenance schedules, spares tracking, and SLA and response-time reporting suitable for third-party O&M contracts.",
    },
    {
      q: "Can field engineers use the system at remote plants without connectivity?",
      a: "Yes. Our field engineer apps are offline-first, supporting string testing records, thermography, module cleaning cycles, checklists, and photo-evidenced ticket closure, with automatic sync once the crew regains connectivity.",
    },
    {
      q: "Can the software generate PPA and generation reports automatically?",
      a: "Yes. We automate monthly generation and availability statements, PPA and open-access invoice support, deemed generation calculation, and regulator-ready report packs per site, SPV, and offtaker.",
    },
    {
      q: "Do you build software for wind farms as well as solar?",
      a: "Yes. The same architecture serves wind portfolios, with turbine controller integration, availability and capacity factor reporting, alarm analysis, and O&M workflows adapted to turbine maintenance practices.",
    },
    {
      q: "Can you add AI forecasting or anomaly detection to plant data?",
      a: "Yes. Where sufficient historical generation and weather data exists, we build expected-versus-actual anomaly detection, early fault signature identification, and short-term generation forecasting to support scheduling and deviation settlement.",
    },
    {
      q: "How much does renewable energy software development cost?",
      a: "A focused module such as a monitoring dashboard or O&M ticketing system starts from $7,000-14,000. A full portfolio platform with multi-OEM data acquisition, loss analytics, field apps, and automated reporting typically ranges from $25,000-85,000 depending on site count and integrations.",
    },
    {
      q: "How do I start a renewable energy software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your portfolio profile — capacity, site count, and equipment vendors. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
    { name: "Manufacturing Software", href: "/industries/manufacturing-software" },
    { name: "EPC & Engineering Software", href: "/industries/epc-engineering-software" },
    { name: "Facility Management Software", href: "/industries/facility-management-software" },
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
      "@id": `${BASE_URL}/industries/renewable-energy-software#service`,
      "name": "Renewable Energy Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom software development for renewable energy and utility companies: solar and wind plant monitoring, SCADA and inverter integration, loss analytics, O&M ticketing, field engineer apps, and automated generation and PPA reporting.",
      "areaServed": ["IN", "AE", "SA", "GB", "US", "AU", "SG", "ZA"],
      "serviceType": "Custom Software Development for Renewable Energy and Utilities",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Renewable Energy Software", "item": `${BASE_URL}/industries/renewable-energy-software` },
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

export const Route = createFileRoute("/industries/renewable-energy-software")({
  head: () => ({
    meta: [
      { title: "Renewable Energy & Solar Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom renewable energy software: solar and wind plant monitoring, SCADA and inverter integration, loss analytics, O&M ticketing, field apps, and PPA reporting. Kerala, India. Serving IPPs and EPCs globally.",
      },
      {
        name: "keywords",
        content:
          "renewable energy software development India, solar plant monitoring software, wind farm software development, SCADA integration solar, inverter data integration software, O&M software renewable energy, performance ratio monitoring platform, PPA reporting software, solar EPC software India, energy analytics platform development",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/renewable-energy-software` },
      { property: "og:title", content: "Renewable Energy & Solar Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Plant monitoring, multi-OEM SCADA integration, loss analytics, O&M ticketing, and PPA reporting for renewable portfolios. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Renewable Energy & Solar Software | Stacklyn" },
      {
        name: "twitter:description",
        content: "Solar and wind monitoring, SCADA integration, loss analytics, and O&M platforms. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/renewable-energy-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
