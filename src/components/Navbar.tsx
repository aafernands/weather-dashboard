"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          AlxWeather
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm transition hover:opacity-80 ${
                  pathname === l.href ? "font-semibold" : "text-gray-600"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="hidden rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90 md:inline-block"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
