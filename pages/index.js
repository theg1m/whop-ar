// pages/index.js
import MainLayout from '../components/Layout/MainLayout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-600 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight animate-fade-in-down">
            منصة الأجر: حيث يلتقي الإبداع بالمكافآت
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            نوصلك كصانع محتوى بأفضل العلامات التجارية لإطلاق العنان لإبداعك وتحقيق دخل مجزٍ. و نمكّن المعلنين من الوصول إلى جمهورهم المستهدف من خلال محتوى أصيل ومؤثر.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:space-x-reverse animate-fade-in-up animation-delay-600">
            <Link href="/register?role=creator" legacyBehavior>
              <a className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105 text-lg">
                انضم كمبدع
              </a>
            </Link>
            <Link href="/register?role=advertiser" legacyBehavior>
              <a className="inline-block bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 text-lg">
                ابدأ كمعلن
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              كيف تعمل منصة الأجر؟
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              نظامنا بسيط ومباشر، مصمم لخدمة كل من المبدعين والمعلنين بفعالية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* For Creators */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">للمبدعين (صناع المحتوى)</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">١</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-lg mb-1">اكتشف الحملات</h4>
                    <p className="text-gray-600">تصفح مجموعة متنوعة من الحملات التي تناسب أسلوبك وجمهورك.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">٢</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-lg mb-1">أنشئ وقدم محتواك</h4>
                    <p className="text-gray-600">أبدع في صناعة المحتوى وفقاً لمتطلبات الحملة وقدمه بسهولة عبر المنصة.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">٣</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-lg mb-1">احصل على مكافأتك</h4>
                    <p className="text-gray-600">بعد الموافقة على محتواك وتحقيق شروط الحملة، استلم أرباحك بأمان.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* For Advertisers */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-teal-700 mb-6 text-center">للمعلنين (أصحاب العلامات التجارية)</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">١</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-lg mb-1">أنشئ حملتك الإعلانية</h4>
                    <p className="text-gray-600">حدد أهدافك، ميزانيتك، ومتطلبات المحتوى بدقة وسهولة.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">٢</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-lg mb-1">اختر المبدعين أو استقبل المشاركات</h4>
                    <p className="text-gray-600">تواصل مع المبدعين المناسبين أو قم بمراجعة المشاركات المقدمة لحملتك.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 mt-1">٣</div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-lg mb-1">حقق نتائج ملموسة</h4>
                    <p className="text-gray-600">احصل على محتوى أصيل، زد من تفاعل جمهورك، وحقق أهدافك التسويقية.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section id="features" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              لماذا تختار منصة الأجر؟
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              نقدم مجموعة من الميزات المصممة خصيصاً لتمكين المبدعين ومساعدة المعلنين على تحقيق أهدافهم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Feature/Benefit Card 1 (Creator) */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center items-center mb-5 w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3 text-center">للمبدعين: حقق دخلاً من إبداعك</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                حوّل شغفك بصناعة المحتوى إلى مصدر دخل حقيقي. شارك في حملات متنوعة واحصل على مكافآت مجزية.
              </p>
            </div>

            {/* Feature/Benefit Card 2 (Advertiser) */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center items-center mb-5 w-16 h-16 bg-teal-100 text-teal-600 rounded-full mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-teal-700 mb-3 text-center">للمعلنين: وصول فعال لجمهورك</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                استهدف جمهورك بدقة عبر محتوى أصيل ومؤثر يقدمه مبدعون عرب موهوبون.
              </p>
            </div>

            {/* Feature/Benefit Card 3 (Platform) */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center items-center mb-5 w-16 h-16 bg-purple-100 text-purple-600 rounded-full mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3 text-center">منصة موثوقة وسهلة الاستخدام</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                تجربة استخدام سلسة وآمنة مع دعم كامل للغة العربية وواجهات مصممة خصيصاً للمنطقة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Call to Action Section */}
      <section id="secondary-cta" className="py-16 lg:py-24 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up">
            جاهز للانضمام إلى مجتمع الأجر؟
          </h2>
          <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-xl mx-auto animate-fade-in-up animation-delay-200">
            سواء كنت مبدعاً يطمح لتحقيق الدخل من محتواه، أو معلناً يبحث عن التأثير، منصة الأجر هي بوابتك للنجاح.
          </p>
          <div className="animate-fade-in-up animation-delay-400 space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
            <Link href="/campaigns" legacyBehavior>
              <a className="inline-block bg-white text-teal-600 font-semibold py-3 px-10 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105 text-lg">
                اكتشف الحملات الآن
              </a>
            </Link>
            <Link href="/register" legacyBehavior>
              <a className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-10 rounded-lg shadow-xl hover:bg-white hover:text-teal-600 transition duration-300 transform hover:scale-105 text-lg">
                سجل حسابك مجاناً
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section Placeholder */}
      <section id="testimonials" className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              يثق بنا المبدعون والمعلنون
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              نحن فخورون بالشراكات التي نبنيها وبالنتائج التي نحققها معاً.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Placeholder Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-5 animate-pulse"></div>
              <p className="font-semibold text-gray-700 mb-1 animate-pulse">اسم العميل/المبدع</p>
              <p className="text-sm text-gray-500 mb-4 animate-pulse">شركة/مجال العمل</p>
              <p className="text-gray-600 italic leading-relaxed animate-pulse">
                "نص شهادة العميل سيكون هنا قريباً..."
              </p>
            </div>
            {/* Placeholder Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-5 animate-pulse"></div>
              <p className="font-semibold text-gray-700 mb-1 animate-pulse">اسم العميل/المبدع</p>
              <p className="text-sm text-gray-500 mb-4 animate-pulse">شركة/مجال العمل</p>
              <p className="text-gray-600 italic leading-relaxed animate-pulse">
                "شهادة أخرى توضح مدى روعة المنصة ستوضع هنا..."
              </p>
            </div>
            {/* Placeholder Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-5 animate-pulse"></div>
              <p className="font-semibold text-gray-700 mb-1 animate-pulse">اسم العميل/المبدع</p>
              <p className="text-sm text-gray-500 mb-4 animate-pulse">شركة/مجال العمل</p>
              <p className="text-gray-600 italic leading-relaxed animate-pulse">
                "المزيد من الآراء الإيجابية ستأتي قريباً!"
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
             <p className="text-gray-500">سيتم عرض شهادات حقيقية من عملائنا ومبدعينا هنا قريباً لإظهار تأثير منصة الأجر.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
