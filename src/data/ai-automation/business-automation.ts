import type { AIAutomationPage } from "./types";

const CONTACT_CTA =
  "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720";

const automationServices = [
  { name: "Custom Software Development", href: "/services/custom-software-development" },
  { name: "Backend Development", href: "/services/backend-development" },
  { name: "AI Application Development", href: "/services/ai-development" },
  { name: "Hire Backend Developer", href: "/hire-backend-developer" },
];

export const businessAutomationPages: AIAutomationPage[] = [
  // ------------------------------------------------------------------
  {
    slug: "business-process-automation",
    category: "Business Automation",
    name: "Business Process Automation",
    metaTitle: "Business Process Automation Company in Kerala, India | Stacklyn",
    metaDescription:
      "Stacklyn automates repetitive business processes for Kerala and Indian companies — approvals, data entry, reporting, invoicing, and follow-ups — connecting Tally, Zoho, WhatsApp, email, and spreadsheets.",
    keywords:
      "business process automation Kerala, workflow automation company India, process automation services Kochi, automate business operations India, office automation Kerala, approval workflow automation, data entry automation India, SME automation services Kerala, digital transformation Kerala, business automation consultant India",
    eyebrow: "Workflow Automation · Approvals · Data Entry · Reporting · System Integration",
    headline: "Business Process Automation for Companies in Kerala and Across India",
    intro:
      "Every growing business has staff spending hours copying data between Excel, Tally, email, and WhatsApp, chasing approvals, and rebuilding the same reports each week. Stacklyn maps those processes, automates the repetitive steps, connects the systems you already use, and leaves your team with the work that actually needs judgement.",
    context: {
      heading: "Automation should start with the process, not the tool",
      body:
        "Automation projects fail when a tool is chosen first and the process is forced to fit it. The effective sequence is the reverse: document how work really flows today, measure where time and errors accumulate, remove steps that should not exist, and only then automate what remains. For most Indian SMEs the highest returns are not exotic — invoice and payment follow-ups, purchase approvals, daily sales and stock reports, lead routing, and data synchronisation between accounting, CRM, and messaging. Those are the processes we typically automate first.",
    },
    localAngle: {
      heading: "Automation built around Indian business systems",
      points: [
        { title: "Tally, Zoho, and Excel as they are", desc: "We automate around the tools already embedded in your operations rather than insisting on a full system replacement." },
        { title: "WhatsApp as the notification channel", desc: "Approvals, alerts, and reminders reach people on WhatsApp, where Indian teams actually respond quickly." },
        { title: "GST-aware finance workflows", desc: "Invoice, e-way bill, and reconciliation steps follow Indian GST processes and formats." },
        { title: "Phased delivery for SME budgets", desc: "We automate one high-value process at a time, so each phase proves its value before the next begins." },
      ],
    },
    useCases: [
      { title: "Purchase and expense approvals", desc: "Route requests to the right approver by amount and department, with WhatsApp approval and a full audit trail." },
      { title: "Sales and stock reporting", desc: "Compile daily sales, collections, and inventory reports automatically from Tally or your ERP and deliver them each morning." },
      { title: "Customer follow-ups and collections", desc: "Send payment reminders, quotation follow-ups, and renewal notices on schedule without manual tracking." },
      { title: "Lead routing and assignment", desc: "Capture leads from website, ads, portals, and WhatsApp, deduplicate them, and assign them to the right salesperson." },
      { title: "Employee onboarding", desc: "Trigger document collection, account creation, and induction tasks automatically when a new hire is confirmed." },
      { title: "Data synchronisation between systems", desc: "Keep customers, products, orders, and invoices consistent across CRM, accounting, and e-commerce platforms." },
    ],
    deliverables: [
      { title: "Process audit and mapping", desc: "Documented current workflows, time and error hotspots, and a prioritised automation roadmap." },
      { title: "Workflow automations", desc: "Automated flows built in n8n, Make, Power Automate, or custom code depending on complexity and data sensitivity." },
      { title: "System integrations", desc: "Connections between Tally, Zoho, Google Workspace, Microsoft 365, WhatsApp, and custom applications." },
      { title: "Approval and notification layer", desc: "Multi-level approvals, escalations, and alerts via WhatsApp, email, and dashboards." },
      { title: "Monitoring and error handling", desc: "Alerts on failed runs, retries, and logs so automations never fail silently." },
      { title: "Documentation and training", desc: "Runbooks and team training so your staff understand, operate, and adjust automations confidently." },
    ],
    stack: ["n8n (self-hosted)", "Make", "Microsoft Power Automate", "Zapier", "Node.js", "Python", "Tally XML / ODBC integration", "Zoho APIs", "Google Workspace & Microsoft 365 APIs", "WhatsApp Business Platform", "PostgreSQL", "AI document extraction"],
    faqs: [
      { q: "What is business process automation?", a: "Business process automation uses software to perform repetitive, rule-based work — moving data between systems, routing approvals, sending reminders, and generating reports — so staff spend less time on manual administration and processes run consistently." },
      { q: "Which processes should a small business automate first?", a: "Start with processes that are frequent, repetitive, and error-prone: payment reminders, purchase approvals, daily sales and stock reports, lead routing, and data entry between accounting and CRM. These typically deliver visible time savings within weeks." },
      { q: "How much does business process automation cost in India?", a: "Individual workflow automations typically start from $800–2,000 each. Automation programmes covering several departments with integrations, approval layers, and monitoring usually range from $5,000–20,000, delivered in phases." },
      { q: "Can you automate Tally?", a: "Yes. We integrate with Tally through its XML and ODBC interfaces to extract reports, sync masters and vouchers with other systems, and automate reporting and reminders. Posting entries into Tally can be automated with approval controls." },
      { q: "Do we need to replace our existing software to automate?", a: "Usually not. We automate around your existing tools — Tally, Zoho, Excel, Google Workspace, WhatsApp — and recommend replacements only where a system genuinely blocks progress." },
      { q: "What is the difference between automation and AI automation?", a: "Traditional automation follows fixed rules. AI automation adds judgement-like steps — reading an invoice, classifying an email, summarising a document, or drafting a reply. Most effective solutions combine both, using AI only where rules cannot handle the variation." },
      { q: "Is there a business automation company in Kerala?", a: "Yes. Stacklyn is a Kerala-based software and AI company that provides business process automation for companies across Kerala, India, and the Gulf." },
      { q: "How do we start a business automation project?", a: `${CONTACT_CTA} listing the three tasks that consume the most staff time. We run a free process review call and send a prioritised automation proposal within 48 hours.` },
    ],
    related: ["n8n-automation-agency", "tally-gst-automation", "ai-agent-development", "crm-sales-automation"],
    relatedServices: automationServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "n8n-automation-agency",
    category: "Business Automation",
    name: "n8n, Make & Zapier Automation",
    metaTitle: "n8n Automation Agency in India | Make & Zapier Experts | Stacklyn Kerala",
    metaDescription:
      "Stacklyn builds, deploys, and maintains n8n, Make, and Zapier automations for Indian businesses — AI workflows, CRM and WhatsApp integrations, and self-hosted n8n in Indian cloud regions.",
    keywords:
      "n8n automation agency India, n8n developer Kerala, n8n expert India, self-hosted n8n setup India, Make automation expert India, Zapier expert India, AI workflow automation n8n, n8n WhatsApp integration, automation agency Kochi, low-code automation services India",
    eyebrow: "n8n · Make · Zapier · Power Automate · Self-Hosting · AI Workflows",
    headline: "n8n, Make and Zapier Automation Services in India",
    intro:
      "Low-code automation platforms let businesses connect hundreds of apps without building everything from scratch — but real workflows quickly outgrow simple two-step zaps. Stacklyn designs, builds, deploys, and maintains production-grade automations on n8n, Make, and Zapier, including AI steps, custom code, error handling, and self-hosted n8n for data control and predictable costs.",
    context: {
      heading: "Choosing between n8n, Make, and Zapier",
      body:
        "Zapier is the easiest to start with and has the widest app catalogue, but per-task pricing becomes expensive at volume. Make offers more visual control over complex branching and is usually cheaper at scale. n8n can be self-hosted, supports custom JavaScript and Python inside workflows, and has strong AI and agent capabilities — which makes it attractive for businesses that want data control and predictable costs. The right choice depends on volume, data sensitivity, in-house skills, and the systems involved, and many clients run more than one.",
    },
    localAngle: {
      heading: "Automation platforms, set up for Indian operations",
      points: [
        { title: "Self-hosted n8n in Indian regions", desc: "We deploy n8n in your own cloud account in an Indian region or on your servers, keeping workflow data in India and removing per-execution fees." },
        { title: "Cost-conscious workflow design", desc: "We restructure workflows to cut task and operation counts, which can substantially reduce Zapier and Make bills for high-volume users." },
        { title: "Indian app connectors", desc: "Integrations with Tally, Zoho, Razorpay, Shiprocket, IndiaMART leads, and the WhatsApp Business Platform, with custom nodes where no connector exists." },
        { title: "Support in Indian business hours", desc: "Maintenance and incident response aligned to Indian working hours, with monitoring that alerts before a broken workflow costs you orders." },
      ],
    },
    useCases: [
      { title: "Lead capture to CRM", desc: "Pull leads from IndiaMART, Meta ads, website forms, and WhatsApp into Zoho or HubSpot with deduplication and assignment." },
      { title: "E-commerce order operations", desc: "Sync Shopify or WooCommerce orders to shipping, invoicing, and customer notifications automatically." },
      { title: "AI email triage", desc: "Classify incoming emails, extract key details, draft replies, and route them to the right team member." },
      { title: "Reporting pipelines", desc: "Aggregate data from ads, CRM, accounting, and sheets into scheduled reports and dashboards." },
      { title: "Content and social workflows", desc: "Draft, approve, schedule, and track content across channels with AI assistance and human review." },
      { title: "Migration from Zapier to n8n", desc: "Rebuild existing Zapier workflows in self-hosted n8n to reduce costs and gain flexibility." },
    ],
    deliverables: [
      { title: "Workflow architecture", desc: "Design of triggers, branching, error paths, and data handling before any node is built." },
      { title: "Production builds", desc: "Workflows with retries, error notifications, logging, and version-controlled exports." },
      { title: "Self-hosted n8n deployment", desc: "Docker-based setup with SSL, backups, queue mode for scale, and access control." },
      { title: "Custom nodes and code steps", desc: "JavaScript and Python logic plus custom connectors for apps without native integrations." },
      { title: "AI workflow steps", desc: "LLM classification, extraction, summarisation, and agent nodes integrated safely into workflows." },
      { title: "Maintenance retainers", desc: "Monitoring, updates, credential rotation, and changes as your tools and processes evolve." },
    ],
    stack: ["n8n (cloud and self-hosted)", "Make", "Zapier", "Microsoft Power Automate", "Docker", "PostgreSQL", "Redis (n8n queue mode)", "JavaScript / Python code nodes", "OpenAI / Claude APIs", "WhatsApp Business Platform", "Zoho / HubSpot / Razorpay / Shiprocket APIs", "AWS / GCP / DigitalOcean"],
    faqs: [
      { q: "What is n8n?", a: "n8n is a workflow automation platform that connects apps and services through visual workflows, supports custom JavaScript and Python code, includes AI and agent capabilities, and can be self-hosted on your own infrastructure for data control and predictable costs." },
      { q: "Should we use n8n, Make, or Zapier?", a: "Zapier suits simple workflows and teams wanting the easiest setup. Make suits complex visual logic at moderate volume. n8n suits businesses wanting self-hosting, custom code, AI workflows, and lower costs at high volume. We recommend based on your workflows, volume, and data requirements." },
      { q: "Can n8n be self-hosted in India?", a: "Yes. We deploy n8n in your own cloud account in an Indian region or on your own servers using Docker, with SSL, backups, authentication, and queue mode for high-volume workloads." },
      { q: "Can you reduce our Zapier costs?", a: "Often, yes. We restructure workflows to reduce task counts and consolidate steps, and where volume justifies it, migrate workflows to self-hosted n8n, which does not charge per execution." },
      { q: "How much do n8n automation services cost?", a: "Individual workflows typically start from $500–1,500 depending on complexity. A self-hosted n8n setup with a batch of production workflows usually ranges from $2,500–8,000. Ongoing maintenance retainers start from $400 per month." },
      { q: "Can n8n integrate with Tally and WhatsApp?", a: "Yes. We connect n8n to the WhatsApp Business Platform through Meta's Cloud API and to Tally through its XML interface, often via a small custom service, enabling reminders, reports, and data sync." },
      { q: "Is there an n8n expert in Kerala?", a: "Yes. Stacklyn is a Kerala-based software and AI company that builds, deploys, and maintains n8n workflows for businesses across Kerala, India, and internationally." },
      { q: "How do we start an n8n automation project?", a: `${CONTACT_CTA} with the workflows you want to build or migrate and the tool you use today. We review them in a free call and send a proposal within 48 hours.` },
    ],
    related: ["business-process-automation", "ai-agent-development", "crm-sales-automation", "whatsapp-ai-chatbot"],
    relatedServices: automationServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "tally-gst-automation",
    category: "Business Automation",
    name: "Tally & GST Automation",
    metaTitle: "Tally & GST Automation for Indian Businesses | Stacklyn Kerala",
    metaDescription:
      "Stacklyn automates Tally and GST workflows — invoice data entry, e-invoice and e-way bill generation, GSTR-2B reconciliation, outstanding reminders, and MIS reports — for Kerala and Indian businesses.",
    keywords:
      "Tally automation Kerala, Tally integration services India, GST automation software, GSTR-2B reconciliation automation, e-invoice integration Tally, e-way bill automation, Tally WhatsApp integration, Tally to Excel automation, accounting automation India, TallyPrime integration developer",
    eyebrow: "TallyPrime Integration · GST Reconciliation · E-Invoice · E-Way Bill · MIS Reports",
    headline: "Tally and GST Automation for Businesses in Kerala and India",
    intro:
      "Accounts teams across India spend days each month keying purchase invoices into Tally, matching them against GSTR-2B, chasing outstanding payments, and rebuilding MIS reports in Excel. Stacklyn automates those steps — extracting invoice data with AI, syncing Tally with your other systems, reconciling GST data, and delivering reports and reminders automatically — while your accountant keeps control of every posting.",
    context: {
      heading: "Where accounting time actually goes",
      body:
        "In most Indian SMEs, Tally is reliable and deeply embedded, and nobody wants to replace it. The pain sits around it: purchase bills arriving as PDFs and photos that must be typed in, sales data exported from billing or e-commerce systems and re-entered, input tax credit mismatches discovered at return time, and management reports assembled by hand. These are structured, repetitive, rule-governed tasks — ideal for automation — provided every automated entry passes human review before it affects the books or a filing.",
    },
    localAngle: {
      heading: "Automation designed for Indian accounting practice",
      points: [
        { title: "Accountant stays in control", desc: "Automations prepare entries and reconciliations for review. Nothing is posted to Tally or filed without approval from your accounts team or CA." },
        { title: "GST process alignment", desc: "Workflows follow GST processes for e-invoicing, e-way bills, and input tax credit matching against GSTR-2B." },
        { title: "Works with TallyPrime as installed", desc: "We integrate through Tally's XML and ODBC interfaces with your existing company data, without migrating accounting to a new platform." },
        { title: "WhatsApp outstanding reminders", desc: "Customer ledgers drive automated WhatsApp and email reminders with statements attached, improving collections without awkward phone calls." },
      ],
    },
    useCases: [
      { title: "Purchase invoice data entry", desc: "Extract supplier, GSTIN, items, tax, and totals from PDF and photographed bills and prepare Tally vouchers for review." },
      { title: "GSTR-2B reconciliation", desc: "Match purchase registers against GSTR-2B, highlight mismatches and missing invoices, and prepare supplier follow-up lists." },
      { title: "E-invoice and e-way bill generation", desc: "Generate IRNs and e-way bills from sales data through authorised GSP or API providers and write references back to records." },
      { title: "Outstanding and collection reminders", desc: "Send scheduled reminders with ledger statements to customers by WhatsApp and email based on Tally ageing." },
      { title: "Sales data sync from billing and e-commerce", desc: "Push orders and invoices from POS, Shopify, or custom systems into Tally without re-entry." },
      { title: "Automated MIS reporting", desc: "Deliver daily sales, collection, stock, and cash position reports to management automatically." },
    ],
    deliverables: [
      { title: "Tally integration layer", desc: "Secure connector to TallyPrime via XML and ODBC for reading reports and preparing masters and vouchers." },
      { title: "AI invoice extraction", desc: "Document AI that reads invoices and bills, validates GSTIN and tax calculations, and flags anomalies." },
      { title: "Reconciliation engine", desc: "Rule-based matching of purchase data with GSTR-2B, including tolerant matching for invoice number variations." },
      { title: "Review and approval screen", desc: "A simple interface where accountants verify, correct, and approve prepared entries before posting." },
      { title: "Reminder and reporting automation", desc: "Scheduled WhatsApp, email, and dashboard delivery of reminders and MIS reports." },
      { title: "Audit trail", desc: "Record of every extraction, change, approval, and posting for internal audit and CA review." },
    ],
    stack: ["TallyPrime XML / ODBC interface", "Document AI and OCR", "OpenAI / Claude / Gemini (extraction)", "Python", "Node.js", "PostgreSQL", "GSP e-invoice and e-way bill APIs", "WhatsApp Business Platform", "n8n", "Excel / Google Sheets", "Power BI / Metabase"],
    faqs: [
      { q: "Can Tally be automated?", a: "Yes. TallyPrime exposes XML and ODBC interfaces that allow external software to read reports and ledgers and to import masters and vouchers. We use these to automate data entry, synchronisation, reporting, and reminders while keeping your accountant's approval in the workflow." },
      { q: "Can AI read purchase invoices and enter them into Tally?", a: "Yes. AI extracts supplier details, GSTIN, line items, taxes, and totals from PDF and photographed invoices, validates them, and prepares vouchers for review. After approval, entries are imported into Tally. Accuracy depends on document quality, so review remains part of the process." },
      { q: "How do you automate GSTR-2B reconciliation?", a: "We compare your purchase register with GSTR-2B data, match invoices using GSTIN, invoice number, date, and value with tolerance for formatting differences, and produce lists of matched, mismatched, and missing items along with supplier follow-up messages." },
      { q: "Can you generate e-invoices and e-way bills automatically?", a: "Yes, for businesses within the applicable mandates. We integrate with authorised GST Suvidha Providers or e-invoice and e-way bill APIs to generate IRNs, QR codes, and e-way bill numbers from your sales data and record them against invoices." },
      { q: "Can Tally send payment reminders on WhatsApp?", a: "Yes. We read customer outstanding and ageing from Tally and send scheduled WhatsApp and email reminders with ledger statements through the official WhatsApp Business Platform." },
      { q: "Do we need to move from Tally to another accounting software?", a: "No. These automations work with your existing TallyPrime setup. We only suggest alternatives if your requirements genuinely exceed what Tally can support." },
      { q: "How much does Tally and GST automation cost?", a: "Focused automations such as WhatsApp outstanding reminders or MIS reports typically start from $800. AI invoice extraction with Tally import and GSTR-2B reconciliation usually ranges from $3,000–10,000 depending on volume and the number of companies and branches." },
      { q: "How do we get started with Tally automation?", a: `${CONTACT_CTA} with your monthly invoice volume, Tally version, and the accounting task that takes the most time. We review it in a free call and send a proposal within 48 hours.` },
    ],
    related: ["invoice-document-ai", "business-process-automation", "whatsapp-ai-chatbot", "n8n-automation-agency"],
    relatedServices: automationServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "invoice-document-ai",
    category: "Business Automation",
    name: "AI Document Processing & Invoice Automation",
    metaTitle: "AI Document Processing & Invoice Automation in India | Stacklyn",
    metaDescription:
      "Stacklyn builds AI document processing that extracts data from invoices, purchase orders, KYC documents, forms, and contracts — including scanned and handwritten pages — and pushes it into your systems.",
    keywords:
      "AI document processing India, invoice automation software India, intelligent document processing company, OCR data extraction Kerala, KYC document extraction AI, purchase order automation, AI data entry automation India, handwritten form OCR India, document AI development company, automated invoice processing Kochi",
    eyebrow: "Intelligent Document Processing · Invoices · POs · KYC · Forms · Contracts",
    headline: "AI Document Processing and Invoice Automation for Indian Businesses",
    intro:
      "Invoices, purchase orders, delivery challans, KYC documents, application forms, and contracts still arrive as PDFs, scans, and phone photos. Stacklyn builds AI document processing pipelines that classify incoming documents, extract the fields you need, validate them against your records, and deliver clean data into your ERP, accounting, or CRM — with human review where confidence is low.",
    context: {
      heading: "From template OCR to document understanding",
      body:
        "Older OCR systems relied on fixed templates: each supplier's invoice layout had to be configured, and any change broke extraction. Modern document AI combines OCR, layout understanding, and language models to read documents it has never seen before, including tables, stamps, and handwriting. The practical challenge is no longer reading the text but trusting the output — validating totals, checking identifiers such as GSTIN and PAN formats, comparing against purchase orders, and routing uncertain documents to a person rather than letting errors flow silently into the books.",
    },
    localAngle: {
      heading: "Built for Indian documents",
      points: [
        { title: "GSTIN, PAN, and IFSC validation", desc: "Extracted identifiers are checked for valid formats and, where appropriate, against your master data before acceptance." },
        { title: "Handwritten and stamped documents", desc: "Delivery challans, registers, and forms often include handwriting and stamps. We test extraction on your real samples and route uncertain fields for review." },
        { title: "Multilingual pages", desc: "Documents mixing English with Malayalam, Hindi, or Tamil are processed with language-aware OCR." },
        { title: "Careful KYC handling", desc: "Identity documents are processed with Aadhaar masking where required, retention limits, and access controls in line with DPDP Act principles." },
      ],
    },
    useCases: [
      { title: "Accounts payable automation", desc: "Extract and validate supplier invoices, match them to purchase orders and goods receipts, and prepare entries for approval." },
      { title: "Purchase order intake", desc: "Read customer POs arriving by email and create sales orders automatically with exceptions flagged." },
      { title: "KYC and onboarding documents", desc: "Extract and verify details from identity and address documents for faster customer or employee onboarding." },
      { title: "Insurance and claims documents", desc: "Classify and extract data from claim forms, bills, and supporting documents to speed assessment." },
      { title: "Logistics paperwork", desc: "Digitise delivery challans, LR copies, and proof-of-delivery documents for billing and reconciliation." },
      { title: "Contract data extraction", desc: "Pull parties, dates, values, renewal terms, and obligations from contracts into a searchable register." },
    ],
    deliverables: [
      { title: "Document intake connectors", desc: "Automatic collection from email inboxes, WhatsApp, shared drives, scanners, and upload portals." },
      { title: "Classification and splitting", desc: "Identify document types and split multi-document PDFs automatically." },
      { title: "Field extraction", desc: "Configured extraction for your document types, including tables and line items." },
      { title: "Validation rules", desc: "Arithmetic checks, identifier validation, duplicate detection, and matching against master data." },
      { title: "Human review interface", desc: "Side-by-side review screen highlighting low-confidence fields for quick correction." },
      { title: "System integration", desc: "Delivery of validated data to Tally, SAP, Zoho, or custom systems via API or structured export." },
    ],
    stack: ["Azure AI Document Intelligence", "Google Document AI", "AWS Textract", "OpenAI / Claude / Gemini vision models", "Indic OCR", "Python", "Node.js", "PostgreSQL", "n8n", "Tally / SAP / Zoho integration", "S3-compatible storage"],
    faqs: [
      { q: "What is intelligent document processing?", a: "Intelligent document processing uses OCR, layout analysis, and AI models to classify documents, extract structured data such as names, amounts, and line items, validate that data, and deliver it into business systems, replacing manual data entry." },
      { q: "Can AI extract data from scanned and handwritten documents?", a: "Yes. Modern document AI handles scans, phone photos, and many handwriting styles. Accuracy depends on image quality and legibility, so we test on your real samples and route low-confidence fields for human review." },
      { q: "How accurate is AI invoice extraction?", a: "On clear digital and well-scanned invoices, key fields are typically extracted with high accuracy, while poor scans and unusual layouts need more review. Rather than promising a single figure, we measure accuracy on your own invoices during a pilot and design review steps accordingly." },
      { q: "Does it work with invoices from any supplier format?", a: "Yes. Unlike template-based OCR, modern document AI reads new layouts without per-supplier setup, though we still validate totals and identifiers to catch errors." },
      { q: "Can extracted data go directly into Tally or SAP?", a: "Yes. Validated data can be imported into Tally through its XML interface, into SAP through its integration APIs, or into Zoho and custom systems, typically after an approval step." },
      { q: "Is AI document processing secure for KYC data?", a: "We apply encryption, role-based access, Aadhaar masking where required, retention limits, and audit logs, and can deploy within Indian cloud regions or your own infrastructure for sensitive data." },
      { q: "How much does AI document processing cost?", a: "A pipeline for one document type, such as supplier invoices, typically starts from $3,000. Multi-document platforms with classification, validation, review interfaces, and ERP integration usually range from $8,000–30,000. Per-page AI processing costs are estimated from your volumes." },
      { q: "How do we get started with document automation?", a: `${CONTACT_CTA} with your document types, monthly volume, and 10–20 anonymised samples. We run a feasibility check in a free call and send a proposal within 48 hours.` },
    ],
    related: ["tally-gst-automation", "rag-knowledge-base-ai", "ai-agent-development", "business-process-automation"],
    relatedServices: automationServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "crm-sales-automation",
    category: "Business Automation",
    name: "CRM & Sales Automation",
    metaTitle: "CRM & Sales Automation Services in Kerala, India | Zoho, HubSpot | Stacklyn",
    metaDescription:
      "Stacklyn sets up and automates CRMs for Kerala and Indian sales teams — lead capture from IndiaMART, Meta ads, and WhatsApp, instant assignment, follow-up sequences, and AI-assisted sales insights.",
    keywords:
      "CRM automation Kerala, Zoho CRM implementation Kochi, HubSpot automation India, sales automation services India, lead management automation, IndiaMART CRM integration, WhatsApp CRM integration India, custom CRM development Kerala, sales pipeline automation, CRM consultant Kerala",
    eyebrow: "Zoho · HubSpot · Custom CRM · Lead Routing · Follow-Up Automation · AI Insights",
    headline: "CRM and Sales Automation for Sales Teams in Kerala and India",
    intro:
      "Most sales teams lose deals not to competitors but to slow follow-up: leads sit unassigned, quotations are never chased, and the pipeline lives in a manager's head. Stacklyn implements and automates CRMs that capture every lead, assign it instantly, trigger follow-ups on WhatsApp and email, and show managers exactly where each deal stands.",
    context: {
      heading: "Why CRMs get abandoned",
      body:
        "Many Indian businesses have bought a CRM at least once and quietly returned to Excel and WhatsApp. The reason is almost always the same: the CRM added data entry work for salespeople without giving anything back. Successful adoption reverses that equation — leads arrive automatically, call and WhatsApp activity logs itself, reminders appear without setup, quotations generate from templates, and salespeople see their own targets. When the CRM saves more time than it costs, usage follows.",
    },
    localAngle: {
      heading: "Sales automation for Indian lead sources and habits",
      points: [
        { title: "IndiaMART and B2B portal leads", desc: "Leads from IndiaMART and other B2B portals flow into the CRM automatically instead of being copied from email alerts." },
        { title: "WhatsApp-centric follow-up", desc: "Follow-ups, quotations, and reminders go out on WhatsApp, where Indian buyers respond, with every message logged against the deal." },
        { title: "Field sales visibility", desc: "Mobile check-ins, visit logging, and route planning support the field sales model common in Indian distribution and B2B." },
        { title: "Right-sized CRM choice", desc: "We recommend Zoho, HubSpot, or a custom CRM based on team size, budget, and process — not a default vendor." },
      ],
    },
    useCases: [
      { title: "Multi-source lead capture", desc: "Collect leads from website, Meta and Google ads, IndiaMART, WhatsApp, and walk-ins into one pipeline." },
      { title: "Instant lead assignment", desc: "Assign leads by territory, product, language, or round-robin within seconds of arrival." },
      { title: "Follow-up sequences", desc: "Automated WhatsApp and email follow-ups that pause as soon as the prospect replies." },
      { title: "Quotation and proposal automation", desc: "Generate branded quotations from CRM data and track when prospects open them." },
      { title: "Sales manager dashboards", desc: "Pipeline value, conversion by source, salesperson activity, and forecast views in real time." },
      { title: "AI call and conversation summaries", desc: "Summarise sales calls and chats, extract next steps, and update deal records automatically." },
    ],
    deliverables: [
      { title: "CRM selection and implementation", desc: "Configuration of Zoho CRM, HubSpot, or a custom CRM matched to your sales process." },
      { title: "Data migration and cleanup", desc: "Import and deduplication of existing contacts, leads, and deals from spreadsheets and old systems." },
      { title: "Integrations", desc: "WhatsApp Business Platform, telephony, email, ad platforms, lead portals, accounting, and website forms." },
      { title: "Automation rules", desc: "Assignment, reminders, stage-based actions, escalations, and approval workflows." },
      { title: "Mobile field sales setup", desc: "Check-ins, visit notes, photo capture, and offline access for field teams." },
      { title: "Training and adoption support", desc: "Role-based training and a 30-day adoption review to fix friction points." },
    ],
    stack: ["Zoho CRM", "HubSpot", "Custom CRM (Next.js, Node.js, PostgreSQL)", "WhatsApp Business Platform", "Exotel / Knowlarity telephony", "IndiaMART lead integration", "Meta Lead Ads", "Google Ads", "n8n / Zoho Flow", "OpenAI / Claude (summaries)", "Zoho Books / Tally integration"],
    faqs: [
      { q: "Which CRM is best for small businesses in India?", a: "It depends on team size, process, and budget. Zoho CRM is popular for pricing and Indian ecosystem integrations, HubSpot for ease of use and marketing features, and custom CRMs for businesses with unusual processes or large teams where per-user licensing becomes expensive. We recommend after reviewing your sales process." },
      { q: "Can IndiaMART leads go directly into our CRM?", a: "Yes. We connect IndiaMART's lead integration to Zoho, HubSpot, or a custom CRM so new enquiries are created automatically, deduplicated, and assigned to salespeople without manual copying." },
      { q: "Can WhatsApp conversations be logged in the CRM?", a: "Yes. Using the WhatsApp Business Platform, messages to and from leads are recorded against their CRM record, and follow-ups can be triggered automatically from deal stages." },
      { q: "How much does CRM implementation and automation cost?", a: "A CRM setup with lead capture, assignment, and basic automation typically starts from $1,500. Implementations with WhatsApp, telephony, portal integrations, custom modules, and dashboards usually range from $4,000–15,000. CRM subscription fees are separate." },
      { q: "Should we build a custom CRM instead of using Zoho or HubSpot?", a: "Custom CRMs make sense when your process differs significantly from standard sales pipelines, when per-user costs grow large, or when deep integration with operational systems is essential. For most teams under 25 users, configuring an existing CRM is faster and more economical." },
      { q: "Can AI help our sales team?", a: "Yes. AI can summarise calls and chats, suggest next steps, score leads based on engagement, draft follow-up messages, and highlight deals at risk, reducing administrative work for salespeople." },
      { q: "Who implements Zoho CRM in Kerala?", a: "Stacklyn is a Kerala-based software company that implements, integrates, and automates Zoho CRM, HubSpot, and custom CRMs for businesses in Kerala and across India." },
      { q: "How do we start a CRM automation project?", a: `${CONTACT_CTA} with your team size, lead sources, and current tools. We review your sales process in a free call and send a proposal within 48 hours.` },
    ],
    related: ["whatsapp-ai-chatbot", "business-process-automation", "ai-voice-agent", "n8n-automation-agency"],
    relatedServices: automationServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "hr-recruitment-automation",
    category: "Business Automation",
    name: "HR & Recruitment Automation",
    metaTitle: "HR & Recruitment Automation with AI in India | Stacklyn Kerala",
    metaDescription:
      "Stacklyn automates HR and recruitment for Indian companies — AI-assisted resume screening, interview scheduling, onboarding workflows, leave and attendance automation, and employee helpdesk assistants.",
    keywords:
      "HR automation India, recruitment automation software, AI resume screening India, interview scheduling automation, employee onboarding automation, HR chatbot India, leave attendance automation, HRMS integration services Kerala, AI hiring tools development India, HR process automation Kochi",
    eyebrow: "Resume Screening · Interview Scheduling · Onboarding · Leave & Attendance · HR Helpdesk",
    headline: "HR and Recruitment Automation for Growing Indian Companies",
    intro:
      "HR teams in growing companies spend their weeks reading hundreds of CVs, coordinating interview calendars, chasing joining documents, and answering the same policy questions. Stacklyn automates the administrative layer of HR — screening, scheduling, onboarding, leave, and employee queries — so HR professionals spend their time on people rather than paperwork.",
    context: {
      heading: "Automating HR responsibly",
      body:
        "HR automation touches people's livelihoods, which raises the bar. Screening models can inherit bias from historical hiring data, and candidates deserve fair and explainable treatment. We design recruitment automation to assist human decision-makers rather than replace them: structured criteria defined by your team, transparent scoring with reasons, exclusion of irrelevant personal attributes, and human review before any rejection. Administrative automation — scheduling, reminders, document collection, and policy answers — carries far less risk and delivers the quickest time savings.",
    },
    localAngle: {
      heading: "HR automation for Indian workplaces",
      points: [
        { title: "High application volumes", desc: "Applications arriving from job portals, LinkedIn, referrals, and email are consolidated, deduplicated, and parsed into one pipeline." },
        { title: "Statutory document collection", desc: "Onboarding workflows collect PAN, bank details, UAN, and educational documents with secure storage and masking." },
        { title: "WhatsApp candidate communication", desc: "Interview invitations, reminders, and document requests reach candidates on WhatsApp, reducing no-shows." },
        { title: "Integration with Indian HRMS and payroll", desc: "We connect with platforms such as Zoho People, greytHR, and Keka, or your custom HR system." },
      ],
    },
    useCases: [
      { title: "AI-assisted resume screening", desc: "Parse CVs, match them against role criteria your team defines, and rank candidates with clear reasons for review." },
      { title: "Interview scheduling", desc: "Offer candidates available slots, book panels, send calendar invites, and handle rescheduling automatically." },
      { title: "Candidate communication", desc: "Keep applicants informed at each stage with personalised updates by WhatsApp and email." },
      { title: "Digital onboarding", desc: "Collect documents, trigger IT and asset requests, assign induction tasks, and track completion." },
      { title: "Leave and attendance workflows", desc: "Automate leave approvals, attendance regularisation, and exception alerts for managers." },
      { title: "Employee HR helpdesk", desc: "Answer policy, payroll, and benefits questions instantly from your HR handbook with an AI assistant." },
    ],
    deliverables: [
      { title: "Applicant pipeline", desc: "Unified candidate database with parsing, deduplication, and stage tracking." },
      { title: "Screening assistant", desc: "Criteria-based scoring with explanations, bias-conscious design, and human approval." },
      { title: "Scheduling automation", desc: "Calendar integration with Google Workspace and Microsoft 365, and panel availability matching." },
      { title: "Onboarding workflows", desc: "Document collection portal, task checklists, and approvals across HR, IT, and finance." },
      { title: "HR knowledge assistant", desc: "An assistant grounded in your policies, with escalation to HR for sensitive matters." },
      { title: "HRMS and payroll integration", desc: "Data sync with Zoho People, greytHR, Keka, or custom systems." },
    ],
    stack: ["OpenAI / Claude (parsing and screening)", "Resume parsing", "Google Workspace & Microsoft 365 calendars", "WhatsApp Business Platform", "Zoho People / greytHR / Keka APIs", "n8n", "Node.js", "Python", "PostgreSQL", "RAG (pgvector)"],
    faqs: [
      { q: "Can AI screen resumes?", a: "Yes. AI can parse resumes and assess them against criteria your hiring team defines, ranking candidates with explanations. We design screening to support human decisions, exclude irrelevant personal attributes, and require human review before rejection." },
      { q: "Is AI resume screening fair?", a: "It can be more consistent than rushed manual screening if designed carefully, but it can also reproduce bias if built on biased history. We use explicit job criteria rather than historical hiring outcomes, provide transparent reasoning, and recommend periodic audits of outcomes." },
      { q: "Can interview scheduling be fully automated?", a: "Yes. Candidates choose from available panel slots, invitations and reminders are sent automatically, and rescheduling updates every calendar without HR coordination." },
      { q: "How much does HR automation cost?", a: "Focused automations such as interview scheduling or onboarding document collection typically start from $1,200. Recruitment platforms with AI screening, candidate portals, and HRMS integration usually range from $5,000–18,000." },
      { q: "Can an AI chatbot answer employee HR questions?", a: "Yes. An HR assistant grounded in your handbook and policies answers questions about leave, payroll dates, reimbursements, and benefits, and escalates sensitive or personal matters to HR staff." },
      { q: "Does it integrate with greytHR, Keka, or Zoho People?", a: "Yes. We integrate with these HRMS platforms through their APIs to sync employee records, leave, attendance, and onboarding data." },
      { q: "Is employee data safe with HR automation?", a: "We apply role-based access, encryption, masking of identifiers, retention policies, and audit logs aligned with India's DPDP Act, and can host within Indian cloud regions." },
      { q: "How do we start an HR automation project?", a: `${CONTACT_CTA} with your hiring volume, HR tools, and the HR task that takes the most time. We review it in a free call and send a proposal within 48 hours.` },
    ],
    related: ["rag-knowledge-base-ai", "business-process-automation", "ai-agent-development", "invoice-document-ai"],
    relatedServices: automationServices,
  },
];
