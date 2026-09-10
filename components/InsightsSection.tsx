"use client";

import { motion } from "framer-motion";
import { HiLightBulb, HiChartBar, HiDocumentSearch } from "react-icons/hi";

const insights = [
  {
    title: "AI Transformation Insights",
    description:
      "Strategic insights on enterprise AI adoption, governance, and digital transformation. (Coming Soon)",
    icon: <HiLightBulb className="text-indigo-400" size={34} />,
    gradient: "from-indigo-900 via-slate-900 to-purple-950",
    badge: "Enterprise AI",
  },
  {
    title: "Industry Research & Whitepapers",
    description:
      "Deep-dive market reports and whitepapers on automation, analytics, and cloud AI. (Coming Soon)",
    icon: <HiDocumentSearch className="text-cyan-400" size={34} />,
    gradient: "from-blue-900 via-slate-900 to-cyan-950",
    badge: "Research",
  },
  {
    title: "Automation Case Studies",
    description:
      "Real-world enterprise automation journeys, outcomes, and proven frameworks. (Coming Soon)",
    icon: <HiChartBar className="text-emerald-400" size={34} />,
    gradient: "from-emerald-900 via-slate-900 to-teal-950",
    badge: "Case Studies",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
          Insights & Reports
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -12 }} // Lift animation
              className="relative backdrop-blur-xl bg-white/20 border border-white/30 
                         rounded-3xl shadow-xl overflow-hidden 
                         group cursor-pointer transition-all duration-300 flex flex-col"
            >
              {/* Card Banner Header */}
              <div className={`h-44 sm:h-48 md:h-52 lg:h-56 w-full relative bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute -right-8 -bottom-8 opacity-15 text-white transform group-hover:scale-110 transition-transform duration-700">
                  {item.icon}
                </div>
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full font-medium">
                    {item.badge}
                  </span>
                </div>
                <div className="z-10">{item.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  <button
                    onClick={(e) => e.preventDefault()}
                    className="mt-4 md:mt-5 text-indigo-600 font-medium hover:underline cursor-default"
                  >
                    Coming Soon →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
