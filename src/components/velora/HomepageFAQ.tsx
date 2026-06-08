import { FAQ } from "./FAQ";

const homepageFAQs = [
  {
    q: "What is Stacklyn?",
    a: "Stacklyn is a custom software development company based in Kerala, India. We build scalable web applications, AI-powered products, SaaS platforms, and startup MVPs for clients worldwide. Our team specializes in full stack development, MERN stack, Node.js, React, Next.js, and AI application development.",
  },
  {
    q: "What services does Stacklyn offer?",
    a: "Stacklyn offers full stack development, MERN stack development, Node.js development, React development, Next.js development, AI application development, SaaS product development, startup MVP development, backend development, API design, cloud deployment, and DevOps services.",
  },
  {
    q: "How long does it take to build a startup MVP?",
    a: "At Stacklyn, a well-scoped startup MVP typically takes 8 to 12 weeks to deliver. The timeline depends on the complexity of features, integrations required, and design work. We follow an iterative process: discovery and scoping (1 week), design (1–2 weeks), development (5–7 weeks), testing and deployment (1–2 weeks).",
  },
  {
    q: "Does Stacklyn build AI applications?",
    a: "Yes. Stacklyn builds production-grade AI applications using OpenAI, Anthropic Claude, LangChain, LlamaIndex, and vector databases like Pinecone and Weaviate. Services include AI chatbots, retrieval-augmented generation (RAG) systems, AI agents, document intelligence platforms, and generative AI integrations.",
  },
  {
    q: "What tech stack does Stacklyn use?",
    a: "Stacklyn's primary tech stack includes: Frontend — React, Next.js, TypeScript, Tailwind CSS; Backend — Node.js, Express.js, Fastify, NestJS; Database — PostgreSQL, MongoDB, Redis; Cloud — AWS, Azure, Vercel, Cloudflare; AI — OpenAI, Anthropic, LangChain, vector databases; DevOps — Docker, GitHub Actions, CI/CD pipelines.",
  },
  {
    q: "Can Stacklyn build a startup MVP?",
    a: "Yes. MVP development is one of Stacklyn's core specializations. We have a structured 8–12 week process that takes your idea from concept to a production-deployed product. The MVP includes core features, a scalable architecture, cloud deployment, and a handoff package for future development.",
  },
  {
    q: "Does Stacklyn work with early-stage startups?",
    a: "Yes. Stacklyn frequently partners with early-stage startups, pre-seed, and seed-stage founders who need to move quickly and efficiently. We understand startup constraints and offer flexible engagement models including fixed-scope MVP packages and ongoing retainer-based development.",
  },
  {
    q: "What is MERN stack development?",
    a: "MERN stack development refers to building web applications using four technologies: MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (runtime environment). MERN is a popular JavaScript-only stack that enables rapid development of full stack web applications with a unified codebase.",
  },
  {
    q: "How do I hire Stacklyn for my project?",
    a: "To hire Stacklyn, send an inquiry through the contact form on our website, email veenaprasad@stacklyn.in, or WhatsApp +91 99617 46849. We respond within 24 hours. The process is: (1) Free discovery call to understand your requirements, (2) Proposal and estimate, (3) Contract and kickoff, (4) Weekly demo-based development.",
  },
  {
    q: "Does Stacklyn offer maintenance and support after launch?",
    a: "Yes. Stacklyn offers post-launch maintenance and support as a monthly retainer. Services include bug fixes, feature additions, performance monitoring, security updates, and cloud infrastructure management. We ensure your product stays updated, secure, and performant after delivery.",
  },
  {
    q: "What is the difference between custom software and off-the-shelf software?",
    a: "Custom software is built specifically for your business requirements, workflows, and users — giving you full control, scalability, and competitive differentiation. Off-the-shelf software is a pre-built solution (like Salesforce or Shopify) that fits general use cases. Custom software is recommended when your requirements are unique, when off-the-shelf solutions are too limiting, or when you're building a product to sell.",
  },
  {
    q: "Can Stacklyn build SaaS products?",
    a: "Yes. SaaS product development is a core service at Stacklyn. We build multi-tenant SaaS platforms with subscription billing, role-based access control (RBAC), usage analytics, API integrations, and cloud-native deployment on AWS or Azure. We have delivered SaaS products in EdTech, B2B tools, and enterprise workflow automation.",
  },
  {
    q: "Does Stacklyn do mobile app development?",
    a: "Yes. Stacklyn builds cross-platform mobile apps using Flutter and React Native. Our mobile services include consumer apps, enterprise mobile tools, and mobile-first SaaS products. We specialize in connecting mobile apps to scalable Node.js backends with real-time features.",
  },
  {
    q: "How does Stacklyn handle project communication?",
    a: "Stacklyn maintains transparent, structured communication throughout every project. We use Slack or WhatsApp for daily communication, Notion or Linear for project tracking, and conduct weekly video demos to show progress. All code is version-controlled on GitHub with pull request reviews.",
  },
  {
    q: "What industries does Stacklyn serve?",
    a: "Stacklyn has delivered software for EdTech, B2B SaaS, e-commerce, healthcare, fintech, community platforms, and enterprise tools. Our engineering approach is industry-agnostic — we apply the same rigorous architecture and development standards regardless of the domain.",
  },
  {
    q: "Can Stacklyn help with cloud deployment and DevOps?",
    a: "Yes. Stacklyn provides cloud deployment and DevOps services including AWS and Azure setup, Docker containerization, CI/CD pipeline configuration, environment management (staging/production), database provisioning, SSL certificates, monitoring, and logging. We ensure your application is production-ready from day one.",
  },
  {
    q: "What makes Stacklyn different from other software development agencies?",
    a: "Stacklyn operates with a startup mindset rather than agency overhead. Key differentiators: (1) Direct communication with senior engineers, not account managers; (2) Modern, type-safe tech stacks (Next.js, Node.js, TypeScript) vs legacy codebases; (3) AI-first thinking integrated into product development; (4) Transparent roadmaps with weekly demo reviews; (5) Architecture decisions made for long-term scalability, not just immediate delivery.",
  },
];

export function HomepageFAQ() {
  return (
    <FAQ
      items={homepageFAQs}
      title="Frequently Asked Questions About Stacklyn"
      includeSchema
    />
  );
}
