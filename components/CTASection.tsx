import { ArrowRight, Sparkles, Leaf } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#073c2f] py-12 sm:py-16 lg:py-20"
    >
      {/* Background glow */}
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#d9a544]/10 blur-[120px]" />

      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#0f6049]/40 blur-[120px]" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="relative mx-auto w-[94%] max-w-[1400px]">
        <div className="relative min-h-[600px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b4937] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:rounded-[2.5rem] lg:min-h-[650px]">

          {/* LEFT IMAGE */}
          <div className="absolute bottom-0 left-0 top-0 hidden w-[32%] overflow-hidden lg:block">
            <img
              src="/images/chai-masala-left.jpg"
              alt="Indian spices"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#073c2f]/10 via-[#073c2f]/30 to-[#0b4937]" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute bottom-0 right-0 top-0 hidden w-[32%] overflow-hidden lg:block">
            <img
              src="/images/chai-masala-right.jpg"
              alt="Taza masala chai"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#073c2f]/10 via-[#073c2f]/30 to-[#0b4937]" />
          </div>

          {/* Golden glow behind content */}
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a544]/10 blur-[120px]" />

          {/* MOBILE IMAGE */}
          <div className="relative h-[220px] overflow-hidden lg:hidden sm:h-[280px]">
            <img
              src="/images/chai-masala-right.jpg"
              alt="Taza Masala"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b4937] via-[#0b4937]/30 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex min-h-[600px] items-center justify-center px-6 py-16 text-center sm:px-12 lg:min-h-[650px] lg:px-[20%]">

            <div className="max-w-3xl">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9a544]/30 bg-[#d9a544]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e7bd68] backdrop-blur">
                <Sparkles size={15} />
                Taste the Difference
              </div>

              {/* Heading */}
              <h2 className="font-serif text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Chai ki tazgi se,

                <span className="mt-2 block text-[#e7bd68]">
                  har dish ka swaad
                </span>

                <span className="mt-2 block text-[#f2d28f]">
                  banaye unforgettable.
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base md:text-lg">
                Carefully selected ingredients and expertly blended spices
                bring authentic Indian flavours and unforgettable aroma
                to every meal.
              </p>

              {/* BUTTONS */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <a
                  href="#products"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#d9a544] px-8 py-4 text-sm font-bold text-[#073c2f] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#ebc46f] sm:w-auto"
                >
                  Shop Taza Masale

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#recipes"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#d9a544]/60 hover:bg-white/10 sm:w-auto"
                >
                  Explore Recipes

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

              </div>

              {/* TRUST POINTS */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold text-white/60 sm:text-sm">

                <span className="flex items-center gap-2">
                  <Leaf size={15} className="text-[#e7bd68]" />
                  Authentic Flavours
                </span>

                <span className="flex items-center gap-2">
                  <Leaf size={15} className="text-[#e7bd68]" />
                  Premium Ingredients
                </span>

                <span className="flex items-center gap-2">
                  <Leaf size={15} className="text-[#e7bd68]" />
                  Everyday Freshness
                </span>

              </div>

            </div>
          </div>

          {/* Decorative golden elements */}
          <div className="absolute left-[33%] top-12 hidden h-4 w-4 rounded-full border-2 border-[#d9a544]/40 lg:block" />

          <div className="absolute bottom-12 right-[34%] hidden h-3 w-3 rounded-full bg-[#d9a544] shadow-[0_0_20px_rgba(217,165,68,0.8)] lg:block" />

          <div className="absolute right-[35%] top-24 hidden text-[#e7bd68]/40 lg:block">
            <Sparkles size={30} />
          </div>

        </div>
      </div>
    </section>
  );
}