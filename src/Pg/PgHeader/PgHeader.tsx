// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiUser } from 'react-icons/fi';

export const PgHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Услуги ', href: '#tariffs' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Логотип */}
        <a href="#" className="flex items-center">
            <img src="/logo.svg " alt="ПЖ19 Лого" className="h-8" />
        </a>

        {/* Десктоп меню - по центру */}
        <nav className="hidden lg:flex space-x-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-pgOrange transition duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Телефон и кнопка входа */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+78634000000" className="flex items-center gap-2 text-pgBlue-dark hover:text-pgOrange transition font-bold">
            <FiPhone className="text-pgOrange" />
            <span>8 (8634) 00-00-00</span>
          </a>
          <Link 
            to="/login"
            className="flex items-center gap-2 bg-pgBlue hover:bg-pgBlue-dark text-white font-bold py-2 px-4 rounded-xl transition"
          >
            <FiUser />
            <span>Личный кабинет</span>
          </Link>
        </div>

        {/* Мобильная кнопка меню */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg absolute w-full">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-pgOrange transition duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* Телефон и кнопка входа для мобильных */}
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            <a href="tel:+78634000000" className="flex items-center gap-2 text-pgBlue-dark font-bold">
              <FiPhone className="text-pgOrange" />
              <span>8 (8634) 00-00-00</span>
            </a>
            <Link 
              to="/login"
              className="flex items-center justify-center gap-2 bg-pgBlue hover:bg-pgBlue-dark text-white font-bold py-3 px-4 rounded-xl transition w-full"
              onClick={() => setIsOpen(false)}
            >
              <FiUser />
              <span>Личный кабинет</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
