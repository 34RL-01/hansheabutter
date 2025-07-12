import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import fd1 from "../assets/images/fd1.jpg";
import fd2 from "../assets/images/fd2.jpg";
import fd3 from "../assets/images/fd3.jpg";
import fd4 from "../assets/images/fd4.jpg";



// Array of slides with image, title & caption
const slides = [
  {
    image: fd1,
    title: "Nourish Your Skin Naturally",
    description: "Pure, handcrafted shea butter sourced from Ghanaian women’s cooperatives.",
  },
  {
    image: fd2,
    title: "Glow with Every Drop",
    description: "Rejuvenate dry, dull skin with rich vitamins and deep hydration.",
  },
  {
    image: fd3,
    title: "Nature's Perfect Moisturizer",
    description: "No chemicals. No additives. Just raw, organic goodness.",
  },
  {
    image: fd4,
    title: "Gentle & Powerful",
    description: "Great for all skin types — even sensitive or irritated skin.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const currentSlide = slides[current];

  return (
    <section
      {...swipeHandlers}
      className="relative h-screen flex items-center justify-center px-6 text-white overflow-hidden"
    >
      {/* Background with fade & parallax */}
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

      {/* Navigation Arrows */}
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
