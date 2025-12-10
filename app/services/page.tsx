"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import Services from "@/components/Services";

export default function ServicesPage() {
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
        <Services />
      </main>
      
     
    </div>
  );
}
