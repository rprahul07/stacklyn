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
  .inputValidator(ContactSchema)
  .handler(async ({ data }) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
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
        <p style="margin-top:24px;font-size:12px;color:#9ca3af">
          Submitted via stacklyn.in contact form
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: `${data.name} <${data.email}>`,
      subject: `New inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html,
    });

    return { ok: true };
  });
