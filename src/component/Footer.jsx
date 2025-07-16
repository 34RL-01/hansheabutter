import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import tiktokIcon from '../assets/images/tiktokIcon.png';
import whatsappIcon from '../assets/images/whatsappIcon.png';
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* Brand & Socials */}
        <div>
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-amber-400">Hans Shea</h2>
            <span className="text-2xl font-light text-green-400 ml-1">Organic</span>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Bringing you the finest organic shea butter from Ghana, ethically sourced and crafted with love for your skin's health.
          </p>

          <div className="flex gap-3">
            {/* WhatsApp */}
            <a href="https://wa.me/233540321094" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-amber-600 p-2.5 rounded-full transition">
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@hans.shea3" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-amber-600 p-2.5 rounded-full transition">
              <img src={tiktokIcon} alt="TikTok" className="w-5 h-5" />
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1DJU9hdN62/" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-amber-600 p-2.5 rounded-full transition">
              <Facebook size={18} />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/hans.sheabutter?igsh=MWVpM3JmcWRrZHBybg==" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-amber-600 p-2.5 rounded-full transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className= "gap-50">
          <h3 className="text-lg font-semibold mb-4 text-amber-400">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/#about" className="hover:text-white">Our Story</Link></li>
            <li><Link to="/#benefits" className="hover:text-white">Benefits</Link></li>
            <li><Link to="/#products" className="hover:text-white">Product</Link></li>
            <li><a href="#" className="hover:text-white">Testimonial</a></li>
            <li><a href="https://www.facebook.com/share/1DJU9hdN62/" target="_blank" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><Mail size={18} className="text-amber-400" /> hansshea3gmail.com</li>
            <li className="flex items-center gap-2"><Phone size={18} className="text-amber-400" /> +233 54 032 1094</li>
            <li className="flex items-center gap-2"><Phone size={18} className="text-amber-400" /> +39 328 342 3747</li>
            <li className="flex gap-2"><MapPin size={18} className="text-amber-400 mt-1" />
              <span>GS-0155-3255<br />Pokuase, Accra</span>
            </li>
            <li><Link to="/contact-us" className="hover:text-white">Contact Support</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span>© 2025 Hans Shea Organic. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Made by</span>
            <span className="text-yellow-400">like34rl</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
