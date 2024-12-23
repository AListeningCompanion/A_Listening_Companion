import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, User } from 'lucide-react';

// This would typically come from your backend
const mockBookings = [
  {
    id: 1,
    clientName: "John Doe",
    date: new Date(2024, 2, 15),
    time: "10:00",
    duration: "30",
    sessionType: "Virtual Meeting",
    status: "Confirmed"
  },
  // Add more mock bookings as needed
];

export function BookingsList() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Recent Bookings</h2>
        <p className="mt-1 text-sm text-gray-500">
          Overview of all session bookings
        </p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {mockBookings.map((booking) => (
            <li key={booking.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                  <p className="ml-2 text-sm font-medium text-gray-900">{booking.clientName}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">
                      {format(booking.date, 'MMM d, yyyy')}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">
                      {booking.time} ({booking.duration} min)
                    </span>
                  </div>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Session Type: {booking.sessionType}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}