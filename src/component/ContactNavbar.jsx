import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HansLogo from "../assets/images/HansLogo.jpeg";
import { Link, useLocation } from "react-router";

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
          {/* Logo */}
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <img
              src={HansLogo}
              alt="Hans Organic Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-amber-600 hidden sm:block">
              Hans Shea
            </span>
          </div>


          {/* Center Navigation */}
          <nav className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2 p-2 rounded-full ">
            <Link
              to="/Home"
              className="text-amber-600 font-medium px-4 py-2 rounded-full border border-transparent hover:bg-amber-600 hover:text-white transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-amber-600 font-medium px-4 py-2 rounded-full border border-transparent hover:bg-amber-600 hover:text-white transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/#products"
              className="text-amber-600 font-medium px-4 py-2 rounded-full border border-transparent hover:bg-amber-600 hover:text-white transition-all duration-300"
            >
              Products
            </Link>
            <Link
              to="/#benefits"
              className="text-amber-600 font-medium px-4 py-2 rounded-full border border-transparent hover:bg-amber-600 hover:text-white transition-all duration-300"
            >
              Benefits
            </Link>
          </nav>


          {/* Contact + Mobile Toggle */}
          <div className="flex items-center md:gap-4 gap-2">
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
          <nav className="flex flex-col space-y-3 px-4 bg-white/3 backdrop-blur-md rounded-2xl shadow-md mx-4 py-2">
            <Link
              to="/Home"
              className="text-lime-600 font-medium px-4 py-2 rounded-full hover:bg-lime-200 hover:text-amber-700 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-lime-600 font-medium px-4 py-2 rounded-full hover:bg-lime-200 hover:text-amber-700 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/#products"
              className="text-lime-600 font-medium px-4 py-2 rounded-full hover:bg-lime-200 hover:text-amber-700 transition-all duration-300"
            >
              Products
            </Link>
            <Link
              to="/#benefits"
              className="text-lime-600 font-medium px-4 py-2 rounded-full hover:bg-lime-200 hover:text-amber-700 transition-all duration-300"
            >
              Benefits
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
}
