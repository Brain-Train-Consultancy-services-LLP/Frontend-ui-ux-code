"use client";

import React, { useState, useEffect } from "react";
import { FaBrain, FaLaptopCode, FaChartLine, FaCogs } from "react-icons/fa";
import { servicesApi } from "@/lib/api";
import { Service, services as fallbackServices } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Building2 } from "lucide-react";

const iconMap = {
  FaBrain: FaBrain,
  FaLaptopCode: FaLaptopCode,
  FaChartLine: FaChartLine,
  FaCogs: FaCogs,
} as const;

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || FaBrain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex justify-center w-full"
    >
      <div className="group w-full flex flex-col rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5">
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
            <IconComponent size={24} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded">
            Enterprise
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-2.5 mb-6 text-xs text-slate-300 border-t border-slate-800/80 pt-4 flex-grow">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Link
          href={service.href || `/services/${service.slug}`}
          className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white font-semibold py-2.5 px-4 text-xs sm:text-sm transition-all duration-200 border border-slate-700/60 hover:border-indigo-500 shadow-sm active:scale-[0.98]"
        >
          <span>{service.cta || "Learn More"}</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [serviceList, setServiceList] = useState<Service[]>(fallbackServices);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesApi.getAll();
        if (response.success && Array.isArray(response.data) && response.data.length > 0) {
          const fixed = response.data.map((s: any) => ({
            ...s,
            slug:
              s.slug ||
              s.title
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, ""),
          }));
          setServiceList(fixed);
        }
      } catch (err) {
        // Fallback to real static services without breaking UI
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="relative py-20 sm:py-24 bg-[#05070D] text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-4">
            <Building2 size={14} className="text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Enterprise &amp; Startup Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Engineering Services Built for{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Speed &amp; Scale
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
            From bespoke AI agent architectures and automated workflows to full-scale web platforms and data pipelines, we build solutions that deliver measurable business impact.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {serviceList.map((service, index) => (
            <ServiceCard key={service.id || service.slug} service={service} index={index} />
          ))}
        </div>

        {/* Enterprise Callout Banner */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-indigo-950/40 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Have a custom AI or software requirement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our engineering studio collaborates with businesses to architect, build, and deploy production MVPs.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 transition-all duration-200"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
