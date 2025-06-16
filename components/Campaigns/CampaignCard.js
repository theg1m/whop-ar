// components/Campaigns/CampaignCard.js
import React from 'react';
import Link from 'next/link';

const CampaignCard = ({ campaign }) => {
  if (!campaign) {
    return null; // Or a loading/error state
  }

  const {
    id,
    title,
    brandName,
    rewardAmount,
    rewardType, // e.g., 'SAR', 'Points', 'Gift Card'
    briefDescription,
    // coverImage, // URL for a cover image (optional)
    // tags, // Array of strings (optional)
  } = campaign;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      {/* Optional: Cover Image
      {coverImage && (
        <img className="w-full h-48 object-cover" src={coverImage} alt={title} />
      )}
      */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-indigo-700 mb-2">{title || 'عنوان الحملة'}</h3>
        <p className="text-md text-gray-600 mb-1">
          العلامة التجارية: <span className="font-semibold">{brandName || 'اسم العلامة'}</span>
        </p>
        <p className="text-lg font-semibold text-green-600 mb-3">
          المكافأة: {rewardAmount || '0'} {rewardType || 'ريال سعودي'}
        </p>
        <p className="text-gray-700 mb-4 h-20 overflow-hidden text-ellipsis">
          {briefDescription || 'وصف مختصر للحملة يوضح الأهداف الرئيسية والمطلوب من المبدعين...'}
        </p>
        {/* Optional: Tags
        {tags && tags.length > 0 && (
          <div className="mb-4">
            {tags.map(tag => (
              <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{tag}
              </span>
            ))}
          </div>
        )}
        */}
        <Link href={`/creator-hub/campaigns/${id}`} legacyBehavior>
          <a className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-150">
            عرض التفاصيل و المشاركة
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;
