// ============================================================
// FICHIER À COMPLÉTER : tout ce qui est entre crochets
// « [À COMPLÉTER : ...] » s’affiche en jaune sur le site.
// Remplacez le texte entre guillemets, puis enregistrez.
// ============================================================

export const OFFRE = {
  // Prix affiché sur le site. Il doit être identique au prix créé dans Stripe.
  prix: 29,
  garantieJours: 30,
  delaiRemboursement: "5 jours ouvrés",
  dateOuverture: "[À COMPLÉTER : date d’ouverture du service, ex. 15 décembre 2026]",
};

export const EDITEUR = {
  raisonSociale: "[À COMPLÉTER : raison sociale, ou nom et prénom pour une micro-entreprise]",
  formeJuridique: "[À COMPLÉTER : ex. micro-entreprise, SASU]",
  siret: "[À COMPLÉTER : numéro SIRET]",
  adresse: "[À COMPLÉTER : adresse postale complète]",
  email: "[À COMPLÉTER : email de contact]",
  telephone: "[À COMPLÉTER : numéro de téléphone]",
  directeurPublication: "[À COMPLÉTER : nom du directeur de la publication]",
  tva: "[À COMPLÉTER : numéro de TVA intracommunautaire, ou « TVA non applicable, art. 293 B du CGI »]",
};

export const PROMESSE = `Vos clients abandonnent 7 paniers sur 10. Relancez-les pour ${OFFRE.prix} € par mois.`;

export function euros(n: number): string {
  return String(n).replace(".", ",") + "\u00a0€";
}

export const parJour: string = (OFFRE.prix / 30).toFixed(2).replace(".", ",");
export const MAJ = "1er novembre 2026";
