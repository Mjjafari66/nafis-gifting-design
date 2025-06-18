import { useEffect, useRef, useState } from "react";
import { Star, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    window.addEventListener('scroll', handleScroll);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { icon: Star, value: "25+", label: "سال سابقه", color: "from-yellow-400 to-orange-500" },
    { icon: Award, value: "1000+", label: "پروژه موفق", color: "from-purple-400 to-pink-500" },
    { icon: Users, value: "500+", label: "مشتری راضی", color: "from-blue-400 to-cyan-500" },
    { icon: TrendingUp, value: "100%", label: "کیفیت تضمینی", color: "from-green-400 to-emerald-500" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
          style={{
            transform: `translateY(${scrollProgress * 50}px) scale(${1 + scrollProgress * 0.1})`
          }}
        />
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"
          style={{
            transform: `translate3d(${scrollProgress * 100}px, ${scrollProgress * 50}px, 0) scale(${1 + scrollProgress * 0.5})`
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"
          style={{
            transform: `translate3d(${-scrollProgress * 80}px, ${scrollProgress * 30}px, 0) scale(${1 + scrollProgress * 0.3})`
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
            درباره <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ما</span>
            <div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </h2>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-50 transform -translate-x-full animate-[shimmer_2s_infinite]"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100 overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              
              <div className="text-center mb-8 relative">
                <div className="relative inline-block">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">مهدی ابراهیمی</h3>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg blur-sm"></div>
                </div>
                <p className="text-purple-600 font-semibold relative">
                  بیش از 25 سال سابقه در صنعت
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-6 relative">
                <div className="relative p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl border-l-4 border-purple-400 group-hover:shadow-lg transition-all duration-300">
                  <p className="relative z-10">
                    این جانب مهدی ابراهیمی مفتخرم که با بیش از 25 سال سابقه در مجموعه خود با تولید محصولات ذیل در خدمت شما صاحبان مشاغل و همکاران عزیز باشم.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <h4 className="font-bold text-purple-800 mb-3 relative z-10">محصولات ویژه</h4>
                    <ul className="space-y-2 text-sm relative z-10">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></div>
                        جعبه‌های نفیس درب‌دار و قاب‌های کشویی
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-pink-400 mr-2 animate-pulse delay-100"></div>
                        ست‌های سررسید با متریال‌های مختلف
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse delay-200"></div>
                        روکش‌های گالینگور، کاغذ گلاسه، چرم و پارچه
                      </li>
                    </ul>
                  </div>
                  
                  <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 transform translate-x-full group-hover:-translate-x-full transition-transform duration-700"></div>
                    <h4 className="font-bold text-blue-800 mb-3 relative z-10">خدمات تخصصی</h4>
                    <ul className="space-y-2 text-sm relative z-10">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></div>
                        تولید آلبوم‌های کاغذ دیواری و پوستر
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse delay-100"></div>
                        انواع کالیته‌های موکت، پارکت و کفپوش
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse delay-200"></div>
                        مجموعه کامل صحافی کتاب و سررسید
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/5 to-slate-400/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <p className="relative z-10">
                    خدمات برش و حک لیزر، صفر تا صد کلیه خدمات چاپ و پس از چاپ از جمله خدمات ویژه ما محسوب می‌شود.
                  </p>
                </div>
                
                <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-400 group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <p className="font-semibold text-amber-800 mb-2 relative z-10">حضور در نمایشگاه‌ها</p>
                  <p className="text-amber-700 relative z-10">
                    همچنین به استحضار دوستان گرامی می‌رسانم برخی از تولیدات ما را در نمایشگاه‌های معتبری چون میدکس و نمایشگاه کتاب و موزه سینما می‌توانید ملاحظه فرمایید.
                  </p>
                </div>

                <div className="text-center bg-gray-50 p-4 rounded-xl border border-gray-200 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                  <p className="text-sm text-gray-600 italic relative z-10">
                    تصاویر برخی از محصولات به علت مجاز نبودن انتشار محتوا از سوی سفارش‌دهندگان این مجموعه؛ در این سایت به نمایش گذاشته نشد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default About;
