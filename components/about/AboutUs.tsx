import AnimateIn from "@/components/AnimateIn";
import PageHeader from "@/components/PageHeader";
import ContactDetails from "@/components/ContactDetails";
import { company } from "@/lib/company";
import Link from "next/link";

const values = [
  {
    title: "Sustainability",
    description:
      "Closing the plastics cycle through mechanical and chemical recycling for a cleaner India.",
  },
  {
    title: "Innovation",
    description:
      "Advanced pyrolysis and thermolysis technology with zero-combustion, emission-conscious operations.",
  },
  {
    title: "Circular Economy",
    description:
      "Transforming end-of-life plastic into feedstock and industrial fuel that replaces fossil oil.",
  },
];

export default function AboutUs() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="About Kamla Oil Industries"
        description="A biomass oil refinery in Hapur, Uttar Pradesh — manufacturing petroleum products and clean energy solutions."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateIn>
            <div>
              <h2 className="text-2xl font-bold text-green-800">
                Welcome to Kamla Oil Industries
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Kamla Oil Industries Private Limited is an active unlisted
                private company located at our UPSIDC Industrial Area plant in
                Hapur, Uttar Pradesh, specializing as
                a biomass oil refinery. Incorporated on 20 December 2023, we
                focus on the manufacture of various petroleum products,
                including oils obtained from bituminous minerals and petroleum
                residues.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Our facility transforms plastic waste into valuable resources —
                industrial fuels and chemical byproducts — supporting India&apos;s
                transition toward cleaner energy and a circular economy.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Kamla Oil is <strong>Better · Bigger · Faster</strong> —
                providing clean energy for India through proven plastic-to-energy
                technology and continuous, high-performance operations.
              </p>
            </div>
            </AnimateIn>
            <AnimateIn delay={150}>
            <div className="rounded-xl bg-green-50 p-8 transition-all duration-300 hover:shadow-md">
              <h3 className="font-semibold text-green-700">
                Company at a glance
              </h3>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-sm text-zinc-500">Legal name</dt>
                  <dd className="font-medium text-green-800">
                    Kamla Oil Industries Private Limited
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Incorporated</dt>
                  <dd className="font-medium text-green-800">
                    {company.incorporated}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Plant location</dt>
                  <dd className="font-medium text-green-800">
                    {company.plantLocation}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Phone</dt>
                  <dd className="font-medium text-green-800">
                    <a
                      href={`tel:${company.phoneTel}`}
                      className="hover:text-green-700"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Email</dt>
                  <dd className="font-medium text-green-800">
                    <a
                      href={`mailto:${company.email}`}
                      className="hover:text-green-700"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Specialization</dt>
                  <dd className="font-medium text-green-800">
                    Biomass oil refinery · Plastic-to-energy
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-zinc-500">Status</dt>
                  <dd className="font-medium text-green-800">
                    Active · Unlisted private company
                  </dd>
                </div>
              </dl>
            </div>
            </AnimateIn>
          </div>

          <AnimateIn>
          <h2 className="mt-16 text-2xl font-bold text-green-800">
            What we do
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">
            We operate as a biomass oil refinery specializing in the manufacturing
            and supply of industrial fuels and chemical byproducts. Through
            sorting, shredding, extrusion, pyrolysis, thermolysis, and
            condensation, plastic waste is converted into oil that re-enters the
            supply chain — either as recycled plastic feedstock or as a clean
            energy source.
          </p>
          </AnimateIn>

          <h2 className="mt-16 text-2xl font-bold text-green-800">
            Our values
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map(({ title, description }, index) => (
              <AnimateIn key={title} delay={index * 100}>
              <article className="rounded-xl border border-green-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-md">
                <h3 className="font-semibold text-green-700">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {description}
                </p>
              </article>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
          <h2 className="mt-16 text-2xl font-bold text-green-800">
            Contact & hours
          </h2>
          <ContactDetails className="mt-6 max-w-xl" />
          </AnimateIn>

          <AnimateIn delay={100} className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
            >
              Explore MORE →
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-green-500 px-6 py-3 text-sm font-semibold text-green-700 transition-all duration-300 hover:scale-105 hover:bg-green-50"
            >
              Contact us
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
