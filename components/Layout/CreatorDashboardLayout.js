// components/Layout/CreatorDashboardLayout.js
import React, { useEffect } from 'react'; // Added useEffect
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from './MainLayout';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const CreatorSidebarLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href || (href === '/creator-hub' && router.pathname.startsWith('/creator-hub/'));


  return (
    <Link href={href} legacyBehavior>
      <a
        className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white ${
          isActive ? 'bg-indigo-700 text-white' : 'text-gray-200'
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

const CreatorDashboardLayout = ({ children }) => {
  const { isAuthenticated, user, logout } = useAuth(); // Added logout for convenience if needed
  const router = useRouter();

  // Sidebar links (could be further filtered by specific creator permissions later)
  const sidebarNavLinks = [
    { href: '/creator-hub', label: 'لوحة التحكم الرئيسية' },
    { href: '/creator-hub/campaigns', label: 'اكتشف الحملات' },
    { href: '/creator-hub/my-submissions', label: 'مشاركاتي' },
    { href: '/creator-hub/earnings', label: 'أرباحي' },
    { href: '/profile', label: 'إعدادات الحساب' }, // General profile page
  ];

  useEffect(() => {
    // 1. Check if authenticated
    if (!isAuthenticated) {
      // Preserve the intended path for redirection after login
      router.push(`/login?redirect=${router.asPath}`);
      return; // Stop further execution in this effect
    }

    // 2. Check if user object exists and has the 'creator' role
    // This check runs only if isAuthenticated is true.
    if (user && user.role !== 'creator') {
      // If authenticated but not a creator, redirect to home or an 'unauthorized' page.
      // Or, could show a specific message within the layout.
      console.warn('Unauthorized access attempt to Creator Hub by user:', user);
      router.push('/?error=unauthorized_role&message=Access_denied_to_Creator_Hub');
    }
    // If user is null while isAuthenticated is true (should ideally not happen with current AuthContext logic),
    // it might indicate a brief moment during context update or an issue.
    // For now, if user is null and isAuthenticated, we let it pass, assuming role check will catch it.
    // A more robust check might be needed if user object loading is delayed.

  }, [isAuthenticated, user, router]);


  // Render a loading state or null if authentication is still pending or user is not yet available
  // This prevents rendering the dashboard content prematurely before checks are complete.
  if (!isAuthenticated || !user) {
    // This loading state is shown while useEffect is evaluating and potentially redirecting.
    return (
      <MainLayout>
        <div className="text-center py-20">جاري التحقق من صلاحيات الوصول...</div>
      </MainLayout>
    );
  }

  // If authenticated but not a creator, this part might still render briefly before redirection.
  // The useEffect should handle redirection quickly.
  // An alternative is to return a specific "Unauthorized" component here if user.role !== 'creator'.
  if (user.role !== 'creator') {
    // This provides a fallback message if redirection is slow or if direct rendering of unauthorized state is preferred.
     return (
      <MainLayout>
        <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-red-600">غير مصرح لك بالدخول</h1>
            <p className="text-gray-600 mt-2">هذه المنطقة مخصصة للمبدعين فقط.</p>
            <button onClick={() => router.push('/')} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              العودة إلى الصفحة الرئيسية
            </button>
        </div>
      </MainLayout>
     );
  }


  // If authenticated and is a creator, render the dashboard layout
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-64 bg-gray-800 text-white p-5 rounded-lg shadow-lg md:sticky md:top-8 self-start">
          <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3">قائمة المبدعين</h2>
          <nav>
            <ul>
              {sidebarNavLinks.map((link) => (
                <li key={link.href} className="mb-2">
                  <CreatorSidebarLink href={link.href}>
                    {link.label}
                  </CreatorSidebarLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-grow bg-white p-6 rounded-lg shadow-lg">
          {children} {/* Page content goes here */}
        </main>
      </div>
    </MainLayout>
  );
};

export default CreatorDashboardLayout;
