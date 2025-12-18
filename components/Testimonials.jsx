/*
"use client";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

 const testimonials = [
    {
      name: "Rajendran M",
      role: "Founder & CEO",
      message:
        "At BrainTrain, we believe AI should simplify, not complicate, enterprise systems. Our mission is to make innovation accessible for every business.",
      rating: 5,
    },
    {
      name: "Monika Singh",
      role: "Tech Lead",
      message:
        "We’re building products that help teams think smarter, move faster, and transform ideas into real impact with AI-driven efficiency.",
      rating: 5,
    },
    {
      name: "Priya Nair",
      role: "AI Engineer",
      message:
        "Our vision is to merge innovation with purpose — developing intelligent tools that empower people, not replace them.",
      rating: 5,
    },
    {
      name: "Aman Gupta",
      role: "Design Head",
      message:
        "Every line of design we create reflects empathy — our goal is to make AI not just smart, but human-centered.",
      rating: 5,
    },
  ];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const cardWidth = 300;
  const gap = 40;
  const x = useMotionValue(0);
  const intervalRef = useRef();

  // Responsive cards
  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsToShow(1);
      else if (width < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalCards = testimonials.length;

  const goToIndex = (index) => {
    const newIndex = (index + totalCards) % totalCards;
    setActiveIndex(newIndex);

    const centerOffset = (cardsToShow - 1) / 2;
    animate(
      x,
      -(newIndex - centerOffset) * (cardWidth + gap),
      { type: "spring", stiffness: 200, damping: 25, ease: "easeInOut" }
    );
  };

  // Auto-play infinite loop
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToIndex(activeIndex + 1);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, cardsToShow]);

  const handleDragEnd = () => {
    const closestIndex = Math.round(-x.get() / (cardWidth + gap) + (cardsToShow - 1) / 2);
    goToIndex(closestIndex);
  };

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50">
      
      <div className="absolute top-10 left-0 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl animate-bounce-slow -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-100/10 rounded-full blur-2xl animate-spin-slow -z-10"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-16">
          What Our Teams Say
        </h2>

     
        <div className="relative overflow-hidden h-96">
          <motion.div
            className="flex cursor-grab relative"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -totalCards * (cardWidth + gap), right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          >
            {testimonials.map((testimonial, idx) => {
              const offset = idx - activeIndex;
              const isActive = offset === 0;

              // Smooth 3D parallax for side cards
              const scale = isActive ? 1.1 : 0.85 - Math.abs(offset) * 0.05;
              const rotateY = offset * 10; // subtle rotation
              const opacity = isActive ? 1 : 0.4 + (0.6 - Math.abs(offset) * 0.2);
              const zIndex = isActive ? 30 : 20 - Math.abs(offset);

              return (
                <motion.div
                  key={idx}
                  style={{ zIndex }}
                  animate={{
                    x: idx * (cardWidth + gap),
                    scale,
                    rotateY,
                    opacity,
                    boxShadow: isActive
                      ? "0 50px 70px rgba(99, 102, 241, 0.35)"
                      : "0 15px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25, ease: "easeInOut" }}
                  className="absolute cursor-grab"
                >
                  <TiltCard testimonial={testimonial} isActive={isActive} />
                </motion.div>
              );
            })}
          </motion.div>

         
          <button
            onClick={() => goToIndex(activeIndex - 1)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => goToIndex(activeIndex + 1)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === activeIndex ? "bg-indigo-600 scale-125" : "bg-gray-300"
              }`}
              onClick={() => goToIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({ testimonial, isActive }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <motion.div
      style={{ rotateX, rotateY, x, y }}
      whileHover={{ scale: isActive ? 1.15 : 1.05 }}
      className={`backdrop-blur-lg bg-white/90 border border-gray-200 rounded-3xl shadow-lg p-8 w-72 flex flex-col items-center text-center transition-transform ${
        isActive ? "ring-4 ring-indigo-400" : ""
      }`}
    >
      <div className="text-indigo-600 text-4xl mb-4">
        <FaQuoteLeft />
      </div>
      <p className="mb-6 text-gray-700 italic text-lg">"{testimonial.message}"</p>
      <div className="flex justify-center mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400 mx-0.5" />
        ))}
      </div>
      <h3 className="font-semibold text-gray-900 text-xl">{testimonial.name}</h3>
      <p className="text-gray-500 text-sm">{testimonial.role}</p>
    </motion.div>
  );
};

export default Testimonials;*/

"use client";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rajendran M",
    role: "Founder & CEO",
    message:
      "At BrainTrain, we believe AI should simplify, not complicate, enterprise systems. Our mission is to make innovation accessible for every business.",
    rating: 5,
  },
  {
    name: "Monika Singh",
    role: "Tech Lead",
    message:
      "We’re building products that help teams think smarter, move faster, and transform ideas into real impact with AI-driven efficiency.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "AI Engineer",
    message:
      "Our vision is to merge innovation with purpose. Developing intelligent tools that empower people, not replace them.",
    rating: 5,
  },
  {
    name: "Aman Gupta",
    role: "Design Head",
    message:
      "Every design decision we make reflects empathy. Our goal is to build AI that feels human, not mechanical.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const total = testimonials.length;

  const goTo = (index) => {
    setActiveIndex((index + total) % total);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goTo(activeIndex + 1);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  const t = testimonials[activeIndex];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-16">
          What Our Teams Say
        </h2>

        <div className="relative flex justify-center items-center">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative bg-white border border-gray-200 rounded-2xl shadow-xl max-w-2xl w-full p-10 md:p-12"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 h-full w-1 bg-indigo-600 rounded-l-2xl" />

            {/* Quote icon */}
            <div className="flex justify-center mb-6 text-indigo-600 text-4xl">
              <FaQuoteLeft />
            </div>

            {/* Message */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
              “{t.message}”
            </p>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mx-0.5" />
              ))}
            </div>

            {/* Author */}
            <div className="border-t border-gray-100 pt-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {t.name}
              </h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="hidden md:flex absolute -left-20 items-center justify-center bg-white border border-gray-200 p-3 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => goTo(activeIndex + 1)}
            className="hidden md:flex absolute -right-20 items-center justify-center bg-white border border-gray-200 p-3 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === activeIndex
                  ? "bg-indigo-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
