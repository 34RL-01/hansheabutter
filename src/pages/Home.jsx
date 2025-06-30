import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "../component/About";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Footer />
    </>
  );
}
