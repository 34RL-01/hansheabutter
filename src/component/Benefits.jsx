import React from 'react';
import face4 from '../assets/images/face4.jpg';

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

export default function Benefits() {
    const handleScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="benefits" className="bg-gradient-to-b from-green-50 to-amber-500 py-20 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left Section: Headings and Benefits */}
                <div className="flex flex-col gap-5 justify-center">
                    <div>
                        <h1 className="text-green-600 font-bold text-lg font-body">Why Choose Us</h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] font-display">
                            Nature&apos;s Gift to{' '}
                            <span className="text-amber-600 block">Your Skin</span>
                        </h2>
                        <p className="text-base text-gray-600 max-w-md font-body">
                            Discover the incredible benefits of pure organic shea butter and why it’s been trusted for centuries as nature’s ultimate skin care solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                            >
                                <h4 className="font-semibold text-[#0A2540] text-base font-display">
                                    {benefit.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-body">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="flex justify-center">
                    <img
                        src={face4}
                        alt="Hans Organic Shea Butter"
                        className="w-full max-h-[900px] object-cover rounded-tr-xl rounded-bl-xl shadow-xl transition-all duration-500 hover:rounded-tl-xl hover:rounded-br-xl hover:rounded-tr-none hover:rounded-bl-none hover:shadow-2xl" />
                </div>

            </div>
        </section>
    );
}
