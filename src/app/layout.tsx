import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./site.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tailored Air | Littleton HVAC Experts | Heating, Cooling & Air Quality",
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
  alternates: { canonical: "https://tailoredair.com/" },
  openGraph: {
    type: "website",
    url: "https://tailoredair.com/",
    title: "Tailored Air | Littleton HVAC Experts",
    description:
      "Expert HVAC installation, repair & maintenance in Littleton, CO and the Denver Metro area. American Standard partner. Call (720) 296-6008.",
    images: ["https://tailoredair.com/wp-content/uploads/2024/06/tailored-air-logo-.png"],
    locale: "en_US",
    siteName: "Tailored Air",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailored Air | Littleton HVAC Experts",
    description:
      "Expert HVAC installation, repair & maintenance in Littleton, CO. American Standard partner. 24/7 emergency service.",
    images: ["https://tailoredair.com/wp-content/uploads/2024/06/tailored-air-logo-.png"],
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
      "@id": "https://tailoredair.com/#business",
      name: "Tailored Air",
      legalName: "Tailored Air LLC",
      url: "https://tailoredair.com",
      logo: "https://tailoredair.com/wp-content/uploads/2024/06/tailored-air-logo-.png",
      telephone: "+17202966008",
      email: "info@tailoredair.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Littleton",
        addressRegion: "CO",
        addressCountry: "US",
      },
      areaServed: [
        "Littleton",
        "Englewood",
        "Highlands Ranch",
        "Lakewood",
        "Ken Caryl",
        "Centennial",
        "Greenwood Village",
        "Denver",
      ],
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
        {children}
      </body>
    </html>
  );
}
