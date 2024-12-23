import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">How It Works</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}