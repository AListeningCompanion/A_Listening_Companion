import React from 'react';
import { Mail, Calendar } from 'lucide-react';
import { format } from 'date-fns';

// This would typically come from your backend
const mockMessages = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane@example.com",
    message: "I'm interested in booking a session but have some questions first.",
    date: new Date(2024, 2, 14),
    status: "Unread"
  },
  // Add more mock messages as needed
];

export function ContactMessages() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Contact Messages</h2>
        <p className="mt-1 text-sm text-gray-500">
          Recent inquiries from potential clients
        </p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {mockMessages.map((message) => (
            <li key={message.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-900">{message.name}</p>
                    <p className="text-sm text-gray-500">{message.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">
                      {format(message.date, 'MMM d, yyyy')}
                    </span>
                  </div>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    message.status === 'Unread' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {message.status}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {message.message}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}