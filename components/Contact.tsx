"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative bg-black">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-8 text-white"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-12"
        >
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:sharmaamrit812@gmail.com"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition flex items-center justify-center gap-4"
          >
            <FaEnvelope className="text-4xl text-green-600" />
            <div className="text-left">
              <p className="text-sm text-gray-600 font-semibold">Email</p>
              <p className="font-bold text-gray-900">
                sharmaamrit812@gmail.com
              </p>
            </div>
          </motion.a>

          <motion.a
            href="tel:8910656177"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition flex items-center justify-center gap-4"
          >
            <FaPhone className="text-4xl text-blue-600" />
            <div className="text-left">
              <p className="text-sm text-gray-400 font-semibold">Phone</p>
              <p className="font-bold text-white">8910656177</p>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/xorrier"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="w-16 h-16 bg-zinc-800 text-white rounded-full flex items-center justify-center hover:bg-zinc-700 transition border border-zinc-700"
          >
            <FaGithub className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/amrit-sharma-h3rt5lw8/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition border border-blue-500"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
        </motion.div>

        <footer className="mt-16 pt-8 border-t border-zinc-800">
          <p className="text-gray-400 font-semibold">
            © {new Date().getFullYear()} Amrit Sharma. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
