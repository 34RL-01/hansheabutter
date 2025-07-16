import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import HansLogo from "../assets/images/HansLogo.jpeg";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", to: "/home" },
  { name: "About", to: "/#about" },
  { name: "Products", to: "/#products" },
  { name: "Benefits", to: "/#benefits" },
];

const NavLink = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`text-amber-600 font-medium px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 ${className}`}
    onClick={() => window.scrollTo(0, 0)}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <Link to="/home" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <img
              src={HansLogo}
              alt="Hans Organic Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-amber-600 hidden sm:block">
              Hans Shea
            </span>
          </Link>

          <nav aria-label="Primary Navigation" className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
            {NAV_LINKS.map(({ name, to }) => (
              <NavLink key={name} to={to}>{name}</NavLink>
            ))}
          </nav>

          <div className="flex items-center md:gap-4 gap-2">
            <Link
              to="/contact-us"
              className="hidden md:inline-block bg-amber-700 text-white px-4 py-1.5 rounded-full hover:bg-amber-600 transition"
            >
              Contact Us
            </Link>
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              aria-label="Mobile Navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden px-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-md mx-4 py-2 overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map(({ name, to }) => (
                  <NavLink
                    key={name}
                    to={to}
                    className="text-lime-600 hover:bg-lime-200 hover:text-amber-700"
                  >
                    {name}
                  </NavLink>
                ))}
                <NavLink
                  to="/contact-us"
                  className="text-lime-600 hover:bg-lime-200 hover:text-amber-700"
                >
                  Contact
                </NavLink>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
