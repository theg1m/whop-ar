// pages/register.js
import { useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import Link from 'next/link';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userRole, setUserRole] = useState('creator'); // Default role
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = 'الاسم الكامل مطلوب.';
    if (!email) {
      newErrors.email = 'البريد الإلكتروني مطلوب.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة.';
    }
    if (!password) {
      newErrors.password = 'كلمة المرور مطلوبة.';
    } else if (password.length < 8) {
      newErrors.password = 'يجب أن تكون كلمة المرور 8 أحرف على الأقل.';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'كلمتا المرور غير متطابقتين.';
    }
    if (!userRole) newErrors.userRole = 'يرجى اختيار نوع الحساب.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registration Data:', { fullName, email, password, userRole });
      // Here you would typically call an API to register the user
      alert('تم إنشاء الحساب بنجاح (محاكاة). تحقق من وحدة التحكم.');
      // Potentially redirect or clear form
    }
  };

  const inputClass = (fieldName) =>
    `shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors[fieldName] ? 'border-red-500 ring-red-500' : 'border-gray-300'}`;

  return (
    <MainLayout>
      <div className="max-w-lg mx-auto mt-8 mb-8 bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">إنشاء حساب جديد</h1>
        <form onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fullName">
              الاسم الكامل <span className="text-red-500">*</span>
            </label>
            <input
              className={inputClass('fullName')}
              id="fullName"
              type="text"
              placeholder="مثال: أحمد محمد"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-describedby="fullNameError"
            />
            {errors.fullName && <p id="fullNameError" className="text-red-500 text-xs italic mt-2">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              البريد الإلكتروني <span className="text-red-500">*</span>
            </label>
            <input
              className={inputClass('email')}
              id="email"
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailError"
            />
            {errors.email && <p id="emailError" className="text-red-500 text-xs italic mt-2">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              كلمة المرور <span className="text-red-500">*</span>
            </label>
            <input
              className={inputClass('password')}
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="passwordError"
            />
            {errors.password && <p id="passwordError" className="text-red-500 text-xs italic mt-2">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
              تأكيد كلمة المرور <span className="text-red-500">*</span>
            </label>
            <input
              className={inputClass('confirmPassword')}
              id="confirmPassword"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-describedby="confirmPasswordError"
            />
            {errors.confirmPassword && <p id="confirmPasswordError" className="text-red-500 text-xs italic mt-2">{errors.confirmPassword}</p>}
          </div>

          {/* User Role Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              أرغب في التسجيل كـ <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 space-x-reverse">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userRole"
                  value="creator"
                  checked={userRole === 'creator'}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="form-radio h-5 w-5 text-green-600 focus:ring-green-500"
                />
                <span className="mr-2 text-gray-700">مبدع (صانع محتوى)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userRole"
                  value="advertiser"
                  checked={userRole === 'advertiser'}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="form-radio h-5 w-5 text-green-600 focus:ring-green-500"
                />
                <span className="mr-2 text-gray-700">معلن (صاحب عمل/مسوق)</span>
              </label>
            </div>
            {errors.userRole && <p className="text-red-500 text-xs italic mt-2">{errors.userRole}</p>}
          </div>

          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-150"
              type="submit"
            >
              إنشاء الحساب
            </button>
          </div>
          <div className="text-center">
            <Link href="/login" legacyBehavior>
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                لديك حساب بالفعل؟ تسجيل الدخول
              </a>
            </Link>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
