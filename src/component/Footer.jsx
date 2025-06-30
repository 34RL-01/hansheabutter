import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() { 
 return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-amber-400">Hans</span>
              <span className="text-2xl font-light text-green-400 ml-1">Organic</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bringing you the finest organic shea butter from Ghana, 
              ethically sourced and crafted with love for your skin's health.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pure Shea Butter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Infused Blends</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gift Sets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Size</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fair Trade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-300">hello@hansorganic.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 mt-1" />
                <span className="text-gray-300">
                  123 Natural Way<br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>

            {/* Support Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-green-400">Support</h4>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>&copy; 2024 Hans Organic. All rights reserved.</span>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>from Ghana</span>
              <span className="text-yellow-400">🇬🇭</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}