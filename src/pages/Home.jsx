import React from "react";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "../component/About";
import Benefits from "../component/Benefits";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Benefits />
      <Footer />
    </>
  );
}
