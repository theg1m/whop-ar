// pages/index.js
import MainLayout from '../components/Layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">مرحباً بكم في منصة الأجر</h1>
        <p className="text-lg text-gray-600">
          المكان الأمثل لإدارة حملات المحتوى والتفاعل مع المبدعين في العالم العربي.
        </p>
      </div>
    </MainLayout>
  );
}
