import { FAQ } from "./FAQ";

const homepageFAQs = [
  {
    q: "What is Stacklyn?",
    a: "Stacklyn is a custom software development company based in Kerala, India. We build web applications, mobile apps, ERP and CRM systems, SaaS products, e-commerce stores, and AI automation for startups, growing businesses, and enterprises worldwide.",
  },
  {
    q: "What services does Stacklyn offer?",
    a: "Stacklyn offers custom software development, web application development, mobile app development (iOS and Android), AI chatbots and automation, SaaS and MVP development, ERP and CRM development, e-commerce development, UI/UX design, backend and API development, cloud deployment, and ongoing maintenance and support.",
  },
  {
    q: "Which industries does Stacklyn build software for?",
    a: "Any industry. We build software for retail and e-commerce, healthcare, education, fintech, real estate, logistics, manufacturing, construction, oil and gas, professional services, and startups. Our process starts with how your business works, so the software fits your workflow rather than forcing you into a generic template.",
  },
  {
    q: "How much does custom software development cost?",
    a: "With Stacklyn, a business website or simple web app typically starts around $2,000, a mobile app or MVP around $2,400–10,000, and larger ERP, CRM, or SaaS platforms $10,000 and up, delivered in fixed-price phases. Use our free cost estimator for a quick range, or send your requirements for a written quote within 48 hours.",
  },
  {
    q: "How long does it take to build an app or software?",
    a: "A business website or simple web app takes 3–6 weeks. A mobile app or startup MVP takes 8–12 weeks. ERP, CRM, and SaaS platforms are delivered in phases, with the first usable phase in 8–12 weeks. You see a working demo every week.",
  },
  {
    q: "Does Stacklyn build mobile apps for iOS and Android?",
    a: "Yes. We build cross-platform mobile apps with Flutter and React Native, so one codebase runs on both iOS and Android. We also build the backend, admin panel, and push notifications, and handle publishing to the App Store and Google Play.",
  },
  {
    q: "Can Stacklyn build an ERP or CRM for my business?",
    a: "Yes. We build custom ERP, CRM, inventory, billing, HR, and operations software tailored to your process, and integrate it with tools you already use such as Tally, Zoho, QuickBooks, WhatsApp, and payment gateways.",
  },
  {
    q: "Does Stacklyn build AI applications and automation?",
    a: "Yes. We build AI chatbots for websites and WhatsApp, AI agents, document and invoice processing, knowledge-base assistants (RAG), and business process automation using OpenAI, Anthropic Claude, Google Gemini, LangChain, and vector databases.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes. We work with small and medium businesses and early-stage founders as well as larger companies. We scope projects into fixed-price phases so you can start small, launch, and add features as you grow.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work with clients in India and abroad, including the US, the UAE, and Singapore. Communication is over WhatsApp, email, and video calls, and our working hours overlap with most of the Gulf and European day.",
  },
  {
    q: "Do I own the source code?",
    a: "Yes. You own the source code, designs, and accounts from day one. Code lives in a repository you can access, and at handover you receive documentation and deployment instructions.",
  },
  {
    q: "Does Stacklyn offer maintenance and support after launch?",
    a: "Yes. We offer monthly support retainers covering bug fixes, security updates, new features, performance monitoring, and cloud hosting management, so your software stays secure and up to date.",
  },
  {
    q: "What tech stack does Stacklyn use?",
    a: "Frontend: React, Next.js, TypeScript, Tailwind CSS. Mobile: Flutter and React Native. Backend: Node.js, Express, NestJS. Databases: PostgreSQL, MongoDB, Redis. Cloud: AWS, Azure, Cloudflare, Docker, CI/CD. AI: OpenAI, Anthropic, LangChain, vector databases.",
  },
  {
    q: "How do I start a project with Stacklyn?",
    a: "Send an enquiry through the contact form, email rahulrp@stacklyn.in, or WhatsApp +91 95444 51720. We reply within 24 hours. The process is: (1) free discovery call, (2) fixed-price proposal, (3) kickoff, (4) weekly demos until launch.",
  },
];

export function HomepageFAQ() {
  return (
    <FAQ items={homepageFAQs} title="Frequently Asked Questions About Stacklyn" includeSchema />
  );
}
