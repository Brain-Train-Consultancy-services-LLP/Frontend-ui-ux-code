"use client";

import Link from "next/link";
import { Check, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const comparisons = [
  {
    feature: "Learning Methodology",
    traditional: "Passive pre-recorded video lectures and generic slideshows",
    braintrain: "Hands-on engineering: building production systems, multi-agent workflows, and LLM pipelines",
  },
  {
    feature: "Development Workspace",
    traditional: "Local setup struggles, broken dependencies, no GPU access",
    braintrain: "Thin Client Cloud infrastructure — pre-configured browser dev environment ready in 30 seconds",
  },
  {
    feature: "Project Complexity",
    traditional: "Toy Jupyter notebooks using synthetic datasets (Titanic, Iris)",
    braintrain: "Enterprise-grade architectures & Srishtizia 48-hr MVP sprints solving real industry challenges",
  },
  {
    feature: "Mentorship & Code Reviews",
    traditional: "Automated multiple-choice quizzes with zero architecture review",
    braintrain: "Direct 1-on-1 code reviews by senior engineering leads and live architecture critiques",
  },
  {
    feature: "Career & Ecosystem Outcome",
    traditional: "Paper PDF certificate with no proof of system deployability",
    braintrain: "Verified portfolio of working MVPs + alumni placed at TCS, Infosys, Accenture (NIT, DTU, LPU)",
  },
];

export default function DifferentiationSection() {
  return (
    <section className="relative py-20 sm:py-24 bg-[#05070D] text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-4">
            <Zap size={14} className="text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Clear Differentiation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Why BrainTrain Is Different From{" "}
            <span className="bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
              Traditional Courses
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
            We don't teach you to memorize syntax. We build an engineering ecosystem that trains you to architect, deploy, and ship production-ready intelligent software.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 overflow-hidden backdrop-blur-xl shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-800 bg-slate-900/60 text-xs sm:text-sm font-bold">
            <div className="md:col-span-4 p-4 sm:p-5 text-slate-400 uppercase tracking-wider">
              Core Dimension
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 text-slate-400 uppercase tracking-wider hidden md:block border-l border-slate-800/80">
              Generic Online Courses &amp; Bootcamps
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 text-indigo-300 uppercase tracking-wider bg-indigo-950/30 border-l border-indigo-500/20 flex items-center justify-between">
              <span>BrainTrain AI Ecosystem</span>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-400/30">
                RECOMMENDED
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm transition-colors ${
                index % 2 === 1 ? "bg-slate-900/20" : "bg-transparent"
              } border-b border-slate-800/60 last:border-b-0 hover:bg-slate-900/40`}
            >
              {/* Dimension */}
              <div className="md:col-span-4 p-4 sm:p-5 flex items-center font-bold text-white">
                <span>{row.feature}</span>
              </div>

              {/* Traditional */}
              <div className="md:col-span-4 p-4 sm:p-5 flex items-start gap-2.5 text-slate-400 border-t md:border-t-0 md:border-l border-slate-800/60">
                <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={12} className="text-rose-400" />
                </div>
                <span className="leading-relaxed">{row.traditional}</span>
              </div>

              {/* BrainTrain */}
              <div className="md:col-span-4 p-4 sm:p-5 flex items-start gap-2.5 text-slate-200 bg-indigo-950/20 border-t md:border-t-0 md:border-l border-indigo-500/20">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-emerald-400" />
                </div>
                <span className="leading-relaxed font-medium">{row.braintrain}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/40 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-indigo-400 shrink-0 hidden sm:block" />
            <p className="text-xs sm:text-sm text-slate-300">
              Deployability is the real benchmark. Learn systems you can actually run in production.
            </p>
          </div>
          <Link
            href="/join"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition shrink-0"
          >
            <span>Join our 2026 developer cohort</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
