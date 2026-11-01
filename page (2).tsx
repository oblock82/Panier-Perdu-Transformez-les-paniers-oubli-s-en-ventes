import { Legal, H2 } from "@/components/Legal";
import V from "@/components/V";
import { EDITEUR } from "@/lib/config";

export const metadata = { title: "Mentions légales | Panier Perdu" };

export default function Page() {
  return (
    <Legal titre="Mentions légales">
      <H2>Éditeur du site</H2>
      <p>
        Le site Panier Perdu est édité par <V>{EDITEUR.raisonSociale}</V>,{" "}
        <V>{EDITEUR.formeJuridique}</V>.
      </p>
      <p>SIRET : <V>{EDITEUR.siret}</V></p>
      <p>Adresse : <V>{EDITEUR.adresse}</V></p>
      <p>Email : <V>{EDITEUR.email}</V></p>
      <p>Téléphone : <V>{EDITEUR.telephone}</V></p>
      <p>TVA : <V>{EDITEUR.tva}</V></p>
      <p>Directeur de la publication : <V>{EDITEUR.directeurPublication}</V></p>

      <H2>Hébergeur</H2>
      <p>
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis,
        vercel.com.
      </p>

      <H2>Propriété intellectuelle</H2>
      <p>
        Les textes, la marque et les éléments graphiques du site sont la
        propriété de l’éditeur. Toute reproduction sans autorisation écrite est
        interdite.
      </p>

      <H2>Données personnelles</H2>
      <p>
        Le traitement de vos données est décrit dans la politique de
        confidentialité, accessible depuis le pied de page.
      </p>
    </Legal>
  );
}
