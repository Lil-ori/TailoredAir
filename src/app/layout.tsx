import { CONTACT_EMAIL, getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-chrome";
import { SiteUiProvider } from "@/components/site-ui";
import "./site.css";
import "./footer.css";

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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: `${site}/`,
    title: "Tailored Air | Littleton HVAC Experts",
    description:
      "Expert HVAC installation, repair & maintenance in Littleton, CO and the Denver Metro area. American Standard partner. Call (720) 296-6008.",
    images: [`${site}/images/logo.png`],
    locale: "en_US",
    siteName: "Tailored Air",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailored Air | Littleton HVAC Experts",
    description:
      "Expert HVAC installation, repair & maintenance in Littleton, CO. American Standard partner. 24/7 emergency service.",
    images: [`${site}/images/logo.png`],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": `${site}/#business`,
      name: "Tailored Air",
      legalName: "Tailored Air LLC",
      url: site,
      logo: `${site}/images/logo.png`,
      telephone: "+17202966008",
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Littleton",
        addressRegion: "CO",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        ratingCount: "47",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteUiProvider>
          <SiteNav />
          {children}
          <SiteFooter />
        </SiteUiProvider>
      </body>
    </html>
  );
}
