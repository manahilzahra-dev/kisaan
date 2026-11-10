"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Upload", href: "/upload" },
  { name: "History", href: "/history" },
  { name: "Help", href: "/help" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 bg-white z-40">
          <nav className="flex flex-col p-6 gap-4 text-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-bold text-lg pb-2 border-b-2 ${
  pathname === link.href
    ? "text-green-700 border-green-700"
    : "text-gray-700 border-transparent"
}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-center mt-4"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}