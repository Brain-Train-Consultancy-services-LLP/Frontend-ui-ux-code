/*import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <AboutUs/>
        <Services/>
        <Industries />
        <CaseStudies/>
        <Testimonials/>
        <Blog/>
        <Contact/>
        <Footer />
    </>
  );
}
*/
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ui/scroll-indicator";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Scroll Progress Indicator */}
      <ScrollIndicator />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow w-full">
        <section id="home" data-aos="fade-up" className="w-full">
          <HeroSection />
        </section>

        <section id="about" data-aos="fade-up" className="w-full">
          <AboutUs />
        </section>

        <section id="services" data-aos="fade-up" className="w-full">
          <Services />
        </section>

        <section data-aos="fade-up" className="w-full">
          <Industries />
        </section>

        <section data-aos="fade-up" className="w-full">
          <Testimonials />
        </section>

        <section data-aos="fade-up" className="w-full">
          <Blog />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}