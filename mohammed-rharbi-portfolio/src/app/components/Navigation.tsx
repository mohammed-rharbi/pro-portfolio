"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 sm:px-12 lg:px-20 bg-black/20 backdrop-blur-md">
      <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
        <span className="text-3xl font-black">W</span> Studio
      </div>

      <div className="hidden gap-8 sm:flex font-medium text-sm text-slate-300">
        {["Home", "About", "Projects", "Skills", "Contact", "FAQ"].map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
            {item}
            {item === "Home" && <span className="absolute -top-1 -right-2 text-[8px] text-orange-500">●</span>}
          </Link>
        ))}
      </div>
      <Link href="#contact" className="hidden sm:block rounded-full border border-slate-600 px-6 py-2 text-sm font-medium hover:bg-white hover:text-slate-900 transition-colors">
        Contact me
      </Link>

      <button
        className="sm:hidden text-white p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

       {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-6 flex flex-col gap-6 sm:hidden shadow-2xl">
          {["Home", "About", "Projects", "Skills", "Contact", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white hover:bg-blue-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact me
          </Link>
        </div>
      )}
    </nav>
  );
}
