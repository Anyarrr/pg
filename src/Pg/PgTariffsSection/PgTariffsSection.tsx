import { useState } from 'react';
import { FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface TariffCardProps {
  title: string;
  speed: number;
  price: number;
  features: string[];
  isPopular: boolean;
}

const TariffCard: React.FC<TariffCardProps> = ({ title, speed, price, features, isPopular }) => (
  <div className={`bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.03] ${isPopular ? 'border-4 border-pgOrange relative z-10 md:scale-105 shadow-2xl' : 'border border-gray-100'}`}>
    {isPopular && (
      <div className="bg-pgOrange text-white text-center text-sm font-bold uppercase py-2 tracking-widest">
        Хит продаж
      </div>
    )}
    <div className="p-8 text-center">
      <h3 className="text-2xl font-black text-pgBlue-dark mb-4 uppercase tracking-tight">{title}</h3>
      <div className="flex justify-center items-baseline mb-6">
        <span className="text-6xl font-black text-gray-900 leading-none">{speed}</span>
        <span className="text-xl text-gray-500 ml-2 font-bold uppercase">Мбит/с</span>
      </div>
      <div className="mb-8 bg-gray-50 py-3 rounded-2xl">
        <span className="text-4xl font-black text-pgOrange">{price} ₽</span>
        <span className="text-gray-500 font-bold uppercase text-xs"> / мес</span>
      </div>
      <ul className="text-left space-y-4 mb-10 min-h-[160px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-700 text-sm leading-tight">
            <FiCheck className="text-pgOrange mr-3 text-xl flex-shrink-0" /> 
            <span className="font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-wider transition duration-300 shadow-lg active:scale-95 ${isPopular ? 'bg-pgOrange hover:bg-pgOrange-hover text-white shadow-pgOrange/20' : 'bg-pgBlue-dark text-white hover:bg-pgBlue shadow-pgBlue/20'}`}>
        Выбрать тариф
      </button>
    </div>
  </div>
);

export const PgTariffsSection = () => {
  // Состояние: развернут ли список тарифов
  const [showAll, setShowAll] = useState(false);

  const allTariffs = [
    // ПЕРВЫЕ ТРИ (ВИДИМЫ СРАЗУ)
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
    // ОСТАЛЬНЫЕ (СКРЫТЫ ИЗНАЧАЛЬНО)
    {
      title: 'Для Стриминга',
      speed: 500,
      price: 750,
      features: ['Сверхбыстрая загрузка', '191 канал ТВ бесплатно', 'Приоритет трафика'],
      isPopular: false,
    },
    {
      title: 'Социальный',
      speed: 50,
      price: 300,
      features: ['Только интернет', 'Стабильная связь', 'Без лишних опций'],
      isPopular: false,
    },
    {
      title: 'Геймер Про',
      speed: 1000,
      price: 1200,
      features: ['Минимальный пинг', 'Wi-Fi 6 в подарок', 'Персональный менеджер', 'Облачные игры'],
      isPopular: false,
    },
  ];

  // Первые 3 тарифа (всегда видны)
  const mainTariffs = allTariffs.slice(0, 3);
  // Остальные тарифы (скрыты изначально)
  const extraTariffs = allTariffs.slice(3);

  return (
    <section id="tariffs" className="relative z-10 py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-pgBlue-dark uppercase italic tracking-tight">
            Наши <span className="text-pgOrange">тарифы</span>
          </h2>
          <div className="w-24 h-2 bg-pgOrange mx-auto my-6 rounded-full"></div>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Честные скорости и прозрачные цены для любых задач. Выберите свой идеальный интернет.
          </p>
        </div>

        {/* Основные тарифы (всегда видны) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {mainTariffs.map((tariff, index) => (
            <div 
              key={tariff.title} 
              className="animate-slideUp"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <TariffCard {...tariff} />
            </div>
          ))}
        </div>

        {/* Дополнительные тарифы (плавное раскрытие) */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch overflow-hidden transition-all duration-700 ease-out ${
            showAll ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          {extraTariffs.map((tariff, index) => (
            <div 
              key={tariff.title} 
              className={`transition-all duration-500 ${showAll ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: showAll ? `${index * 150}ms` : '0ms' }}
            >
              <TariffCard {...tariff} />
            </div>
          ))}
        </div>

        {/* КНОПКА "ПОКАЗАТЬ ВСЕ" */}
        <div className="mt-16 text-center transition-all duration-500">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 bg-pgBlue-light text-pgBlue-dark font-black px-10 py-5 rounded-2xl hover:bg-pgBlue hover:text-white transition-all duration-300 shadow-xl group border-2 border-pgBlue/5"
          >
            {showAll ? (
              <> Скрыть тарифы <FiChevronUp className="text-xl group-hover:-translate-y-1 transition-transform" /> </>
            ) : (
              <> Все тарифы <FiChevronDown className="text-xl group-hover:translate-y-1 transition-transform" /> </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};