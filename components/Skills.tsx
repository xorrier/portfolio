"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiElasticsearch,
  SiAmazondynamodb,
  SiNeo4J,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "#3178C6",
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "#F7DF1E",
        },
        { name: "Java", icon: FaJava, color: "#007396" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "#339933",
        },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "#FFFFFF",
        },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "#FFFFFF",
        },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
        },
      ],
    },
    {
      category: "Databases & Search",
      skills: [
        {
          name: "Elasticsearch",
          icon: SiElasticsearch,
          color: "#005571",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47A248",
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          color: "#4169E1",
        },
        {
          name: "DynamoDB",
          icon: SiAmazondynamodb,
          color: "#4053D6",
        },
        {
          name: "Neo4j",
          icon: SiNeo4J,
          color: "#008CC1",
        },
        {
          name: "Typesense",
          icon: FaDatabase,
          color: "#F43F5E",
        },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        {
          name: "GCP",
          icon: SiGooglecloud,
          color: "#4285F4",
        },
        { name: "Git", icon: SiGit, color: "#F05032" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 px-4 relative bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all group"
                  >
                    <skill.icon
                      className="text-5xl mx-auto mb-3 transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <p className="text-center font-semibold text-white text-sm">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
