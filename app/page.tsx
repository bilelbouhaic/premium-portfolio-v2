"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Briefcase,
  Mail,
  ArrowDown,
  Folder,
  ExternalLink,
  Phone,
} from "lucide-react";
import ProjectsGallery from "./components/ProjectsGallery";
import profilePic from "./assets/b.png";

const experienceData = [
  {
    company: "Xerfi Data",
    date: "Déc. 2025 – Juin 2026",
    role: "Développeur Full Stack",
    location: "Paris, France",
    details: [
      "Développement et intégration d'API RESTful complexes, avec une forte optimisation du backend pour réduire les temps de latence.",
      "Conception d'interfaces web dynamiques et responsives en utilisant Next.js et React.",
      "Modélisation, requêtage et administration de bases de données relationnelles (PostgreSQL, MySQL).",
      "Résolution de bugs critiques et apport d'évolutions techniques sur les microservices existants.",
    ],
  },
  {
    company: "Veeva Systems",
    date: "Nov. 2024 – Avr. 2025",
    role: "Ingénieur Data",
    location: "Budapest, Hongrie",
    details: [
      "Création et maintenance de pipelines ETL scalables, assurant l'intégrité et la qualité des données.",
      "Optimisation avancée des requêtes SQL et tuning des performances des Data Warehouses.",
      "Mise en place de tableaux de bord et automatisation du monitoring pour l'aide à la décision (BI).",
    ],
  },
  {
    company: "Sonatrach",
    date: "Févr. 2024 – Juin 2024",
    role: "Ingénieur Logiciel",
    location: "Algérie",
    details: [
      "Architecture et optimisation de bases de données SQL Server pour ingérer de larges volumes d'informations.",
      "Développement de la logique métier (backend) en ASP.NET couplé à des API RESTful.",
      "Implémentation d'interfaces utilisateur interactives en Angular exploitant les composants PrimeNG.",
      "Orchestration des flux de données via SSIS (ETL) pour alimenter les outils de data-visualisation.",
    ],
  },
  {
    company: "Retain",
    date: "Juil. 2023 – Janv. 2024",
    role: "Développeur Front-end",
    location: "Hybride",
    details: [
      "Intégration web et développement de composants React réutilisables avec connexion aux API tierces.",
      "Amélioration continue de l'UX/UI et débogage proactif pour garantir une expérience utilisateur fluide.",
    ],
  },
];

