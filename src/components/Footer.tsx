
import { useEffect, useState } from "react";
import { Heart, Star, Sparkles } from "lucide-react";

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
        
        {/* Floating stars */}
        <div className="absolute top-8 left-1/4">
          <Star className="h-4 w-4 text-purple-400/50 animate-pulse" />
        </div>
        <div className="absolute top-16 right-1/3">
          <Sparkles className="h-3 w-3 text-pink-400/40 animate-pulse delay-500" />
        </div>
        <div className="absolute bottom-20 left-1/3">
          <Star className="h-2 w-2 text-blue-400/30 animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="group">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                جعبه و آلبوم سازی نفیس
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative">
              با بیش از 25 سال سابقه در خدمت شما عزیزان هستیم. کیفیت و رضایت شما اولویت ماست.
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </p>
            
            <div className="flex items-center gap-2 mt-4 text-sm text-purple-300">
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>ساخته شده با عشق</span>
            </div>
          </div>
          
          {/* Services */}
          <div className="group">
            <h4 className="text-lg font-semibold mb-4 relative">
              خدمات
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-500"></div>
            </h4>
            <ul className="space-y-2 text-gray-400">
              {[
                "جعبه‌های نفیس",
                "آلبوم‌سازی", 
                "صحافی کتاب",
                "برش لیزر",
                "خدمات چاپ"
              ].map((service, index) => (
                <li 
                  key={index} 
                  className="group/item hover:text-white transition-all duration-300 cursor-pointer relative pl-4"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="absolute left-0 top-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform -translate-y-1/2 scale-0 group-hover/item:scale-100 transition-transform duration-300"></div>
                  <span className="group-hover/item:translate-x-2 transition-transform duration-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="group">
            <h4 className="text-lg font-semibold mb-4 relative">
              تماس با ما
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-500"></div>
            </h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { label: "تلفن", value: "09128946359" },
                { label: "تلگرام", value: "@GHABENAFIS" },
                { label: "ایمیل", value: "info@nafisbest.com" },
                { label: "وب‌سایت", value: "www.nafisbest.com" }
              ].map((contact, index) => (
                <li 
                  key={index}
                  className="group/contact hover:text-white transition-all duration-300 cursor-pointer relative"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-purple-300 font-medium min-w-[60px]">{contact.label}:</span>
                    <span className="group-hover/contact:text-purple-200 transition-colors duration-300">{contact.value}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform scale-x-0 group-hover/contact:scale-x-100 transition-transform duration-500 origin-right"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          
          <div className="relative">
            <p className="text-gray-400 mb-2 hover:text-gray-300 transition-colors duration-300">
              © {new Date().getFullYear()} جعبه و آلبوم سازی نفیس. تمامی حقوق محفوظ است.
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <div className="w-8 h-px bg-gradient-to-r from-pink-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full animate-[shimmer_3s_infinite]"></div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
