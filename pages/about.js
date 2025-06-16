// pages/about.js
import MainLayout from '../components/Layout/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">من نحن</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
          مزيد من المعلومات حول منصة الأجر، رؤيتنا، ومهمتنا في خدمة السوق العربي.
        </p>
      </div>
    </MainLayout>
  );
}
