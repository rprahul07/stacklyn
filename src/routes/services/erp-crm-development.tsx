import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceData } from "@/components/velora/ServicePageTemplate";

const data: ServiceData = {
  title: "ERP & CRM Development",
  slug: "erp-crm-development",
  headline: "Custom ERP & CRM Software Development",
  tagline: "ERP · CRM · Inventory · Billing · HR · Kerala, India",
  intro:
    "Stacklyn builds custom ERP, CRM, inventory, billing, and HR software that fits the way your business already works — and replaces the spreadsheets, WhatsApp groups, and disconnected tools your team juggles today. Start with one module and add more in fixed-price phases.",
  whatIs:
    "ERP (enterprise resource planning) software connects the core operations of a business — purchasing, inventory, sales, billing, accounts, and HR — in one system. CRM (customer relationship management) software tracks leads, customers, follow-ups, and sales pipelines. Custom ERP and CRM software is built around your own process instead of a generic product you have to adapt to.",
  whyItMatters:
    "Off-the-shelf ERPs are often expensive per user, packed with features you never use, and still missing the one workflow that matters to you. A custom system costs a predictable amount once, has no per-seat fees, and automates exactly the steps your team repeats every day.",
  subServices: [
    "Custom ERP Development",
    "CRM and Sales Pipeline Software",
    "Inventory and Warehouse Management",
    "Billing, Invoicing, and GST",
    "Purchase and Vendor Management",
    "HR, Payroll, and Attendance (HRMS)",
    "Project and Job Management",
    "Reports and Management Dashboards",
    "Tally, Zoho, and QuickBooks Integration",
    "Data Migration from Excel or Legacy Systems",
  ],
  benefits: [
    {
      title: "Fits Your Process",
      desc: "Screens, approvals, and reports follow your workflow — not the other way round.",
    },
    {
      title: "No Per-user Fees",
      desc: "You pay to build it, not a monthly fee for every employee who logs in.",
    },
    {
      title: "One Source of Truth",
      desc: "Sales, stock, billing, and staff data in one place, so everyone works from the same numbers.",
    },
    {
      title: "Automates Repetitive Work",
      desc: "Auto-generated invoices, reminders, stock alerts, and approvals instead of manual follow-ups.",
    },
    {
      title: "Works With Your Tools",
      desc: "Connects to accounting software, payment gateways, WhatsApp, email, and existing databases.",
    },
    {
      title: "Grows in Phases",
      desc: "Start with the module that hurts most, then add more as each one proves its value.",
    },
  ],
  process: [
    {
      step: "Process Mapping",
      desc: "We walk through how your team works today — forms, spreadsheets, approvals, and reports.",
    },
    {
      step: "Module Plan",
      desc: "We pick the first module, define its scope, and give a fixed price and timeline.",
    },
    {
      step: "Design",
      desc: "Screens and workflows designed with the people who will use them every day.",
    },
    {
      step: "Build & Migrate",
      desc: "Development in weekly demos, plus migration of your existing data from Excel or old systems.",
    },
    {
      step: "Training & Go-live",
      desc: "Staff training, a parallel run if needed, and go-live with support on hand.",
    },
    {
      step: "Next Modules",
      desc: "Add modules, reports, and integrations in further fixed-price phases.",
    },
  ],
  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Flutter",
    "REST APIs",
    "Tally Integration",
    "Zoho APIs",
    "QuickBooks API",
    "WhatsApp Business API",
    "Razorpay",
    "AWS",
    "Azure",
    "Docker",
  ],
  whyStacklyn: [
    {
      title: "Process First",
      desc: "We understand your operations before we write code, so the software matches reality.",
    },
    {
      title: "Fixed-price Modules",
      desc: "Each module has an agreed scope and price. No open-ended projects.",
    },
    {
      title: "Mobile Access",
      desc: "Web dashboards for the office and mobile apps for sales or field staff when needed.",
    },
    {
      title: "Clean Data Migration",
      desc: "We move your existing customer, stock, and transaction data across carefully.",
    },
    {
      title: "You Own It",
      desc: "Full source code and data ownership — no lock-in to a vendor's platform.",
    },
    {
      title: "Ongoing Support",
      desc: "Monthly support for changes, new reports, and new modules as you grow.",
    },
  ],
  faqs: [
    {
      q: "How much does custom ERP or CRM software cost?",
      a: "With Stacklyn, a focused CRM or a single ERP module (for example inventory or billing) typically costs $5,000–12,000. A multi-module ERP is delivered in phases and usually totals $15,000–40,000 depending on modules, users, and integrations. Each phase has a fixed price agreed before work starts.",
    },
    {
      q: "How long does it take to build an ERP?",
      a: "The first module is usually live in 8–12 weeks. Further modules follow in 4–8 week phases, so your team starts using the system early instead of waiting a year for a big-bang launch.",
    },
    {
      q: "Is custom ERP better than Odoo, Zoho, or SAP Business One?",
      a: "Not always. If an off-the-shelf product fits your process with little change, it can be cheaper. Custom software makes sense when your workflow is specific, per-user fees are growing, or you are stitching several tools together. We will tell you honestly which fits your case.",
    },
    {
      q: "Can you integrate with Tally or our accounting software?",
      a: "Yes. We integrate with Tally, Zoho Books, QuickBooks, and other accounting tools so invoices and transactions sync without double entry.",
    },
    {
      q: "Can you migrate our data from Excel or an old system?",
      a: "Yes. We clean and import customer, product, stock, and transaction data from spreadsheets or legacy databases as part of the project.",
    },
    {
      q: "Can staff use it on mobile?",
      a: "Yes. The system works in any browser on phones, and we can build a dedicated mobile app for sales, delivery, or field staff where it helps.",
    },
    {
      q: "Is our business data secure?",
      a: "Yes. We use role-based access, encrypted connections, audit logs, and regular backups, and can host on your own cloud account or servers.",
    },
    {
      q: "Do you provide training and support?",
      a: "Yes. We train your team at go-live and offer monthly support for fixes, changes, new reports, and new modules.",
    },
    {
      q: "Which industries do you build ERP and CRM for?",
      a: "Any business with repeatable operations — trading and distribution, manufacturing, retail, construction, logistics, healthcare, education, and service companies.",
    },
    {
      q: "How do we start?",
      a: "Tell us about your current process through the contact form, email rahulrp@stacklyn.in, or WhatsApp +91 95444 51720. We reply within 24 hours and set up a process walkthrough call.",
    },
  ],
  relatedServices: [
    { name: "Custom Software", href: "/services/custom-software-development" },
    { name: "Web Application Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "AI Development", href: "/services/ai-development" },
  ],
};

export const Route = createFileRoute("/services/erp-crm-development")({
  head: () => ({
    meta: [
      { title: "Custom ERP & CRM Software Development Company | Stacklyn India" },
      {
        name: "description",
        content:
          "Stacklyn builds custom ERP, CRM, inventory, billing, and HR software that fits your process — no per-user fees, Tally and Zoho integration, delivered in fixed-price modules from Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "custom ERP development India, CRM development company, ERP software company Kerala, inventory management software development, billing software development India, HRMS development, custom CRM software India",
      },
      {
        property: "og:title",
        content: "Custom ERP & CRM Software Development | Stacklyn",
      },
      {
        property: "og:description",
        content:
          "ERP, CRM, inventory, billing, and HR software built around your process. Fixed-price modules from Kerala, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ERP & CRM Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "Custom ERP and CRM software, built in fixed-price modules.",
      },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/services/erp-crm-development" }],
  }),
  component: () => <ServicePage data={data} />,
});
