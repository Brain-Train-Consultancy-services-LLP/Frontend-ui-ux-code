"use client";

import React, { useState, useEffect } from "react";
import { FaBrain, FaLaptopCode, FaChartLine, FaCogs } from "react-icons/fa";
import { servicesApi } from "@/lib/api";
import { Service } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { LoadingGrid } from "./ui/loading";
import { ErrorBoundary } from "./ui/error-boundary";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <Card className="group w-full bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-800/80 hover:border-indigo-500/40 flex flex-col">
        <CardHeader className="text-center flex-grow p-6">
          <div className="flex justify-center mb-4 text-indigo-400 transition-transform duration-300 group-hover:scale-110">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <IconComponent size={28} />
            </div>
          </div>
          <CardTitle className="text-xl font-extrabold text-white">
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col justify-between flex-grow p-6 pt-0">
          <div>
            <CardDescription className="text-slate-400 text-center mb-5 text-xs sm:text-sm leading-relaxed">
              {service.description}
            </CardDescription>

            <ul className="space-y-2 mb-6 text-left">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-slate-300 text-xs sm:text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/services/${service.slug}`}
            className="mt-auto w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-4 rounded-xl transition shadow-lg shadow-indigo-600/25 block text-center text-xs sm:text-sm active:scale-[0.97]"
          >
            {service.cta} →
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await servicesApi.getAll();

        if (response.success) {
          // ✅ Auto-generate slug if missing
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

          setServices(fixed);
        } else {
          throw new Error(response.error || "Failed to load services");
        }
      } catch (err: any) {
        console.error("Error fetching services:", err);
        setError(err.message || "An unexpected error occurred");

        const fallback: Service[] = [
          {
            id: "1",
            title: "AI Consulting",
            slug: "ai-solutions",
            description: "Professional AI-driven business solutions",
            features: ["Automation", "Analytics", "Predictive Insights"],
            icon: "FaBrain",
            cta: "Learn More",
            href: "/services/ai-solutions",
          },
          {
            id: "2",
            title: "Web Development",
            slug: "software-development",
            description: "Full-stack modern web applications",
            features: ["React", "Next.js", "Node.js"],
            icon: "FaLaptopCode",
            cta: "Explore",
            href: "/services/software-development",
          },
          {
            id: "3",
            title: "Data Analytics",
            slug: "data-analytics",
            description: "Turn data into strategic decisions",
            features: ["Dashboards", "Visualization", "AI Reports"],
            icon: "FaChartLine",
            cta: "Get Insights",
            href: "/services/data-analytics",
          },
          {
            id: "4",
            title: "Automation Systems",
            slug: "automation",
            description: "Integrate smart automation tools",
            features: ["IoT", "ML Pipelines", "Monitoring"],
            icon: "FaCogs",
            cta: "Start Now",
            href: "/services/automation",
          },
        ];

        setServices(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (error) {
    return (
      <section className="relative py-20 bg-[#05070D] border-b border-slate-800 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Our Services
          </h2>
          <p className="text-rose-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
      <section className="relative py-20 bg-[#05070D] text-slate-100 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-extrabold mb-3 text-white tracking-tight"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-slate-400 mb-12 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Empowering businesses and learners with AI-driven solutions,
            automation, and digital transformation.
          </motion.p>

          {loading ? (
            <LoadingGrid
              count={4}
              className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Services;
