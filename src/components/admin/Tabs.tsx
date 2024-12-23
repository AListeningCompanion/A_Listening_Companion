import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';

interface TabsProps {
  activeTab: 'bookings' | 'messages';
  setActiveTab: (tab: 'bookings' | 'messages') => void;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        <button
          onClick={() => setActiveTab('bookings')}
          className={`${
            activeTab === 'bookings'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
        >
          <Calendar className="w-5 h-5 mr-2" />
          Bookings
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`${
            activeTab === 'messages'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Messages
        </button>
      </nav>
    </div>
  );
}