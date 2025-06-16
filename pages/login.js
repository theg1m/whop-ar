// pages/login.js
import { useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useRouter } from 'next/router'; // Import useRouter for redirection

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login } = useAuth(); // Get login function from AuthContext
  const router = useRouter(); // Initialize router

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'البريد الإلكتروني مطلوب.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة.';
    }
    if (!password) {
      newErrors.password = 'كلمة المرور مطلوبة.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => { // Make handleSubmit async if login involves async ops
    e.preventDefault();
    if (validateForm()) {
      console.log('Login Credentials:', { email, password });
      // Simulate API call; for now, pass a role.
      // In a real app, the API response would include the user's role.
      login({
        name: email.split('@')[0],
        email: email, // Good to store email in context too
        role: 'creator' // Defaulting to 'creator' for simulation.
                       // Could be 'advertiser' for testing advertiser flows.
      });
      router.push('/profile');
    }
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-8 mb-8 bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">تسجيل الدخول</h1>
        <form onSubmit={handleSubmit} noValidate>
          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              البريد الإلكتروني <span className="text-red-500">*</span>
            </label>
            <input
              className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500 ring-red-500' : 'border-gray-300'}`}
              id="email"
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailError"
            />
            {errors.email && <p id="emailError" className="text-red-500 text-xs italic mt-2">{errors.email}</p>}
          </div>
          {/* Password Input */}
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              كلمة المرور <span className="text-red-500">*</span>
            </label>
            <input
              className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500 ring-red-500' : 'border-gray-300'}`}
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="passwordError"
            />
            {errors.password && <p id="passwordError" className="text-red-500 text-xs italic mt-2">{errors.password}</p>}
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-150"
              type="submit"
            >
              دخول
            </button>
          </div>
          {/* Link to Register Page */}
          <div className="text-center">
            <Link href="/register" legacyBehavior>
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                ليس لديك حساب؟ إنشاء حساب جديد
              </a>
            </Link>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
