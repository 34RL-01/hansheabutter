import { Leaf, Users } from "lucide-react";
import clearGgirl from "../assets/images/clearGgirl.jpeg";
import { motion } from "framer-motion";

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
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-amber-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[650px]">
              <img
                src={clearGgirl}
                alt="Smiling woman representing Hans Organic shea butter"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between space-y-8"
          >
            {/* Header & Description */}
            <div>
              <span className="text-amber-600 font-semibold text-lg">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-2 leading-tight">
                Rooted in Nature.
                <span className="text-green-700 block">Empowering Through Tradition.</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Hans Organic is a proudly Ghanaian-owned natural beauty and wellness company committed to producing
                100% organic, eco-friendly, and ethically sourced skincare products, with a primary focus on raw
                unrefined shea butter. We believe in the power of African indigenous ingredients and traditional
                knowledge, offering pure and effective natural products that nourish the skin, hair, and soul.
                Founded on principles of sustainability, community empowerment, and health-conscious living, Hans
                Organic sources its shea butter directly from women’s cooperatives in Northern Ghana, ensuring fair
                trade practices and promoting rural economic development.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group bg-white rounded-xl p-2 border border-gray-100 transition hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-green-700 text-sm font-semibold mb-1">Our Mission</h3>
                <p className="text-gray-700 text-sm leading-snug">
                  To deliver pure, organic shea butter sourced directly from Ghanaian women’s cooperatives,
                  uplifting communities while providing natural, nourishing products for skin and hair.
                </p>
              </div>
              <div className="group bg-white rounded-xl p-2 border border-gray-100 transition hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <h3 className="text-green-700 text-sm font-semibold mb-1">Our Vision</h3>
                <p className="text-gray-700 text-sm leading-snug">
                  To become a trusted global brand rooted in Ghana's shea traditions, a catalyst for economic
                  empowerment, sustainability, and organic body care excellence.
                </p>
              </div>
            </div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
