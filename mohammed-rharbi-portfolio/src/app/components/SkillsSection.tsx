"use client";

import { motion } from "framer-motion";
import { skills } from "../../services/ProjectsAndSkills";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  gradient: string;
  iconGradient: string;
}

export default function SkillsSection() {
   const categories: SkillCategory[] = [
    {
      title: "Frontend Development",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      iconGradient: "from-blue-400 to-cyan-400",
      skills: skills.filter(s =>
        ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Redux', 'Tailwind', 'Bootstrap', 'EJS'].includes(s.name)
      )
    },
    {
      title: "Backend Development",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      iconGradient: "from-purple-400 to-pink-400",
      skills: skills.filter(s =>
        ['Node.js', 'NestJS', 'Express', 'PHP', 'Laravel', 'JWT', 'Socket.io'].includes(s.name)
      )
    },
    {
      title: "Database & DevOps",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      iconGradient: "from-green-400 to-emerald-400",
      skills: skills.filter(s =>
        ['SQL', 'MongoDb', 'Git', 'Docker', 'Jira', 'Jest'].includes(s.name)
      )
    },
    {
      title: "Mobile & Design",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      iconGradient: "from-orange-400 to-amber-400",
      skills: skills.filter(s =>
        ['React Native', 'TypeScript', 'Figma'].includes(s.name)
      )
    }
  ];

  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20 overflow-hidden">

       <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `
      }} />

       <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 inline-flex items-center gap-2"
        >
          <span className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></span>
          Expertise
          <span className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"></span>
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
        >
          Technical <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
        </motion.h3>
      </div>

       <div className="relative z-10 space-y-20">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="relative"
          >
             <div className="mb-8 flex items-center gap-4">
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.gradient}`} />
              <h4 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h4>
              <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${category.gradient} opacity-20`} />
            </div>

             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  gradient={category.iconGradient}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

function SkillCard({ skill, index, gradient }: { skill: Skill, index: number, gradient: string }) {
  const levelPercentage = skill.level === 'Advanced' ? 90 : skill.level === 'Intermediate' ? 70 : 40;
  const levelColor = skill.level === 'Advanced' ? 'from-green-500 to-emerald-500' :
    skill.level === 'Intermediate' ? 'from-blue-500 to-cyan-500' :
      'from-orange-500 to-amber-500';

   const parts = gradient.split(' ');
  const fromColor = parts[0]?.replace('from-', '') || 'blue-500';
  const toColor = parts[parts.length - 1]?.replace('to-', '') || 'cyan-500';
   const viaColor = parts.length > 2 ? parts[1].replace('via-', '') : toColor;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        rotateY: 5,
      }}
      className="group relative flex flex-col items-center justify-center p-5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl overflow-hidden cursor-default border border-white/5 hover:border-white/10"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
       <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 group-hover:from-${fromColor}/50 group-hover:via-${viaColor}/50 group-hover:to-transparent transition-all duration-500`} />

       <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl bg-gradient-to-br ${gradient} transition-opacity duration-500 -z-10`} />

      <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-lg rounded-full group-hover:opacity-40 transition-opacity duration-300`} />
        <div className="relative text-4xl text-slate-200 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
          {skill.icon}
        </div>
      </div>

       <h4 className="text-slate-200 font-semibold text-sm mb-3 text-center group-hover:text-white transition-colors duration-300">
        {skill.name}
      </h4>

       <div className="w-full h-1.5 bg-slate-700/50 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${levelPercentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${levelColor} relative shadow-[0_0_10px_rgba(0,0,0,0.3)]`}
        >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </motion.div>
      </div>

       <span className="text-[10px] text-slate-500 mt-2 font-medium uppercase tracking-wider group-hover:text-slate-400 transition-colors">
        {skill.level}
      </span>

       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}
