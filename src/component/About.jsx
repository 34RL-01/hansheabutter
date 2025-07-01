import { Heart, Leaf, Users } from 'lucide-react';
import clearGgirl from '../assets/images/clearGgirl.jpeg';


export default function About() {
return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={clearGgirl}
                alt="Hans Shea Organic butter"
                className="w-full h-[500px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Card
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="text-red-500" size={24} />
                <span className="font-semibold text-gray-800">Made with Love</span>
              </div>
              <p className="text-sm text-gray-600">From Ghana's women cooperatives to your skin</p>
            </div> */}
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6">
              <span className="text-amber-600 font-semibold text-lg">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
                Tradition Meets 
                <span className="text-green-700 block">Modern Care</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, we've been working directly with women's cooperatives in Northern Ghana, 
              where the art of shea butter production has been passed down through generations. Our commitment 
              goes beyond just creating premium skincare products.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in empowering communities, preserving traditions, and bringing you the purest, 
              most nourishing shea butter that nature has to offer. Every jar tells a story of sustainability, 
              quality, and hope.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Leaf className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">100% Organic</h3>
                  <p className="text-sm text-gray-600">No chemicals, just pure nature</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Users className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Ethically Sourced</h3>
                  <p className="text-sm text-gray-600">Supporting local communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};