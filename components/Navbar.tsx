"use client";

import { company } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteImages } from "@/lib/site-images";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `rounded-md px-4 py-2 text-[16px] font-medium transition-colors ${
      isActive(pathname, href)
        ? "bg-green-50 text-[#4c9521]"
        : "text-gray-800 hover:bg-gray-50 hover:text-[#4c9521]"
    }`;

  return (
    <header className="animate-slide-down sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-nav-brand text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4 py-2 sm:justify-end sm:px-6 lg:px-8">
          <a
            href={`tel:${company.phoneTel}`}
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide transition-opacity hover:opacity-90"
          >
            <PhoneIcon className="h-3.5 w-3.5 shrink-0" />
            <span>{company.phoneTel}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-3.5 w-3.5 shrink-0" />
            <span>{company.email}</span>
          </a>
        </div>
      </div>

      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between border-b border-gray-100 px-4 sm:h-24 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={siteImages.logo}
            alt="Kamla Oil Industries logo"
            width={80}
            height={80}
            className="h-14 w-auto object-contain sm:h-16 lg:h-[72px]"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-nav-brand px-6 py-2.5 text-[16px] font-semibold text-white transition-colors hover:bg-[#3d7a1a] lg:inline-flex"
        >
          Contact Us
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-50 lg:hidden"
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
        <div id="mobile-menu" className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-3 py-2 text-[16px] font-medium ${
                    isActive(pathname, href)
                      ? "rounded-md bg-green-50 text-[#4c9521]"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="border-t border-gray-100 pt-3">
              <a
                href={`tel:${company.phoneTel}`}
                className="flex items-center gap-2 px-3 py-2 text-[13px] font-semibold text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                <PhoneIcon className="h-3.5 w-3.5 text-[#4c9521]" />
                {company.phoneTel}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 px-3 py-2 text-[13px] font-semibold text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                <MailIcon className="h-3.5 w-3.5 text-[#4c9521]" />
                {company.email}
              </a>
            </li>
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-full bg-nav-brand px-4 py-2.5 text-center text-[16px] font-semibold text-white hover:bg-[#3d7a1a]"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
