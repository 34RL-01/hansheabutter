import React, { useState, useEffect } from 'react';
import hansheas3 from '../assets/images/hansheas3.jpg';
import hanshea1 from '../assets/images/hanshea1.jpg';
import hansheass1 from '../assets/images/hansheass1.jpg';
import sheahan2 from '../assets/images/sheahan2.jpg';

const testimonials = [
  {
    image: hansheas3,
    title: 'Amazing Face Treatment!',
    name: 'Emily R.',
    feedback: 'The hydrating facial left my skin glowing for days. Highly recommend!',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: hanshea1,
    title: 'Body Treatment Bliss',
    name: 'Sophia M.',
    feedback:
      'This shea butter has completely transformed my dry skin! I love knowing it is ethically sourced and supports women in Ghana. The quality is absolutely amazing.',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: hansheass1,
    title: 'So Refreshed!',
    name: 'Liam A.',
    feedback: 'The hydration therapy was soothing and rejuvenating. Loved every second!',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: sheahan2,
    title: 'Incredible Glow!',
    name: 'Akosua B.',
    feedback: 'My skin has never felt smoother. The experience was beyond relaxing.',
    bg: 'bg-[#fdf4eb]',
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const total = testimonials.length;

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setFade(true);
    }, 100);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
      setFade(true);
    }, 100);
  };

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentReview = testimonials[current];

  return (
    <section className="bg-gradient-to-b from-amber-100 to-amber-50 text-white py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">What Our Clients Say</h2>
        <p className="text-amber-700 mb-8 max-w-xl mx-auto">
          Real experiences from real people. Discover how our skincare services made a difference.
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl shadow-lg w-full max-w-full">
          <div
            className={`transition-opacity duration-700 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full ${currentReview.bg} text-[#4e2d32]`}>
              <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-center">
                {/* Image Fade */}
                <div
                  className={`transition-opacity duration-700 ${
                    fade ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={currentReview.image}
                    alt={currentReview.name}
                    className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
                  />
                </div>

                {/* Text Fade */}
                <div
                  className={`transition-opacity duration-700 delay-150 ${
                    fade ? 'opacity-100' : 'opacity-0'
                  } text-center md:text-left max-w-xs md:max-w-md`}
                >
                  <h3 className="text-xl font-semibold">{currentReview.title}</h3>
                  <p className="text-sm mt-2 italic">"{currentReview.feedback}"</p>
                  <p className="mt-4 font-semibold text-[#491717]">— {currentReview.name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              onClick={prev}
              className="text-[#f2b6a0] bg-white/20 hover:bg-white/30 p-3 rounded-full transition mx-2"
            >
              &#8592;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              onClick={next}
              className="text-[#f2b6a0] bg-white/20 hover:bg-white/30 p-3 rounded-full transition mx-2"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
