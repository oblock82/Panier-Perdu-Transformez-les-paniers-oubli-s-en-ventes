import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.DOMAIN ?? "https://panier-perdu-transformez-les-panier.vercel.app";

const titre = "Panier Perdu : relancez vos paniers abandonnés";
const description =
  "Deux relances écrites et personnalisées pour récupérer les paniers abandonnés de votre boutique Shopify ou WooCommerce. 29 € par mois, sans engagement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    url: "/",
    siteName: "Panier Perdu",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: titre, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${sans.variable}`}>
      <body className="bg-creme font-sans text-encre antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
