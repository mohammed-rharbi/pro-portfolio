"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaCode, FaRocket, FaGitAlt, FaVial, FaBook, FaChartLine, FaLock } from "react-icons/fa";

const processes = [
  {
    title: "Clean Architecture",
    description: "Separation of concerns and modular design patterns to ensure long-term project health.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Maintainable Code",
    description: "Writing self-documenting, DRY code that is easy for teams to read, extend, and debug.",
    icon: <FaCode />,
  },
  {
    title: "Efficient Workflows",
    description: "Streamlined CI/CD pipelines and automated tasks to minimize friction and maximize output.",
    icon: <FaRocket />,
  },
  {
    title: "Version Control",
    description: "Strict git discipline with conventional commits and clear branching strategies.",
    icon: <FaGitAlt />,
  },
  {
    title: "Testing Strategy",
    description: "Targeted unit and integration tests where reliability is critical, without over-engineering.",
    icon: <FaVial />,
  },
  {
    title: "Documentation",
    description: "Clear, concise technical documentation for APIs and complex logic to aid future development.",
    icon: <FaBook />,
  },
  {
    title: "Scalability",
    description: "Designing systems that handle growth gracefully, from database schema to frontend state.",
    icon: <FaChartLine />,
  },
  {
    title: "Security First",
    description: "Implementing best practices like input validation, sanitization, and secure authentication flows.",
    icon: <FaLock />,
  },
];

export default function WorkProcessSection() {
  return (
    <section id="process" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20">
      
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 flex items-center gap-2"
        >
          <span className="w-8 h-[2px] bg-orange-500"></span>
          Methodology
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
        >
          Work <span className="text-blue-500">Process</span>
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processes.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group p-6 bg-slate-800/30 backdrop-blur-sm border border-white/5 rounded-xl hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
