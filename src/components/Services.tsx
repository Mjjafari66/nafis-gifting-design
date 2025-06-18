
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "جعبه‌های نفیس",
      description: "جعبه‌های درب‌دار و قاب‌های کشویی با متریال‌های مختلف",
      features: ["MDF و مقوا", "روکش گالینگور", "کاغذ گلاسه", "چرم و پارچه"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "آلبوم‌سازی",
      description: "تولید آلبوم‌های کاغذ دیواری و پوستر در ابعاد مختلف",
      features: ["ابعاد مختلف", "کیفیت بالا", "طراحی سفارشی", "چاپ نفیس"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "کالیته‌ها",
      description: "انواع کالیته‌های موکت، پارکت و کفپوش",
      features: ["موکت", "پارکت", "کفپوش", "متنوع و باکیفیت"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "صحافی",
      description: "مجموعه کامل صحافی کتاب و سررسید",
      features: ["چسب گرم و سرد", "ترتیب‌کن 24 خانه", "تاکن و دوخت اتوماتیک", "پانچ و فنر"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "برش لیزر",
      description: "خدمات برش و حک لیزر با دقت بالا",
      features: ["برش دقیق", "حک لیزر", "طراحی‌های پیچیده", "سرعت بالا"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "خدمات چاپ",
      description: "صفر تا صد کلیه خدمات چاپ و پس از چاپ",
      features: ["چاپ دیجیتال", "چاپ افست", "پس از چاپ", "کیفیت تضمینی"],
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            خدمات <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ما</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-8 h-8 bg-white rounded-lg opacity-80"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
