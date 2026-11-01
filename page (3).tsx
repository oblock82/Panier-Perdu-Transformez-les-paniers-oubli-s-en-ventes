import { Legal, H2 } from "@/components/Legal";
import V from "@/components/V";
import { EDITEUR } from "@/lib/config";

export const metadata = { title: "Politique de confidentialité | Panier Perdu" };

export default function Page() {
  return (
    <Legal titre="Politique de confidentialité">
      <H2>Responsable du traitement</H2>
      <p>
        <V>{EDITEUR.raisonSociale}</V>, <V>{EDITEUR.adresse}</V>. Contact :{" "}
        <V>{EDITEUR.email}</V>.
      </p>

      <H2>Données collectées et finalités</H2>
      <p>
        Pour vous vendre et vous fournir le service, nous traitons votre email,
        votre nom et les informations de facturation (base légale : exécution
        du contrat), ainsi que vos échanges avec nous pour le support. Les
        paiements sont traités par Stripe : nous ne voyons ni ne conservons
        votre numéro de carte.
      </p>
      <p>
        Nous mesurons l’audience du site avec Vercel Web Analytics, sans cookie
        et sans suivi d’un site à l’autre (intérêt légitime : savoir combien de
        visiteurs deviennent clients).
      </p>

      <H2>Destinataires et transferts</H2>
      <p>
        Vos données sont confiées à nos prestataires techniques : Stripe
        (paiement), Vercel (hébergement et mesure d’audience), et, selon les
        fonctionnalités activées, un prestataire d’envoi d’emails et une base de
        données{" "}
        <V>[À COMPLÉTER : prestataires effectivement utilisés]</V>. Certains
        sont situés hors de l’Union européenne ; les transferts sont encadrés
        par les clauses contractuelles types de la Commission européenne ou par
        une décision d’adéquation.
      </p>

      <H2>Données des clients de votre boutique</H2>
      <p>
        Lorsque le service sera connecté à votre boutique, nous traiterons les
        données de vos clients (email, panier) uniquement pour envoyer vos
        relances, en qualité de sous-traitant. Vous restez responsable du
        traitement, notamment de l’information et du recueil du consentement de
        vos clients lorsque la loi l’exige.{" "}
        <V>[À COMPLÉTER : accord de sous-traitance à fournir avant l’ouverture du service]</V>
      </p>

      <H2>Durée de conservation</H2>
      <p>
        Les données de facturation sont conservées pendant les durées légales.
        Les autres données sont supprimées à la fin de la relation
        commerciale, puis après{" "}
        <V>[À COMPLÉTER : durée, ex. 3 ans]</V> sans contact.
      </p>

      <H2>Vos droits</H2>
      <p>
        Vous pouvez demander l’accès, la rectification, l’effacement, la
        limitation ou la portabilité de vos données, et vous opposer à leur
        traitement, en écrivant à <V>{EDITEUR.email}</V>. Vous pouvez aussi
        introduire une réclamation auprès de la CNIL (cnil.fr).
      </p>
    </Legal>
  );
}
