// pages/creator-hub.js
import MainLayout from '../components/Layout/MainLayout';

export default function CreatorHubPage() {
  return (
    <MainLayout>
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">مركز المبدعين</h1>
        <p className="text-gray-600">
          هنا يمكنك تصفح الحملات، تقديم المحتوى، تتبع أداءك وإدارة أرباحك.
        </p>
        {/* Further navigation or components for creator dashboard will go here */}
      </div>
    </MainLayout>
  );
}
