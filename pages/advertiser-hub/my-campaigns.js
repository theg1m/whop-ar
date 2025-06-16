// pages/advertiser-hub/my-campaigns.js
import React from 'react';
import AdvertiserDashboardLayout from '../../components/Layout/AdvertiserDashboardLayout';
import Link from 'next/link';

// Mock campaign data for advertisers (can be expanded)
const mockAdvertiserCampaigns = [
  {
    id: 'adv-camp-001',
    title: 'حملة إطلاق المنتج الجديد (Summer Collection)',
    status: 'نشطة', // Active
    submissionsCount: 15,
    budget: '5000 ريال',
    startDate: '2024-07-01',
    endDate: '2024-07-31',
  },
  {
    id: 'adv-camp-002',
    title: 'تحدي الطهي الصحي (رمضان)',
    status: 'مكتملة', // Completed
    submissionsCount: 35,
    budget: '2000 ريال',
    startDate: '2024-03-10',
    endDate: '2024-04-09',
  },
  {
    id: 'adv-camp-003',
    title: 'مراجعات تطبيق الألعاب الجديد',
    status: 'قيد المراجعة', // Pending Review / Setup
    submissionsCount: 0,
    budget: '1000 ريال',
    startDate: '2024-08-01',
    endDate: '2024-08-15',
  }
];

export default function MyCampaignsPage() {
  // Auth protection for this page will be handled by AdvertiserDashboardLayout in a later step.

  return (
    <AdvertiserDashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">حملاتي الإعلانية</h1>
        <Link href="/advertiser-hub/create-campaign" legacyBehavior>
          <a className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-5 rounded-md shadow-sm transition-colors">
            + إنشاء حملة جديدة
          </a>
        </Link>
      </div>

      {mockAdvertiserCampaigns.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-xl text-center">
          <p className="text-gray-600 text-lg mb-4">لم تقم بإنشاء أي حملات بعد.</p>
          <p className="text-gray-500">
            ابدأ الآن بإنشاء حملتك الأولى للوصول إلى المبدعين وتحقيق أهدافك التسويقية.
          </p>
        </div>
      ) : (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">اسم الحملة</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المشاركات</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الميزانية</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ البدء</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ الانتهاء</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">إجراءات</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockAdvertiserCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campaign.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        campaign.status === 'نشطة' ? 'bg-green-100 text-green-800' :
                        campaign.status === 'مكتملة' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800' // For 'قيد المراجعة' or other statuses
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{campaign.submissionsCount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.budget}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.startDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.endDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {/* Placeholder for actions like View, Edit, Analytics */}
                      <a href="#" className="text-teal-600 hover:text-teal-800 mr-3">عرض</a>
                      <a href="#" className="text-indigo-600 hover:text-indigo-800">تعديل</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdvertiserDashboardLayout>
  );
}
