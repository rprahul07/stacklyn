import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage, type IndustryData } from "@/components/velora/IndustryPageTemplate";

const BASE_URL = "https://stacklyn.in";

const data: IndustryData = {
  industry: "EdTech & Education",
  slug: "edtech-software",
  headline: "Custom EdTech & Education Software Development",
  tagline: "LMS · Assessments · Live Classes · School ERP · Student Apps · Learning Analytics",
  intro:
    "Stacklyn builds custom education software for edtech startups, schools, universities, coaching institutes, and corporate training teams. We deliver learning management systems, assessment and proctoring platforms, live class and cohort products, school and campus ERP, student and parent mobile apps, and learning analytics that show where learners actually get stuck.",
  industryContext:
    "Education products are judged on completion, not on features. A course library nobody finishes and an assessment engine that buckles on results day are the two failure modes that end edtech contracts. The hard engineering sits in unglamorous places: assessment integrity under concurrent load, video delivery on inconsistent mobile connections, progress tracking that survives an app being killed mid-lesson, and reporting that a school administrator can read without training. Custom development matters most where an institution's academic structure — its terms, streams, grading schemes, and fee rules — refuses to fit a generic product.",
  painPoints: [
    { title: "Low Course Completion", desc: "Content delivered without pacing, nudges, or progress visibility, so enrolments look healthy while completion rates quietly collapse." },
    { title: "Assessments Failing Under Load", desc: "Exam platforms that degrade when the whole cohort submits at once, creating disputes that damage institutional credibility." },
    { title: "Rigid Academic Structures", desc: "Off-the-shelf systems that cannot express your terms, streams, electives, grading schemes, or fee rules without painful workarounds." },
    { title: "Fragmented School Operations", desc: "Admissions, attendance, timetable, fees, exams, and communication running in separate tools with duplicate student records." },
    { title: "Poor Mobile Learning Experience", desc: "Video-heavy content that fails on patchy connections, with no offline access or resumable playback for learners on mobile data." },
    { title: "No Real Learning Insight", desc: "Dashboards showing logins and video views but never which concepts a cohort is failing, so intervention comes after the exam." },
  ],
  solutions: [
    {
      title: "Learning Management System (LMS)",
      desc: "Course authoring, structured curriculum paths, drip scheduling, prerequisites, progress tracking, certificates, discussion spaces, and instructor dashboards with cohort-level visibility.",
    },
    {
      title: "Assessment, Quiz & Proctoring Engine",
      desc: "Question banks with tagging and difficulty, randomised paper generation, timed attempts, auto and manual evaluation, negative marking rules, and browser lockdown or AI proctoring options.",
    },
    {
      title: "Live Classes & Cohort Learning",
      desc: "Live sessions with attendance capture, recordings tied to the curriculum, breakout structures, doubt resolution queues, assignments with submission and grading, and cohort progress boards.",
    },
    {
      title: "School & Campus ERP",
      desc: "Admissions, student records, attendance, timetable and substitution, examinations and report cards, fee management with online collection, transport, hostel, and staff administration.",
    },
    {
      title: "Student & Parent Mobile App",
      desc: "Offline-capable lessons with resumable playback, assignments and deadlines, attendance and results, fee payment, announcements, and direct teacher communication for parents.",
    },
    {
      title: "Learning Analytics & Early Warning",
      desc: "Concept-level mastery mapping, attempt and error pattern analysis, at-risk learner flags based on engagement and performance trends, and intervention tracking for academic teams.",
    },
    {
      title: "Content Delivery & Video Infrastructure",
      desc: "Adaptive bitrate streaming, DRM and watermarking for paid content, CDN distribution, download-for-offline with expiry, and bandwidth-aware playback for mobile learners.",
    },
    {
      title: "AI Tutoring & Content Tools",
      desc: "AI-assisted doubt resolution grounded in your own course material, automated question generation from content, descriptive answer evaluation support, and personalised revision paths.",
    },
  ],
  techStack: [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "Redis",
    "React Native (Student & Parent Apps)",
    "WebRTC / Live Streaming Infrastructure",
    "Adaptive Bitrate Video & DRM",
    "SCORM / xAPI Support",
    "Elasticsearch (Content & Question Search)",
    "REST API", "GraphQL", "WebSockets",
    "Payment Gateway Integration (Fees)",
    "LLM Integration (AI Tutoring & Question Generation)",
    "AWS", "Azure", "CDN", "Docker", "Kubernetes",
    "Recharts / D3.js (Learning Dashboards)",
  ],
  clients: [
    "EdTech startups and online course platforms",
    "K-12 schools and school groups",
    "Universities, colleges, and campuses",
    "Coaching and test-preparation institutes",
    "Skilling, vocational, and certification providers",
    "Corporate learning and development teams",
    "Publishers moving content to digital delivery",
  ],
  whyStacklyn: [
    { title: "Completion Is the Metric", desc: "We design for pacing, nudges, and visible progress, because enrolment numbers flatter a product while completion rates decide whether it renews." },
    { title: "Assessments That Hold on Results Day", desc: "Exam engines are load-tested for the moment an entire cohort submits simultaneously — the single scenario where edtech platforms most often fail publicly." },
    { title: "Built for Bad Connections", desc: "Offline lessons, resumable playback, and bandwidth-aware streaming reflect how learners on mobile data actually study, not how a demo runs on office wifi." },
    { title: "Your Academic Structure, Not a Template", desc: "Terms, streams, electives, grading schemes, and fee rules are modelled to match your institution, which is the usual reason generic school products get abandoned." },
    { title: "Analytics Teachers Can Act On", desc: "We report concept-level mastery and at-risk flags rather than logins and video views, so intervention happens before the exam rather than after it." },
    { title: "Content Protection Handled Properly", desc: "DRM, watermarking, expiring downloads, and device limits protect paid content without making the legitimate learner experience worse." },
  ],
  faqs: [
    {
      q: "Does Stacklyn build custom LMS platforms?",
      a: "Yes. Stacklyn builds custom learning management systems with course authoring, structured curriculum paths, drip scheduling, prerequisites, progress tracking, certificates, discussion spaces, and instructor dashboards — designed around your academic model rather than a fixed template.",
    },
    {
      q: "Can Stacklyn build an online assessment and proctoring platform?",
      a: "Yes. We build assessment engines with tagged question banks, randomised paper generation, timed attempts, auto and manual evaluation, negative marking rules, and proctoring options including browser lockdown and AI-assisted monitoring. We load-test for full-cohort concurrent submission.",
    },
    {
      q: "Do you build school ERP and campus management systems?",
      a: "Yes. We build school and campus ERP covering admissions, student records, attendance, timetable and substitution management, examinations and report cards, fee management with online collection, transport, hostel, and staff administration on a single student identity.",
    },
    {
      q: "Can students access content offline?",
      a: "Yes. We build offline-capable mobile apps with downloadable lessons, resumable playback that survives the app being closed, expiring offline access for paid content, and bandwidth-aware adaptive streaming for learners on mobile data.",
    },
    {
      q: "Can Stacklyn build live class functionality?",
      a: "Yes. We build live class products with WebRTC or streaming infrastructure, attendance capture, recordings automatically tied to curriculum position, breakout structures, doubt resolution queues, and assignment submission and grading workflows.",
    },
    {
      q: "How do you protect paid course content from piracy?",
      a: "We implement DRM and dynamic watermarking, expiring download tokens, device limits per account, and screen-capture deterrents where the platform allows. No approach is absolute, so we combine technical controls with account-level anomaly detection to flag sharing patterns.",
    },
    {
      q: "Can the platform support SCORM or xAPI content?",
      a: "Yes. We support SCORM packages and xAPI statement tracking where you need to run existing course content or report learning activity into an external learning record store.",
    },
    {
      q: "Can you add AI tutoring to our education platform?",
      a: "Yes. We build AI features grounded in your own course material — doubt resolution that answers from your content rather than the open internet, automated question generation, descriptive answer evaluation support, and personalised revision paths based on individual mastery gaps.",
    },
    {
      q: "How much does custom edtech software development cost?",
      a: "A focused build such as an LMS with courses, assessments, and payments starts from $6,000-14,000. A full platform with live classes, proctored assessments, mobile apps, video infrastructure, and analytics typically ranges from $20,000-80,000 depending on learner scale and feature depth.",
    },
    {
      q: "How do I start an edtech project with Stacklyn?",
      a: "Email rahulrp@stacklyn.in or WhatsApp +91 95444 51720 with your profile — learner numbers, content format, and whether you need LMS, assessments, live classes, or campus ERP. We run a free discovery call and deliver a phased proposal within 48 hours.",
    },
  ],
  relatedIndustries: [
    { name: "Healthcare Software", href: "/industries/healthcare-software" },
    { name: "E-commerce & Retail Software", href: "/industries/ecommerce-retail-software" },
    { name: "Real Estate & PropTech", href: "/industries/proptech-real-estate-software" },
    { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
  ],
  relatedServices: [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "MVP Development", href: "/services/mvp-development" },
    { name: "AI Application Development", href: "/services/ai-development" },
    { name: "Full Stack Development", href: "/services/full-stack-development" },
  ],
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/industries/edtech-software#service`,
      "name": "EdTech & Education Software Development",
      "provider": { "@type": "Organization", "name": "Stacklyn", "url": BASE_URL },
      "description":
        "Custom edtech software development: learning management systems, assessment and proctoring engines, live class platforms, school and campus ERP, student and parent apps, video infrastructure, and learning analytics.",
      "areaServed": ["IN", "AE", "SA", "GB", "US", "SG", "AU"],
      "serviceType": "Custom Software Development for Education and EdTech",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": `${BASE_URL}/industries` },
        { "@type": "ListItem", "position": 3, "name": "EdTech Software", "item": `${BASE_URL}/industries/edtech-software` },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": data.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/industries/edtech-software")({
  head: () => ({
    meta: [
      { title: "EdTech Software Development Company | LMS, Assessments, School ERP | Stacklyn" },
      {
        name: "description",
        content:
          "Stacklyn builds custom edtech software: learning management systems, assessment and proctoring platforms, live classes, school ERP, student apps, and learning analytics. Kerala, India. Serving edtech and institutions globally.",
      },
      {
        name: "keywords",
        content:
          "edtech software development India, custom LMS development company, online assessment platform development, proctoring software development, school ERP software development India, student app development, live class platform development, learning analytics platform, campus management system development, e-learning app development Kerala",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/industries/edtech-software` },
      { property: "og:title", content: "EdTech & Education Software Development | Stacklyn" },
      {
        property: "og:description",
        content:
          "Custom LMS, assessment and proctoring engines, live classes, school ERP, and learning analytics. Kerala, India.",
      },
      { property: "og:image", content: `${BASE_URL}/og-image.png` },
      { property: "og:site_name", content: "Stacklyn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EdTech & Education Software Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "LMS, assessments and proctoring, live classes, school ERP, and learning analytics. From Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/industries/edtech-software` }],
  }),
  component: () => <IndustryPage data={data} schema={schemaMarkup} />,
});
