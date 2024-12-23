import React from 'react';
import { MessageCircle, Shield, Clock, Calendar } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "Anonymous Sessions",
      description: "Completely confidential listening sessions where your identity remains protected.",
      icon: Shield,
    },
    {
      title: "Private Google Meet",
      description: "Secure video sessions via Google Meet with your personal listening companion.",
      icon: MessageCircle,
    },
    {
      title: "Flexible Duration",
      description: "Choose from 15, 30, 60, or 90-minute sessions based on your needs.",
      icon: Clock,
    },
    {
      title: "Easy Scheduling",
      description: "Book sessions at times that work best for your schedule.",
      icon: Calendar,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Professional and confidential listening services
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}