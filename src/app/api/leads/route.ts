import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

type LeadBody = {
  kind?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    kind: clean(body.kind) || "estimate",
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    phone: clean(body.phone),
    email: clean(body.email),
    service: clean(body.service),
    message: clean(body.message),
    submittedAt: new Date().toISOString(),
  };

  if (!lead.firstName || !lead.lastName || !lead.phone || !lead.service) {
    return NextResponse.json(
      { error: "Please fill in your name, phone, and service needed." },
      { status: 400 },
    );
  }

  if (!isValidEmail(lead.email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const text = [
    `New ${lead.kind} request from tailoredair.com`,
    "",
    `Name: ${lead.firstName} ${lead.lastName}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "(not provided)"}`,
    `Service: ${lead.service}`,
    `Message: ${lead.message || "(none)"}`,
    `Submitted: ${lead.submittedAt}`,
  ].join("\n");

  const delivered: string[] = [];
  const failures: string[] = [];

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL || "hello@tailoredair.com";
  if (resendKey) {
    const from = process.env.LEADS_FROM_EMAIL || "Tailored Air <onboarding@resend.dev>";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [toEmail],
        subject: `New ${lead.kind} request — ${lead.firstName} ${lead.lastName}`,
        text,
        reply_to: lead.email || undefined,
      }),
    });
    if (response.ok) delivered.push("email");
    else failures.push(`email (${response.status})`);
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;
  if (formspreeId) {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...lead,
        _subject: `New ${lead.kind} request — ${lead.firstName} ${lead.lastName}`,
      }),
    });
    if (response.ok) delivered.push("formspree");
    else failures.push(`formspree (${response.status})`);
  }

  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (response.ok) delivered.push("webhook");
    else failures.push(`webhook (${response.status})`);
  }

  if (delivered.length === 0) {
    if (process.env.NODE_ENV !== "production") {
      const dir = path.join(process.cwd(), "data");
      await mkdir(dir, { recursive: true });
      await appendFile(path.join(dir, "leads.jsonl"), `${JSON.stringify(lead)}\n`);
      delivered.push("local-file");
    } else {
      console.error("Lead not delivered; configure RESEND_API_KEY, FORMSPREE_FORM_ID, or LEADS_WEBHOOK_URL.", lead);
      return NextResponse.json(
        {
          error:
            "We could not send that request. Please call (720) 296-6008 and we will take care of you.",
        },
        { status: 503 },
      );
    }
  }

  if (failures.length) {
    console.error("Some lead deliveries failed:", failures);
  }

  return NextResponse.json({ ok: true, delivered });
}
