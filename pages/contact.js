// pages/contact.js
import MainLayout from '../components/Layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">اتصل بنا</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
          إذا كان لديكم أي استفسارات، يمكنكم التواصل معنا عبر المعلومات المتاحة هنا.
        </p>
        <div className="mt-8 max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                الاسم
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="اسمك"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                البريد الإلكتروني
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="user@example.com"/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                الرسالة
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-32" id="message" placeholder="اكتب رسالتك هنا..."></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button" // Change to type="submit" when form handling is implemented
              >
                إرسال الرسالة
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
