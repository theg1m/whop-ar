// components/Navigation/HeaderNav.js
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import { useRouter } from 'next/router'; // Import useRouter

const HeaderNav = () => {
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout function
  const router = useRouter(); // Initialize router

  // Define links based on auth state
  const commonLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/campaigns', label: 'الحملات' },
  ];

  const guestLinks = [
    ...commonLinks,
    { href: '/creator-hub', label: 'مركز المبدعين' }, // Or keep separate based on UX
    { href: '/advertiser-hub', label: 'مركز المعلنين' }, // Or keep separate
    { href: '/login', label: 'تسجيل الدخول' },
    { href: '/register', label: 'إنشاء حساب' },
  ];

  const authenticatedLinks = [
    ...commonLinks,
    { href: '/creator-hub', label: 'مركز المبدعين' }, // Example, adjust based on role
    { href: '/advertiser-hub', label: 'مركز المعلنين' }, // Example, adjust based on role
    { href: '/profile', label: 'ملفي الشخصي' },
    // Logout is handled by a button, not a link in this array
  ];

  const navLinks = isAuthenticated ? authenticatedLinks : guestLinks;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold hover:text-blue-200 transition-colors">
            منصة الأجر
          </a>
        </Link>

        <ul className="flex items-center space-x-reverse space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} legacyBehavior>
                <a className="hover:text-blue-200 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-300">
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
          {isAuthenticated && (
            <li>
              <button
                onClick={() => { logout(); router.push('/login'); }} // Use the new handler
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                تسجيل الخروج
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;
