import React from 'react';

export function Slogans() {
  const slogans = [
    "For the times you need to be heard",
    "Your safe space to share",
    "Where understanding begins with listening",
    "Every story deserves a caring listener"
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {slogans.map((slogan, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <p className="text-xl font-medium text-white italic">
                "{slogan}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}