"use client";

import { Award, Globe, Users, Sparkles } from 'lucide-react';

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Users, value: "1M+", label: "Happy Customers" },
  { icon: Sparkles, value: "100+", label: "Unique Fragrances" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Art of Perfumery
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over two decades, Maraki Perfume has been at the forefront of luxury 
              fragrance creation. Our master perfumers combine traditional techniques 
              with innovative approaches to craft scents that transcend time and culture.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each fragrance in our collection is a testament to our commitment to 
              excellence, using only the finest ingredients sourced from around the world. 
              From the delicate petals of Bulgarian roses to the rich oud of the Middle East, 
              every element is carefully selected to create unforgettable olfactory experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1779417/pexels-photo-1779417.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Perfume crafting process"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}