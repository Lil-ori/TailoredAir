import { getSiteUrl } from "@/lib/site";
import { businessJsonLd, DEFAULT_OG_IMAGE } from "@/lib/seo";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter, SiteNav } from "@/components/site-chrome";
import { SiteUiProvider } from "@/components/site-ui";
import "./site.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const site = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Tailored Air | Littleton HVAC Experts | Heating, Cooling & Air Quality",
    template: "%s | Tailored Air",
  },
  description:
    "Tailored Air provides expert HVAC installation, repair & maintenance in Littleton, CO and the Denver Metro area. American Standard partner. 24/7 emergency service. Call (720) 296-6008.",
  keywords: [
    "HVAC Littleton CO",
    "heating and cooling Littleton",
    "air conditioning repair Denver",
    "furnace installation Littleton",
    "HVAC company Denver metro",
    "emergency HVAC repair",
    "American Standard HVAC dealer",
  ],
  authors: [{ name: "Tailored Air LLC" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tailored Air",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Tailored Air HVAC in Littleton and Denver Metro" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <JsonLd data={businessJsonLd()} />
        <SiteUiProvider>
          <SiteNav />
          {children}
          <SiteFooter />
        </SiteUiProvider>
      </body>
    </html>
  );
}
