"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Star, Crown, Sparkles, Palette, Award } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: "Signature Series",
    description: "Our flagship collection representing the pinnacle of Maraki craftsmanship",
    icon: Crown,
    perfumes: [
      {
        id: 1,
        name: "Maraki No. 1",
        price: "$350",
        image: "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        description: "The original masterpiece that started our legacy",
        rating: 5.0,
        reviews: 234,
        notes: ["Rose", "Oud", "Amber", "Musk"],
        isLimited: true
      },
      {
        id: 2,
        name: "Golden Legacy",
        price: "$295",
        image: "https://images.pexels.com/photos/1238021/pexels-photo-1238021.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        description: "A tribute to our founder's vision",
        rating: 4.9,
        reviews: 189,
        notes: ["Saffron", "Vanilla", "Sandalwood", "Bergamot"],
        isLimited: false
      }
    ]
  },
  {
    id: 2,
    name: "Royal Heritage",
    description: "Traditional luxury fragrances inspired by ancient perfumery traditions",
    icon: Award,
    perfumes: [
      {
        id: 3,
        name: "Sultan's Dream",
        price: "$420",
        image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        description: "Inspired by the royal courts of the Ottoman Empire",
        rating: 5.0,
        reviews: 156,
        notes: ["Oud", "Rose", "Saffron", "Amber"],
        isLimited: true
      },
      {
        id: 4,
        name: "Persian Garden",
        price: "$380",
        image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        description: "The essence of ancient Persian gardens",
        rating: 4.8,
        reviews: 134,
        notes: ["Jasmine", "Pomegranate", "Musk", "Cedar"],
        isLimited: false
      }
    ]
  },
  {
    id: 3,
    name: "Modern Classics",
    description: "Contemporary interpretations of timeless fragrance profiles",
    icon: Sparkles,
    perfumes: [
      {
        id: 5,
        name: "Urban Elegance",
        price: "$225",
        image: "https://images.pexels.com/photos/1779417/pexels-photo-1779417.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        description: "Modern sophistication for the urban lifestyle",
        rating: 4.7,
        reviews: 298,
        notes: ["Bergamot", "Black Tea", "Vetiver", "Ambergris"],
        isLimited: false
      },
      {
        id: 6,
        name: "Midnight Noir",
        price: "$265",
        image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        description: "Dark and mysterious for evening occasions",
        rating: 4.9,
        reviews: 167,
        notes: ["Black Pepper", "Leather", "Tobacco", "Vanilla"],
        isLimited: false
      }
    ]
  },
  {
    id: 4,
    name: "Artisan Craft",
    description: "Limited edition fragrances created by master perfumers",
    icon: Palette,
    perfumes: [
      {
        id: 7,
        name: "Master's Choice",
        price: "$480",
        image: "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        description: "Hand-crafted by our head perfumer",
        rating: 5.0,
        reviews: 89,
        notes: ["Rare Oud", "Bulgarian Rose", "Himalayan Saffron", "White Ambergris"],
        isLimited: true
      },
      {
        id: 8,
        name: "Artisan's Secret",
        price: "$520",
        image: "https://images.pexels.com/photos/1238021/pexels-photo-1238021.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        description: "A secret formula passed down through generations",
        rating: 5.0,
        reviews: 67,
        notes: ["Mysore Sandalwood", "Taif Rose", "Cambodian Oud", "Natural Musk"],
        isLimited: true
      }
    ]
  }
];

export default function Collections() {
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Perfume Collections
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our curated collections, each telling a unique story through 
                the art of fragrance and representing different facets of luxury perfumery.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  onClick={() => setSelectedCollection(selectedCollection === collection.id ? null : collection.id)}
                  className="group cursor-pointer bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600/10 rounded-full mb-4 group-hover:bg-yellow-600/20 transition-colors duration-300">
                      <collection.icon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {collection.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="mt-4 text-yellow-600 text-sm font-medium">
                      {collection.perfumes.length} Fragrances
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Collection Details */}
            {selectedCollection && (
              <div className="bg-card rounded-2xl p-8 shadow-xl">
                {collections
                  .filter(collection => collection.id === selectedCollection)
                  .map((collection) => (
                    <div key={collection.id}>
                      <div className="flex items-center mb-8">
                        <collection.icon className="h-8 w-8 text-yellow-600 mr-3" />
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">
                            {collection.name}
                          </h2>
                          <p className="text-muted-foreground">
                            {collection.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {collection.perfumes.map((perfume) => (
                          <div
                            key={perfume.id}
                            className="group bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <div className="relative overflow-hidden">
                              <img
                                src={perfume.image}
                                alt={perfume.name}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              {perfume.isLimited && (
                                <div className="absolute top-4 left-4">
                                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    Limited Edition
                                  </span>
                                </div>
                              )}
                            </div>
                            
                            <div className="p-6">
                              <h3 className="text-xl font-semibold text-foreground mb-2">
                                {perfume.name}
                              </h3>
                              
                              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                {perfume.description}
                              </p>
                              
                              <div className="mb-4">
                                <p className="text-xs text-muted-foreground mb-2">Signature Notes:</p>
                                <div className="flex flex-wrap gap-1">
                                  {perfume.notes.map((note, index) => (
                                    <span
                                      key={index}
                                      className="text-xs bg-yellow-600/10 text-yellow-600 px-2 py-1 rounded-full"
                                    >
                                      {note}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="flex items-center mb-4">
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < Math.floor(perfume.rating)
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground ml-2">
                                  {perfume.rating} ({perfume.reviews} reviews)
                                </span>
                              </div>
                              
                              <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl font-bold text-foreground">
                                  {perfume.price}
                                </span>
                                {perfume.isLimited && (
                                  <span className="text-xs text-red-600 font-medium">
                                    Only 50 bottles remaining
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex gap-2">
                                <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                                  View Details
                                </button>
                                <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors duration-200">
                                  Sample
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}