"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../services/ProjectsAndSkills";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const PROJECTS_PER_PAGE = 6;

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  demo: string;
  image: string;
  hasDemo: boolean;
}

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);


  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber : Number) => setCurrentPage(pageNumber as number);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20">

      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 flex items-center gap-2"
        >
          <span className="w-8 h-[2px] bg-orange-500"></span>
          My Work
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h3>
      </div>

      <div className="min-h-[800px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {currentProjects.map((project, index) => (
              <Card key={`${currentPage}-${index}`} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>


      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-3 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${currentPage === i + 1
                  ? "bg-blue-600 text-white scale-110 shadow-lg shadow-blue-600/30"
                  : "bg-slate-800 border border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      )}

    </section>
  );
}

function Card({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="h-full flex flex-col bg-slate-800/50 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:-translate-y-2">


        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />


          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech: string, i: number) => (
              <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white rounded-md border border-white/10">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white rounded-md border border-white/10">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>


        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
            {project.description}
          </p>


          <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
            <Link
              href={project.link}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-700/50 text-white font-semibold text-sm hover:bg-blue-600 transition-all group/btn"
            >
              <FaGithub size={16} />
              <span>Code</span>
            </Link>
            {project.hasDemo ? (
              <Link
                href={project.demo}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-blue-50 transition-all"
              >
                <FaExternalLinkAlt size={14} />
                <span>Demo</span>
              </Link>
            ) : (
              <button
                disabled
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/50 text-slate-600 font-semibold text-sm cursor-not-allowed"
              >
                <FaExternalLinkAlt size={14} />
                <span>No Demo</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
