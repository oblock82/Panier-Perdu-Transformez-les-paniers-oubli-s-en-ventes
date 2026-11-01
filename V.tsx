// Affiche une valeur ; si elle est encore à compléter, elle ressort en jaune.
export default function V({ children }: { children: string }) {
  if (children.startsWith("[À COMPLÉTER")) {
    return <mark className="bg-yellow-200 px-1 text-encre">{children}</mark>;
  }
  return <>{children}</>;
}
