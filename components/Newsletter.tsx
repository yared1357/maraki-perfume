"use client";

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-card rounded-2xl p-8 shadow-xl">
          <Mail className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter and be the first to know about new fragrances, 
            exclusive offers, and perfumery insights.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}