import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import HansLogo from "../assets/images/HansLogo.jpeg";
import { Link, useLocation} from "react-router";

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
            <Link to={`/Home`} className="text-amber-500 hover:text-amber-700 transition-all duration-200">Home</Link>
            <Link to="/#about" className="text-amber-500 hover:text-amber-700 transition-all duration-200">About</Link>
            <Link to="/#products" className="text-amber-500 hover:text-amber-700 transition-all duration-200">Products</Link>
            <Link to ="/#benefits" className="text-amber-500 hover:text-amber-700 transition-all duration-200">Benefits</Link>
          </nav>

          {/* 📞 Contact + Mobile Toggle */}
          <div className="flex items-center md:gap-4 gap-2">
            <Link to ={`/ContactUs`}
              className="hidden md:inline-block bg-amber-600 text-white px-4 py-1.5 rounded-full hover:bg-amber-700 transition"
            >
              Contact Us
            </Link>
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
            <a href="#home" className="text-lime-500 hover:text-amber-700 transition-colors">Home</a>
            <a href="#about" className="text-lime-500 hover:text-amber-700 transition-colors">About</a>
            <a href="#products" className="text-lime-500 hover:text-amber-700 transition-colors">Products</a>
            <a href="#benefits" className="text-lime-500 hover:text-amber-700 transition-colors">Benefits</a>
            <Link to ={`/ContactUs`} className="text-lime-500 hover:text-amber-700 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
