import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#033425] text-white"
    >

      <div className="mx-auto flex w-[92%] max-w-[1450px] flex-col items-center justify-between gap-6 py-10 md:flex-row">

        {/* Logo */}

        <div className="text-center md:text-left">

          <h2 className="text-3xl font-black tracking-tight">
            TAZA
          </h2>

          <p className="mt-1 text-[8px] font-bold tracking-[0.35em] text-[#d9a544]">
            HAMESHA TAZA
          </p>

        </div>

        {/* Copyright */}

        <p className="text-center text-sm text-white/60">
          © 2026 Taza Masala. All rights reserved.
        </p>

        {/* Top */}

        <a
          href="#home"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#e5bb67] transition hover:-translate-y-1 hover:bg-[#c98a26] hover:text-white"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>

      </div>

    </footer>
  );
}