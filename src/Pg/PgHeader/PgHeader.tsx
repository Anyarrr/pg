// src/components/Header.jsx
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const PgHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Тарифы', href: '#tariffs' },
    { name: 'Телевидение', href: '#tv' },
    { name: 'Видеонаблюдение', href: '#cctv' },
    { name: 'Поддержка', href: '#support' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип */}
        <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="ПЖ19 Лого" className="h-8" />
        </a>

        {/* Десктоп меню */}
        <nav className="hidden md:flex space-x-8">
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
        </div>
      )}
    </header>
  );
};
