/*"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { MENU } from "./menu.config";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({
  open,
  onClose,
}: Props) {
  const [expanded, setExpanded] =
    useState<number | null>(null);

  return (
    <AnimatePresence>

      {open && (

        <>

          

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed
            inset-0
            z-40
            bg-black/70
            backdrop-blur-sm
            xl:hidden
            "
            onClick={onClose}
          />

         

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 28,
            }}
            className="
            fixed
            right-0
            top-0
            z-50
            flex
            h-full
            w-[92%]
            max-w-md
            flex-col
            overflow-y-auto
            bg-[#08111F]
            shadow-2xl
            "
          >
          

            <div
              className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              px-6
              py-5
              "
            >
              <div>

                <h2 className="font-bold text-white">
                  Brain Train
                </h2>

                <p className="text-xs text-gray-400">
                  Enterprise Ecosystem
                </p>

              </div>

              <button
                onClick={onClose}
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>

           

            <div className="px-4 py-5">

              {MENU.map((menu, index) => (

                <div
                  key={menu.title}
                  className="mb-4"
                >
                  <button
                    onClick={() =>
                      setExpanded(
                        expanded === index
                          ? null
                          : index
                      )
                    }
                    className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    bg-white/5
                    px-5
                    py-4
                    text-left
                    text-white
                    "
                  >
                    {menu.title}

                    {expanded === index ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </button>

                  <AnimatePresence>

                    {expanded === index && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="
                        overflow-hidden
                        "
                      >
                        {menu.sections.map(
                          (section) => (

                            <div
                              key={section.title}
                              className="mt-5"
                            >
                              <h4
                                className="
                                mb-3
                                text-sm
                                font-semibold
                                uppercase
                                tracking-wider
                                text-indigo-400
                                "
                              >
                                {section.title}
                              </h4>

                              <div className="space-y-2">

                                {section.items.map(
                                  (item) => {

                                    const Icon =
                                      item.icon;

                                    return (

                                      <Link
                                        key={
                                          item.title
                                        }
                                        href={
                                          item.href
                                        }
                                        onClick={
                                          onClose
                                        }
                                        className="
                                        flex
                                        items-start
                                        gap-4
                                        rounded-xl
                                        px-4
                                        py-3
                                        hover:bg-white/5
                                        "
                                      >
                                        <Icon
                                          size={
                                            20
                                          }
                                          className="mt-1 text-indigo-400"
                                        />

                                        <div>

                                          <p className="font-medium text-white">
                                            {
                                              item.title
                                            }
                                          </p>

                                          <p className="text-xs text-gray-400">
                                            {
                                              item.description
                                            }
                                          </p>

                                        </div>

                                      </Link>

                                    );

                                  }
                                )}

                              </div>

                            </div>

                          )
                        )}

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              ))}

            </div>


            <div
              className="
              mt-auto
              border-t
              border-white/10
              p-6
              "
            >
              <Link
                href="https://brainztalks.com/auth/register"
                className="
                flex
                justify-center
                rounded-xl
                bg-indigo-600
                px-6
                py-3
                font-semibold
                text-white
                "
              >
                Register
              </Link>
            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}*/

"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ChevronDown,
  ChevronRight,
  X,
  Brain,
} from "lucide-react";

