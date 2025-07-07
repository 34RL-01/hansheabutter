import React from "react";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "../component/About";
import Product from "../component/Product";
import Benefits from "../component/Benefits";
import Testimonials from  "../component/Testimonials";


export default function Home() {
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
