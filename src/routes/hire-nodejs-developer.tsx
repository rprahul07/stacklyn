import { createFileRoute } from "@tanstack/react-router";
import { HirePage, type HireData } from "@/components/velora/HirePageTemplate";

const data: HireData = {
  role: "Node.js Developer",
  slug: "hire-nodejs-developer",
  headline: "Hire Node.js Developers from India — Senior Engineers, Fast Delivery",
  tagline: "Dedicated Node.js engineers · Kerala, India · 24h response",
  intro:
    "Hire experienced Node.js developers from Stacklyn, Kerala, India. Our senior Node.js engineers build high-performance REST APIs, real-time systems, microservices, and full-stack applications for startups and enterprises worldwide.",
  skills: [
    "Node.js (v18, v20, v22)", "TypeScript", "Express.js", "Fastify", "NestJS",
    "PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM",
    "REST APIs", "GraphQL", "WebSockets", "Socket.io",
    "JWT / OAuth", "Microservices", "Docker", "AWS Lambda",
    "Jest / Vitest", "CI/CD", "Bull / BullMQ",
  ],
  benefits: [
    { title: "Senior-Level Experience", desc: "All Stacklyn Node.js developers have 3+ years of production experience building scalable APIs and backend systems." },
    { title: "TypeScript by Default", desc: "Our Node.js developers write TypeScript for every project — type-safe, maintainable, and production-ready code." },
    { title: "Timezone Compatible", desc: "Kerala, India is IST (UTC+5:30). We overlap with UK, UAE, Singapore, and can accommodate US timezones for key meetings." },
    { title: "Cost Advantage", desc: "Senior Node.js developers at India rates — typically 50–70% less than equivalent talent in the US, UK, or Europe." },
    { title: "Direct Communication", desc: "You communicate directly with the engineer working on your project. No account managers, no translation layers." },
    { title: "Proven Track Record", desc: "Delivered 10+ production Node.js projects. 100% client satisfaction rate." },
  ],
  engagementModels: [
    { name: "Project-Based", desc: "Fixed scope, fixed price. Ideal for well-defined projects with clear requirements.", price: "From ₹1.5L" },
    { name: "Monthly Retainer", desc: "Dedicated Node.js developer for 80+ hours/month. Ongoing development, maintenance, and scaling.", price: "₹80K–1.2L/mo" },
    { name: "Hourly Consulting", desc: "Pay-as-you-go for audits, code reviews, architecture consulting, or specific technical problems.", price: "₹3–5K/hr" },
  ],
  process: [
    { step: "Contact Us", desc: "Share your project requirements via email, WhatsApp, or contact form." },
    { step: "Technical Review", desc: "We review your stack, existing code (if any), and requirements within 24 hours." },
    { step: "Proposal", desc: "Receive a detailed proposal with scope, timeline, pricing, and engineer profile." },
    { step: "Kickoff", desc: "Sign the contract and start development. Onboarding takes less than 1 day." },
  ],
  techStack: [
    "Node.js", "TypeScript", "Express.js", "Fastify", "NestJS",
    "PostgreSQL", "MongoDB", "Redis", "Prisma",
    "JWT", "OAuth", "WebSockets", "Docker",
    "AWS", "Vercel", "GitHub Actions",
  ],
  faqs: [
    { q: "Why hire a Node.js developer from India?", a: "India offers world-class Node.js engineers at significantly lower rates than the US or UK. Stacklyn's engineers are senior-level, work in TypeScript, and have production experience with Node.js APIs, microservices, and real-time systems." },
    { q: "What is the cost of hiring a Node.js developer from Stacklyn?", a: "Monthly retainers start at ₹80,000 (approximately $960 USD) per month for part-time engagement. Full-time dedicated developers range from ₹1–1.5 lakh/month. Hourly rates are ₹3,000–5,000 for consulting." },
    { q: "How quickly can Stacklyn start a Node.js project?", a: "We can typically start within 1–3 business days after contract signing. The onboarding process is fast — we review your codebase, set up access, and have a kickoff call on day one." },
    { q: "Does Stacklyn use TypeScript with Node.js?", a: "Yes. All Stacklyn Node.js projects use TypeScript. TypeScript with Node.js provides type-safe APIs, better IDE support, and significantly more maintainable code." },
    { q: "Can Stacklyn take over my existing Node.js codebase?", a: "Yes. We regularly take over and maintain existing Node.js codebases. We start with a code audit to assess quality, identify issues, and propose improvements." },
    { q: "Does Stacklyn work with US time zones?", a: "Our primary timezone is IST (UTC+5:30). For US clients, we overlap with US EST mornings (IST evenings) and can schedule daily standups accordingly." },
    { q: "What Node.js frameworks does Stacklyn work with?", a: "We work with Express.js (most common), Fastify (high-performance), and NestJS (enterprise-grade structured applications). We recommend the right framework based on your project's performance and scalability needs." },
    { q: "Does Stacklyn build microservices with Node.js?", a: "Yes. We design and implement Node.js microservices with Docker containerization, inter-service communication via REST or message queues (BullMQ, RabbitMQ), and Kubernetes deployment." },
    { q: "Can I hire a Node.js developer for just one month?", a: "Yes. We offer flexible month-to-month retainers with no long-term lock-in. We ask for a minimum 1-month commitment to ensure productive onboarding." },
    { q: "How do I hire a Node.js developer from Stacklyn?", a: "Email veenaprasad@stacklyn.in or WhatsApp +91 99617 46849 with your requirements. We respond within 24 hours with a proposal and engineer profiles." },
  ],
  relatedHire: [
    { name: "Hire React Developer", href: "/hire-react-developer" },
    { name: "Hire Next.js Developer", href: "/hire-nextjs-developer" },
    { name: "Hire MERN Developer", href: "/hire-mern-developer" },
    { name: "Hire Backend Developer", href: "/hire-backend-developer" },
    { name: "Hire AI Developer", href: "/hire-ai-developer" },
  ],
  relatedServices: [
    { name: "Node.js Development", href: "/services/nodejs-development" },
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
  ],
};

export const Route = createFileRoute("/hire-nodejs-developer")({
  head: () => ({
    meta: [
      { title: "Hire Node.js Developers from India | Stacklyn — Kerala" },
      { name: "description", content: "Hire senior Node.js developers from Stacklyn, Kerala, India. REST APIs, real-time apps, microservices — TypeScript, Express.js, Fastify, NestJS. 24-hour response." },
      { name: "keywords", content: "hire Node.js developer India, Node.js developer Kerala, hire Node.js developer freelance India, Node.js developer cost India, dedicated Node.js developer" },
      { property: "og:title", content: "Hire Node.js Developers from India | Stacklyn" },
      { property: "og:description", content: "Senior Node.js developers from Kerala, India. TypeScript, Express, Fastify, NestJS. Fast onboarding." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/hire-nodejs-developer" }],
  }),
  component: () => <HirePage data={data} />,
});
