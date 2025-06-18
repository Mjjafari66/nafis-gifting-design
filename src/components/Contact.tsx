import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, Globe } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
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
    window.addEventListener('mousemove', handleMouseMove);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "تماس با ما",
      value: "09128946359",
      color: "text-green-500",
      bgColor: "bg-green-50",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "کانال تلگرام",
      value: "@GHABENAFIS",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "آیدی تلگرام",
      value: "@GH_NAFIS",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Mail,
      title: "ایمیل",
      value: "info@nafisbest.com",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Mouse-following gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.3) 30%, transparent 70%)`
          }}
        />
        
        {/* Animated particles */}
        <div 
          className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate3d(${Math.sin(scrollProgress * Math.PI * 2) * 50}px, ${Math.cos(scrollProgress * Math.PI) * 30}px, 0) scale(${1 + scrollProgress * 0.3})`
          }}
        />
        <div 
          className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate3d(${Math.cos(scrollProgress * Math.PI * 1.5) * 70}px, ${Math.sin(scrollProgress * Math.PI * 2) * 40}px, 0) scale(${1 + scrollProgress * 0.2})`
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"
          style={{
            transform: `translate3d(${Math.sin(scrollProgress * Math.PI * 3) * 80}px, ${Math.cos(scrollProgress * Math.PI * 2.5) * 60}px, 0) rotate(${scrollProgress * 180}deg)`
          }}
        />

        {/* Geometric shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-purple-400/30 rounded-lg transform rotate-45"
          style={{
            transform: `rotate(${45 + scrollProgress * 90}deg) scale(${1 + scrollProgress * 0.2})`
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/3 w-12 h-12 border-2 border-pink-400/30 rounded-full"
          style={{
            transform: `scale(${1 + Math.sin(scrollProgress * Math.PI * 4) * 0.2})`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            تماس با <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ما</span>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-ping delay-500"></div>
          </h2>
          <div className="relative">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: `translateY(${Math.sin((scrollProgress + index * 0.2) * Math.PI) * 10}px)`
              }}
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-500 border border-white/20 overflow-hidden group">
                {/* Background animation */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${item.bgColor} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                    <item.icon className={`h-8 w-8 ${item.color} relative z-10`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-white font-semibold mb-2 group-hover:text-purple-200 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 text-sm break-all group-hover:text-white transition-colors duration-300">{item.value}</p>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 overflow-hidden">
              {/* Background elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 relative">
                    اطلاعات تماس
                    <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                      <div className="relative">
                        <MapPin className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-purple-400 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </div>
                      <span>آدرس: تهران - ایران</span>
                    </div>
                    <div className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                      <div className="relative">
                        <Clock className="h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-pink-400 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </div>
                      <span>ساعات کاری: شنبه تا پنج‌شنبه - ۸ تا ۱۸</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">وب‌سایت</h4>
                    <a 
                      href="http://www.nafisbest.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all duration-300"
                    >
                      <Globe className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="underline group-hover:no-underline">www.nafisbest.com</span>
                      <div className="w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></div>
                    </a>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 relative">
                    پیام شما
                    <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400"></div>
                  </h3>
                  
                  <form className="space-y-4">
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="نام و نام خانوادگی"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 group-hover:border-white/30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="ایمیل"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 group-hover:border-white/30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    <div className="relative group">
                      <textarea
                        rows={4}
                        placeholder="پیام شما..."
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none group-hover:border-white/30"
                      ></textarea>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        ارسال پیام
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    </button>
                  </form>
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

export default Contact;
