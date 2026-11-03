import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Loader } from "@/components/layout/Loader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { TechGrid } from "@/components/layout/TechGrid";
import { MobileDock } from "@/components/layout/MobileDock";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ALIVID — инженерные системы безопасности в Караганде",
    template: "%s · ALIVID",
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.founder }],
  openGraph: {
    title: "ALIVID — инженерные системы безопасности",
    description: site.shortDescription,
    locale: site.locale,
    type: "website",
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "ALIVID — инженерные системы безопасности",
    description: site.shortDescription,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  telephone: site.phone,
  founder: { "@type": "Person", "name": site.founder },
  areaServed: {
    "@type": "AdministrativeArea",
    name: site.region,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.country,
  },
  url: site.url,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="mobile-dock-space min-h-full bg-bg font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TechGrid />
        <div className="noise" />
        <Loader />
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgress />
        <div className="relative z-10">{children}</div>
        <MobileDock />
      </body>
    </html>
  );
}
