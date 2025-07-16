import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import hansheas3 from '../assets/images/hansheas3.jpg';
import hanshea1 from '../assets/images/hanshea1.jpg';
import hansheass1 from '../assets/images/hansheass1.jpg';
import sheahan2 from '../assets/images/sheahan2.jpg';
import tst1 from '../assets/images/tst1.jpg';
import tst2 from '../assets/images/tst2.jpg';
import tst3 from '../assets/images/tst3.jpg';
import tst4 from '../assets/images/tst4.jpg';
import tst5 from '../assets/images/tst5.jpg';

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
    name: 'Stacy.',
    feedback: 'The hydration therapy was soothing and rejuvenating. Loved every second!',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: sheahan2,
    title: 'Incredible Glow!',
    name: 'Comfort.',
    feedback: 'My skin has never felt smoother. The experience was beyond relaxing.',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: tst1,
    title: 'Winter Skin Savior!',
    name: 'Stephanie.',
    feedback: 'I usually suffer from cracked hands every winter, but this shea butter healed them in just a few days. It’s thick, rich, and melts right into the skin',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: tst2,
    title: 'Natural Glow Restored!',
    name: 'Gifty.',
    feedback: 'I have been using Hans Shea for two weeks, and my skin already looks brighter and more even. I love how its completely natural.',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: tst3,
    title: 'A perfect Makeup Base!',
    name: 'Akosua B.',
    feedback: 'I use a little as a moisturizer before applying makeup and it gives me this perfect, dewy finish. Plus, it keeps my skin hydrated all day.',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: tst4,
    title: 'Pure and Powerful!',
    name: 'Adwoa A.',
    feedback: 'You can tell it’s unrefined and pure — just the way nature intended. It smells earthy and real, and my skin is so much happier with it.',
    bg: 'bg-[#fdf4eb]',
  },
  {
    image: tst5,
    title: 'My Baby’s Skin is So Soft',
    name: 'Akua O.',
    feedback: 'I use it on my baby after every bath. Her skin is so smooth now, and diaper rash is a thing of the past. I won’t use anything else!',
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
    <section className="bg-gradient-to-b from-amber-100 to-green-100 text-white py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">What Our Clients Say</h2>
        <p className="text-amber-700 mb-8 max-w-xl mx-auto">
          Real experiences from real people. Discover how our skincare services made a difference.
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl shadow-lg w-full max-w-full">
          <div
            className={`transition-opacity duration-700 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className={`w-full ${currentReview.bg} text-[#4e2d32]`}>
              <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-center">
                {/* Image Fade */}
                <div
                  className={`transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'
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
                  className={`transition-opacity duration-700 delay-150 ${fade ? 'opacity-100' : 'opacity-0'
                    } text-center md:text-left max-w-xs md:max-w-md`}
                >
                  <h3 className="text-xl font-semibold">{currentReview.title}</h3>
                  <p className="text-sm mt-2 italic">"{currentReview.feedback}"</p>
                  <p className="mt-4 font-semibold text-[#491717]">— {currentReview.name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Arrow */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prev}
              aria-label="Previous Slide"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white text-[#046d12] rounded-full shadow-lg hover:bg-amber-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={next}
              aria-label="Next Slide"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white text-[#046d12] rounded-full shadow-lg hover:bg-amber-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>




        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? 'bg-green-600' : 'bg-gray-300'
              } transition-colors duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      {/* CTA */}
      <div className="mt-16 text-center mx-auto">
        <div className="bg-gradient-to-r from-green-100 to-amber-50 shadow-lg p-8 ">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied customers who have made the switch to natural,
            ethically-sourced skin care.
          </p>
          <Link
            to={`/contact-us`}
            className="inline-block bg-gradient-to-r from-amber-600 to-green-600 hover:from-amber-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
