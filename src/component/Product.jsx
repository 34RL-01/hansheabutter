import React from 'react';
import hands from '../assets/images/hands.jpeg';

const products = [
  {
    id: 1,
    name: "Pure Shea Butter",
    image: {hands},
    description: "Unrefined, raw shea butter in its purest form"
  },
  {
    id: 2,
    name: "Lavender Shea Butter",
    image: "https://images.pexels.com/photos/4041395/pexels-photo-4041395.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    description: "Infused with calming organic lavender"
  },
  {
    id: 3,
    name: "Cocoa Shea Blend",
    image: "https://images.pexels.com/photos/4041393/pexels-photo-4041393.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    description: "Rich blend of cocoa and shea butter"
  },
  {
    id: 4,
    name: "Travel Size Set",
    image: "https://images.pexels.com/photos/4041394/pexels-photo-4041394.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
    description: "Compact shea essentials for on-the-go"
  },
];

export default function Product() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-lg">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium organic shea butter products,
            each crafted with love and tradition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={hands}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>

              {/* Quick View Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Quick View</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    100% Organic. Excellent for moisturizing dry skin and healing cracked areas.
                  </p>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-full font-medium hover:bg-amber-700 transition">
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
