"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import Logo from "@/public/assets/images/logo.jpeg";

/* =========================
   MENU CONFIG
========================= */
const PUBLIC_NAV = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Careers", href: "/careers" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

/* =========================
   HEADER
========================= */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const lastScrollY = useRef(0);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  /* SCROLL HIDE */
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

  /* BODY LOCK */
  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      const y = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, parseInt(y || "0") * -1);
    };
  }, [isMenuOpen]);

  /* ESC + FOCUS TRAP */
  useEffect(() => {
    if (!isMenuOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const focusables = drawer.querySelectorAll<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])"
    );

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);

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
        bg-[#0f1117] border-b border-[#1e2535]`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
          <div className="p-1 rounded-full bg-gray-300"></div>
            <div className="relative w-10 h-10">
              <Image
                src={Logo}
                alt="Brain Train"
                fill
                className="rounded-full object-cover"
              />
            </div>
            

            <div className="leading-tight">
              <p className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Brain Train
              </p>
              <p className="text-xs text-gray-500">
                Consultancy Services LLP
              </p>
            </div>
          </Link>

          {/* NAV CENTER */}
          <nav className="hidden lg:flex items-center gap-6">
            {PUBLIC_NAV.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* BrainzTalks */}
            <a
              href="https://brainztalks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition"
            >
              BrainzTalks <FaExternalLinkAlt size={12} />
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden lg:block text-sm px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
            >
              Get in Touch
            </Link>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden p-2 text-[#8892a4] hover:text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full bg-[#0f1117] border-b border-[#1e2535]  shadow-2xl z-50 transform transition-transform duration-300 lg:hidden
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* TOP */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <span className="font-semibold">Menu</span>

          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col px-6 py-6">
          {PUBLIC_NAV.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 border-b border-gray-200 text-gray-300 hover:text-indigo-600"
            >
              {item.name}
            </Link>
          ))}

          {/* BrainzTalks Mobile */}
          <a
            href="https://brainztalks.com"
            target="_blank"
            className="py-3 text-indigo-600"
          >
            BrainzTalks ↗
          </a>

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 text-center py-2 bg-indigo-600 text-white rounded-lg"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
