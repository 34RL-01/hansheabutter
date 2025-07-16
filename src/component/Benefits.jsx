import React from 'react';
import { motion } from 'framer-motion';

export default function Benefits() {
    const benefits = [
        {
            title: 'Deep Moisturization',
            description:
                'Penetrates deep into skin layers, providing long-lasting hydration and preventing dryness.',
        },
        {
            title: '100% Natural',
            description:
                'Pure, unrefined shea butter with no artificial additives, chemicals, or preservatives.',
        },
        {
            title: 'Ethically Sourced',
            description:
                "Directly sourced from women's cooperatives in Ghana, supporting fair trade practices.",
        },
        {
            title: 'Skin Protection',
            description:
                'Natural SPF properties and antioxidants help protect against environmental damage.',
        },
        {
            title: 'Anti-Aging Properties',
            description:
                'Rich in vitamins A and E, helping to reduce fine lines and promote skin elasticity.',
        },
        {
            title: 'Healing Properties',
            description:
                'Natural anti-inflammatory compounds help soothe irritated and damaged skin.',
        },
    ];

    // Variants for more structured, scalable animations
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.15,
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.section
            id="benefits"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="py-20 bg-gradient-to-b from-green-50 to-amber-200 text-gray-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.span
                        variants={cardVariants}
                        className="text-green-600 font-semibold text-lg"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        variants={cardVariants}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 mb-5"
                    >
                        Nature&apos;s Gift to{' '}
                        <span className="text-amber-600 block">Your Skin</span>
                    </motion.h2>
                    <motion.p
                        variants={cardVariants}
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                    >
                        Discover the incredible benefits of pure organic shea butter and why it’s been trusted for centuries as nature’s ultimate skin care solution.
                    </motion.p>
                </div>

                {/* Benefit Cards with Stagger Animation */}
                <motion.div
                    variants={containerVariants}
                    className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group bg-white p-8 "
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                            <div className="mt-6 h-1 w-12 bg-gradient-to-r from-amber-400 to-green-400 rounded-full group-hover:w-20 transition-all duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
