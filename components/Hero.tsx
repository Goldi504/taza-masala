import type React from "react";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  {
    title: "100% Natural",
    text: "Pure ingredients",
    icon: Leaf,
  },
  {
    title: "Freshly Blended",
    text: "Rich authentic taste",
    icon: Sparkles,
  },
  {
    title: "Pure & Safe",
    text: "Hygienically packed",
    icon: ShieldCheck,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#073c2f] text-white"
    >
      {/* Background glow */}
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-[#d9a544]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute right-[-120px] top-10 h-72 w-72 rounded-full bg-[#0f6049]/30 blur-3xl sm:h-96 sm:w-96" />

      {/* subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:px-12 lg:pb-16 lg:pt-14">

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT SIDE */}
          <div className="relative z-10 order-2 lg:order-1">

            {/* Badge */}
            <div className="mb-5 flex items-center gap-3">

              <span className="inline-flex items-center gap-1 rounded-full bg-[#c9871f] px-3 py-1.5 text-[10px] font-bold tracking-wide text-white shadow-lg">
                <Sparkles size={12} />
                NEW
              </span>

              <span className="text-xs font-medium text-white/60 sm:text-sm">
                From the experts of perfect taste
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-2xl font-serif text-[2.7rem] leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Har Kitchen Mein

              <span className="mt-2 block text-[#e7bd68]">
                Taza Masalon Ka
              </span>

              <span className="mt-2 block text-[#f2d28f]">
                Asli Swaad.
              </span>
            </h1>

            {/* Description */}
            <div className="mt-6 max-w-xl">

              <p className="text-base font-bold text-white sm:text-lg">
                Wahi Tazgi. Wahi Bharosa.
              </p>

              <p className="mt-2 text-sm leading-7 text-white/65 sm:text-base">
                Carefully sourced Indian spices, freshly blended to bring
                authentic flavour and unforgettable aroma to every meal.
              </p>

            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">

              <a
                href="#products"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#d9a544] px-6 py-4 text-sm font-bold text-[#073c2f] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#ebc46f] sm:w-auto"
              >
                Explore Masale

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

              <a
                href="#story"
                className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#d9a544]/60 hover:bg-white/10 sm:w-auto"
              >
                Discover Our Story

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">

            {/* Golden glow */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#d9a544]/20 blur-3xl sm:h-[380px] sm:w-[380px]" />

            {/* Decorative circle */}
            <div className="absolute h-[290px] w-[290px] rounded-full border border-[#d9a544]/20 sm:h-[410px] sm:w-[410px]" />

            {/* Main image */}
            <div className="relative z-10 h-[270px] w-[270px] overflow-hidden rounded-full border-[8px] border-[#f6f1e7] bg-[#0b4937] shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:h-[390px] sm:w-[390px] lg:h-[470px] lg:w-[470px]">

              <img
                src="/images/garam-masala.jpg"
                alt="Taza premium garam masala"
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating card */}
            <div className="absolute bottom-2 left-0 z-20 rounded-2xl border border-white/10 bg-[#0b4937]/95 px-4 py-3 shadow-2xl backdrop-blur sm:bottom-8 sm:left-[-20px] sm:px-5 sm:py-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9a544]/15 text-[#e5bb67]">
                  <Leaf size={20} />
                </div>

                <div>

                  <p className="text-sm font-bold text-white">
                    Naturally Fresh
                  </p>

                  <p className="text-[11px] text-white/55">
                    Premium quality spices
                  </p>

                </div>

              </div>

            </div>

            {/* Small top badge */}
            <div className="absolute right-0 top-3 z-20 rounded-full border border-[#d9a544]/20 bg-[#f6f1e7] px-4 py-2 text-xs font-bold text-[#0b4937] shadow-xl sm:right-[-10px] sm:top-8">
              100% Pure
            </div>

          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-sm sm:grid-cols-3 lg:mt-16">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 px-5 py-5 transition duration-300 hover:bg-white/[0.04] sm:px-6 ${
                  index !== stats.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9a544]/15 text-[#e5bb67]">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <div>

                  <h3 className="text-sm font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/55">
                    {item.text}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}