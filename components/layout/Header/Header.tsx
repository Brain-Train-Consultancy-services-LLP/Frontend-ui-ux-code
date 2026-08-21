"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import Logo from "@/public/assets/images/logo.jpeg";

import AnnouncementBar from "./AnnouncementBar";
import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  /* ===============================
      Sticky + Hide on Scroll
  =============================== */

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 15);

      if (current > lastScrollY.current && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
      Body Scroll Lock
  =============================== */

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ===========================================
            TOP ANNOUNCEMENT BAR
      =========================================== */}

      <AnnouncementBar />

      {/* ===========================================
            HEADER
      =========================================== */}

      <header
        className={`
        fixed
        left-0
        top-10
        z-50
        w-full
        transition-all
        duration-500

        ${
          hidden
            ? "-translate-y-full"
            : "translate-y-0"
        }

        ${
          scrolled
            ? "backdrop-blur-3xl bg-[#07111F]/90 border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }
      `}
      >
        <div className="mx-auto max-w-[1500px]">

          {/* ========================= */}

          <div
            className="
            flex
            items-center
            justify-between
            px-8
            py-4
            xl:px-12
          "
          >
            {/* =====================================
                    LOGO
            ===================================== */}

            <Link
              href="/"
              className="
              flex
              items-center
              gap-4
              shrink-0
            "
            >
              <div
                className="
                relative
                h-12
                w-12
                overflow-hidden
                rounded-2xl
                ring-2
                ring-indigo-500/30
              "
              >
                <Image
                  src={Logo}
                  alt="Brain Train"
                  fill
                  className="object-cover"
                />
              </div>

              <div>

                <h2
                  className="
                  text-xl
                  font-extrabold
                  tracking-wide
                  text-white
                "
                >
                  Brain Train
                </h2>

                <p
                  className="
                  text-xs
                  tracking-[0.18em]
                  uppercase
                  text-indigo-300
                "
                >
                  Consultancy Services LLP
                </p>

              </div>

            </Link>

            {/* =====================================
                  DESKTOP NAVIGATION
            ===================================== */}

            <DesktopNavigation />

            {/* =====================================
                  RIGHT SIDE
            ===================================== */}

            <HeaderActions
              onSearchOpen={() => {}}
            />

            {/* =====================================
                    MOBILE BUTTON
            ===================================== */}

            <button
              onClick={() =>
                setMobileOpen(true)
              }
              className="
              xl:hidden
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              text-white
              transition
              hover:bg-indigo-600
            "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ===========================================
            MOBILE DRAWER
      =========================================== */}

      <MobileDrawer
  isOpen={mobileOpen}
  onClose={() => setMobileOpen(false)}
/>

     
    </>
  );
}