
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            درباره <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ما</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">مهدی ابراهیمی</h3>
              <p className="text-purple-600 font-semibold">بیش از 25 سال سابقه در صنعت</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-6">
              <p>
                این جانب مهدی ابراهیمی مفتخرم که با بیش از 25 سال سابقه در مجموعه خود با تولید محصولات ذیل در خدمت شما صاحبان مشاغل و همکاران عزیز باشم.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-purple-800 mb-3">محصولات ویژه</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• جعبه‌های نفیس درب‌دار و قاب‌های کشویی</li>
                    <li>• ست‌های سررسید با متریال‌های مختلف</li>
                    <li>• روکش‌های گالینگور، کاغذ گلاسه، چرم و پارچه</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-blue-800 mb-3">خدمات تخصصی</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• تولید آلبوم‌های کاغذ دیواری و پوستر</li>
                    <li>• انواع کالیته‌های موکت، پارکت و کفپوش</li>
                    <li>• مجموعه کامل صحافی کتاب و سررسید</li>
                  </ul>
                </div>
              </div>

              <p>
                خدمات برش و حک لیزر، صفر تا صد کلیه خدمات چاپ و پس از چاپ از جمله خدمات ویژه ما محسوب می‌شود.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-400">
                <p className="font-semibold text-amber-800 mb-2">حضور در نمایشگاه‌ها</p>
                <p className="text-amber-700">
                  همچنین به استحضار دوستان گرامی می‌رسانم برخی از تولیدات ما را در نمایشگاه‌های معتبری چون میدکس و نمایشگاه کتاب و موزه سینما می‌توانید ملاحظه فرمایید.
                </p>
              </div>

              <div className="text-center bg-gray-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 italic">
                  تصاویر برخی از محصولات به علت مجاز نبودن انتشار محتوا از سوی سفارش‌دهندگان این مجموعه؛ در این سایت به نمایش گذاشته نشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
