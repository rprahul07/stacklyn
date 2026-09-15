import type { AIAutomationPage } from "./types";

const CONTACT_CTA =
  "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720";

const aiServices = [
  { name: "AI Application Development", href: "/services/ai-development" },
  { name: "Hire AI Developer", href: "/hire-ai-developer" },
  { name: "Backend Development", href: "/services/backend-development" },
  { name: "Custom Software Development", href: "/services/custom-software-development" },
];

export const aiDevelopmentPages: AIAutomationPage[] = [
  // ------------------------------------------------------------------
  {
    slug: "ai-chatbot-development",
    category: "AI Development",
    name: "AI Chatbot Development",
    metaTitle: "AI Chatbot Development Company in Kerala, India | Stacklyn",
    metaDescription:
      "Stacklyn builds custom AI chatbots for Kerala and Indian businesses — website, WhatsApp, and in-app assistants trained on your own data, with Malayalam, Hindi, and English support.",
    keywords:
      "AI chatbot development Kerala, chatbot development company India, custom AI chatbot Kochi, GPT chatbot development India, AI chatbot for business Kerala, website chatbot development Trivandrum, AI assistant development India, Claude chatbot development, customer service chatbot India, chatbot company Kerala",
    eyebrow: "AI Chatbots · Website · WhatsApp · In-App · Trained on Your Data",
    headline: "AI Chatbot Development Company in Kerala, Serving Businesses Across India",
    intro:
      "Stacklyn designs and builds AI chatbots that answer from your own documents, catalogue, and policies — not from the open internet. We deploy them on your website, WhatsApp, and mobile apps, connect them to your CRM and booking systems, and hand over to a human the moment a conversation needs one.",
    context: {
      heading: "Why most business chatbots disappoint — and what changed",
      body:
        "The first generation of business chatbots were decision trees dressed up as conversation: press 1 for sales, type menu to start again. Customers learned to ignore them. Large language models raised the ceiling but introduced a new failure — confident answers that are simply wrong. A useful business chatbot today is an engineering problem more than a prompt: it retrieves answers from approved sources, refuses what it does not know, logs every conversation for review, and escalates cleanly to your team. That is the chatbot we build.",
    },
    localAngle: {
      heading: "Built for how Kerala and India actually communicate",
      points: [
        { title: "Malayalam, Manglish, Hindi, and English", desc: "Customers in Kerala switch between Malayalam script, Malayalam typed in English letters, and English within one conversation. We design and test for that mix instead of assuming clean English input." },
        { title: "WhatsApp first, website second", desc: "For most Indian businesses the real enquiry channel is WhatsApp, not the website widget. We deploy one assistant across both so answers stay consistent." },
        { title: "Gulf-timezone enquiries answered overnight", desc: "Kerala businesses serve a large NRI audience in the GCC. An assistant that qualifies and books enquiries overnight captures leads that would otherwise wait until morning." },
        { title: "DPDP Act-aware data handling", desc: "Conversation logs, consent, and personal data are handled with retention controls and access restrictions aligned to India's Digital Personal Data Protection Act." },
      ],
    },
    useCases: [
      { title: "Customer support deflection", desc: "Answer repeat questions on orders, fees, timings, policies, and service status instantly, routing only genuine exceptions to staff." },
      { title: "Lead qualification and booking", desc: "Capture requirement, budget, and timeline, then book site visits, consultations, or demos straight into your calendar or CRM." },
      { title: "Product and catalogue assistant", desc: "Help buyers find the right product or plan from a large catalogue using natural questions rather than filters." },
      { title: "Internal staff helpdesk", desc: "Give employees instant answers from HR policies, SOPs, and product manuals without waiting on a senior colleague." },
      { title: "Admission and enquiry desk", desc: "Handle course, eligibility, fee, and document questions for institutions during peak admission season." },
      { title: "After-sales and service requests", desc: "Log complaints, collect photos and order details, create tickets, and share status updates without a phone call." },
    ],
    deliverables: [
      { title: "Grounded answers from your data", desc: "Retrieval over your documents, website, and databases so the bot answers from approved sources and says so when it does not know." },
      { title: "Omnichannel deployment", desc: "One assistant on website chat, the WhatsApp Business Platform, Instagram, and in-app, sharing a single knowledge base." },
      { title: "Human handover", desc: "Seamless transfer to an agent inbox with the full conversation, customer details, and a suggested reply." },
      { title: "CRM and system integration", desc: "Read and write to Zoho, HubSpot, Salesforce, booking systems, or your custom database through secure APIs." },
      { title: "Admin console and analytics", desc: "Review conversations, correct answers, update knowledge, and track resolution, handover, and lead conversion rates." },
      { title: "Guardrails and evaluation", desc: "Topic restrictions, prompt-injection defences, answer evaluation test sets, and monitoring before and after launch." },
    ],
    stack: ["OpenAI GPT models", "Anthropic Claude", "Google Gemini", "RAG with pgvector / Pinecone", "LangChain / LlamaIndex", "WhatsApp Business Platform (Cloud API)", "Node.js", "Python", "Next.js", "PostgreSQL", "Redis", "Zoho / HubSpot / Salesforce APIs", "AWS / Azure / GCP"],
    faqs: [
      { q: "Who builds AI chatbots in Kerala?", a: "Stacklyn is a software and AI development company based in Kerala that builds custom AI chatbots for businesses across Kerala, India, and the Gulf. We design, build, integrate, and maintain chatbots for websites, WhatsApp, and mobile apps, trained on each client's own data." },
      { q: "How much does an AI chatbot cost in India?", a: "A focused AI chatbot answering from your documents on one channel typically starts from $2,400. Multi-channel assistants with CRM integration, booking, human handover, and analytics usually range from $5,000–15,000. Ongoing model usage and WhatsApp messaging fees are billed at provider rates, separate from development." },
      { q: "Can the chatbot reply in Malayalam?", a: "Yes. Current language models handle Malayalam, Hindi, Tamil, and English, including Malayalam typed in English letters. We test with real customer messages from your business, because accuracy varies with domain vocabulary, and tune prompts and knowledge content accordingly." },
      { q: "Will the chatbot give wrong answers?", a: "Any AI system can err, so we engineer to minimise it: answers are retrieved from your approved content, the bot is instructed to decline rather than guess, sensitive topics route to humans, and we run an evaluation set of real questions before launch and monitor conversations afterwards." },
      { q: "Which AI model do you use — ChatGPT, Claude, or Gemini?", a: "We are model-agnostic and choose per use case based on accuracy on your data, language support, latency, and cost. Many deployments use more than one model — a fast, inexpensive model for routine queries and a stronger model for complex ones." },
      { q: "How long does it take to build an AI chatbot?", a: "A grounded chatbot on one channel typically goes live in 3–5 weeks. Multi-channel assistants with CRM integration and booking flows usually take 6–10 weeks, including an evaluation and pilot period with real users." },
      { q: "Is our business data safe with an AI chatbot?", a: "We use enterprise API terms under which providers do not train on your data, restrict what the bot can access by role, encrypt data in transit and at rest, and apply retention limits to conversation logs in line with India's DPDP Act." },
      { q: "How do we start an AI chatbot project with Stacklyn?", a: `${CONTACT_CTA} with your use case and the channels you want to cover. We run a free discovery call, review sample questions from your customers, and send a scoped proposal within 48 hours.` },
    ],
    related: ["whatsapp-ai-chatbot", "malayalam-ai-chatbot", "rag-knowledge-base-ai", "crm-sales-automation"],
    relatedServices: aiServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "whatsapp-ai-chatbot",
    category: "AI Development",
    name: "WhatsApp AI Chatbot & Automation",
    metaTitle: "WhatsApp AI Chatbot & Automation for Businesses in Kerala & India | Stacklyn",
    metaDescription:
      "Stacklyn builds WhatsApp AI chatbots and automation on the official WhatsApp Business Platform — lead capture, order updates, payment reminders, and catalogue sales for Kerala and Indian businesses.",
    keywords:
      "WhatsApp chatbot Kerala, WhatsApp AI chatbot India, WhatsApp Business API integration Kochi, WhatsApp automation for business India, WhatsApp chatbot development company, WhatsApp order automation, WhatsApp payment reminder automation, WhatsApp CRM integration India, WhatsApp Business Platform developer Kerala, WhatsApp marketing automation",
    eyebrow: "Official WhatsApp Business Platform · AI Replies · Catalogue · Payments · CRM",
    headline: "WhatsApp AI Chatbot & Automation for Businesses in Kerala and India",
    intro:
      "In India, customers message before they call and long before they fill a form. Stacklyn builds AI-powered WhatsApp assistants on the official WhatsApp Business Platform that answer enquiries, qualify leads, share catalogues, collect payments, send order and appointment updates, and hand conversations to your team — all from one number.",
    context: {
      heading: "Why the business WhatsApp number becomes a bottleneck",
      body:
        "Most growing businesses in Kerala run sales and service through one or two phones running the WhatsApp Business app. It works until it does not: messages are missed overnight, three staff members answer the same customer differently, nobody can see response times, and every lead lives on a handset that leaves when the employee does. Moving to the WhatsApp Business Platform with an AI layer solves the operational problem, not just reply speed — a shared team inbox, automated first response, approved templates for reminders and updates, and every conversation recorded against a customer.",
    },
    localAngle: {
      heading: "What makes WhatsApp automation work in India",
      points: [
        { title: "Official platform, not grey-market tools", desc: "We build on Meta's WhatsApp Business Platform through the Cloud API, avoiding unofficial automation tools that put your business number at risk of restriction." },
        { title: "UPI and payment links inside the chat", desc: "Share payment links or UPI collection requests in the conversation and confirm payment automatically, which suits Indian buying behaviour better than redirecting to checkout pages." },
        { title: "Template messages that pass approval", desc: "Order updates, reminders, and offers must use approved templates. We write and structure them to meet Meta's policies so broadcasts are not rejected or flagged." },
        { title: "Malayalam and English replies", desc: "The assistant replies in the language the customer writes in, including Malayalam typed in English letters, which is how many customers in Kerala actually text." },
      ],
    },
    useCases: [
      { title: "Enquiry-to-lead capture", desc: "Qualify every new enquiry with a few natural questions and push structured leads into your CRM with the source attributed." },
      { title: "Order and delivery updates", desc: "Send confirmation, dispatch, delivery, and delay notifications automatically from your order system." },
      { title: "Appointment booking and reminders", desc: "Let customers book, reschedule, or cancel appointments in chat, with reminders that reduce no-shows." },
      { title: "Payment and fee reminders", desc: "Automate invoice, EMI, fee, and renewal reminders with payment links and automatic confirmation." },
      { title: "WhatsApp catalogue sales", desc: "Browse products, check availability, and place orders within WhatsApp for retail and D2C brands." },
      { title: "Service complaints and tickets", desc: "Collect complaint details and photos, create tickets, and share status updates until resolution." },
    ],
    deliverables: [
      { title: "WhatsApp Business Platform setup", desc: "Business verification guidance, number onboarding, display name approval, and Cloud API configuration." },
      { title: "AI reply engine", desc: "Grounded AI answers from your content, with intent detection, clarifying questions, and safe fallbacks." },
      { title: "Shared team inbox", desc: "Multi-agent inbox with assignment, internal notes, labels, response-time tracking, and full history." },
      { title: "Template and broadcast manager", desc: "Create, submit, and schedule approved templates with audience segments and opt-out handling." },
      { title: "System integrations", desc: "Connect Tally, Zoho, Shopify, WooCommerce, booking systems, or your custom backend via webhooks and APIs." },
      { title: "Analytics dashboard", desc: "Track response times, resolution rates, lead conversion, broadcast delivery, and read rates." },
    ],
    stack: ["WhatsApp Business Platform (Cloud API)", "Meta Webhooks", "OpenAI / Claude / Gemini", "Node.js", "Python", "PostgreSQL", "Redis queues", "Razorpay / UPI payment links", "Zoho CRM / HubSpot", "Shopify / WooCommerce", "Tally integration", "AWS / GCP"],
    faqs: [
      { q: "What is the difference between the WhatsApp Business app and the WhatsApp Business Platform?", a: "The WhatsApp Business app runs on a phone and suits very small teams. The WhatsApp Business Platform, accessed through Meta's Cloud API, supports multiple agents, automation, AI replies, CRM integration, and approved template messages at scale. Businesses usually move to the platform once enquiry volume outgrows a single handset." },
      { q: "How much does a WhatsApp AI chatbot cost?", a: "A WhatsApp assistant with AI replies, lead capture, and CRM integration typically starts from $2,000. Setups with a shared team inbox, payments, catalogue ordering, and broadcast management usually range from $4,000–12,000. Meta charges WhatsApp messaging fees separately under its published pricing." },
      { q: "Can my WhatsApp number get banned?", a: "Numbers are typically restricted when businesses use unofficial automation tools or send unsolicited bulk messages. We build only on the official platform, use approved templates, collect opt-ins, and honour opt-outs, which keeps quality ratings healthy." },
      { q: "Can we keep our existing business WhatsApp number?", a: "Usually yes. An existing number can be onboarded to the WhatsApp Business Platform. Depending on the onboarding method, existing chat history on the phone may not carry over, so we confirm the options for your number before migrating." },
      { q: "Can the WhatsApp bot collect payments?", a: "Yes. We integrate payment links and UPI collection through gateways such as Razorpay, send them inside the conversation, and confirm payment automatically so orders or bookings update without manual checking." },
      { q: "Can WhatsApp automation connect to Tally or Zoho?", a: "Yes. We connect WhatsApp workflows to Tally, Zoho CRM, Zoho Books, and custom systems, so invoices, outstanding reminders, order status, and new leads flow between WhatsApp and your records automatically." },
      { q: "Does the WhatsApp chatbot reply in Malayalam?", a: "Yes. The assistant detects the language a customer uses and replies accordingly, including Malayalam script, Malayalam typed in English letters, Hindi, Tamil, and English." },
      { q: "How do we get started with WhatsApp automation?", a: `${CONTACT_CTA}. Share your current WhatsApp volume and the top five questions customers ask. We run a free call and send a scoped proposal within 48 hours.` },
    ],
    related: ["ai-chatbot-development", "malayalam-ai-chatbot", "crm-sales-automation", "tally-gst-automation"],
    relatedServices: aiServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "malayalam-ai-chatbot",
    category: "AI Development",
    name: "Malayalam AI Chatbot & Voice Bot",
    metaTitle: "Malayalam AI Chatbot & Voice Bot Development | Stacklyn Kerala",
    metaDescription:
      "Stacklyn builds Malayalam AI chatbots and voice bots for Kerala businesses and service organisations — handling Malayalam script, Manglish, and English in text and speech.",
    keywords:
      "Malayalam chatbot development, Malayalam AI chatbot Kerala, Malayalam voice bot, Malayalam speech recognition app, Manglish chatbot, Malayalam customer support AI, Malayalam IVR automation, Kerala language AI development, Malayalam text to speech integration, Indic language chatbot India",
    eyebrow: "Malayalam Script · Manglish · Speech-to-Text · Text-to-Speech · Voice & WhatsApp",
    headline: "Malayalam AI Chatbot and Voice Bot Development in Kerala",
    intro:
      "Many of Kerala's customers are more comfortable in Malayalam than English, and many type it in English letters. Stacklyn builds AI chatbots and voice assistants that understand Malayalam script, Manglish, and English — in WhatsApp messages, website chat, and phone calls — so businesses can serve customers in the language they actually use.",
    context: {
      heading: "The language gap most chatbots ignore",
      body:
        "Most chatbots sold in India are English-first with a translation layer added later. In Kerala that shows quickly: a customer types a question in Manglish, the bot misreads it, and the conversation ends in a phone call anyway. Language models have improved substantially on Malayalam, but quality still varies with vocabulary, dialect, and whether input arrives as script, transliteration, or speech. A Malayalam assistant that holds up in production is therefore an evaluation discipline — testing with real regional phrasing, choosing speech and language models by measured results, and designing graceful fallbacks when confidence is low.",
    },
    localAngle: {
      heading: "Engineering choices specific to Malayalam",
      points: [
        { title: "Script and transliteration together", desc: "We normalise Malayalam script and Manglish input so a question means the same thing however the customer types it." },
        { title: "Speech models selected by testing", desc: "Malayalam speech recognition quality differs across providers. We benchmark Google Cloud Speech, Azure AI Speech, and Indic-focused models on your real audio before choosing." },
        { title: "Regional vocabulary and dialect", desc: "Usage differs between Thiruvananthapuram, Thrissur, and Malabar. We build glossaries from your customer conversations to improve recognition of local and industry terms." },
        { title: "Confident fallbacks", desc: "When the system is unsure, it asks a clarifying question or offers a human callback rather than guessing — essential for trust in a local-language service." },
      ],
    },
    useCases: [
      { title: "Customer support in Malayalam", desc: "Answer service, billing, and order questions in Malayalam over WhatsApp and web chat." },
      { title: "Malayalam voice IVR replacement", desc: "Replace press-button phone menus with a voice assistant callers can simply speak to in Malayalam." },
      { title: "Hospital and clinic enquiries", desc: "Handle appointment, doctor availability, and report questions for patients who prefer Malayalam." },
      { title: "Co-operative and financial services information", desc: "Answer questions on schemes, instalment dates, required documents, and branch details for members in their preferred language." },
      { title: "Education and admission helpdesks", desc: "Serve parents and students with fee, admission, and schedule information in Malayalam and English." },
      { title: "Public-facing service information", desc: "Provide scheme details, document requirements, and application guidance in Malayalam for citizen-facing organisations." },
    ],
    deliverables: [
      { title: "Malayalam conversational AI", desc: "Chat assistant that understands Malayalam script, Manglish, and English, and replies in the customer's language." },
      { title: "Voice bot pipeline", desc: "Speech-to-text, language understanding, and natural Malayalam text-to-speech tuned for phone-line audio quality." },
      { title: "Telephony integration", desc: "Connection to cloud telephony providers such as Exotel or Twilio for inbound and outbound Malayalam voice calls." },
      { title: "Domain glossary and evaluation set", desc: "Curated vocabulary and a test set of real Malayalam queries used to measure and improve accuracy over time." },
      { title: "Human handover with transcripts", desc: "Transfer to staff with a Malayalam transcript and English summary so any team member can pick up context." },
      { title: "Quality dashboard", desc: "Track recognition confidence, fallback rates, resolution, and the questions the assistant struggles with." },
    ],
    stack: ["Google Cloud Speech-to-Text (Malayalam)", "Azure AI Speech", "Indic language models (AI4Bharat, Sarvam)", "OpenAI / Claude / Gemini", "Malayalam text-to-speech", "Exotel / Twilio telephony", "WhatsApp Business Platform", "Python", "Node.js", "PostgreSQL", "pgvector"],
    faqs: [
      { q: "Can AI understand Malayalam?", a: "Yes. Current large language models and speech systems support Malayalam, and quality has improved considerably. Accuracy still depends on vocabulary, dialect, audio quality, and whether text arrives in Malayalam script or English letters, so we benchmark on your real customer data before launch." },
      { q: "Can a chatbot understand Manglish?", a: "Yes. We design specifically for Malayalam typed in English letters, which is common in WhatsApp conversations in Kerala, and test with real transliterated messages rather than assuming customers type in Malayalam script." },
      { q: "Is there a Malayalam voice bot for customer calls?", a: "Yes. We build Malayalam voice assistants that combine speech recognition, language understanding, and Malayalam text-to-speech, connected to cloud telephony so callers can speak naturally instead of pressing menu buttons." },
      { q: "How accurate is Malayalam speech recognition?", a: "It varies by provider, accent, background noise, and phone-line quality. Rather than quoting a generic figure, we test several engines on recordings from your own callers and choose the one that performs best for your use case." },
      { q: "How much does a Malayalam AI chatbot cost?", a: "A Malayalam text chatbot for WhatsApp or web typically starts from $3,000. Voice bots with telephony integration, speech tuning, and handover usually range from $6,000–18,000 depending on call volume and integration depth. Speech, model, and telephony usage are billed at provider rates." },
      { q: "Can the assistant switch between Malayalam and English?", a: "Yes. It detects the language of each message and replies in kind, handling conversations that switch between Malayalam, Manglish, and English midway." },
      { q: "Who builds Malayalam chatbots in Kerala?", a: "Stacklyn is a Kerala-based software and AI company that builds Malayalam chatbots and voice bots for businesses, hospitals, institutions, and service organisations across the state." },
      { q: "How do we start a Malayalam AI project?", a: `${CONTACT_CTA} with a few sample customer messages or call recordings. We assess feasibility on your real data in a free discovery call and send a proposal within 48 hours.` },
    ],
    related: ["ai-voice-agent", "whatsapp-ai-chatbot", "ai-chatbot-development", "rag-knowledge-base-ai"],
    relatedServices: aiServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "ai-agent-development",
    category: "AI Development",
    name: "AI Agent Development",
    metaTitle: "AI Agent Development Company in India | Agentic AI Automation | Stacklyn",
    metaDescription:
      "Stacklyn builds AI agents that complete multi-step business tasks — researching, updating CRMs, processing documents, and coordinating workflows — with human approval and audit trails. Kerala, India.",
    keywords:
      "AI agent development India, agentic AI development company, AI agents for business Kerala, autonomous AI agent development, multi-agent system development, AI workflow agents India, Claude agent development, OpenAI Agents SDK development, AI automation agents Kochi, custom AI agent company",
    eyebrow: "Agentic AI · Tool Use · Multi-Step Workflows · Human Approval · Audit Trails",
    headline: "AI Agent Development for Indian Businesses and Enterprises",
    intro:
      "A chatbot answers questions; an agent gets work done. Stacklyn builds AI agents that read incoming requests, look up information across your systems, take actions through approved tools, and report back — with human approval at the steps that matter and a complete log of what was done and why.",
    context: {
      heading: "Where AI agents are genuinely useful — and where they are not yet",
      body:
        "Agentic AI is one of the most over-promised categories in software. Agents are reliable when a task has clear inputs, a bounded set of tools, verifiable outcomes, and a human checkpoint before irreversible actions — processing a purchase order, reconciling a statement, preparing a proposal draft, or triaging a support queue. They are unreliable when asked to operate open-endedly across systems with no guardrails. We scope agent projects around that boundary, start with high-volume repetitive work, and measure accuracy against human baselines before expanding autonomy.",
    },
    localAngle: {
      heading: "Agents that fit Indian business systems",
      points: [
        { title: "Works with Tally, Zoho, and GST data", desc: "Agents read and prepare data in the formats Indian companies use, including Tally ledgers, Zoho records, and GST files such as GSTR-2B." },
        { title: "Human approval before money or compliance moves", desc: "Payments, filings, and customer commitments always pass a named approver, keeping accountability where Indian audit and compliance expect it." },
        { title: "Cost-aware model selection", desc: "Agent workloads can make many model calls. We design for token efficiency and model routing so running costs make sense for Indian budgets." },
        { title: "Indian cloud regions when required", desc: "Data residency requirements are met by hosting in Indian cloud regions such as Mumbai or Hyderabad where the use case or client policy demands it." },
      ],
    },
    useCases: [
      { title: "Purchase order and invoice processing", desc: "Read incoming POs and invoices, match them to records, flag discrepancies, and prepare entries for approval." },
      { title: "Sales research and proposal drafting", desc: "Research a prospect, pull relevant case material and pricing, and draft a tailored proposal for review." },
      { title: "Support ticket triage and resolution", desc: "Classify tickets, gather account context, resolve routine requests, and escalate complex ones with a summary." },
      { title: "Finance reconciliation", desc: "Match bank statements, payment gateway reports, and ledgers, then list exceptions for the finance team." },
      { title: "Recruitment coordination", desc: "Screen applications against criteria, schedule interviews, and keep candidates updated automatically." },
      { title: "Operations reporting", desc: "Collect data from multiple systems each morning and produce a written summary with anomalies highlighted." },
    ],
    deliverables: [
      { title: "Task and tool design", desc: "Clear definition of agent goals, allowed tools, inputs, outputs, and stop conditions for each workflow." },
      { title: "Secure tool integrations", desc: "Scoped API connections to CRM, ERP, email, documents, and databases with least-privilege permissions." },
      { title: "Human-in-the-loop checkpoints", desc: "Approval steps before irreversible actions, with the agent's reasoning and evidence shown to the approver." },
      { title: "Evaluation harness", desc: "Test suites of real tasks scoring accuracy, completion, and error types before and after every change." },
      { title: "Observability and audit logs", desc: "Step-by-step traces of every run, tool call, and decision for debugging, compliance, and review." },
      { title: "Cost and performance controls", desc: "Model routing, caching, rate limits, and budget alerts to keep running costs predictable." },
    ],
    stack: ["Anthropic Claude (tool use)", "OpenAI Agents SDK", "Model Context Protocol (MCP)", "LangGraph", "Python", "Node.js", "PostgreSQL", "Redis / queue workers", "Vector search", "n8n orchestration", "AWS / Azure / GCP (Indian regions)"],
    faqs: [
      { q: "What is an AI agent?", a: "An AI agent is software that uses a language model to plan and complete multi-step tasks by calling tools — searching records, reading documents, updating systems, or sending messages — rather than only answering questions. Well-built agents operate within defined permissions and pause for human approval before significant actions." },
      { q: "What is the difference between an AI chatbot and an AI agent?", a: "A chatbot responds to a user in conversation. An agent pursues a goal across several steps and systems, often without a live user, such as processing an invoice from email through to a draft accounting entry. Many products combine both." },
      { q: "Are AI agents reliable enough for business use?", a: "They are reliable for well-bounded tasks with clear inputs, limited tools, verifiable results, and human checkpoints. We measure accuracy against real historical tasks before deployment and expand autonomy only where the evidence supports it." },
      { q: "How much does AI agent development cost?", a: "A single-workflow agent with a few integrations typically starts from $4,000. Multi-agent systems spanning several departments, with evaluation harnesses and approval workflows, usually range from $12,000–45,000. Model usage costs depend on task volume and are estimated during discovery." },
      { q: "Can AI agents work with Tally or Zoho?", a: "Yes. Agents can read and prepare data for Tally through its XML and ODBC interfaces and for Zoho through its APIs. We keep a human approval step before entries are posted to your books." },
      { q: "Which frameworks do you use to build AI agents?", a: "We choose per project from Anthropic's tool use and the Model Context Protocol, the OpenAI Agents SDK, LangGraph, and custom orchestration in Python or Node.js. Framework choice matters less than tool design, evaluation, and guardrails." },
      { q: "How long does it take to build an AI agent?", a: "A focused agent for one workflow typically takes 4–8 weeks including evaluation and a supervised pilot. Broader multi-agent programmes are delivered in phases over three to six months." },
      { q: "How do we start an AI agent project with Stacklyn?", a: `${CONTACT_CTA} describing the repetitive task you want automated and roughly how often it occurs. We assess agent suitability in a free call and send a proposal within 48 hours.` },
    ],
    related: ["rag-knowledge-base-ai", "business-process-automation", "invoice-document-ai", "n8n-automation-agency"],
    relatedServices: aiServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "rag-knowledge-base-ai",
    category: "AI Development",
    name: "RAG & Private Knowledge Base AI",
    metaTitle: "RAG Development & Private Knowledge Base AI in India | Stacklyn",
    metaDescription:
      "Stacklyn builds retrieval-augmented generation (RAG) systems that let teams ask questions of company documents, SOPs, contracts, and databases with cited answers and access controls. Kerala, India.",
    keywords:
      "RAG development India, retrieval augmented generation company, private knowledge base AI, enterprise document search AI India, chat with documents development, internal knowledge assistant Kerala, vector database development, LLM document QA system, AI search for company documents, secure RAG implementation India",
    eyebrow: "Retrieval-Augmented Generation · Cited Answers · Access Control · Document & Database Search",
    headline: "RAG Development: AI That Answers From Your Company's Own Knowledge",
    intro:
      "Your organisation's knowledge sits in PDFs, shared drives, SOP manuals, contracts, tickets, and databases that nobody can search properly. Stacklyn builds retrieval-augmented generation systems that let staff and customers ask plain-language questions and get answers drawn from those sources — with citations to the exact document and respect for who is allowed to see what.",
    context: {
      heading: "Why RAG projects succeed or fail",
      body:
        "A demo that chats with ten PDFs takes an afternoon. A production knowledge assistant over tens of thousands of documents that answers accurately, cites correctly, and never shows an employee a file they should not see is a real engineering project. Quality is decided by unglamorous work: cleaning and chunking documents sensibly, extracting tables and scanned pages, combining keyword and semantic search, re-ranking results, enforcing permissions at retrieval time, and measuring answer accuracy against a test set. Most disappointing RAG deployments skipped those steps.",
    },
    localAngle: {
      heading: "Handling the documents Indian organisations actually have",
      points: [
        { title: "Scanned and photographed documents", desc: "Much of the paperwork in Indian offices is scanned or photographed. We include OCR and layout extraction so those pages become searchable rather than silently ignored." },
        { title: "Mixed English and Malayalam content", desc: "Circulars, notices, and customer correspondence often mix languages. We index and test retrieval across both." },
        { title: "Tables in tender and finance documents", desc: "Tender documents, rate contracts, and financial statements are table-heavy. We extract tables as structured data so figures are retrieved accurately." },
        { title: "Role-based access for hierarchical organisations", desc: "Permissions are enforced at search time by department, branch, and role, matching how Indian enterprises and institutions restrict information." },
      ],
    },
    useCases: [
      { title: "Internal policy and SOP assistant", desc: "Let employees ask how a process works and receive the answer with a link to the governing SOP clause." },
      { title: "Contract and tender analysis", desc: "Query obligations, deadlines, penalties, and eligibility criteria across large sets of contracts and tender documents." },
      { title: "Technical manual search for field teams", desc: "Give engineers and technicians instant answers from equipment manuals and service bulletins on mobile." },
      { title: "Customer-facing product knowledge", desc: "Power website and WhatsApp assistants with accurate answers drawn from product documentation." },
      { title: "Legal and compliance research", desc: "Search regulations, circulars, and past case notes with citations for faster first-pass research." },
      { title: "Sales enablement", desc: "Find the right case study, specification, or pricing precedent in seconds during client conversations." },
    ],
    deliverables: [
      { title: "Document ingestion pipeline", desc: "Connectors for Google Drive, SharePoint, file servers, email, and databases with OCR, table extraction, and scheduled re-sync." },
      { title: "Hybrid retrieval", desc: "Semantic vector search combined with keyword search and re-ranking for accuracy on both concepts and exact terms." },
      { title: "Cited answers", desc: "Every answer links to source passages so users can verify and trust what the assistant says." },
      { title: "Permission-aware search", desc: "Access controls enforced at retrieval so users only receive answers from documents they are authorised to see." },
      { title: "Evaluation and quality monitoring", desc: "Test sets of real questions scoring retrieval and answer accuracy, plus feedback loops from users." },
      { title: "Deployment options", desc: "Cloud, private cloud in Indian regions, or on-premise deployment with open-weight models where data cannot leave your network." },
    ],
    stack: ["pgvector / Pinecone / Weaviate / Qdrant", "Elasticsearch / OpenSearch", "OpenAI / Claude / Gemini", "Open-weight models (Llama, Mistral, Qwen)", "LlamaIndex / LangChain", "OCR and layout extraction", "Python", "Node.js", "PostgreSQL", "Google Drive / SharePoint connectors", "Docker / Kubernetes"],
    faqs: [
      { q: "What is RAG in AI?", a: "Retrieval-augmented generation (RAG) is a technique where an AI system first searches a trusted knowledge source — your documents or databases — for relevant passages, then generates an answer based on those passages. It makes answers more accurate, current, and verifiable than relying on a model's general training alone." },
      { q: "Can we build an AI that answers from our company documents?", a: "Yes. That is exactly what a RAG system does. We ingest your documents, make them searchable by meaning and keyword, and build an assistant that answers questions with citations to the source files." },
      { q: "Is our data used to train the AI model?", a: "No. In a RAG system your documents are stored in your own search index and passed to the model only at question time. We use enterprise API terms under which providers do not train on your data, or deploy open-weight models entirely within your infrastructure." },
      { q: "Can RAG work with scanned PDFs?", a: "Yes. We include OCR and layout analysis so scanned and photographed pages, including tables, are converted into searchable text. Accuracy depends on scan quality, which we assess during discovery." },
      { q: "Can different employees see different documents?", a: "Yes. We enforce permissions at retrieval time based on department, branch, role, or existing document-level access, so the assistant never answers from documents a user is not authorised to view." },
      { q: "Can RAG run on-premise without sending data to the cloud?", a: "Yes. For sensitive environments we deploy open-weight models and vector databases on your own servers or private cloud, so documents and questions never leave your network. This requires suitable GPU capacity, which we size with you." },
      { q: "How much does a RAG system cost?", a: "A focused knowledge assistant over one document collection typically starts from $3,600. Enterprise RAG with multiple connectors, permission-aware retrieval, evaluation, and on-premise options usually ranges from $10,000–40,000 depending on document volume and security requirements." },
      { q: "How do we start a RAG project?", a: `${CONTACT_CTA} with a description of your document sources and ten typical questions users would ask. We assess retrieval feasibility in a free call and send a proposal within 48 hours.` },
    ],
    related: ["ai-chatbot-development", "ai-agent-development", "invoice-document-ai", "malayalam-ai-chatbot"],
    relatedServices: aiServices,
  },
  // ------------------------------------------------------------------
  {
    slug: "ai-voice-agent",
    category: "AI Development",
    name: "AI Voice Agents & Call Automation",
    metaTitle: "AI Voice Agent & Call Automation Development in India | Stacklyn",
    metaDescription:
      "Stacklyn builds AI voice agents for inbound and outbound calls — appointment booking, lead qualification, payment reminders, and support — in English, Hindi, and Malayalam, integrated with Indian telephony.",
    keywords:
      "AI voice agent India, AI calling agent development, voice bot development Kerala, AI call center automation India, conversational IVR development, outbound AI calling India, AI receptionist for business, voice AI Hindi Malayalam, Exotel AI voice integration, AI phone agent development company",
    eyebrow: "Inbound & Outbound Calls · Conversational IVR · English, Hindi, Malayalam · CRM Integration",
    headline: "AI Voice Agents and Call Automation for Indian Businesses",
    intro:
      "Phone calls remain the preferred channel for a large share of India's customers, and staffing phone lines around the clock is expensive. Stacklyn builds AI voice agents that answer and place calls, understand natural speech, book appointments, qualify leads, send reminders, and transfer to a human with full context when the conversation needs one.",
    context: {
      heading: "What has changed in voice AI",
      body:
        "Traditional IVR systems forced callers through menus and recognised only a handful of words. Modern voice agents combine streaming speech recognition, language models, and natural text-to-speech with response times low enough for a real conversation. They still have limits — noisy lines, strong accents, and interruptions test every system — so good deployments are designed around realistic call flows, confirmation of critical details, and fast human transfer. Voice AI works best today on high-volume, structured calls such as bookings, reminders, verification, and first-level support.",
    },
    localAngle: {
      heading: "Voice AI for the Indian calling environment",
      points: [
        { title: "Multilingual callers", desc: "Callers switch between English, Hindi, Malayalam, and other languages. We configure language detection and test on real regional speech." },
        { title: "Indian telephony providers", desc: "We integrate with cloud telephony platforms commonly used in India, such as Exotel, Knowlarity, and Twilio, including virtual numbers and call recording." },
        { title: "TRAI-aware outbound design", desc: "Outbound campaigns are designed around consent, permitted calling hours, and customer preference registration under TRAI's commercial communication rules." },
        { title: "Realistic phone-line audio", desc: "Mobile networks and background noise degrade recognition. We tune and test on recorded calls from actual customer conditions, not studio audio." },
      ],
    },
    useCases: [
      { title: "Appointment booking and confirmation", desc: "Book, confirm, and reschedule appointments for clinics, service centres, and consultants over a natural phone call." },
      { title: "Lead qualification calls", desc: "Call new enquiries within minutes, ask qualifying questions, and schedule sales conversations for promising leads." },
      { title: "Payment and renewal reminders", desc: "Remind customers of dues, EMIs, renewals, and fees, and share payment links by SMS or WhatsApp after the call." },
      { title: "After-hours reception", desc: "Answer calls outside business hours, capture requirements, and schedule callbacks instead of losing enquiries." },
      { title: "Order and delivery verification", desc: "Confirm cash-on-delivery orders and delivery addresses before dispatch to reduce returns." },
      { title: "Feedback and survey calls", desc: "Collect structured post-service feedback and flag unhappy customers for immediate human follow-up." },
    ],
    deliverables: [
      { title: "Conversation design", desc: "Call flows, scripts, confirmation steps, and escalation rules designed around your real call recordings." },
      { title: "Low-latency voice pipeline", desc: "Streaming speech recognition, language model reasoning, and natural text-to-speech tuned for conversational response times." },
      { title: "Telephony integration", desc: "Inbound numbers, outbound dialling, call recording, and warm transfer through your chosen telephony provider." },
      { title: "CRM and calendar actions", desc: "Create leads, book slots, update records, and log call outcomes and transcripts automatically." },
      { title: "Compliance controls", desc: "Consent tracking, calling-hour rules, preference handling, and disclosure scripting for outbound campaigns." },
      { title: "Call analytics", desc: "Transcripts, summaries, outcome tagging, sentiment, and dashboards for containment, transfer, and conversion rates." },
    ],
    stack: ["Streaming speech-to-text (Deepgram, Google, Azure)", "Indic speech models", "OpenAI Realtime / Claude / Gemini", "Neural text-to-speech", "Exotel / Knowlarity / Twilio", "WebSockets", "Node.js", "Python", "PostgreSQL", "Zoho CRM / HubSpot / custom CRM", "AWS / GCP"],
    faqs: [
      { q: "What is an AI voice agent?", a: "An AI voice agent is software that holds phone conversations using speech recognition, a language model, and text-to-speech. It can answer inbound calls or place outbound calls to book appointments, qualify leads, send reminders, or resolve simple queries, transferring to a human when needed." },
      { q: "Can AI voice agents speak Hindi and Malayalam?", a: "Yes. We build voice agents that handle English, Hindi, Malayalam, and other Indian languages. Recognition quality varies by language, accent, and line quality, so we test with recordings from your actual callers before launch." },
      { q: "Will customers know they are talking to an AI?", a: "We recommend clear disclosure at the start of every call. Transparency builds trust, avoids complaints, and is increasingly expected by customers and regulators." },
      { q: "Is AI outbound calling legal in India?", a: "Outbound commercial calling is governed by TRAI's rules on consent, calling hours, and customer preference registration. We build campaigns to respect those requirements, but your organisation remains responsible for consent and compliance, and we recommend confirming specific campaigns with your legal advisor." },
      { q: "How much does an AI voice agent cost?", a: "A voice agent for one structured call type, such as appointment booking or reminders, typically starts from $4,000. Multi-flow agents with CRM integration, outbound campaigns, and analytics usually range from $10,000–30,000. Telephony, speech, and model usage are billed per minute at provider rates." },
      { q: "Can the voice agent transfer calls to our staff?", a: "Yes. The agent performs a warm transfer to your team with a summary of the conversation so far, so the customer does not have to repeat themselves." },
      { q: "Which telephony providers do you integrate with?", a: "We commonly integrate Exotel, Knowlarity, and Twilio, and can work with other providers that expose SIP or streaming audio APIs, including your existing business numbers where supported." },
      { q: "How do we start a voice AI project?", a: `${CONTACT_CTA} with your call volume, call types, and a few sample recordings if available. We assess suitability in a free call and send a proposal within 48 hours.` },
    ],
    related: ["malayalam-ai-chatbot", "ai-chatbot-development", "crm-sales-automation", "whatsapp-ai-chatbot"],
    relatedServices: aiServices,
  },
];
