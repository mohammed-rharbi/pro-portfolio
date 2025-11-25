"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaPhone, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNestjs, SiReact } from "react-icons/si";


type Props = {
  name: string;
  role: string;
  photoSrc: string;
  cta?: { label: string; href: string };
};

export default function ProfileHeader({
  name,
  role,
  photoSrc,
  cta,
}: Props) {
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B1120] text-white font-sans selection:bg-blue-500 selection:text-white pt-20">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full translate-x-1/3 translate-y-1/3 opacity-20 blur-3xl" />
        <div className="absolute top-[20%] right-[20%] w-4 h-4 rounded-full bg-blue-400 blur-[1px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-[1400px] grid-cols-1 items-center gap-12 px-6 sm:px-12 lg:grid-cols-12 lg:px-20">


        <div className="lg:col-span-6 space-y-8 relative">

          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-3xl opacity-20 -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-orange-500 font-semibold text-sm tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 ring-4 ring-orange-500/20" />
            Open To Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-blue-500"> Hi I'm </span> {name.split(" ")[0]} <br />
            <span className="relative z-10">
              {name.split(" ").slice(1).join(" ")}
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-orange-500 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-slate-400 leading-relaxed text-lg"
          >
            {role} building fast, scalable web apps. Focused on clean architecture and real business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            {cta && (
              <Link
                href={cta.href}
                className="w-full sm:w-auto text-center rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
              >
                {cta.label}
              </Link>
            )}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
                className="w-full sm:w-auto justify-center rounded-full border border-slate-600 px-8 py-4 text-sm font-bold text-white hover:bg-white hover:text-slate-900 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Download CV
                <svg className={`w-4 h-4 transition-transform ${isCvDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isCvDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 w-full bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl z-50 flex flex-col">
                  <a href="/mohammed-rharbi-cv-en.pdf" download className="px-4 py-3 text-sm text-slate-300 hover:bg-slate-700 hover:text-white text-center transition-colors">English</a>
                  <a href="/mohammed-rharbi-cv-fr.pdf" download className="px-4 py-3 text-sm text-slate-300 hover:bg-slate-700 hover:text-white text-center transition-colors border-t border-slate-700">Français</a>
                </div>
              )}
            </div>
            <button className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-blue-500 hover:bg-slate-700 transition-colors">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
                <path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48113 13.5 8.86603L1.5 15.7942C0.833334 16.1791 0 15.698 0 14.9282L0 1.0718C0 0.301997 0.833333 -0.179129 1.5 0.205771L13.5 7.13397Z" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-8"
          >
            {[
              { Icon: FaGithub, href: "https://github.com/mohammed-rharbi", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mohammed--rharbi", label: "LinkedIn" },
              { Icon: FaInstagram, href: "https://www.instagram.com/mohammed_rharbi", label: "Instagram" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <social.Icon size={14} />
              </a>
            ))}
          </motion.div>

          <div className="absolute bottom-0 left-0 animate-bounce text-slate-500">
            ↓
          </div>
        </div>

        <div className="relative lg:col-span-6 flex justify-center items-center h-[600px]">

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-[450px] aspect-[3/4]"
          >
            <Image
              src={photoSrc}
              alt="Profile"
              fill
              className="object-cover rounded-3xl z-10"
              priority
            />
            <div className="absolute bottom-0 right-0 w-[120%] h-[80%] bg-blue-600 rounded-full -z-10 translate-x-1/4 translate-y-1/4" />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute left-0 top-1/3 z-20 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-xl max-w-[180px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">❤</div>
              <span className="text-xs text-slate-300">Great project</span>
            </div>
            <div className="text-2xl font-bold text-white">50+ <span className="text-sm font-normal text-slate-400">Done</span></div>
            <div className="text-[10px] text-green-400 mt-1">2.1% vs last 7 days</div>
            <div className="absolute -right-2 top-1/2 w-4 h-4 bg-slate-800 rotate-45 transform -translate-y-1/2 border-r border-t border-white/5"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-0 z-20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-sm text-slate-200">Full Stack Developer</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] -right-4 z-20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2"
          >
            <div className="flex gap-6">
              <SiReact size={24} className="text-blue-400 hover:text-blue-400 transition-colors" />
              <SiNestjs size={24} className="text-red-500 hover:text-red-500 transition-colors" />
              <FaNodeJs size={24} className="text-green-500 hover:text-green-500 transition-colors" />
              <SiMongodb size={24} className="text-green-500 hover:text-green-500 transition-colors" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-[10%] left-[10%] z-20 bg-white p-3 rounded-2xl shadow-2xl w-32"
          >
            <div className="flex gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative">
                <Image src={'/profilepic.webp'} alt="mini" fill className="object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs"><FaPhone /></div>
            </div>
            <div className="text-slate-900 text-xs font-bold">{name.split(" ")[0]}</div>
            <div className="text-slate-600 text-[10px]">Junior Developer</div>
            <div className="mt-2 flex justify-between text-[10px] text-slate-900 font-bold">
              <span>06-1912-7284</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}