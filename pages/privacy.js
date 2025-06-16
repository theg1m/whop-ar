// pages/privacy.js
import MainLayout from '../components/Layout/MainLayout';

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">سياسة الخصوصية</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
          نحن نهتم بخصوصيتكم. هنا يمكنكم الاطلاع على سياسة الخصوصية لمنصة الأجر.
        </p>
        {/* Detailed privacy policy text would go here */}
      </div>
    </MainLayout>
  );
}
