
import blackgril2 from '../assets/images/blackgril2.jpeg';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center px-6 text-white"
      style={{ backgroundImage: `url(${blackgril2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-150"></div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 rounded-2xl text-center mt-20 max-w-2xl mx-auto animate-fade-in-up">

        <h1 className="text-4xl md:text-5xl font-serif text-amber-700 font-bold mb-4 leading-tight">
          Nourish Your Skin Naturally
        </h1>
        <div className='pb-10'>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Pure, handcrafted shea butter sourced directly from women’s cooperatives in Ghana.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
            >
              View Products
            </a>
            <a
              href="#about"
              className="border-2 border-green-600 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-full font-semibold shadow-sm transition-all duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}