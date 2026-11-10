"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Upload", href: "/upload" },
  { name: "History", href: "/history" },
  { name: "Help", href: "/help" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
         className={`text-base font-bold transition-colors pb-1 border-b-2 ${
  pathname === link.href
    ? "text-green-700 border-green-700"
    : "text-gray-700 border-transparent hover:text-green-700 hover:border-green-700"
}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}