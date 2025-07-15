"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Star, Heart, Grid, List } from 'lucide-react';

const menPerfumes = [
  {
    id: 1,
    name: "Oud Royale",
    price: "$280",
    image: "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Premium oud with saffron and rose, embodying traditional Middle Eastern luxury",
    rating: 5.0,
    reviews: 89,
    category: "Oriental Oud",
    notes: ["Oud", "Saffron", "Rose", "Amber"],
    intensity: "Very Strong",
    longevity: "12+ hours",
    isNew: false,
    isBestseller: true
  },
  {
    id: 2,
    name: "Cedar Storm",
    price: "$195",
    image: "https://images.pexels.com/photos/1238021/pexels-photo-1238021.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Bold cedar and black pepper with warm cardamom and vetiver base",
    rating: 4.8,
    reviews: 156,
    category: "Woody Spice",
    notes: ["Cedar", "Black Pepper", "Cardamom", "Vetiver"],
    intensity: "Strong",
    longevity: "10-12 hours",
    isNew: true,
    isBestseller: false
  },
  {
    id: 3,
    name: "Ocean Depth",
    price: "$165",
    image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Fresh marine accord with sea salt, driftwood, and clean musk",
    rating: 4.7,
    reviews: 203,
    category: "Fresh Marine",
    notes: ["Sea Salt", "Marine Accord", "Driftwood", "Clean Musk"],
    intensity: "Moderate",
    longevity: "8-10 hours",
    isNew: false,
    isBestseller: true
  },
  {
    id: 4,
    name: "Citrus Energy",
    price: "$145",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Energizing blend of bergamot, lime, and ginger with woody undertones",
    rating: 4.6,
    reviews: 127,
    category: "Citrus Sport",
    notes: ["Bergamot", "Lime", "Ginger", "White Woods"],
    intensity: "Light",
    longevity: "6-8 hours",
    isNew: true,
    isBestseller: false
  },
  {
    id: 5,
    name: "Spice Master",
    price: "$220",
    image: "https://images.pexels.com/photos/1779417/pexels-photo-1779417.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Complex spice blend with cinnamon, nutmeg, and warm sandalwood",
    rating: 4.9,
    reviews: 94,
    category: "Woody Spice",
    notes: ["Cinnamon", "Nutmeg", "Sandalwood", "Tobacco"],
    intensity: "Strong",
    longevity: "11-13 hours",
    isNew: false,
    isBestseller: true
  },
  {
    id: 6,
    name: "Aqua Sport",
    price: "$135",
    image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Athletic freshness with mint, eucalyptus, and energizing citrus",
    rating: 4.5,
    reviews: 178,
    category: "Citrus Sport",
    notes: ["Mint", "Eucalyptus", "Lemon", "White Musk"],
    intensity: "Light",
    longevity: "5-7 hours",
    isNew: false,
    isBestseller: false
  }
];

const categories = ["All", "Oriental Oud", "Woody Spice", "Fresh Marine", "Citrus Sport"];

export default function MenPerfumes() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredPerfumes = menPerfumes.filter(perfume => 
    selectedCategory === "All" || perfume.category === selectedCategory
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-900 dark:to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Men's Fragrances
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our distinguished collection of masculine fragrances, designed for the 
                confident and sophisticated modern gentleman.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-yellow-600 text-white'
                        : 'bg-muted text-muted-foreground hover:bg-yellow-600/10 hover:text-yellow-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-yellow-600 text-white' : 'text-muted-foreground'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-yellow-600 text-white' : 'text-muted-foreground'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredPerfumes.map((perfume) => (
                <div
                  key={perfume.id}
                  className={`group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                    viewMode === 'grid' ? 'hover:scale-105' : 'flex gap-6'
                  }`}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
                        viewMode === 'grid' ? 'w-full h-64' : 'w-full h-48'
                      }`}
                    />
                    
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {perfume.isNew && (
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          New
                        </span>
                      )}
                      {perfume.isBestseller && (
                        <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Bestseller
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleFavorite(perfume.id)}
                      className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(perfume.id) ? 'text-red-500 fill-current' : 'text-gray-600'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-yellow-600 font-medium">{perfume.category}</span>
                      <span className="text-sm text-muted-foreground">{perfume.intensity}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {perfume.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {perfume.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-1">Key Notes:</p>
                      <div className="flex flex-wrap gap-1">
                        {perfume.notes.slice(0, 3).map((note, index) => (
                          <span
                            key={index}
                            className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
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
                      <span className="text-sm text-muted-foreground">
                        {perfume.longevity}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors duration-200">
                        Try Sample
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}