import type { MarketPage } from "./types";

const CONTACT_CTA = "WhatsApp +91 95444 51720 or email rahulrp@stacklyn.in";

/** High-intent pages for EU/EEA and North Sea buyers. Legal requirements remain client-specific. */
export const europeMarketPages: MarketPage[] = [
  {
    slug: "ai-automation-services-europe",
    name: "AI Automation Services for European Businesses",
    region: "Europe",
    areaServed: ["DE", "NL", "IE", "SE", "DK", "FI", "NO", "FR", "BE", "AT"],
    metaTitle: "AI Automation Services for European Businesses | GDPR-Aware AI Delivery | Stacklyn",
    metaDescription:
      "Custom AI automation for European businesses: AI agents, document processing, knowledge assistants, CRM workflows, and review-ready delivery designed around your data and approval requirements.",
    keywords:
      "AI automation services Europe, AI agent development Europe, GDPR aware AI automation, European business process automation, AI document processing Europe, AI workflow automation agency, AI implementation partner EU, custom AI development Europe",
    eyebrow: "Europe · AI Agents · Workflow Automation · Human Review · Client-Controlled Data",
    headline: "Practical AI Automation for European Businesses",
    intro:
      "Stacklyn builds AI automation for European teams that need useful results without treating privacy, governance, or operational control as an afterthought. We connect approved models to defined workflows—documents, internal knowledge, CRM, support, and reporting—then build the access controls, evaluation, and review paths your team needs before a system acts on real work.",
    context: {
      heading: "Start with an operational result, then design the AI around it",
      body:
        "The best first AI project is usually a narrow workflow with clear evidence and a measurable result: extract information from incoming documents, prepare a response from approved policies, route a customer request, or assemble a draft update in a CRM. We map the workflow, systems, data access, and exception path before choosing models or writing prompts. That gives teams something they can test with real examples and scale only when it proves reliable.",
    },
    keyFacts: [
      { label: "Useful starting points", value: "Document intake, internal knowledge search, support triage, CRM updates, recurring reports, and human-reviewed customer communications" },
      { label: "Data delivery approach", value: "Client-approved data flows, least-privilege access, documented subprocessors where relevant, and customer-controlled accounts where practical" },
      { label: "AI Act readiness", value: "Clear AI disclosure where required, documented use case, evaluation evidence, human oversight, and traceable changes—not a generic compliance claim" },
      { label: "Working rhythm", value: "Agreed European-time overlap for planning and demos, with India-based engineering progress between decision windows" },
      { label: "Typical starting point", value: "Focused workflow automations start from $2,500; supervised AI agent pilots generally start from $6,000" },
    ],
    compliance: {
      heading: "Built to support a responsible European rollout",
      points: [
        { title: "Defined purpose and owner", desc: "We document the task, intended users, approved data, outputs, and accountable business owner before an automation gets production access." },
        { title: "Human oversight by design", desc: "High-impact workflows can prepare work and surface evidence, while an authorised person reviews the action, correction, or escalation." },
        { title: "Privacy-aware system design", desc: "We minimise data sent to each service, identify processors and subprocessors with the client, and work within the client’s chosen data and hosting approach." },
        { title: "Evaluation and change control", desc: "Representative test cases, release criteria, output review, and a documented rollback path make the system measurable after launch." },
      ],
    },
    solutions: [
      { title: "AI Agents for Back-Office Work", desc: "Controlled agents that collect approved information, prepare a draft, and hand decisions to the person responsible." },
      { title: "AI Document Processing", desc: "Extract, validate, classify, and route invoices, forms, reports, and supplier documents into your existing systems." },
      { title: "Private Knowledge Assistants", desc: "Source-linked answers from approved SOPs, contracts, product documentation, and internal policies with access control." },
      { title: "CRM and Service Automation", desc: "Route leads, summarise conversations, create structured follow-ups, and handle repetitive support work with review gates." },
      { title: "AI Evaluation Harnesses", desc: "Repeatable tests for accuracy, source quality, escalation behaviour, and regressions when models or prompts change." },
      { title: "Workflow Integration", desc: "API and automation engineering across cloud storage, CRM, help desk, email, databases, and internal tools." },
    ],
    delivery: [
      { title: "Workflow discovery", desc: "We establish the current process, data boundary, owner, risks, and a business measure before implementation." },
      { title: "Supervised pilot", desc: "The first release works with a review queue and visible feedback, giving users a safe way to validate it on real cases." },
      { title: "Weekly working demos", desc: "European stakeholders see a live product each week and decide the next priority from evidence, not status slides." },
      { title: "Handover and ownership", desc: "Your team receives code, configuration, test cases, documentation, and access in accounts you control where practical." },
    ],
    faqs: [
      { q: "What AI automation services do you provide in Europe?", a: "We build AI-supported document workflows, knowledge assistants, CRM and support automation, operational reporting, and supervised agents integrated with the systems your team already uses." },
      { q: "Can an India-based team deliver AI automation for a European company?", a: "Yes. We use an agreed European-time overlap for decisions and demos, then progress asynchronously. The engagement can use client-owned repositories, cloud accounts, access rules, and documented delivery milestones." },
      { q: "Is the AI automation GDPR compliant?", a: "Compliance depends on the client’s use case, data, contracts, hosting, vendors, and legal obligations. We design for data minimisation, access control, documented processing, and reviewable data flows, but your organisation should obtain appropriate legal and privacy advice." },
      { q: "How do you prepare a project for the EU AI Act?", a: "We define the use case and owner, map the data and permissions, test outputs, provide human review for material actions, and document release and change decisions. Exact obligations depend on the role and system, so specialist legal review may be needed." },
      { q: "Can you connect AI to our CRM, help desk, or document repository?", a: "Usually yes, through approved APIs and controlled exports. Discovery covers access, data categories, user permissions, logging, and how a failure should be handled before the connection is enabled." },
      { q: "How much does AI automation cost?", a: "Focused workflow automations usually start from $2,500. A supervised agent pilot with integrations and evaluation generally starts from $6,000. Larger programmes are scoped in phases after discovery." },
      { q: "How do we start an AI automation project?", a: `${CONTACT_CTA} with the workflow, current tools, rough volume, countries involved, and the result you want. We will tell you whether it is a sensible first automation candidate.` },
    ],
    related: ["hire-indian-developers-europe", "north-sea-oil-gas-software", "ai-automation-services-usa"],
    relatedLinks: [
      { name: "AI Agent Development", href: "/ai-automation/ai-agent-development" },
      { name: "Private Knowledge Base AI", href: "/ai-automation/rag-knowledge-base-ai" },
      { name: "Business Process Automation", href: "/ai-automation/business-process-automation" },
      { name: "AI Development", href: "/services/ai-development" },
    ],
  },
  {
    slug: "hire-indian-developers-europe",
    name: "Hire India-Based Developers for European Companies",
    region: "Europe",
    areaServed: ["DE", "NL", "IE", "SE", "DK", "FI", "NO", "FR", "BE", "AT"],
    metaTitle: "Hire India-Based Developers for European Companies | Dedicated Software Team | Stacklyn",
    metaDescription:
      "Hire senior India-based developers for European product teams. React, Node.js, AI, and full-stack delivery with documented IP, customer-controlled repositories, agreed overlap, and weekly working demos.",
    keywords:
      "hire Indian developers Europe, offshore development team Europe India, dedicated software developers India EU, hire full stack developers Europe, India-based development team GDPR, software outsourcing Europe India, remote developers for European startup",
    eyebrow: "Europe · Dedicated Developers · Full Stack & AI · Product Ownership · Weekly Demos",
    headline: "A Senior India-Based Engineering Team for Your European Product Roadmap",
    intro:
      "Stacklyn helps European product teams and growing businesses deliver software with a stable India-based team. We work in your repository and delivery process, build around your architecture and priorities, and keep progress visible through written decisions, pull requests, weekly demos, and an agreed overlap window.",
    context: {
      heading: "Remote delivery works when ownership and evidence are visible",
      body:
        "Cost is only one reason to work with an offshore team. The stronger reason is reliable access to senior product, backend, frontend, and AI capacity without turning an interconnected roadmap into a collection of disconnected freelance tickets. We use a delivery model that makes code, cloud access, technical decisions, and each week's working output inspectable by the client.",
    },
    keyFacts: [
      { label: "Core capability", value: "React, Next.js, Node.js, TypeScript, PostgreSQL, cloud APIs, AI features, document workflows, and product engineering" },
      { label: "Delivery model", value: "Fixed-scope discovery or sprint, a dedicated senior developer, or a small cross-functional product team" },
      { label: "Working rhythm", value: "European-time planning and demo overlap, with asynchronous updates and documented decisions throughout the week" },
      { label: "Client control", value: "Client repository, code review, project tracker, deployment access, documentation, and handover built into delivery" },
      { label: "Data handling", value: "Access is scoped to the role and task; client privacy and legal teams determine the required processor and transfer arrangements" },
    ],
    compliance: {
      heading: "A delivery foundation that supports due diligence",
      points: [
        { title: "Client-owned development environment", desc: "Work can take place in the client’s GitHub or GitLab organisation with reviewable history and permissions controlled by the client." },
        { title: "IP and confidentiality", desc: "We can sign an NDA before detailed discovery and assign the project code and IP under the engagement agreement." },
        { title: "Scoped data access", desc: "We use only the access required for delivery and help document vendors, environments, and subprocessors for the client’s review." },
        { title: "Structured handover", desc: "Documentation, deployment notes, test coverage, infrastructure access, and a clean backlog prevent knowledge from living with one vendor." },
      ],
    },
    solutions: [
      { title: "MVP and SaaS Delivery", desc: "Build a product from discovery through production release with a roadmap for post-launch improvement." },
      { title: "Dedicated Full-Stack Capacity", desc: "Senior engineers embedded in your sprint cycle for features, technical debt, integrations, testing, and production support." },
      { title: "AI Product Engineering", desc: "RAG, document AI, evaluations, governed agents, and workflow automation added to an existing European product." },
      { title: "Backend and API Modernisation", desc: "Improve APIs, data models, authentication, jobs, observability, and integration boundaries without stopping product delivery." },
      { title: "Codebase Stabilisation", desc: "Audit an inherited product, resolve release risks, establish technical documentation, and create a credible delivery plan." },
      { title: "Internal Business Software", desc: "Custom platforms and workflow tools for teams outgrowing spreadsheets and disconnected SaaS products." },
    ],
    delivery: [
      { title: "Discovery with a usable outcome", desc: "We turn the product problem into architecture, milestones, assumptions, and risks you can evaluate before a longer commitment." },
      { title: "Working software every week", desc: "Demos, pull requests, deployments, and test evidence are the core progress signal—not hours logged or generic status reports." },
      { title: "Decisions documented in context", desc: "The team records architecture and product trade-offs where your stakeholders can find and review them later." },
      { title: "Scale only when the roadmap requires it", desc: "Begin with a critical feature or one senior developer, then add design, QA, backend, or AI skills as the product proves the need." },
    ],
    faqs: [
      { q: "Can a European company hire developers in India?", a: "Yes. European companies commonly work with India-based developers through a services engagement. A sound setup covers scope, code ownership, confidentiality, access, data-processing roles, transfer requirements where applicable, and handover." },
      { q: "How do you work with European time zones from India?", a: "We agree recurring overlap for planning and decisions, then use written briefs, tracked work, pull requests, and weekly demos. The time difference supports uninterrupted delivery without making every meeting late at night." },
      { q: "Will our European company own the source code?", a: "Yes. Project source code and IP are assigned under the engagement agreement. We can work in repositories, cloud accounts, domains, and analytics accounts controlled by the client." },
      { q: "Can you work within our GDPR and security process?", a: "We can support your process by documenting systems, access, vendors, and data flows, and by following your approved technical controls. Your privacy and legal owners determine the specific contractual and transfer requirements." },
      { q: "Is a freelancer or a dedicated development team better?", a: "A freelancer can suit a narrow standalone task. A dedicated team is normally better when a roadmap crosses frontend, backend, testing, deployment, integrations, and ongoing product decisions." },
      { q: "What does a dedicated India-based developer cost for a European company?", a: "Dedicated senior developers generally range from $2,500–4,000 per month depending on the role and commitment. Fixed feature sprints are quoted against written acceptance criteria." },
      { q: "How do we begin?", a: `${CONTACT_CTA} with your product, technology stack, next-quarter goal, country, and whether you need a fixed project or ongoing delivery capacity.` },
    ],
    related: ["ai-automation-services-europe", "north-sea-oil-gas-software", "hire-indian-developers-usa"],
    relatedLinks: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "MVP Development", href: "/services/mvp-development" },
      { name: "Hire AI Developers", href: "/hire-ai-developer" },
      { name: "Hire Backend Developers", href: "/hire-backend-developer" },
    ],
  },
  {
    slug: "north-sea-oil-gas-software",
    name: "North Sea Oil & Gas Software",
    region: "Norway, Denmark, Netherlands & United Kingdom",
    areaServed: ["NO", "DK", "NL", "GB"],
    metaTitle: "North Sea Oil & Gas Software | HSE, Field Operations & AI Workflows | Stacklyn",
    metaDescription:
      "Custom oil and gas software for North Sea operators, service companies, and EPC contractors: HSE workflows, inspection reporting, permit preparation, field apps, procedure search, and governed AI automation.",
    keywords:
      "North Sea oil gas software, Norway oil gas software development, offshore operations software Europe, HSE software North Sea, oilfield inspection app Norway, permit to work software Europe, offshore field service software, oil gas AI automation Europe",
    eyebrow: "North Sea · Oil & Gas · HSE Workflows · Field Operations · Governed AI Assistance",
    headline: "Operational Software for North Sea Energy and Industrial Teams",
    intro:
      "Stacklyn builds custom software for North Sea operators, contractors, and industrial service teams that need clearer field workflows, traceable HSE processes, faster reporting, and better access to approved operational knowledge. We connect the system to the controls and source-of-truth platforms you already use, then keep qualified people responsible for safety-critical decisions.",
    context: {
      heading: "The valuable digital project is an operational workflow people will actually use",
      body:
        "Offshore and field operations already run on work orders, inspections, permits, isolation procedures, maintenance records, and disciplined approval paths. The opportunity is to reduce the admin around that work: capture a report once, validate required fields, retrieve the right procedure, prepare a review-ready permit, or provide a supervisor with a credible daily picture. We build the workflow around the real decision and leave final safety and operational authority with qualified personnel.",
    },
    keyFacts: [
      { label: "Relevant workflows", value: "Inspection reporting, HSE observations, permit preparation, competency tracking, maintenance requests, contractor records, field service, and daily operations reporting" },
      { label: "Field delivery", value: "Mobile-first interfaces, offline-capable capture where needed, photo and attachment workflows, and role-based approvals" },
      { label: "AI boundaries", value: "AI can extract, search, classify, draft, and flag gaps; it should not become the final authority for safety-critical or regulatory decisions" },
      { label: "Integration approach", value: "Read-only or controlled API integration with client-approved document stores, CMMS, ERP, data historians, and operational systems" },
      { label: "Delivery model", value: "Discovery and pilot first, then phased rollout based on field feedback, adoption, and measurable workflow outcomes" },
    ],
    compliance: {
      heading: "Designed for traceability and controlled operations",
      points: [
        { title: "Qualified decisions remain human", desc: "The system can prepare, check, and retrieve evidence, while the authorised supervisor or engineer remains responsible for approval and action." },
        { title: "Evidence and audit trail", desc: "Records retain the relevant input, user, timestamp, attachment, approval, and correction required to understand how work moved through the process." },
        { title: "Role-based access", desc: "Field users, supervisors, contractors, and administrators see and change only what their role needs." },
        { title: "Source system stays authoritative", desc: "AI and workflow layers support trusted operational systems rather than silently becoming a second uncontrolled record of truth." },
      ],
    },
    solutions: [
      { title: "Digital Permit and Work Preparation", desc: "Prepare, validate, route, and audit permit and work-planning data while preserving qualified approval gates." },
      { title: "HSE and Inspection Reporting", desc: "Mobile reports, observations, corrective actions, photographs, trends, and management dashboards in one controlled process." },
      { title: "Procedure and Engineering Search", desc: "Private knowledge search that returns source-linked answers from approved documentation rather than an uncited generic response." },
      { title: "Field Operations Applications", desc: "Offline-capable tasks, checklists, handovers, workforce updates, and evidence capture designed for the people doing the work." },
      { title: "Maintenance and Defect Triage", desc: "Structured requests, missing-information checks, assignment, and work-order preparation integrated with the client’s operational process." },
      { title: "Governed Industrial AI", desc: "Document extraction, reporting assistance, and knowledge workflows with limited permissions, evaluation, and human review." },
    ],
    delivery: [
      { title: "Field workflow discovery", desc: "We observe the existing decision path, records, users, constraints, and measures of success before choosing screens or automation." },
      { title: "Pilot one defined workflow", desc: "A focused pilot earns adoption by proving it works with real reports, users, environments, and exception cases." },
      { title: "Integrate carefully", desc: "Initial integrations are read-only or tightly scoped, with production write access added only when users and owners approve." },
      { title: "Measure improvement", desc: "We track completion quality, time to close, rework, exceptions, and user feedback so the next phase is evidence-led." },
    ],
    faqs: [
      { q: "What software do North Sea oil and gas teams need?", a: "Common needs include permit and work preparation, HSE reporting, inspections, maintenance and defect workflows, contractor records, field mobility, document control, and operational reporting. The right scope depends on the current process and existing systems." },
      { q: "Can AI be used in offshore operations?", a: "AI can assist with document extraction, procedure search, report drafting, inspection classification, and data summaries. It should not replace qualified safety, engineering, permit, isolation, or emergency-response decisions." },
      { q: "Can the software work offline in the field?", a: "Yes. Field workflows can be designed to capture forms, photographs, and checklists offline, then synchronise through approved processes when connectivity returns." },
      { q: "Can you integrate with our CMMS or document management system?", a: "Usually, yes. We begin with approved access and a defined integration boundary, often read-only, then validate data quality and user ownership before expanding the connection." },
      { q: "How much does custom oil and gas software cost?", a: "A focused discovery or workflow pilot is normally scoped first. Custom operational software typically starts from $6,000 for a contained pilot and expands in phases after the real data, users, and interfaces are understood." },
      { q: "How do we start?", a: `${CONTACT_CTA} with the operational workflow, current tools, locations, user groups, and the outcome you want to improve. We will recommend a realistic first pilot.` },
    ],
    related: ["ai-automation-services-europe", "hire-indian-developers-europe", "oil-gas-software-outsourcing-india", "oil-gas-software-united-states"],
    relatedLinks: [
      { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
      { name: "HSE & Compliance Software", href: "/industries/hse-compliance-software" },
      { name: "AI Document Processing", href: "/ai-automation/invoice-document-ai" },
      { name: "Permit to Work Guide", href: "/blog/what-is-permit-to-work-system" },
    ],
  },
];
