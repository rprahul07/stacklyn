import type { MarketPage } from "./types";

const CONTACT_CTA = "WhatsApp +91 95444 51720 or email rahulrp@stacklyn.in";

/** High-intent pages for US buyers. Each addresses a different purchase decision. */
export const usMarketPages: MarketPage[] = [
  {
    slug: "ai-automation-services-usa",
    name: "AI Automation Services for US Businesses",
    region: "United States",
    areaServed: ["US"],
    metaTitle:
      "AI Automation Services for US Businesses | AI Agents & Workflow Automation | Stacklyn",
    metaDescription:
      "Custom AI automation for US businesses: AI agents, document processing, support assistants, CRM workflows, and human-approved automations. Built by a senior India-based engineering team.",
    keywords:
      "AI automation services USA, AI agent development company USA, custom business automation USA, AI workflow automation services, AI automation agency for small business, AI document processing company, AI CRM automation, offshore AI development team India USA, AI implementation partner USA",
    eyebrow:
      "US Businesses · AI Agents · Workflow Automation · Human Approval · Senior Engineering Team",
    headline: "AI Automation That Actually Completes Work for US Businesses",
    intro:
      "Stacklyn builds practical AI automation for US businesses that want more than a chatbot. We connect AI agents to the systems your team already uses—CRM, inbox, documents, knowledge bases, and operations tools—then add the evaluations, permissions, and human approvals needed to use them safely in real work.",
    context: {
      heading: "The useful AI project is usually a narrow workflow, not a company-wide experiment",
      body: "US businesses are under pressure to adopt AI while protecting customer data and avoiding unreliable outputs. The best first project is a repetitive workflow with clear inputs, a measurable result, and a person who can approve exceptions: qualify inbound leads, extract data from documents, draft a response from approved knowledge, prepare a CRM update, or route a service request. We build that workflow around your process, measure it on historical examples, and expand only after it proves reliable.",
    },
    keyFacts: [
      {
        label: "Good first use cases",
        value:
          "Document intake, customer support triage, CRM updates, sales research, internal knowledge search, and recurring operations reports",
      },
      {
        label: "Risk approach",
        value:
          "Role-based access, limited tool permissions, review queues, test cases, audit logs, and an explicit human approval step for meaningful actions",
      },
      {
        label: "US time zones",
        value:
          "Dedicated overlap for planning, demos, and support; India-based development continues while your US team is offline",
      },
      {
        label: "Engagement models",
        value:
          "Fixed-scope pilot, ongoing product team, or a dedicated senior engineer for an established roadmap",
      },
      {
        label: "Typical starting point",
        value:
          "Focused workflow automations start from $2,500; supervised AI agent pilots generally start from $6,000",
      },
    ],
    compliance: {
      heading: "Designed for trustworthy AI adoption, not unattended experiments",
      points: [
        {
          title: "Defined use case before model choice",
          desc: "We map the decision, inputs, outputs, owners, and failure modes first. A model is then selected for the job rather than used as a substitute for a workflow.",
        },
        {
          title: "Evaluation before rollout",
          desc: "We test outputs against representative historical tasks, measure accuracy and escalation rates, and set a release threshold together before users rely on the automation.",
        },
        {
          title: "Least-privilege tool access",
          desc: "An agent receives only the tools and data it needs for a defined task. Sensitive actions can create a draft or approval request instead of changing a system directly.",
        },
        {
          title: "Data boundaries and logs",
          desc: "We document which data reaches each provider, configure retention to suit the project, and record meaningful agent actions so your team can investigate or improve them.",
        },
      ],
    },
    solutions: [
      {
        title: "AI Agents for Operations",
        desc: "Agents that triage requests, gather information across approved systems, prepare work for a human, and log the outcome.",
      },
      {
        title: "AI Document Processing",
        desc: "Extract, validate, classify, and route information from invoices, forms, inspection reports, and customer documents—without manual rekeying.",
      },
      {
        title: "Private Knowledge Assistants",
        desc: "RAG-based assistants that answer from your approved policies, product documents, and support knowledge with source links and access controls.",
      },
      {
        title: "Sales & CRM Automation",
        desc: "Enrich leads, summarize calls, draft follow-ups, update records, flag stalled opportunities, and keep a human in charge of outreach.",
      },
      {
        title: "Customer Support Automation",
        desc: "Classify tickets, retrieve approved answers, create support drafts, and hand off high-risk or uncertain cases to the right person.",
      },
      {
        title: "Automation Evaluation Harnesses",
        desc: "Repeatable test suites that catch regressions when prompts, models, tools, or business rules change.",
      },
    ],
    delivery: [
      {
        title: "Two-week discovery",
        desc: "We identify the workflow, baseline its current time and error rate, map the systems involved, and define a success measure.",
      },
      {
        title: "Supervised pilot",
        desc: "The first version works alongside your team with approval gates and clear feedback collection—not in the dark.",
      },
      {
        title: "Weekly working demos",
        desc: "You review a live environment every week, with an agreed US-time-zone meeting window.",
      },
      {
        title: "Ownership and handover",
        desc: "You retain source code, prompts, documentation, test cases, cloud access, and the option to continue with your own team.",
      },
    ],
    faqs: [
      {
        q: "What are AI automation services?",
        a: "AI automation services combine AI models with your business systems to complete or assist with a defined workflow. Examples include extracting invoice data, triaging support tickets, drafting responses from a knowledge base, researching leads, and preparing CRM updates.",
      },
      {
        q: "What is the difference between an AI agent and workflow automation?",
        a: "Workflow automation follows predefined steps. An AI agent can interpret unstructured inputs and choose among approved actions, but needs stronger controls such as limited permissions, evaluations, and human approval for important decisions. Most valuable systems combine both.",
      },
      {
        q: "Can an India-based AI team work with a US company?",
        a: "Yes. We plan and demo during agreed US-time-zone overlap, then use the India time difference for development progress while your team is offline. Source code, cloud accounts, documentation, and project communication stay visible to your team.",
      },
      {
        q: "How do you keep AI automation reliable?",
        a: "We narrow the workflow, test it against real historical examples, define what should be escalated, restrict tools and data, log outcomes, and keep human approval where an error would be costly.",
      },
      {
        q: "Can you use our existing CRM and SaaS tools?",
        a: "Yes. We commonly work with API-connected CRMs, ticketing tools, email, cloud storage, databases, accounting systems, and internal knowledge bases. We assess API access and data boundaries during discovery.",
      },
      {
        q: "Do you build with OpenAI, Anthropic, or open-source models?",
        a: "Yes. We choose a model based on the task, data controls, latency, cost, and quality requirements. The design keeps the business workflow and evaluation suite independent enough that models can be changed later.",
      },
      {
        q: "How much does AI automation cost?",
        a: "Small workflow automations usually start from $2,500. Supervised AI agent pilots with integrations and evaluation typically start from $6,000. Multi-department platforms are scoped in phases after discovery.",
      },
      {
        q: "How do we start an AI automation project?",
        a: `${CONTACT_CTA} with the repetitive task, current tools, approximate weekly volume, and the outcome you want. We will suggest whether it is a good automation candidate and reply within 24 hours.`,
      },
    ],
    related: [
      "hire-indian-developers-usa",
      "oil-gas-software-united-states",
      "oil-gas-software-outsourcing-india",
    ],
    relatedLinks: [
      { name: "AI Agent Development", href: "/ai-automation/ai-agent-development" },
      { name: "Business Process Automation", href: "/ai-automation/business-process-automation" },
      { name: "AI Document Processing", href: "/ai-automation/invoice-document-ai" },
      { name: "AI Development", href: "/services/ai-development" },
    ],
  },
  {
    slug: "hire-indian-developers-usa",
    name: "Hire Indian Developers for US Startups",
    region: "United States",
    areaServed: ["US"],
    metaTitle:
      "Hire Indian Software Developers for US Startups | Dedicated Development Team | Stacklyn",
    metaDescription:
      "Hire senior India-based developers for your US startup or business. Dedicated React, Node.js, AI, and full-stack engineers with clear overlap, IP assignment, weekly demos, and US-friendly delivery.",
    keywords:
      "hire Indian developers USA, dedicated development team India for US startup, offshore software development team India USA, hire full stack developer India US, Indian developers for US startup, remote software development team India, hire AI developers India USA, freelance software developers India for US companies",
    eyebrow:
      "US Startups & SMBs · Dedicated Developers · AI & Full Stack · Clear Overlap · IP Assignment",
    headline: "Hire a Senior India-Based Development Team for Your US Product Roadmap",
    intro:
      "Stacklyn gives US startups and growing businesses direct access to senior India-based developers for React, Node.js, full-stack products, backend systems, and AI features. We are a small engineering partner—not a freelancer marketplace—so you get a stable team, accountable delivery, documented work, and code you own.",
    context: {
      heading:
        "Freelance speed is useful; an accountable engineering team is better for the product that follows",
      body: "US businesses often begin with a freelance hire because a specific feature needs to move fast. That can work for a tightly bounded task. Once the roadmap spans architecture, integrations, production reliability, or AI, the higher-value model is a stable senior team with a shared codebase, written decisions, test coverage, and a clear owner for delivery. We offer the flexibility US buyers seek from independent talent without making the project depend on one unavailable person.",
    },
    keyFacts: [
      {
        label: "Core expertise",
        value:
          "React, Next.js, Node.js, TypeScript, PostgreSQL, cloud systems, APIs, AI features, and workflow automation",
      },
      {
        label: "US working rhythm",
        value:
          "Overnight development plus an agreed overlap window for stand-ups, demos, decisions, and urgent questions",
      },
      {
        label: "Engagement options",
        value:
          "Fixed-price discovery or feature sprint, one dedicated senior developer, or a blended product team",
      },
      {
        label: "Commercial clarity",
        value:
          "Milestones, written scope, weekly demos, predictable billing, and no recruitment fees or marketplace markups",
      },
      {
        label: "IP and access",
        value:
          "NDA, source-code ownership, repository access, and deployment in your cloud account where practical",
      },
    ],
    compliance: {
      heading: "A delivery model designed for a US buyer's due diligence",
      points: [
        {
          title: "Your repository from day one",
          desc: "Code lives in your GitHub or GitLab organisation, with reviewable commits, pull requests, and visible project history.",
        },
        {
          title: "NDA and IP assignment",
          desc: "We can sign a mutual NDA before detailed discovery and assign project source code and intellectual property to you on delivery.",
        },
        {
          title: "Your accounts wherever possible",
          desc: "Cloud, analytics, app-store, and production credentials stay under your control instead of becoming vendor-owned infrastructure.",
        },
        {
          title: "Predictable communication",
          desc: "Shared tracker, weekly recorded demo, written decision log, and an agreed escalation channel ensure distance never becomes silence.",
        },
      ],
    },
    solutions: [
      {
        title: "Startup MVP & SaaS Development",
        desc: "A focused team to turn a validated problem into a secure, deployable product with a roadmap for what comes after launch.",
      },
      {
        title: "Dedicated Full-Stack Developers",
        desc: "Senior engineers embedded in your planning cycle for feature delivery, technical debt, integrations, and production support.",
      },
      {
        title: "AI Product Features",
        desc: "RAG, document AI, agents, evaluations, and safe workflow automation integrated into an existing US product.",
      },
      {
        title: "Backend & API Modernisation",
        desc: "Build or replace APIs, data models, auth, background jobs, and operational tooling without pausing the whole product.",
      },
      {
        title: "Rescue & Stabilisation Sprints",
        desc: "Audit an existing codebase, fix the release blockers, document the architecture, and create a credible next-quarter plan.",
      },
      {
        title: "Internal Operations Software",
        desc: "Custom portals and workflow automation for teams that have outgrown spreadsheets and disconnected SaaS tools.",
      },
    ],
    delivery: [
      {
        title: "Discovery before commitment",
        desc: "A short paid or fixed-scope discovery produces architecture, milestones, risks, and a delivery plan you can use regardless of who builds it.",
      },
      {
        title: "Weekly demos over status decks",
        desc: "You see working software and give feedback every week—not a slide deck at the end of the month.",
      },
      {
        title: "A team that stays with the code",
        desc: "We maintain context across releases instead of handing work between unrelated marketplace freelancers.",
      },
      {
        title: "Flexible scale",
        desc: "Start with a critical feature or one developer, then add design, QA, backend, or AI capacity only when the roadmap justifies it.",
      },
    ],
    faqs: [
      {
        q: "Can a US startup hire developers in India directly?",
        a: "Yes. US companies regularly work with India-based software teams through a services agreement or contractor arrangement. A good engagement defines IP ownership, data access, communication windows, scope, and acceptance criteria before work begins.",
      },
      {
        q: "What is the difference between a freelancer and a dedicated development team?",
        a: "A freelancer is often ideal for a narrow, standalone task. A dedicated team gives you continuity across product decisions, code review, testing, deployment, documentation, and ongoing maintenance. It reduces the single-person dependency for a product roadmap.",
      },
      {
        q: "How do you work with US time zones from India?",
        a: "We agree a recurring overlap window for planning and decisions, use asynchronous written updates for the rest, and complete development work while US teams are offline. This creates progress around the clock without requiring late-night meetings every day.",
      },
      {
        q: "Will we own the code?",
        a: "Yes. Project source code and intellectual property are assigned to you under the engagement agreement. We also work in repositories and cloud accounts you control wherever practical.",
      },
      {
        q: "Can you join an existing US engineering team?",
        a: "Yes. We can work within your existing repository, CI/CD process, design system, backlog, and security practices. A short onboarding and codebase review comes before feature work.",
      },
      {
        q: "What technologies do your developers use?",
        a: "Our core stack is TypeScript, React, Next.js, Node.js, PostgreSQL, cloud APIs, and AI integrations. We choose technologies around your current codebase and business constraints rather than forcing a standard stack.",
      },
      {
        q: "What does a dedicated India-based developer cost for a US company?",
        a: "Dedicated senior developers generally range from $2,500–4,000 per month depending on the role and commitment. Fixed-scope feature sprints are quoted against a written scope. We recommend starting with the smallest project that proves working fit.",
      },
      {
        q: "How do we start?",
        a: `${CONTACT_CTA} with your product, the outcome you need in the next 90 days, your current stack, and whether you need a fixed project or ongoing capacity. We reply within 24 hours.`,
      },
    ],
    related: [
      "ai-automation-services-usa",
      "oil-gas-software-united-states",
      "oil-gas-software-outsourcing-india",
    ],
    relatedLinks: [
      { name: "Hire AI Developers", href: "/hire-ai-developer" },
      { name: "Hire Next.js Developers", href: "/hire-nextjs-developer" },
      { name: "Hire Backend Developers", href: "/hire-backend-developer" },
      { name: "Custom Software Development", href: "/services/custom-software-development" },
    ],
  },
  {
    slug: "oil-gas-software-united-states",
    name: "Oil & Gas Software for US Operators",
    region: "United States",
    areaServed: ["US"],
    metaTitle:
      "Custom Oil & Gas Software Development for US Operators | HSE, PTW & Field Apps | Stacklyn",
    metaDescription:
      "Custom oil and gas software for US operators and service companies: digital permit to work, HSE, field inspections, production dashboards, crew competency, and AI document automation.",
    keywords:
      "oil and gas software development USA, custom oilfield software, HSE software oil and gas USA, digital permit to work software USA, oilfield inspection app, oil gas field service software, production dashboard software, oil and gas AI automation, energy software development team India US",
    eyebrow:
      "US Operators & Service Companies · HSE · Digital PTW · Field Apps · Production Data · AI Documents",
    headline: "Custom Oil & Gas Software for US Operators and Service Companies",
    intro:
      "Stacklyn builds custom software for US oil and gas operations where off-the-shelf products do not fit the job: digital permits to work, HSE and inspection systems, field apps that work with poor connectivity, production and maintenance dashboards, crew competency records, and AI-assisted document workflows.",
    context: {
      heading: "Operational software has to follow the work—not just copy an enterprise template",
      body: "US upstream, midstream, and oilfield-service operations run on a combination of enterprise systems, spreadsheets, email, SCADA data, and field knowledge. A generic platform rarely captures local approval paths, specific inspection points, contractor workflows, or the records an operator needs to retrieve after an incident. We design a focused system around the actual task first, then integrate it with your existing systems where the value is clear.",
    },
    keyFacts: [
      {
        label: "Common users",
        value:
          "Operators, midstream companies, oilfield service providers, EPC contractors, and maintenance teams",
      },
      {
        label: "Operational focus",
        value:
          "Permit to work, inspections, incident follow-up, maintenance, contractor evidence, production visibility, and crew credentials",
      },
      {
        label: "Connectivity",
        value:
          "Offline-first mobile forms and delayed sync for remote pads, plants, yards, and field locations",
      },
      {
        label: "Regulatory context",
        value:
          "Designed from your documented OSHA, PHMSA, BSEE, state, customer, and company requirements; software does not replace legal or safety advice",
      },
      {
        label: "Delivery",
        value:
          "Pilot a single workflow first, prove it on real field data, then integrate and roll out in phases",
      },
    ],
    compliance: {
      heading: "Built for auditability in safety-critical workflows",
      points: [
        {
          title: "Configurable approvals and roles",
          desc: "Permit issuers, area authorities, performing authorities, contractors, and reviewers see only the actions and records appropriate to their role.",
        },
        {
          title: "Time-stamped field evidence",
          desc: "Forms can capture signatures, photos, readings, checklists, and timestamps so a record can be reviewed later without chasing email attachments.",
        },
        {
          title: "Controlled documents and revisions",
          desc: "Procedures, forms, and inspection templates have clear versions so field users are not acting on a superseded document.",
        },
        {
          title: "Integrations without uncontrolled data copies",
          desc: "We use API or governed export integrations for ERP, EAM, historian, and reporting systems, with defined ownership for each data set.",
        },
      ],
    },
    solutions: [
      {
        title: "Digital Permit to Work",
        desc: "Electronic permits, risk assessments, isolations, gas tests, extensions, handover, and closure—configured to your procedure.",
      },
      {
        title: "Field Inspection Applications",
        desc: "Offline inspection rounds, defect reports, photos, follow-up actions, and management dashboards for remote operations.",
      },
      {
        title: "HSE & Contractor Compliance",
        desc: "Incident and near-miss intake, corrective actions, competency tracking, audit schedules, and contractor documentation evidence.",
      },
      {
        title: "Maintenance & Reliability Workflows",
        desc: "Work-order intake, mobile rounds, condition observations, defect prioritisation, and integration paths to existing EAM or CMMS systems.",
      },
      {
        title: "Operations & Production Dashboards",
        desc: "Consolidated operational views built from trusted exports or APIs, with role-specific visibility for supervisors and management.",
      },
      {
        title: "AI Document and Knowledge Workflows",
        desc: "Extract structured data from inspection reports and certificates, or answer questions from approved procedures with source-linked results.",
      },
    ],
    delivery: [
      {
        title: "Field workflow workshop",
        desc: "We map the people, form, approval, systems, edge cases, and evidence requirements before writing code.",
      },
      {
        title: "Pilot one high-friction process",
        desc: "A digital PTW module, inspection workflow, or document extraction pilot proves adoption before a platform-sized commitment.",
      },
      {
        title: "Working reviews",
        desc: "Your operations and HSE stakeholders see software each week and test it against real scenarios early.",
      },
      {
        title: "Implementation handover",
        desc: "Configuration, test data, admin guidance, source code, and deployment documentation are delivered with the system.",
      },
    ],
    faqs: [
      {
        q: "What custom software do oil and gas companies use?",
        a: "Common custom systems include digital permit to work, HSE and incident management, field inspection apps, maintenance workflows, production dashboards, contractor compliance, crew competency tracking, and document automation. Custom software is useful where the operator's workflow does not match a packaged product.",
      },
      {
        q: "Can you build a digital permit to work system for a US oil and gas site?",
        a: "Yes. We build configurable digital PTW systems for permit types, risk assessments, isolations, gas testing, approvals, handover, extension, and closure. The workflow is built from your company's written procedure and operator requirements.",
      },
      {
        q: "Can a field app work without reliable internet?",
        a: "Yes. We can make field forms and inspections offline-first so users can capture records at remote locations and synchronise safely when connectivity returns.",
      },
      {
        q: "Can you integrate with our existing ERP, CMMS, or SCADA data?",
        a: "Yes, subject to the interface available. We can connect through APIs, controlled exports, or data pipelines and start with a read-only integration where that is the safest first step.",
      },
      {
        q: "Will the software make us OSHA or PHMSA compliant?",
        a: "Software can help enforce your approved workflow, maintain evidence, and make records easier to retrieve. It does not itself certify compliance or replace your legal, safety, or regulatory advisers.",
      },
      {
        q: "Can AI be used safely in oil and gas operations?",
        a: "AI is useful for bounded tasks such as extracting data from documents, searching approved procedures, and summarising reports. It should be evaluated, access-controlled, and kept out of safety-critical decisions unless your governance and validation support its use.",
      },
      {
        q: "How much does custom oil and gas software cost?",
        a: "A focused module such as an offline inspection app or digital PTW pilot generally starts from $6,000–14,000. An integrated operations platform with multiple modules and integrations is commonly delivered in phased projects from $25,000 upward.",
      },
      {
        q: "How do we start?",
        a: `${CONTACT_CTA} with the workflow causing the most field friction, its current forms or reports, and any existing systems involved. We respond within 24 hours and schedule in your US time zone.`,
      },
    ],
    related: [
      "ai-automation-services-usa",
      "hire-indian-developers-usa",
      "oil-gas-software-outsourcing-india",
    ],
    relatedLinks: [
      { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
      { name: "HSE & Compliance Software", href: "/industries/hse-compliance-software" },
      { name: "Permit to Work Guide", href: "/blog/what-is-permit-to-work-system" },
      { name: "AI Document Processing", href: "/ai-automation/invoice-document-ai" },
    ],
  },
];
