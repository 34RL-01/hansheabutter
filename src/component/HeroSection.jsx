export default function HeroSection() {
  return (
    <section className="bg-[url('/images/shea-bg.jpg')] bg-cover bg-center h-screen flex items-center justify-center px-6">
      <div className="bg-white/80 p-10 rounded-xl text-center shadow-xl">
        <h1 className="text-5xl font-serif text-sheaGold mb-4">Nourish Your Skin Naturally</h1>
        <p className="text-gray-700 mb-6">Pure, handcrafted shea butter from Ghana.</p>
        <div className="flex justify-center gap-4">
          <a href="/shop" className="bg-oliveGreen text-white px-6 py-2 rounded-full">Shop Now</a>
          <a href="/about" className="border border-oliveGreen text-oliveGreen px-6 py-2 rounded-full">Read More</a>
        </div>
      </div>
    </section>
  );
}
