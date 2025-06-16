// pages/campaigns.js
import MainLayout from '../components/Layout/MainLayout';

export default function CampaignsPage() {
  return (
    <MainLayout>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">الحملات المتاحة</h1>
        {/* Placeholder content for campaign listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">اسم الحملة {item}</h2>
              <p className="text-gray-600">وصف مختصر للحملة وأهدافها. هذا النص هو مثال لشكل الوصف الذي سيظهر هنا.</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
