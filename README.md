# Tailored Air website

Next.js conversion of `complex-v1.html` — the Tailored Air HVAC marketing site for Littleton, CO and the Denver metro area.

The original single-file HTML is now a Next.js site with real, indexable routes:

- `/` home
- `/about` `/why-choose-us` `/faq` `/values`
- `/blog` (coming soon)
- `/careers`
- `/contact` `/privacy` `/terms`

Each page has its own title, description, and canonical URL. `sitemap.xml` and `robots.txt` are generated automatically. The live domain is **https://tailoredair.com** (`NEXT_PUBLIC_SITE_URL` if you ever need to override it).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3847](http://localhost:3847).

You need Node.js 20 or newer (`node -v` to check).

## Estimate / schedule form

The form posts to `/api/leads`. In local development, requests are saved to `data/leads.jsonl`.

Before going live, copy `.env.example` to `.env.local` (or set the same values on your host) and add **one** of:

- `RESEND_API_KEY` — emails `LEADS_TO_EMAIL` (default `hello@tailoredair.com`)
- `FORMSPREE_FORM_ID` — Formspree form id
- `LEADS_WEBHOOK_URL` — Zapier / Make / custom webhook

Without one of those in production, the form tells the visitor to call instead of pretending the lead was sent.

## WordPress redirects

Old paths 301 to the new site, including `/contact-us` → `/contact`, `/about-us` → `/about`, `/services` → `/#svc`, `/privacy-policy` → `/privacy`, and the previous WordPress logo URL.

## What works

- Home, About, Why Choose Us, FAQ, Values, Careers, Contact, Privacy, Terms
- Blog placeholder
- Schedule / free estimate form
- Mobile menu and the original layout
