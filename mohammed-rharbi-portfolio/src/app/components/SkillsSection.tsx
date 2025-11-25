"use client";

import { motion } from "framer-motion";
import { skills } from "../../services/ProjectsAndSkills";


interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20">

      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 inline-flex items-center gap-2"
        >
          <span className="w-8 h-[2px] bg-orange-500"></span>
          Expertise
          <span className="w-8 h-[2px] bg-orange-500"></span>
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
        >
          Technical <span className="text-blue-500">Skills</span>
        </motion.h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>

    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative flex flex-col items-center justify-center p-6 bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-default"
    >

      <div className="w-16 h-16 mb-4 flex items-center justify-center text-4xl text-slate-400 group-hover:text-white transition-colors duration-300 relative z-10">
        {skill.icon}

        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>


      <h4 className="text-white font-bold text-lg mb-2 text-center">{skill.name}</h4>


      <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden mt-2">
        <div
          className={`h-full rounded-full ${skill.level === 'Advanced' ? 'bg-green-500 w-[90%]' :
              skill.level === 'Intermediate' ? 'bg-blue-500 w-[70%]' : 'bg-orange-500 w-[40%]'
            }`}
        />
      </div>
      <span className="text-[10px] text-slate-500 mt-1 font-medium uppercase tracking-wider">
        {skill.level}
      </span>

    </motion.div>
  );
}
