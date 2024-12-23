import React from 'react';
import { ClipboardCheck, UserCheck, Clock, Heart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      title: "Book a Session",
      description: "Choose the type of session that works best for you and select a convenient time.",
      icon: ClipboardCheck,
    },
    {
      title: "Meet Your Companion",
      description: "Connect with your dedicated listening companion in a safe, judgment-free space.",
      icon: UserCheck,
    },
    {
      title: "Share Your Story",
      description: "Take all the time you need to express yourself. We're here to listen.",
      icon: Clock,
    },
    {
      title: "Feel Supported",
      description: "Experience the relief and clarity that comes from being truly heard.",
      icon: Heart,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Your journey to being heard starts with four simple steps
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-center text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-gray-200 w-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}