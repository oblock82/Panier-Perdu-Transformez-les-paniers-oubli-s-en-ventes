import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-5 text-center">
      <p className="font-serif text-6xl font-extrabold text-brique">404</p>
      <h1 className="mt-4 font-serif text-2xl font-bold">Cette page n’existe pas.</h1>
      <p className="mt-2 text-gris">Le lien est peut-être erroné ou la page a été déplacée.</p>
      <Link href="/" className="mt-8 rounded-md bg-brique px-6 py-4 text-lg font-bold text-white">
        Retour à l’accueil
      </Link>
    </main>
  );
}
