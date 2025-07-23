import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import HansLogo from "../assets/images/HansLogo.jpeg";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", to: "/home" },
  { name: "About", to: "/#about" },
  { name: "Products", to: "/#products" },
  { name: "Benefits", to: "/#benefits" },
];

const NavLink = ({ to, children, className = "", mobile = false, onClick }) => {
  const baseStyles = mobile
    ? "text-amber-700 hover:bg-amber-100 hover:text-amber-900"
    : "text-white hover:bg-amber-600";

  return (
    <Link
      to={to}
      className={`font-medium px-4 py-2 rounded-full transition-all duration-300 ${baseStyles} ${className}`}
      onClick={(e) => {
        window.scrollTo(0, 0);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      setIsScrolled(shouldBeScrolled);
      controls.start({
        opacity: shouldBeScrolled ? 1 : 0.9,
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <motion.header
      initial={{ opacity: 0.9 }}
      animate={controls}
      className={`fixed w-full z-50 transition-all duration-300 px-2 ${isScrolled
          ? "bg-white/10 backdrop-blur-lg border border-white/30 shadow-md rounded-xl"
          : "bg-white/10 backdrop-blur-lg border border-white/20 shadow-md rounded-xl"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <Link
            to="/home"
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            aria-label="Hans Shea Home"
          >
            <img
              src={HansLogo}
              alt="Hans Organic Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-amber-600 hidden sm:block">
              Hans Shea
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2"
          >
            {NAV_LINKS.map(({ name, to }) => (
              <NavLink key={name} to={to}>
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
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
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              aria-label="Mobile Navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden px-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-md mx-4 py-2 overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map(({ name, to }) => (
                  <NavLink
                    key={name}
                    to={to}
                    mobile
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                ))}
                <NavLink
                  to="/contact-us"
                  mobile
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
