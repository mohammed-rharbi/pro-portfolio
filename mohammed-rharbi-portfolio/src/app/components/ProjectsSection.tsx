"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../services/ProjectsAndSkills";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: Number) => setCurrentPage(pageNumber as number);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
              <Card
                key={`${currentPage}-${index}`}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

    </section>
  );
}

function Card({ project, index, onClick }: { project: Project, index: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative h-full cursor-pointer"
      onClick={onClick}
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

          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mt-auto pt-4 group-hover:translate-x-2 transition-transform">
            View Details <FaChevronRight size={12} />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md"
        >
          <FaTimes size={20} />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto custom-scrollbar flex-1">
          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{project.name}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10 space-y-8">

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3 uppercase tracking-wider">About Project</h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4 uppercase tracking-wider">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-800/50 border border-white/5 rounded-lg text-slate-300 text-sm font-medium hover:bg-slate-800 hover:text-white hover:border-blue-500/30 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
              <Link
                href={project.link}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-all group border border-white/5 hover:border-white/20"
              >
                <FaGithub size={20} />
                <span>View Source Code</span>
              </Link>

              {project.hasDemo ? (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-[1.02]"
                >
                  <FaExternalLinkAlt size={18} />
                  <span>Live Demo</span>
                </Link>
              ) : (
                <button
                  disabled
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/50 text-slate-500 font-bold cursor-not-allowed border border-white/5"
                >
                  <FaExternalLinkAlt size={18} />
                  <span>Demo Not Available</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
