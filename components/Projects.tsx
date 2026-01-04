"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaImage } from "react-icons/fa";
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { useState } from "react";

export default function Projects() {
  const [showPreview, setShowPreview] = useState<{ [key: number]: boolean }>({
    0: true,
  });
  const projects = [
    {
      title: "Algorithm Visualizer",
      problem:
        "Understanding complex graph algorithms is challenging without visual representation. Students and developers struggle to grasp graph traversal and pathfinding algorithms like BFS, DFS, and Dijkstra.",
      solution:
        "Built an interactive visualization tool with step-by-step animation controls, allowing users to see how graph algorithms work in real-time with customizable input data.",
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
      screenshot: `${
        process.env.NODE_ENV === "production" ? "/portfolio" : ""
      }/preveiw.png`,
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
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-4">
                    {project.icons.map((Icon, i) => (
                      <Icon key={i} className="text-5xl text-white" />
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                    {project.title}
                  </h3>

                  {/* Problem-Solution Format */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 hover:bg-red-500/15 transition-colors">
                      <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2 text-base">
                        <span>⚠️</span> Problem
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 hover:bg-blue-500/15 transition-colors">
                      <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2 text-base">
                        <span>💡</span> Solution
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Preview Toggle Button */}
                  {project.screenshot && (
                    <div className="mb-8">
                      <button
                        onClick={() =>
                          setShowPreview((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800/50 border border-zinc-700 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all hover:scale-[1.02]"
                      >
                        <FaImage className="text-lg" />
                        {showPreview[index] ? "Hide Preview" : "Show Preview"}
                      </button>

                      <AnimatePresence>
                        {showPreview[index] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 overflow-hidden"
                          >
                            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl relative overflow-hidden group">
                              <div className="absolute top-3 left-4 flex gap-2 z-10">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              </div>
                              <img
                                src={project.screenshot}
                                alt={project.title}
                                className="w-full h-auto transition-transform duration-500 group-hover:scale-105 pt-10 pb-4 px-4"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

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
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-zinc-800 text-white rounded-xl font-semibold hover:bg-zinc-700 border border-zinc-700 transition-all hover:scale-105 hover:shadow-lg"
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
