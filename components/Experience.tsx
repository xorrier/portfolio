"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "bik.ai (Comida Technologies Pvt Ltd)",
      location: "Bangalore, India",
      role: "Software Development Engineer II",
      period: "Aug 2023 – Present",
      highlights: [
        "Re-architected 1TB Elasticsearch cluster, eliminating query timeouts",
        "Reduced infrastructure cost by 56% ($1700/month savings)",
        "Increased broadcast throughput by 150% (20 → 50 msgs/sec)",
      ],
      achievements: [
        "Re-architected a 1TB Elasticsearch cluster into multiple 100GB indices, eliminating query timeouts and improving system stability under high-traffic workloads.",
        "Reduced infrastructure cost by 56% (saving $1700/month) by migrating 95%+ of 1B+ documents to warm nodes using ILM and optimizing storage tiering.",
        "Horizontally scaled the Elasticsearch cluster by adding additional nodes and rebalancing shards, improving query throughput and ensuring high availability.",
        "Increased broadcast throughput by 150% (20 → 50 msgs/sec) and reduced latency by implementing parallel batching and cached idempotency keys, eliminating duplicate sends.",
        "Built an event-driven drip automation engine generating follow-up broadcasts triggered by lifecycle events (sent, delivered, read), enabling automated targeted multi-step campaigns.",
        "Improved segmentation scalability by 183% (0.6M → 1.7M+ customers) by removing PostgreSQL timeouts on the customers table through batched queries combined with a distributed caching layer, preventing runtime failures.",
        "Improved deliverability by 40% and reduced failures by 80% by implementing automatic template duplication for paused templates used in running broadcasts, preventing execution aborts.",
        "Developed a GDPR-compliant automated purge pipeline enabling secure deletion of churned store data across Elasticsearch, PostgreSQL, and Firebase.",
        "Built React-based Email and WhatsApp Template Builders, enabling Customer and Marketing teams to independently configure and launch campaigns.",
      ],
    },
    {
      company: "Appstone Pvt. Ltd.",
      location: "Bhubaneswar, India",
      role: "Associate Software Engineer",
      period: "June 2022 - June 2023",
      highlights: [
        "Built NestJS microservices with AWS API Gateway",
        "Developed Auth system with JWT + MongoDB",
        "Designed event-driven workflows using AWS SNS/SQS",
      ],
      achievements: [
        "Built NestJS microservices exposed via AWS API Gateway.",
        "Developed Auth (JWT + MongoDB), Neo4j referral graph, and Typesense search.",
        "Designed event-driven workflows using AWS SNS/SQS and integrated Novu and S3.",
      ],
    },
    {
      company: "Catapult Technologies Inc",
      location: "Remote",
      role: "Product Engineer",
      period: "Dec 2021 - May 2022",
      highlights: ["Built serverless application with Next.js and AWS Lambda"],
      achievements: [
        "Built a full-stack serverless application using Next.js, Tailwind CSS, and Node.js on AWS Lambda.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"></div>
              <div className="absolute left-2 top-16 w-0.5 h-[calc(100%-4rem)] bg-gradient-to-b from-blue-500 to-transparent"></div>

              <div className="ml-12 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all group">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                      {exp.company}
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold mb-3">
                      {exp.role}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {exp.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-sm text-gray-300"
                    >
                      <span className="text-blue-400 font-bold">✓</span>{" "}
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Details - Collapsible section */}
                <details className="group/details">
                  <summary className="cursor-pointer text-blue-400 font-semibold hover:text-blue-300 transition mb-4 list-none flex items-center gap-2">
                    <span className="transform group-open/details:rotate-90 transition-transform">
                      ▶
                    </span>
                    View All Achievements
                  </summary>
                  <ul className="space-y-3 mt-4 pl-4 border-l-2 border-zinc-700">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 text-lg">→</span>
                        <span className="text-gray-300 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
