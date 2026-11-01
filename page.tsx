import CtaForm from "@/components/CtaForm";
import Footer from "@/components/Footer";
import V from "@/components/V";
import { EDITEUR, OFFRE, PROMESSE, euros, parJour } from "@/lib/config";

const benefices = [
  {
    titre: "Deux relances écrites pour vous",
    texte:
      "Un premier message, puis un second quelques heures plus tard. Chacun reprend le prénom du client et les articles laissés dans son panier.",
  },
  {
    titre: "Un code de réduction, si vous le voulez",
    texte:
      "Facultatif, uniquement sur la seconde relance. Vous gardez la main sur vos marges.",
  },
  {
    titre: "Le chiffre d’affaires récupéré, en euros",
    texte:
      "Un compteur simple : combien les relances vous ont rapporté. Pas de tableau de bord compliqué.",
  },
];

const faq = [
  {
    q: "Est-ce que ça marche pour ma boutique ?",
    r: "Panier Perdu est pensé pour les boutiques Shopify et WooCommerce qui font quelques dizaines de commandes par mois. Il n’y a pas de volume minimum. Si les relances ne vous rapportent rien, la garantie vous rembourse.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Vous branchez votre boutique une fois. Ensuite, les relances partent seules : il n’y a rien à rédiger ni à envoyer à la main.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "L’abonnement est sans engagement et résiliable à tout moment. Vous n’êtes plus prélevé à partir de la période suivante.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À deux relances automatiques par panier abandonné, sans limite de nombre, au code de réduction facultatif et au compteur de chiffre d’affaires récupéré. Aucun frais par relance.",
  },
];

export default function Home({
  searchParams,
}: {
  searchParams: { paiement?: string };
}) {
  return (
    <>
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <span className="font-serif text-xl font-extrabold">Panier Perdu</span>
        <span className="text-sm text-gris">Accès fondateur</span>
      </header>

      <main className="pb-28 md:pb-0">
        <section className="mx-auto max-w-3xl px-5 pb-10 pt-4">
          {searchParams.paiement === "erreur" && (
            <p
              role="alert"
              className="mb-6 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-red-800"
            >
              Un problème est survenu avant le paiement. Aucun montant n’a été
              prélevé. Réessayez dans un instant.
            </p>
          )}
          <h1 className="font-serif text-4xl font-extrabold leading-tight sm:text-5xl">
            {PROMESSE}
          </h1>
          <p className="mt-4 text-lg text-gris">
            Deux relances écrites et personnalisées, envoyées automatiquement aux
            clients qui ont quitté votre boutique avec un panier plein. Pour les
            boutiques Shopify et WooCommerce.
          </p>
          <div className="mt-6 max-w-sm">
            <CtaForm />
          </div>
          <p className="mt-3 text-sm">
            Sans engagement, résiliable à tout moment. Satisfait ou remboursé{" "}
            {OFFRE.garantieJours} jours.
          </p>
        </section>

        <section className="border-y border-filet bg-white/60 px-5 py-10">
          <div className="mx-auto max-w-3xl">
            <p className="font-serif text-7xl font-extrabold text-brique">7/10</p>
            <p className="mt-2 text-xl font-semibold">
              des paniers en ligne sont abandonnés avant le paiement.
            </p>
            <p className="mt-1 text-xs text-gris">
              Moyenne des études sur l’abandon de panier (Baymard Institute).
            </p>
            <p className="mt-4 text-gris">
              Chacun de ces paniers est une vente presque faite. Les outils de
              relance sont souvent pensés pour de gros volumes et coûtent trop
              cher pour une petite boutique : alors beaucoup ne relancent rien.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-10">
          <h2 className="font-serif text-2xl font-extrabold">Ce que vous obtenez</h2>
          <ul className="mt-4 divide-y divide-filet border-y border-filet">
            {benefices.map((b) => (
              <li key={b.titre} className="py-4">
                <h3 className="text-lg font-bold">{b.titre}</h3>
                <p className="mt-1 text-gris">{b.texte}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="offre" className="mx-auto max-w-3xl px-5 pb-10">
          <div className="rounded-md border-2 border-encre bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-brique">
              Accès fondateur
            </p>
            <p className="mt-2 font-serif text-5xl font-extrabold">
              {euros(OFFRE.prix)}
              <span className="text-xl font-bold"> / mois</span>
            </p>
            <p className="mt-1 text-gris">
              soit {parJour}&nbsp;€ par jour, relances illimitées.
            </p>

            <p className="mt-4">
              Le service ouvre le <V>{OFFRE.dateOuverture}</V>. Shopify dès
              l’ouverture, WooCommerce ensuite. Vous réservez aujourd’hui votre
              accès au prix fondateur.
            </p>

            <div className="mt-5">
              <CtaForm />
              <p className="mt-2 text-sm font-semibold">
                Sans engagement, résiliable à tout moment.
              </p>
            </div>

            <div className="mt-6 border-t border-filet pt-4">
              <h3 className="font-bold">
                Garantie satisfait ou remboursé, {OFFRE.garantieJours} jours
              </h3>
              <p className="mt-1 text-sm text-gris">
                Pas satisfait ? Écrivez à <V>{EDITEUR.email}</V> avec l’objet
                « Remboursement », dans les {OFFRE.garantieJours} jours suivant
                l’ouverture du service. Vous êtes remboursé intégralement sous{" "}
                {OFFRE.delaiRemboursement}, sans avoir à vous justifier. Avant
                l’ouverture, vous pouvez demander le remboursement à tout moment.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 pb-12">
          <h2 className="font-serif text-2xl font-extrabold">Questions fréquentes</h2>
          <div className="mt-4 divide-y divide-filet border-y border-filet">
            {faq.map((f) => (
              <details key={f.q} className="py-4">
                <summary className="flex items-start justify-between gap-4 text-lg font-bold">
                  {f.q}
                  <span aria-hidden="true" className="text-brique">+</span>
                </summary>
                <p className="mt-2 text-gris">{f.r}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-filet bg-creme p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
        <CtaForm label={`Réserver mon accès, ${euros(OFFRE.prix)} / mois`} />
      </div>
    </>
  );
}
