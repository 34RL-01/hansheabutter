import React from "react";

export default function WhyChooseUsCard() {
  return (
    <div className="bg-[#020921] min-h-screen text-white font-sans p-10 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-tight">
            Why Choose Us Card <br /> UI Design
          </h1>
          <p className="mt-4 text-3xl font-extrabold text-yellow-400">
            Free UI Kit
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1518300183472-8c54b3f83c9c?auto=format&fit=crop&w=1350&q=80"
              alt="Scenic"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisc
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              <li className="text-cyan-400">
                ◆ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
