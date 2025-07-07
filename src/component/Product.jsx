import React, { useState } from 'react';
import hands from '../assets/images/hands.jpeg';

const products = [
    {
        id: 1,
        image: hands,
        label: 'Pure Shea Butter',
        title: 'Unrefined, raw shea butter in it raw form',
        rating: 5,
        price: 'GHS 550.00',
        description: 'Perfect for on-the-go skin care.',
    },
    {
        id: 2,
        image: hands,
        label: 'Pure Shea Butter',
        title: 'Unrefined, raw shea butter in it raw form',
        rating: 5,
        price: 'GHS 550.00',
        description: 'This box includes luxurious skincare products and pampering items just for her.',
    },
    {
        id: 3,
        image: hands,
        label: 'Lavender Shea Butter',
        title: 'Unrefined, raw shea butter in it raw form',
        rating: 5,
        price: 'GHS 200.00',
        description: 'Infused with organic lavender for relaxation.',
    },
    {
        id: 4,
        image: hands,
        label: 'Cocoa Blend Shea Butter',
        title: 'Unrefined, raw shea butter in it raw form',
        rating: 4,
        price: 'GHS 400.00',
        description: 'Rich blend of shea and cocoa butter.',
    },
];

export default function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const closeModal = () => setSelectedProduct(null);

    return (
        <section id="products" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
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

                {/* Horizontal Scroll Wrapper */}
                <div className="flex space-x-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-1 md:grid md:grid-cols-4 md:space-x-0">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col items-center flex-shrink-0 w-64 snap-start mx-auto md:w-auto transition transform hover:scale-105 hover:shadow-lg cursor-pointer"
                        >
                            <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg transition-transform duration-300 ease-in-out">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <p className="mt-4 text-sm text-gray-500 uppercase font-bold tracking-widest">{product.label}</p>
                            <h3 className="text-yellow-600 text-center">{product.title}</h3>
                            <div className="flex justify-center text-yellow-500 mt-1 text-sm">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i}>{i < product.rating ? '★' : '☆'}</span>
                                ))}
                            </div>
                            <p className="mt-1 font-semibold text-gray-800">{product.price}</p>

                            <button
                                onClick={() => setSelectedProduct(product)}
                                className="mt-3 bg-yellow-500 text-white text-sm px-4 py-1 rounded hover:bg-amber-600 transition"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{selectedProduct.title}</h3>
                        <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
                        <p className="mt-4 font-semibold text-yellow-600">{selectedProduct.price}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
