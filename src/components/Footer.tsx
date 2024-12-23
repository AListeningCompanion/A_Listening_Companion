import React from 'react';
import { Instagram } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Logo textClassName="text-white" iconClassName="w-12 h-12" />
          <nav className="mt-8 flex justify-center space-x-12">
            <a href="#services" className="text-gray-400 hover:text-gray-300">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-gray-300">
              How It Works
            </a>
            <a href="#contact" className="text-gray-400 hover:text-gray-300">
              Contact
            </a>
          </nav>
          <div className="mt-8">
            <a 
              href="https://www.instagram.com/a_listening_companion/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 flex items-center"
            >
              <Instagram className="h-6 w-6" />
              <span className="ml-2">Follow us on Instagram</span>
            </a>
          </div>
          <p className="mt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} A Listening Companion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}