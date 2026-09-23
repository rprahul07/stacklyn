import { motion } from "framer-motion";
import { useState } from "react";
import { sendContactEmail } from "@/lib/api/contact.functions";
import { trackLead } from "@/lib/analytics";

const projectTypes = [
  "Oil & Gas / Industrial Software",
  "Business Automation",
  "AI Solution",
  "Web App",
  "Mobile App",
  "SaaS Product",
  "Cloud / DevOps",
  "Other",
];
const budgets = ["< $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+"];

const CONTACT_EMAIL = "rahulrp@stacklyn.in";
const CONTACT_PHONE = "+91 95444 51720";
const CONTACT_PHONE_RAW = "919544451720";

type Status = "idle" | "sending" | "success" | "error";

type Enquiry = {
  name: string;
  email: string;
  company?: string;
  type: string;
  budget: string;
  timeline?: string;
  description: string;
};

/** Pre-fills a WhatsApp message with the whole enquiry, so a failed form submission never loses the lead. */
function whatsappFallbackHref(enquiry: Enquiry) {
  const lines = [
    "Hi Stacklyn, I tried to send this through your website form:",
    `Name: ${enquiry.name}`,
    enquiry.company ? `Company: ${enquiry.company}` : null,
    `Email: ${enquiry.email}`,
    `Project: ${enquiry.type}`,
    `Budget: ${enquiry.budget}`,
    enquiry.timeline ? `Timeline: ${enquiry.timeline}` : null,
    "",
    enquiry.description,
  ].filter((line): line is string => line !== null);
  return `https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [lastEnquiry, setLastEnquiry] = useState<Enquiry | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Enquiry = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? "") || undefined,
      type: String(fd.get("type") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? "") || undefined,
      description: String(fd.get("description") ?? ""),
    };

    setStatus("sending");
    setLastEnquiry(data);

    try {
      await sendContactEmail({ data });
      setStatus("success");
      trackLead("contact_form");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-balance"
          >
            Let's build something <span className="text-primary">exceptional.</span>
          </motion.h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Tell us about your project. Your enquiry goes straight to our engineering team, and we reply within 24 hours —
            usually much sooner on WhatsApp.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`https://wa.me/${CONTACT_PHONE_RAW}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLead("whatsapp")}
              className="group flex items-center justify-between rounded-xl border border-primary/30 bg-background px-5 py-4 hover:border-primary/60 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-primary">WhatsApp · Fastest reply</div>
                <div className="mt-1 text-sm font-medium text-foreground">{CONTACT_PHONE}</div>
              </div>
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() => trackLead("email")}
              className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="mt-1 text-sm font-medium text-foreground">{CONTACT_EMAIL}</div>
              </div>
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`tel:+${CONTACT_PHONE_RAW}`}
              onClick={() => trackLead("phone")}
              className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="mt-1 text-sm font-medium text-foreground">{CONTACT_PHONE}</div>
              </div>
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Response within 24 hours · Working hours overlap with the UAE, Saudi Arabia, Qatar, and Oman
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Want a ballpark first?{" "}
            <a href="/tools/software-cost-estimator" className="text-primary underline underline-offset-4">
              Try the free cost estimator →
            </a>
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 rounded-2xl border border-border bg-background p-8 shadow-card"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full min-h-64 text-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">✓</div>
              <h3 className="text-lg font-semibold">Message sent!</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                We received your enquiry and will get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs text-primary underline underline-offset-4"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" placeholder="Jane Doe" autoComplete="name" />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" />
                <Field label="Company" name="company" placeholder="Acme Inc." required={false} autoComplete="organization" />
                <Select label="Project Type" name="type" options={projectTypes} />
                <Select label="Budget" name="budget" options={budgets} />
                <Field label="Timeline" name="timeline" placeholder="e.g. Q1 2027" required={false} />
              </div>
              <div className="mt-5">
                <label htmlFor="description" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  autoComplete="off"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
                  placeholder="Tell us about the problem you're solving, your users, and what success looks like."
                />
              </div>
              {status === "error" && lastEnquiry && (
                <div className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                  <p className="text-sm text-foreground">
                    Our form couldn't send your message just now. Your details are ready to send on WhatsApp instead — one tap:
                  </p>
                  <a
                    href={whatsappFallbackHref(lastEnquiry)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackLead("whatsapp_fallback")}
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 h-10 text-sm font-semibold text-white hover:bg-[#1ebe5b] transition-colors"
                  >
                    Send via WhatsApp <span aria-hidden>→</span>
                  </a>
                  <p className="mt-2 text-xs text-muted-foreground">Or email us at {CONTACT_EMAIL}.</p>
                </div>
              )}
              <div className="mt-6 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-11 text-sm font-medium shadow-glow hover:bg-primary-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>Send Enquiry <span aria-hidden>→</span></>
                  )}
                </button>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required = true, autoComplete = "off",
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 h-11 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <select
        id={name} name={name} required autoComplete="off"
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 h-11 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
