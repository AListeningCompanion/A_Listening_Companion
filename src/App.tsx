import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Slogans } from './components/Slogans';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Dashboard } from './components/admin/Dashboard';

// In a real application, you would use proper authentication
const isAdmin = window.location.pathname === '/admin';

function App() {
  if (isAdmin) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Slogans />
        <Services />
        <HowItWorks />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;