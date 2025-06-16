// pages/login.js
import MainLayout from '../components/Layout/MainLayout';

export default function LoginPage() {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">تسجيل الدخول</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="user@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              كلمة المرور
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button" // Change to type="submit" when form handling is implemented
            >
              دخول
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
