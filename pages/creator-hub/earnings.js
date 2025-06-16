// pages/creator-hub/earnings.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import CreatorDashboardLayout from '../../components/Layout/CreatorDashboardLayout';

export default function EarningsPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login?redirect=/creator-hub/earnings');
    } else if (user && user.role !== 'creator') {
      // Optional: Redirect if not a creator
      // router.push('/?error=unauthorized_creator_access');
      console.warn('User is not a creator but accessing Earnings page:', user);
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated) {
    return <div className="text-center py-20">جاري التحقق من المستخدم...</div>;
  }

  return (
    <CreatorDashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">أرباحي</h1>
        <p className="text-gray-600 mb-4">
          في هذه الصفحة، يمكنك تتبع أرباحك من الحملات المختلفة، طلب سحب الأرباح، وعرض سجل المدفوعات.
        </p>
        {/* Placeholder for earnings summary and withdrawal options */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
          <p className="text-gray-500">سيتم عرض تفاصيل أرباحك وخيارات السحب هنا قريباً.</p>
        </div>
      </div>
    </CreatorDashboardLayout>
  );
}
