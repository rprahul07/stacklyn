import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "Industrial Workforce Management",
  slug: "workforce-management-software",
  headline: "Custom Workforce Management Software for Industrial & Field Operations",
  tagline: "Labour Mobilization · Shift Scheduling · Competency Tracking · Payroll Integration · Compliance",
  intro:
    "Stacklyn builds enterprise workforce management platforms for companies that deploy large-scale manual labour and field workforces — including construction firms, industrial contractors, oil & gas operators, mining companies, and facility management MNCs. We digitize crew scheduling, mobilization, competency management, attendance, and compliance into integrated platforms that replace spreadsheet chaos.",
  industryContext:
    "Industries reliant on large manual labour workforces — construction, oil & gas, mining, manufacturing, and facilities management — face unique workforce challenges. Managing thousands of workers across geographically dispersed sites, tracking qualifications and certifications in real time, ensuring regulatory compliance (OSHA, HSE, local labour laws), and processing payroll for multi-contract, multi-rate workforces are problems that generic HR software simply cannot solve. These industries need purpose-built workforce management systems.",
  painPoints: [
    { title: "Certification & Competency Tracking", desc: "Workers operating dangerous equipment or hazardous environments require specific certifications (OSHA 10/30, IPAF, OPITO, NEBOSH). Tracking expiry dates manually creates safety risk and compliance liability." },
    { title: "Labour Mobilization Complexity", desc: "Deploying the right number of skilled workers to the right location on time — across multiple sites, shifts, and contract types — requires real-time scheduling intelligence that spreadsheets can't provide." },
    { title: "Site Access & Badging", desc: "Controlling who is on site at any given time, verifying inductions and qualifications before site entry, and generating real-time site population reports for emergency muster." },
    { title: "Multi-Contractor Payroll Complexity", desc: "Industrial sites often have dozens of sub-contractors with different pay rates, overtime rules, allowances, and deductions. Calculating payroll accurately requires rule-based automation." },
    { title: "Attendance & Biometric Integration", desc: "Manual timesheets are fraudulent and inaccurate. Integrating biometric readers, GPS check-ins, and turnstile access into a unified attendance system is a critical operational need." },
    { title: "Workforce Reporting & Analytics", desc: "Senior management needs real-time visibility into headcount, overtime costs, absenteeism, training compliance rates, and labour cost per project — data that paper and spreadsheet systems can't produce." },
  ],
  solutions: [
    {
      title: "Labour Mobilization & Scheduling Platform",
      desc: "End-to-end workforce mobilization system for planning, requesting, and deploying workers across multiple sites. Includes demand forecasting, skills matching, travel and accommodation coordination, and real-time deployment tracking.",
    },
    {
      title: "Competency & Certification Management System",
      desc: "Centralized competency matrix tracking with automated expiry alerts, training compliance dashboards, document upload and verification, and integration with training providers. Ensures no unqualified worker enters a hazardous area.",
    },
    {
      title: "Digital Site Access & Induction Platform",
      desc: "Digital site induction system replacing paper processes. Workers complete online inductions, receive QR-code badges, and access is controlled by real-time eligibility verification against certification and medical fitness records.",
    },
    {
      title: "Attendance & Biometric Integration System",
      desc: "Unified attendance management integrating biometric readers (fingerprint, facial recognition), GPS mobile check-in, and RFID turnstile data into a single system. Eliminates manual timesheets and buddy punching.",
    },
    {
      title: "Multi-Contractor Payroll Engine",
      desc: "Custom payroll engine for industrial sites managing multiple contractors with different pay grades, shift allowances, overtime rules, deductions, and statutory compliance. Generates payroll data for integration with SAP, Oracle, or Tally.",
    },
    {
      title: "Workforce Analytics & Reporting Dashboard",
      desc: "Real-time workforce analytics: headcount by site and trade, overtime trends, absenteeism patterns, training compliance rates, labour cost by project, and workforce utilization. Configurable for site managers and executive dashboards.",
    },
    {
      title: "Contractor Management Portal",
      desc: "Self-service portal for labour contractors to submit worker profiles, upload qualifications, manage deployment schedules, and view payment status. Reduces administrative burden while maintaining compliance control.",
    },
    {
      title: "Fatigue & Working Hours Compliance System",
      desc: "Automated working hours tracking and fatigue risk flagging for industries with maximum hours regulations (offshore, mining, long-haul transport). Generates compliance reports and prevents unsafe scheduling.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "Redis", "Prisma ORM",
    "REST API", "GraphQL", "WebSockets",
    "Biometric SDK Integration (ZKTeco, Suprema, IDEMIA)",
    "GPS / Geofencing (Google Maps API)",
    "AWS", "Azure", "Docker",
    "React Native (Mobile Field Apps)",
    "PDF Generation (Reports & Certificates)",
    "Recharts / D3.js (Analytics Dashboards)",
    "SAP / Oracle / Tally Integration",
    "Twilio / WhatsApp API (Notifications)",
  ],
  clients: [
    "Large construction and infrastructure companies",
    "Oil & gas operators and oilfield service companies",
    "Mining companies and contractors",
    "Industrial manufacturing and plant operations",
    "Facility management and cleaning service companies",
    "Power and utility plant operators",
    "Port and logistics terminal operators",
  ],
  whyStacklyn: [
    { title: "Industrial Workforce Domain Expertise", desc: "We understand trade classifications, shift patterns, multi-contractor environments, industrial certifications, and the specific compliance requirements of high-risk workforces." },
    { title: "Biometric & Hardware Integration", desc: "We integrate with biometric access control systems (ZKTeco, Suprema, IDEMIA), RFID readers, and turnstile systems — bridging the gap between physical access control and digital workforce management." },
    { title: "Regulation-Ready Compliance Modules", desc: "Our workforce management platforms are built with OSHA, HSE, NEBOSH, OPITO, and local labour law compliance in mind. Automated alerts and reports keep you audit-ready." },
    { title: "Multi-Site, Multi-Contractor Architecture", desc: "We design multi-tenant platforms that support hundreds of contractors and dozens of sites with role-based access, site isolation, and consolidated management reporting." },
    { title: "Offline-First Mobile Apps", desc: "Field supervisors and security guards on industrial sites need apps that work without reliable internet. We build offline-capable React Native apps that sync when connectivity is restored." },
    { title: "SAP / Oracle Integration", desc: "Large MNCs run SAP or Oracle as their enterprise backbone. We build workforce management platforms that integrate seamlessly via APIs and data pipelines, without replacing your core ERP." },
  ],
  faqs: [
    {
      q: "What is industrial workforce management software?",
      a: "Industrial workforce management software is a purpose-built platform for companies managing large manual labour workforces — typically in construction, oil & gas, mining, manufacturing, or facilities management. It covers scheduling, mobilization, attendance, competency tracking, payroll, and compliance — unlike generic HR software designed for office workers.",
    },
    {
      q: "Can Stacklyn build a competency and certification tracking system?",
      a: "Yes. Competency matrix management is a core capability. We build systems that track every worker's certifications (OSHA, IPAF, OPITO, NEBOSH, BOSIET, trade licences), flag expiry dates, enforce access restrictions based on certification status, and generate compliance reports.",
    },
    {
      q: "Can Stacklyn integrate biometric attendance systems?",
      a: "Yes. We integrate with biometric hardware (ZKTeco, Suprema, IDEMIA, Hikvision), RFID card readers, and GPS mobile check-in for unified attendance management. This eliminates manual timesheets and time fraud across large workforces.",
    },
    {
      q: "Can Stacklyn build a site access control and digital induction system?",
      a: "Yes. We build digital induction platforms where workers complete safety inductions online, upload qualifications, and receive a QR code badge. Site access points verify eligibility in real time before allowing entry — preventing unqualified workers from entering hazardous areas.",
    },
    {
      q: "Can Stacklyn build payroll software for multi-contractor sites?",
      a: "Yes. Multi-contractor payroll is a common requirement for industrial sites. We build payroll engines that handle different pay grades, shift allowances, overtime rules, deductions, and statutory contributions for each contractor, generating payroll data for integration with SAP, Oracle, or Tally.",
    },
    {
      q: "Does Stacklyn build labour mobilization software?",
      a: "Yes. Labour mobilization platforms manage the end-to-end process of deploying workers to project sites — demand planning, worker sourcing, qualification verification, travel/accommodation coordination, and real-time deployment tracking across multiple sites.",
    },
    {
      q: "Can Stacklyn build workforce management software for construction companies?",
      a: "Yes. Construction-specific workforce management includes trade worker scheduling, sub-contractor management, site access control, toolbox talk records, workforce cost tracking per project phase, and integration with project management tools like Procore.",
    },
    {
      q: "How long does it take to build a workforce management platform?",
      a: "A focused module (attendance system, competency tracker, contractor portal) takes 8–12 weeks. A full integrated workforce management platform with scheduling, attendance, payroll, and analytics takes 4–8 months. We deliver working software within the first 6–8 weeks.",
    },
    {
      q: "How much does custom workforce management software cost?",
      a: "Focused modules start from $5,000–10,000. Full workforce management platforms with biometric integration, contractor portal, payroll engine, and analytics dashboards range from $18,000–60,000. Contact us for a scoped estimate.",
    },
    {
      q: "How do I start a workforce management software project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with a description of your workforce and operational requirements. We'll schedule a free discovery call and deliver a detailed proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
    { name: "Mining Industry Software", href: "/industries/mining-software" },
    { name: "EPC & Engineering Software", href: "/industries/epc-engineering-software" },
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
      "@id": `${BASE_URL}/industries/workforce-management-software#service`,
      "name": "Industrial Workforce Management Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Stacklyn",
        "url": BASE_URL,
      },
      "description":
        "Custom workforce management software for industrial companies: labour mobilization, competency tracking, biometric attendance, site access control, payroll integration, and workforce analytics.",
      "areaServed": ["IN", "AE", "GB", "AU", "US", "SG"],
      "serviceType": "Custom Software Development for Industrial Workforce Management",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "Workforce Management Software", "item": `${BASE_URL}/industries/workforce-management-software` },
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

export const Route = createFileRoute("/industries/workforce-management-software")({
  head: () => ({
    meta: [
      { title: "Industrial Workforce Management Software | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom workforce management software for oil & gas, mining, and construction companies: labour mobilization, competency tracking, biometric attendance, site access, payroll integration. Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "industrial workforce management software India, labour management system construction, crew management software oil gas, competency tracking software mining, biometric attendance system India, site access control software, contractor management portal, manual labour management software, workforce scheduling industrial, labour mobilization software",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/workforce-management-software` },
      { property: "og:title", content: "Industrial Workforce Management Software | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom workforce management for oil & gas, mining, and construction: mobilization, competency tracking, biometric attendance, payroll. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Industrial Workforce Management Software | Stacklyn" },
      {
        name: "twitter:description",
        content:
          "Labour mobilization, competency tracking, biometric attendance, contractor management for industrial MNCs. From Kerala, India.",
      },
    ],
    links: [
      { rel: "canonical", href: `${BASE_URL}/industries/workforce-management-software` },
    ],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
