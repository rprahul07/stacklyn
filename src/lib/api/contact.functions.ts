import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  type: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().optional(),
  description: z.string().min(1),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(ContactSchema)
  .handler(async ({ data }) => {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.EMAIL_FROM;
    const to = process.env.EMAIL_TO;

    if (!host || !user || !pass || !from || !to) {
      const missing = [
        !host && "SMTP_HOST",
        !user && "SMTP_USER",
        !pass && "SMTP_PASS",
        !from && "EMAIL_FROM",
        !to && "EMAIL_TO",
      ].filter(Boolean).join(", ");
      console.error("[contact] Missing env vars:", missing);
      throw new Error(`Email not configured. Missing: ${missing}`);
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <h2 style="font-size:20px;font-weight:600;margin-bottom:24px;border-bottom:1px solid #e5e7eb;padding-bottom:12px">
          New Project Inquiry — Stacklyn
        </h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:500">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#0f4cff">${data.email}</a></td></tr>
          ${data.company ? `<tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Company</td><td style="padding:8px 0">${data.company}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Project Type</td><td style="padding:8px 0">${data.type}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Budget</td><td style="padding:8px 0">${data.budget}</td></tr>
          ${data.timeline ? `<tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Timeline</td><td style="padding:8px 0">${data.timeline}</td></tr>` : ""}
        </table>
        <div style="margin-top:24px">
          <div style="color:#6b7280;margin-bottom:8px">Project Description</div>
          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;white-space:pre-wrap;line-height:1.6">${data.description}</div>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#9ca3af">Submitted via stacklyn.in contact form</p>
      </div>
    `;

    try {
      await transporter.sendMail({
        from,
        to,
        replyTo: `${data.name} <${data.email}>`,
        subject: `New inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
        html,
      });
    } catch (err) {
      console.error("[contact] SMTP send failed:", err);
      throw new Error("Failed to send email. Please try again or contact us directly.");
    }

    return { ok: true };
  });
