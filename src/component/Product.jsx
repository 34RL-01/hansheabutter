import React, { useState } from 'react';
import { X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import hands from '../assets/images/hands.jpeg';
import pdt1 from '../assets/images/pdt1.jpg';
import pdt2 from '../assets/images/pdt2.jpg';

const products = [
    {
        id: 1,
        image: hands,
        label: 'Pure Shea Butter',
        title: 'Unrefined, raw shea butter in its raw form',
        rating: 5,
        price: 'GHS 30.00',
        description: 'Perfect for on-the-go skin care.',
    },
    {
        id: 2,
        image: hands,
        label: 'Pure Shea Butter',
        title: 'Unrefined, raw shea butter in its raw form',
        rating: 5,
        price: 'GHS 30.00',
        description: 'This box includes luxurious skincare products and pampering items just for her.',
    },
    {
        id: 3,
        image: pdt1,
        label: 'Lavender Shea Butter',
        title: 'Unrefined, raw shea butter in its raw form',
        rating: 5,
        price: 'GHS 30.00',
        description: 'Infused with organic lavender for relaxation.',
    },
    {
        id: 4,
        image: pdt2,
        label: 'Cocoa Blend Shea Butter',
        title: 'Unrefined, raw shea butter in its raw form',
        rating: 4,
        price: 'GHS 30.00',
        description: 'Rich blend of shea and cocoa butter.',
    },
];

export default function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const closeModal = () => setSelectedProduct(null);

    const renderStars = (rating) =>
        Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < rating ? '★' : '☆'}</span>
        ));

    return (
        <section id="products" className="py-20 ">
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

                <div className="flex space-x-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-1 md:grid md:grid-cols-4 md:space-x-0">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="mb-3 flex flex-col items-center flex-shrink-0 w-64 snap-start mx-auto md:w-auto cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
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
                                {renderStars(product.rating)}
                            </div>
                            <p className="mt-1 font-semibold text-gray-800">{product.price}</p>

                            <motion.button
                                onClick={() => setSelectedProduct(product)}
                                className="mt-3 bg-yellow-500 text-white text-sm px-4 py-1 rounded hover:bg-amber-600 transition"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Details
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute -top-4 -right-4 bg-white border border-gray-200 text-gray-700 hover:bg-red-500 hover:text-white shadow-md rounded-full w-10 h-10 flex items-center justify-center transition z-50"
                                aria-label="Close"
                            >
                                <X size={22} strokeWidth={2.5} />
                            </button>


                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.title}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{selectedProduct.title}</h3>
                            <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
                            <p className="mt-4 font-semibold text-yellow-600">{selectedProduct.price}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
