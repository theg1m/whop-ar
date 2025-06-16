// pages/profile.js
import MainLayout from '../components/Layout/MainLayout';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useRouter } from 'next/router'; // To redirect if not authenticated
import { useEffect } from 'react';

export default function ProfilePage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    // Render nothing or a loading indicator while redirecting or if user is null
    return null;
  }

  return (
    <MainLayout>
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          مرحباً بك، {user.name || 'المستخدم'}!
        </h1>
        <p className="text-gray-600">
          هذه هي صفحة ملفك الشخصي.
        </p>
        <p className="text-gray-600 mt-2">
          دورك: {user.role === 'creator' ? 'مبدع' : 'معلن'}
        </p>
        {/* More profile information can be added here */}
      </div>
    </MainLayout>
  );
}
