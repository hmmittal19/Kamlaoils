import AnimateIn from "@/components/AnimateIn";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/company";
import Link from "next/link";

const products = [
  {
    name: "High-Performance Industrial Fuel",
    category: "Energy",
    description:
      "Cleaner industrial fuel produced through further treatment at our Hapur refinery — optimized for performance and emissions.",
  },
  {
    name: "Recycled Plastic Feedstock Oil",
    category: "Chemical Recycling",
    description:
      "Oil recovered from pyrolysis and thermolysis, used to replace fossil oils in new plastic production.",
  },
  {
    name: "Petroleum Products from Bituminous Minerals",
    category: "Refinery",
    description:
      "Oils obtained from bituminous minerals and petroleum residues, manufactured to industrial standards.",
  },
  {
    name: "Chemical Byproducts",
    category: "Byproducts",
    description:
      "Valuable chemical outputs from our biomass oil refinery process supporting downstream industries.",
  },
  {
    name: "Syngas for Internal Energy Loop",
    category: "Energy Recovery",
    description:
      "Recycled syngas captured and reused as heating fuel for a self-sustaining, energy-efficient operation.",
  },
  {
    name: "Recycled Plastics Feedstock",
    category: "Circular Economy",
    description:
      "End-of-life plastic converted into feedstock — quality comparable to products made from fossil oil.",
  },
];

export default function Products() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Products & Outputs"
        description="Industrial fuel, recycled feedstock, and petroleum products from our biomass oil refinery in Hapur."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="max-w-3xl text-zinc-600">
              Kamla Oil Industries transforms plastic waste into oil and related
              products through advanced chemical recycling. Our multi-layer
              processing handles complex plastics, while closed-loop operations
              maximize recovery with no harmful combustion emissions.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(({ name, category, description }, index) => (
              <AnimateIn key={name} delay={index * 80}>
                <article className="flex h-full flex-col rounded-xl border border-green-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-md">
                <span className="text-xs font-medium uppercase tracking-wide text-green-600">
                  {category}
                </span>
                <h3 className="mt-2 font-semibold text-green-800">
                  {name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-zinc-600">
                  {description}
                </p>
                </article>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
          <p className="mt-10 text-sm text-zinc-500">
            Contact us for specifications, bulk supply, and partnership inquiries
            at {company.plantLocation}. Call{" "}
            <a
              href={`tel:${company.phoneTel}`}
              className="text-green-700 hover:underline"
            >
              {company.phone}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-green-700 hover:underline"
            >
              {company.email}
            </a>
            .
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
          >
            Get in touch
          </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
