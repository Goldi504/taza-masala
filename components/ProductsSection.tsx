import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import { ArrowRight, Sparkles } from "lucide-react";

const products = [
  {
    name: "Haldi Powder",
    image: "/images/haldi.jpg",
    price: "₹99",
    tag: "BEST SELLER",
  },
  {
    name: "Lal Mirch Powder",
    image: "/images/lal-mirch.jpg",
    price: "₹119",
    tag: "HOT & SPICY",
  },
  {
    name: "Garam Masala",
    image: "/images/garam-masala.jpg",
    price: "₹149",
    tag: "SIGNATURE",
  },
  {
    name: "Dhania Powder",
    image: "/images/dhania.jpg",
    price: "₹109",
    tag: "FRESH PICK",
  },
  {
    name: "Kali Mirch",
    image: "/images/kali-mirch.jpg",
    price: "₹139",
    tag: "PREMIUM",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#073c2f] px-4 py-20 md:py-28"
    >
      {/* Background Golden Glow */}
      <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#d9a544]/10 blur-[120px]" />

      {/* Background Green Glow */}
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#0f6049]/40 blur-[120px]" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* Small Top Badge */}
        <div className="mb-5 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d9a544]/30 bg-[#d9a544]/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#e7bd68]">
            <Sparkles size={14} />
            PREMIUM SPICE COLLECTION
          </div>
        </div>

        {/* Section Title */}
        <SectionTitle
          badge="OUR PREMIUM COLLECTION"
          title="Hamare"
          highlight="Taza Masale"
          description="Har packet mein freshness, purity aur authentic Indian flavour."
        />

        {/* Products */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4">
          <p className="text-center text-sm text-white/50">
            Explore our complete collection of authentic Indian spices.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#d9a544] px-7 py-4 text-sm font-bold text-[#073c2f] shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ebc46f] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            View All Products

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}