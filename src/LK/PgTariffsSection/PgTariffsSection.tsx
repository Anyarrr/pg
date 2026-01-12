import React from 'react';
import { 
  FiWifi, FiSmartphone, FiHome, 
  FiZap, FiClock, FiCheck, FiInfo 
} from 'react-icons/fi';

// Универсальный компонент карточки в стиле скриншота
type CardProps = {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
};

const Card: React.FC<CardProps> = ({ children, className = "", isActive = false }) => (
  <div className={`bg-white rounded-[1.5rem] p-6 border-2 transition-all duration-300 ${
    isActive ? 'border-[#4C6FFF] shadow-md' : 'border-gray-100 hover:border-gray-200'
  } ${className}`}>
    {children}
  </div>
);

export const PgTariffsSection = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FF] font-sans text-slate-900 p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <h1 className="text-2xl font-bold mb-8 ml-2">Тарифы и услуги</h1>

        {/* ПАНЕЛЬ ТЕКУЩЕГО ТАРИФА (Верхний блок со скриншота) */}
        <div className="bg-[#EEF2FF] rounded-[1.5rem] p-8 mb-10 flex flex-col md:flex-row justify-between items-center border border-blue-100">
          <div>
            <div className="flex gap-2 mb-3">
              <span className="bg-[#2D469E] text-white text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider">Ваш тариф</span>
              <span className="bg-[#E1F7E3] text-[#27AE60] text-[10px] px-2 py-1 rounded-md font-bold uppercase flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-[#27AE60] rounded-full"></div> Активен
              </span>
            </div>
            <h2 className="text-3xl font-bold italic">Интернет 1000</h2>
            <p className="text-gray-500 mt-1 font-medium">1000 Мбит/с безлимит • Подключён с 15.06.2023</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="text-3xl font-bold">700,00 ₽</div>
            <p className="text-gray-400 text-sm font-medium">в месяц</p>
          </div>
        </div>

        {/* ТАБЫ */}
        <div className="flex gap-8 mb-8 border-b border-gray-200 px-2 overflow-x-auto">
          <button className="pb-4 border-b-2 border-blue-600 font-bold text-sm text-blue-600 whitespace-nowrap">Тарифы</button>
        </div>

        {/* СЕТКА С ВАШИМИ ДАННЫМИ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Основной тариф (Интернет 1000) */}
          <Card isActive={true}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold italic">Интернет 1000</h3>
                <p className="text-xs text-gray-400 mt-1 font-bold">1000 Мбит/с безлимит</p>
              </div>
              <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-bold uppercase">Ваш тариф</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm font-medium text-gray-600"><FiCheck className="text-green-500"/> Безлимитный интернет</li>
              <li className="flex items-center gap-2 text-sm font-medium text-gray-600"><FiCheck className="text-green-500"/> Скорость до 1000 Мбит/с</li>
              <li className="flex items-center gap-2 text-sm font-medium text-gray-600"><FiCheck className="text-green-500"/> Техподдержка 24/7</li>
            </ul>

            <div className="mt-auto">
              <div className="text-2xl font-bold mb-4">1 200,00 ₽ <span className="text-sm font-normal text-gray-400">/мес</span></div>
              <button className="w-full py-3 rounded-xl font-bold text-sm bg-gray-100 text-gray-400 cursor-default flex items-center justify-center gap-2">
                <FiCheck /> Текущий тариф
              </button>
            </div>
          </Card>

          {/* 2. Производительность */}
          <Card>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 italic">Производительность</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600"><FiZap size={20}/></div>
                <div>
                  <div className="text-sm font-bold italic">До 10 устройств</div>
                  <div className="text-[11px] text-gray-500">ПК, смартфоны и умный дом</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500"><FiClock size={20}/></div>
                <div>
                  <div className="text-sm font-bold italic">Загрузка 1 Гб за 20 сек</div>
                  <div className="text-[11px] text-gray-500">В 10 раз быстрее обычного</div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl text-[10px] font-bold text-gray-500 uppercase italic">
                ✓ 0% задержки в играх
              </div>
            </div>
          </Card>

          {/* 3. Цифровое ТВ */}
          <Card>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 italic">Цифровое ТВ</h4>
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="text-4xl font-black text-blue-900 italic">191</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase">канал</div>
              </div>
              <div className="text-right text-[11px] font-bold">
                <div className="text-orange-500 uppercase">31 Кино</div>
                <div className="text-blue-600 uppercase">23 HD / 7 4K</div>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 mb-4 flex justify-between items-center">
              <span className="text-xs font-bold italic">Imaqliq G-Box</span>
              <span className="text-xs font-black text-orange-500">+ 99 ₽/мес</span>
            </div>
            <button className="w-full py-2 text-[11px] font-bold uppercase text-blue-600 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
              Список каналов →
            </button>
          </Card>

          {/* 4. Видеонаблюдение (Широкая карточка) */}
          <Card className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 italic">Видеонаблюдение</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { d: 5, p: 299 },
                { d: 15, p: 599, pop: true },
                { d: 30, p: 899 }
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-2xl border-2 transition-all ${item.pop ? 'border-orange-400 bg-orange-50/30' : 'border-gray-50'}`}>
                  <div className="text-xs font-bold mb-1 italic">Пакет {i+1}</div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold mb-3">Архив {item.d} дней</div>
                  <div className="text-xl font-bold mb-3">{item.p} ₽</div>
                  <button className="w-full py-2 bg-[#2D469E] text-white text-[10px] font-bold uppercase rounded-lg">Подключить</button>
                </div>
              ))}
            </div>
          </Card>

          {/* 5. Умная домофония */}
          <Card>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 italic">Домофония</h4>
            <div className="bg-[#2D469E] p-4 rounded-2xl text-white mb-4 relative overflow-hidden">
              <FiHome className="absolute -right-2 -bottom-2 opacity-10" size={60} />
              <div className="relative z-10">
                <div className="text-sm font-bold italic mb-1">Безопасный двор</div>
                <p className="text-[10px] opacity-80 leading-tight">Доступ без ключа и видеозвонки на смартфон</p>
                <div className="mt-3 text-lg font-bold">0 ₽ <span className="text-[9px] opacity-60 uppercase">Для ПЖ19</span></div>
              </div>
            </div>
            <div className="space-y-2">
               <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase"><FiCheck className="text-green-500"/> Видеозвонок</div>
               <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase"><FiCheck className="text-green-500"/> История посещений</div>
            </div>
          </Card>

          {/* 6. Оборудование */}
          <Card className="lg:col-span-3 bg-white">
            <div className="flex flex-col md:flex-row gap-6 items-center">
               <div className="flex-1 p-5 bg-orange-50 rounded-2xl border border-orange-100 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <FiSmartphone className="text-orange-500" size={20} />
                    <span className="text-[9px] font-black bg-white px-2 py-1 rounded text-orange-500 uppercase italic">Скоро</span>
                  </div>
                  <div className="font-bold italic text-sm">Мобильный PG19</div>
                  <p className="text-[11px] text-gray-500">Единый счет для интернета и сотовой связи</p>
               </div>
               
               <div className="flex-1 flex items-center gap-4 p-5 border border-gray-100 rounded-2xl w-full">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600"><FiWifi size={24}/></div>
                  <div>
                    <div className="text-sm font-bold italic">SNR-CPE-ME2</div>
                    <div className="text-[11px] text-gray-400 font-bold uppercase tracking-tight">Гигабитный Wi-Fi + 99 ₽/мес</div>
                  </div>
                  <button className="ml-auto text-blue-600 hover:text-blue-800"><FiInfo /></button>
               </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};