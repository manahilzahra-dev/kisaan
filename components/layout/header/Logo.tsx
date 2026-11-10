import Link from "next/link"

export default function Logo() {
    return (
        <>
         <Link href="/" className="flex items-center gap-2 group">
  <span className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block">
    🌱
  </span>
  <span className="text-xl font-extrabold tracking-tight text-green-700 group-hover:text-green-800 transition-colors">
  Kisaan
</span>
</Link>
        </>
    );
}