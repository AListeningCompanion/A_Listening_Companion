import React, { useState } from 'react';
import { BookingsList } from './BookingsList';
import { ContactMessages } from './ContactMessages';
import { Tabs } from './Tabs';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'messages'>('bookings');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="px-4 py-6 sm:px-0">
            {activeTab === 'bookings' ? <BookingsList /> : <ContactMessages />}
          </div>
        </div>
      </main>
    </div>
  );
}