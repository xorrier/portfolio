"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden bg-black"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Amrit Sharma
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-4xl text-white font-semibold mb-8 drop-shadow-lg"
        >
          Software Development Engineer II
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md"
        >
          Passionate about building scalable systems with Node.js, React, and
          AWS. Specialized in optimizing performance and reducing infrastructure
          costs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/xorrier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-2xl hover:bg-white/30 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border border-white/30"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/amrit-sharma-h3rt5lw8/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-2xl hover:bg-white/30 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border border-white/30"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            href="mailto:sharmaamrit812@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-2xl hover:bg-white/30 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border border-white/30"
          >
            <FaEnvelope className="text-xl" />
            Email
          </a>
          <a
            href="https://drive.google.com/file/d/1khIKWisP-5H-k85HGOSZm-18AUVp_qEE/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-blue-600/80 backdrop-blur-md text-white rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border border-blue-500/50"
          >
            <FaDownload className="text-xl" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 text-white/80"
        >
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>8910656177</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>sharmaamrit812@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
