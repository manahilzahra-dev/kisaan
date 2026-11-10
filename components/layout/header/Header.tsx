import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Desktop links */}
        <NavLinks />

        {/* Right: Login + Mobile menu */}
        <div className="flex items-center gap-3">
         <Link
  href="/login"
  className="hidden md:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 hover:shadow-lg transition-all duration-200"
>
  👤 Login
</Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}