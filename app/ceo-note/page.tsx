"use client";

import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";

export default function CeoNotePage() {
  return (
    <main className="bg-gradient-to-b from-white to-neutral-100">

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
            CEO MESSAGE
          </p>

          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            A candid note to AI, ML students,<br />
            graduates, and self-taught learners
          </h1>
        </motion.div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* CEO CARD */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/40 to-blue-300/40 blur-3xl rounded-full" />

              {/* Executive Avatar */}

              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-indigo-800 via-blue-900 to-slate-900 flex flex-col items-center justify-center shadow-2xl border-8 border-white text-white p-6">
                <UserCheck size={90} className="text-emerald-400 mb-2" />
                <p className="text-xl font-bold tracking-wide text-slate-100 text-center">Major Rajendran</p>
                <p className="text-xs text-indigo-300 font-medium">Retd</p>
              </div>

              <div className="text-center mt-6">
                <p className="font-medium">CEO</p>
                <p className="text-sm text-neutral-600">
                  Brain Train Consultancy Services LLP
                </p>
              </div>

            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-lg leading-relaxed text-neutral-700"
          >

            <p>Let’s clear a dangerous myth first.</p>

            <blockquote className="border-l-4 border-emerald-500 pl-6 text-xl text-neutral-900 font-medium">
              You do not need to master all AI engines to get an AI job.
              You need to know how to use the right engines to build real systems.
            </blockquote>

            <p>
              Today many learners feel overwhelmed. Too many tools. Too many courses.
              Too much noise. Too little clarity.
            </p>

            <p>
              At Brain Train Consultancy Services LLP, we see this daily.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 pt-10">
              What actually makes you AI-job-ready
            </h2>

            <ul className="grid sm:grid-cols-2 gap-4">

              {[
                "Understanding what problem an AI system solves",
                "Choosing the right engine",
                "Integrating models, data, infrastructure",
                "Deploying something usable",
                "Explaining why it works",
              ].map((item, i) => (
                <li
                  key={i}
                  className="bg-white p-4 rounded-xl shadow border"
                >
                  {item}
                </li>
              ))}

            </ul>

            <h2 className="text-2xl font-semibold text-neutral-900 pt-10">
              One important reality check
            </h2>

            <p>
              Industry does not expect perfection.
              It expects adaptability, deployability,
              honesty, and fast learning.
            </p>

            <p className="font-medium text-neutral-900 text-xl pt-6">
              AI skills are built through real applications,
              real constraints, and real systems.
            </p>

          </motion.div>

        </div>

      </div>

    </main>
  );
}
