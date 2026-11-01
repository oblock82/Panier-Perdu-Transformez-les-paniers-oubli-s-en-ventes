"use client";

export default function ErreurPage({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-5 text-center">
      <h1 className="font-serif text-2xl font-bold">Un problème est survenu.</h1>
      <p className="mt-2 text-gris">Rien n’a été prélevé. Réessayez dans un instant.</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-md bg-brique px-6 py-4 text-lg font-bold text-white"
      >
        Réessayer
      </button>
      <a href="/" className="mt-4 underline">Retour à l’accueil</a>
    </main>
  );
}
