import AnimateIn from "@/components/AnimateIn";
import ContactDetails from "@/components/ContactDetails";
import { company } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";

const whyChoose = [
  { stat: "100%", label: "Problem Solving" },
  { stat: "100%", label: "Circular Economy" },
  { stat: "Advanced", label: "Plastic-to-Energy Tech" },
  { stat: "24/7", label: "Continuous Operation" },
  { stat: "100+", label: "Jobs Created" },
  { stat: "High Perform", label: "Industrial Fuel" },
];

const processSteps = [
  "Plastic Waste",
  "Sorting and shredding in the grinder",
  "Production of granulate",
  "Storage in the buffer box",
  "Heating in the extruder",
  "Pyrolysis / thermolysis & condensation",
  "Oil recovery",
  "Product manufacture and use",
];

const features = [
  {
    title: "Multi-layer Processing",
    description:
      "Capable of processing complex multilayer and thin plastics that are otherwise hard to recycle.",
  },
  {
    title: "Energy Efficient",
    description:
      "Recycled syngas is captured and reused as heating fuel, creating a self-sustaining system.",
  },
  {
    title: "Closed Loop",
    description:
      "Complete closed-loop operation ensures zero leakage and maximum resource recovery.",
  },
  {
    title: "Cleaner Fuel",
    description:
      "Further treatment in our facility produces cleaner industrial fuel for end users.",
  },
];

const btnClass =
  "transition-all duration-300 hover:scale-105 active:scale-95";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-green-200 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 px-4 py-20 text-green-900 sm:px-6 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute right-10 top-20 h-32 w-32 rounded-full bg-green-300/40 animate-float"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-10 left-10 h-24 w-24 rounded-full bg-lime-200/50 animate-float animation-delay-300"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="animate-fade-in-up font-display text-3xl font-semibold tracking-tight text-green-800 sm:text-4xl">
            Kamla Oil is{" "}
            <span className="text-green-600">Better · Bigger · Faster</span>
          </p>
          <h1 className="animate-fade-in-up animation-delay-200 mt-6 max-w-3xl font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-green-900 opacity-0-initial sm:text-6xl lg:text-7xl">
            Providing Clean Energy For India
          </h1>
          <Link
            href="/about"
            className={`animate-fade-in-up animation-delay-400 mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-display text-lg font-semibold tracking-wide text-white opacity-0-initial shadow-sm hover:bg-green-600 ${btnClass}`}
          >
            Explore MORE →
          </Link>
        </div>
      </section>

      <section className="relative w-full overflow-hidden border-b border-green-200 bg-green-100">
        <AnimateIn>
          <div className="relative mx-auto aspect-[16/9] w-full max-w-7xl sm:aspect-[21/9]">
            <Image
              src="/images/kamla-oil-tankers-yard.png"
              alt="Kamla Oil Industries oil tankers at the plant yard"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-display text-lg font-semibold text-white drop-shadow-md sm:bottom-6 sm:left-8 sm:text-2xl">
              Kamla Oil Industries — Our Fleet
            </p>
          </div>
        </AnimateIn>
      </section>

      <section className="bg-green-50 px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
            Welcome to Kamla Oil Industries
          </h2>
          <p className="text-lead mt-6 max-w-3xl text-green-800/70">
            Kamla Oil Industries Private Limited is an active unlisted private
            company at {company.plantLocation}, specializing as a biomass oil
            refinery. Incorporated on {company.incorporated}, the company
            focuses on the manufacture of various petroleum products, including
            oils obtained from bituminous minerals and petroleum residues.
          </p>
          <Link
            href="/about"
            className={`mt-6 inline-flex rounded-full bg-green-500 px-6 py-3 font-display text-base font-semibold tracking-wide text-white hover:bg-green-600 ${btnClass}`}
          >
            View More
          </Link>
        </AnimateIn>
      </section>

      <section className="bg-green-100/50 px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-6xl">
          <p className="text-eyebrow text-green-600">Our mission</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-2 font-display text-lg font-medium text-green-600">
            Transforming Plastic Waste Into Valuable Resources
          </p>
          <p className="text-lead mt-4 max-w-3xl text-green-800/70">
            Kamla Oil Industries Private Limited in Hapur operates as a biomass
            oil refinery, specializing in the manufacturing and supply of
            industrial fuels and chemical byproducts. Our advanced recycling
            process breaks long-chain plastic polymers into smaller hydrocarbon
            molecules in the absence of oxygen — ensuring no combustion, no
            harmful emissions, and efficient energy recovery.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex text-base font-semibold text-green-600 transition-all duration-300 hover:translate-x-1 hover:text-green-700"
          >
            Explore our products →
          </Link>
        </AnimateIn>
      </section>

      <section className="bg-green-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
              Why Choose Kamla Oil Industry
            </h2>
            <p className="text-lead mt-3 max-w-2xl text-green-800/70">
              Innovative waste-to-energy solutions focused on sustainability,
              efficiency, and long-term environmental impact.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ stat, label }, index) => (
              <AnimateIn key={label} delay={index * 80}>
                <article className="rounded-xl border border-green-200 bg-white/80 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-md">
                  <p className="font-display text-3xl font-bold text-green-600">{stat}</p>
                  <p className="mt-2 font-display text-base font-medium tracking-wide text-green-800/80">
                    {label}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lime-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
              Industrial Fuel — How It Works
            </h2>
            <p className="text-lead mt-4 max-w-3xl text-green-800/70">
              The plastics cycle can only be closed through a combination of
              mechanical and chemical recycling processes. Our technology
              transforms plastic waste into oil, which returns to the raw
              material cycle as a basis for recycled plastics or as an energy
              source.
            </p>
          </AnimateIn>
          <ol className="mt-10 grid list-none gap-3 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step}>
                <AnimateIn delay={index * 60}>
                  <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-white/80 px-4 py-3 transition-all duration-300 hover:border-green-400 hover:shadow-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500 font-display text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-base leading-relaxed text-green-800/80">{step}</span>
                  </div>
                </AnimateIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-green-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
              Our Features
            </h2>
            <p className="text-lead mt-3 max-w-2xl text-green-800/70">
              An advanced recycling process that breaks long-chain plastic
              polymers into smaller hydrocarbon molecules in the absence of
              oxygen.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map(({ title, description }, index) => (
              <AnimateIn key={title} delay={index * 100}>
                <article className="rounded-xl border border-green-200 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-md">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-green-700">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-green-800/70">
                    {description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-green-200 bg-emerald-50 px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
            Visit our plant
          </h2>
          <ContactDetails className="mt-6 max-w-2xl" />
        </AnimateIn>
      </section>

      <section className="border-t border-green-200 bg-gradient-to-r from-green-100 via-emerald-100 to-lime-100 px-4 py-14 text-center sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
            Partner with us for clean energy
          </h2>
          <p className="text-lead mt-3 text-green-700/80">
            Learn more about our refinery, products, or bulk industrial fuel
            supply from our Hapur plant.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className={`rounded-full bg-green-500 px-6 py-3 font-display text-sm font-semibold tracking-wide text-white shadow-sm hover:bg-green-600 ${btnClass}`}
            >
              Contact us
            </Link>
            <Link
              href="/products"
              className={`rounded-full border border-green-400 bg-white/70 px-6 py-3 font-display text-sm font-semibold tracking-wide text-green-700 hover:bg-green-50 ${btnClass}`}
            >
              Industrial fuel
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
