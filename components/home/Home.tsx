import AnimateIn from "@/components/AnimateIn";
import ContactDetails from "@/components/ContactDetails";
import ImageTextSection from "@/components/home/ImageTextSection";
import { company } from "@/lib/company";
import { siteImages } from "@/lib/site-images";
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

const btnClass =
  "transition-all duration-300 hover:scale-105 active:scale-95";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero — full-width environmental image like Bharat Enviro */}
      <section className="relative min-h-[70vh] overflow-hidden border-b border-green-200">
        <Image
          src={siteImages.hero}
          alt="Green sustainable environment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/50 to-green-950/80" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="animate-fade-in-up text-eyebrow text-green-200">
            Kamla Oil Industries
          </p>
          <h1 className="animate-fade-in-up animation-delay-100 mt-4 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Providing  Energy For India
          </h1>
          <p className="animate-fade-in-up animation-delay-200 mt-5 max-w-2xl text-lg text-green-50/90 sm:text-xl">
            Transforming plastic waste into valuable industrial fuel — powering
            a cleaner, greener future from our Hapur refinery.
          </p>
          <Link
            href="/contact"
            className={`animate-fade-in-up animation-delay-300 mt-10 inline-flex rounded-full bg-green-500 px-8 py-3.5 font-display text-lg font-semibold text-white shadow-lg shadow-green-900/30 hover:bg-green-600 ${btnClass}`}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Mission */}
      <ImageTextSection
        eyebrow="First of all"
        title="Our Mission"
        imageSrc={siteImages.mission}
        imageAlt="Plastic waste to fuel — converting waste into clean energy and hydrogen"
        className="bg-white"
      >
        <p>
          At Kamla Oil Industries, we are dedicated to transforming plastic
          waste into clean industrial fuel and closing the loop on hard-to-recycle
          materials. Our mission is to provide efficient waste-to-energy solutions
          that promote sustainability and protect the environment across India.
        </p>
        <p>
          Incorporated on {company.incorporated}, we operate a biomass oil
          refinery at {company.plantLocation}, manufacturing petroleum products
          and supporting India&apos;s transition to cleaner energy.
        </p>
      </ImageTextSection>

      {/* Approach */}
      <ImageTextSection
        eyebrow="Not to mention"
        title="Our Approach"
        imageSrc={siteImages.approach}
        imageAlt="Sustainable green environment"
        reverse
        className="bg-green-50"
      >
        <p>
          Kamla Oil Industries takes a proactive approach to plastic recycling
          and energy recovery. Our team uses advanced pyrolysis and thermolysis
          technology to break long-chain polymers into smaller hydrocarbon
          molecules — with no combustion, no harmful emissions, and maximum
          resource recovery.
        </p>
        <p>
          Recycled syngas is captured and reused as heating fuel, creating a
          self-sustaining system built for continuous, high-performance
          industrial operations.
        </p>
      </ImageTextSection>

      {/* Services / Products */}
      <ImageTextSection
        eyebrow="And let's not forget"
        title="Our Products & Services"
        imageSrc={siteImages.services}
        imageAlt="Recycling and waste management"
        className="bg-white"
      >
        <p>
          We manufacture high-performance industrial fuel, recycled plastic
          feedstock oil, and petroleum products from bituminous minerals and
          residues — all produced responsibly at our Hapur plant.
        </p>
        <p>
          From bulk industrial fuel supply to chemical byproducts and circular
          feedstock, every step of our process is handled efficiently and in
          line with environmental best practices.
        </p>
        <Link
          href="/products"
          className="inline-flex font-semibold text-green-600 transition-colors hover:text-green-800"
        >
          View all products →
        </Link>
      </ImageTextSection>

      {/* Fleet image — Kamla Oil industrial identity */}
      <section className="relative w-full overflow-hidden border-y border-green-200 bg-green-100">
        <AnimateIn>
          <div className="relative mx-auto aspect-[16/9] w-full max-w-7xl sm:aspect-[21/9]">
            <Image
              src={siteImages.fleet}
              alt="Kamla Oil Industries oil tankers at the plant yard"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-display text-lg font-semibold text-white drop-shadow-md sm:bottom-8 sm:left-8 sm:text-2xl">
              Kamla Oil Industries — Our Fleet
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* About snippet */}
      <section className="bg-green-50 px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
            About Us
          </h2>
          <p className="text-lead mt-6 text-green-800/75">
            Kamla Oil Industries Private Limited is dedicated to tackling
            plastic waste and energy challenges in India. With expertise in
            biomass oil refining and innovative recycling, we aim to transform
            how industrial fuel is produced — creating a sustainable environment
            for future generations.
          </p>
          <Link
            href="/about"
            className={`mt-8 inline-flex rounded-full bg-green-600 px-6 py-3 font-display font-semibold text-white hover:bg-green-700 ${btnClass}`}
          >
            Learn more
          </Link>
        </AnimateIn>
      </section>

      {/* Tagline banner */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 px-4 py-16 text-center sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Transforming Plastic Into Clean Energy
          </h2>
          <p className="mt-4 text-lg text-green-50/90">
            Better · Bigger · Faster — Kamla Oil is building clean energy for
            India.
          </p>
        </AnimateIn>
      </section>

      {/* Why choose */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimateIn className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              Why Choose Kamla Oil
            </h2>
            <p className="text-lead mx-auto mt-3 max-w-2xl text-green-800/75">
              Innovative waste-to-energy solutions focused on sustainability and
              long-term environmental impact.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ stat, label }, index) => (
              <AnimateIn key={label} delay={index * 80}>
                <article className="rounded-xl border border-green-200 bg-green-50/80 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-md">
                  <p className="font-display text-3xl font-bold text-green-600">
                    {stat}
                  </p>
                  <p className="mt-2 font-display text-base font-medium text-green-800/80">
                    {label}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visit plant */}
      <section className="border-t border-green-200 bg-green-50 px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
            Visit our plant
          </h2>
          <ContactDetails className="mt-6 max-w-2xl" />
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="border-t border-green-200 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-50 px-4 py-14 text-center sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
            Partner with us for clean energy
          </h2>
          <p className="text-lead mt-3 text-green-800/75">
            Bulk industrial fuel, product quotes, or plant visits — we&apos;re
            ready to help from our Hapur refinery.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className={`rounded-full bg-green-600 px-6 py-3 font-display text-sm font-semibold text-white shadow-sm hover:bg-green-700 ${btnClass}`}
            >
              Contact us
            </Link>
            <Link
              href="/products"
              className={`rounded-full border border-green-400 bg-white/80 px-6 py-3 font-display text-sm font-semibold text-green-800 hover:bg-green-50 ${btnClass}`}
            >
              Our products
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
