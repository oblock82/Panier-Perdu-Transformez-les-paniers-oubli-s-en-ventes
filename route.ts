import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const base = process.env.DOMAIN ?? new URL(request.url).origin;
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!secretKey || !priceId) {
    console.error("Variables Stripe manquantes : STRIPE_SECRET_KEY ou STRIPE_PRICE_ID");
    return NextResponse.redirect(`${base}/?paiement=erreur`, 303);
  }

  // Version d'API volontairement non précisée.
  const stripe = new Stripe(secretKey);

  try {
    // Paramètres fixés dans Checkout Studio. success_url, cancel_url et
    // line_items sont à vérifier (voir STRIPE_INTEGRATION_TODO.md).
    // submit_type n'est pas envoyé : il ne s'applique qu'au mode "payment".
    const params = {
      ui_mode: "hosted_page",
      mode: "subscription",
      billing_address_collection: "auto",
      phone_number_collection: { enabled: false },
      automatic_tax: { enabled: false },
      allow_promotion_codes: false,
      payment_method_collection: "always",
      integration_identifier: "hosted_web_0003",
      origin_context: "web",
      success_url: `${base}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/`,
      line_items: [{ price: priceId, quantity: 1 }],
    };

    const session = await stripe.checkout.sessions.create(
      params as unknown as Stripe.Checkout.SessionCreateParams,
    );

    if (!session.url) {
      throw new Error("Session Stripe sans URL");
    }
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("Échec de création de la session Stripe", err);
    return NextResponse.redirect(`${base}/?paiement=erreur`, 303);
  }
}
