"use client";

import React from "react";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/brain-train-consultancy-service-llp",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.instagram.com/brain_train_consultancy/",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.youtube.com/@braintrainconsultancyservicesl",
      icon: <FaYoutube />,
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 text-white py-10 ">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top Section: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">

          {/* Brand */}
<div className="flex flex-col items-start ">
  {/* Logo + Name */}
  <div className="flex items-center mb-1">
    <img
      src="/assets/images/logo.jpeg"
      alt="Brain Train Logo"
      className="rounded-full w-12 h-12 mr-2"
    />
    <div className="flex flex-col ">
      <h2 className="text-2xl font-bold ">
        Brain Train
      </h2>
      <span className="text-sm text-cyan-400 -mt-1">
        Consultancy Services LLP
      </span>
    </div>
  </div>

  {/* Description */}
  <p className="text-gray-300 text-sm leading-relaxed mt-2 max-w-sm">
    Empowering businesses and students with AI-driven solutions, 
    MVP development, and professional consulting services.
  </p>
</div>

          {/* What we do */}
          <div>
            <h3 className="text-sm font-semibold mb-4">What we do</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-400">Industries</a></li>
              <li><a href="/services" className="hover:text-cyan-400">Services</a></li>
              <li><a href="#" className="hover:text-cyan-400">Insights</a></li>
            </ul>
          </div>

          {/* Who we are */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Who we are</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/about" className="hover:text-cyan-400">About BrainTrain</a></li>
              <li><a href="/transparency" className="hover:text-cyan-400">Transparency</a></li>
            </ul>
          </div>

          {/* AI & Innovation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">AI & Innovation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-400">Engineering AI for Impact</a></li>
              <li><a href="#" className="hover:text-cyan-400">New Minds, New Markets</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/contact" className="hover:text-cyan-400">Contact Us</a></li>
              <li><a href="/internships" className="hover:text-cyan-400">Internships</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Social + Links + Copyright */}
        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-sm text-gray-400">

          {/* Social Icons */}
          <div className="flex space-x-5 mb-4 md:mb-0">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 text-xl"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/terms-conditions" className="hover:text-cyan-400">Terms</a>
            <a href="/privacy-notice" className="hover:text-cyan-400">Privacy Notice</a>
            <a href="/cookie-notice" className="hover:text-cyan-400">Cookie Notice</a>
          </div>

          {/* Copyright */}
          <p>© {currentYear} Brain Train Consultancy Services LLP, all rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
