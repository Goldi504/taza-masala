import {
  ArrowUpRight,
  Heart,
  Leaf,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

const items = [
  {
    number: "01",
    title: "Behtar Kheti",
    description:
      "Handpicked spices sourced from trusted farms across India.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Expert Blending",
    description:
      "Every blend is carefully balanced for rich aroma and authentic taste.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Freshness Lock",
    description:
      "Advanced packaging helps preserve freshness, flavour and aroma.",
    icon: LockKeyhole,
  },
  {
    number: "04",
    title: "Bharosa Jo Hamesha Taza",
    description:
      "The same trusted promise, now bringing better flavour to every meal.",
    icon: Heart,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="quality"
      className="relative overflow-hidden bg-[#0b4b38] py-20 text-white md:py-28"
    >

      {/* Background decoration */}

      <div className="absolute inset-0 opacity-[0.05]">

        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:22px_22px]" />

      </div>

      <div className="container relative">

        {/* Heading */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.5fr] lg:items-end">

          <div>

            <p className="taza-label">
              Why Taza
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">

              Kyun Chune

              <span className="block text-[#e5bb67]">
                Taza Masale?
              </span>

            </h2>

          </div>

          <p className="max-w-2xl border-l border-white/15 pl-6 text-base leading-8 text-white/70 sm:text-lg">
            From the farms to your kitchen, every step is focused on delivering
            spices that feel{" "}

            <span className="font-bold text-white">
              fresher, richer and full of authentic Indian flavour.
            </span>

          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="group relative min-h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.08]"
              >

                <span className="absolute right-7 top-7 text-xs font-bold tracking-[0.25em] text-white/30">
                  {item.number}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d9a544]/40 bg-[#d9a544]/10 text-[#e5bb67] transition duration-300 group-hover:scale-110 group-hover:bg-[#d9a544] group-hover:text-[#0b4b38]">

                  <Icon size={27} />

                </div>

                <h3 className="mt-9 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

                <div className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition duration-300 group-hover:bg-[#d9a544] group-hover:text-[#0b4b38]">

                  <ArrowUpRight size={18} />

                </div>

              </article>

            );
          })}

        </div>

      </div>
    </section>
  );
}