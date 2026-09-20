"use client";

import Link from "next/link";
import { ArrowRight, Zap, Building2, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export default function StrategicCta() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#05070D] text-white overflow-hidden">
      {/* Background radiant gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-indigo-600/15 via-purple-600/15 to-cyan-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Container */}
        <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-8 sm:p-12 md:p-16 backdrop-blur-2xl shadow-2xl shadow-indigo-950/40 text-center relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-ambient-grid opacity-30 pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 mb-6">
            <Sparkles size={14} className="text-indigo-400" />
            <span>Admissions &amp; Collaborations Open 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Take the Leap from Code Learner to{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Production AI Architect.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you want to build and deploy your first multi-agent MVP or need custom enterprise AI software, BrainTrain provides the ecosystem to execute.
          </p>

          {/* Dual Paths Container */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {/* Developer / Student Card */}
            <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/70 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all">
              <div>
                <div className="flex items-center gap-2.5 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Zap size={16} />
                  <span>For Engineers &amp; Aspirants</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Check Your AI Readiness
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  Take our diagnostic 15-minute evaluation to benchmark your fundamentals, logic, and systems readiness.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/test/evaluation"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 px-5 text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Start Free AI Evaluation</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/courses"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/60 hover:bg-slate-800 text-slate-200 py-3 px-5 text-xs sm:text-sm font-medium transition"
                >
                  <span>Explore Engineering Tracks</span>
                </Link>
              </div>
            </div>

            {/* Business / Recruiter Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Building2 size={16} />
                  <span>For Startups &amp; Enterprises</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Build Custom AI Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  Partner with our engineering studio to design, prototype, and scale production AI systems and automation pipelines.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white py-3.5 px-5 text-xs sm:text-sm font-bold border border-slate-600 shadow-md transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Schedule Enterprise Consultation</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/join"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/60 hover:bg-slate-800 text-slate-200 py-3 px-5 text-xs sm:text-sm font-medium transition"
                >
                  <span>Join Ecosystem Network</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Guarantees / Micro Trust Seals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80 pt-6">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              Instant Evaluation Report
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              1-on-1 Code Reviews
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              Thin Client Cloud Dev Environment
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-400" />
              Verified Alumni at TCS, Infosys &amp; Accenture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
