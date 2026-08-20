"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Our Masale",
    href: "#products",
  },
  {
    name: "Our Story",
    href: "#story",
  },
  {
    name: "Quality",
    href: "#quality",
  },
  {
    name: "Recipes",
    href: "#recipes",
  },
  {
    name: "Contact",
    href: "#footer",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#073c2f]/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] w-[92%] max-w-[1450px] items-center justify-between sm:h-[82px]">
        
        {/* Logo */}
        <a
          href="#home"
          className="group shrink-0"
          onClick={() => setOpen(false)}
        >
          <h1 className="text-3xl font-black tracking-tight text-white transition sm:text-4xl group-hover:text-[#e5bb67]">
            TAZA
          </h1>

          <p className="mt-[-4px] text-[8px] font-bold tracking-[0.35em] text-[#e5bb67]">
            HAMESHA TAZA
          </p>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-semibold text-white/70 transition duration-300 hover:text-[#e5bb67]"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#d9a544] transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* Shop Button */}
        <a
          href="#products"
          className="hidden items-center gap-2 rounded-full bg-[#d9a544] px-6 py-3 text-sm font-bold text-[#073c2f] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e5bb67] sm:flex"
        >
          Shop Now

          <ShoppingBag size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2.5 text-[#e5bb67] transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#073c2f] transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex w-[92%] max-w-[1450px] flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-sm font-semibold text-white/75 transition hover:pl-2 hover:text-[#e5bb67]"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#products"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#d9a544] py-4 text-center text-sm font-bold text-[#073c2f] transition hover:bg-[#e5bb67]"
          >
            Shop Now

            <ShoppingBag size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}