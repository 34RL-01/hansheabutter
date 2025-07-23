import React, { useState } from 'react';
import { MapPin, Mail, Clock } from 'lucide-react';
// import { Helmet } from 'react-helmet';
import tiktokIcon from '../assets/images/tiktokIcon.png';
import whatsappIcon from '../assets/images/whatsappIcon.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import ContactNavbar from '../component/ContactNavbar';
import Footer from '../component/Footer';

export default function ContactUs() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpwlpovj', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>Contact Us | Hans Organic Shea Butter</title>
        <meta
          name="description"
          content="Get in touch with Hans Organic Shea Butter for product questions, partnerships, or general info. Located in Accra, Ghana."
        />
      </Helmet> */}

      <ContactNavbar />

      <section className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 pt-5 px-4 sm:px-6">
          {/* Contact Info */}
          <div className="pt-20">
            <h2 className="text-4xl font-semibold mb-2 text-[#3a1f21] italic">hi, you!</h2>
            <h3 className="text-2xl font-bold mb-6 text-yellow-700">get in touch</h3>
            <p className="mb-4 italic">
              We'd love to hear from you! Whether it's product questions, service requests, or partnerships.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-2 text-amber-600" />
                <span className="text-[#4e2d32] font-medium">
                  GC-128-9356,<br />Pokuase, Accra (Retail Store), Ghana.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="mt-2 text-amber-600" />
                <span className="text-[#4e2d32] font-medium">
                  Office Hours<br />Mon – Fri : 10am – 6pm
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

            <div className="flex gap-3 mt-6">
              {[{
                href: "https://wa.me/233540321094", icon: whatsappIcon, label: "WhatsApp"
              }, {
                href: "https://www.facebook.com/share/1DJU9hdN62/", icon: facebook, label: "Facebook"
              }, {
                href: "https://www.tiktok.com/@hans.shea3", icon: tiktokIcon, label: "TikTok"
              }, {
                href: "https://www.instagram.com/hans.sheabutter?igsh=MWVpM3JmcWRrZHBybg==", icon: instagram, label: "Instagram"
              }, {
                href: "https://www.linkedin.com/in/hannahboateng", icon: linkedin, label: "LinkedIn"
              }].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 p-2 rounded-full bg-white shadow transition"
                >
                  <img src={icon} alt={`Visit us on ${label}`} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {success ? (
              <div className="p-6 bg-green-100 text-green-800 rounded shadow-md">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-[#f3f2ee] p-3 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-[#f3f2ee] p-3 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-[#f3f2ee] p-3 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Type your message..."
                    className="w-full bg-[#f3f2ee] p-3 rounded-md"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 text-white py-3 px-6 rounded-md uppercase tracking-wider font-semibold shadow-md transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="relative z-10 mt-16 max-w-full mx-auto px-4 sm:px-6">
        <h3 className="text-xl font-bold text-green-800 mb-4 text-center">Find Us on the Map</h3>
        <div className="overflow-hidden shadow-lg border-2 border-amber-100">
          <iframe
            title="Hans Organic Shea Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.4388650904716!2d-0.19690068405911106!3d5.614818595941655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c2b5b0a9cf3%3A0xe20c8ef9b4d97cf6!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1628774982443"
            allowFullScreen
            loading="lazy"
            className="w-full h-[350px]"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
