// src/components/HeroSection.jsx
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export const PgAddress = () => {
  const [address, setAddress] = useState<{ city: string; street: string; house: string }>({ city: '', street: '', house: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Проверка адреса: г. ${address.city}, ул. ${address.street}, д. ${address.house}`);
    // Здесь логика отправки на бэкенд
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 bg-pgBlue-dark overflow-hidden">
      {/* Фоновое изображение с градиентом */}
      <div className="absolute inset-0 z-0 opacity-40">
          {/* Замените src на красивую картинку города или сети */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pgBlue-dark to-pgBlue mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        {/* Текстовая часть */}
        <div className="md:w-1/2 text-white mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Интернет со скоростью света в вашем доме
          </h1>
          <p className="text-lg md:text-xl text-pgBlue-light mb-8">
            Подключайтесь к ПЖ19 и наслаждайтесь стабильным соединением, цифровым ТВ и качественным сервисом.
          </p>
        </div>

        {/* Форма проверки адреса */}
        <div className="md:w-1/2 md:pl-12 w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform hover:scale-[1.02] transition duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Проверьте подключение
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="Город"
                  value={address.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-pgOrange focus:bg-white focus:ring-0 transition duration-200"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="street"
                  placeholder="Улица"
                  value={address.street}
                  onChange={handleChange}
                  className="w-full md:w-2/3 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-pgOrange focus:bg-white focus:ring-0 transition duration-200"
                  required
                />
                <input
                  type="text"
                  name="house"
                  placeholder="Дом"
                  value={address.house}
                  onChange={handleChange}
                  className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-pgOrange focus:bg-white focus:ring-0 transition duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pgOrange hover:bg-pgOrange-hover text-white font-bold py-4 rounded-lg text-lg transition duration-300 flex items-center justify-center"
              >
                <FiSearch className="mr-2" /> Проверить адрес
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Декоративный элемент волны внизу */}
      <div className="absolute bottom-0 left-0 right-0 z-5 translate-y-1/4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </section>
  );
};
