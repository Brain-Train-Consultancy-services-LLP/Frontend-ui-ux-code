"use client";
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BootcampsPage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => {
      cardsRef.current.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const bootcamps = [
    {
      title: "AI Bootcamp",
      description:
        "Learn Artificial Intelligence from basics to advanced projects and gain hands-on experience with real-world AI applications.",
      link: "https://your-bootcamp-website.com/ai",
      tech: ["Python", "Machine Learning", "Deep Learning", "NLP"],
    },
    {
      title: "Data Science Bootcamp",
      description:
        "Master Data Science, Analytics, and real-world projects. Build your portfolio and prepare for in-demand data roles.",
      link: "https://your-bootcamp-website.com/data-science",
      tech: ["Python", "SQL", "Statistics", "Visualization"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white h-[80vh] flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
        ></div>
        <div className="relative max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Master Cutting-Edge Skills with Our Bootcamps
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Join immersive programs in AI, Data Science, and trending tech fields.
            Learn from experts and gain hands-on experience for real-world projects.
          </p>
          <a
            href="#bootcamp-cards"
            className="inline-block px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Explore Bootcamps
          </a>
        </div>
      </section>

      {/* Bootcamps / Features Section */}
      <section id="bootcamp-cards" className="flex-grow bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Bootcamps</h2>
          <p className="text-gray-700">
            Choose the bootcamp that fits your interests and take your skills to the next level.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {bootcamps.map((bootcamp, index) => (
            <div
              key={bootcamp.title}
              ref={(el) => {
  if (el) cardsRef.current[index] = el;
}}

              className="bg-white shadow-2xl rounded-2xl p-8 transform transition duration-500 opacity-0 translate-y-10 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-3">{bootcamp.title}</h3>
              <p className="text-gray-600 mb-5">{bootcamp.description}</p>

              {/* Tech Stack / Benefits Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {bootcamp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={bootcamp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition transform hover:scale-105"
              >
                Visit {bootcamp.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BootcampsPage;
