import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import blackgril2 from "../assets/images/blackgril2.jpeg";
import face2 from "../assets/images/face2.jpg";
import face3 from "../assets/images/face3.jpg";
import face5 from "../assets/images/face5.jpg";

const slides = [
  {
    image: blackgril2,
    title: "Nourish Your Skin Naturally",
    description: "Pure, handcrafted shea butter sourced from Ghanaian women’s cooperatives.",
  },
  {
    image: face2,
    title: "Glow with Every Drop",
    description: "Rejuvenate dry, dull skin with rich vitamins and deep hydration.",
  },
  {
    image: face3,
    title: "Nature's Perfect Moisturizer",
    description: "No chemicals. No additives. Just raw, organic goodness.",
  },
  {
    image: face5,
    title: "Gentle & Powerful",
    description: "Great for all skin types — even sensitive or irritated skin.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const currentSlide = slides[current];

  return (
    <section
      {...swipeHandlers}
      className="relative h-screen flex items-center justify-center px-6 text-white overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentSlide.image})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-150 z-0"></div>

      {/* Slide Content */}
      <div className="relative z-10 p-8 md:p-12 rounded-2xl text-center mt-20 max-w-2xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-serif text-amber-500 font-bold mb-4 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {currentSlide.title}
        </motion.h1>

        <motion.p
          className="text-lg text-white/90 mb-6 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {currentSlide.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#products"
            className="bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            View Products
          </a>
          <a
            href="#about"
            className="border-2 border-green-600 text-green-100 hover:bg-green-700 hover:text-white px-6 py-3 rounded-full font-semibold shadow-sm transition-all duration-300"
          >
            Read More
          </a>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 flex justify-center w-full z-10 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index ? "bg-amber-500 scale-125" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Prev/Next Buttons */}
      <div className="absolute inset-y-0 flex justify-between w-full px-4 z-10 pointer-events-none">
        <motion.button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="pointer-events-auto text-white/50 hover:text-white transition"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          ‹
        </motion.button>
        <motion.button
          onClick={handleNext}
          aria-label="Next Slide"
          className="pointer-events-auto text-white/50 hover:text-white transition"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          ›
        </motion.button>
      </div>
    </section>
  );
}
