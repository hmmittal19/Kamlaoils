type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-green-200 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-50 px-4 py-14 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-green-300/25 animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-emerald-200/40 animate-float animation-delay-300"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-extrabold tracking-tight text-gradient-hero sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="animate-fade-in-up animation-delay-200 text-lead mt-4 max-w-2xl text-green-800/75 opacity-0-initial">
          {description}
        </p>
      </div>
    </section>
  );
}
