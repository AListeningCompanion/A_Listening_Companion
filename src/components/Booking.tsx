import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, CreditCard, Shield, Mail, Instagram } from 'lucide-react';
import { sessionPrices, getSessionPrice } from '../utils/pricing';
import { getTimeSlots, formatTimeSlot } from '../utils/timeSlots';

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: null,
    time: '',
    duration: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setBookingData({ date: null, time: '', duration: '', email: '' });
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book Your Session
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Take the first step towards being heard
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <form
            name="booking"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="booking" />
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={bookingData.email}
                onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                placeholder="We'll send your Google Meet link here"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <div className="mt-1 relative">
                <DatePicker
                  selected={bookingData.date}
                  onChange={(date) => setBookingData({...bookingData, date})}
                  minDate={new Date()}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  name="date"
                />
                <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <div className="mt-1 relative">
                <select
                  name="time"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={bookingData.time}
                  onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                  required
                >
                  <option value="">Select a time</option>
                  {getTimeSlots().map((time) => (
                    <option key={time} value={time}>
                      {formatTimeSlot(time)}
                    </option>
                  ))}
                </select>
                <Clock className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <select
                name="duration"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={bookingData.duration}
                onChange={(e) => setBookingData({...bookingData, duration: e.target.value})}
                required
              >
                <option value="">Select duration</option>
                {sessionPrices.map((session) => (
                  <option key={session.duration} value={session.duration}>
                    {session.label}
                  </option>
                ))}
              </select>
            </div>

            {bookingData.duration && (
              <div className="text-center text-lg font-medium text-indigo-600">
                Amount to pay: ₹{getSessionPrice(bookingData.duration) / 100}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Book Session
            </button>

            {submitted && (
              <div className="text-green-600 text-center">
                Thank you for booking! We'll contact you shortly with the session details.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}