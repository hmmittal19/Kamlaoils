import { company } from "@/lib/company";

type ContactDetailsProps = {
  className?: string;
  layout?: "stack" | "grid";
};

export default function ContactDetails({
  className = "",
  layout = "stack",
}: ContactDetailsProps) {
  const items = [
    {
      label: "Plant Location",
      content: (
        <>
          <span className="mt-1 block leading-relaxed text-green-800/80">
            {company.plantLocation}
          </span>
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-base font-medium text-green-600 hover:text-green-700"
          >
            Get directions →
          </a>
        </>
      ),
    },
    {
      label: "Email",
      content: (
        <a
          href={`mailto:${company.email}`}
          className="text-green-800/80 hover:text-green-600"
        >
          {company.email}
        </a>
      ),
    },
    {
      label: "Phone",
      content: (
        <a
          href={`tel:${company.phoneTel}`}
          className="text-green-800/80 hover:text-green-600"
        >
          {company.phone}
        </a>
      ),
    },
    {
      label: "Business Hours",
      content: (
        <>
          <span className="block text-green-800/80">
            {company.businessHours}
          </span>
          <span className="mt-1 block text-base text-green-600">
            {company.plantHours}
          </span>
        </>
      ),
    },
  ];

  const wrapperClass =
    layout === "grid"
      ? `grid gap-4 text-green-800/80 sm:grid-cols-2 ${className}`
      : `space-y-4 text-green-800/80 ${className}`;

  const Tag = layout === "grid" ? "div" : "ul";

  return (
    <Tag className={wrapperClass}>
      {items.map(({ label, content }) => {
        const ItemTag = layout === "grid" ? "div" : "li";
        return (
          <ItemTag key={label}>
            <span className="block text-base font-medium text-green-600">
              {label}
            </span>
            <div className="mt-1">{content}</div>
          </ItemTag>
        );
      })}
    </Tag>
  );
}
