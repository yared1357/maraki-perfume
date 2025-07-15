"use client";

import { Star } from 'lucide-react';

const fragrances = [
  {
    id: 1,
    name: "Midnight Elegance",
    price: "$180",
    image: "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "A sophisticated blend of dark vanilla and exotic spices",
    rating: 4.9,
    category: "Evening"
  },
  {
    id: 2,
    name: "Golden Dawn",
    price: "$165",
    image: "https://images.pexels.com/photos/1238021/pexels-photo-1238021.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Fresh citrus notes with warm amber undertones",
    rating: 4.8,
    category: "Day"
  },
  {
    id: 3,
    name: "Royal Oud",
    price: "$250",
    image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Luxurious oud with rose and saffron accents",
    rating: 5.0,
    category: "Premium"
  },
  {
    id: 4,
    name: "Ocean Breeze",
    price: "$145",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Refreshing marine notes with subtle florals",
    rating: 4.7,
    category: "Fresh"
  }
];

export default function FeaturedFragrances() {
  return (
    <section id="fragrances" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Fragrances
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our signature collection of luxury perfumes, each carefully crafted 
            to evoke emotions and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fragrances.map((fragrance) => (
            <div
              key={fragrance.id}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {fragrance.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {fragrance.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {fragrance.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(fragrance.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {fragrance.rating}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">
                    {fragrance.price}
                  </span>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}