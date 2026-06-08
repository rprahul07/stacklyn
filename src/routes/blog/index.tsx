import { createFileRoute, Link } from "@tanstack/react-router";
import { SchemaMarkup } from "@/components/velora/SchemaMarkup";
import Nav from "@/components/velora/Nav";
import Footer from "@/components/velora/Footer";

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  keyword: string;
  intent: "informational" | "comparison" | "tutorial" | "guide";
  metaTitle: string;
  metaDescription: string;
  readTime: string;
}

const categories = [
  "AI", "Software Engineering", "Node.js", "React",
  "Next.js", "Startups", "SaaS", "DevOps", "Backend Development",
];

const posts: BlogPost[] = [
  // AI
  {
    slug: "what-is-rag-retrieval-augmented-generation",
    title: "What is RAG (Retrieval-Augmented Generation)? A Developer's Guide",
    category: "AI",
    keyword: "what is RAG retrieval augmented generation",
    intent: "informational",
    metaTitle: "What is RAG? Retrieval-Augmented Generation Explained | Stacklyn",
    metaDescription: "Learn what RAG (Retrieval-Augmented Generation) is, how it works, and when to use it. A practical developer guide to building production RAG pipelines.",
    readTime: "9 min",
  },
  {
    slug: "langchain-vs-llamaindex",
    title: "LangChain vs LlamaIndex: Which AI Framework Should You Choose?",
    category: "AI",
    keyword: "LangChain vs LlamaIndex",
    intent: "comparison",
    metaTitle: "LangChain vs LlamaIndex: 2025 Comparison | Stacklyn",
    metaDescription: "LangChain and LlamaIndex are the two most popular AI frameworks. Compare features, use cases, performance, and when to pick each.",
    readTime: "8 min",
  },
  {
    slug: "build-chatbot-nodejs-openai",
    title: "How to Build a ChatGPT-Like Chatbot with Node.js and OpenAI API",
    category: "AI",
    keyword: "build chatbot Node.js OpenAI API",
    intent: "tutorial",
    metaTitle: "Build a ChatGPT Chatbot with Node.js and OpenAI | Stacklyn",
    metaDescription: "Step-by-step tutorial: build a production chatbot using Node.js, Express, and the OpenAI API with streaming responses and conversation history.",
    readTime: "12 min",
  },
  {
    slug: "gpt4-vs-claude-comparison",
    title: "GPT-4 vs Claude 3.5: Which LLM is Best for Your App?",
    category: "AI",
    keyword: "GPT-4 vs Claude 3.5 comparison",
    intent: "comparison",
    metaTitle: "GPT-4 vs Claude 3.5: LLM Comparison for Developers | Stacklyn",
    metaDescription: "Compare GPT-4 and Claude 3.5 on accuracy, speed, cost, context window, and coding ability. Choose the right LLM for your application.",
    readTime: "7 min",
  },
  {
    slug: "integrate-openai-nextjs",
    title: "How to Integrate OpenAI API into a Next.js Application",
    category: "AI",
    keyword: "OpenAI API Next.js integration",
    intent: "tutorial",
    metaTitle: "Integrate OpenAI API into Next.js — Complete Guide | Stacklyn",
    metaDescription: "Learn how to integrate the OpenAI API into a Next.js application with streaming, API routes, Server Actions, and the Vercel AI SDK.",
    readTime: "10 min",
  },
  {
    slug: "vector-databases-compared",
    title: "Vector Databases Explained: Pinecone vs Weaviate vs pgvector",
    category: "AI",
    keyword: "vector database Pinecone vs Weaviate vs pgvector",
    intent: "comparison",
    metaTitle: "Pinecone vs Weaviate vs pgvector: Vector Database Comparison | Stacklyn",
    metaDescription: "Choose the right vector database for your RAG application. Compare Pinecone, Weaviate, Qdrant, and pgvector on performance, cost, and ease of use.",
    readTime: "8 min",
  },
  {
    slug: "prompt-engineering-best-practices",
    title: "Prompt Engineering Best Practices for Production LLM Apps",
    category: "AI",
    keyword: "prompt engineering best practices production LLM",
    intent: "guide",
    metaTitle: "Prompt Engineering Best Practices for Production | Stacklyn",
    metaDescription: "Production prompt engineering techniques: structured output, chain-of-thought, few-shot examples, system prompts, and cost optimization.",
    readTime: "11 min",
  },
  {
    slug: "build-ai-agent-langchain-nodejs",
    title: "How to Build an AI Agent with LangChain and Node.js",
    category: "AI",
    keyword: "build AI agent LangChain Node.js",
    intent: "tutorial",
    metaTitle: "Build an AI Agent with LangChain and Node.js | Stacklyn",
    metaDescription: "Step-by-step guide to building a tool-using AI agent with LangChain, Node.js, and custom tools for web search, code execution, and API calls.",
    readTime: "14 min",
  },
  // Software Engineering
  {
    slug: "microservices-vs-monolith",
    title: "Microservices vs Monolith: When to Use Each Architecture",
    category: "Software Engineering",
    keyword: "microservices vs monolith architecture",
    intent: "comparison",
    metaTitle: "Microservices vs Monolith: Architecture Comparison | Stacklyn",
    metaDescription: "Should you use microservices or a monolith? Compare both architectures by team size, complexity, deployment, and scaling needs.",
    readTime: "8 min",
  },
  {
    slug: "rest-vs-graphql-vs-grpc",
    title: "How to Choose Between REST, GraphQL, and gRPC",
    category: "Software Engineering",
    keyword: "REST vs GraphQL vs gRPC comparison",
    intent: "comparison",
    metaTitle: "REST vs GraphQL vs gRPC: Which API Style to Choose? | Stacklyn",
    metaDescription: "Compare REST, GraphQL, and gRPC API styles. When to use each, performance trade-offs, and practical recommendations for Node.js backends.",
    readTime: "9 min",
  },
  {
    slug: "typescript-best-practices-nodejs",
    title: "TypeScript Best Practices for Node.js Backend Development",
    category: "Software Engineering",
    keyword: "TypeScript best practices Node.js backend",
    intent: "guide",
    metaTitle: "TypeScript Best Practices for Node.js | Stacklyn",
    metaDescription: "Production TypeScript patterns for Node.js: strict mode, type utilities, error handling, module structure, and common pitfalls to avoid.",
    readTime: "10 min",
  },
  {
    slug: "scale-nodejs-1-million-users",
    title: "How to Scale a Node.js Application to 1 Million Users",
    category: "Software Engineering",
    keyword: "scale Node.js application 1 million users",
    intent: "guide",
    metaTitle: "Scaling Node.js to 1 Million Users — Architecture Guide | Stacklyn",
    metaDescription: "Learn horizontal scaling, load balancing, caching, database optimization, and cloud deployment strategies for high-traffic Node.js applications.",
    readTime: "12 min",
  },
  {
    slug: "clean-code-javascript",
    title: "Clean Code Principles Every JavaScript Developer Should Know",
    category: "Software Engineering",
    keyword: "clean code principles JavaScript developer",
    intent: "guide",
    metaTitle: "Clean Code Principles for JavaScript Developers | Stacklyn",
    metaDescription: "SOLID principles, DRY, naming conventions, function design, and code review habits that produce readable, maintainable JavaScript.",
    readTime: "8 min",
  },
  {
    slug: "unit-testing-jest-nodejs",
    title: "How to Write Production-Quality Unit Tests with Jest",
    category: "Software Engineering",
    keyword: "unit testing Jest Node.js production",
    intent: "tutorial",
    metaTitle: "Production Unit Testing with Jest — Node.js Guide | Stacklyn",
    metaDescription: "Write meaningful tests, not just coverage. Jest configuration, mock strategies, async tests, and CI integration for Node.js projects.",
    readTime: "10 min",
  },
  // Node.js
  {
    slug: "nodejs-vs-python-backend",
    title: "Node.js vs Python for Backend Development: 2025 Comparison",
    category: "Node.js",
    keyword: "Node.js vs Python backend 2025",
    intent: "comparison",
    metaTitle: "Node.js vs Python Backend: 2025 Comparison | Stacklyn",
    metaDescription: "Compare Node.js and Python for backend development in 2025. Performance, ecosystem, use cases, hiring, and when to pick each.",
    readTime: "7 min",
  },
  {
    slug: "build-rest-api-nodejs-express-postgresql",
    title: "How to Build a REST API with Node.js, Express, and PostgreSQL",
    category: "Node.js",
    keyword: "build REST API Node.js Express PostgreSQL",
    intent: "tutorial",
    metaTitle: "Build a REST API with Node.js, Express & PostgreSQL | Stacklyn",
    metaDescription: "Complete tutorial: build a production REST API with Node.js, Express.js, PostgreSQL, Prisma ORM, JWT authentication, and input validation.",
    readTime: "15 min",
  },
  {
    slug: "nestjs-vs-express",
    title: "NestJS vs Express.js: Which Node.js Framework Should You Use?",
    category: "Node.js",
    keyword: "NestJS vs Express.js comparison",
    intent: "comparison",
    metaTitle: "NestJS vs Express.js: Node.js Framework Comparison | Stacklyn",
    metaDescription: "Choose between NestJS and Express.js for your Node.js project. Compare structure, learning curve, scalability, and production suitability.",
    readTime: "7 min",
  },
  {
    slug: "nodejs-performance-optimization",
    title: "Node.js Performance Optimization: 10 Techniques That Work",
    category: "Node.js",
    keyword: "Node.js performance optimization techniques",
    intent: "guide",
    metaTitle: "Node.js Performance Optimization: 10 Proven Techniques | Stacklyn",
    metaDescription: "Cluster module, worker threads, caching, async patterns, connection pooling, profiling — 10 performance techniques for production Node.js.",
    readTime: "11 min",
  },
  {
    slug: "redis-with-nodejs",
    title: "How to Use Redis with Node.js for Caching and Session Management",
    category: "Node.js",
    keyword: "Redis Node.js caching sessions",
    intent: "tutorial",
    metaTitle: "Redis with Node.js: Caching & Sessions Guide | Stacklyn",
    metaDescription: "Implement Redis caching, session storage, rate limiting, and pub/sub in Node.js. Includes ioredis setup and production patterns.",
    readTime: "10 min",
  },
  {
    slug: "real-time-apps-nodejs-socketio",
    title: "Building Real-Time Applications with Node.js and Socket.io",
    category: "Node.js",
    keyword: "real-time applications Node.js Socket.io",
    intent: "tutorial",
    metaTitle: "Real-Time Apps with Node.js and Socket.io | Stacklyn",
    metaDescription: "Build real-time chat, live notifications, and collaborative features with Node.js and Socket.io. Includes rooms, authentication, and scaling.",
    readTime: "12 min",
  },
  // React
  {
    slug: "react-19-new-features",
    title: "React 19 New Features: What Every Developer Needs to Know",
    category: "React",
    keyword: "React 19 new features",
    intent: "informational",
    metaTitle: "React 19 New Features — Complete Guide | Stacklyn",
    metaDescription: "React 19 Actions, use() hook, Document Metadata, form handling, optimistic updates — everything new developers need to know.",
    readTime: "8 min",
  },
  {
    slug: "react-server-components-explained",
    title: "React Server Components Explained with Practical Examples",
    category: "React",
    keyword: "React Server Components explained",
    intent: "informational",
    metaTitle: "React Server Components Explained with Examples | Stacklyn",
    metaDescription: "Understand React Server Components: what they are, how they differ from Client Components, when to use each, and practical patterns.",
    readTime: "9 min",
  },
  {
    slug: "zustand-vs-redux",
    title: "Zustand vs Redux: Which State Management Should You Use in 2025?",
    category: "React",
    keyword: "Zustand vs Redux state management 2025",
    intent: "comparison",
    metaTitle: "Zustand vs Redux 2025: State Management Comparison | Stacklyn",
    metaDescription: "Compare Zustand and Redux Toolkit for React state management. Bundle size, boilerplate, DevTools, and when each is the right choice.",
    readTime: "7 min",
  },
  {
    slug: "saas-dashboard-react-tailwind",
    title: "How to Build a SaaS Dashboard with React and Tailwind CSS",
    category: "React",
    keyword: "build SaaS dashboard React Tailwind CSS",
    intent: "tutorial",
    metaTitle: "Build a SaaS Dashboard with React and Tailwind CSS | Stacklyn",
    metaDescription: "Step-by-step guide to building a production SaaS dashboard with React, Tailwind CSS, shadcn/ui, Recharts, and TanStack Query.",
    readTime: "14 min",
  },
  {
    slug: "tanstack-query-vs-swr",
    title: "TanStack Query vs SWR: Data Fetching in React Compared",
    category: "React",
    keyword: "TanStack Query vs SWR React data fetching",
    intent: "comparison",
    metaTitle: "TanStack Query vs SWR: React Data Fetching Comparison | Stacklyn",
    metaDescription: "Choose between TanStack Query and SWR for React data fetching. Features, caching strategies, mutation handling, and bundle size.",
    readTime: "7 min",
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization: 8 Techniques That Actually Work",
    category: "React",
    keyword: "React performance optimization techniques",
    intent: "guide",
    metaTitle: "React Performance Optimization: 8 Proven Techniques | Stacklyn",
    metaDescription: "useMemo, useCallback, lazy, code splitting, virtualization, bundle analysis — 8 React performance optimizations that make a real difference.",
    readTime: "10 min",
  },
  // Next.js
  {
    slug: "nextjs-app-router-migration",
    title: "Next.js App Router vs Pages Router: Complete Migration Guide",
    category: "Next.js",
    keyword: "Next.js App Router migration Pages Router",
    intent: "guide",
    metaTitle: "Migrate from Pages Router to App Router in Next.js | Stacklyn",
    metaDescription: "Step-by-step Next.js Pages Router to App Router migration. Routing, data fetching, layouts, auth, and API routes changes explained.",
    readTime: "12 min",
  },
  {
    slug: "multi-tenant-saas-nextjs-stripe",
    title: "How to Build a Multi-Tenant SaaS with Next.js and Stripe",
    category: "Next.js",
    keyword: "multi-tenant SaaS Next.js Stripe",
    intent: "tutorial",
    metaTitle: "Build Multi-Tenant SaaS with Next.js and Stripe | Stacklyn",
    metaDescription: "Complete guide to building a multi-tenant SaaS: subdomains, Stripe subscriptions, tenant isolation, database schema, and Next.js App Router.",
    readTime: "16 min",
  },
  {
    slug: "nextjs-seo-guide",
    title: "Next.js SEO: The Complete Technical Guide for 2025",
    category: "Next.js",
    keyword: "Next.js SEO guide 2025",
    intent: "guide",
    metaTitle: "Next.js SEO: Complete Technical Guide 2025 | Stacklyn",
    metaDescription: "Metadata API, JSON-LD, sitemaps, Open Graph, robots.txt, canonical URLs, Core Web Vitals — the complete Next.js SEO implementation guide.",
    readTime: "13 min",
  },
  {
    slug: "nextjs-vs-remix",
    title: "Next.js vs Remix: Which React Framework is Right for You?",
    category: "Next.js",
    keyword: "Next.js vs Remix comparison",
    intent: "comparison",
    metaTitle: "Next.js vs Remix 2025: Framework Comparison | Stacklyn",
    metaDescription: "Compare Next.js and Remix on routing, data loading, mutations, deployment, and developer experience. Choose the right React framework.",
    readTime: "8 min",
  },
  {
    slug: "deploy-nextjs-aws-without-vercel",
    title: "How to Deploy Next.js on AWS Without Vercel",
    category: "Next.js",
    keyword: "deploy Next.js AWS without Vercel",
    intent: "tutorial",
    metaTitle: "Deploy Next.js on AWS Without Vercel — Full Guide | Stacklyn",
    metaDescription: "Deploy Next.js on AWS ECS, EC2, or Lambda@Edge. Docker containerization, ALB setup, HTTPS, environment variables, and CI/CD with GitHub Actions.",
    readTime: "14 min",
  },
  {
    slug: "nextjs-server-actions-guide",
    title: "Server Actions in Next.js 15: Complete Guide with Examples",
    category: "Next.js",
    keyword: "Next.js 15 Server Actions guide",
    intent: "guide",
    metaTitle: "Next.js 15 Server Actions: Complete Guide | Stacklyn",
    metaDescription: "Everything about Next.js Server Actions: form handling, mutations, optimistic updates, validation with Zod, error handling, and security.",
    readTime: "10 min",
  },
  // Startups
  {
    slug: "build-mvp-8-weeks",
    title: "How to Build an MVP in 8 Weeks: A Step-by-Step Guide",
    category: "Startups",
    keyword: "build MVP 8 weeks step by step",
    intent: "guide",
    metaTitle: "How to Build an MVP in 8 Weeks — Startup Guide | Stacklyn",
    metaDescription: "Week-by-week MVP development roadmap: discovery, design, tech stack selection, core features, testing, and launch checklist for founders.",
    readTime: "10 min",
  },
  {
    slug: "tech-stack-for-startups-2025",
    title: "Tech Stack for Startups in 2025: What We Recommend and Why",
    category: "Startups",
    keyword: "tech stack for startups 2025",
    intent: "informational",
    metaTitle: "Best Tech Stack for Startups in 2025 | Stacklyn",
    metaDescription: "Recommended startup tech stack: Next.js, Node.js, PostgreSQL, Supabase, Vercel, Clerk, and Stripe. Why this stack and when to choose alternatives.",
    readTime: "8 min",
  },
  {
    slug: "build-vs-buy-custom-software",
    title: "Build vs Buy: When Startups Should Use Custom Software",
    category: "Startups",
    keyword: "build vs buy custom software startups",
    intent: "informational",
    metaTitle: "Build vs Buy Software: Guide for Startups | Stacklyn",
    metaDescription: "When should your startup build custom software vs use off-the-shelf tools? Framework for making the decision with real examples.",
    readTime: "7 min",
  },
  {
    slug: "hire-software-development-agency-startup",
    title: "How to Hire a Software Development Agency for Your Startup",
    category: "Startups",
    keyword: "hire software development agency startup",
    intent: "guide",
    metaTitle: "How to Hire a Software Agency for Your Startup | Stacklyn",
    metaDescription: "What to look for in a software agency, questions to ask, red flags, pricing structures, and how to structure the engagement for startup success.",
    readTime: "9 min",
  },
  // SaaS
  {
    slug: "build-saas-application-from-scratch",
    title: "How to Build a SaaS Application from Scratch: A Developer's Roadmap",
    category: "SaaS",
    keyword: "build SaaS application from scratch roadmap",
    intent: "guide",
    metaTitle: "How to Build a SaaS App from Scratch — Complete Roadmap | Stacklyn",
    metaDescription: "Complete SaaS development roadmap: architecture, auth, subscriptions, multi-tenancy, onboarding, monitoring, and scaling. From zero to production.",
    readTime: "15 min",
  },
  {
    slug: "multi-tenancy-saas-architecture",
    title: "Multi-Tenancy Architecture in SaaS: Approaches and Trade-offs",
    category: "SaaS",
    keyword: "multi-tenancy architecture SaaS approaches",
    intent: "informational",
    metaTitle: "Multi-Tenancy Architecture in SaaS: A Developer's Guide | Stacklyn",
    metaDescription: "Database-per-tenant, schema-per-tenant, and shared-schema multi-tenancy in SaaS. Compare isolation, cost, complexity, and when to use each.",
    readTime: "9 min",
  },
  {
    slug: "stripe-integration-saas-guide",
    title: "Stripe Integration Guide for SaaS: Subscriptions, Webhooks, and Billing Portal",
    category: "SaaS",
    keyword: "Stripe integration SaaS subscriptions webhooks",
    intent: "tutorial",
    metaTitle: "Stripe Integration for SaaS: Complete Guide | Stacklyn",
    metaDescription: "Integrate Stripe subscriptions, customer portal, webhooks, usage billing, and trials into your SaaS with Node.js and Next.js examples.",
    readTime: "13 min",
  },
  {
    slug: "saas-database-design-postgresql",
    title: "SaaS Database Design: PostgreSQL Schema for Multi-Tenant Applications",
    category: "SaaS",
    keyword: "SaaS database design PostgreSQL multi-tenant schema",
    intent: "tutorial",
    metaTitle: "SaaS PostgreSQL Database Schema for Multi-Tenancy | Stacklyn",
    metaDescription: "Design a scalable PostgreSQL schema for your SaaS: organizations, memberships, roles, subscriptions, and audit logs with RLS.",
    readTime: "11 min",
  },
  {
    slug: "saas-user-authentication-clerk-nextjs",
    title: "How to Build SaaS User Authentication with Clerk and Next.js",
    category: "SaaS",
    keyword: "SaaS authentication Clerk Next.js",
    intent: "tutorial",
    metaTitle: "SaaS Auth with Clerk and Next.js — Complete Guide | Stacklyn",
    metaDescription: "Implement multi-org SaaS authentication with Clerk and Next.js App Router: sign-up, login, org switching, roles, and protected routes.",
    readTime: "10 min",
  },
  // DevOps
  {
    slug: "docker-nodejs-production",
    title: "Docker for Node.js Developers: Production-Ready Containerization",
    category: "DevOps",
    keyword: "Docker Node.js production containerization",
    intent: "guide",
    metaTitle: "Docker for Node.js: Production-Ready Containerization | Stacklyn",
    metaDescription: "Write efficient Dockerfiles for Node.js, optimize layer caching, multi-stage builds, Docker Compose for local dev, and production deployment.",
    readTime: "11 min",
  },
  {
    slug: "github-actions-cicd-nodejs-nextjs",
    title: "GitHub Actions CI/CD Pipeline for Node.js + Next.js: Full Guide",
    category: "DevOps",
    keyword: "GitHub Actions CI/CD Node.js Next.js pipeline",
    intent: "tutorial",
    metaTitle: "GitHub Actions CI/CD for Node.js and Next.js | Stacklyn",
    metaDescription: "Build a complete GitHub Actions CI/CD pipeline: lint, test, build, Docker push, and deploy to AWS or Vercel with environment secrets.",
    readTime: "12 min",
  },
  {
    slug: "kubernetes-nodejs-microservices",
    title: "How to Set Up Kubernetes for a Node.js Microservices Application",
    category: "DevOps",
    keyword: "Kubernetes Node.js microservices setup",
    intent: "tutorial",
    metaTitle: "Kubernetes for Node.js Microservices — Setup Guide | Stacklyn",
    metaDescription: "Deploy Node.js microservices on Kubernetes: Deployments, Services, Ingress, ConfigMaps, Secrets, health checks, and Helm charts.",
    readTime: "14 min",
  },
  {
    slug: "zero-downtime-deployment-nodejs",
    title: "Zero-Downtime Deployment Strategies for Node.js Applications",
    category: "DevOps",
    keyword: "zero-downtime deployment Node.js strategies",
    intent: "guide",
    metaTitle: "Zero-Downtime Node.js Deployment Strategies | Stacklyn",
    metaDescription: "Blue-green, rolling, and canary deployments for Node.js. Graceful shutdown, health checks, and database migration strategies.",
    readTime: "9 min",
  },
  {
    slug: "monitoring-nodejs-production",
    title: "Monitoring Node.js in Production: Tools, Metrics, and Alerts",
    category: "DevOps",
    keyword: "monitoring Node.js production tools metrics alerts",
    intent: "guide",
    metaTitle: "Monitoring Node.js in Production: Complete Guide | Stacklyn",
    metaDescription: "Production Node.js monitoring: Prometheus, Grafana, OpenTelemetry, structured logging, APM, error tracking, and alerting setup.",
    readTime: "11 min",
  },
  // Backend Development
  {
    slug: "postgresql-vs-mongodb",
    title: "PostgreSQL vs MongoDB: Which Database Should You Choose in 2025?",
    category: "Backend Development",
    keyword: "PostgreSQL vs MongoDB 2025 comparison",
    intent: "comparison",
    metaTitle: "PostgreSQL vs MongoDB: 2025 Database Comparison | Stacklyn",
    metaDescription: "Compare PostgreSQL and MongoDB on data model, performance, scaling, querying, and use cases. Choose the right database for your application.",
    readTime: "8 min",
  },
  {
    slug: "api-security-best-practices",
    title: "API Security Best Practices: Rate Limiting, Auth, and Input Validation",
    category: "Backend Development",
    keyword: "API security best practices rate limiting authentication",
    intent: "guide",
    metaTitle: "API Security Best Practices for Node.js | Stacklyn",
    metaDescription: "Secure your Node.js APIs: rate limiting with Redis, JWT validation, OWASP input validation, CORS configuration, and security headers.",
    readTime: "10 min",
  },
  {
    slug: "database-indexing-explained",
    title: "Database Indexing Explained: How to Speed Up Your Queries",
    category: "Backend Development",
    keyword: "database indexing explained speed up queries",
    intent: "informational",
    metaTitle: "Database Indexing Explained: Speed Up Your PostgreSQL Queries | Stacklyn",
    metaDescription: "B-tree, hash, partial, composite — understand PostgreSQL indexing strategies and how to identify missing indexes with EXPLAIN ANALYZE.",
    readTime: "9 min",
  },
  {
    slug: "scalable-rest-api-design",
    title: "How to Design a Scalable REST API: Best Practices and Patterns",
    category: "Backend Development",
    keyword: "design scalable REST API best practices patterns",
    intent: "guide",
    metaTitle: "Scalable REST API Design: Best Practices | Stacklyn",
    metaDescription: "REST API design patterns: versioning, pagination, error responses, authentication, idempotency, rate limiting, and OpenAPI documentation.",
    readTime: "10 min",
  },
];

