
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              جعبه و آلبوم سازی نفیس
            </h3>
            <p className="text-gray-400 leading-relaxed">
              با بیش از 25 سال سابقه در خدمت شما عزیزان هستیم. کیفیت و رضایت شما اولویت ماست.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">خدمات</h4>
            <ul className="space-y-2 text-gray-400">
              <li>جعبه‌های نفیس</li>
              <li>آلبوم‌سازی</li>
              <li>صحافی کتاب</li>
              <li>برش لیزر</li>
              <li>خدمات چاپ</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-2 text-gray-400">
              <li>تلفن: 09128946359</li>
              <li>تلگرام: @GHABENAFIS</li>
              <li>ایمیل: info@nafisbest.com</li>
              <li>وب‌سایت: www.nafisbest.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} جعبه و آلبوم سازی نفیس. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
