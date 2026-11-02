import Link from "next/link";
import Footer from "@/components/Footer";
import { MAJ } from "@/lib/config";

export function Legal({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mx-auto max-w-2xl px-5 py-8">
        <Link href="/" className="text-sm underline">← Retour à l’accueil</Link>
        <h1 className="mt-6 font-serif text-3xl font-extrabold">{titre}</h1>
        <p className="mt-2 text-sm text-gris">Dernière mise à jour : {MAJ}</p>
        <div className="mt-6 space-y-4 leading-relaxed">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-4 font-serif text-xl font-bold">{children}</h2>;
}
