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
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import Particles from "@tsparticles/react";
import Tilt from "react-parallax-tilt";

const modules = [
  {
    title: "AI Engineering Studio",
    icon: Brain,
    position: "top-20 left-0 lg:left-10",
  },
  {
    title: "Thin Client Cloud",
    icon: Cloud,
    position: "top-20 right-0 lg:right-10",
  },
  {
    title: "Srishtizia",
    icon: Cpu,
    position: "bottom-20 left-0 lg:left-10",
  },
  {
    title: "Industry Projects",
    icon: Database,
    position: "bottom-20 right-0 lg:right-10",
  },
];

const stats = [
  {
    value: "25+",
    label: "Enterprise Products",
  },
  {
    value: "10K+",
    label: "Future Learners",
  },
  {
    value: "100+",
    label: "Industry Projects",
  },
  {
    value: "AI",
    label: "Powered Ecosystem",
  },
];

const commands = [
  "Initializing AI Infrastructure...",
  "Loading Neural Engine...",
  "Connecting Ecosystem Modules...",
  "Deploying Adaptive Intelligence...",
  "System Ready.",
];

export default function HeroSection() {
  const [position, setPosition] = useState({
  x: 0,
  y: 0,
});
  return (
   <section
  className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
  onMouseMove={(e) =>
    setPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }
>

   {/* Mouse Spotlight */}

  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{
      background: `radial-gradient(
        600px circle at ${position.x}px ${position.y}px,
        rgba(56,189,248,0.15),
        transparent 40%
      )`,
    }}
  />

  {/* Particle Background */}

  <Particles
  className="absolute inset-0 z-[1]"
  options={{
    particles: {
      number: {
        value: 50,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: 2,
      },
      opacity: {
        value: 0.3,
      },
    },
  }}
/>

      {/* Neural Background */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[180px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500 blur-[180px]" />

        <svg className="absolute inset-0 h-full w-full">
          <line
            x1="20%"
            y1="30%"
            x2="50%"
            y2="50%"
            stroke="#38bdf8"
            strokeWidth="1"
            opacity="0.2"
          />
          <line
            x1="80%"
            y1="30%"
            x2="50%"
            y2="50%"
            stroke="#6366f1"
            strokeWidth="1"
            opacity="0.2"
          />
          <line
            x1="20%"
            y1="70%"
            x2="50%"
            y2="50%"
            stroke="#8b5cf6"
            strokeWidth="1"
            opacity="0.2"
          />
          <line
            x1="80%"
            y1="70%"
            x2="50%"
            y2="50%"
            stroke="#06b6d4"
            strokeWidth="1"
            opacity="0.2"
          />

          <circle cx="20%" cy="30%" r="5" fill="#22d3ee" />
<circle cx="80%" cy="30%" r="5" fill="#22d3ee" />
<circle cx="50%" cy="50%" r="6" fill="#22d3ee" />
<circle cx="20%" cy="70%" r="5" fill="#22d3ee" />
<circle cx="80%" cy="70%" r="5" fill="#22d3ee" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">

        {/* Badge */}

        <div className="flex justify-center">
          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 backdrop-blur-xl">
            India's AI Engineering Ecosystem
          </div>
        </div>

        {/* Heading */}

        <h1 className="mt-10 text-center text-6xl font-black leading-tight md:text-8xl">
          Build

          <TypeAnimation
  sequence={[
    "AI Systems",
    2000,
    "Enterprise Software",
    2000,
    "Intelligent Infrastructure",
    2000,
    "The Future",
    2000,
  ]}
  wrapper="span"
  repeat={Infinity}
  className="
  block
  bg-gradient-to-r
  from-cyan-400
  via-indigo-400
  to-purple-500
  bg-[length:300%_300%]
  animate-gradient
  bg-clip-text
  text-transparent
  "
/>

          <span className="block text-3xl text-gray-400 md:text-5xl">
            Not Just Applications
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xl text-gray-400">
          AI Engineering Studio • Thin Client Infrastructure •
          Srishtizia • Research • Innovation • Industry Programs
        </p>

        {/* CTA */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/join"
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 font-bold shadow-[0_0_40px_rgba(99,102,241,.6)] transition hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Join Ecosystem
              <ArrowRight size={18} />
            </span>
          </Link>

          <Link
            href="/evaluation"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl hover:bg-white/10"
          >
            Free AI Evaluation
          </Link>
        </div>

        {/* AI Core Orb */}

        <div className="relative mx-auto mt-28 flex h-[420px] items-center justify-center">

          <div className="absolute h-72 w-72 animate-spin rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 blur-3xl opacity-40" />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-96 w-96 rounded-full border border-cyan-500/20"
          />

          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-3xl"
          >
            <div className="text-center">
              <Brain className="mx-auto mb-3 text-cyan-400" size={48} />
              <p className="text-xl font-bold">
                Brain Train AI
              </p>
            </div>
          </motion.div>

          {/* Floating Modules */}

          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.div
                key={module.title}
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                }}
                className={`absolute ${module.position}
                rounded-3xl
                border border-white/10
                bg-white/5
                px-6 py-5
                backdrop-blur-2xl
                hover:scale-110
                hover:border-cyan-500/50
                transition-all
                duration-500`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-cyan-400" />
                  <span>{module.title}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal */}

        <div className="mx-auto mt-20 max-w-4xl rounded-3xl border border-cyan-500/20 bg-black/50 p-8 font-mono text-green-400 backdrop-blur-3xl">
          {commands.map((cmd, index) => (
  <motion.p
    key={cmd}
    initial={{
      opacity: 0,
      x: -20,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      delay: index * 0.8,
      duration: 0.5,
    }}
    className="mb-2"
  >
    {">"} {cmd}
  </motion.p>
))}
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
              <Tilt
    key={stat.label}
    glareEnable={true}
    glareMaxOpacity={0.2}
    scale={1.05}
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
  >
    <div
      className="group rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-3xl transition duration-500 hover:-translate-y-3 hover:border-cyan-500/30"
    >
            <h3 className="text-5xl font-black text-cyan-400">
  {typeof stat.value === "number" ? (
    <CountUp
      end={stat.value}
      duration={3}
    />
  ) : (
    stat.value
  )}
</h3>

                   <p className="mt-4 text-gray-400">
        {stat.label}
      </p>
    </div>
  </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}