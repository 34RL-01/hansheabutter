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
      {/* <Helmet>
        <title>Hans Organic Shea Butter - Natural Skincare</title>
        <meta
          name="description"
          content="Experience the purity of Hans Organic Shea Butter. 100% handcrafted shea butter from Ghana to nourish and protect your skin naturally."
        />
        <meta
          name="keywords"
          content="shea butter, organic skincare, natural moisturizer, Ghanaian shea butter, handcrafted skincare"
        />
        <meta name="author" content="Hans Organic Shea Butter" />
        <link rel="canonical" href="https://hanssheabutter.com" />
        <meta property="og:title" content="Hans Organic Shea Butter" />
        <meta
          property="og:description"
          content="Discover the benefits of Hans Organic Shea Butter for your skin. Pure, natural, and ethically sourced."
        />
        <meta property="og:image" content="https://hanssheabutter.com/images/hero.jpg" />
        <meta property="og:url" content="https://hanssheabutter.com"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hans Organic Shea Butter" />
      </Helmet> */}

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
