/*
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
    { name: "MVPs", href: "/mvps" },
    { name: "MarketPlace", href: "/marketplaces" },
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
        
       
<Link href="/" className="flex items-center gap-3 group transition">
  
  
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

      
<div className="hidden lg:flex items-center space-x-4">

 
  <Link
    href="/register"
    className="px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-pink-400 to-red-500 text-white
    shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
  >
    Register
  </Link>

  <Link
    href="/get-started"
    className="px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black
    shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
  >
    Get Started
  </Link>

</div>


     
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 transition ${isScrolled ? "text-black" : "text-white"}`}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
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

 
  <Link
    href="/register"
    onClick={() => setIsMenuOpen(false)}
    className="bg-gradient-to-r from-pink-400 to-red-500 text-white px-4 py-2 rounded-full text-center font-semibold
    shadow-md hover:shadow-lg hover:scale-105 transition"
  >
    Register
  </Link>


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

export default Header;*/


"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import Logo from "@/public/assets/images/logo.png";

/* =========================
   MENU CONFIGS
========================= */

const PUBLIC_NAV = [
  { name: "Home", href: "/" },
  { name: "Internships", href: "/internships" },
  { name: "MVPs", href: "/mvps" },
  {
    name: "Marketplace",
    href: "/marketplace",
    children: [
      { name: "Services", href: "/marketplace/services" },
      { name: "Products", href: "/marketplace/products" },
      { name: "For Startups", href: "/marketplace/startups" },
      { name: "For Enterprises", href: "/marketplace/enterprises" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const PUBLIC_ACTIONS = [
  { name: "Login", href: "/login", variant: "login" },
  { name: "Register", href: "/register", variant: "primary" },
  { name: "Get Started", href: "/get-started", variant: "highlight" },
];

/* =========================
   HEADER
========================= */

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* Replace later with real JWT auth */
  const isAuthenticated = false;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur shadow text-gray-900"
          : "bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 text-white"
      }`}
    >
      {/* ===== MAIN BAR ===== */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT. LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className={`p-1 rounded-full ${isScrolled ? "bg-gray-400" : "bg-white/20"}`}>
            <div className="relative w-10 h-10">
              <Image
                src={Logo}
                alt="Brain Train"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="leading-tight">
            <p className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Brain Train
            </p>
            <p className={`text-xs ${isScrolled ? "text-gray-700" : "text-gray-300"}`}>
              Consultancy Services LLP
            </p>
          </div>
        </Link>

        {/* CENTER. DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-8">
          {PUBLIC_NAV.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`font-medium transition ${
                  pathname === item.href
                    ? "text-yellow-400"
                    : "hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>

              {/* Marketplace dropdown */}
              {item.children && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-gray-800 shadow rounded w-48">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT. DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          {!isAuthenticated &&
            PUBLIC_ACTIONS.map((action) => {
              if (action.variant === "login") {
                return (
                 <Link
                    key={action.name}
                    href={action.href}
                    className="px-4 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:scale-105 transition"
                >
                  {action.name}
                 </Link>
                   );
               }

              if (action.variant === "primary") {
                return (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="px-4 py-2 rounded-full bg-pink-500 text-white font-semibold hover:scale-105 transition"
                  >
                    {action.name}
                  </Link>
                );
              }

              if (action.variant === "highlight") {
                return (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
                  >
                    {action.name}
                  </Link>
                );
              }

              
            })}

          {isAuthenticated && (
            <>
              <Link href="/dashboard" className="font-medium">
                Dashboard
              </Link>
              <FaBell className="cursor-pointer" />
              <div className="w-9 h-9 rounded-full bg-gray-400" />
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
{isMenuOpen && (
  <div className="lg:hidden bg-white text-gray-900 border-t shadow-md">
    <nav className="flex flex-col space-y-4 px-6 py-6">

      {PUBLIC_NAV.map((item) => (
        <div key={item.name}>
          <Link
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="font-semibold block"
          >
            {item.name}
          </Link>

          {item.children && (
            <div className="ml-4 mt-2 space-y-2">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-gray-600"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* ACTION BUTTONS */}
      <div className="pt-4 border-t space-y-3">
        {!isAuthenticated &&
          PUBLIC_ACTIONS.map((action) => {
            if (action.variant === "primary") {
              return (
                <Link
                  key={action.name}
                  href={action.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center bg-pink-500 text-white py-2 rounded-full font-semibold"
                >
                  {action.name}
                </Link>
              );
            }

            if (action.variant === "highlight") {
              return (
                <Link
                  key={action.name}
                  href={action.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center bg-yellow-400 text-black py-2 rounded-full font-semibold"
                >
                  {action.name}
                </Link>
              );
            }

            /* LOGIN BUTTON */
            if (action.variant === "login") {
            return (
              <Link
                key={action.name}
                href={action.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-indigo-500 text-white py-2 rounded-full font-semibold"
              >
                {action.name}
              </Link>
               );
            }

          })}

        {isAuthenticated && (
          <Link
            href="/dashboard"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center bg-gray-800 text-white py-2 rounded-full font-semibold"
          >
            Dashboard
          </Link>
        )}
      </div>

    </nav>
  </div>
)}

    </header>
  );
};

export default Header;
