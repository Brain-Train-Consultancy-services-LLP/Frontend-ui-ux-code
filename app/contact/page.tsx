"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import Contact from "@/components/Contact";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full min-h-screen">
      <ScrollIndicator />
      <Header />
      
      <main className="pt-20">
        <Contact />
      </main>
      

    </div>
  );
}
