import ContactDetails from "@/components/ContactDetails";
import { company } from "@/lib/company";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-green-200 bg-green-100/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display font-semibold tracking-tight text-green-700">
            {company.shortName}
          </p>
          <p className="mt-1 text-base text-green-800/70">
            Providing clean energy for India
          </p>
          <ul className="mt-4 flex flex-wrap gap-4 text-base">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-green-800/70 transition-colors hover:text-green-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <ContactDetails layout="grid" />
        </div>
      </div>
      <div className="border-t border-green-200 bg-green-50 px-4 py-4 text-center text-base text-green-700/80">
        © {new Date().getFullYear()} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
