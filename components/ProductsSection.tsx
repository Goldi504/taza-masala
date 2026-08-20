interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      
      {/* Badge */}
      {badge && (
        <div className="mb-4">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#d9a544]">
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-[#d9a544]">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}