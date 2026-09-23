import { createFileRoute } from "@tanstack/react-router";
import { SimplePageLayout } from "@/components/velora/SimplePageLayout";

const BASE_URL = "https://stacklyn.in";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${BASE_URL}/about#webpage`,
      "url": `${BASE_URL}/about`,
      "name": "About Stacklyn",
      "about": { "@id": `${BASE_URL}/#organization` },
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "inLanguage": "en",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "About", "item": `${BASE_URL}/about` },
      ],
    },
  ],
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Stacklyn | Oil & Gas, Industrial & AI Software Company in India" },
      {
        name: "description",
        content:
          "Stacklyn is a software and AI engineering company in Kerala, India, building custom oil and gas, industrial, and AI automation software for companies in India, the Gulf, and worldwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/about` },
      { property: "og:title", content: "About Stacklyn" },
      {
        property: "og:description",
        content: "Custom oil and gas, industrial, and AI automation software, engineered in Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SimplePageLayout
      title="About Stacklyn"
      eyebrow="Company"
      intro="Stacklyn is a software and AI engineering company based in Kerala, India. We build custom software for oil and gas, industrial, and growing businesses in India, the Gulf, and worldwide."
      schema={schema}
    >
      <h2>What we build</h2>
      <p>
        We work where off-the-shelf software stops fitting: operations that run on paper permits, spreadsheets,
        and email, and teams whose procedures, clients, and regulations are too specific for a generic product.
      </p>
      <ul>
        <li>
          <strong>Oil &amp; gas and industrial software</strong> — digital permit to work, HSE and incident management,
          in-country value reporting, crew and competency tracking, document control, and operations dashboards.
          See our <a href="/markets">Gulf and global market pages</a> and <a href="/industries">industries</a>.
        </li>
        <li>
          <strong>AI and automation</strong> — chatbots and assistants grounded in your own data, AI agents, document
          processing, WhatsApp automation, and workflow automation. See <a href="/ai-automation">AI &amp; Automation</a>.
        </li>
        <li>
          <strong>Custom software and products</strong> — web platforms, mobile apps, SaaS products, and MVPs built on
          React, Next.js, Node.js, and modern cloud infrastructure.
        </li>
      </ul>

      <h2>Who we work with</h2>
      <p>
        Oil and gas operators, EPC contractors, and service companies; manufacturers, logistics and facility
        management firms; and small and mid-sized businesses and startups that need an engineering team rather than
        a vendor that resells templates.
      </p>

      <h2>Where we work</h2>
      <p>
        Our engineering team is in Kerala, India. We work with clients across India, in the UAE, Saudi Arabia, Qatar,
        and Oman, and in the UK, Europe, North America, and Australia. India is 1.5 hours ahead of the UAE and Oman
        and 2.5 hours ahead of Saudi Arabia and Qatar, so most of a Gulf working day overlaps with ours.
      </p>

      <h2>How we work</h2>
      <ul>
        <li><strong>Discovery first.</strong> We review your real workflow, documents, or data before proposing anything.</li>
        <li><strong>Small pilot, then phases.</strong> A working pilot proves fit before larger commitments, and each phase has a fixed price.</li>
        <li><strong>Weekly demos.</strong> You see working software in a shared test environment every week, not status reports.</li>
        <li><strong>Senior engineers, directly.</strong> You talk to the people building your system.</li>
        <li><strong>You own it.</strong> We sign an NDA before detailed discussions, and the source code, data, and intellectual property are yours.</li>
        <li><strong>Honest scope.</strong> We tell you when an off-the-shelf product is the cheaper answer, and what AI can and cannot do for your use case.</li>
      </ul>

      <h2>Talk to us</h2>
      <p>
        WhatsApp or call <a href="https://wa.me/919544451720">+91 95444 51720</a>, email{" "}
        <a href="mailto:rahulrp@stacklyn.in">rahulrp@stacklyn.in</a>, or send an enquiry through the{" "}
        <a href="/#contact">contact form</a>. We reply within 24 hours. For a quick ballpark first, try our{" "}
        <a href="/tools/software-cost-estimator">software cost estimator</a>.
      </p>
    </SimplePageLayout>
  );
}
