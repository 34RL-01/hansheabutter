import React from "react";


export default function Navbar() {
  return (
    <header class="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow transition-all duration-300">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-amber-800">Hans</span>
            <span class="text-2xl font-light text-green-700 ml-1">Organic</span>
          </div>

          <nav class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-700 hover:text-amber-700 transition-colors">Home</a>
            <a href="#about" class="text-gray-700 hover:text-amber-700 transition-colors">About</a>
            <a href="#products" class="text-gray-700 hover:text-amber-700 transition-colors">Products</a>
            <a href="#benefits" class="text-gray-700 hover:text-amber-700 transition-colors">Benefits</a>
            <a href="#contact" class="text-gray-700 hover:text-amber-700 transition-colors">Contact</a>
          </nav>

          <div class="md:hidden w-full bg-white shadow-lg">
            <nav class="flex flex-col space-y-4 p-4">
              <a href="#home" class="text-gray-700 hover:text-amber-700 transition-colors">Home</a>
              <a href="#about" class="text-gray-700 hover:text-amber-700 transition-colors">About</a>
              <a href="#products" class="text-gray-700 hover:text-amber-700 transition-colors">Products</a>
              <a href="#benefits" class="text-gray-700 hover:text-amber-700 transition-colors">Benefits</a>
              <a href="#contact" class="text-gray-700 hover:text-amber-700 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

