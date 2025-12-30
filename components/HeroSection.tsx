/*"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/assets/images/hero-ai.png"


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 text-gray-900 font-inter">
  <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
    
  
    <div className="md:w-1/2 space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-up">
        Empowering Innovation with AI & Professional Consulting
      </h1>
      <p className="text-lg md:text-xl text-gray-700 animate-fade-in-up animate-delay-100">
        Helping businesses and students harness AI-driven solutions for growth and success.
      </p>

      
      <div className="flex gap-4 mt-4 animate-fade-in-up animate-delay-200 flex-wrap">
        <Link href="/contact" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get in Touch
        </Link>
        <Link href="/register" className="bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition">
          Register
        </Link>
        <Link href="/marketplace" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Join Our MarketPlace
        </Link>
      </div>

     
      <div className="flex gap-4 mt-6 flex-wrap animate-fade-in-up animate-delay-300">
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">🚀 Fast AI Solutions</div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">💼 Professional Consulting</div>
      </div>
    </div>

    
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center animate-fade-in-right animate-delay-300">
      <Image
        src={HeroImage}
        alt="AI Innovation"
        className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg h-auto object-contain select-none pointer-events-none"
        draggable={false}
      />
    </div>
  </div>
</section>

  );
};

export default Hero;*/


"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/assets/images/hero-ai.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-x-hidden bg-gradient-to-br from-[#050b2c] via-[#08144a] to-[#020617] text-white">

      {/* Background decoration layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-[55%]  max-w-[800px] bg-gradient-to-l from-blue-500/20 via-indigo-500/10 to-transparent clip-path-diagonal" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-7 text-center lg:text-left">

            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-blue-300 uppercase">
              Brain Train Consultancy Services LLP
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Enterprise AI &
              <span className="block">Technology Consulting</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
              We help enterprises and institutions harness artificial intelligence,
              automation, and modern platforms to drive measurable business outcomes
              with confidence and scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-cyan-400 text-[#020617] font-semibold px-7 py-3.5 rounded-full hover:bg-cyan-300 transition w-full sm:w-auto"
              >
                Explore Our Capabilities →
              </Link>

              <Link
                href="/marketplace"
                className="text-blue-200 hover:text-white underline underline-offset-4 transition"
              >
                View Solutions
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 pt-8 text-sm text-blue-200">
              <span>AI & Automation</span>
              <span>Enterprise Platforms</span>
              <span>Consulting & Delivery</span>
              <span>Innovation Programs</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={HeroImage}
              alt="Enterprise AI Innovation"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
