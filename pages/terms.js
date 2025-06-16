// pages/terms.js
import MainLayout from '../components/Layout/MainLayout';

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">الشروط والأحكام</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
          هنا تجدون الشروط والأحكام المتعلقة باستخدام منصة الأجر.
        </p>
        {/* Detailed terms and conditions text would go here */}
      </div>
    </MainLayout>
  );
}
