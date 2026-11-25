import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { company } from "@/lib/content";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans", display: "swap" });

// Set SITE_URL in the deployment environment to the live domain.
const siteUrl = process.env.SITE_URL || "http://localhost:3100";

const description =
  "Ekveera Infra Projects LLP — premium residential, commercial and turnkey construction in Pune. Sixteen construction disciplines, from groundwork to final handover.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Ekveera Infra Projects LLP — Luxury in Every Structure", template: "%s · Ekveera Infra Projects LLP" },
  description,
  keywords: ["construction company Pune", "builders Chinchwad", "turnkey construction Pune", "residential construction", "commercial construction", "RCC contractor Pune", "Ekveera Infra Projects"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: company.short,
    title: "Ekveera Infra Projects LLP — Luxury in Every Structure",
    description,
  },
  twitter: { card: "summary_large_image", title: "Ekveera Infra Projects LLP", description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#30251C", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  slogan: company.tagline,
  url: siteUrl,
  logo: `${siteUrl}/img/logo.png`,
  image: `${siteUrl}/img/hero.webp`,
  telephone: company.phone,
  email: company.email,
  founder: { "@type": "Person", name: company.director, jobTitle: company.role },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ekveera Heights, Gurudwara Walhekarwadi Road, Walhekarwadi",
    addressLocality: "Chinchwad, Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "Pune, Maharashtra",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Hides animated elements before GSAP runs, only when motion is allowed. No JS = everything visible. */}
        <script dangerouslySetInnerHTML={{ __html: "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
