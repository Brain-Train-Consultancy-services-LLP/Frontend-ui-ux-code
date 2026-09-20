"use client";

import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Award, Building } from "lucide-react";
import { pastTeamSuccess } from "@/lib/data";

export default function TalentEcosystemImpact() {
  return (
    <section id="placements" className="relative py-20 sm:py-24 bg-[#05070D] text-white border-b border-slate-800/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 mb-4">
            <Award size={14} className="text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Verified Social Proof &amp; Credibility
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Proven Talent.{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Verified Placements.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
            Through real engineering builds, hackathons, and rigorous code reviews, our ecosystem participants transition into roles across leading technology organizations.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastTeamSuccess.map((person) => (
            <div
              key={person.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5"
            >
              <div>
                {/* Avatar & Verification status */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
                    {person.name.charAt(0)}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={12} />
                    Verified
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {person.name}
                </h3>

                {/* University */}
                <p className="text-xs text-slate-400 font-medium mb-4">
                  Alumni &middot; {person.alumni}
                </p>
              </div>

              {/* Placement Company Badge */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Placed at:</span>
                  <span className="text-xs font-bold text-white bg-slate-800 px-3 py-1 rounded-md border border-slate-700/80 flex items-center gap-1.5">
                    <Building size={12} className="text-indigo-400" />
                    {person.placedAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Talent Ecosystem Action Bar */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-emerald-400 shrink-0 hidden sm:block" />
            <div>
              <h4 className="text-base font-bold text-white">
                Are you an institution or recruiter looking to hire vetted AI engineers?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Connect directly with our trained talent network or explore university collaboration.
              </p>
            </div>
          </div>

          <Link
            href="/join"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 transition-all duration-200"
          >
            <span>Join Talent Ecosystem</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}