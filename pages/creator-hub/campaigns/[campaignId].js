// pages/creator-hub/campaigns/[campaignId].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../context/AuthContext';
import CreatorDashboardLayout from '../../../components/Layout/CreatorDashboardLayout';
import Link from 'next/link';

// Mock function to fetch campaign details by ID
const fetchCampaignById = async (id) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  const mockCampaigns = [
    {
      id: '1',
      title: 'حملة إطلاق المنتج الجديد',
      brandName: 'شركة الموضة الحديثة',
      rewardAmount: '500',
      rewardType: 'ريال سعودي',
      briefDescription: 'شارك في إطلاق مجموعتنا الجديدة من الأزياء. نحتاج إلى مقاطع فيديو إبداعية على تيك توك وإنستغرام.',
      fullDescription: 'نحن على وشك إطلاق أحدث تشكيلاتنا من الأزياء العصرية ونبحث عن مبدعين شغوفين للمساعدة في نشر الخبر. الحملة تتطلب إنشاء محتوى فيديو قصير (15-60 ثانية) يعرض المنتجات بطريقة جذابة ومبتكرة. يجب أن يتم النشر على منصات تيك توك و/أو إنستغرام ريلز مع استخدام الهاشتاغات المحددة. سيتم توفير المنتجات للمبدعين المختارين.',
      requirements: [
        'إنشاء فيديو واحد على الأقل (تيك توك أو إنستغرام ريلز).',
        'يجب أن يكون الفيديو عالي الجودة (إضاءة جيدة، صوت واضح).',
        'استخدام الهاشتاغ #موضة_حديثة٢٠٢٤ و #اسم_العلامة_التجارية.',
        'يجب أن يكون الحساب عاماً.',
        'تقديم إحصاءات الأداء بعد أسبوع من النشر.',
      ],
      deliverables: 'رابط الفيديو المنشور + لقطة شاشة للإحصاءات.',
      targetAudience: 'شباب وشابات مهتمون بالموضة (18-30 سنة).',
      // coverImage: 'https://via.placeholder.com/800x400?text=Fashion+Campaign+Details',
      tags: ['موضة', 'ملابس', 'جديد', 'تيك توك', 'انستغرام'],
    },
    {
      id: '2',
      title: 'تحدي الطهي الصحي',
      brandName: 'مطبخ العائلة السعيدة',
      rewardAmount: '1000',
      rewardType: 'نقاط مكافأة',
      briefDescription: 'أظهر مهاراتك في الطهي الصحي! قم بإنشاء وصفة فيديو باستخدام منتجاتنا.',
      fullDescription: 'انضم إلى تحدي الطهي الصحي الخاص بنا! استخدم منتجاتنا العضوية لإنشاء وصفتك الصحية والمبتكرة. شارك الفيديو على يوتيوب أو إنستغرام. أفضل الوصفات ستحصل على مكافآت قيمة وفرصة للظهور على صفحاتنا الرسمية.',
      requirements: [
        'إنشاء فيديو وصفة مدته 2-5 دقائق.',
        'ذكر اسم المنتج بوضوح في الفيديو.',
        'إدراج قائمة المكونات وطريقة التحضير.',
        'جودة الفيديو والصوت ممتازة.',
      ],
      deliverables: 'رابط الفيديو + ملف الوصفة بصيغة PDF.',
      targetAudience: 'الأمهات والعائلات المهتمة بالصحة والتغذية.',
      tags: ['صحة', 'طبخ', 'طعام', 'عضوي', 'يوتيوب'],
    },
    // Add more mock campaigns if needed, matching IDs from the discovery page
  ];
  return mockCampaigns.find(campaign => campaign.id === id);
};

export default function CampaignDetailsPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const { campaignId } = router.query; // Get campaignId from URL query

  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=/creator-hub/campaigns/${campaignId}`);
      return;
    } else if (user && user.role !== 'creator') {
      // Optional: Redirect if not a creator
      // router.push('/?error=unauthorized_creator_access');
      console.warn('User is not a creator but accessing creator campaign details:', user);
    }

    if (campaignId) {
      setLoading(true);
      fetchCampaignById(campaignId)
        .then(data => {
          setCampaign(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch campaign", err);
          setLoading(false);
          // Optionally set an error state here
        });
    }
  }, [isAuthenticated, user, router, campaignId]);

  if (loading) {
    return (
      <CreatorDashboardLayout>
        <div className="text-center py-20">جاري تحميل تفاصيل الحملة...</div>
      </CreatorDashboardLayout>
    );
  }

  if (!campaign) {
    return (
      <CreatorDashboardLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-red-600">لم يتم العثور على الحملة</h2>
          <p className="text-gray-600 mt-2">قد يكون الرابط غير صحيح أو تم حذف الحملة.</p>
          <Link href="/creator-hub" legacyBehavior>
            <a className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              العودة إلى قائمة الحملات
            </a>
          </Link>
        </div>
      </CreatorDashboardLayout>
    );
  }

  return (
    <CreatorDashboardLayout>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
        {/* Optional Cover Image
        {campaign.coverImage && (
          <img src={campaign.coverImage} alt={campaign.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        )}
        */}
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-3">{campaign.title}</h1>
        <p className="text-lg text-gray-700 mb-1">
          مقدمة من: <span className="font-semibold">{campaign.brandName}</span>
        </p>
        <p className="text-xl font-semibold text-green-700 mb-6">
          المكافأة: {campaign.rewardAmount} {campaign.rewardType}
        </p>

        <div className="prose prose-lg max-w-none text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: campaign.fullDescription?.replace(/\n/g, '<br />') || '' }} />

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">متطلبات الحملة:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {campaign.requirements?.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {campaign.deliverables && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">المخرجات المطلوبة:</h2>
            <p className="text-gray-700">{campaign.deliverables}</p>
          </div>
        )}

        {campaign.targetAudience && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">الجمهور المستهدف:</h2>
            <p className="text-gray-700">{campaign.targetAudience}</p>
          </div>
        )}

        {campaign.tags && campaign.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">الكلمات المفتاحية:</h3>
            <div className="flex flex-wrap gap-2">
              {campaign.tags.map(tag => (
                <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href={`/creator-hub/submit/${campaign.id}`} legacyBehavior>
            <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-150">
              تقديم المحتوى لهذه الحملة
            </a>
          </Link>
        </div>
      </div>
    </CreatorDashboardLayout>
  );
}
