import { ArrowRight, Sparkles } from "lucide-react";

import RecipeCard, {
  Recipe,
} from "./RecipeCard";

const recipes: Recipe[] = [
  {
    name: "Paneer Butter Masala",
    description: "Made better with Taza Garam Masala",
    image: "/images/paneer.jpg",
  },
  {
    name: "Aloo Jeera",
    description: "Simple ingredients, unforgettable flavour",
    image: "/images/aloo-jeera.jpg",
  },
  {
    name: "Chole Masala",
    description: "Khushboo aur swaad ka perfect combination",
    image: "/images/chole.jpg",
  },
  {
    name: "Tandoori Chicken",
    description: "Spice up your special moments",
    image: "/images/tandoori.jpg",
  },
];

export default function RecipesSection() {
  return (
    <section
      id="recipes"
      className="relative overflow-hidden bg-[#073c2f] py-16 sm:py-20 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#d9a544]/10 blur-[100px] sm:h-96 sm:w-96" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#0f6049]/50 blur-[100px] sm:h-96 sm:w-96" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="relative mx-auto w-[92%] max-w-[1450px]">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_3.1fr] lg:gap-12 xl:gap-16">

          {/* Left Content */}
          <div className="flex flex-col justify-center lg:sticky lg:top-24 lg:h-fit">

            {/* Badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#d9a544]/30 bg-[#d9a544]/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#e7bd68]">
              <Sparkles size={13} />
              TASTE THE DIFFERENCE
            </div>

            {/* Heading */}
            <h2 className="max-w-md font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-5xl xl:text-6xl">
              Banao har dish
              <span className="mt-2 block text-[#e7bd68]">
                aur bhi lajawab
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
              Discover delicious recipes made even more special with the
              authentic taste, aroma and freshness of Taza Masale.
            </p>

            {/* Golden Line */}
            <div className="mt-6 h-[2px] w-20 bg-[#d9a544]" />

            {/* Button */}
            <a
              href="#cta"
              className="group mt-8 flex w-fit items-center gap-3 rounded-xl bg-[#d9a544] px-7 py-4 text-sm font-bold text-[#073c2f] shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ebc46f] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              Explore Recipes

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* Recipe Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.name}
                recipe={recipe}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}