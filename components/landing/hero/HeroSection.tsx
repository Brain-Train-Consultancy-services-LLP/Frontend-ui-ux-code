"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Cloud,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import Particles from "@tsparticles/react";
import Tilt from "react-parallax-tilt";

const modules = [
  {
    title: "AI Engineering Studio",
    subtitle: "Enterprise LLMs, RAG & Agents",
    badge: "Core Platform",
    icon: Brain,
    color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400",
  },
  {
    title: "Thin Client Cloud",
    subtitle: "Zero-Setup Browser Workspaces",
    badge: "Infrastructure",
    icon: Cloud,
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
  },
  {
    title: "Srishtizia Hack Sprint",
    subtitle: "Build & Ship MVPs in 48 Hours",
    badge: "Innovation",
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
  },
  {
    title: "Industry Projects",
    subtitle: "Real Client Pipelines & Outcomes",
    badge: "Enterprise",
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
  },
];

const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Enterprise Products",
    description: "Built & deployed across sectors",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Future Learners",
    description: "Trained in AI & modern engineering",
  },
  {
    value: 100,
    suffix: "+",
    label: "Industry Projects",
    description: "Hands-on commercial grade builds",
  },
  {
    value: "AI-First",
    suffix: "",
    label: "Unified Ecosystem",
    description: "Studio, Cloud & Talent Network",
  },
];

export default function HeroSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section
      className="relative overflow-hidden bg-[#05070D] text-white pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-slate-800/80"
      onMouseMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      {/* Mouse Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            650px circle at ${position.x}px ${position.y}px,
            rgba(99, 102, 241, 0.14),
            transparent 45%
          )`,
        }}
      />

      {/* Ambient Grid Overlay */}
      <div className="absolute inset-0 bg-ambient-grid opacity-50 pointer-events-none z-0" />

      {/* Particle Background */}
      <Particles
        className="absolute inset-0 z-[1] pointer-events-none opacity-40"
        options={{
          particles: {
            number: {
              value: 30,
            },
            move: {
              enable: true,
              speed: 0.6,
            },
            size: {
              value: 2,
            },
            opacity: {
              value: 0.25,
            },
            color: {
              value: "#818cf8",
            },
          },
        }}
      />

      {/* Atmospheric Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <div className="absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full bg-indigo-600/25 blur-[150px]" />
        <div className="absolute right-1/4 bottom-10 h-[400px] w-[400px] rounded-full bg-cyan-600/20 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Urgency & Category Pill */}
        <div className="flex justify-center">
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 sm:px-5 sm:py-2 backdrop-blur-xl shadow-lg shadow-indigo-500/10 hover:border-indigo-400/50 hover:bg-indigo-500/20 transition-all duration-200"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-indigo-200">
              India's AI Engineering & MVP Ecosystem
            </span>
            <span className="hidden sm:inline-block text-xs bg-indigo-500/30 text-indigo-300 font-medium px-2 py-0.5 rounded-full border border-indigo-400/30">
              Admissions 2026 Open
            </span>
            <ArrowRight size={14} className="text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* High-Converting Main Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">
            Build Production{" "}
            <TypeAnimation
              sequence={[
                "AI Systems",
                2000,
                "Autonomous Agents",
                2000,
                "Enterprise RAG",
                2000,
                "Scalable MVPs",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            />
            <span className="block text-2xl sm:text-4xl md:text-5xl font-bold text-slate-300 mt-3 sm:mt-4">
              Not Just Basic Applications.
            </span>
          </h1>

          {/* Benefit-Driven Value Proposition Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
            Master real-world AI engineering on our Thin Client cloud infrastructure. Build enterprise-grade LLMs, multi-agent workflows, and commercial MVPs guided by seasoned industry practitioners.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-indigo-600/35 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] border border-indigo-400/40 transition-all duration-200"
            >
              <span>Explore AI Programs 2026</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/test/evaluation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700/80 bg-slate-900/80 px-7 py-4 text-sm sm:text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800 hover:border-slate-600 backdrop-blur-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Zap size={18} className="text-amber-400" />
              <span>Take Free AI Evaluation</span>
            </Link>
          </div>

          {/* Friction-Reduction Microcopy */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
              15-Min Free Assessment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
              Real Enterprise Codebase
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
              Verified Placement Pipeline
            </span>
          </div>
        </div>

        {/* Central Ecosystem Interactive Architecture Showcase */}
        <div className="mt-14 sm:mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-800/90 bg-slate-950/70 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            {/* Header bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  braintrain-ecosystem-core // v2.6
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-indigo-300 bg-indigo-950/50 border border-indigo-800/60 px-3 py-1 rounded-full w-fit">
                <Sparkles size={13} className="text-indigo-400" />
                <span>Integrated Engineering Stack</span>
              </div>
            </div>

            {/* 4 Pillars Interactive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {modules.map((m, idx) => {
                const Icon = m.icon;
                const isSelected = activeModule === idx;
                return (
                  <div
                    key={m.title}
                    onClick={() => setActiveModule(idx)}
                    className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border ${
                      isSelected
                        ? "bg-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10 scale-[1.02]"
                        : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} border flex items-center justify-center`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                        {m.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{m.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{m.subtitle}</p>
                  </div>
                );
              })}
            </div>

            {/* Live Pillar Capability Strip */}
            <div className="mt-5 pt-4 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-indigo-400 shrink-0" />
                <span>
                  Active Module: <strong className="text-indigo-300">{modules[activeModule].title}</strong> &mdash; Production ready deployment pipelines
                </span>
              </div>
              <Link
                href="/join"
                className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium transition"
              >
                Join ecosystem network <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Real Metrics & Verified Track Record Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {stats.map((stat) => (
            <Tilt
              key={stat.label}
              glareEnable={false}
              scale={1.02}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
            >
              <div className="h-full rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 sm:p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1 shadow-lg shadow-black/40 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400">
                  {typeof stat.value === "number" ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-bold text-white tracking-wide">
                  {stat.label}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-400 hidden sm:block">
                  {stat.description}
                </p>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Immediate Social Proof Credibility Bar */}
        <div className="mt-10 rounded-xl border border-slate-800/80 bg-slate-900/40 px-4 py-3.5 sm:px-6 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-300 font-medium">
                Verified Outcomes: Talent from <strong className="text-white">NIT Jalandhar</strong>, <strong className="text-white">DTU</strong> &amp; <strong className="text-white">LPU</strong>
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
              <span className="text-slate-400">Placed at:</span>
              <span className="bg-slate-800/90 text-slate-200 px-2.5 py-1 rounded font-semibold border border-slate-700/60">TCS</span>
              <span className="bg-slate-800/90 text-slate-200 px-2.5 py-1 rounded font-semibold border border-slate-700/60">Infosys</span>
              <span className="bg-slate-800/90 text-slate-200 px-2.5 py-1 rounded font-semibold border border-slate-700/60">Accenture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}