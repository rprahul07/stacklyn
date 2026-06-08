import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/velora/Nav";
import { Hero } from "@/components/velora/Hero";
import { Marquee } from "@/components/velora/Marquee";
import { About } from "@/components/velora/About";
import { Capabilities } from "@/components/velora/Capabilities";
import { Work } from "@/components/velora/Work";
import { TechStack } from "@/components/velora/TechStack";
import { Process } from "@/components/velora/Process";
import { WhyVelora } from "@/components/velora/WhyVelora";
import { Testimonials } from "@/components/velora/Testimonials";
import { Contact } from "@/components/velora/Contact";
import { Footer } from "@/components/velora/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
<<<<<<< HEAD
      { title: "STACKLYN — Innovation in Motion" },
      {
        name: "description",
        content:
          "STACKLYN is a software engineering and AI studio building scalable web, mobile, and cloud-native products for modern businesses.",
      },
      { property: "og:title", content: "STACKLYN — Innovation in Motion" },
=======
      { title: "Stacklyn — Innovation in Motion" },
      {
        name: "description",
        content:
          "Stacklyn is a software engineering and AI studio building scalable web, mobile, and cloud-native products for modern businesses.",
      },
      { property: "og:title", content: "Stacklyn — Innovation in Motion" },
>>>>>>> fdf87caec5575d664952f1d0909b2725d7a76506
      {
        property: "og:description",
        content:
          "Scalable software, intelligent systems, and digital experiences. Full-stack, AI, mobile, cloud, and design — under one roof.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: StacklynHome,
});

function StacklynHome() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <Work />
        <TechStack />
        <Process />
        <WhyVelora />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
