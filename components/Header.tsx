/*"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import Logo from "@/public/assets/images/logo.png";



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
  
];



const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
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
     
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

   
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

       
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

  
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

export default Header;*/


"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import Logo from "@/public/assets/images/logo.png";

/* =========================
   MENU CONFIGS
========================= */

const PUBLIC_NAV = [
  { name: "Home", href: "/" },
  { name: "Internships", href: "/internships" },
  { name: "MVPs", href: "/mvps" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const PUBLIC_ACTIONS = [
  { name: "Login", href: "/login", variant: "login" },
  { name: "Register", href: "/register", variant: "primary" },
];

/* =========================
   HEADER
========================= */

const Header: React.FC = () => {
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const lastScrollY = useRef(0);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const isAuthenticated = false;

  /* =========================
     SCROLL HIDE HEADER LOGIC
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 80) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     REAL BODY SCROLL LOCK
  ========================= */

  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      const y = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflowX = "hidden";

      window.scrollTo(0, parseInt(y || "0") * -1);
    };
  }, [isMenuOpen]);

  /* =========================
     ESC CLOSE + FOCUS TRAP
  ========================= */

  useEffect(() => {
    if (!isMenuOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const focusables = drawer.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }

      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${hideHeader ? "-translate-y-full" : "translate-y-0"}
         bg-white/90 backdrop-blur shadow text-gray-900
       `}
      >

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="p-1 rounded-full bg-gray-300">
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
              <p className= "text-xs text-gray-700" >
                Consultancy Services LLP
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-8">
            {PUBLIC_NAV.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium transition hover:text-yellow-300"
                >
                  {item.name}
                </Link>

                
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            {!isAuthenticated &&
              PUBLIC_ACTIONS.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                    action.variant === "primary"
                    ? "bg-indigo-700 text-white hover:bg-indigo-800"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}

                >
                  {action.name}
                </Link>
              ))}
            {isAuthenticated && <FaBell />}
          </div>

          {/* MOBILE BUTTON */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
            <FaBars size={20} />
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          onTouchMove={(e) => e.preventDefault()}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-full  bg-white text-gray-900 shadow-2xl z-50 transform transition-transform duration-300 lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        
        <div className="flex items-center justify-between px-6 py-4 border-b">
  <Link
    href="/"
    onClick={() => setIsMenuOpen(false)}
    className="flex items-center gap-3"
  >
    <div className="relative w-10 h-10">
      <Image
        src={Logo}
        alt="Brain Train"
        fill
        className="rounded-full object-cover"
      />
    </div>

    <div className="leading-tight">
      <p className="font-semibold text-base text-gray-900">
        Brain Train
      </p>
      <p className="text-xs text-gray-500">
        Consultancy Services LLP
      </p>
    </div>
  </Link>

  <button
    aria-label="Close menu"
    onClick={() => setIsMenuOpen(false)}
    className="p-2 rounded hover:bg-gray-100"
  >
    <FaTimes size={18} />
  </button>
</div>


        <nav className="flex flex-col space-y-4 px-6 py-6">
          {PUBLIC_NAV.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold block"
              >
                {item.name}
              </Link>

          ))}

          <div className="pt-4 border-t space-y-3">
            {!isAuthenticated &&
              PUBLIC_ACTIONS.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-center py-2 rounded-md text-sm font-medium transition ${
                    action.variant === "primary"
                      ? "bg-indigo-700 text-white hover:bg-indigo-800"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {action.name}
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
