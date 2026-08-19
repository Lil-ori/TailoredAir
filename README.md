# Tailored Air website

Next.js conversion of `complex-v1.html` — the Tailored Air HVAC marketing site for Littleton, CO and the Denver metro area.

The original single-file HTML (embedded images, CSS, and overlay pages) is now:

- Local images in `public/images`
- Site styles in `src/app/site.css`
- Page markup in `src/content/site-body.html`
- Interactive behavior (nav, overlays, carousel, FAQ, estimate form) in `src/components/tailored-air-site.tsx`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3847](http://localhost:3847).

## What works

- Home page: hero, services, reviews carousel, service area, CTA, footer
- About overlays: About Us, Why Choose Us, FAQ, Our Values
- Contact, Blog, Careers, Privacy, and Terms overlays
- Schedule / free estimate lightbox (shows a callback confirmation)
- Mobile menu and responsive layout from the original CSS
