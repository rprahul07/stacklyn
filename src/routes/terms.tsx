import { createFileRoute } from "@tanstack/react-router";
import { SimplePageLayout } from "@/components/velora/SimplePageLayout";

const BASE_URL = "https://stacklyn.in";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Stacklyn" },
      {
        name: "description",
        content: "Terms of use for the stacklyn.in website, including content, indicative pricing, estimates, and liability.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/terms` },
      { property: "og:title", content: "Terms of Use | Stacklyn" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SimplePageLayout
      title="Terms of Use"
      eyebrow="Legal"
      intro="These terms apply to your use of the stacklyn.in website. By using the site, you agree to them."
      lastUpdated="23 September 2026"
    >
      <h2>About this website</h2>
      <p>
        stacklyn.in provides information about the software development services offered by Stacklyn, a software
        company based in Kerala, India. Nothing on the site is an offer to contract. Any project is governed by a
        separate written proposal or agreement between you and Stacklyn.
      </p>

      <h2>Prices and estimates</h2>
      <p>
        Prices, ranges, timelines, and results of our cost estimator are indicative only. They depend on scope and are
        confirmed only in a written proposal after discovery.
      </p>

      <h2>Content and intellectual property</h2>
      <p>
        The content of this site, including text, graphics, and code samples, belongs to Stacklyn unless stated
        otherwise. You may view and share it for personal or internal business reference, but you may not copy,
        republish, or sell it without our written permission.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not attempt to disrupt, overload, or gain unauthorised access to the site.</li>
        <li>Do not submit false information, spam, or malicious content through our forms.</li>
        <li>Do not use automated means to copy site content at scale without permission.</li>
      </ul>

      <h2>Information, not advice</h2>
      <p>
        Articles and guides on this site, including those about regulations and programmes such as ICV, IKTVA, or HSE
        requirements, are general information. They are not legal, financial, or compliance advice, and you should
        confirm requirements with the relevant authority or your own advisers.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site links to third-party websites and services such as WhatsApp. We are not responsible for their
        content or practices.
      </p>

      <h2>No warranty</h2>
      <p>
        We work to keep the site accurate and available, but it is provided as is, without warranties of any kind,
        and content may change without notice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, Stacklyn is not liable for any indirect or consequential loss arising from use
        of this website or reliance on its content.
      </p>

      <h2>Privacy</h2>
      <p>
        How we handle personal data is described in our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, and the courts of Kerala, India have jurisdiction.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href="mailto:rahulrp@stacklyn.in">rahulrp@stacklyn.in</a>.
      </p>
    </SimplePageLayout>
  );
}
