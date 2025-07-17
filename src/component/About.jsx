import { Heart, Leaf, Users } from "lucide-react";
import clearGgirl from "../assets/images/clearGgirl.jpeg";

const features = [
  {
    icon: <Leaf className="text-green-600" size={24} />,
    bgColor: "bg-green-100",
    title: "100% Organic",
    description: "No chemicals, just pure nature",
  },
  {
    icon: <Users className="text-amber-600" size={24} />,
    bgColor: "bg-amber-100",
    title: "Ethically Sourced",
    description: "Supporting local communities",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={clearGgirl}
                alt="Smiling woman representing Hans Shea Organic shea butter"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6">
              <span className="text-amber-600 font-semibold text-lg">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
                Rooted in Nature.
                <span className="text-green-700 block">Empowering Through Tradition.</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hans Organic Shea Butter Cosmetics is a proudly Ghanaian brand dedicated to producing unrefined,
              organic shea butter and a full line of handcrafted skincare products. Our offerings include raw
              shea butter, body creams, soaps, and shampoos—each carefully sourced and produced to maintain the
              natural healing properties of shea.
            </p>

            <span className="text-green-500 font-semibold text-lg">Purpose & Sourcing</span>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe nature provides the purest solutions for skincare. That’s why our shea butter is Grade A,
              unrefined, and ethically sourced from women’s cooperatives in Northern Ghana. Rich in natural vitamins
              A, E, and F, our products retain their creamy texture and healing potency—making them ideal for both
              personal use and commercial wholesale.
              Whether it’s a soothing body cream or raw butter for processing, we guarantee premium quality,
              sustainability, and deep respect for the communities we work with.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`${feature.bgColor} p-2 rounded-lg`}>{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
