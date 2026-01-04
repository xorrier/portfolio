"use client";

import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function About() {
  const stats = [
    { icon: FaCode, value: "3+", label: "Years Experience" },
    { icon: FaRocket, value: "1B+", label: "Documents Processed" },
    { icon: FaChartLine, value: "56%", label: "Cost Reduction" },
    { icon: FaLightbulb, value: "500+", label: "Problems Solved" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="text-blue-400 font-semibold">
                  Software Development Engineer II
                </span>{" "}
                at bik.ai, specializing in building scalable, high-performance
                backend systems. With expertise in{" "}
                <span className="text-purple-400 font-semibold">
                  Node.js, React, and AWS
                </span>
                , I transform complex technical challenges into elegant
                solutions.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                My passion lies in{" "}
                <span className="text-blue-400 font-semibold">
                  performance optimization
                </span>{" "}
                and cost reduction. I've successfully re-architected a 1TB
                Elasticsearch cluster, reduced infrastructure costs by 56%, and
                increased system throughput by 150%. I believe in writing clean,
                maintainable code that not only solves today's problems but
                scales for tomorrow's challenges.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Beyond coding, I'm an active problem solver on competitive
                programming platforms, having solved 500+ problems on LeetCode
                and achieved a 4★ rating on CodeChef. I enjoy learning new
                technologies and contributing to the developer community through
                open-source projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "System Design",
                "Microservices",
                "Performance Tuning",
                "Cloud Architecture",
                "Problem Solving",
              ].map((specialty) => (
                <span
                  key={specialty}
                  className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all text-center group"
              >
                <stat.icon className="text-5xl text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            My Development Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Impact First
              </h4>
              <p className="text-gray-400 text-sm">
                Focus on solutions that deliver measurable business value and
                user experience improvements
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Performance Matters
              </h4>
              <p className="text-gray-400 text-sm">
                Optimize ruthlessly - every millisecond counts when serving
                millions of users
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Build to Scale
              </h4>
              <p className="text-gray-400 text-sm">
                Design systems that grow with the business, not against it
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
