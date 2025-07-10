import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Hans Organic Shea Butter - Natural Skincare</title>
        <meta
          name="description"
          content="Experience the purity of Hans Organic Shea Butter. 100% handcrafted shea butter from Ghana to nourish and protect your skin naturally."
        />

        Open Graph
        <meta property="og:title" content="Hans Organic Shea Butter - Natural Skincare" />
        <meta property="og:description" content="100% handcrafted shea butter from Ghana. Moisturize, nourish, and protect your skin naturally." />
        <meta property="og:image" content="https://hansheabutter.vercel.app/images/hanslogo.jpg" />
        <meta property="og:url" content="https://hansheabutter.vercel.app/" />
        <meta property="og:type" content="website" />

        Twitter Card
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hans Organic Shea Butter - Natural Skincare" />
        <meta name="twitter:description" content="Ethically sourced shea butter from Ghana. Loved by skin, trusted by nature." />
        <meta name="twitter:image" content="https://hansheabutter.vercel.app/images/hanslogo.jpg" />
      </Helmet>

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
