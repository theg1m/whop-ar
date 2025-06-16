// components/Navigation/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">منصة الأجر</h3>
            <p className="text-sm">
              مكافآت المحتوى وتحقيق الدخل من المحتوى الذي ينشئه المستخدمون للسوق الناطق باللغة العربية.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/about" legacyBehavior><a className="hover:text-white transition-colors">من نحن</a></Link></li>
              <li><Link href="/terms" legacyBehavior><a className="hover:text-white transition-colors">الشروط والأحكام</a></Link></li>
              <li><Link href="/privacy" legacyBehavior><a className="hover:text-white transition-colors">سياسة الخصوصية</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a className="hover:text-white transition-colors">اتصل بنا</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">تواصل معنا</h3>
            {/* Add social media icons or links here later */}
            <p className="text-sm">support@alajr.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} منصة الأجر. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
