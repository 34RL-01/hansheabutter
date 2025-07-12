import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import fd1 from "../assets/images/fd1.jpg";
import fd2 from "../assets/images/fd2.jpg";
import fd3 from "../assets/images/fd3.jpg";
import fd5 from "../assets/images/fd5.jpg";


const backgroundImages = [fd1, fd2, fd3, fd5];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center px-6 text-white transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImages[current]})`,
        backgroundAttachment: "fixed", // Parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-100 z-0"></div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 rounded-2xl text-center mt-20 max-w-2xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-700 font-bold mb-4 leading-tight">
          Nourish Your Skin Naturally
        </h1>

        <div className="pb-10">
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
        </div>
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
