import Link from "next/link";
import { EDITEUR } from "@/lib/config";
import V from "@/components/V";

export default function Footer() {
  return (
    <footer className="border-t border-filet px-5 py-8 text-sm text-gris">
      <div className="mx-auto max-w-3xl">
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/mentions-legales" className="underline">Mentions légales</Link>
          <Link href="/cgv" className="underline">Conditions générales de vente</Link>
          <Link href="/confidentialite" className="underline">Politique de confidentialité</Link>
        </nav>
        <p className="mt-4">
          Panier Perdu · Contact : <V>{EDITEUR.email}</V>
        </p>
      </div>
    </footer>
  );
}
