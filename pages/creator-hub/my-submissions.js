// pages/creator-hub/my-submissions.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import CreatorDashboardLayout from '../../components/Layout/CreatorDashboardLayout';

export default function MySubmissionsPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login?redirect=/creator-hub/my-submissions');
    } else if (user && user.role !== 'creator') {
      // Optional: Redirect if not a creator
      // router.push('/?error=unauthorized_creator_access');
      console.warn('User is not a creator but accessing My Submissions page:', user);
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated) {
    return <div className="text-center py-20">جاري التحقق من المستخدم...</div>;
  }

  return (
    <CreatorDashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">مشاركاتي</h1>
        <p className="text-gray-600 mb-4">
          هنا ستتمكن من رؤية جميع مشاركاتك في الحملات المختلفة وحالة كل منها (مقبولة، مرفوضة، قيد المراجعة، مدفوعة).
        </p>
        {/* Placeholder for submissions list */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
          <p className="text-gray-500">سيتم عرض قائمة بمشاركاتك هنا قريباً.</p>
        </div>
      </div>
    </CreatorDashboardLayout>
  );
}
