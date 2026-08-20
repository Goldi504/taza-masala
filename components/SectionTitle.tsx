interface SectionTitleProps {
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectionTitle({
  title,
  highlight,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center">

      <div className="mb-5 flex items-center justify-center gap-4">

        <span className="h-px w-10 bg-[#c98a26]" />

        <span className="h-2 w-2 rounded-full bg-[#c98a26]" />

        <span className="h-px w-10 bg-[#c98a26]" />

      </div>

      <h2 className="font-serif text-4xl text-[#26332d] sm:text-5xl">

        {title}

        {highlight && (
          <span className="text-[#064b37]">
            {" "}
            {highlight}
          </span>
        )}

      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#687169]">
          {description}
        </p>
      )}

    </div>
  );
}