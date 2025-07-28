import React from 'react';
import { Droplet, Leaf, Sprout, Flower } from 'lucide-react';
import face4 from '../assets/images/face4.jpg';

const benefits = [
    {
        title: 'Deep Moisturization',
        description: 'Penetrates deeply into the skin to lock in moisture and prevent dryness all day.',
        icon: <Droplet className="text-white w-5 h-5" />,
    },
    {
        title: 'Rich in Nutrients',
        description: 'Packed with vitamins A and E, promoting healthy skin regeneration.',
        icon: <Leaf className="text-white w-5 h-5" />,
    },
     {
        title: 'Empowerment & Fairness',
        description: 'Most Ghana shea brands work closely with local women’s cooperatives, ensuring fair trade and sustainable livelihoods.',
        icon: <Sprout className="text-white w-5 h-5" />,
    },
    {
        title: 'Naturally Sourced',
        description: 'Harvested from organic shea nuts in Ghana with ethical and sustainable methods.',
        icon: <Sprout className="text-white w-5 h-5" />,
    },
    {
        title: 'Skin Protection',
        description: 'Forms a natural barrier that shields skin from harsh environmental elements.',
        icon: <Flower className="text-white w-5 h-5" />,
    },
    {
        title: 'Anti-Aging Properties',
        description: 'Rich in vitamins A and E, helping to reduce fine lines and promote skin elasticity.',
        icon: <Leaf className="text-white w-5 h-5" />,
    },
];

const Benefits = () => {
    return (

        <section
            id="benefits"
            aria-label="Shea Butter Benefits"
            className=" py-12 px-4 sm:px-6 relative scroll-mt-20 overflow-hidden"
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

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="flex flex-col gap-8 md:w-1/3">
                    {benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="bg-yellow-500 p-3 rounded-full">
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                                <p className="text-sm">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full h-full md:w-1/4 relative">
                    <img src={face4} alt="Shea Butter" className="object-contain w-full h-full rounded-2xl" />
                </div>

                <div className="flex flex-col gap-8 md:w-1/3">
                    {benefits.slice(3).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="bg-yellow-500 p-3 rounded-full">
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                                <p className="text-sm">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
