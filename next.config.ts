import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/contact-us/:path*", destination: "/contact", permanent: true },
      { source: "/services", destination: "/#svc", permanent: true },
      { source: "/services/", destination: "/#svc", permanent: true },
      { source: "/services/:path*", destination: "/#svc", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/terms-of-use", destination: "/terms", permanent: true },
      { source: "/frequently-asked-questions", destination: "/faq", permanent: true },
      { source: "/faqs", destination: "/faq", permanent: true },
      { source: "/our-values", destination: "/values", permanent: true },
      { source: "/why-choose-tailored-air", destination: "/why-choose-us", permanent: true },
      {
        source: "/wp-content/uploads/2024/06/tailored-air-logo-.png",
        destination: "/images/logo.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
