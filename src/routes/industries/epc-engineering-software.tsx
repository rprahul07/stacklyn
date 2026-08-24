import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "EPC & Engineering",
  slug: "epc-engineering-software",
  headline: "Custom Software Development for EPC and Engineering Companies",
  tagline: "Engineering · Procurement · Construction · Document Control · Project Management",
  intro:
    "Stacklyn builds enterprise software for EPC contractors, engineering consultancies, and large-scale construction project management firms. We deliver custom project management portals, document control systems, vendor management platforms, construction progress tracking tools, and HSE compliance systems tailored to the complexity of multi-billion dollar EPC projects.",
  industryContext:
    "EPC (Engineering, Procurement, and Construction) projects are among the most complex undertakings in the industrial world — spanning multiple engineering disciplines, hundreds of vendors, thousands of deliverables, and multi-year timelines. Traditional project management tools like Primavera and Aconex are expensive, heavily licensed, and not built for your specific project structure. Custom EPC software gives project teams the exact workflows, data visibility, and integrations they need to deliver projects on time and under budget.",
  painPoints: [
    { title: "Document Control Chaos", desc: "Engineering documents (P&IDs, IFCs, MDRs) transmitted via email and shared drives with no formal version control, transmittal tracking, or approval workflows." },
    { title: "Multi-Party Coordination Complexity", desc: "Coordinating between owners, PMC, EPC contractors, sub-contractors, and vendors with no unified platform for RFI management, submittals, and action tracking." },
    { title: "Progress & Physical Completion Tracking", desc: "Manually updating progress S-curves and physical completion percentages for thousands of work packages across multiple engineering disciplines." },
    { title: "Vendor Management Fragmentation", desc: "Managing hundreds of equipment vendors, FAT inspections, delivery tracking, and vendor document submittals through spreadsheets and email chains." },
    { title: "Cost Control Visibility", desc: "No real-time visibility into committed costs, earned value, and cost-at-completion across project phases. Variance identification happens weeks after the fact." },
    { title: "Field Construction Control", desc: "Field construction teams recording inspection test records, punch lists, and quality reports on paper that can't be analysed or tracked in real time from the project office." },
  ],
  solutions: [
    {
      title: "Engineering Document Control System (EDCS)",
      desc: "Custom EDCS with document register, revision control, transmittal management, approval workflows, and review comment tracking. Replaces shared drives and email-based document management for engineering deliverables.",
    },
    {
      title: "Multi-Party Project Management Portal",
      desc: "Unified project portal for owners, PMC, EPC, and sub-contractors. Features include RFI management, submittal tracking, action item registers, meeting minutes, and document transmittals — with role-based access for each party.",
    },
    {
      title: "Progress & Earned Value Tracking System",
      desc: "Real-time progress tracking system with S-curve dashboards, physical completion calculations by discipline, earned value analysis, and schedule variance reporting. Integrates with Primavera P6 data exports.",
    },
    {
      title: "Vendor & Expediting Management Platform",
      desc: "Custom vendor management system for tracking equipment orders, FAT/SAT inspections, delivery milestones, vendor document submissions, and expediting status for critical long-lead items.",
    },
    {
      title: "Construction Field Control App",
      desc: "Mobile application for field construction supervision: digital inspection test records (ITRs), punch list management, photo documentation, quality non-conformance reports (NCRs), and real-time progress updates from the field.",
    },
    {
      title: "Cost Control & Change Management System",
      desc: "Custom cost control platform for committed cost tracking, change order management, budget variance analysis, and earned value reporting. Real-time dashboards for project managers and client owners.",
    },
    {
      title: "HSE Management for Construction Sites",
      desc: "Digital HSE system for construction projects: toolbox talk records, permit-to-work, safety walk observations, incident reporting, subcontractor safety performance tracking, and OSHA/HSE compliance dashboards.",
    },
    {
      title: "Commissioning & Handover Management System",
      desc: "Custom commissioning database for managing pre-commissioning, commissioning, and start-up activities. Tracks system completion, punch list clearance, and final documentation for mechanical completion and handover.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "Redis", "Prisma ORM",
    "REST API", "GraphQL", "WebSockets",
    "AWS", "Azure", "Docker",
    "PDF Generation (Drawing Transmittals, Reports)",
    "Primavera P6 Data Integration",
    "React Native (Field Mobile Apps)",
    "Recharts / D3.js (S-curves, EVM Dashboards)",
    "SharePoint / Teams Integration",
    "SendGrid / Twilio (Notifications)",
  ],
  clients: [
    "EPC contractors for oil & gas, power, and infrastructure",
    "Project Management Consultancies (PMC)",
    "Engineering design and consulting firms",
    "Owner companies managing large capital projects",
    "Speciality sub-contractors (piping, electrical, civil)",
    "Equipment vendors and procurement teams",
    "Construction management companies",
  ],
  whyStacklyn: [
    { title: "EPC Project Structure Understanding", desc: "We understand the owner-PMC-EPC-subcontractor hierarchy, engineering deliverable workflows, procurement gate reviews, and construction discipline structures — not just generic project management." },
    { title: "Document Control Expertise", desc: "Engineering document control is a specialised discipline. We build EDCS systems with proper revision states, transmittal logic, drawing registers, and MTO/MDR management." },
    { title: "Primavera & MS Project Integration", desc: "We integrate with scheduling tools including Primavera P6 and MS Project to pull schedule data for progress tracking dashboards, S-curve updates, and earned value reporting." },
    { title: "Multi-Party Access Architecture", desc: "EPC projects span dozens of companies. We build platforms with granular role-based access where each party (owner, PMC, contractor, vendor) sees exactly what they need and nothing more." },
    { title: "Field-Ready Mobile Applications", desc: "Construction sites are not office environments. We build rugged, offline-capable mobile apps for field engineers, inspectors, and HSE officers — designed for tablet use in dusty, high-temperature environments." },
    { title: "Rapid MVP to Production", desc: "EPC projects can't wait 18 months for custom software. We deliver working core modules in 8–12 weeks and expand iteratively, so your team starts getting value immediately." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build software for EPC contractors?",
      a: "Yes. Stacklyn builds custom enterprise software specifically for EPC contractors, engineering consultancies, and project management companies. We build document control systems, project management portals, progress tracking platforms, vendor management systems, and HSE compliance tools.",
    },
    {
      q: "Can Stacklyn build an engineering document control system (EDCS)?",
      a: "Yes. Engineering document control is a core EPC capability. We build custom EDCS with document registers, revision control, transmittal workflows, review comment tracking, and approval routing — tailored to your document classification and workflow structure.",
    },
    {
      q: "Can Stacklyn integrate with Primavera P6?",
      a: "Yes. We integrate with Primavera P6 via XER/XML data exports and REST API where available. Progress data from P6 is pulled into custom dashboards for S-curve visualization, earned value analysis, and schedule variance reporting.",
    },
    {
      q: "Can Stacklyn build a construction field inspection app?",
      a: "Yes. We build mobile apps for field engineers with digital ITR (Inspection Test Records), punch list management, NCR (Non-Conformance Reports), photo documentation, and real-time sync to the central project system. Available offline for remote construction sites.",
    },
    {
      q: "Can Stacklyn build a vendor management and expediting system?",
      a: "Yes. Vendor expediting and management is a common EPC requirement. We build platforms for tracking equipment orders, FAT/SAT inspection scheduling, delivery milestones, vendor document submission status, and expediting alerts for critical long-lead items.",
    },
    {
      q: "Does Stacklyn build commissioning management software?",
      a: "Yes. We build commissioning databases for managing system completion, pre-commissioning and commissioning activities, punch list clearance, mechanical completion records, and handover documentation packages.",
    },
    {
      q: "Can Stacklyn replace Aconex or Procore for my project?",
      a: "For large multi-party projects, we can build a custom platform that covers the specific workflows you need without the licensing costs of Aconex or Procore. Custom platforms are tailored to your project structure rather than forcing your team to fit into a generic tool.",
    },
    {
      q: "How long does it take to build EPC project management software?",
      a: "A core module (document control, RFI management, progress tracking) takes 8–14 weeks. A full integrated project management platform covering all EPC phases takes 4–9 months. We deliver working modules iteratively so your team gets value from week 8 onwards.",
    },
    {
      q: "How much does EPC software development cost?",
      a: "Focused modules (EDCS, vendor tracking, field inspection app) start from $7,000–14,000. Full integrated EPC project management platforms range from $25,000–85,000 depending on scope and integrations. Contact us for a detailed estimate.",
    },
    {
      q: "How do I start a software project with Stacklyn for my EPC company?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with a description of your project management or engineering software requirements. We'll schedule a free technical discovery call and deliver a detailed proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
    { name: "Mining Industry Software", href: "/industries/mining-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
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
      "@id": `${BASE_URL}/industries/epc-engineering-software#service`,
      "name": "EPC & Engineering Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Stacklyn",
        "url": BASE_URL,
      },
      "description":
        "Custom software for EPC contractors and engineering companies: document control systems, project management portals, vendor management, progress tracking, field inspection apps, and commissioning management.",
      "areaServed": ["AE", "IN", "GB", "US", "AU", "SG"],
      "serviceType": "Custom Software Development for EPC and Engineering Industry",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "EPC & Engineering Software", "item": `${BASE_URL}/industries/epc-engineering-software` },
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

export const Route = createFileRoute("/industries/epc-engineering-software")({
  head: () => ({
    meta: [
      { title: "EPC & Engineering Software Development Company | Stacklyn — India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom software for EPC contractors and engineering companies: document control systems, project management portals, vendor management, progress tracking, and commissioning tools. Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "EPC software development India, engineering document control system, EPC project management software, Primavera integration software India, construction document control, vendor expediting software, commissioning management software, Aconex alternative India, EPC contractor software, engineering procurement construction software",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/epc-engineering-software` },
      { property: "og:title", content: "EPC & Engineering Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom software for EPC contractors: document control, project portals, vendor management, progress tracking, commissioning management. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EPC & Engineering Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content:
          "Document control, project portals, vendor management, commissioning systems for EPC contractors. From Kerala, India.",
      },
    ],
    links: [
      { rel: "canonical", href: `${BASE_URL}/industries/epc-engineering-software` },
    ],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