import { MENU } from "./menu.config";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({
  isOpen,
  onClose,
}: MobileDrawerProps) {
  const [openMenu, setOpenMenu] =
    useState<string | null>(null);

  const toggleMenu = (title: string) => {
  if (openMenu === title) {
    setOpenMenu(null);
  } else {
    setOpenMenu(title);
  }
};

return (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
          fixed inset-0
          bg-black/70
          backdrop-blur-sm
          z-[90]
          "
        />

        {/* DRAWER */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
          }}
          className="
          fixed
          right-0
          top-0
          h-screen
          w-full
          bg-[#0B1220]
          z-[100]
          overflow-y-auto
          "
        ><div className="sticky top-0 z-20 bg-[#0B1220] border-b border-white/10">

  <div className="flex items-center justify-between px-6 py-5">

    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="
      w-11 h-11
      rounded-xl
      bg-indigo-600/20
      flex items-center justify-center
      ">
        <Brain
          className="text-indigo-400"
          size={24}
        />
      </div>

      <div>
        <h2 className="text-white font-bold text-lg">
          Brain Train
        </h2>

        <p className="text-xs text-gray-500">
          Consultancy Services LLP
        </p>
      </div>
    </Link>

    <button
      onClick={onClose}
      className="
      w-11 h-11
      rounded-xl
      bg-white/5
      flex items-center justify-center
      "
    >
      <X className="text-white" />
    </button>

  </div>
</div>
<div className="px-6 py-6 space-y-4">

  {MENU.map((menu) => (

    <div
      key={menu.title}
      className="
      rounded-2xl
      border border-white/10
      overflow-hidden
      "
    >
      <button
  onClick={() =>
    toggleMenu(menu.title)
  }
  className="
  w-full
  flex
  items-center
  justify-between
  px-5
  py-5
  text-left
  "
>
  <div>

    <h3 className="
    text-white
    font-semibold
    text-lg
    ">
      {menu.title}
    </h3>

    <p className="
    text-sm
    text-gray-500
    mt-1
    ">
      Explore {menu.title}
    </p>

  </div>

  {openMenu === menu.title ? (
    <ChevronDown
      className="text-gray-400"
    />
  ) : (
    <ChevronRight
      className="text-gray-400"
    />
  )}
</button>
<AnimatePresence>

  {openMenu === menu.title && (

    <motion.div
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      exit={{
        height: 0,
        opacity: 0,
      }}
       transition={{
    duration: 0.25,
    ease: "easeInOut",
  }}
      className="
      border-t border-white/10
      bg-white/[0.02]
      overflow-hidden
      "
    >
     <div className="p-4 space-y-5">

  {menu.sections.map((section) => (

    <div key={section.title}>

      <p className="
      text-xs
      uppercase
      tracking-wider
      text-indigo-400
      mb-3
      ">
        {section.title}
      </p> 

      <div className="space-y-2">

  {section.items.map((item) => {

    const Icon = item.icon;

    return (
      <Link
        key={item.title}
        href={item.href}
       onClick={() => {
    setOpenMenu(null);
    onClose();
  }}
        className="
        flex
        items-center
        gap-4
        rounded-xl
        p-4
        hover:bg-white/5
        transition
        "
      >
        <div className="
        w-10 h-10
        rounded-xl
        bg-indigo-500/10
        flex items-center justify-center
        ">
          <Icon
            className="text-indigo-400"
            size={20}
          />
        </div>

        <div className="flex-1">

          <div className="
          flex items-center gap-2
          ">
            <p className="
            text-white
            font-medium
            ">
              {item.title}
            </p>

            {item.badge && (
              <span className="
              text-[10px]
              px-2 py-1
              rounded-full
              bg-indigo-600
              text-white
              font-bold
              ">
                {item.badge}
              </span>
            )}
          </div>

          <p className="
          text-sm
          text-gray-500
          mt-1
          ">
            {item.description}
          </p>

        </div>

      </Link>
    );
  })}
</div>
    </div>
  ))}

</div>

    </motion.div>

  )}

</AnimatePresence>

    </div>

  ))}

</div>

<div className="
px-6
pb-10
space-y-4
">

  <Link
    href="https://brainztalks.com"
     target="_blank"
  rel="noopener noreferrer"
    className="
    flex
    items-center
    justify-center
    rounded-2xl
    bg-indigo-600
    py-4
    font-semibold
    text-white
    "
  >
    Open BrainzTalks
  </Link>
<div className="px-6 pb-10">
  <Link
    href="/join"
    onClick={() => {
    setOpenMenu(null);
    onClose();
  }}
    className="
      flex
      items-center
      justify-center
      rounded-2xl
      bg-gradient-to-r
      from-indigo-600
      to-purple-600
      py-4
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-[1.02]
      shadow-lg
      shadow-indigo-500/30
    "
  >
    Join Brain Train
  </Link>
</div>

</div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
}