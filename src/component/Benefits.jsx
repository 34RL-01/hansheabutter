import { Droplets, Leaf, Heart, Shield, Sparkles, Sun } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            icon: <Droplets className="text-blue-500" size={32} />,
            title: "Deep Moisturization",
            description: "Penetrates deep into skin layers, providing long-lasting hydration and preventing dryness."
        },
        {
            icon: <Leaf className="text-green-500" size={32} />,
            title: "100% Natural",
            description: "Pure, unrefined shea butter with no artificial additives, chemicals, or preservatives."
        },
        {
            icon: <Heart className="text-red-500" size={32} />,
            title: "Ethically Sourced",
            description: "Directly sourced from women's cooperatives in Ghana, supporting fair trade practices."
        },
        {
            icon: <Shield className="text-purple-500" size={32} />,
            title: "Skin Protection",
            description: "Natural SPF properties and antioxidants help protect against environmental damage."
        },
        {
            icon: <Sparkles className="text-yellow-500" size={32} />,
            title: "Anti-Aging Properties",
            description: "Rich in vitamins A and E, helping to reduce fine lines and promote skin elasticity."
        },
        {
            icon: <Sun className="text-orange-500" size={32} />,
            title: "Healing Properties",
            description: "Natural anti-inflammatory compounds help soothe irritated and damaged skin."
        }
    ];

    return (
        <section id="benefits" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-semibold text-lg">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
                        Nature's Gift to
                        <span className="text-amber-600 block">Your Skin</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover the incredible benefits of pure organic shea butter and why it's been
                        trusted for centuries as nature's ultimate skin care solution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>

                            <div className="mt-6 h-1 w-12 bg-gradient-to-r from-amber-400 to-green-400 rounded-full group-hover:w-20 transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Ready to Experience the Difference?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Join thousands of satisfied customers who have made the switch to natural,
                            ethically-sourced skin care.
                        </p>
                        <button className="bg-gradient-to-r from-amber-600 to-green-600 hover:from-amber-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                            Order now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
