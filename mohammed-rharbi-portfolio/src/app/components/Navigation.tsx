"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact", "FAQ"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 sm:px-12 lg:px-20 transition-all duration-500 ${scrolled
          ? "bg-black/40 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-white/10"
          : "bg-black/20 backdrop-blur-md"
        }`}
      style={{
        background: scrolled
          ? "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
          : "rgba(0,0,0,0.2)"
      }}
    >

      <Link href="#home" className="text-2xl font-bold tracking-tight flex items-center gap-2 group">
        <span
          className="text-3xl font-black bg-gradient-to-r from-blue-400 blue-bl-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-shift 3s ease infinite"
          }}
        >
          M
        </span>
        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Rharbi
        </span>
      </Link>


      <div className="hidden gap-8 sm:flex font-medium text-sm">
        {navItems.map((item, index) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group py-2"
            onClick={() => setActiveSection(item.toLowerCase())}
            style={{
              animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
              {item}
            </span>

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full" />

            {activeSection === item.toLowerCase() && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse" />
            )}
          </Link>
        ))}
      </div>


      <Link
        href="#contact"
        className="hidden sm:block relative rounded-full px-6 py-2.5 text-sm font-semibold overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >

        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-400 to-purple-600 transition-opacity duration-300" />

        <span className="relative z-10 text-white group-hover:scale-105 inline-block transition-transform duration-300">
          Contact me
        </span>
      </Link>

      <button
        className="sm:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isMobileMenuOpen && (
        <>

          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm top-[72px]"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className="absolute top-full left-0 w-full bg-gradient-to-b from-slate-900/98 to-slate-950/98 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col gap-4 sm:hidden shadow-2xl"
            style={{
              animation: "slideDown 0.3s ease-out"
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 py-2 border-b border-white/5 hover:border-purple-500/30"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animation: `fadeInLeft 0.3s ease-out ${index * 0.05}s both`
                }}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-3 text-center text-sm font-bold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: "fadeInLeft 0.3s ease-out 0.3s both"
              }}
            >
              Contact me
            </Link>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
