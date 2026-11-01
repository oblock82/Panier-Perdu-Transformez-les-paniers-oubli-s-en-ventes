import { Legal, H2 } from "@/components/Legal";
import V from "@/components/V";
import { EDITEUR, OFFRE, euros } from "@/lib/config";

export const metadata = { title: "Conditions générales de vente | Panier Perdu" };

export default function Page() {
  return (
    <Legal titre="Conditions générales de vente">
      <H2>1. Vendeur et objet</H2>
      <p>
        Les présentes conditions régissent la vente de l’abonnement Panier
        Perdu par <V>{EDITEUR.raisonSociale}</V> (SIRET <V>{EDITEUR.siret}</V>),{" "}
        <V>{EDITEUR.adresse}</V>. Le service envoie automatiquement deux
        relances écrites aux clients d’une boutique en ligne ayant abandonné
        leur panier, propose un code de réduction facultatif sur la seconde
        relance et affiche le chiffre d’affaires récupéré.
      </p>

      <H2>2. Clients concernés</H2>
      <p>
        Le service s’adresse aux professionnels disposant d’une boutique en
        ligne Shopify ou WooCommerce. La commande vaut déclaration d’agir à des
        fins professionnelles.
      </p>

      <H2>3. Prix</H2>
      <p>
        L’abonnement coûte {euros(OFFRE.prix)} par mois et par boutique, relances
        illimitées. Les prix sont indiqués{" "}
        <V>[À COMPLÉTER : « TTC » ou « HT, TVA non applicable » selon votre régime]</V>.
      </p>

      <H2>4. Accès fondateur et date d’ouverture</H2>
      <p>
        Le service est en cours de construction. L’accès fondateur permet de
        réserver l’abonnement au prix indiqué avant l’ouverture, prévue le{" "}
        <V>{OFFRE.dateOuverture}</V>. Shopify est pris en charge dès
        l’ouverture, WooCommerce ensuite. Si l’ouverture n’a pas lieu à cette
        date, le client peut demander le remboursement intégral à tout moment.
      </p>

      <H2>5. Commande et paiement</H2>
      <p>
        Le paiement s’effectue en ligne par carte bancaire via Stripe. Le
        vendeur ne voit ni ne conserve les numéros de carte. L’abonnement se
        renouvelle chaque mois jusqu’à résiliation.
      </p>

      <H2>6. Résiliation</H2>
      <p>
        L’abonnement est sans engagement. Le client peut le résilier à tout
        moment en écrivant à <V>{EDITEUR.email}</V>. La résiliation prend effet
        à la fin de la période en cours et aucun nouveau prélèvement n’est
        effectué ensuite.
      </p>

      <H2>7. Garantie satisfait ou remboursé</H2>
      <p>
        Le client peut demander le remboursement intégral de son paiement dans
        les {OFFRE.garantieJours} jours suivant l’ouverture du service, sans
        justification, par email à <V>{EDITEUR.email}</V> avec l’objet
        « Remboursement ». Le remboursement est effectué sous{" "}
        {OFFRE.delaiRemboursement} sur le moyen de paiement utilisé. Avant
        l’ouverture, le remboursement peut être demandé à tout moment.
      </p>

      <H2>8. Responsabilité</H2>
      <p>
        Le vendeur s’engage à fournir le service avec soin. Il ne garantit pas
        un montant de chiffre d’affaires récupéré, qui dépend de la boutique
        et de ses clients. Sa responsabilité est limitée au montant payé par le
        client au cours des douze derniers mois, sauf faute lourde ou dol.
      </p>

      <H2>9. Données personnelles</H2>
      <p>
        Le traitement des données est décrit dans la politique de
        confidentialité.
      </p>

      <H2>10. Droit applicable et litiges</H2>
      <p>
        Les présentes conditions sont soumises au droit français. En cas de
        litige, les parties recherchent une solution amiable avant toute action
        judiciaire. À défaut, les tribunaux compétents sont ceux du ressort de{" "}
        <V>[À COMPLÉTER : ville du siège du vendeur]</V>.
      </p>
    </Legal>
  );
}
