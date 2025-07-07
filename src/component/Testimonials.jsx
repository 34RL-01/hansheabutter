import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import hansimage4 from '../assets/images/hansimage4.jpg';
import hansimage5 from '../assets/images/hansimage5.jpg';
import hansimage3 from '../assets/images/hansimage3.jpg';


const testimonials = [
    {
        image: hansimage4,
        title: 'Amazing Face Treatment!',
        name: 'Emily R.',
        feedback: 'The hydrating facial left my skin glowing for days. Highly recommend!',
        bg: 'bg-[#fdf4eb]',
    },
    {
        image: hansimage5,
        title: 'Body Treatment Bliss',
        name: 'Sophia M.',
        feedback: 'This shea butter has completely transformed my dry skin! I love knowing it is ethically sourced and supports women in Ghana. The quality is absolutely amazing.',
        bg: 'bg-[#fdf4eb]',
    },
    {
        image: hansimage3,
        title: 'So Refreshed!',
        name: 'Liam A.',
        feedback: 'The hydration therapy was soothing and rejuvenating. Loved every second!',
        bg: 'bg-[#fbeeee]',
    },
    //   {
    //     image: require('../assets/images/acne-solution.jpg'), // Add this image to your assets folder
    //     title: 'Clear Skin Journey',
    //     name: 'Noah T.',
    //     feedback: 'After struggling with acne for years, their treatment made a real difference.',
    //     bg: 'bg-[#fdf4eb]',
    //   },
];


const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
    const total = testimonials.length;

    const next = () => setCurrent((prev) => (prev + 1) % total);
    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
    const goTo = (index) => setCurrent(index);

    useEffect(() => {
        const id = setTimeout(() => {
            next();
        }, 5000);
        timeoutRef.current = id;

        return () => clearTimeout(id);
    }, [current]);

    const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
});


    return (
        <section className=" bg-gradient-to-b from-amber-100 to-amber-50 text-white py-16 px-4 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">What Our Clients Say</h2>
                <p className="text-amber-700 mb-8 max-w-xl mx-auto">
                    Real experiences from real people. Discover how our skincare services made a difference.
                </p>

                {/* Carousel */}
                <div {...handlers} className="relative overflow-hidden rounded-3xl shadow-lg">
                    <div
                        className={`flex transition-transform duration-700 ease-in-out`}
                        style={{ transform: `translateX(-${current * 100}%)`, width: `${total * 100}%` }}
                    >
                        {testimonials.map((review, index) => (
                            <div
                                key={index}
                                className={`w-full flex-shrink-0 ${review.bg} text-[#4e2d32] p-6 md:p-10 flex flex-col md:flex-row items-center`}
                            >
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
                                    loading="lazy"
                                />

                                <div className="text-left">
                                    <h3 className="text-xl font-semibold">{review.title}</h3>
                                    <p className="text-sm mt-2 italic">"{review.feedback}"</p>
                                    <p className="mt-4 font-semibold text-[#491717]">— {review.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                        <button
                            onClick={prev}
                            className="text-[#f2b6a0] bg-white/20 hover:bg-white/30 p-3 rounded-full transition mx-2"
                        >
                            &#8592;
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                        <button
                            onClick={next}
                            className="text-[#f2b6a0] bg-white/20 hover:bg-white/30 p-3 rounded-full transition mx-2"
                        >
                            &#8594;
                        </button>
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-6 space-x-3">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#f2b6a0]' : 'bg-white/30'
                                } transition`}
                            onClick={() => goTo(idx)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
