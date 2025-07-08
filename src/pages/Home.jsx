import React from "react";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "../component/About";
import Product from "../component/Product";
import Benefits from "../component/Benefits";
import Testimonials from  "../component/Testimonials";
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the element if there's a hash
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Smooth scroll to the element
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay to ensure component renders first
      }
    }
  }, [location]);



// export default function Home() {
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
}
export default Home;
