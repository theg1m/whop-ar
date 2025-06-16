// pages/advertiser-hub.js
import MainLayout from '../components/Layout/MainLayout';

export default function AdvertiserHubPage() {
  return (
    <MainLayout>
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">مركز المعلنين</h1>
        <p className="text-gray-600">
          هنا يمكنك إنشاء حملاتك، مراجعة المحتوى المقدم، وتتبع أداء حملاتك الإعلانية.
        </p>
        {/* Further navigation or components for advertiser dashboard will go here */}
      </div>
    </MainLayout>
  );
}
