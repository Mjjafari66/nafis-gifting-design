
import { useEffect, useState } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-40 right-32 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-lg animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Logo area */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/f5c91726-69ad-4c4f-af83-80a9c34e71d5.png" 
            alt="لوگو نفیس" 
            className="mx-auto h-32 w-auto mb-6 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            جعبه و آلبوم سازی
          </span>
          <br />
          <span className="text-white">نفیس</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300">
          طراحی و تولید آلبوم‌سازی نفیس
        </p>

        {/* Banner */}
        <div className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-in delay-400 border border-white/20">
          <p className="text-white text-lg font-medium">
            همکاری با بزرگان صنعت چاپ و بسته‌بندی، افتخار ماست
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in delay-500">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300">
            <Phone className="h-5 w-5 text-green-400" />
            <span className="text-white">09128946359</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300">
            <MessageCircle className="h-5 w-5 text-blue-400" />
            <span className="text-white">@GHABENAFIS</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300">
            <Mail className="h-5 w-5 text-purple-400" />
            <span className="text-white">info@nafisbest.com</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in delay-600">
          مشاهده محصولات
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
