// src/components/TariffsSection.jsx
import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface TariffCardProps {
  title: string;
  speed: number;
  price: number;
  features: string[];
  isPopular: boolean;
}

const TariffCard: React.FC<TariffCardProps> = ({ title, speed, price, features, isPopular }) => (
  <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 ${isPopular ? 'border-4 border-pgOrange relative z-10 scale-105 shadow-2xl' : 'border border-gray-100'}`}>
    {isPopular && (
      <div className="bg-pgOrange text-white text-center text-sm font-bold uppercase py-1">
        Хит продаж
      </div>
    )}
    <div className="p-8 text-center">
      <h3 className="text-2xl font-bold text-pgBlue-dark mb-4">{title}</h3>
      <div className="flex justify-center items-baseline mb-6">
        <span className="text-5xl font-extrabold text-gray-900">{speed}</span>
        <span className="text-xl text-gray-500 ml-2">Мбит/с</span>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-bold text-pgOrange">{price} ₽</span>
        <span className="text-gray-500"> / мес</span>
      </div>
      <ul className="text-left space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <FiCheck className="text-green-500 mr-3 text-lg" /> {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-bold transition duration-300 ${isPopular ? 'bg-pgOrange hover:bg-pgOrange-hover text-white' : 'bg-pgBlue-light text-pgBlue hover:bg-pgBlue hover:text-white'}`}>
        Выбрать тариф
      </button>
    </div>
  </div>
);

export const PgTariffsSection = () => {
  const tariffs = [
    {
      title: 'Старт',
      speed: 100,
      price: 450,
      features: ['Безлимитный интернет', 'Поддержка 24/7', 'Динамический IP'],
      isPopular: false,
    },
    {
      title: 'Оптимальный + ТВ',
      speed: 300,
      price: 650,
      features: ['Безлимитный интернет', '191 канал ТВ бесплатно', 'Wi-Fi роутер (аренда)', 'Поддержка 24/7'],
      isPopular: true,
    },
    {
      title: 'Максимальный',
      speed: 800,
      price: 990,
      features: ['Игровой приоритет', '191 канал ТВ бесплатно', 'Мощный Wi-Fi 6 роутер', 'Статический IP', 'VIP поддержка'],
      isPopular: false,
    },
  ];

  return (
    <section id="tariffs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pgBlue-dark">
            Наши тарифы
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Честные скорости и прозрачные цены для любых задач
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tariffs.map((tariff, index) => (
            <TariffCard key={index} {...tariff} />
          ))}
        </div>
      </div>
    </section>
  );
};
