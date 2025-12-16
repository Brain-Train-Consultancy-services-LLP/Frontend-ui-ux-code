
"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/assets/images/hero-ai.png"


const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gray-50 text-gray-900 font-inter">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text & Buttons */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-up">
            Empowering Innovation with AI & Professional Consulting
          </h1>
          <p className="text-lg md:text-xl text-gray-700 animate-fade-in-up animate-delay-100">
            Helping businesses and students harness AI-driven solutions for growth and success.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 animate-fade-in-up animate-delay-200 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
             {/* Register */}
            <Link
              href="/register"
                className="bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold px-6 py-3 rounded-lg 
                shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
               Register
            </Link>
            <Link
              href="/marketplace"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Join Our MarketPlace
            </Link>
          </div>

          {/* Feature Badges */}
          <div className="flex gap-4 mt-6 flex-wrap animate-fade-in-up animate-delay-300">
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
              🚀 Fast AI Solutions
            </div>
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
              💼 Professional Consulting
            </div>
            
          </div>

          
        </div>

        {/* Right Side: Hero Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center animate-fade-in-right animate-delay-300">
          <Image
            src={HeroImage}
            alt="AI Innovation"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
