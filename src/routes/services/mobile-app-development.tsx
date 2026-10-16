import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceData } from "@/components/velora/ServicePageTemplate";

const data: ServiceData = {
  title: "Mobile App Development",
  slug: "mobile-app-development",
  headline: "Mobile App Development Company — iOS & Android",
  tagline: "Flutter · React Native · Kerala, India",
  intro:
    "Stacklyn builds iOS and Android apps for startups and businesses — customer apps, delivery and booking apps, field staff apps, and companion apps for your SaaS. We build the app, the backend, and the admin panel, and publish it to the App Store and Google Play.",
  whatIs:
    "Mobile app development is designing, building, and publishing applications for smartphones. Cross-platform frameworks such as Flutter and React Native let one codebase run on both iPhone and Android with near-native performance, which cuts cost and time compared with building two separate apps.",
  whyItMatters:
    "Your customers and field staff spend most of their screen time on phones. A good app gives them a faster way to order, book, pay, track, or report — with push notifications that bring them back — and gives you data on how they use your service.",
  subServices: [
    "iOS and Android App Development",
    "Cross-platform Apps (Flutter, React Native)",
    "App Backend and REST APIs",
    "Admin Panel and Dashboard",
    "Booking, Ordering, and Delivery Apps",
    "Field Staff and Offline-capable Apps",
    "Push Notifications and In-app Messaging",
    "Payment Integration (Razorpay, Stripe, Apple Pay, Google Pay)",
    "App Store and Play Store Publishing",
    "App Maintenance and Version Updates",
  ],
  benefits: [
    {
      title: "One Codebase, Two Platforms",
      desc: "Flutter or React Native lets one team ship to iPhone and Android together, saving time and budget.",
    },
    {
      title: "Complete Package",
      desc: "App, backend, database, and admin panel — everything needed to actually run the app, not just the screens.",
    },
    {
      title: "Works Offline",
      desc: "For field teams and patchy networks, apps can store data on the device and sync when the connection returns.",
    },
    {
      title: "Engagement Built In",
      desc: "Push notifications, in-app messages, and analytics so you can bring users back and see what they do.",
    },
    {
      title: "Store-ready",
      desc: "We prepare listings, screenshots, privacy details, and handle review so the app gets approved and published.",
    },
    {
      title: "Scales With You",
      desc: "A cloud backend that handles your first hundred users and your first hundred thousand without a rewrite.",
    },
  ],
  process: [
    {
      step: "Discovery",
      desc: "Users, core features, platforms, and integrations — agreed and prioritised in a free call.",
    },
    {
      step: "Design",
      desc: "Wireframes and clickable prototypes so you can try the app before code is written.",
    },
    {
      step: "Development",
      desc: "App, backend, and admin panel built in sprints, with test builds on your phone every week.",
    },
    {
      step: "Testing",
      desc: "Testing on real iOS and Android devices, different screen sizes, and poor network conditions.",
    },
    {
      step: "Store Launch",
      desc: "App Store and Google Play submission, review, and release.",
    },
    {
      step: "Updates & Support",
      desc: "Bug fixes, OS updates, and new features on an optional monthly plan.",
    },
  ],
  techStack: [
    "Flutter",
    "Dart",
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Firebase Cloud Messaging",
    "Google Maps",
    "Razorpay",
    "Stripe",
    "AWS",
    "App Store Connect",
    "Google Play Console",
  ],
  whyStacklyn: [
    {
      title: "Full-stack Mobile Team",
      desc: "The same team builds the app, the API, and the admin panel, so nothing falls between vendors.",
    },
    {
      title: "Fixed-price Phases",
      desc: "Clear scope and price for each phase before work starts.",
    },
    {
      title: "Weekly Test Builds",
      desc: "Install the latest build on your phone every week and give feedback as we go.",
    },
    {
      title: "Practical Advice",
      desc: "We tell you when a web app or PWA would serve you better and cheaper than a native app.",
    },
    {
      title: "You Own the App",
      desc: "Developer accounts, source code, and store listings are in your name.",
    },
    {
      title: "Post-launch Support",
      desc: "We keep the app working through iOS and Android updates and add features as you grow.",
    },
  ],
  faqs: [
    {
      q: "How much does it cost to build a mobile app?",
      a: "With Stacklyn, a simple app typically starts around $3,500. Most business apps — with user accounts, a backend, an admin panel, and payments — cost $6,000–18,000 for both iOS and Android. Complex apps are delivered in fixed-price phases. You receive a written quote after a free discovery call.",
    },
    {
      q: "How long does mobile app development take?",
      a: "Most apps take 8–14 weeks from design to store launch. Simple apps can be ready in 6–8 weeks. You get a test build on your phone every week.",
    },
    {
      q: "Flutter or React Native — which is better?",
      a: "Both build iOS and Android apps from one codebase with near-native performance. Flutter gives very consistent UI across devices; React Native fits well if you also have a React web app and want to share code. We recommend one based on your app and team, not personal preference.",
    },
    {
      q: "Do you build native iOS and Android apps?",
      a: "We primarily build cross-platform apps with Flutter and React Native, which suit the large majority of business apps. Where a feature needs native code, we write native modules for that part.",
    },
    {
      q: "Will you publish the app to the App Store and Google Play?",
      a: "Yes. We prepare the store listings, screenshots, and privacy details, submit the app, and handle review feedback until it is approved. The developer accounts are registered in your name.",
    },
    {
      q: "Do you build the backend and admin panel too?",
      a: "Yes. Every app comes with the backend API, database, and a web admin panel to manage users, content, orders, and reports.",
    },
    {
      q: "Can the app work offline?",
      a: "Yes. For field staff, inspections, or deliveries, we build offline-capable apps that save data on the device and sync automatically when back online.",
    },
    {
      q: "Can you take over or fix an existing app?",
      a: "Yes. We review the existing code, fix critical issues, update it for the latest iOS and Android versions, and continue development.",
    },
    {
      q: "Do I own the app's source code?",
      a: "Yes. You own the source code, designs, and store accounts from day one.",
    },
    {
      q: "How do I start a mobile app project?",
      a: "Share your app idea through the contact form, email rahulrp@stacklyn.in, or WhatsApp +91 95444 51720. We reply within 24 hours and send a fixed-price proposal after a short call.",
    },
  ],
  relatedServices: [
    { name: "Web Application Development", href: "/services/web-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "MVP Development", href: "/services/mvp-development" },
    { name: "Backend Development", href: "/services/backend-development" },
    { name: "E-commerce Development", href: "/services/ecommerce-development" },
  ],
};

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => ({
    meta: [
      { title: "Mobile App Development Company in Kerala — iOS & Android | Stacklyn" },
      {
        name: "description",
        content:
          "Stacklyn builds iOS and Android apps with Flutter and React Native — app, backend, and admin panel, published to the App Store and Google Play. Fixed-price phases from Kerala, India.",
      },
      {
        name: "keywords",
        content:
          "mobile app development company Kerala, app development company India, Flutter app development India, React Native developers India, iOS and Android app development, app developers Kochi, mobile app development cost India",
      },
      {
        property: "og:title",
        content: "Mobile App Development — iOS & Android | Stacklyn",
      },
      {
        property: "og:description",
        content:
          "Cross-platform iOS and Android apps with backend and admin panel, built in Kerala, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mobile App Development | Stacklyn" },
      {
        name: "twitter:description",
        content: "iOS and Android apps with Flutter and React Native, from Kerala, India.",
      },
    ],
    links: [{ rel: "canonical", href: "https://stacklyn.in/services/mobile-app-development" }],
  }),
  component: () => <ServicePage data={data} />,
});
