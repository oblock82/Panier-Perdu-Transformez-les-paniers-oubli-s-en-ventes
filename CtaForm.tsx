export default function components/CtaForm.tsx({
  label = "Réserver mon accès fondateur",
}: {
  label?: string;
}) {
  return (
    <form action="/api/create-checkout-session" method="post">
      <button
        type="submit"
        className="w-full rounded-md bg-brique px-6 py-4 text-lg font-bold text-white hover:bg-[#c94623] focus:outline-none focus-visible:ring-4 focus-visible:ring-brique/40"
      >
        {label}
      </button>
    </form>
  );
}
