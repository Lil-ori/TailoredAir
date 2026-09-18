const DEFAULT_SITE_URL = "https://tailoredair.com";

export const CONTACT_EMAIL = "solutions@tailoredair.com";
export const PUBLIC_EMAIL = "hello@tailoredair.com";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(path = "/", origin = getSiteUrl()) {
  const site = origin.replace(/\/$/, "");
  if (!path || path === "/") return `${site}/`;
  return `${site}${path.startsWith("/") ? path : `/${path}`}`;
}
