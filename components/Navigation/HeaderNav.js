// components/Navigation/HeaderNav.js
import React from 'react';
import Link from 'next/link'; // Next.js link component for client-side navigation

const HeaderNav = () => {
  // Placeholder navigation links based on defined key areas
  const navLinks = [
    { href: '/', label: 'الرئيسية' }, // Home
    { href: '/campaigns', label: 'الحملات' }, // Campaigns
    { href: '/creator-hub', label: 'مركز المبدعين' }, // Creator Hub
    { href: '/advertiser-hub', label: 'مركز المعلنين' }, // Advertiser Hub
    { href: '/login', label: 'تسجيل الدخول' }, // Login
    { href: '/register', label: 'إنشاء حساب' }, // Register
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold hover:text-blue-200 transition-colors">
            منصة الأجر
          </a>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-reverse space-x-6"> {/* space-x-reverse for RTL */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} legacyBehavior>
                <a className="hover:text-blue-200 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-300">
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional: User actions or search bar can be added here later */}
      </div>
    </nav>
  );
};

export default HeaderNav;
