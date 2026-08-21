import { company } from "@/lib/company";

type ContactDetailsProps = {
  className?: string;
  layout?: "stack" | "grid";
  hideLocation?: boolean;
};

export default function ContactDetails({
  className = "",
  layout = "stack",
  hideLocation = false,
}: ContactDetailsProps) {
  const labelClass = "block text-base font-medium text-green-600";
  const linkClass = "text-green-800/80 hover:text-green-600";
  const bodyTextClass = "text-green-800/80";
  const accentTextClass = "text-green-600";

  const items = [
    ...(hideLocation
      ? []
      : [
          {
            label: "Plant Location",
            content: (
              <>
                <span className={`mt-1 block leading-relaxed ${bodyTextClass}`}>
                  {company.plantLocation}
                </span>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block text-base font-medium ${linkClass}`}
                >
                  Get directions →
                </a>
              </>
            ),
          },
        ]),
    {
      label: "Email",
      content: (
        <a href={`mailto:${company.email}`} className={linkClass}>
          {company.email}
        </a>
      ),
    },
    {
      label: "Phone",
      content: (
        <a href={`tel:${company.phoneTel}`} className={linkClass}>
          {company.phone}
        </a>
      ),
    },
    {
      label: "Business Hours",
      content: (
        <>
          <span className={`block ${bodyTextClass}`}>
            {company.businessHours}
          </span>
          <span className={`mt-1 block text-base ${accentTextClass}`}>
            {company.plantHours}
          </span>
        </>
      ),
    },
  ];

  const wrapperClass =
    layout === "grid"
      ? `grid gap-4 sm:grid-cols-2 ${bodyTextClass} ${className}`
      : `space-y-4 ${bodyTextClass} ${className}`;

  const Tag = layout === "grid" ? "div" : "ul";

  return (
    <Tag className={wrapperClass}>
      {items.map(({ label, content }) => {
        const ItemTag = layout === "grid" ? "div" : "li";
        return (
          <ItemTag key={label}>
            <span className={labelClass}>{label}</span>
            <div className="mt-1">{content}</div>
          </ItemTag>
        );
      })}
    </Tag>
  );
}
