"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/layout/Header/Header";
import HeroSection from "@/components/landing/hero/HeroSection";
import FeaturedPrograms from "@/components/landing/FeaturedPrograms";
import DifferentiationSection from "@/components/landing/DifferentiationSection";
import Services from "@/components/Services";
import TalentEcosystemImpact from "@/components/TalentEcosystemImpact";
import CeoNotePreview from "@/components/CeoNotePreview";
import StrategicCta from "@/components/landing/StrategicCta";
import ScrollIndicator from "@/components/ui/scroll-indicator";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#05070D] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Scroll Progress Indicator */}
      <ScrollIndicator />

      {/* Global Header */}
      <Header />

      <main className="flex-grow w-full">
        {/* 1. High-Converting Hero with Clear Value Prop, Dual CTAs, Interactive Architecture & Real Stats */}
        <section id="home" className="w-full">
          <HeroSection />
        </section>

        {/* 2. Benefit-Focused AI Engineering Programs & Tracks (Direct Conversion to Enrolment) */}
        <section data-aos="fade-up" className="w-full">
          <FeaturedPrograms />
        </section>

        {/* 3. Clear Differentiation: Why BrainTrain vs Traditional Bootcamps */}
        <section data-aos="fade-up" className="w-full">
          <DifferentiationSection />
        </section>

        {/* 4. Benefit-Focused Enterprise & Innovation Services */}
        <section data-aos="fade-up" className="w-full">
          <Services />
        </section>

        {/* 5. Verified Social Proof: Real Alumni from NIT, DTU & LPU Placed at TCS, Infosys & Accenture */}
        <section data-aos="fade-up" className="w-full">
          <TalentEcosystemImpact />
        </section>

        {/* 6. Authentic Founder Credibility & Candid Philosophy */}
        <section data-aos="fade-up" className="w-full">
          <CeoNotePreview />
        </section>

        {/* 7. Strategic Dual-Audience Conversion Section (Developers & Enterprises) */}
        <section data-aos="fade-up" className="w-full">
          <StrategicCta />
        </section>
      </main>
    </div>
  );
}
