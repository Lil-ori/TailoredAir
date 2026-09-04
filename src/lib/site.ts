const DEFAULT_SITE_URL = "https://tailoredair.com";

export const CONTACT_EMAIL = "solutions@tailoredair.com";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const site = getSiteUrl();
  if (!path || path === "/") return `${site}/`;
  return `${site}${path.startsWith("/") ? path : `/${path}`}`;
}
