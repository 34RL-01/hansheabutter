import React from 'react';
import { Facebook, Instagram, MapPin, Mail, Clock } from 'lucide-react';
import face5 from '../assets/images/face5.jpg';
import tiktokIcon from '../assets/images/tiktokIcon.png';
import whatsappIcon from '../assets/images/whatsappIcon.png';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from 'react-router';

const ContactUs = () => {
  return (
  <>
    <Navbar />
    <section
      className="py-20 bg-gradient-to-b from-green-50 to-amber-50"
    >
      {/* Soft overlay for text readability */}
      <div className="absolute inset-0 bg-white/5  z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 pt-5">
        {/* Left: Contact Info */}
        <div className='pt-20'>
          <h2 className="text-4xl font-semibold mb-2 text-[#4e2d32] italic">hi, you!</h2>
          <h3 className="text-2xl font-bold mb-6 text-yellow-700">get in touch</h3>

          <p className="mb-4 italic">
            We'd love to hear from you! Whether it's product questions, service requests, or partnerships.
            <a href="mailto:hansshea3@gmail.com" className="text-amber-600 font-medium ml-1">
              hansshea3@gmail.com
            </a>
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 text-amber-600" />
              <span className="text-[#4e2d32] font-medium">
                GS-0155-3255, Pokuase, Accra (Retail Store)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={18} className="mt-1 text-amber-600" />
              <span className="text-[#4e2d32] font-medium">
                Office Hours: Mon – Fri : 10am – 6pm
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="mt-1 text-amber-600" />
              <a
                href="mailto:hansshea3@gmail.com"
                className="hover:underline text-[#4e2d32] font-medium"
              >
                hansshea3@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-6">
            {/* WhatsApp */}
            <Link to
              ="https://wa.me/233540321094"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-amber-600 p-2 rounded-full bg-white shadow"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            </Link>

            {/* TikTok */}
            <Link to
              ="https://www.tiktok.com/@hans.shea3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-amber-600 p-2 rounded-full bg-white shadow"
            >
              <img src={tiktokIcon} alt="TikTok" className="w-5 h-5" />
            </Link>

            {/* Facebook */}
            <Link to
              ="https://www.facebook.com/share/1DJU9hdN62/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-amber-600 p-2 rounded-full bg-white shadow"
            >
              <Facebook size={18} className="text-[#3b5998]" />
            </Link>

            {/* Instagram */}
            <Link to
              ="https://www.instagram.com/hans.sheabutter?igsh=MWVpM3JmcWRrZHBybg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-amber-600 p-2 rounded-full bg-white shadow"
            >
              <Instagram size={18} className="text-[#E1306C]" />
            </Link>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">full name *</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full bg-[#f3f2ee] p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">email *</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full bg-[#f3f2ee] p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium mb-1">subject *</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full bg-[#f3f2ee] p-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">message *</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message..."
                className="w-full bg-[#f3f2ee] p-3 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md uppercase tracking-wider font-semibold"
            >
              submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative z-10 mt-16 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-green-800 mb-4 text-center">Find Us on the Map</h3>
        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-amber-100">
          <iframe
            title="Hans Organic Shea Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.4388650904716!2d-0.19690068405911106!3d5.614818595941655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c2b5b0a9cf3%3A0xe20c8ef9b4d97cf6!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1628774982443"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[300px]"
          ></iframe>
        </div>
      </div>
    </section>
    <Footer/>
  </>
  );
};

export default ContactUs;
