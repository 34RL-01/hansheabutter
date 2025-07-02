import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HansLogo from "../assets/images/HansLogo.jpeg"; // ✅ your logo path

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* 🌿 Logo */}
          <div className="flex items-center gap-2">
            <img src={HansLogo} alt="Hans Organic Logo" className="h-15 w-auto" />
            <span className="text-xl font-bold text-amber-800 hidden sm:block">Hans Shea</span>
          </div>

          {/* 🧭 Center Navigation */}
          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-gray-700 hover:text-amber-700 transition-all duration-200">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-700 transition-all duration-200">About</a>
            <a href="#products" className="text-gray-700 hover:text-amber-700 transition-all duration-200">Products</a>
            <a href="#benefits" className="text-gray-700 hover:text-amber-700 transition-all duration-200">Benefits</a>
          </nav>

          {/* 📞 Contact + Mobile Toggle */}
          <div className="flex items-center md:gap-4 gap-2">
            <a
              href="#contact"
              className="hidden md:inline-block bg-amber-600 text-white px-4 py-1.5 rounded-full hover:bg-amber-700 transition"
            >
              Contact
            </a>
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 📱 Animated Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 py-4" : "max-h-0"
            }`}
        >
          <nav className="flex flex-col space-y-4 px-4">
            <a href="#home" className="text-gray-700 hover:text-amber-700 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-700 transition-colors">About</a>
            <a href="#products" className="text-gray-700 hover:text-amber-700 transition-colors">Products</a>
            <a href="#benefits" className="text-gray-700 hover:text-amber-700 transition-colors">Benefits</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
