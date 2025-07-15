"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedFragrances from '@/components/FeaturedFragrances';
import About from '@/components/About';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <FeaturedFragrances />
          <About />
          <Features />
          <ContactForm />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}