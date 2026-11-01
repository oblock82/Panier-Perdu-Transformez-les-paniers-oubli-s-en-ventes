import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panier Perdu — Récupérez vos paniers abandonnés",
  description:
    "Deux relances écrites et personnalisées pour récupérer les paniers abandonnés de votre petite boutique en ligne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
