import sheaButter1 from '../assets/images/sheaButter1.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${sheaButter1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-0" />

      {/* Content */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl text-center shadow-2xl max-w-2xl animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-700 font-bold mb-4">
          Nourish Your Skin Naturally
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Pure, handcrafted shea butter sourced directly from women’s cooperatives in Ghana.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/shop"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition duration-300 shadow"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-full transition duration-300 shadow"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
