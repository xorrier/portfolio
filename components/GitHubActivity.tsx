"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function GitHubActivity() {
  const username = "xorrier";
  const [contributions, setContributions] = useState<string>("...");

  useEffect(() => {
    // Fetch contribution count from GitHub
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => res.json())
      .then((data) => {
        const total = data.total?.lastYear || 0;
        setContributions(total.toString());
      })
      .catch(() => {
        setContributions("587"); // Fallback
      });
  }, []);

  return (
    <section id="github" className="py-20 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          GitHub Activity
        </motion.h2>

        {/* Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-all mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <FaGithub className="text-purple-400" />
              Contribution Calendar
            </h3>
            <p className="text-gray-400 text-lg">
              <span className="text-white font-bold">{contributions}</span>{" "}
              contributions in the last year
            </p>
          </div>
          <div className="w-full overflow-x-auto bg-white p-4 rounded-lg">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt="GitHub Contribution Calendar"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* View Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            <FaGithub className="text-2xl" />
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
