// pages/creator-hub/index.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import CreatorDashboardLayout from '../../components/Layout/CreatorDashboardLayout';
import CampaignCard from '../../components/Campaigns/CampaignCard';

// Mock campaign data
const mockCampaigns = [
  {
    id: '1',
    title: 'حملة إطلاق المنتج الجديد',
    brandName: 'شركة الموضة الحديثة',
    rewardAmount: '500',
    rewardType: 'ريال سعودي',
    briefDescription: 'شارك في إطلاق مجموعتنا الجديدة من الأزياء. نحتاج إلى مقاطع فيديو إبداعية على تيك توك وإنستغرام.',
    // coverImage: 'https://via.placeholder.com/400x200?text=Fashion+Campaign',
    tags: ['موضة', 'ملابس', 'جديد'],
  },
  {
    id: '2',
    title: 'تحدي الطهي الصحي',
    brandName: 'مطبخ العائلة السعيدة',
    rewardAmount: '1000',
    rewardType: 'نقاط مكافأة',
    briefDescription: 'أظهر مهاراتك في الطهي الصحي! قم بإنشاء وصفة فيديو باستخدام منتجاتنا.',
    // coverImage: 'https://via.placeholder.com/400x200?text=Cooking+Challenge',
    tags: ['صحة', 'طبخ', 'طعام'],
  },
  {
    id: '3',
    title: 'مراجعة تطبيق الألعاب',
    brandName: 'استوديو الألعاب المبتكرة',
    rewardAmount: '250',
    rewardType: 'بطاقة هدية',
    briefDescription: 'هل أنت من محبي الألعاب؟ قم بمراجعة تطبيقنا الجديد وشارك تجربتك مع متابعيك.',
    // coverImage: 'https://via.placeholder.com/400x200?text=Gaming+App+Review',
    tags: ['ألعاب', 'تكنولوجيا', 'تطبيق'],
  },
  {
    id: '4',
    title: 'سافر واكتشف معنا',
    brandName: 'وكالة السفر العالمية',
    rewardAmount: 'رحلة مجانية',
    rewardType: 'لمدة ٣ أيام',
    briefDescription: 'نبحث عن مدون سفر لتوثيق تجربة فريدة في وجهة سياحية جديدة. قدم الآن!',
    tags: ['سفر', 'سياحة', 'مغامرة'],
  }
];

export default function CreatorHubCampaignsPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login?redirect=/creator-hub'); // Redirect to login if not authenticated
    } else if (user && user.role !== 'creator') {
      // Optional: Redirect if not a creator (e.g., to home or an error page)
      // For now, we allow access if authenticated, role check can be stricter later
      // router.push('/?error=unauthorized_creator_access');
      console.warn('User is not a creator but accessing creator hub:', user);
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated) {
    // Render nothing or a loading indicator while redirecting
    return <div className="text-center py-20">جاري التحقق من المستخدم...</div>;
  }

  // Optional: Add a loading state for campaigns if they were fetched
  // const [campaigns, setCampaigns] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => { /* fetch campaigns here */ setCampaigns(mockCampaigns); setLoading(false); }, []);
  // if (loading) return <CreatorDashboardLayout><p>Loading campaigns...</p></CreatorDashboardLayout>;


  return (
    <CreatorDashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">اكتشف الحملات المتاحة</h1>
        <p className="text-gray-600">
          تصفح أحدث الحملات التي يمكنك المشاركة فيها كصانع محتوى.
        </p>
      </div>

      {/* Placeholder for Filters/Sort */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">تصفية الحملات</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="البحث بالاسم..." className="form-input w-full rounded-md shadow-sm" />
          <select className="form-select w-full rounded-md shadow-sm">
            <option value="">جميع الفئات</option>
            <option value="fashion">موضة</option>
            <option value="food">طعام</option>
            <option value="gaming">ألعاب</option>
            <option value="travel">سفر</option>
          </select>
          <select className="form-select w-full rounded-md shadow-sm">
            <option value="">ترتيب حسب: الأحدث</option>
            <option value="reward_high">المكافأة: من الأعلى للأدنى</option>
            <option value="reward_low">المكافأة: من الأدنى للأعلى</option>
          </select>
        </div>
      </div>

      {mockCampaigns.length === 0 ? (
        <p className="text-center text-gray-500 py-10">لا توجد حملات متاحة حالياً.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      )}
    </CreatorDashboardLayout>
  );
}
