"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Globe } from "lucide-react";

// --- THUMBNAILS ---
import TSplit from "../assets/Thumbnails/Thumbnail Split the Bill.png";
import TCasnos from "../assets/Thumbnails/Thumbnail Casnos.png";
import TEvolve from "../assets/Thumbnails/Thumbnail EvolveFLows.png";
import TLosh from "../assets/Thumbnails/Thumbnail LoshMedia.png";
import TRetain from "../assets/Thumbnails/Thumbnail Retain.png";
import TSonatrach from "../assets/Thumbnails/Thumbnail Sonatrach.png";

// --- SCREENSHOTS ---
import casnos1 from "../assets/casnos/casnos1.png";
import casnos4 from "../assets/casnos/casnos4.png";
import casnos5 from "../assets/casnos/casnos5.png";

import sonatrach1 from "../assets/sonatrach/sonatrach1.png";
import sonatrach2 from "../assets/sonatrach/sonatrach2.png";
import sonatrach3 from "../assets/sonatrach/sonatrach3.png";
import sonatrach4 from "../assets/sonatrach/sonatrach4.png";
import sonatrach5 from "../assets/sonatrach/sonatrach5.png";
import sonatrach6 from "../assets/sonatrach/sonatrach6.png";
import sonatrach7 from "../assets/sonatrach/sonatrach7.png";
import sonatrach10 from "../assets/sonatrach/sonatrach10.png";
import sonatrach11 from "../assets/sonatrach/sonatrach11.png";
import sonatrach12 from "../assets/sonatrach/sonatrach12.png";
import sonatrach13 from "../assets/sonatrach/sonatrach13.png";

import evolve1 from "../assets/evolveflows/evolve1.png";
import evolve2 from "../assets/evolveflows/evolve2.png";
import evolve3 from "../assets/evolveflows/evolve3.png";
import evolve4 from "../assets/evolveflows/evolve4.png";
import evolve5 from "../assets/evolveflows/evolve5.png";
import evolve6 from "../assets/evolveflows/evolve6.png";

import losh1 from "../assets/loshmedia/losh1.png";
import losh2 from "../assets/loshmedia/losh2.png";
import losh3 from "../assets/loshmedia/losh3.png";
import losh4 from "../assets/loshmedia/losh4.png";
import losh5 from "../assets/loshmedia/losh5.png";

const projects = [
  {
    title: "Sonatrach - Tax Calculation & Decision-Making",
    thumbnail: TSonatrach,
    images: [
      sonatrach1,
      sonatrach2,
      sonatrach3,
      sonatrach4,
      sonatrach5,
      sonatrach6,
      sonatrach7,
      sonatrach10,
      sonatrach11,
      sonatrach12,
      sonatrach13,
    ],
    category: "Application",
    description:
      "A custom tool for Sonatrach's tax department to automate calculations and support decision-making. It provides insights through data visualizations, helping both operations and management track and analyze fiscal performance.",
    technologies: [
      "C#",
      "ASP.NET",
      "SQL Server",
      "SSRS",
      "SSAS",
      "HTML",
      "CSS",
      "TypeScript",
      "AngularJs",
      "Entity Framework",
      "Identity",
      "Tailwind",
    ],
  },
  {
    title: "CASNOS - Monitoring Online Service Offers",
    thumbnail: TCasnos,
    images: [casnos1, casnos4, casnos5],
    category: "Application",
    description:
      "During my internship at CASNOS, I developed a web application to monitor and analyze the organization's online service offers in real time. The app provides detailed status updates, performance metrics, and alerts for service interruptions.",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "Angular",
      "NodeJs",
      "ExpressJs",
      "NodeMailer",
      "Ngx Charts",
      "MySql",
    ],
  },
  {
    title: "Retain - Digital Loyalty Card Platform",
    thumbnail: TRetain,
    images: [TRetain],
    category: "SAAS",
    description:
      "A startup I co-founded, Retain offers a mobile wallet for loyalty cards and a web dashboard for retailers to manage customers and run campaigns. Built with React, Firebase, and Tailwind CSS.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "LoshMedia - Client Acquisition Agency",
    thumbnail: TLosh,
    images: [losh1, losh2, losh3, losh4, losh5],
    category: "Website",
    description:
      "A responsive showcase website for a B2B client acquisition agency. Built with React, Tailwind, and Framer Motion, it highlights their results-driven model and communicates their unique value through clean design and smooth animations.",
    technologies: [
      "React Router",
      "Material UI",
      "Tailwind",
      "Framer Motion",
      "HTML",
      "CSS",
      "TypeScript",
    ],
    link: "https://loshmedia-flax.vercel.app/",
  },
  {
    title: "EvolveFlows - Shopify Automation Agency",
    thumbnail: TEvolve,
    images: [evolve1, evolve2, evolve3, evolve4, evolve5, evolve6],
    category: "Landing Page",
    description:
      "A clean, responsive site for EvolveFlows, an AI automation agency for Shopify stores. It presents the offer, explains the automation process, and includes CTAs for audits and consultations.",
    technologies: ["React", "Vite", "Framer Motion"],
    link: "https://www.evolveflows.com/",
  },
  {
    title: "💸 Split The Bill App",
    thumbnail: TSplit,
    images: [TSplit],
    category: "Training Project",
    description:
      "A simple and intuitive React app that helps users fairly split expenses with friends. Users can add friends, select who paid, and enter bill values to instantly calculate who owes whom. Great for group outings or casual debt tracking.",
    technologies: ["React", "CSS", "JavaScript"],
  },
];

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length,
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length,
      );
    }
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section className="w-full px-6 py-20 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Projets en Détail
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-white to-transparent rounded" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-white/5"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative w-full h-64 overflow-hidden bg-zinc-800">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal with Backdrop */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="fixed inset-0 backdrop-blur-md bg-black/80 z-50"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
              >
                <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700 transition-colors"
                  >
                    <X className="w-6 h-6 text-zinc-100" />
                  </button>

                  <div className="flex flex-col lg:flex-row max-h-[85vh] overflow-y-auto">
                    {/* Image Carousel */}
                    <div className="relative w-full lg:w-2/3 bg-zinc-950 flex flex-col">
                      <div className="relative flex-1 min-h-96">
                        <Image
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                          fill
                          className="object-contain"
                        />

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300">
                          {currentImageIndex + 1} /{" "}
                          {selectedProject.images.length}
                        </div>
                      </div>

                      {/* Carousel Controls */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex items-center justify-between p-4 border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                          <button
                            onClick={handlePrevImage}
                            className="p-2 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <span className="text-xs text-zinc-400">
                            Scroll through screenshots
                          </span>
                          <button
                            onClick={handleNextImage}
                            className="p-2 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/3 p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800 overflow-y-auto">
                      {/* Header */}
                      <div>
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                          {selectedProject.category}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4 leading-tight">
                          {selectedProject.title}
                        </h2>
                        <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-3">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-zinc-800 text-zinc-300 rounded-full text-xs font-medium hover:bg-zinc-700 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Visit Project Link */}
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-zinc-950 font-medium rounded-lg hover:shadow-lg hover:shadow-white/10 transition-all duration-300 active:scale-95 w-fit"
                        >
                          <Globe className="w-4 h-4" />
                          Visit Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