const categoryColors: Record<string, string> = {
  "AI": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Software Engineering": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  "React": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Next.js": "bg-slate-400/10 text-slate-300 border-slate-400/20",
  "Startups": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "SaaS": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "DevOps": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Backend Development": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const intentLabels: Record<string, string> = {
  informational: "Guide",
  comparison: "Comparison",
  tutorial: "Tutorial",
  guide: "Deep Dive",
};

function BlogIndex() {
  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Stacklyn Engineering Blog",
    description: "Technical guides, tutorials, and comparisons on Node.js, React, Next.js, AI development, and software engineering by Stacklyn.",
    url: "https://stacklyn.in/blog",
    publisher: {
      "@type": "Organization",
      name: "Stacklyn",
      url: "https://stacklyn.in",
    },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://stacklyn.in/blog/${p.slug}`,
      description: p.metaDescription,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <SchemaMarkup schema={blogListingSchema} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            Stacklyn Engineering
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guides, tutorials, and comparisons on Node.js, React, Next.js, AI integration,
            and full-stack software development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${categoryColors[cat]}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">50 articles in progress.</span>{" "}
            Subscribe to our newsletter to get notified when new posts are published.
          </p>
          <a
            href="mailto:veenaprasad@stacklyn.in?subject=Subscribe to Stacklyn Blog"
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get notified
          </a>
        </div>

        {/* Posts Grid */}
        {categories.map((cat) => {
          const catPosts = posts.filter((p) => p.category === cat);
          if (!catPosts.length) return null;
          return (
            <section key={cat} className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${categoryColors[cat]}`}>
                  {cat}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {catPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group relative bg-background border border-border rounded-xl p-5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="text-xs text-muted-foreground">{intentLabels[post.intent]}</span>
                      <span className="text-xs text-muted-foreground shrink-0">{post.readTime} read</span>
                    </div>
                    <h2 className="font-semibold text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {post.metaDescription}
                    </p>
                    <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Keyword: <span className="text-foreground/70">{post.keyword}</span>
                      </span>
                      <span className="text-xs text-primary/70 font-medium">Coming soon →</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Have a question on any of these topics?</h2>
          <p className="text-muted-foreground mb-6">
            Our engineers have shipped production systems covering everything in this blog.
            Talk to us about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:veenaprasad@stacklyn.in"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Talk to an engineer
            </a>
            <Link
              to="/services/full-stack-development"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-background font-semibold text-sm hover:bg-accent transition-colors"
            >
              View our services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Stacklyn Engineering Blog — Node.js, React, Next.js, AI" },
      {
        name: "description",
        content:
          "Technical guides and tutorials on Node.js, React, Next.js, AI development, SaaS, and full-stack software engineering by Stacklyn, Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "software engineering blog, Node.js tutorials, React guides, Next.js tips, AI development articles, SaaS development blog India",
      },
      { property: "og:title", content: "Stacklyn Engineering Blog — Node.js, React, Next.js, AI" },
      {
        property: "og:description",
        content:
          "Technical guides and tutorials by Stacklyn engineers on Node.js, React, Next.js, AI, and full-stack development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/blog" }],
  }),
  component: BlogIndex,
});
