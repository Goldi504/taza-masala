interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {label && (
        <p
          className={`taza-label ${
            center ? "justify-center" : ""
          }`}
        >
          {label}
        </p>
      )}

      <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-[#243029] sm:text-5xl lg:text-6xl">
        {title}

        {highlight && (
          <span className="text-[#0b4b38]">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6f766f] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
} 