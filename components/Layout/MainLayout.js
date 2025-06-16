// components/Layout/MainLayout.js
import React from 'react';
import HeaderNav from '../Navigation/HeaderNav'; // Import HeaderNav
import Footer from '../Navigation/Footer';       // Import Footer

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" dir="rtl"> {/* Ensure dir="rtl" is on the main container if not on body/html */}
      <HeaderNav /> {/* Use HeaderNav component */}

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer /> {/* Use Footer component */}
    </div>
  );
};

export default MainLayout;
