// pages/creator-hub/submit/[campaignId].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../context/AuthContext';
import CreatorDashboardLayout from '../../../components/Layout/CreatorDashboardLayout';
import Link from 'next/link';

// Mock function to fetch basic campaign info for the submission page (e.g., title)
const fetchCampaignTitleById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulate API call
  const mockCampaigns = [
    { id: '1', title: 'حملة إطلاق المنتج الجديد' },
    { id: '2', title: 'تحدي الطهي الصحي' },
    { id: '3', title: 'مراجعة تطبيق الألعاب' },
    { id: '4', title: 'سافر واكتشف معنا' },
  ];
  return mockCampaigns.find(campaign => campaign.id === id);
};

export default function SubmitContentPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const { campaignId } = router.query;

  const [campaignTitle, setCampaignTitle] = useState('');
  const [contentUrl, setContentUrl] = useState('');
  const [message, setMessage] = useState('');
  // const [file, setFile] = useState(null); // For file upload placeholder
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);


  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=/creator-hub/submit/${campaignId}`);
      return;
    } else if (user && user.role !== 'creator') {
      // router.push('/?error=unauthorized_creator_access');
      console.warn('User is not a creator but accessing submission page:', user);
    }

    if (campaignId) {
      fetchCampaignTitleById(campaignId).then(campaign => {
        if (campaign) {
          setCampaignTitle(campaign.title);
        } else {
          // Handle campaign not found for submission context
          router.push('/creator-hub?error=campaign_not_found_for_submission');
        }
      });
    }
  }, [isAuthenticated, user, router, campaignId]);

  const validateForm = () => {
    const newErrors = {};
    if (!contentUrl.trim()) {
      newErrors.contentUrl = 'رابط المحتوى مطلوب.';
    } else {
      try {
        new URL(contentUrl); // Check if it's a valid URL
      } catch (_) {
        newErrors.contentUrl = 'الرجاء إدخال رابط صحيح (مثال: https://...).';
      }
    }
    // Add validation for file if file upload is implemented
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    console.log('Submitting content for campaign ID:', campaignId, {
      contentUrl,
      message,
      // fileName: file ? file.name : null,
    });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmissionSuccess(true); // Show success message
    // Optionally, redirect after a few seconds or clear form
    // router.push(`/creator-hub/my-submissions?submitted=${campaignId}`);
  };

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  if (!campaignId || !campaignTitle && !submissionSuccess) { // Avoid showing loading if submission was successful
      return (
        <CreatorDashboardLayout>
            <div className="text-center py-20">جاري تحميل معلومات الحملة...</div>
        </CreatorDashboardLayout>
      )
  }

  if (submissionSuccess) {
    return (
      <CreatorDashboardLayout>
        <div className="text-center py-10 bg-white p-8 rounded-lg shadow-xl">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h2 className="text-2xl font-bold text-green-700 mb-3">تم إرسال مشاركتك بنجاح!</h2>
          <p className="text-gray-600 mb-6">
            تم إرسال محتواك للحملة "{campaignTitle}" للمراجعة. سيتم إعلامك بالنتائج قريباً.
          </p>
          <Link href="/creator-hub/campaigns" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mr-2">
              اكتشف المزيد من الحملات
            </a>
          </Link>
          <Link href={`/creator-hub/campaigns/${campaignId}`} legacyBehavior>
            <a className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg">
              العودة لصفحة الحملة
            </a>
          </Link>
        </div>
      </CreatorDashboardLayout>
    );
  }


  return (
    <CreatorDashboardLayout>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          تقديم المحتوى للحملة: <span className="text-indigo-700">{campaignTitle}</span>
        </h1>
        <p className="text-gray-600 mb-8">
          يرجى تقديم رابط المحتوى الخاص بك وأي ملاحظات إضافية للمعلن.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Content URL */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contentUrl">
              رابط المحتوى <span className="text-red-500">*</span> (مثال: رابط فيديو تيك توك، يوتيوب، منشور انستغرام)
            </label>
            <input
              className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.contentUrl ? 'border-red-500 ring-red-500' : 'border-gray-300'}`}
              id="contentUrl"
              type="url"
              placeholder="https://tiktok.com/yourvideo"
              value={contentUrl}
              onChange={(e) => setContentUrl(e.target.value)}
              aria-describedby="contentUrlError"
              dir="ltr" // Explicitly LTR for URL input
            />
            {errors.contentUrl && <p id="contentUrlError" className="text-red-500 text-xs italic mt-2">{errors.contentUrl}</p>}
          </div>

          {/* Placeholder for File Upload - uncomment and expand when needed
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileUpload">
              أو قم برفع ملف (اختياري)
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-indigo-500"
              id="fileUpload"
              type="file"
              onChange={handleFileChange}
            />
            <p className="mt-1 text-xs text-gray-500">أنواع الملفات المسموح بها: JPG, PNG, MP4 (الحد الأقصى 10MB)</p>
          </div>
          */}

          {/* Message to Advertiser */}
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              رسالة إلى المعلن (اختياري)
            </label>
            <textarea
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
              id="message"
              rows="4"
              placeholder="اكتب أي ملاحظات أو معلومات إضافية تود إيصالها للمعلن بخصوص مشاركتك..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-150 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال المشاركة'}
            </button>
          </div>
        </form>
      </div>
    </CreatorDashboardLayout>
  );
}
