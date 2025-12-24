// src/components/BenefitsSection.jsx
import React from 'react';
import { FiTool, FiWifi, FiTv } from 'react-icons/fi';

type BenefitItemProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlightColor: string;
};

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description, highlightColor }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">
        <div className={`p-4 rounded-full text-white mb-6 text-3xl bg-gradient-to-br ${highlightColor}`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-pgBlue-dark mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
            {description}
        </p>
    </div>
)

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
         {/* Декоративный фон */}
         <div className="absolute top-0 left-0 w-full h-full bg-pgBlue-light opacity-20 skew-y-3 transform origin-top-left -z-1"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pgBlue-dark">
            Больше чем просто интернет
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {/* Блок 1: Бесплатная работа */}
            <BenefitItem
                icon={<FiTool />}
                title="Бесплатное подключение"
                description="Мы выполняем все работы по прокладке кабеля и настройке оборудования абсолютно бесплатно. Никаких скрытых платежей за выезд мастера."
                highlightColor="from-blue-500 to-blue-700"
            />

             {/* Блок 2: Роутер */}
             <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-2 border-pgOrange relative transform md:-translate-y-4">
                 <div className="absolute top-0 right-0 bg-pgOrange text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                     Акция
                 </div>
                <div className="p-4 rounded-full text-white mb-6 text-3xl bg-gradient-to-br from-pgOrange to-orange-600">
                    <FiWifi />
                </div>
                <h3 className="text-xl font-bold text-pgBlue-dark mb-2">Wi-Fi Роутер</h3>
                <div className="text-3xl font-extrabold text-pgOrange mb-3">
                    за 99 ₽ <span className="text-sm font-normal text-gray-500">/мес</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Современный двухдиапазонный гигабитный роутер для максимального покрытия квартиры.
                </p>
            </div>

             {/* Блок 3: ТВ */}
             <BenefitItem
                icon={<FiTv />}
                title="Цифровое ТВ в подарок"
                description="Смотрите любимые передачи в высоком качестве. Мы дарим 191 канал бесплатно при подключении популярных тарифов."
                highlightColor="from-purple-500 to-indigo-700"
            />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;