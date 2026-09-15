import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { CONTACT_EMAIL } from "@/lib/site";

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

function clean(value: unknown, max = 200) {
  if (typeof value !== "string") return "";
  return value.replace(/[\0\r\n]+/g, " ").trim().slice(0, max);
}

function isValidEmail(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

async function postJson(url: string, body: unknown, headers: Record<string, string>) {
  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(12_000),
  });
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.company, 80)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    kind: clean(body.kind, 40) || "estimate",
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    phone: clean(body.phone, 40),
    email: clean(body.email, 120),
    service: clean(body.service, 120),
    message: clean(body.message, 2000),
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
  const toEmail = process.env.LEADS_TO_EMAIL || CONTACT_EMAIL;
  if (resendKey) {
    const from = process.env.LEADS_FROM_EMAIL || "Tailored Air <onboarding@resend.dev>";
    try {
      const response = await postJson(
        "https://api.resend.com/emails",
        {
          from,
          to: [toEmail],
          subject: `New ${lead.kind} request — ${lead.firstName} ${lead.lastName}`,
          text,
          reply_to: lead.email || undefined,
        },
        {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
      );
      if (response.ok) delivered.push("email");
      else failures.push(`email (${response.status})`);
    } catch {
      failures.push("email (timeout)");
    }
  }

  const formspreeId = clean(process.env.FORMSPREE_FORM_ID, 80);
  if (formspreeId && /^[A-Za-z0-9]+$/.test(formspreeId)) {
    try {
      const response = await postJson(
        `https://formspree.io/f/${formspreeId}`,
        {
          ...lead,
          _subject: `New ${lead.kind} request — ${lead.firstName} ${lead.lastName}`,
        },
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      );
      if (response.ok) delivered.push("formspree");
      else failures.push(`formspree (${response.status})`);
    } catch {
      failures.push("formspree (timeout)");
    }
  }

  const webhook = process.env.LEADS_WEBHOOK_URL?.trim() || "";
  if (webhook && isHttpUrl(webhook)) {
    try {
      const response = await postJson(webhook, lead, { "Content-Type": "application/json" });
      if (response.ok) delivered.push("webhook");
      else failures.push(`webhook (${response.status})`);
    } catch {
      failures.push("webhook (timeout)");
    }
  }

  if (delivered.length === 0 && process.env.NODE_ENV !== "production") {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "leads.jsonl"), `${JSON.stringify(lead)}\n`);
    delivered.push("local-file");
  }

  if (delivered.length === 0) {
    console.error("Lead not delivered; configure RESEND_API_KEY, FORMSPREE_FORM_ID, or LEADS_WEBHOOK_URL.");
    return NextResponse.json(
      {
        error:
          "We could not send that request. Please call (720) 296-6008 and we will take care of you.",
      },
      { status: 503 },
    );
  }

  if (failures.length) {
    console.error("Some lead deliveries failed:", failures);
  }

  return NextResponse.json({ ok: true, delivered });
}
