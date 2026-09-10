
"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#050b2c] via-[#08144a] to-[#020617] text-white">

      {/* Background diagonal */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-[65%] bg-gradient-to-l from-blue-500/20 via-indigo-500/10 to-transparent clip-path-diagonal" />
      </div>

      {/* FULL WIDTH WRAPPER */}
      <div className="relative  py-28">

        {/* CONTROLLED CONTENT WIDTH */}
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-20">

          {/* Left */}
          <div className="w-full lg:w-1/2 space-y-7 text-center lg:text-left">

            <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-300 uppercase">
              Brain Train Consultancy Services LLP
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Enterprise AI &  
              <span className="block">Technology Consulting</span>
            </h1>

            <p className="text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
              We help enterprises and institutions harness artificial intelligence,
              automation, and modern platforms to drive measurable business outcomes
              with confidence and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="bg-cyan-400 text-[#020617] font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition"
              >
                Explore Our Capabilities →
              </Link>

           <a
  href="https://brainztalks.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative flex items-center gap-2 px-7 py-3 rounded-full 
             bg-white/5 backdrop-blur-md border border-white/10 
             text-blue-200 hover:text-white 
             transition-all duration-300 ease-out
             hover:bg-white/10 hover:border-white/20"
>
  {/* Glow effect */}
  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 
                   bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-500/20 blur-md"></span>

  {/* Content */}
  <span className="relative z-10 font-medium tracking-wide">
    Visit BrainzTalks
  </span>

  <span className="relative z-10 text-lg transform transition-transform duration-300 group-hover:translate-x-1">
    ↗
  </span>
</a>
            </div>

            <div className="flex flex-wrap gap-6 pt-8 text-sm text-blue-200 justify-center lg:justify-start">
              <span>AI & Automation</span>
              <span>Enterprise Platforms</span>
              <span>Consulting & Delivery</span>
              <span>Innovation Programs</span>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-700" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-mono text-cyan-300">BrainTrain AI Engine</span>
                  </div>
                  <span className="text-xs bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 px-3 py-1 rounded-full">Enterprise v2.4</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
                    <p className="text-xs text-blue-200">System Accuracy</p>
                    <p className="text-2xl font-bold text-white mt-1">99.4%</p>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[99%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition">
                    <p className="text-xs text-blue-200">Active Pipelines</p>
                    <p className="text-2xl font-bold text-white mt-1">120+</p>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-indigo-400 h-full w-[85%]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs text-blue-200">
                    <span>AI Model Integration</span>
                    <span className="text-emerald-400">Connected</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <span className="text-cyan-400">$&gt;</span> braintrain --deploy enterprise-llm
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-blue-200/80 pt-2">
                  <span>✔ Multi-Cloud AI Deployment</span>
                  <span>✔ Zero-Downtime Pipeline</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
