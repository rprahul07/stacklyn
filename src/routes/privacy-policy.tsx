import { createFileRoute } from "@tanstack/react-router";
import { SimplePageLayout } from "@/components/velora/SimplePageLayout";

const BASE_URL = "https://stacklyn.in";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Stacklyn" },
      {
        name: "description",
        content:
          "How Stacklyn collects, uses, and protects personal data submitted through stacklyn.in, including contact form enquiries and website analytics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/privacy-policy` },
      { property: "og:title", content: "Privacy Policy | Stacklyn" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/privacy-policy` }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SimplePageLayout
      title="Privacy Policy"
      eyebrow="Legal"
      intro="This policy explains what personal data Stacklyn collects through stacklyn.in, why we collect it, who processes it, and the choices and rights you have."
      lastUpdated="23 September 2026"
    >
      <h2>Who we are</h2>
      <p>
        Stacklyn is a software development company based in Kerala, India. For any question about this policy or your
        personal data, contact us at <a href="mailto:rahulrp@stacklyn.in">rahulrp@stacklyn.in</a>.
      </p>

      <h2>What we collect</h2>
      <h3>When you send an enquiry</h3>
      <p>
        Our contact form collects your name, email address, company (optional), project type, budget range, timeline
        (optional), and the project description you write. We use this only to reply to you and to prepare a proposal.
      </p>
      <h3>When you contact us directly</h3>
      <p>
        If you message us on WhatsApp, call us, or email us, we receive your phone number or email address and the
        content of your message. WhatsApp messages are also processed by WhatsApp under its own privacy policy.
      </p>
      <h3>When you browse the site</h3>
      <p>
        We use Google Analytics 4 to understand how the site is used: pages visited, approximate location derived from
        your IP address, device and browser type, how you arrived, and interactions such as clicks on our WhatsApp,
        call, or email buttons. Google Analytics uses cookies to do this.
      </p>
      <h3>Technical data</h3>
      <p>
        The site is hosted on Cloudflare, which processes IP addresses and request data to deliver pages securely and
        protect the site against abuse.
      </p>

      <h2>How we use your data</h2>
      <ul>
        <li>To reply to your enquiry and discuss or propose work.</li>
        <li>To understand which pages are useful and improve the website.</li>
        <li>To keep the site secure and working.</li>
      </ul>
      <p>We do not sell your personal data, and we do not use it for advertising.</p>

      <h2>Who processes your data</h2>
      <ul>
        <li><strong>Google</strong> — contact form submissions are stored in Google Workspace (Google Sheets and email) through Google Apps Script, and website analytics are processed by Google Analytics.</li>
        <li><strong>Cloudflare</strong> — website hosting, content delivery, and security.</li>
        <li><strong>WhatsApp (Meta)</strong> — only if you choose to message us on WhatsApp.</li>
      </ul>
      <p>
        These providers may process data in countries other than your own, including the United States. We rely on
        their contractual and security safeguards for these transfers.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiries and related correspondence for up to 24 months after our last contact with you, or longer if
        a contract with you requires it. Analytics data is kept according to our Google Analytics retention settings.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live — including under India's Digital Personal Data Protection Act 2023, the UK and EU
        GDPR, and the data protection laws of the UAE, Saudi Arabia, Qatar, and Oman — you may have the right to access,
        correct, or delete your personal data, to withdraw consent, and to object to certain processing. Email{" "}
        <a href="mailto:rahulrp@stacklyn.in">rahulrp@stacklyn.in</a> and we will respond within 30 days.
      </p>

      <h2>Cookies</h2>
      <p>
        Google Analytics sets cookies such as <code>_ga</code> to distinguish visitors. You can block or delete cookies in
        your browser settings, or use Google's Analytics opt-out browser add-on. The site works without these cookies.
      </p>

      <h2>Security</h2>
      <p>
        The site is served only over HTTPS, and access to enquiry data is limited to the people who need it to respond
        to you.
      </p>

      <h2>Children</h2>
      <p>This site is intended for businesses and is not directed at children.</p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy when our services or data practices change. The date at the top shows when it was
        last updated.
      </p>
    </SimplePageLayout>
  );
}
