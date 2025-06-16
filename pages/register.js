// pages/register.js
import MainLayout from '../components/Layout/MainLayout';

export default function RegisterPage() {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">إنشاء حساب جديد</h1>
        <form>
          {/* Add form fields for registration: Name, Email, Password, Confirm Password, Role (Creator/Advertiser) etc. */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              الاسم الكامل
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="الاسم الكامل"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="user@example.com"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              كلمة المرور
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              تأكيد كلمة المرور
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="******************"/>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button" // Change to type="submit" when form handling is implemented
            >
              إنشاء الحساب
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
