"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { FaLayerGroup, FaCode, FaRocket, FaGitAlt, FaVial, FaBook, FaChartLine, FaLock } from "react-icons/fa";
import { useRef } from "react";

const processes = [
  {
    title: "Architecture First",
    description: "I don't just start coding. I plan the database schema, API endpoints, and component hierarchy. I use Clean Architecture principles to separate business logic from framework details.",
    icon: <FaLayerGroup />,
    color: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/50",
  },
  {
    title: "Type Safety & Validation",
    description: "I use TypeScript strictly. On the backend, I use DTOs with class-validator to ensure every piece of data entering the system is exactly what we expect. No 'any' types allowed.",
    icon: <FaCode />,
    color: "from-purple-500 to-pink-500",
    shadowColor: "shadow-purple-500/50",
  },
  {
    title: "Security Best Practices",
    description: "Security isn't an afterthought. I implement JWT for stateless authentication, hash passwords with Bcrypt, and sanitize all inputs to prevent SQL injection and XSS attacks.",
    icon: <FaLock />,
    color: "from-red-500 to-pink-500",
    shadowColor: "shadow-red-500/50",
  },
  {
    title: "Testing & Quality",
    description: "I write unit tests for critical business logic using Jest. I believe in 'shifting left'—catching bugs during development rather than in production.",
    icon: <FaVial />,
    color: "from-yellow-500 to-orange-500",
    shadowColor: "shadow-yellow-500/50",
  },
  {
    title: "CI/CD & Deployment",
    description: "I automate the boring stuff. I set up GitHub Actions to run tests on every push and deploy automatically. I use Docker to ensure consistent environments.",
    icon: <FaRocket />,
    color: "from-green-500 to-emerald-500",
    shadowColor: "shadow-green-500/50",
  },
];

export default function WorkProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20 overflow-hidden">

       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 inline-flex items-center gap-2"
        >
          <span className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></span>
          My Workflow
          <span className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></span>
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
        >
          How I Build <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Software</span>
        </motion.h3>
      </div>

      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto">
         <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 rounded-full md:-translate-x-1/2" />

         <motion.div
          style={{ scaleY }}
          className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full md:-translate-x-1/2 origin-top"
        />

        <div className="space-y-12 md:space-y-24">
          {processes.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
       <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
        <div
          className={`relative p-6 bg-slate-800/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-white/20 transition-all group ${isEven ? 'md:text-right' : 'md:text-left'} hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10`}
        >

          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-slate-800 ${isEven ? '-right-12' : '-left-12'}`}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`h-full w-full bg-gradient-to-r ${item.color} origin-left`}
            />
          </div>

          <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
          </div>

          <p className="text-slate-400 leading-relaxed text-sm">
            {item.description}
          </p>

          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
        </div>
      </div>

      <div className="absolute left-[20px] md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-10">
        <div className={`w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 z-10 group-hover:border-white transition-colors`} />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-20 animate-ping`}
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className={`absolute w-3 h-3 rounded-full bg-gradient-to-r ${item.color} z-20`}
        />
      </div>

       <div className="w-full md:w-1/2 hidden md:block" />

    </motion.div>
  );
}
