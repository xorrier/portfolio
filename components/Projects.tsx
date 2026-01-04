"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Algorithm Visualizer",
      description:
        "Interactive algorithm visualization tool for learning and understanding various algorithms including sorting, searching, and graph algorithms. Built with React and TypeScript for smooth animations and educational experience.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Algorithms",
        "Data Structures",
      ],
      icons: [SiReact, SiTypescript, SiTailwindcss],
      liveUrl: "https://xorrier.github.io/algo-visualizer/",
      githubUrl: "https://github.com/xorrier/algo-visualizer",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 p-1 rounded-2xl"
            >
              <div className="bg-zinc-900 rounded-2xl overflow-hidden h-full">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {project.icons.map((Icon, i) => (
                      <Icon key={i} className="text-4xl text-white" />
                    ))}
                  </div>
                  <h3 className="text-4xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-zinc-800/80 text-gray-300 rounded-full text-sm font-medium border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-zinc-800 text-white rounded-xl font-semibold hover:bg-zinc-700 border border-zinc-700 transition-all"
                    >
                      <FaGithub className="text-lg" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
