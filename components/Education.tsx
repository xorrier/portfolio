"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Education() {
  const achievements = [
    "Graduated with distinction (DGPA: 8.42/10)",
    "Strong foundation in Data Structures & Algorithms",
  ];

  return (
    <section id="education" className="py-20 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline dot */}
          <div className="relative">
            <div className="absolute left-0 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-black z-10"></div>

            <div className="ml-12 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all group">
              {/* Header with Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl group-hover:bg-green-500/20 transition">
                  <FaGraduationCap className="text-3xl text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition">
                        Jalpaiguri Govt Engineering College
                      </h3>
                      <p className="text-xl text-purple-400 font-semibold mb-3">
                        B.Tech in Computer Science Engineering
                      </p>
                    </div>
                  </div>

                  {/* Info badges */}
                  <div className="flex flex-wrap gap-4 mt-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaCalendarAlt className="text-green-400" />
                      <span className="font-semibold">2017 - 2021</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaMapMarkerAlt className="text-green-400" />
                      <span>West Bengal, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaAward className="text-green-400" />
                      <span className="font-bold text-green-400">
                        DGPA: 8.42/10
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-6 pt-6 border-t border-zinc-700">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FaAward className="text-green-400" />
                  Key Highlights
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-green-500/5 border border-green-500/20 rounded-lg p-3"
                    >
                      <span className="text-green-400 mt-0.5 font-bold">✓</span>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
