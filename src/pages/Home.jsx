import React, { useEffect } from "react";

import { useLocation } from "react-router";

import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "../component/About";
import Product from "../component/Product";
import Benefits from "../component/Benefits";
import Testimonials from "../component/Testimonials";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <About />
        <Product />
        <Benefits />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Home;
