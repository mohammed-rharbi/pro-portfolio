'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiNestjs } from "react-icons/si";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20 overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        <div className="relative">

          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-2xl rounded-[3rem] rounded-tr-[8rem] -z-10 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transform -rotate-1 scale-105" />

          <div className="p-8 sm:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                Who I Am
              </h2>
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                Passionate <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg font-light">
                Full-stack developer focused on building clean, scalable applications with modern JavaScript ecosystems. I work across backend architecture, API design, and reliable frontend interfaces, with an emphasis on maintainability and real-world performance              </p>
              <p className="text-slate-400 leading-relaxed font-light">
                I focus on clean code, solid architecture, and building software that performs reliably under real-world conditions. I continuously improve my skills and adapt my tools, but the priority is always delivering clear, maintainable, long-term solutions.              </p>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Tech Stack</p>
                <div className="flex gap-6 text-slate-400">
                  <SiNextdotjs size={24} className="hover:text-white transition-colors" />
                  <FaReact size={24} className="hover:text-blue-400 transition-colors" />
                  <SiTypescript size={24} className="hover:text-blue-600 transition-colors" />
                  <SiNestjs size={24} className="hover:text-red-500 transition-colors" />
                  <FaNodeJs size={24} className="hover:text-green-500 transition-colors" />
                  <SiMongodb size={24} className="hover:text-green-500 transition-colors" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative h-[600px] w-full hidden lg:block">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            <Image
              src="/paint.webp"
              alt="About Me"
              fill
              className="object-cover rounded-[2.5rem] shadow-2xl z-10"
            />

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-12 -right-6 z-20 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2+
              </div>
              <div>
                <div className="text-white font-bold text-sm">Years</div>
                <div className="text-slate-400 text-xs">Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-24 -left-6 z-20 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                35+
              </div>
              <div>
                <div className="text-white font-bold text-sm">Projects</div>
                <div className="text-slate-400 text-xs">Completed</div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div >
    </section >
  );
}
