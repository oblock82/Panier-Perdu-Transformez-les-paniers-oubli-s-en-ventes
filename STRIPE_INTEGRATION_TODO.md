# Intégration Stripe — ce qu'il reste à faire

Ce fichier est la source de vérité pour les étapes restantes.

## Valeurs à remplacer

Ces valeurs sont des paramètres de départ à vérifier avant de passer en production.

**Fichiers concernés :**
- [app/api/create-checkout-session/route.ts](app/api/create-checkout-session/route.ts)

| Champ | Valeur actuelle | Ce qu'il faut mettre |
|-------|-----------------|----------------------|
| mode | `subscription` | Garder `subscription` pour un abonnement mensuel. Mettre `payment` pour un paiement unique (et ajouter alors `submit_type: "auto"`, retirer `payment_method_collection`). |
| success_url | `${DOMAIN}/merci?session_id={CHECKOUT_SESSION_ID}` | Votre page de succès réelle. Garder `{CHECKOUT_SESSION_ID}`. La page `/merci` est fournie. |
| cancel_url | `${DOMAIN}/` | Votre page de retour en cas d'annulation. |
| line_items[].price | variable `STRIPE_PRICE_ID` | L'identifiant du prix Stripe (commence par `price_`), à créer dans le Dashboard : https://dashboard.stripe.com/test/prices. Le prix doit être **récurrent** (mensuel) puisque le mode est `subscription`. |

## Paramètres configurés

Ces paramètres viennent de Checkout Studio et sont déjà en place.

**Fichiers concernés :**
- [app/api/create-checkout-session/route.ts](app/api/create-checkout-session/route.ts)

| Paramètre | Valeur |
|-----------|--------|
| ui_mode | hosted_page (SDK stripe 21 ou plus) |
| billing_address_collection | auto |
| phone_number_collection | enabled: false |
| automatic_tax | enabled: false |
| allow_promotion_codes | false |
| payment_method_collection | always (mode subscription uniquement) |
| submit_type | auto : non envoyé en mode `subscription`, il ne s'applique qu'au mode `payment` |
| integration_identifier | hosted_web_0003 |
| origin_context | web |

## Installation

1. Créez un compte Stripe (https://dashboard.stripe.com), restez en **mode test**.
2. Dans le Dashboard (mode test) : Catalogue de produits, créez un produit « Panier Perdu » avec un prix **mensuel récurrent**. Copiez l'identifiant du prix (`price_...`).
3. Récupérez votre clé secrète de test (`sk_test_...`) : https://dashboard.stripe.com/test/apikeys
4. Dans Vercel : projet, Settings, Environment Variables. Ajoutez :
   - `STRIPE_SECRET_KEY` = votre clé `sk_test_...` (jamais dans le code)
   - `STRIPE_PRICE_ID` = votre `price_...`
   - `DOMAIN` = l'adresse de votre site, sans `/` final (ex. `https://panier-perdu.vercel.app`)
5. Redéployez : Deployments, menu du dernier déploiement, Redeploy. Les variables ne s'appliquent qu'après un nouveau déploiement.

Dépendance ajoutée : `stripe` (installée automatiquement par Vercel).

## Fichiers créés ou modifiés

- `package.json` : ajout de `stripe`
- `app/api/create-checkout-session/route.ts` : crée la session de paiement
- `app/merci/page.tsx` : page de succès (affichage seulement)
- `app/page.tsx` : bouton de test et message d'erreur de paiement

## Fonctionnement

1. Le visiteur clique sur le bouton, qui envoie un formulaire à `/api/create-checkout-session`.
2. Le serveur crée une session Stripe Checkout et redirige (303) vers la page de paiement hébergée par Stripe.
3. Après paiement, Stripe renvoie vers `/merci`. Si la création de la session échoue, retour à l'accueil avec un message clair.

**Important :** la page `/merci` ne confirme rien, elle affiche seulement un message. Le paiement doit être confirmé côté serveur par un webhook Stripe (étape 2 du plan), avant de livrer un accès.

## Tester

Mode test uniquement :
- Carte valide : `4242 4242 4242 4242`, date future, CVC quelconque
- Authentification 3D Secure : `4000 0027 6000 3184`
- Carte refusée : `4000 0000 0000 0002`

## Prochaines étapes

- Webhook Stripe vérifié par signature (`checkout.session.completed`) et variable `STRIPE_WEBHOOK_SECRET`
- Email de confirmation et livraison de l'accès
- Passage en production : clés `live`, nouveau prix en mode live, activation du compte Stripe

## Ressources

- https://support.stripe.com
- https://docs.stripe.com/mcp
