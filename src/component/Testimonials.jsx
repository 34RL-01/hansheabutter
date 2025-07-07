import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

import hansheas3 from '../assets/images/hansheas3.jpg';
import hanshea1 from '../assets/images/hanshea1.jpg';
import hansheass1 from '../assets/images/hansheass1.jpg';
import sheahan2 from '../assets/images/sheahan2.jpg';

const testimonials = [
    {
        image: hansheas3,
        title: 'Amazing Face Treatment!',
        name: 'Akosua.',
        feedback: 'The hydrating facial left my skin glowing for days. Highly recommend!',
        bg: 'bg-[#fdf4eb]',
    },
    {
        image: hanshea1,
        title: 'Body Treatment Bliss',
        name: 'Yaa.',
        feedback:'This shea butter has completely transformed my dry skin! I love knowing it is ethically sourced and supports women in Ghana.',
        bg: 'bg-[#fdf4eb]',
    },
    // {
    //     image: hansheass1,
    //     title: 'So Refreshed!',
    //     name: 'Ama.',
    //     feedback: 'The hydration therapy was soothing and rejuvenating. Loved every second!',
    //     bg: 'bg-[#fbeeee]',
    // },
    // {
    //     image: sheahan2,
    //     title: 'So Refreshed!',
    //     name: 'Akua.',
    //     feedback: 'The hydration therapy was soothing and rejuvenating. Loved every second!',
    //     bg: 'bg-[#fbeeee]',
    // },
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
    const total = testimonials.length;

    const next = () => setCurrent((prev) => (prev + 1) % total);
    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
    const goTo = (index) => setCurrent(index);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5000);
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    return (
        <section className="bg-gradient-to-b from-amber-100 to-amber-50 text-white py-16 px-4 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">What Our Clients Say</h2>
                <p className="text-amber-700 mb-8 max-w-xl mx-auto">
                    Real experiences from real people. Discover how our skincare services made a difference.
                </p>

                {/* Carousel */}
                <div className="relative overflow-hidden rounded-3xl shadow-lg">
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
                                />
                                <div className="text-left">
                                    <h3 className="text-xl font-semibold">{review.title}</h3>
                                    <p className="text-sm mt-2 italic">"{review.feedback}"</p>
                                    <p className="mt-4 font-semibold text-[#7e4d4d]">— {review.name}</p>
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