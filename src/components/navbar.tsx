import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b">
      <ul className="flex gap-4">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/projects">Projets</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}