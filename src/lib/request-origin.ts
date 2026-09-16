import { headers } from "next/headers";
import { getSiteUrl } from "@/lib/site";

export async function getRequestOrigin() {
  const fallback = getSiteUrl();
  try {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    if (!host) return fallback;
    const forwardedProto = h.get("x-forwarded-proto");
    const proto =
      forwardedProto ??
      (host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
    return `${proto}://${host}`.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}
