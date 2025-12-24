// src/components/ContactSection.jsx
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { FaTelegramPlane, FaVk } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <footer id="contacts" className="bg-pgBlue-dark text-white py-16 relative overflow-hidden">
        {/* Декоративные круги на фоне */}
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 rounded-full bg-pgBlue opacity-20"></div>
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 rounded-full bg-pgOrange opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Колонка 1: О компании */}
        <div>
          <div className="mb-6">
            <img src="/logo.svg" alt="ПЖ19 Лого" className="h-10" />
          </div>
          <p className="text-pgBlue-light leading-relaxed mb-6">
            Ваш надежный провайдер в Таганроге. Мы обеспечиваем высокую скорость, стабильность и лучший сервис в городе.
          </p>
        </div>

        {/* Колонка 2: Свяжитесь с нами */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-pgBlue-light inline-block pb-2">
            Свяжитесь с нами
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-pgBlue flex items-center justify-center mr-4 group-hover:bg-pgOrange transition">
                 <FiPhoneCall className="text-xl" />
              </div>
              <div>
                  <a href="tel:+78634000000" className="text-xl font-bold hover:text-pgOrange transition block">8 (8634) 00-00-00</a>
                  <span className="text-sm text-pgBlue-light">Круглосуточная поддержка</span>
              </div>
            </li>
            <li className="flex items-center">
               <FiMail className="mr-3 text-pgOrange" />
              <a href="mailto:info@pg19.ru" className="hover:text-pgOrange transition">info@pg19.ru</a>
            </li>
             <li className="flex items-start">
               <FiMapPin className="mr-3 text-pgOrange mt-1" />
              <span className="text-pgBlue-light">г. Таганрог, ул. Примерная, д. 19</span>
            </li>
          </ul>
        </div>

        {/* Колонка 3: Соцсети и ссылки */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-pgBlue-light inline-block pb-2">
            Мы в соцсетях
          </h3>
          <p className="text-pgBlue-light mb-4">Подписывайтесь, чтобы быть в курсе новостей и акций.</p>
          <div className="flex space-x-4">
            <a href="#" className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition transform hover:-translate-y-1">
              <FaTelegramPlane className="text-2xl" />
            </a>
             <a href="#" className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition transform hover:-translate-y-1">
              <FaVk className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-pgBlue text-center text-pgBlue-light text-sm">
        © {new Date().getFullYear()} ПЖ19. Все права защищены. Интернет-провайдер.
      </div>
    </footer>
  );
};

export default ContactSection;