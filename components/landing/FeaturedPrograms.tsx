"use client";

import Link from "next/link";
import { courses } from "@/lib/data";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Users,
  Sparkles,
  Layers,
  Zap,
} from "lucide-react";

export default function FeaturedPrograms() {
  return (
    <section id="programs" className="relative py-20 sm:py-24 bg-[#05070D] text-white border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-4">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Career-Defining Engineering Programs
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Build Production AI Systems.{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Not Just Notebooks.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
            Gain production experience with enterprise LLMs, multi-agent frameworks, and cloud deployment. 
            All tracks include Thin Client cloud workspaces, code reviews, and real MVP builds.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => {
            const discountPercent = Math.round(
              ((course.originalPrice - course.price) / course.originalPrice) * 100
            );

            return (
              <div
                key={course.slug}
                className="group relative flex flex-col rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5"
              >
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    {course.bestseller && (
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-2.5 py-0.5 rounded-full shadow-sm">
                        Bestseller
                      </span>
                    )}
                    <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60">
                      {course.level}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                    <Star size={14} className="fill-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Course Title & Summary */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
                  {course.description}
                </p>

                {/* Practical Outcomes / Features list */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-300 border-t border-slate-800/80 pt-4 flex-grow">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Real-world enterprise system architectures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Thin Client cloud workspace included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Direct mentor code reviews &amp; MVP deployment</span>
                  </div>
                </div>

                {/* Meta details (Duration, Learners) */}
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-4 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-indigo-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-indigo-400" />
                    <span>{course.students.toLocaleString()} enrolled</span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      ₹{course.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      ₹{course.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                      {discountPercent}% OFF
                    </span>
                  </div>

                  <Link
                    href="/courses"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>View Curriculum &amp; Enroll</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Evaluation Banner */}
        <div className="mt-12 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/60 via-slate-900/60 to-purple-950/60 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Unsure which engineering track fits your background?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Take our free 15-minute diagnostic evaluation. Receive an instant competency breakdown and tailored track recommendation.
              </p>
            </div>
          </div>

          <Link
            href="/test/evaluation"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-6 py-3 text-xs sm:text-sm font-semibold text-white transition shadow-md"
          >
            <span>Take Free Evaluation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
