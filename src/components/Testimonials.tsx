import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      content: "Having someone who truly listens without judgment has made such a difference in my life. I feel heard and understood.",
      author: "Sarah M.",
      role: "Regular Client",
    },
    {
      content: "The walking sessions are brilliant. Being able to talk while moving helps me express myself more naturally.",
      author: "James P.",
      role: "Client",
    },
    {
      content: "I appreciate the flexibility of virtual sessions. It's so convenient yet still maintains that personal connection.",
      author: "Emily R.",
      role: "Virtual Client",
    },
  ];

  return (
    <section id="testimonials" className="bg-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Real experiences from people who found their voice
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}