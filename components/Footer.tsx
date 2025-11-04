/*"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.linkedin.com/company/brain-train-consultancy-service-llp", icon: <FaLinkedin size={24} /> },
    { href: "https://github.com/", icon: <FaGithub size={24} /> },
    { href: "https://youtube.com/", icon: <FaYoutube size={24} /> },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 text-white py-16 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div className="p-6 backdrop-blur-md bg-white/10 rounded-2xl shadow-lg space-y-4">
            <h2 className="text-3xl font-bold mb-2">
              Brain<span className="text-cyan-400">Train</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Empowering businesses and students with AI-driven solutions,
              MVP development, and professional consulting services.
            </p>

            <div className="flex items-center space-x-5 mt-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-500 hover:scale-125 hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

      
          <div className="p-6 backdrop-blur-md bg-white/10 rounded-2xl shadow-lg space-y-3">
            <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="/services" className="hover:text-cyan-400 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          <div className="p-6 backdrop-blur-md bg-white/10 rounded-2xl shadow-lg space-y-3">
            <h3 className="text-lg font-semibold text-cyan-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-cyan-400 transition cursor-pointer">AI Solutions</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Software Development</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Data Analytics</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Automation</li>
            </ul>
          </div>

          <div className="p-6 backdrop-blur-md bg-white/10 rounded-2xl shadow-lg space-y-3">
            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
            <p className="text-sm text-gray-300">info@braintrainconsultancy.com</p>
            <p className="text-sm text-gray-300 mt-1">+91-XXXXXXXXXX</p>
            <p className="text-sm text-gray-300 mt-1">India</p>
          </div>
        </div>

        
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400 space-y-2">
          <p>© {currentYear} BrainTrain Consultancy Services LLP. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;*/

"use client";
import React from "react";
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.linkedin.com/", icon: <FaLinkedin /> },
    { href: "https://www.facebook.com/", icon: <FaFacebook /> },
    { href: "https://www.instagram.com/", icon: <FaInstagram /> },
    { href: "https://www.youtube.com/", icon: <FaYoutube /> },
  ];

  return (
   <footer className="w-full bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 text-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Brain<span className="text-cyan-400">Train</span></h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses and students with AI-driven solutions, MVP development, and professional consulting services.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">What we do</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition">Industries</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Insights</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Who we are</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition">About BrainTrain</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Locations</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Annual Report</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Board of Directors</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Awards & Accolades</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">AI & Innovation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition">AI Lab</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Engineering AI for Impact</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">New Minds, New Markets</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Suppliers Info</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Glossary</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition text-xl"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-cyan-400 transition">Sitemap</a>
            <a href="#" className="hover:text-cyan-400 transition">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition">Privacy Notice</a>
            <a href="#" className="hover:text-cyan-400 transition">Cookie Notice</a>
          </div>

          <p className="mt-4 md:mt-0">© {currentYear} BrainTrain, all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

