// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiLogOut, FiUser, FiBell } from 'react-icons/fi';

interface LKHeaderProps {
  userPhone?: string;
  userName?: string;
}

export const LKHeader = ({ 
  userPhone = '+7 (900) 111-11-11',
//   userName = 'Печкин Игорь Иванович.' 
}: LKHeaderProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Эффект тени при скролле для визуальной легкости
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Оплата', href: '/lk/payment', isLink: true },
    { name: 'Тарифы', href: '/lk/tariffs', isLink: true },
    { name: 'Финансы', href: '#finance', isLink: false },
    { name: 'Услуги', href: '#services', isLink: false },
    { name: 'Поддержка', href: '#support', isLink: false },
  ];

  

  return (
    <header className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* ЛЕВАЯ ЧАСТЬ: Лого и Навигация */}
        <div className="flex items-center gap-10">
          <a href="/lk" className="flex items-center group">
            <img src="/logo.svg" alt="ПЖ19 Лого" className="h-8" />
            <div className="ml-3 hidden sm:block">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 leading-none mb-1">Личный кабинет</div>
            </div>
          </a>

          {/* Десктоп меню */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => 
              link.isLink ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-pgOrange hover:bg-orange-50 rounded-xl transition-all duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-pgOrange hover:bg-orange-50 rounded-xl transition-all duration-300"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Профиль и Контакты */}
        <div className="flex items-center gap-3">

          {/* Профиль пользователя */}
          <div className="hidden md:flex items-center gap-3 pl-3">
            <button className="relative p-2 text-gray-400 hover:text-pgOrange transition">
              <FiBell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pgOrange rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3 bg-gray-50 p-1.5 pr-4 rounded-2xl border border-gray-100">
              <span className="text-sm font-bold text-pgBlue-dark truncate max-w-[150px]">{userPhone}</span>

              <div className="w-8 h-8 bg-white rounded-xl shadow-sm flex items-center justify-center text-pgBlue-dark">
                <FiUser size={18} />
              </div>
            </div>

            <button 
              onClick={() => navigate('/')}
              className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
              title="Выйти из кабинета"
            >
              <FiLogOut size={20} />
            </button>
          </div>

          {/* Мобильная кнопка управления */}
          <div className="lg:hidden flex items-center gap-2">
            <button className="p-2 text-pgBlue-dark bg-gray-100 rounded-lg">
                <FiBell />
            </button>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-pgOrange text-white' : 'bg-pgBlue-dark text-white'}`}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Улучшенное Мобильное меню */}
      <div className={`lg:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'
      }`}>
        <div className="p-4 space-y-1">
          {links.map((link) => 
            link.isLink ? (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center justify-between p-4 text-gray-700 hover:bg-orange-50 hover:text-pgOrange rounded-2xl transition font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <span className="opacity-30">→</span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between p-4 text-gray-700 hover:bg-orange-50 hover:text-pgOrange rounded-2xl transition font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <span className="opacity-30">→</span>
              </a>
            )
          )}
          
          <div className="mt-4 p-4 bg-gray-50 rounded-[2rem] space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <FiUser className="text-pgBlue-dark" />
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase">Абонент</div>
                        <div className="text-sm font-black text-pgBlue-dark">{userPhone}</div>
                    </div>
                </div>
            </div>

            <a href={`tel:${userPhone.replace(/\D/g, '')}`} className="flex items-center justify-center gap-3 bg-white border border-gray-200 py-4 rounded-2xl text-pgBlue-dark font-black shadow-sm">
              <FiPhone className="text-pgOrange" />
              {userPhone}
            </a>

            <button 
              onClick={() => {
                setIsOpen(false);
                navigate('/');
              }}
              className="flex items-center justify-center gap-3 bg-red-50 text-red-600 font-black py-4 rounded-2xl w-full transition"
            >
              <FiLogOut />
              Выйти из профиля
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};