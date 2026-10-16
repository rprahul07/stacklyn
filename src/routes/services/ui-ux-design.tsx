import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceData } from "@/components/velora/ServicePageTemplate";

const data: ServiceData = {
  title: "UI/UX Design",
  slug: "ui-ux-design",
  headline: "UI/UX Design for Web Apps, Mobile Apps & SaaS",
  tagline: "Product design · Prototypes · Design systems · Kerala, India",
  intro:
    "Stacklyn designs web apps, mobile apps, SaaS products, and websites that are easy to use and look professional — from user flows and wireframes to clickable prototypes and developer-ready design systems. Because our designers work alongside our engineers, designs are built exactly as drawn.",
  whatIs:
    "UX (user experience) design decides how a product works — the flows, screens, and steps a user takes to get something done. UI (user interface) design decides how it looks — layout, typography, colour, and components. Good UI/UX design makes software faster to learn, reduces support requests, and increases sign-ups and sales.",
  whyItMatters:
    "Users judge software in seconds. A confusing sign-up, cluttered dashboard, or slow checkout loses customers no matter how good the underlying system is. Designing and testing flows before development also prevents expensive rework later.",
  subServices: [
    "User Research and Requirement Workshops",
    "User Flows and Information Architecture",
    "Wireframes",
    "High-fidelity UI Design",
    "Clickable Prototypes",
    "Mobile App UI Design (iOS and Android)",
    "SaaS Dashboard and Admin Panel Design",
    "Design Systems and Component Libraries",
    "Website and App Redesign",
    "Usability Review and UX Audit",
  ],
  benefits: [
    {
      title: "Easier for Users",
      desc: "Clear flows and familiar patterns so people get things done without training or support calls.",
    },
    {
      title: "Higher Conversion",
      desc: "Better sign-up, checkout, and enquiry flows turn more visitors into customers.",
    },
    {
      title: "Less Rework",
      desc: "Testing a prototype is far cheaper than changing finished code.",
    },
    {
      title: "Consistent Brand",
      desc: "A design system keeps every screen consistent as the product grows.",
    },
    {
      title: "Developer-ready",
      desc: "Organised Figma files with components, spacing, and states that engineers can build from directly.",
    },
    {
      title: "Accessible",
      desc: "Readable contrast, sensible font sizes, and keyboard-friendly patterns for all users.",
    },
  ],
  process: [
    {
      step: "Understand",
      desc: "Goals, users, competitors, and the tasks the product must make easy.",
    },
    {
      step: "Structure",
      desc: "User flows and information architecture for every key journey.",
    },
    {
      step: "Wireframe",
      desc: "Low-fidelity layouts to agree on content and flow before visual design.",
    },
    {
      step: "Visual Design",
      desc: "High-fidelity screens in your brand, for desktop and mobile.",
    },
    {
      step: "Prototype & Test",
      desc: "A clickable prototype you can try and share with users for feedback.",
    },
    {
      step: "Handoff",
      desc: "A design system and developer-ready files — or we build it ourselves.",
    },
  ],
  techStack: [
    "Figma",
    "FigJam",
    "Design Tokens",
    "Tailwind CSS",
    "shadcn/ui",
    "Radix UI",
    "Framer Motion",
    "Storybook",
    "React",
    "Flutter",
    "Lottie",
    "Google Analytics",
    "Hotjar",
  ],
  whyStacklyn: [
    {
      title: "Design + Engineering Together",
      desc: "Designers and engineers on the same team, so designs are realistic and built faithfully.",
    },
    {
      title: "Product Thinking",
      desc: "We design for business outcomes — sign-ups, orders, and fewer support requests — not just looks.",
    },
    {
      title: "Fixed-price Scope",
      desc: "Agreed screens, rounds of revision, and price before we start.",
    },
    {
      title: "Fast Iterations",
      desc: "Frequent reviews so you see progress and steer early.",
    },
    {
      title: "You Own the Files",
      desc: "All Figma files and assets are handed over to you.",
    },
    {
      title: "End-to-end Option",
      desc: "Take the designs to any developer, or have us build the product too.",
    },
  ],
  faqs: [
    {
      q: "How much does UI/UX design cost?",
      a: "With Stacklyn, UI/UX design for an MVP or a mobile app typically costs $1,500–5,000 depending on the number of screens and user roles. A full product redesign or design system usually costs $3,000–10,000. Pricing is fixed per agreed scope.",
    },
    {
      q: "How long does UI/UX design take?",
      a: "Design for an MVP or app usually takes 2–4 weeks. Larger products and design systems take 4–8 weeks, often running ahead of development sprint by sprint.",
    },
    {
      q: "What is the difference between UI and UX design?",
      a: "UX design is how the product works — flows, steps, and structure. UI design is how it looks — layout, colour, typography, and components. Both are needed for software people enjoy using.",
    },
    {
      q: "Do you only design, or also develop?",
      a: "Both. You can take the designs to your own developers, or our engineers can build the web or mobile app from them.",
    },
    {
      q: "Can you redesign our existing app or website?",
      a: "Yes. We start with a UX audit of the current product, identify the biggest problems, and redesign in phases so you can ship improvements quickly.",
    },
    {
      q: "Which design tools do you use?",
      a: "We design in Figma and deliver organised files with components, variants, and design tokens that map directly to code.",
    },
    {
      q: "Do you create a design system?",
      a: "Yes. For products that will grow, we create a design system — colours, typography, spacing, and reusable components — so new screens stay consistent.",
    },
    {
      q: "How do I start a design project?",
      a: "Share what you are building through the contact form, email rahulrp@stacklyn.in, or WhatsApp +91 95444 51720. We reply within 24 hours.",
    },
  ],
  relatedServices: [
    { name: "Web Application Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "MVP Development", href: "/services/mvp-development" },
    { name: "React Development", href: "/services/react-development" },
    { name: "E-commerce Development", href: "/services/ecommerce-development" },
  ],
};

export const Route = createFileRoute("/services/ui-ux-design")({
  head: () => ({
    meta: [
      { title: "UI/UX Design Company for Web, Mobile & SaaS | Stacklyn Kerala" },
      {
        name: "description",
        content:
          "Stacklyn designs web apps, mobile apps, SaaS dashboards, and websites — user flows, wireframes, clickable prototypes, and design systems in Figma. Design and engineering under one roof in Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "UI UX design company Kerala, UI UX design services India, mobile app design, SaaS dashboard design, Figma designer India, product design agency India, website redesign",
      },
      {
        property: "og:title",
        content: "UI/UX Design for Web, Mobile & SaaS | Stacklyn",
      },
      {
        property: "og:description",
        content:
          "User flows, prototypes, and design systems — design and engineering under one roof in Kerala, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UI/UX Design | Stacklyn" },
      {
        name: "twitter:description",
        content: "Product design for web apps, mobile apps, and SaaS, from Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/services/ui-ux-design" }],
  }),
  component: () => <ServicePage data={data} />,
});
