"use client";

import Link from "next/link";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { ArrowRight, CheckCircle2, Sparkles, Building2, ShieldCheck, Zap } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#05070D] text-slate-100">
      <Header />

      <main className="flex-grow pt-28 pb-20">
        {/* Services Page Header */}
        <section className="relative py-12 sm:py-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Technology Consulting &amp; Development
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Production-Ready AI &amp; Software{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Engineering Services.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Brain Train Consultancy Services LLP partners with startups and enterprises to architect, build, and deploy custom AI models, cloud-native software platforms, and intelligent automation systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all duration-200"
            >
              <span>Schedule Enterprise Consultation</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-7 py-3.5 text-sm font-semibold transition"
            >
              <span>Explore Training Tracks</span>
            </Link>
          </div>
        </section>

        {/* Core Services Grid */}
        <Services />

        {/* Why Choose Our Engineering Team */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-slate-800/90 bg-slate-950/70 p-8 sm:p-12 backdrop-blur-xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                How We Deliver Value to Enterprise Clients
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Proven engineering methodology focused on rapid iteration, robust architectures, and measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <Zap size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Rapid MVP Prototyping</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Go from concept to production-grade working prototype in weeks, leveraging pre-built infrastructure and thin-client cloud pipelines.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Enterprise Security &amp; Scale</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  High-availability cloud deployments designed with secure API contracts, strict data governance, and scalable ML pipelines.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Building2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Cross-Domain Expertise</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Deep experience across healthcare, manufacturing, biotechnology, and educational technology implementations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
