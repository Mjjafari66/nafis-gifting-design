
import { useEffect, useState } from "react";
import { Phone, MessageCircle, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)`
          }}
        />
        
        {/* Floating Geometric Shapes */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"
          style={{ 
            transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.05}px, 0) rotate(${scrollY * 0.1}deg)`,
            filter: `hue-rotate(${scrollY * 0.1}deg)`
          }}
        />
        <div 
          className="absolute bottom-40 right-32 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000"
          style={{ 
            transform: `translate3d(${-scrollY * 0.15}px, ${scrollY * 0.08}px, 0) rotate(${-scrollY * 0.1}deg)`,
            filter: `hue-rotate(${scrollY * 0.2}deg)`
          }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-lg animate-pulse delay-500"
          style={{ 
            transform: `translate3d(${scrollY * 0.08}px, ${-scrollY * 0.12}px, 0) rotate(${scrollY * 0.15}deg)`
          }}
        />

        {/* Glass Morphism Background Elements */}
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10"
          style={{ transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0005})` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/10 backdrop-blur-2xl rounded-3xl border border-purple-500/20 rotate-45"
          style={{ transform: `translateY(${-scrollY * 0.3}px) rotate(${45 + scrollY * 0.1}deg)` }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Logo with Advanced Animation */}
        <div className="mb-8 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src="/lovable-uploads/f5c91726-69ad-4c4f-af83-80a9c34e71d5.png" 
              alt="لوگو نفیس" 
              className="relative mx-auto h-32 w-auto mb-6 hover:scale-110 transition-all duration-500 filter drop-shadow-2xl"
              style={{ 
                transform: `translateY(${scrollY * -0.1}px) scale(${1 + Math.sin(Date.now() * 0.001) * 0.02})`
              }}
            />
          </div>
        </div>

        {/* Main Title with Text Effects */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in delay-200">
          <span 
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]"
            style={{
              backgroundImage: 'linear-gradient(90deg, #a855f7, #ec4899, #8b5cf6, #a855f7)',
              animation: 'gradient 3s ease-in-out infinite'
            }}
          >
            جعبه و آلبوم سازی
          </span>
          <br />
          <span className="text-white relative">
            نفیس
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60"></div>
          </span>
        </h1>

        {/* Subtitle with Typewriter Effect */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300 relative">
          <span className="relative inline-block">
            طراحی و تولید آلبوم‌سازی نفیس
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
          </span>
        </p>

        {/* Enhanced Banner */}
        <div className="relative bg-gradient-to-r from-purple-600/80 via-pink-600/80 to-blue-600/80 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-in delay-400 border border-white/20 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-500"></div>
          <p className="relative text-white text-lg font-medium z-10">
            همکاری با بزرگان صنعت چاپ و بسته‌بندی، افتخار ماست
          </p>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>

        {/* Enhanced Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in delay-500">
          {[
            { icon: Phone, text: "09128946359", color: "from-green-400 to-emerald-500" },
            { icon: MessageCircle, text: "@GHABENAFIS", color: "from-blue-400 to-cyan-500" },
            { icon: Mail, text: "info@nafisbest.com", color: "from-purple-400 to-pink-500" }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{
                background: `linear-gradient(45deg, var(--tw-gradient-stops))`,
              }}></div>
              <item.icon className={`h-5 w-5 bg-gradient-to-r ${item.color} bg-clip-text text-transparent relative z-10`} />
              <span className="text-white relative z-10">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in delay-600 overflow-hidden">
          <span className="relative z-10">مشاهده محصولات</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-700"></div>
        </button>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer">
        <div className="relative">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/80 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse group-hover:bg-white transition-colors duration-300"></div>
          </div>
          <ArrowDown className="h-4 w-4 text-white/50 mx-auto mt-2 group-hover:text-white/80 transition-colors duration-300" />
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
