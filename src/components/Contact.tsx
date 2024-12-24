import React, { useState } from 'react';
import { Mail, Instagram } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch 
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Ready to start your journey? We're here to listen.
          </p>
        </div>

        <div className="mt-20 max-w-lg mx-auto">
         <form
            action="https://formspree.io/f/movvqpqd"  // Replace with your Formspree link
		    method="POST"
			onSubmit={handleSubmit}
  			className="grid grid-cols-1 gap-6"
		 >
 		 	{/* Hidden fields for Formspree customizations */}
  			<input type="hidden" name="_next" value="https://your-website.com/thank-you" />  {/* Replace with your thank-you page URL */}
  			<input type="hidden" name="_subject" value="New booking request from contact form" />

  			{/* Form fields */}
  			<div>
    			<label htmlFor="name" className="block text-sm font-medium text-gray-700">
      				Name
    			</label>
    			<input
      				type="text"
      				name="name"
				    id="name"
				    value={formData.name}
				    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				    placeholder="Your name"
				    required
  			   />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email
    </label>
    <input
      type="email"
      name="email"
      id="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="you@example.com"
      required
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="What would you like to talk about?"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    Send Message
  </button>

  {submitted && (
    <div className="text-green-600 text-center">
      Thank you for your message! We'll get back to you soon.
    </div>
  )}
</form>


          <div className="mt-12 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 sm:justify-center">
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-gray-500">alisteningcompanion@gmail.com</span>
            </div>
            <div className="flex items-center justify-center">
              <Instagram className="h-6 w-6 text-indigo-600" />
              <a 
                href="https://www.instagram.com/a_listening_companion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-3 text-gray-500 hover:text-indigo-600"
              >
                @a_listening_companion
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