const skillsData = [
  {
    title: "Front-end",
    description:
      "Création d'applications web modernes, réactives et interactives, axées sur la performance et l'expérience utilisateur (UX).",
    tags: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux",
      "Tailwind",
      "Angular",
    ],
  },
  {
    title: "Back-end & Data",
    description:
      "Conception de solutions backend scalables et sécurisées, gestion de bases de données et d'API complexes.",
    tags: [
      "C#",
      "ASP.NET",
      "Entity Framework",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "SSIS",
      "SSAS",
    ],
  },
  {
    title: "IA & Automatisation",
    description:
      "Automatisation de workflows d'entreprise via des outils basés sur l'IA pour augmenter l'efficacité et réduire les tâches manuelles.",
    tags: [
      "Make.com",
      "Zapier",
      "OpenAI APIs",
      "Tidio",
      "ManyChat",
      "Klaviyo",
      "WooCommerce",
    ],
  },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  const dotPulse = {
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(34, 197, 94, 0.7)",
        "0 0 0 10px rgba(34, 197, 94, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download
    console.log("Télécharger CV");
  };

  const handleContact = () => {
    // Placeholder for contact
    console.log("Me contacter");
  };

  return (
    <div className="w-full bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">
        {/* Enhanced background with neon accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Cyan glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
          {/* Purple glow */}
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
          {/* Blue accent */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl opacity-20" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-5xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Availability Badge with neon */}
            <motion.div
              variants={badgeVariants}
              className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-500/60 hover:bg-cyan-950/40 transition-all w-fit"
            >
              <motion.div
                className="w-2.5 h-2.5 bg-green-500 rounded-full"
                variants={dotPulse}
                animate="animate"
              />
              <span className="text-xs font-medium text-cyan-300">
                À la recherche d'une alternance 2026-2027
              </span>
            </motion.div>

            {/* Name with Neon Effect */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,255,0.3)]"
            >
              Bouhaic Mehdi
            </motion.h1>

            {/* Role with gradient */}
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl font-light bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent mb-4"
            >
              Développeur Full Stack
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-zinc-300 mb-6 max-w-lg"
            >
              Étudiant Mastère Expert en développement Full Stack @Ynov Paris
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-zinc-300 leading-relaxed mb-12 max-w-xl font-light"
            >
              Passionné par l'ingénierie logicielle, je mets à profit mon
              expertise Full Stack (Web, Backend & Data) pour concevoir et faire
              évoluer des systèmes performants et scalables.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              {/* Primary Button - Call CTA with spectacular animation */}
              <motion.a
                href="tel:0759251621"
                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-zinc-950 font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110 active:scale-95 flex items-center justify-center gap-2 overflow-hidden shadow-lg z-50"
                animate={{ y: [-8, 0, -8] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-callGlow" />
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  Appelez moi !
                </span>
              </motion.a>

              {/* Secondary Button - Download CV with neon border */}
              <a
                href="/CV.pdf"
                download="Bouhaic_Mehdi_CV.pdf"
                className="group relative px-8 py-3.5 border border-cyan-500/30 text-cyan-300 font-medium rounded-lg transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/20 hover:shadow-[0_0_20px_rgba(34,211,255,0.2)] active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Télécharger mon CV</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={socialVariants}
              className="flex items-center gap-6"
            >
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                Me suivre
              </span>

              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-500/30 text-cyan-400 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,255,0.3)] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Code className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-500/30 text-cyan-400 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,255,0.3)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Briefcase className="w-5 h-5" />
                </a>

                {/* Mail */}
                <a
                  href="mailto:contact@example.com"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-500/30 text-cyan-400 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,255,0.3)] transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Picture with Neon Glow */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
            className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0"
          >
            {/* Outer glow container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated neon glow background */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-2xl"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(34,211,255,0.3)",
                    "0 0 80px rgba(59,130,246,0.3)",
                    "0 0 40px rgba(34,211,255,0.3)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Inner image container with neon border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-500/50 overflow-hidden backdrop-blur-sm bg-gradient-to-br from-zinc-900/80 to-black/80 shadow-2xl shadow-cyan-500/20"
              >
                <Image
                  src={profilePic}
                  alt="Bouhaic Mehdi"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>

              {/* Corner accents with animation */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    "0 0 10px rgba(34, 211, 255, 0.3)",
                    "0 0 20px rgba(34, 211, 255, 0.8)",
                    "0 0 10px rgba(34, 211, 255, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-purple-400 rounded-bl-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    "0 0 10px rgba(168, 85, 247, 0.3)",
                    "0 0 20px rgba(168, 85, 247, 0.8)",
                    "0 0 10px rgba(168, 85, 247, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-cyan-500/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-cyan-400 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Skills Section - Bento Grid */}
      <section className="w-full px-6 py-20 md:py-32 bg-gradient-to-b from-zinc-950 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,255,0.2)]">
              Compétences Techniques
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded" />
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/60 to-black/60 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-4">
                    {skill.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 mb-6 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 hover:border-zinc-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,255,0.2)]">
              Expérience Professionnelle
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-24"
                >
                  {/* Glowing Dot */}
                  <motion.div
                    className="absolute left-0 md:left-2 -translate-x-2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-zinc-950 shadow-lg shadow-cyan-500/40"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(34,211,255,0.5)",
                        "0 0 40px rgba(34,211,255,0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Card */}
                  <div className="group p-6 md:p-8 rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/40 to-black/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/60 hover:shadow-lg hover:shadow-cyan-500/15">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-zinc-100">
                          {item.role}
                        </h3>
                        <p className="text-sm md:text-base text-zinc-400 mt-1">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-xs md:text-sm text-zinc-500 font-mono">
                        {item.date}
                      </span>
                    </div>

                    {/* Location */}
                    <p className="text-xs md:text-sm text-zinc-500 mb-5">
                      📍 {item.location}
                    </p>

                    {/* Details */}
                    <ul className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm md:text-base text-zinc-300 leading-relaxed"
                        >
                          <span className="text-zinc-500 mt-1.5 flex-shrink-0">
                            •
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Modal Gallery */}
      <ProjectsGallery />

      {/* Contact Section */}
      <section className="w-full px-6 py-20 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-zinc-950">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,255,0.2)]">
              Me Contacter
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mx-auto mb-8" />
            <p className="text-lg text-zinc-300 mb-12">
              Disponible pour discuter de vos projets ou d'une opportunité
              d'alternance.
            </p>
          </motion.div>

          {/* Contact Content - Email & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Email */}
            <div className="mb-12">
              <p className="text-sm text-zinc-500 mb-3 uppercase tracking-widest">
                Écrivez-moi directement
              </p>
              <a
                href="mailto:bilelbouhaic@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-950/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-xl font-semibold text-cyan-300 hover:text-cyan-200">
                  bilelbouhaic@gmail.com
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-zinc-500 mb-6 uppercase tracking-widest">
                Me suivre sur les réseaux
              </p>
              <div className="flex justify-center gap-4">
                {/* GitHub */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-lg border border-cyan-500/30 text-cyan-400 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,255,0.3)] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Code className="w-6 h-6" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-lg border border-cyan-500/30 text-cyan-400 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,255,0.3)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Briefcase className="w-6 h-6" />
                </motion.a>

                {/* Mail */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="mailto:bilelbouhaic@gmail.com"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-lg border border-cyan-500/30 text-cyan-400 hover:text-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,255,0.3)] transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 py-8 bg-black border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-zinc-500">
            © 2026 Bouhaic Mehdi — Fait avec passion
          </p>
        </div>
      </footer>
    </div>
  );
}
