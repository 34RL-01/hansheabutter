import React from 'react';
import { motion } from 'framer-motion';
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

const fadeSlideVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 60,
      damping: 12,
    },
  }),
};

const Benefits = () => {
  return (
    <section
      id="benefits"
      aria-label="Shea Butter Benefits"
      className="py-12 px-4 sm:px-6 relative scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.span
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlideVariant}
          className="text-amber-600 font-semibold md:text-lg"
        >
          Why Choose Us
        </motion.span>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlideVariant}
          className="text-3xl md:text-5xl font-bold text-[#0A2540] font-display mt-2 mb-6"
        >
          Nature&apos;s Gift to <span className="text-green-700">Your Skin</span>
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlideVariant}
          className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mt-3 font-body"
        >
          Explore the natural benefits of organic shea butter, beautifully arranged around its essence.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-8 md:w-1/3">
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-yellow-100 transition"
              custom={index + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideVariant}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-yellow-500 p-3 rounded-full shadow-lg">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className="w-full h-full md:w-1/4 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img
            src={face4}
            alt="Shea Butter"
            className="object-contain w-full h-full rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 md:w-1/3">
          {benefits.slice(3).map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-yellow-100 transition"
              custom={index + 6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeSlideVariant}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-yellow-500 p-3 rounded-full shadow-lg">{benefit.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
