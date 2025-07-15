"use client";

import { useState } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPerfumesOpen, setIsPerfumesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Perfumes', href: '#fragrances', hasDropdown: true },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const perfumeCategories = [
    { name: 'For Women', href: '/perfumes/women' },
    { name: 'For Men', href: '/perfumes/men' },
    { name: 'Collections', href: '/perfumes/collections' },
  ];
  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-yellow-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                Maraki <span className="text-yellow-600">Perfume</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setIsPerfumesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsPerfumesOpen(false)}
                >
                  <a
                    href={item.href}
                    className="text-foreground hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  
                  {item.hasDropdown && isPerfumesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border/40 rounded-lg shadow-lg overflow-hidden">
                      {perfumeCategories.map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          className="block px-4 py-3 text-sm font-semibold text-foreground hover:text-yellow-600 hover:bg-muted/50 transition-colors duration-200 border-b border-border/20 last:border-b-0"
                        >
                          {category.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border/40">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-yellow-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-2 pb-2">
                      {perfumeCategories.map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          className="text-foreground hover:text-yellow-600 block px-3 py-2 text-sm font-semibold transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}