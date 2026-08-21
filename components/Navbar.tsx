"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteImages } from "@/lib/site-images";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="animate-slide-down sticky top-0 z-50 border-b border-green-200 bg-white/95 shadow-sm backdrop-blur">
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={siteImages.logo}
            alt="Kamla Oil Industries logo"
            width={52}
            height={52}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
          <span className="hidden font-display text-lg font-bold tracking-tight text-green-900 sm:inline">
            Kamla Oil Industries
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-md px-3 py-2 font-display text-base font-medium text-green-800/80 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-green-600 px-5 py-2.5 font-display text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700 md:inline-flex"
        >
          Contact
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-green-800 hover:bg-green-50 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-green-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-green-800/80 hover:bg-green-50 hover:text-green-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-full bg-green-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-700"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
