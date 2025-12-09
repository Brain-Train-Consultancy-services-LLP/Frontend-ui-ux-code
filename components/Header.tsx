

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/public/assets/images/logo.png"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Internships", href: "/internships" },
    { name: "Projects", href: "/mvps" },
    { name: "Bootcamps", href: "/bootcamps" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md text-gray-900"
          : "bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
       {/* ===== Logo + Company Name ===== */}
<Link href="/" className="flex items-center gap-3 group transition">
  
  {/* Scroll Background for Logo */}
  <div
    className={`p-[6px] rounded-full transition-all duration-300 ${
      isScrolled ? "bg-gray-500" : "bg-white/20 backdrop-blur"
    }`}
  >
    <div className="relative w-10 h-10">
      <Image
        src={Logo}
        alt="Brain Train Logo"
        fill
        className="rounded-full object-cover"
      />
    </div>
  </div>

          <div className="leading-tight">
            <p className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Brain Train
            </p>
            <p className={`text-xs font-medium ${
              isScrolled ? "text-gray-700" : "text-gray-300"
            }`}>
              Consultancy Services LLP
            </p>
          </div>
        </Link>

        {/* ===== Desktop Menu ===== */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors relative group ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "hover:text-yellow-300"
              }`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* ===== Desktop Buttons ===== */}
<div className="hidden lg:flex items-center space-x-4">

  {/* Register Button */}
  <Link
    href="/register"
    className="px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-pink-400 to-red-500 text-white
    shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
  >
    Register
  </Link>

  {/* Get Started */}
  <Link
    href="/get-started"
    className="px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black
    shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
  >
    Get Started
  </Link>

</div>


        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 transition ${isScrolled ? "text-black" : "text-white"}`}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-3 p-4 bg-white text-gray-800 shadow-lg border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${
                pathname === link.href ? "text-yellow-400" : "hover:text-indigo-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t mt-4 flex flex-col space-y-3">

  {/* Register */}
  <Link
    href="/register"
    onClick={() => setIsMenuOpen(false)}
    className="bg-gradient-to-r from-pink-400 to-red-500 text-white px-4 py-2 rounded-full text-center font-semibold
    shadow-md hover:shadow-lg hover:scale-105 transition"
  >
    Register
  </Link>

  {/* Get Started */}
  <Link
    href="/get-started"
    onClick={() => setIsMenuOpen(false)}
    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-center font-semibold
    shadow-md hover:shadow-lg hover:scale-105 transition"
  >
    Get Started
  </Link>

</div>

        </nav>
      </div>
    </header>
  );
};

export default Header;

