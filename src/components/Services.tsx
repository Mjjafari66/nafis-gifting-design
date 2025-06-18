
import { useEffect, useRef, useState } from "react";
import { Package, BookOpen, Palette, Scissors, Printer, Sparkles } from "lucide-react";

const Services = () => {
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
      { threshold: 0.2 }
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

  const services = [
    {
      icon: Package,
      title: "جعبه‌های نفیس",
      description: "جعبه‌های درب‌دار و قاب‌های کشویی با متریال‌های مختلف",
      features: ["MDF و مقوا", "روکش گالینگور", "کاغذ گلاسه", "چرم و پارچه"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      icon: BookOpen,
      title: "آلبوم‌سازی",
      description: "تولید آلبوم‌های کاغذ دیواری و پوستر در ابعاد مختلف",
      features: ["ابعاد مختلف", "کیفیت بالا", "طراحی سفارشی", "چاپ نفیس"],
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Palette,
      title: "کالیته‌ها",
      description: "انواع کالیته‌های موکت، پارکت و کفپوش",
      features: ["موکت", "پارکت", "کفپوش", "متنوع و باکیفیت"],
      color: "from-green-500 to-blue-500",
      bgColor: "from-green-50 to-blue-50",
      borderColor: "border-green-200"
    },
    {
      icon: BookOpen,
      title: "صحافی",
      description: "مجموعه کامل صحافی کتاب و سررسید",
      features: ["چسب گرم و سرد", "ترتیب‌کن 24 خانه", "تاکن و دوخت اتوماتیک", "پانچ و فنر"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Scissors,
      title: "برش لیزر",
      description: "خدمات برش و حک لیزر با دقت بالا",
      features: ["برش دقیق", "حک لیزر", "طراحی‌های پیچیده", "سرعت بالا"],
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    },
    {
      icon: Printer,
      title: "خدمات چاپ",
      description: "صفر تا صد کلیه خدمات چاپ و پس از چاپ",
      features: ["چاپ دیجیتال", "چاپ افست", "پس از چاپ", "کیفیت تضمینی"],
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-50 to-purple-50",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"
          style={{
            transform: `translate3d(${scrollProgress * 150}px, ${Math.sin(scrollProgress * Math.PI) * 50}px, 0) scale(${1 + scrollProgress * 0.5})`
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-60 h-60 bg-pink-200/30 rounded-full blur-3xl"
          style={{
            transform: `translate3d(${-scrollProgress * 120}px, ${Math.cos(scrollProgress * Math.PI) * 30}px, 0) scale(${1 + scrollProgress * 0.3})`
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"
          style={{
            transform: `translate3d(${Math.sin(scrollProgress * Math.PI * 2) * 100}px, ${Math.cos(scrollProgress * Math.PI * 2) * 80}px, 0) rotate(${scrollProgress * 360}deg)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
              خدمات <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ما</span>
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-purple-400 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-2 h-4 w-4 text-pink-400 animate-pulse delay-500" />
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg blur-xl"></div>
          </div>
          <div className="relative">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full animate-[shimmer_2s_infinite]"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: `translateY(${scrollProgress * (index % 2 === 0 ? -20 : 20)}px)`
              }}
            >
              <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${service.borderColor} border-2 h-full overflow-hidden`}>
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse delay-700"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                    <service.icon className="h-8 w-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300 relative">
                  {service.title}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></div>
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed relative">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-all duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-400/0 via-pink-400/0 to-purple-400/0 group-hover:from-purple-400/50 group-hover:via-pink-400/50 group-hover:to-purple-400/50 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full animate-[shimmer_3s_infinite]"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Services;
