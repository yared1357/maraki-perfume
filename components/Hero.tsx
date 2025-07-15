"use client";

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury perfume background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Maraki <span className="text-yellow-400">Perfume</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover the art of luxury fragrances crafted with precision and passion. 
          Each scent tells a story of elegance and sophistication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Explore Collection
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
}