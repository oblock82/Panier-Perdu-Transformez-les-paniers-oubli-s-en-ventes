import Footer from "@/components/Footer";

export const metadata = { title: "Merci | Panier Perdu" };

export default function Merci() {
  return (
    <>
      <main className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-5 text-center">
        <h1 className="font-serif text-4xl font-extrabold">Merci.</h1>
        <p className="mt-4 text-lg">
          Votre paiement a bien été reçu. Un email de confirmation vous est envoyé avec la suite.
        </p>
        <a href="/" className="mt-8 underline">Retour à l’accueil</a>
      </main>
      <Footer />
    </>
  );
}
