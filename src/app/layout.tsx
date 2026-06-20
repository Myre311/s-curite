import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}, ${siteConfig.tagline}`,
    template: `%s, ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: `${siteConfig.name}, ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-noir text-blanc">
        <div aria-hidden className="grain-overlay" />
        <a
          href="#contenu"
          className="sr-only rounded bg-or px-4 py-2 font-medium text-noir focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Aller au contenu principal
        </a>
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {/* Espace pour ne pas masquer le footer derrière la barre mobile fixe */}
        <div aria-hidden className="h-16 lg:hidden" />
        <WhatsAppFloat />
        <MobileActionBar />
      </body>
    </html>
  );
}
