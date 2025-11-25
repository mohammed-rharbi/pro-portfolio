"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaCode, FaRocket, FaGitAlt, FaVial, FaBook, FaChartLine, FaLock } from "react-icons/fa";

const processes = [
  {
    title: "Clean Architecture",
    description: "Separation of concerns and modular design patterns to ensure long-term project health.",
    icon: <FaLayerGroup />,
    color: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/50",
  },
  {
    title: "Maintainable Code",
    description: "Writing self-documenting, DRY code that is easy for teams to read, extend, and debug.",
    icon: <FaCode />,
    color: "from-purple-500 to-pink-500",
    shadowColor: "shadow-purple-500/50",
  },
  {
    title: "Efficient Workflows",
    description: "Streamlined CI/CD pipelines and automated tasks to minimize friction and maximize output.",
    icon: <FaRocket />,
    color: "from-orange-500 to-red-500",
    shadowColor: "shadow-orange-500/50",
  },
  {
    title: "Version Control",
    description: "Strict git discipline with conventional commits and clear branching strategies.",
    icon: <FaGitAlt />,
    color: "from-green-500 to-emerald-500",
    shadowColor: "shadow-green-500/50",
  },
  {
    title: "Testing Strategy",
    description: "Targeted unit and integration tests where reliability is critical, without over-engineering.",
    icon: <FaVial />,
    color: "from-yellow-500 to-orange-500",
    shadowColor: "shadow-yellow-500/50",
  },
  {
    title: "Documentation",
    description: "Clear, concise technical documentation for APIs and complex logic to aid future development.",
    icon: <FaBook />,
    color: "from-indigo-500 to-purple-500",
    shadowColor: "shadow-indigo-500/50",
  },
  {
    title: "Scalability",
    description: "Designing systems that handle growth gracefully, from database schema to frontend state.",
    icon: <FaChartLine />,
    color: "from-teal-500 to-cyan-500",
    shadowColor: "shadow-teal-500/50",
  },
  {
    title: "Security First",
    description: "Implementing best practices like input validation, sanitization, and secure authentication flows.",
    icon: <FaLock />,
    color: "from-red-500 to-pink-500",
    shadowColor: "shadow-red-500/50",
  },
];

export default function WorkProcessSection() {
  return (
    <section id="process" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20 overflow-hidden">

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 flex items-center gap-2"
        >
          <span className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></span>
          Methodology
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
        >
          Work <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Process</span>
        </motion.h3>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processes.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{
              y: -10,
              rotateY: 5,
              rotateX: 5,
            }}
            className="group relative p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-transparent to-white/5 group-hover:from-blue-500/50 group-hover:via-purple-500/50 group-hover:to-pink-500/50 transition-all duration-500" />

            {/* Glow Effect on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-br ${item.color} transition-opacity duration-500 -z-10`} />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Icon with Gradient Background */}
              <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-full`} />
                <div className={`relative text-4xl bg-gradient-to-br ${item.color} bg-clip-text text-transparent group-hover:scale-125 transition-all duration-300`}>
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {item.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
