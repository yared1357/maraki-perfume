"use client";

import { Truck, Shield, Headphones, Gift } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Free Worldwide Shipping",
    description: "Complimentary shipping on all orders over $100 to any destination worldwide."
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "Every fragrance comes with a certificate of authenticity and quality assurance."
  },
  {
    icon: Headphones,
    title: "Expert Consultation",
    description: "Our fragrance experts are available 24/7 to help you find your perfect scent."
  },
  {
    icon: Gift,
    title: "Luxury Gift Packaging",
    description: "Beautiful gift boxes and personalized messages for every special occasion."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Maraki Perfume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We go beyond creating exceptional fragrances to provide an unparalleled 
            luxury experience from purchase to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}