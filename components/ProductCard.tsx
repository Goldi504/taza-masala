"use client";

import { ShoppingBag, Heart, Star, Sparkles } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  tag: string;
}

export default function ProductCard({
  name,
  image,
  price,
  tag,
}: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <article className="group relative rounded-[24px] border border-white/10 bg-[#0b4937] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
      
      {/* Golden glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d9a544]/10 blur-3xl transition duration-500 group-hover:bg-[#d9a544]/20" />

      {/* Image */}
      <div className="relative overflow-hidden rounded-[18px] bg-[#073c2f]">

        {/* Image */}
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-72"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#073c2f]/80 via-transparent to-transparent opacity-70" />

        {/* Product Tag */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-[#d9a544]/30 bg-[#073c2f]/90 px-3 py-1.5 text-[9px] font-extrabold tracking-wider text-[#e7bd68] shadow-lg backdrop-blur">
          <Sparkles size={11} />
          {tag}
        </div>

        {/* Heart Button */}
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 ${
            liked
              ? "bg-[#d9a544] text-[#073c2f]"
              : "bg-[#073c2f]/85 text-white hover:bg-[#d9a544] hover:text-[#073c2f]"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart
            size={17}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        {/* Quick Add Button */}
        <button
          type="button"
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 translate-y-16 rounded-xl px-4 py-3 text-xs font-bold shadow-xl transition-all duration-500 group-hover:translate-y-0 ${
            added
              ? "bg-[#e7bd68] text-[#073c2f] opacity-100"
              : "bg-[#d9a544] text-[#073c2f] opacity-0 group-hover:opacity-100 hover:bg-[#ebc46f]"
          }`}
        >
          {added ? "✓ Added to Cart" : "Quick Add to Cart"}
        </button>
      </div>

      {/* Product Info */}
      <div className="relative px-3 pb-4 pt-5">

        {/* Rating */}
        <div className="flex items-center gap-1 text-[#e5bb67]">
          {[1, 2, 3, 4, 5].map((item) => (
            <Star
              key={item}
              size={13}
              fill="currentColor"
            />
          ))}

          <span className="ml-1 text-[10px] text-white/55">
            4.9
          </span>
        </div>

        {/* Product Name */}
        <h3 className="mt-3 text-lg font-bold tracking-tight text-white">
          {name}
        </h3>

        {/* Description */}
        <p className="mt-1 text-xs leading-5 text-white/55">
          Premium quality • Freshly packed
        </p>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-white/10" />

        {/* Price and Cart */}
        <div className="flex items-center justify-between">

          <div>
            <span className="text-xl font-black text-[#e7bd68]">
              {price}
            </span>

            <span className="ml-2 text-xs text-white/30 line-through">
              ₹199
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 ${
              added
                ? "bg-[#e7bd68] text-[#073c2f]"
                : "bg-[#d9a544] text-[#073c2f] hover:bg-[#ebc46f]"
            }`}
            aria-label={`Add ${name} to cart`}
          >
            {added ? (
              <span className="text-lg font-black">✓</span>
            ) : (
              <ShoppingBag size={18} />
            )}
          </button>

        </div>
      </div>

      {/* Bottom golden line */}
      <div className="absolute bottom-0 left-8 right-8 h-[2px] scale-x-0 bg-[#d9a544] transition-transform duration-500 group-hover:scale-x-100" />

    </article>
  );
}