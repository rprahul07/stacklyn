import { createFileRoute } from "@tanstack/react-router";
import { HirePage, type HireData } from "@/components/velora/HirePageTemplate";

const data: HireData = {
  role: "Backend Developer",
  slug: "hire-backend-developer",
  headline: "Hire Backend Developers from India — APIs, Databases & Systems",
  tagline: "Node.js · PostgreSQL · AWS · TypeScript · Kerala, India",
  intro:
    "Hire experienced backend developers from Stacklyn, Kerala, India. Our backend engineers build scalable REST APIs, microservices, database systems, and cloud-native backends for web applications and enterprise platforms.",
  skills: [
    "Node.js", "TypeScript", "Express.js", "Fastify", "NestJS",
    "PostgreSQL", "MongoDB", "Redis", "MySQL",
    "Prisma", "Drizzle ORM", "TypeORM",
    "REST APIs", "GraphQL", "gRPC",
    "JWT", "OAuth 2.0", "API Security",
    "Docker", "AWS", "Azure", "Kubernetes",
    "Microservices", "Message Queues", "BullMQ",
    "Jest", "Supertest", "k6",
  ],
  benefits: [
    { title: "API Design Experts", desc: "Clean, documented, versioned REST APIs and GraphQL services that your frontend and partner teams enjoy using." },
    { title: "Database Performance", desc: "Deep PostgreSQL and MongoDB expertise — proper indexing, query optimization, and connection pooling." },
    { title: "Security-First Mindset", desc: "Every API includes validation, rate limiting, OWASP-compliant code, and proper authentication." },
    { title: "Scalable Architecture", desc: "Backends designed for horizontal scaling, stateless services, and cloud-native deployment." },
    { title: "India-Based Cost", desc: "Senior backend engineers from Kerala, India at 50–70% lower rates than US/UK equivalents." },
    { title: "Full Documentation", desc: "OpenAPI/Swagger docs, architecture diagrams, and database schemas delivered with every project." },
  ],
  engagementModels: [
    { name: "Project-Based", desc: "Fixed-price backend development for APIs, databases, and complete backend systems.", price: "From ₹1.5L" },
    { name: "Monthly Retainer", desc: "Dedicated backend developer for ongoing API development and system maintenance.", price: "₹80K–1.2L/mo" },
    { name: "Consulting", desc: "Architecture reviews, API audits, database optimization, or security assessments.", price: "₹3–5K/hr" },
  ],
  process: [
    { step: "Requirements", desc: "Share your API requirements, data model, and performance expectations." },
    { step: "Architecture Design", desc: "We propose system architecture, database schema, and API contracts." },
    { step: "Proposal", desc: "Detailed proposal with engineer profile, timeline, and pricing." },
    { step: "Build", desc: "Development starts within 48 hours of contract with regular demo reviews." },
  ],
  techStack: [
    "Node.js", "TypeScript", "Express.js", "Fastify", "NestJS",
    "PostgreSQL", "MongoDB", "Redis",
    "Prisma", "Docker", "AWS", "Azure",
    "JWT", "Swagger", "Jest",
  ],
  faqs: [
    { q: "What does a backend developer do?", a: "A backend developer builds the server-side of web applications — APIs, databases, authentication systems, business logic, and cloud infrastructure. The backend is what makes your product work under the hood." },
    { q: "Why hire a backend developer from India?", a: "India has a large pool of experienced backend developers at significantly lower rates than Western markets. Stacklyn backend developers have production experience with Node.js, PostgreSQL, Redis, and cloud deployment." },
    { q: "What is the cost of hiring a backend developer from Stacklyn?", a: "Backend developer retainers start at ₹80,000/month (~$960 USD). Full-time dedicated backend developers cost ₹1–1.2 lakh/month. Project-based work starts at ₹1.5 lakh." },
    { q: "Does Stacklyn build REST APIs?", a: "Yes. REST API design and development is a core backend service. We build versioned, documented, secure REST APIs with proper error handling and OpenAPI/Swagger documentation." },
    { q: "Does Stacklyn use PostgreSQL?", a: "Yes. PostgreSQL is our primary relational database. We use Prisma or Drizzle ORM for type-safe queries, design normalized schemas, and implement proper indexing and connection pooling." },
    { q: "Can Stacklyn optimize my existing backend performance?", a: "Yes. Backend performance audits are a common engagement. We profile queries, add missing indexes, implement caching with Redis, fix N+1 problems, and optimize connection pooling." },
    { q: "Does Stacklyn build microservices?", a: "Yes. We design and build Node.js microservices with Docker containerization, inter-service communication via REST, gRPC, or message queues, and orchestration with Docker Compose or Kubernetes." },
    { q: "Can Stacklyn take over an existing backend codebase?", a: "Yes. We regularly take over legacy backends for refactoring, adding TypeScript, improving test coverage, and adding new features." },
    { q: "Does Stacklyn implement authentication systems?", a: "Yes. Authentication systems including JWT, OAuth 2.0, social login, multi-factor authentication, and role-based access control are standard backend services." },
    { q: "How do I hire a backend developer from Stacklyn?", a: "Email veenaprasad@stacklyn.in or WhatsApp +91 99617 46849. Share your requirements and we'll send a proposal with engineer profile within 24 hours." },
  ],
  relatedHire: [
    { name: "Hire Node.js Developer", href: "/hire-nodejs-developer" },
    { name: "Hire React Developer", href: "/hire-react-developer" },
    { name: "Hire Next.js Developer", href: "/hire-nextjs-developer" },
    { name: "Hire MERN Developer", href: "/hire-mern-developer" },
    { name: "Hire AI Developer", href: "/hire-ai-developer" },
  ],
  relatedServices: [
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "Node.js Development", href: "/services/nodejs-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
  ],
};

export const Route = createFileRoute("/hire-backend-developer")({
  head: () => ({
    meta: [
      { title: "Hire Backend Developers from India | Stacklyn — Kerala" },
      { name: "description", content: "Hire senior backend developers from Stacklyn, Kerala, India. REST APIs, PostgreSQL, Node.js, microservices, cloud deployment. Expert engineers, 24h response." },
      { name: "keywords", content: "hire backend developer India, backend developer Kerala, hire Node.js backend developer India, API developer India, server-side developer India" },
      { property: "og:title", content: "Hire Backend Developers from India | Stacklyn" },
      { property: "og:description", content: "Senior backend engineers from Kerala, India. APIs, databases, cloud — built to scale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/hire-backend-developer" }],
  }),
  component: () => <HirePage data={data} />,
});
