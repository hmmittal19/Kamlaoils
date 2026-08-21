import { company } from "@/lib/company";

type ContactDetailsProps = {
  className?: string;
  layout?: "stack" | "grid" | "footer";
  hideLocation?: boolean;
  variant?: "light" | "dark";
};

export default function ContactDetails({
  className = "",
  layout = "stack",
  hideLocation = false,
  variant = "light",
}: ContactDetailsProps) {
  const isDark = variant === "dark";

  const labelClass = isDark
    ? "block text-base font-semibold text-white"
    : "block text-base font-medium text-green-600";

  const linkClass = isDark
    ? "text-white/90 transition-colors hover:text-white"
    : "text-green-800/80 hover:text-green-600";

  const bodyTextClass = isDark ? "text-white/85" : "text-green-800/80";
  const accentTextClass = isDark ? "text-white/95" : "text-green-600";

  const locationBlock = hideLocation
    ? null
    : {
        label: "Plant Location",
        content: (
          <>
            <span className={`mt-1 block text-sm leading-relaxed uppercase tracking-wide sm:text-base ${bodyTextClass}`}>
              {company.plantLocation}
            </span>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 inline-block text-sm font-medium sm:text-base ${linkClass}`}
            >
              Get directions →
            </a>
          </>
        ),
      };

  const phoneBlock = {
    label: "Phone",
    content: (
      <a href={`tel:${company.phoneTel}`} className={`text-sm sm:text-base ${linkClass}`}>
        {company.phone}
      </a>
    ),
  };

  const emailBlock = {
    label: "Email",
    content: (
      <a href={`mailto:${company.email}`} className={`text-sm sm:text-base ${linkClass}`}>
        {company.email}
      </a>
    ),
  };

  const hoursBlock = {
    label: "Business Hours",
    content: (
      <>
        <span className={`block text-sm sm:text-base ${bodyTextClass}`}>
          {company.businessHours}
        </span>
        <span className={`mt-1 block text-sm sm:text-base ${accentTextClass}`}>
          {company.plantHours}
        </span>
      </>
    ),
  };

  if (layout === "footer") {
    const columns = hideLocation
      ? [phoneBlock, emailBlock, hoursBlock]
      : [
          {
            label: locationBlock!.label,
            content: (
              <>
                {locationBlock!.content}
                <div className="mt-6">
                  <span className={labelClass}>{phoneBlock.label}</span>
                  <div className="mt-1">{phoneBlock.content}</div>
                </div>
              </>
            ),
          },
          emailBlock,
          hoursBlock,
        ];

    return (
      <div
        className={`grid gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:gap-10 ${className}`}
      >
        {columns.map(({ label, content }) => (
          <div key={label}>
            <span className={labelClass}>{label}</span>
            <div className="mt-2">{content}</div>
          </div>
        ))}
      </div>
    );
  }

  const items = [
    ...(locationBlock ? [locationBlock] : []),
    emailBlock,
    phoneBlock,
    hoursBlock,
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
