import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import blackgril2 from "../assets/images/blackgril2.jpeg";
import face2 from "../assets/images/face2.jpg";
import face3 from "../assets/images/face3.jpg";
import face5 from "../assets/images/face5.jpg";

const backgroundImages = [blackgril2, face2, face3, face5];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide with pause support
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % backgroundImages.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % backgroundImages.length);
  };

  // Swipe support
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
  });

  return (
    <section
      {...swipeHandlers}
      className="relative h-screen flex items-center justify-center px-6 text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image with Fade Transition */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImages[current]})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-150 z-0"></div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 rounded-2xl text-center mt-20 max-w-2xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-serif text-amber-700 font-bold mb-4 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nourish Your Skin Naturally
        </motion.h1>

        <motion.div
          className="pb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Pure, handcrafted shea butter sourced directly from women’s cooperatives in Ghana.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
            >
              View Products
            </a>
            <a
              href="#about"
              className="border-2 border-green-600 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-full font-semibold shadow-sm transition-all duration-300"
            >
              Read More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
