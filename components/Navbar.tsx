"use client";

import { company } from "@/lib/company";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="animate-slide-down sticky top-0 z-50 border-b border-green-200 bg-green-50/90 shadow-sm backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-green-700"
          onClick={() => setMenuOpen(false)}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500 font-display text-sm font-bold text-white"
            aria-hidden
          >
            K
          </span>
          <span className="hidden sm:inline">Kamla Oil Industries</span>
          <span className="sm:hidden">Kamla Oil</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-md px-3 py-2 font-display text-base font-medium tracking-wide text-green-800/80 transition-colors hover:bg-green-100 hover:text-green-700"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-green-500 px-5 py-2.5 font-display text-base font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-green-600 md:inline-flex"
        >
          Get in touch
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-green-700 hover:bg-green-100 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-green-100 bg-green-50 px-4 pb-4 md:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-green-800/80 hover:bg-green-100 hover:text-green-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-full bg-green-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-600"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </Link>
            </li>
            <li className="border-t border-green-100 pt-3">
              <p className="px-3 text-xs font-medium text-green-600">
                Plant Location
              </p>
              <p className="px-3 pt-1 text-xs leading-relaxed text-green-800/70">
                {company.plantLocation}
              </p>
              <Link
                href="/contact"
                className="mt-2 block px-3 text-xs font-semibold text-green-600"
                onClick={() => setMenuOpen(false)}
              >
                View contact page →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
