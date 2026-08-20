import { ArrowUpRight, Clock, Sparkles } from "lucide-react";

export interface Recipe {
  name: string;
  description: string;
  image: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b4937] p-2 shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3 hover:border-[#d9a544]/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">

      {/* Golden glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d9a544]/10 blur-3xl transition duration-500 group-hover:bg-[#d9a544]/20" />

      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-[240px]"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#073c2f]/70 via-transparent to-transparent" />

        {/* Top badge */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-[#d9a544]/30 bg-[#073c2f]/80 px-2.5 py-1.5 text-[9px] font-bold tracking-wider text-[#e7bd68] backdrop-blur">
          <Sparkles size={11} />
          TAZA RECIPE
        </div>

        {/* View icon */}
        <div className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-xl bg-[#d9a544] text-[#073c2f] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>

      </div>

      {/* Content */}
      <div className="relative px-3 pb-4 pt-5">

        {/* Small category */}
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#e7bd68]/80">
          <Clock size={12} />
          Easy to Make
        </div>

        {/* Recipe Name */}
        <h3 className="mt-3 text-base font-bold text-white transition-colors duration-300 group-hover:text-[#e7bd68]">
          {recipe.name}
        </h3>

        {/* Description */}
        <p className="mt-2 min-h-[40px] text-xs leading-5 text-white/55">
          {recipe.description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-white/10" />

        {/* Bottom link */}
        <div className="flex items-center justify-between">

          <span className="text-xs font-semibold text-white/50">
            Discover Recipe
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d9a544]/10 text-[#e7bd68] transition-all duration-300 group-hover:bg-[#d9a544] group-hover:text-[#073c2f]">
            <ArrowUpRight size={16} />
          </span>

        </div>

      </div>

      {/* Bottom golden line */}
      <div className="absolute bottom-0 left-6 right-6 h-[2px] scale-x-0 bg-[#d9a544] transition-transform duration-500 group-hover:scale-x-100" />

    </article>
  );
}