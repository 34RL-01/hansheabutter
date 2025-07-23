import React from 'react';
import { motion } from 'framer-motion';
import face5 from '../assets/images/face5.jpg';

const benefits = [
    { title: 'Deep Moisturization', description: 'Penetrates deep into skin layers, providing long-lasting hydration and preventing dryness.' },
    { title: '100% Natural', description: 'Free from chemicals, preservatives, and artificial fragrances, ensuring pure nourishment.' },
    { title: 'Ethically Sourced', description: "Directly sourced from women's cooperatives in Ghana, supporting fair trade practices." },
    { title: 'Skin Protection', description: 'Natural SPF properties and antioxidants help protect against environmental damage.' },
    { title: 'Anti-Aging Properties', description: 'Rich in vitamins A and E, helping to reduce fine lines and promote skin elasticity.' },
    { title: 'Healing Properties', description: 'Natural anti-inflammatory compounds help soothe irritated and damaged skin.' },
    { title: 'Quality & Tradition', description: 'Upholding Ghana’s longstanding shea butter heritage, combining craftsmanship with organic standards.' },
    { title: 'Empowerment & Fairness', description: 'Most Ghana shea brands work closely with local women’s cooperatives, ensuring fair trade and sustainable livelihoods.' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
};

export default function Benefits() {
    const leftBenefits = benefits.slice(0, 4);
    const rightBenefits = benefits.slice(4);

    const renderBenefitCards = (items, offset = 0) =>
        items.map((benefit, i) => (
            <motion.div
                key={i + offset}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i + offset}
            >
                <h4 className="text-lg font-semibold text-green-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
        ));

    return (
        <section
            id="benefits"
            aria-label="Shea Butter Benefits"
            className="bg-gradient-to-b from-amber-50 to-white py-12 px-4 sm:px-6 relative scroll-mt-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h3 className="text-green-700 font-semibold text-sm md:text-lg uppercase tracking-wide">
                    Why Choose Us
                </h3>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] font-display">
                    Nature&apos;s Gift to <span className="text-amber-600">Your Skin</span>
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mt-3 font-body">
                    Explore the natural benefits of organic shea butter, beautifully arranged around its essence.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 px-4">
                {/* Left Benefits */}
                <div className="flex flex-col flex-1 w-full">
                    <div className="flex flex-col gap-2 mb-4">
                        {renderBenefitCards(leftBenefits.slice(0, 2))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {renderBenefitCards(leftBenefits.slice(2, 4), 2)}
                    </div>
                </div>

                {/* Center Image */}
                <motion.div
                    className="flex justify-center items-center flex-shrink-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <img
                        src={face5}
                        alt="Shea Butter Glow"
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-amber-200"
                    />
                </motion.div>

                {/* Right Benefits */}
                <div className="flex flex-col flex-1 w-full">
                    <div className="flex flex-col gap-2 mb-4">
                        {renderBenefitCards(rightBenefits.slice(0, 2), 4)}
                    </div>
                    <div className="flex flex-col gap-2">
                        {renderBenefitCards(rightBenefits.slice(2, 4), 6)}
                    </div>
                </div>
            </div>
        </section>
    );
}
