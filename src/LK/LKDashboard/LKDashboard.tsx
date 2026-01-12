import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiZap, FiArrowRight, FiTv, FiWifi, FiChevronRight, 
  FiPlusCircle, FiMapPin, FiActivity, FiRefreshCw, FiShield
} from 'react-icons/fi';
import { LKHeader } from '../LKHeader/LKHeader';

interface LKDashboardProps {
  userPhone?: string;
  userName?: string;
}

const LKDashboard: React.FC<LKDashboardProps> = ({
  userPhone = '+7 (952) 577-95-87',
  userName = 'Манаев Евгений Александрович'
}) => {
  const navigate = useNavigate();
  const [isTesting, setIsTesting] = useState(false);
  const [speed, setSpeed] = useState<number | null>(null);

  const runTest = () => {
    setIsTesting(true);
    setTimeout(() => {
      setSpeed(Math.floor(Math.random() * (980 - 850) + 850));
      setIsTesting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F2F3F7] font-sans">
      <LKHeader userPhone={userPhone} userName={userName} />

      <main className="container mx-auto px-4 pt-24 pb-12 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* ЛЕВАЯ ЧАСТЬ: ИНФО И АДРЕС (8 колонок) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-[#1C1C1E] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
              {/* Фоновый декор */}
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <FiShield size={140} className="text-white" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <div className="text-pgOrange text-[10px] font-black uppercase tracking-[0.2em]">Абонент</div>
                    <div className="text-xl font-bold italic tracking-tight">{userName}</div>
                    <div className="text-3xl font-black italic tracking-tighter text-white/90">{userPhone}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Подключён</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div className="space-y-1">
                    <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Адрес подключения</div>
                    <div className="text-sm font-bold italic flex items-center gap-2">
                      <FiMapPin className="text-pgOrange" /> г. Таганрог, ул. Александровская, 19
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Договор</div>
                      <div className="text-sm font-bold italic">ДГ-2025-001234</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Л/Счёт</div>
                      <div className="text-sm font-bold italic text-pgOrange">1234567890</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: БАЛАНС (4 колонки) */}
          <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 shadow-xl border border-white flex flex-col justify-between group relative overflow-hidden">
             <div className="relative z-10">
                <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">К оплате</div>
                <div className="text-4xl font-black text-pgBlue-dark italic tracking-tighter mb-1">1 500,00 ₽</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-black text-pgOrange bg-orange-50 px-2 py-0.5 rounded-lg uppercase tracking-tighter">
                  До 01.01.2026
                </div>
             </div>

             <div className="mt-8 relative z-10">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-gray-400 mb-2">
                   <span>Хватит на</span>
                   <span>64 дня</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                   <div className="bg-pgOrange w-[70%] h-full rounded-full" />
                </div>
             </div>

             <button 
                onClick={() => navigate('/lk/payment')}
                className="mt-6 w-full bg-pgBlue-dark hover:bg-black text-white font-black py-5 rounded-[1.5rem] transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-[0.15em] shadow-lg shadow-pgBlue-dark/20 relative z-10"
             >
                <FiPlusCircle size={18} className="text-pgOrange" />
                Пополнить баланс
             </button>
          </div>
        </div>

        {/* СЕТКА С ТАРИФОМ И ТЕСТОМ СКОРОСТИ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* ТАРИФ */}
          <div className="bg-white rounded-[2rem] p-7 shadow-sm border border-gray-100">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400">Ваш тариф</h3>
                {/* <div className="bg-blue-600 text-white text-[8px] font-black px-2 py-1 rounded-md uppercase">Giga</div> */}
             </div>
             <div className="text-2xl font-black text-pgBlue-dark italic leading-tight uppercase tracking-tighter mb-2">Супер онлайн+ 1000М</div>
             <p className="text-[11px] font-medium text-gray-400 mb-6">Абонентская плата 799 ₽/мес</p>
             
             <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-bold italic">
                   <FiTv className="text-pgOrange" /> 191 ТВ Канал
                </div>
                <div className="flex items-center gap-3 text-sm font-bold italic">
                   <FiWifi className="text-pgBlue" /> Гигабитный роутер
                </div>
             </div>
          </div>

          {/* ТЕСТ СКОРОСТИ (ИНТЕРАКТИВ) */}
          <div className="bg-white rounded-[2rem] p-7 shadow-sm border border-gray-100 flex flex-col justify-between">
             <div className="flex justify-between items-center">
                <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400">Проверка линии</h3>
                <FiActivity className={isTesting ? "text-pgOrange animate-pulse" : "text-gray-300"} />
             </div>
             
             <div className="text-center py-4">
                <div className="text-4xl font-black text-pgBlue-dark italic tracking-tighter">
                   {isTesting ? "..." : speed || "1000"} 
                   <span className="text-sm not-italic ml-1 text-gray-400 uppercase">Мбит/с</span>
                </div>
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Скорость в реальном времени</div>
             </div>

             <button 
                onClick={runTest}
                disabled={isTesting}
                className="w-full border-2 border-gray-100 hover:border-pgOrange py-3 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all hover:text-pgOrange"
             >
                <FiRefreshCw className={isTesting ? "animate-spin" : ""} />
                {isTesting ? "Измеряем..." : "Запустить тест"}
             </button>
          </div>

          {/* БОНУСЫ / АКЦИИ */}
          <div className="bg-gradient-to-br from-pgBlue-dark to-black rounded-[2rem] p-7 text-white flex flex-col justify-between group cursor-pointer overflow-hidden relative">
             <div className="relative z-10">
                <div className="text-pgOrange text-[10px] font-black uppercase tracking-[0.2em] mb-2">Доступно вам</div>
                <div className="text-xl font-black italic tracking-tighter leading-tight">Заморозка <br/>цены навечно</div>
             </div>
             <div className="mt-4 relative z-10 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-bold uppercase italic">Статус: Активно</span>
                <FiChevronRight className="group-hover:translate-x-2 transition-transform text-pgOrange" size={24} />
             </div>
             <FiZap size={80} className="absolute -bottom-4 -right-4 text-white/5" />
          </div>

        </div>

        {/* МАРКЕТИНГОВЫЙ БАННЕР */}
        <div className="mt-8 relative w-full h-56 rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
            alt="Security"
          />
          <div className="relative z-20 p-10 flex flex-col items-start justify-center h-full max-w-xl text-white">
            <div className="bg-pgOrange text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">Отличное предложение</div>
            <h2 className="text-4xl font-black mb-3 italic tracking-tighter">Видеонаблюдение ПЖ19</h2>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-sm">
              Контролируйте свой дом из любой точки мира.
              <span className="text-pgOrange font-bold ml-1">Бесплатный монтаж</span> для новых абонентов.
            </p>
            <button className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest group/btn border-b-2 border-pgOrange pb-1">
              Узнать больше <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

      </main>

      <footer className="container mx-auto px-6 py-12 text-center">
        <div className="w-12 h-1 bg-gray-200 mx-auto mb-6 rounded-full" />
        <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">
          Цена зафиксирована на 12 месяцев • ПЖ19 Провайдер
        </p>
      </footer>
    </div>
  );
};

export default LKDashboard;