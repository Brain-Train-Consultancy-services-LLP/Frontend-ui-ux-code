"use client";

import Link from "next/link";
import { ArrowRight, Quote, Shield, CheckCircle2 } from "lucide-react";

export default function CeoNotePreview() {
  return (
    <section className="relative py-20 sm:py-24 bg-[#05070D] text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-indigo-950/40 p-8 sm:p-12 md:p-14 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: The Philosophy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
                <Shield size={13} className="text-indigo-400" />
                <span>Founder's Principle &amp; Philosophy</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                "You don't need to master 50 AI libraries.{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  You need to know how to build real systems."
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Most tech aspirants get trapped in "tutorial hell" — collecting generic certificates while unable to deploy a production pipeline. At BrainTrain, we focus on what industry teams actually evaluate: problem comprehension, intelligent architecture choices, and working deployability.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Problem understanding matters infinitely more than certificates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Choosing the right architecture beats memorizing every tool</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Production deployability is the ultimate industry benchmark</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/ceo-note"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white px-6 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
                >
                  <span>Read Full CEO Message</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: Founder Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-7 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
                <Quote size={32} className="text-indigo-400/60 mb-4" />

                <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  "Our mission is to make India a powerhouse of self-reliant, production-grade AI engineers who don't just consume AI, but architect and ship it."
                </blockquote>

                <div className="border-t border-slate-800 pt-4 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-lg shadow-md">
                    MR
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Major Rajendran Mariagnanam (Retd)
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium">
                      CEO &amp; Founder &middot; Brain Train Consultancy Services LLP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
