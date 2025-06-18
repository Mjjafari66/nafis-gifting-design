
import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: "تماس با ما",
      value: "09128946359",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: MessageCircle,
      title: "کانال تلگرام",
      value: "@GHABENAFIS",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: MessageCircle,
      title: "آیدی تلگرام",
      value: "@GH_NAFIS",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Mail,
      title: "ایمیل",
      value: "info@nafisbest.com",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            تماس با <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ما</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.bgColor} rounded-2xl mb-4 hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm break-all">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">اطلاعات تماس</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <span>آدرس: تهران - ایران</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="h-5 w-5 text-pink-400" />
                    <span>ساعات کاری: شنبه تا پنج‌شنبه - ۸ تا ۱۸</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">وب‌سایت</h4>
                  <a 
                    href="http://www.nafisbest.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300 underline"
                  >
                    www.nafisbest.com
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">پیام شما</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="ایمیل"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                  />
                  <textarea
                    rows={4}
                    placeholder="پیام شما..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
