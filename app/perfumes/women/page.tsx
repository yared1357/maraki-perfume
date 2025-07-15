"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Star, Heart, Filter, Grid, List } from 'lucide-react';

const womenPerfumes = [
  {
    id: 1,
    name: "Rose Elegance",
    price: "$195",
    originalPrice: "$220",
    image: "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "A sophisticated blend of Bulgarian rose petals with hints of peony and white musk",
    rating: 4.9,
    reviews: 127,
    category: "Floral Bouquet",
    notes: ["Bulgarian Rose", "Peony", "White Musk", "Bergamot"],
    intensity: "Moderate",
    longevity: "8-10 hours",
    isNew: true,
    isBestseller: false
  },
  {
    id: 2,
    name: "Jasmine Dreams",
    price: "$175",
    image: "https://images.pexels.com/photos/1238021/pexels-photo-1238021.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Enchanting jasmine with delicate lily of the valley and soft vanilla base",
    rating: 4.8,
    reviews: 89,
    category: "Floral Bouquet",
    notes: ["Jasmine", "Lily of the Valley", "Vanilla", "Sandalwood"],
    intensity: "Light",
    longevity: "6-8 hours",
    isNew: false,
    isBestseller: true
  },
  {
    id: 3,
    name: "Oriental Mystique",
    price: "$240",
    image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Exotic blend of saffron, amber, and precious oud with rose undertones",
    rating: 5.0,
    reviews: 156,
    category: "Oriental Mystique",
    notes: ["Saffron", "Amber", "Oud", "Rose"],
    intensity: "Strong",
    longevity: "12+ hours",
    isNew: false,
    isBestseller: true
  },
  {
    id: 4,
    name: "Citrus Bloom",
    price: "$155",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Fresh bergamot and grapefruit with floral heart and clean musk",
    rating: 4.7,
    reviews: 203,
    category: "Fresh Citrus",
    notes: ["Bergamot", "Grapefruit", "White Flowers", "Clean Musk"],
    intensity: "Light",
    longevity: "5-7 hours",
    isNew: true,
    isBestseller: false
  },
  {
    id: 5,
    name: "Woody Grace",
    price: "$210",
    image: "https://images.pexels.com/photos/1779417/pexels-photo-1779417.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Elegant sandalwood with cedar, vetiver, and a touch of iris",
    rating: 4.8,
    reviews: 94,
    category: "Woody Elegance",
    notes: ["Sandalwood", "Cedar", "Vetiver", "Iris"],
    intensity: "Moderate",
    longevity: "9-11 hours",
    isNew: false,
    isBestseller: false
  },
  {
    id: 6,
    name: "Vanilla Orchid",
    price: "$185",
    image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    description: "Luxurious vanilla with exotic orchid and warm amber base",
    rating: 4.9,
    reviews: 178,
    category: "Oriental Mystique",
    notes: ["Vanilla", "Orchid", "Amber", "Tonka Bean"],
    intensity: "Moderate",
    longevity: "10-12 hours",
    isNew: false,
    isBestseller: true
  }
];

const categories = ["All", "Floral Bouquet", "Oriental Mystique", "Fresh Citrus", "Woody Elegance"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Best Rated"];

export default function WomenPerfumes() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredPerfumes = womenPerfumes.filter(perfume => 
    selectedCategory === "All" || perfume.category === selectedCategory
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Women's Fragrances
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our exquisite collection of feminine fragrances, crafted to celebrate 
                the elegance and sophistication of the modern woman.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Category Filters */}
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

              {/* Controls */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

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
                    
                    {/* Badges */}
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

                    {/* Favorite Button */}
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
                    
                    {/* Notes */}
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
                    
                    {/* Rating and Reviews */}
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
                    
                    {/* Price and Longevity */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">
                          {perfume.price}
                        </span>
                        {perfume.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {perfume.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {perfume.longevity}
                      </span>
                    </div>
                    
                    {/* Action Buttons */}
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