// pages/advertiser-hub/create-campaign.js
import React, { useState } from 'react';
import AdvertiserDashboardLayout from '../../components/Layout/AdvertiserDashboardLayout';
import Link from 'next/link'; // Import Link for success message

export default function CreateCampaignPage() {
  const initialFormData = {
    campaignTitle: '',
    campaignObjectives: '',
    detailedRequirements: '',
    budgetAmount: '',
    budgetType: '',
    startDate: '',
    endDate: '',
    targetAudience: '',
    kpis: '',
    hashtags: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    // ... (validation logic remains the same as previous step)
    const newErrors = {};
    if (!formData.campaignTitle.trim()) newErrors.campaignTitle = 'اسم الحملة مطلوب.';
    if (!formData.campaignObjectives.trim()) newErrors.campaignObjectives = 'أهداف الحملة مطلوبة.';
    if (!formData.detailedRequirements.trim()) newErrors.detailedRequirements = 'متطلبات المحتوى مطلوبة.';
    if (!formData.budgetAmount.trim()) {
      newErrors.budgetAmount = 'ميزانية الحملة مطلوبة.';
    } else if (isNaN(parseFloat(formData.budgetAmount)) || parseFloat(formData.budgetAmount) <= 0) {
      newErrors.budgetAmount = 'الرجاء إدخال مبلغ صحيح للميزانية.';
    }
    if (!formData.budgetType) newErrors.budgetType = 'الرجاء اختيار نوع الميزانية.';
    if (!formData.startDate) newErrors.startDate = 'تاريخ بدء الحملة مطلوب.';
    if (!formData.endDate) newErrors.endDate = 'تاريخ انتهاء الحملة مطلوب.';
    if (formData.startDate && formData.endDate && new Date(formData.startDate) >= new Date(formData.endDate)) {
      newErrors.endDate = 'تاريخ الانتهاء يجب أن يكون بعد تاريخ البدء.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionSuccess(false); // Reset success state on new submission
    console.log('Submitting Campaign Data:', formData);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      // In a real app, this is where you'd make your API call:
      // const response = await fetch('/api/campaigns', { method: 'POST', body: JSON.stringify(formData), headers: {'Content-Type': 'application/json'} });
      // if (!response.ok) throw new Error('Network response was not ok');
      // const result = await response.json();
      // console.log('API Response:', result);

      setSubmissionSuccess(true);
      setFormData(initialFormData); // Reset form on success
      setErrors({}); // Clear any previous errors
    } catch (error) {
      console.error('Submission failed:', error);
      // Set a general error message if needed, e.g., errors.form = 'Submission failed. Please try again.'
      setErrors(prev => ({ ...prev, form: 'فشل إنشاء الحملة. الرجاء المحاولة مرة أخرى.'}));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (fieldName) =>
    `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2 px-3 ${errors[fieldName] ? 'border-red-500 ring-1 ring-red-500' : ''}`;
  const getSelectClass = (fieldName) =>
    `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2 px-3 ${errors[fieldName] ? 'border-red-500 ring-1 ring-red-500' : ''}`;
  const getTextAreaClass = (fieldName) =>
    `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2 px-3 ${errors[fieldName] ? 'border-red-500 ring-1 ring-red-500' : ''}`;

  if (submissionSuccess) {
    return (
      <AdvertiserDashboardLayout>
        <div className="text-center py-10 bg-white p-8 rounded-lg shadow-xl">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h2 className="text-2xl font-bold text-green-700 mb-3">تم إنشاء الحملة بنجاح!</h2>
          <p className="text-gray-600 mb-6">
            حملتك "{/* We need to store last successful campaign title or fetch it, for now just generic */} حملتك الجديدة" جاهزة الآن. يمكنك عرضها في قائمة حملاتك.
          </p>
          <button
            onClick={() => setSubmissionSuccess(false)} // Allow creating another campaign
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg mr-2"
          >
            إنشاء حملة أخرى
          </button>
          <Link href="/advertiser-hub/my-campaigns" legacyBehavior>
            <a className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg">
              عرض كل الحملات
            </a>
          </Link>
        </div>
      </AdvertiserDashboardLayout>
    );
  }

  return (
    <AdvertiserDashboardLayout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">إنشاء حملة إعلانية جديدة</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-xl" noValidate>
        {/* General form error */}
        {errors.form && <p className="text-sm text-red-600 p-3 bg-red-100 rounded-md">{errors.form}</p>}

        {/* Campaign Title (Input and error display remains same) */}
        <div>
          <label htmlFor="campaignTitle" className="block text-sm font-medium text-gray-700 mb-1">اسم الحملة <span className="text-red-500">*</span></label>
          <input type="text" name="campaignTitle" id="campaignTitle" value={formData.campaignTitle} onChange={handleChange} className={getInputClass('campaignTitle')} placeholder="مثال: إطلاق مجموعة الصيف الجديدة"/>
          {errors.campaignTitle && <p className="text-xs text-red-600 mt-1">{errors.campaignTitle}</p>}
        </div>

        {/* ... other form fields remain the same as previous step ... */}
        {/* Campaign Objectives */}
        <div>
          <label htmlFor="campaignObjectives" className="block text-sm font-medium text-gray-700 mb-1">أهداف الحملة / وصف مختصر <span className="text-red-500">*</span></label>
          <textarea name="campaignObjectives" id="campaignObjectives" rows="3" value={formData.campaignObjectives} onChange={handleChange} className={getTextAreaClass('campaignObjectives')} placeholder="صف بإيجاز الهدف الرئيسي من الحملة وما تأمل في تحقيقه."></textarea>
          {errors.campaignObjectives && <p className="text-xs text-red-600 mt-1">{errors.campaignObjectives}</p>}
        </div>

        {/* Detailed Content Requirements */}
        <div>
          <label htmlFor="detailedRequirements" className="block text-sm font-medium text-gray-700 mb-1">متطلبات المحتوى بالتفصيل <span className="text-red-500">*</span></label>
          <textarea name="detailedRequirements" id="detailedRequirements" rows="6" value={formData.detailedRequirements} onChange={handleChange} className={getTextAreaClass('detailedRequirements')} placeholder="اشرح بالتفصيل نوع المحتوى المطلوب من المبدعين، الرسائل الرئيسية، المنصات المستهدفة، وأي إرشادات أخرى."></textarea>
          {errors.detailedRequirements && <p className="text-xs text-red-600 mt-1">{errors.detailedRequirements}</p>}
        </div>

        {/* Budget Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budgetAmount" className="block text-sm font-medium text-gray-700 mb-1">ميزانية الحملة (بالريال السعودي) <span className="text-red-500">*</span></label>
            <input type="number" name="budgetAmount" id="budgetAmount" min="0" value={formData.budgetAmount} onChange={handleChange} className={getInputClass('budgetAmount')} placeholder="مثال: 5000"/>
            {errors.budgetAmount && <p className="text-xs text-red-600 mt-1">{errors.budgetAmount}</p>}
          </div>
          <div>
            <label htmlFor="budgetType" className="block text-sm font-medium text-gray-700 mb-1">نوع الميزانية <span className="text-red-500">*</span></label>
            <select name="budgetType" id="budgetType" value={formData.budgetType} onChange={handleChange} className={getSelectClass('budgetType')}>
              <option value="">اختر نوع الميزانية</option><option value="total">إجمالي للحملة</option><option value="per_creator">لكل مبدع مشارك</option><option value="performance_based">حسب الأداء</option>
            </select>
            {errors.budgetType && <p className="text-xs text-red-600 mt-1">{errors.budgetType}</p>}
          </div>
        </div>

        {/* Campaign Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">تاريخ بدء الحملة <span className="text-red-500">*</span></label>
            <input type="date" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} className={getInputClass('startDate')}/>
            {errors.startDate && <p className="text-xs text-red-600 mt-1">{errors.startDate}</p>}
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">تاريخ انتهاء الحملة <span className="text-red-500">*</span></label>
            <input type="date" name="endDate" id="endDate" value={formData.endDate} onChange={handleChange} className={getInputClass('endDate')}/>
            {errors.endDate && <p className="text-xs text-red-600 mt-1">{errors.endDate}</p>}
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-1">وصف الجمهور المستهدف</label>
          <textarea name="targetAudience" id="targetAudience" rows="3" value={formData.targetAudience} onChange={handleChange} className={getTextAreaClass('targetAudience')} placeholder="صف الجمهور الذي ترغب في الوصول إليه (العمر، الاهتمامات، الموقع الجغرافي، إلخ)."></textarea>
        </div>

        {/* KPIs */}
        <div>
          <label htmlFor="kpis" className="block text-sm font-medium text-gray-700 mb-1">مؤشرات الأداء الرئيسية (KPIs)</label>
          <textarea name="kpis" id="kpis" rows="3" value={formData.kpis} onChange={handleChange} className={getTextAreaClass('kpis')} placeholder="مثال: عدد المشاهدات، معدل التفاعل، عدد النقرات، المبيعات المحققة. كيف ستقيس نجاح الحملة؟"></textarea>
        </div>

        {/* Hashtags */}
        <div>
          <label htmlFor="hashtags" className="block text-sm font-medium text-gray-700 mb-1">الهاشتاغات المقترحة (افصل بينها بفاصلة)</label>
          <input type="text" name="hashtags" id="hashtags" value={formData.hashtags} onChange={handleChange} className={getInputClass('hashtags')} placeholder="#حملتي_الجديدة, #اسم_العلامة, #موسم_الرياض"/>
        </div>


        {/* Submit Button */}
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => { setFormData(initialFormData); setErrors({}); setSubmissionSuccess(false); }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-3"
              disabled={isSubmitting}
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'جاري الإنشاء...' : 'إنشاء الحملة'}
            </button>
          </div>
        </div>
      </form>
    </AdvertiserDashboardLayout>
  );
}
