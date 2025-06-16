// pages/advertiser-hub/index.js
import React from 'react';
import AdvertiserDashboardLayout from '../../components/Layout/AdvertiserDashboardLayout';
import Link from 'next/link';
// Auth protection for this page will be handled by AdvertiserDashboardLayout in a later step.
// For now, we assume the layout will enforce it.

export default function AdvertiserHubMainPage() {
  return (
    <AdvertiserDashboardLayout>
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">لوحة تحكم المعلنين</h1>
        <p className="text-lg text-gray-700 mb-8">
          مرحباً بك في مساحتك الخاصة لإدارة حملاتك الإعلانية، والتواصل مع المبدعين، وتحقيق أهدافك التسويقية.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card for Creating a New Campaign */}
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3">إنشاء حملة جديدة</h2>
            <p className="mb-4">
              ابدأ الآن بإعداد حملتك الإعلانية خطوة بخطوة. حدد أهدافك، ميزانيتك، ومتطلبات المحتوى.
            </p>
            <Link href="/advertiser-hub/create-campaign" legacyBehavior>
              <a className="inline-block bg-white text-teal-600 font-semibold py-2 px-5 rounded-md hover:bg-gray-100 transition-colors">
                ابدأ الإنشاء
              </a>
            </Link>
          </div>

          {/* Card for Viewing My Campaigns */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3">حملاتي الحالية</h2>
            <p className="mb-4">
              اطلع على جميع حملاتك النشطة والسابقة. تتبع الأداء، راجع المشاركات، وقم بإدارة ميزانيتك.
            </p>
            <Link href="/advertiser-hub/my-campaigns" legacyBehavior>
              <a className="inline-block bg-white text-indigo-600 font-semibold py-2 px-5 rounded-md hover:bg-gray-100 transition-colors">
                عرض الحملات
              </a>
            </Link>
          </div>

          {/* Add more cards/links as other features are developed, e.g.:
          <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3">مراجعة المشاركات</h2>
            <p className="mb-4">
              قم بمراجعة وتقييم المحتوى المقدم من المبدعين لحملاتك.
            </p>
            <Link href="/advertiser-hub/review-submissions" legacyBehavior>
              <a className="inline-block bg-white text-orange-600 font-semibold py-2 px-5 rounded-md hover:bg-gray-100 transition-colors">
                مراجعة الآن
              </a>
            </Link>
          </div>
          */}
        </div>
      </div>
    </AdvertiserDashboardLayout>
  );
}
