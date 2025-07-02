import React from "react";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "../component/About";
import Product from "../component/Product";
import Benefits from "../component/Benefits";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Product />
      <Benefits />
      <Footer />
    </>
  );
}
