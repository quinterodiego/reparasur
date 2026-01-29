import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { logoSrc } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://reparasur.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ReparaSur - Reparación, landing pages y desarrollo web | Zona sur",
    template: "%s | ReparaSur",
  },
  description:
    "Reparación de computadoras, landing pages, desarrollo web y programación a medida en Quilmes, Avellaneda, Lomas de Zamora, Banfield, Adrogué, Rafael Calzada y zona sur. PCs, laptops, sitios web, recuperación de datos. Soluciones rápidas y con garantía.",
  keywords: [
    "reparación de computadoras",
    "landing page Quilmes",
    "desarrollo web zona sur",
    "programación a medida",
    "reparación PC Avellaneda",
    "recuperación de datos",
    "sitio web Lomas Banfield",
    "zona sur Buenos Aires",
  ],
  authors: [{ name: "ReparaSur" }],
  creator: "ReparaSur",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "ReparaSur",
    title: "ReparaSur - Reparación, landing pages y desarrollo web zona sur",
    description:
      "Reparación de PCs y laptops, landing pages, desarrollo web y programación en Quilmes, Avellaneda, Lomas, Banfield, Adrogué, Rafael Calzada. Soluciones rápidas y con garantía.",
    images: [{ url: logoSrc, width: 512, height: 512, alt: "ReparaSur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReparaSur - Reparación, landing pages y desarrollo web zona sur",
    description: "Reparación de PCs, landing pages, desarrollo web y programación en Quilmes, Avellaneda, Lomas, Banfield, Adrogué, Rafael Calzada.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ReparaSur",
  description:
    "Reparación de computadoras, landing pages, desarrollo web y programación a medida en Quilmes, Avellaneda, Lomas de Zamora, Banfield, Adrogué, Rafael Calzada y zona sur. PCs, laptops, sitios web, recuperación de datos.",
  url: siteUrl,
  areaServed: [
    { "@type": "City", name: "Quilmes" },
    { "@type": "City", name: "Avellaneda" },
    { "@type": "City", name: "Lomas de Zamora" },
    { "@type": "City", name: "Banfield" },
    { "@type": "City", name: "Adrogué" },
    { "@type": "City", name: "Rafael Calzada" },
  ],
  serviceType: [
    "Reparación de computadoras",
    "Reparación de laptops",
    "Recuperación de datos",
    "Reparación de impresoras",
    "Mantenimiento de PCs",
    "Landing pages",
    "Desarrollo web",
    "Programación a medida",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-[var(--background)] antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
