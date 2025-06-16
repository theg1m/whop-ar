// components/Layout/AdvertiserDashboardLayout.js
import React, { useEffect } from 'react'; // Added useEffect
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from './MainLayout';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const AdvertiserSidebarLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href || (href === '/advertiser-hub' && router.pathname.startsWith('/advertiser-hub/'));

  return (
    <Link href={href} legacyBehavior>
      <a
        className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-teal-700 hover:text-white ${
          isActive ? 'bg-teal-700 text-white' : 'text-gray-200'
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

const AdvertiserDashboardLayout = ({ children }) => {
  const { isAuthenticated, user } = useAuth(); // Get auth state
  const router = useRouter();

  const sidebarNavLinks = [
    { href: '/advertiser-hub', label: 'لوحة التحكم الرئيسية' },
    { href: '/advertiser-hub/create-campaign', label: 'إنشاء حملة جديدة' },
    { href: '/advertiser-hub/my-campaigns', label: 'حملاتي' },
    { href: '/advertiser-hub/review-submissions', label: 'مراجعة المشاركات' },
    { href: '/advertiser-hub/analytics', label: 'تحليلات الأداء' },
    { href: '/profile', label: 'إعدادات الحساب' },
  ];

  useEffect(() => {
    // 1. Check if authenticated
    if (!isAuthenticated) {
      router.push(`/login?redirect=${router.asPath}`);
      return;
    }

    // 2. Check if user object exists and has the 'advertiser' role
    if (user && user.role !== 'advertiser') {
      console.warn('Unauthorized access attempt to Advertiser Hub by user:', user);
      router.push('/?error=unauthorized_role&message=Access_denied_to_Advertiser_Hub');
    }
  }, [isAuthenticated, user, router]);

  // Loading state while auth checks are performed by useEffect
  if (!isAuthenticated || !user) {
    return (
      <MainLayout>
        <div className="text-center py-20">جاري التحقق من صلاحيات الوصول...</div>
      </MainLayout>
    );
  }

  // Fallback UI if user is authenticated but not an advertiser
  if (user.role !== 'advertiser') {
    return (
      <MainLayout>
        <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-red-600">غير مصرح لك بالدخول</h1>
            <p className="text-gray-600 mt-2">هذه المنطقة مخصصة للمعلنين فقط.</p>
            <button onClick={() => router.push('/')} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              العودة إلى الصفحة الرئيسية
            </button>
        </div>
      </MainLayout>
     );
  }

  // If authenticated and is an advertiser, render the dashboard
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-64 bg-gray-800 text-white p-5 rounded-lg shadow-lg md:sticky md:top-8 self-start">
          <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3 text-teal-400">قائمة المعلنين</h2>
          <nav>
            <ul>
              {sidebarNavLinks.map((link) => (
                <li key={link.href} className="mb-2">
                  <AdvertiserSidebarLink href={link.href}>
                    {link.label}
                  </AdvertiserSidebarLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-grow bg-white p-6 rounded-lg shadow-lg">
          {children}
        </main>
      </div>
    </MainLayout>
  );
};

export default AdvertiserDashboardLayout;
