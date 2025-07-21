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
              Hans Organic is a proudly Ghanaian-owned natural beauty and wellness company committed to producing 100% organic, eco-friendly, and ethically sourced skincare products, with a primary focus on raw unrefined shea butter. We believe in the power of African indigenous ingredients and traditional knowledge, offering pure and effective natural products that nourish the skin, hair, and soul.
              Founded on principles of sustainability, community empowerment, and health-conscious living, Hans Organic sources its shea butter directly from women’s cooperatives in Northern Ghana, ensuring fair trade practices and promoting rural economic development.
            </p>

            <span className="text-green-500 font-semibold text-lg">Our Mission</span>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <span className="font-semibold">Mission:</span>
              "To deliver pure, organic shea butter sourced directly from Ghanaian women’s cooperatives—uplifting communities while providing natural, nourishing products for skin and hair."
            </p>
            <span className="text-green-500 font-semibold text-lg">Our Vision</span>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <span className="font-semibold">Vision:</span>
              "To become a trusted global brand rooted in Ghana's shea traditions—a catalyst for economic empowerment, sustainability, and organic body care excellence."
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
