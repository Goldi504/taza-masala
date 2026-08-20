import {
  ArrowUpRight,
  Leaf,
  Sparkles,
  Check,
} from "lucide-react";

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#063f31] py-20 text-white md:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-[#d9a544]/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d9a544]/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_35%)]" />
      </div>

      <div className="relative mx-auto w-[92%] max-w-[1400px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* IMAGE SIDE */}

          <div className="relative mx-auto w-full max-w-[520px]">

            {/* Decorative border */}

            <div className="absolute -left-3 -top-3 h-full w-full rounded-[32px] border border-[#d9a544]/25 sm:-left-5 sm:-top-5" />

            {/* Image container */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a4d3c] p-2 shadow-2xl">

              <img
                src="/images/story-masala.png"
                alt="Authentic Indian spices"
                className="h-[320px] w-full rounded-[22px] object-cover sm:h-[400px] lg:h-[480px]"
              />

              {/* Image overlay */}

              <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-[#052d23]/50 via-transparent to-transparent" />

            </div>

            {/* Small floating badge */}

            <div className="absolute -bottom-5 right-3 rounded-2xl border border-white/10 bg-[#0a4d3c] px-5 py-4 shadow-xl sm:right-6">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9a544]/15 text-[#e5bb67]">
                  <Leaf size={20} />
                </div>

                <div>

                  <p className="text-xl font-black text-[#e5bb67]">
                    100%
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/60">
                    Indian Flavour
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* CONTENT SIDE */}

          <div className="lg:pl-4">

            {/* Label */}

            <div className="flex items-center gap-3">

              <span className="h-[1px] w-12 bg-[#d9a544]" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e5bb67]">
                Our Story
              </p>

            </div>


            {/* Heading */}

            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">

              Chai ki tazgi se,

              <span className="block mt-2 text-[#e5bb67]">
                masalon ki khushboo tak.
              </span>

            </h2>


            {/* Description */}

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">

              Taza ka idea simple hai — everyday moments ko thoda aur
              special banana. Ab wahi freshness aur bharosa aapke kitchen
              tak aata hai.

            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">

              Har blend flavour, aroma aur authentic Indian cooking
              experience ko better banane ke liye carefully crafted hai.

            </p>


            {/* Feature Cards */}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              {/* Card 1 */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9a544]/15 text-[#e5bb67]">

                    <Sparkles size={21} />

                  </div>

                  <div>

                    <p className="font-bold text-white">
                      Carefully Blended
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/50">
                      Perfect flavour balance
                    </p>

                  </div>

                </div>

              </div>


              {/* Card 2 */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9a544]/15 text-[#e5bb67]">

                    <Leaf size={21} />

                  </div>

                  <div>

                    <p className="font-bold text-white">
                      Fresh Ingredients
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/50">
                      Sourced with care
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Small points */}

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-white/60 sm:text-sm">

              <div className="flex items-center gap-2">

                <Check
                  size={16}
                  className="text-[#e5bb67]"
                />

                Authentic Indian Flavours

              </div>

              <div className="flex items-center gap-2">

                <Check
                  size={16}
                  className="text-[#e5bb67]"
                />

                Carefully Selected Ingredients

              </div>

            </div>


            {/* Button */}

            <a
              href="#products"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#d9a544] px-7 py-4 text-sm font-bold text-[#063f31] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#edc46f]"
            >

              Discover Our Masale

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </a>

          </div>

        </div>
      </div>
    </section>
  );
}