import type { ReactNode } from "react";
import AnimateIn from "@/components/AnimateIn";
import Image from "next/image";

type ImageTextSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
};

export default function ImageTextSection({
  eyebrow,
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
  className = "bg-white",
}: ImageTextSectionProps) {
  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <AnimateIn className={reverse ? "lg:order-2" : ""}>
          <p className="text-eyebrow text-green-600">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
            {title}
          </h2>
          <div className="text-lead mt-5 space-y-4 text-green-800/75">{children}</div>
        </AnimateIn>
        <AnimateIn delay={120} className={reverse ? "lg:order-1" : ""}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-green-900/10 ring-1 ring-green-200/80">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
