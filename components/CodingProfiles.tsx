"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      description: "500+ problems solved",
      link: "https://leetcode.com/sharmaamrit812/",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      name: "GeeksForGeeks",
      description: "160+ problems",
      link: "https://auth.geeksforgeeks.org/user/amrit_1998",
      color: "bg-gradient-to-br from-green-400 to-emerald-600",
    },
    {
      name: "CodeChef",
      description: "4★ max rating",
      link: "https://www.codechef.com/users/amrit999",
      color: "bg-gradient-to-br from-orange-400 to-red-500",
    },
  ];

  return (
    <section id="coding" className="py-20 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          Coding Profiles
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-zinc-900/50 backdrop-blur-md p-10 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div
                className={`${profile.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
              >
                <FaCode className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-center text-white mb-3">
                {profile.name}
              </h3>
              <p className="text-center text-gray-400 font-semibold text-lg">
                {profile.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
