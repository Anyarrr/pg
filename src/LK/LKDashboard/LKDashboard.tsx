import React from 'react';
import {  FiZap, FiArrowRight, 
  FiTv, FiWifi, FiChevronRight, FiPlusCircle
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
  return (
    <div className="min-h-screen bg-[#F2F3F7]">
      <LKHeader userPhone={userPhone} userName={userName} />
      
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-5xl">
        
        {/* ВЕРХНИЙ РЯД: ПРОФИЛЬ И БАЛАНС */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* ПРОФИЛЬ (8 колонок) */}
          <div className="lg:col-span-8 bg-[#1C1C1E] rounded-[2.5rem] p-8 text-white shadow-xl flex items-center">
            <div className="space-y-2">
              <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Личные данные</div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">{userName}</div>
              <div className="text-3xl font-black tracking-tighter italic">{userPhone}</div>
            </div>
          </div>

          {/* НОВЫЙ БЛОК БАЛАНСА (4 колонки) */}
          <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 shadow-xl border border-white flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-500">
            <div>
              <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Ваш баланс</div>
              <div className="text-3xl font-black text-pgBlue-dark italic tracking-tighter">1 500,00 ₽</div>
            </div>

            <div className="mt-6 flex justify-between items-end">
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Хватит на</div>
                <div className="text-2xl font-black text-pgOrange italic tracking-tighter">64 дн.</div>
              </div>
              <div className="text-right">
                <div className="text-[9px] font-bold text-gray-400 uppercase leading-none">Списание 01.01.2025</div>
                <div className="text-sm font-black text-pgBlue-dark">700,00 ₽</div>
              </div>
            </div>

            <button className="mt-6 w-full bg-pgBlue-dark hover:bg-black text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-lg shadow-pgBlue-dark/20">
              <FiPlusCircle size={16} className="text-pgOrange" />
              Пополнить
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* КОЛОНКА 1: ОСТАТКИ (СКОРОСТЬ И ПАКЕТЫ) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400">Остатки</h3>
                <FiChevronRight className="text-gray-300" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#F8F9FB] rounded-2xl p-5 border border-gray-50">
                  <div className="text-[10px] font-black text-gray-400 uppercase mb-1">Скорость интернета</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-pgBlue-dark italic tracking-tighter">1000</span>
                    <span className="text-sm font-bold text-gray-400 uppercase">Мбит/с</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-pgOrange w-full h-full shadow-[0_0_8px_rgba(255,102,0,0.5)]" />
                  </div>
                </div>

                <div className="bg-[#F8F9FB] rounded-2xl p-5 border border-gray-50">
                  <div className="text-[10px] font-black text-gray-400 uppercase mb-1">Трафик (Безлимит)</div>
                  <div className="text-3xl font-black text-pgBlue-dark italic tracking-tighter">∞ <span className="text-sm not-italic text-gray-400">Гб</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* КОЛОНКА 2: ПОДРОБНЕЕ О ТАРИФЕ */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400">Тариф и Скидки</h3>
                <FiChevronRight className="text-gray-300" />
              </div>
              
              <div className="mb-4">
                <div className="text-lg font-black text-pgBlue-dark italic leading-tight uppercase tracking-tighter">Супер онлайн+ 1000М</div>
                <p className="text-[11px] font-medium text-gray-400 mt-2">
                  Абонентская плата 799 ₽ будет списана 20 января
                </p>
              </div>

              <div className="bg-[#F2F7FF] rounded-2xl p-4 mb-6 border border-blue-50">
                <p className="text-[10px] font-black text-pgBlue uppercase tracking-tighter leading-tight italic">
                  Персональная скидка 280 ₽ <br/>действует до 17.01.2026
                </p>
              </div>

              <div className="mt-auto">
                <div className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-xl inline-flex items-center gap-2">
                  <FiZap size={12} fill="white" /> Заморозили цену навечно
                </div>
              </div>
            </div>
          </div>

          {/* КОЛОНКА 3: УСЛУГИ */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 group cursor-pointer h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400">Подключено</h3>
                <FiChevronRight className="text-gray-300" />
              </div>
              <div className="space-y-5">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-pgOrange shadow-inner">
                      <FiTv size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-gray-800 italic">191 канал ТВ</div>
                      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Тариф "Макси"</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-pgBlue shadow-inner">
                      <FiWifi size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-gray-800 italic">Гигабитный роутер</div>
                      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Аренда 0 ₽</div>
                    </div>
                 </div>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-50 text-[10px] font-black text-pgBlue uppercase tracking-widest">
                Всего 3 услуги
              </div>
            </div>
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
            <div className="bg-pgOrange text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">Акция месяца</div>
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



// import React from 'react';
// import {  FiZap, FiArrowRight, FiTv, FiWifi, FiChevronRight, FiPlus, FiCpu } from 'react-icons/fi';
// import { LKHeader } from '../LKHeader/LKHeader';

// interface LKDashboardProps {
//   userPhone?: string;
//   userName?: string;
// }

// const LKDashboard: React.FC<LKDashboardProps> = ({ 
//   userPhone = '+7 (952) 577-95-87',
//   userName = 'Манаев Евгений Александрович' 
// }) => {
//   return (
//     <div className="min-h-screen bg-[#F8F9FD] text-[#1C1C1E] font-sans selection:bg-pgOrange selection:text-white">
//       <LKHeader userPhone={userPhone} userName={userName} />
      
//       <main className="container mx-auto px-4 pt-28 pb-16 max-w-6xl">
        
//         {/* TOP SECTION: PROFILE & FINANCES */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          
//           {/* PROFILE CARD: Креативный темный блок */}
//           <div className="lg:col-span-7 bg-[#1C1C1E] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[280px]">
//             <div className="relative z-10">
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 mb-6">
//                 <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
//                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Активен</span>
//               </div>
//               <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-2 italic">
//                 {userName}
//               </h1>
//               <p className="text-xl font-medium text-gray-400 tracking-tight">{userPhone}</p>
//             </div>

//             <div className="relative z-10 mt-8 flex gap-4">
//               <div className="px-4 py-2 bg-white/5 rounded-2xl border border-white/5 flex flex-col">
//                 <span className="text-[9px] font-bold text-gray-500 uppercase">Договор</span>
//                 <span className="font-bold text-sm">№ 2024-9587</span>
//               </div>
//               <div className="px-4 py-2 bg-white/5 rounded-2xl border border-white/5 flex flex-col">
//                 <span className="text-[9px] font-bold text-gray-500 uppercase">Статус</span>
//                 <span className="font-bold text-sm text-pgOrange">VIP Клиент</span>
//               </div>
//             </div>

//             {/* Декор фона */}
//             <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-pgOrange/20 blur-[100px] rounded-full" />
//             <div className="absolute right-10 top-10 opacity-10">
//               <FiCpu size={120} />
//             </div>
//           </div>

//           {/* BALANCE CARD: Минималистичный "Стеклянный" блок */}
//           <div className="lg:col-span-5 bg-white rounded-[3rem] p-10 shadow-xl shadow-blue-900/5 border border-white relative flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Доступный остаток</h3>
//                 <div className="text-5xl font-black text-pgBlue-dark italic tracking-tighter">1 500,00 <span className="text-2xl not-italic text-gray-300">₽</span></div>
//               </div>
//               <button className="w-12 h-12 bg-pgOrange text-white rounded-2xl flex items-center justify-center shadow-lg shadow-pgOrange/30 hover:scale-110 transition-transform">
//                 <FiPlus size={24} />
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-50">
//               <div>
//                 <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Хватит до</p>
//                 <p className="text-xl font-black text-pgBlue-dark italic">04 Марта</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-[10px] font-bold text-gray-400 uppercase mb-1 italic">Списание 01.01</p>
//                 <p className="text-xl font-black text-pgOrange italic">700,00 ₽</p>
//               </div>
//             </div>

//             <button className="mt-8 w-full bg-[#1C1C1E] text-white font-black py-5 rounded-[2rem] hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3 uppercase text-[11px] tracking-widest">
//               Мгновенное пополнение
//             </button>
//           </div>
//         </div>

//         {/* MIDDLE SECTION: INTERNET & SERVICES */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
//           {/* SPEED WIDGET */}
//           <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-white flex flex-col items-center text-center">
//             <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
//               <FiZap size={32} className="text-pgBlue-dark relative z-10" />
//               <div className="absolute inset-0 bg-pgBlue/10 rounded-full animate-ping" />
//             </div>
//             <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">Скорость линии</h3>
//             <div className="text-4xl font-black text-pgBlue-dark italic tracking-tighter">1000 <span className="text-sm not-italic text-gray-400">Мбит/с</span></div>
//             <div className="w-full h-1.5 bg-gray-100 rounded-full mt-6 overflow-hidden">
//               <div className="w-[100%] h-full bg-gradient-to-r from-pgBlue to-pgOrange" />
//             </div>
//             <p className="text-[10px] font-bold text-gray-400 mt-3 uppercase">Стабильное соединение</p>
//           </div>

//           {/* TARIFF WIDGET */}
//           <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-white relative overflow-hidden group">
//             <div className="flex justify-between items-start mb-10">
//               <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-pgOrange">
//                 <FiZap size={24} />
//               </div>
//               <span className="bg-pgBlue-dark text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase italic">Hot Price</span>
//             </div>
//             <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">Мой тариф</h3>
//             <div className="text-2xl font-black text-pgBlue-dark italic leading-tight mb-4 group-hover:text-pgOrange transition-colors">Супер онлайн+ <br/> Ultra Connect</div>
//             <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pgBlue hover:gap-4 transition-all">
//               Настроить тариф <FiArrowRight />
//             </button>
//           </div>

//           {/* SERVICES WIDGET */}
//           <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-white">
//             <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-6">Доп. услуги</h3>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
//                 <div className="flex items-center gap-3">
//                   <FiTv className="text-pgOrange" />
//                   <span className="text-sm font-black italic">191 ТВ-канал</span>
//                 </div>
//                 <span className="text-[10px] font-bold text-gray-400">Вкл.</span>
//               </div>
//               <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
//                 <div className="flex items-center gap-3">
//                   <FiWifi className="text-pgBlue" />
//                   <span className="text-sm font-black italic">Wi-Fi 6 Router</span>
//                 </div>
//                 <span className="text-[10px] font-bold text-gray-400">Аренда</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM SECTION: CREATIVE BANNER */}
//         <div className="mt-12 relative group cursor-pointer">
//           <div className="absolute -inset-1 bg-gradient-to-r from-pgOrange to-pgBlue rounded-[3.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
//           <div className="relative bg-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
//             <div className="lg:w-1/2 p-12 flex flex-col justify-center items-start">
//               <div className="text-pgOrange text-[11px] font-black uppercase tracking-[0.3em] mb-4">Премиальный сервис</div>
//               <h2 className="text-4xl font-black text-pgBlue-dark italic tracking-tighter mb-6 leading-none">
//                 Видеонаблюдение <br/> нового поколения
//               </h2>
//               <p className="text-gray-500 mb-8 max-w-sm text-sm font-medium leading-relaxed">
//                 Смотрите за домом в 4K качестве с интеллектуальным распознаванием лиц и ночным видением.
//               </p>
//               <button className="bg-pgBlue-dark text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-pgOrange transition-all flex items-center gap-3 shadow-xl">
//                 Подключить бесплатно <FiArrowRight />
//               </button>
//             </div>
//             <div className="lg:w-1/2 relative h-64 lg:h-auto">
//               <img 
//                 src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80" 
//                 className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//                 alt="Smart Home"
//               />
//               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white lg:to-transparent" />
//             </div>
//           </div>
//         </div>

//       </main>

//       <footer className="container mx-auto px-6 py-10">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-10">
//           <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">Life in Digital Flow • 2025</p>
//           <div className="flex gap-8">
//             <a href="#" className="text-[10px] font-black text-gray-400 hover:text-pgOrange uppercase tracking-widest transition-colors">Помощь</a>
//             <a href="#" className="text-[10px] font-black text-gray-400 hover:text-pgOrange uppercase tracking-widest transition-colors">Оплата</a>
//             <a href="#" className="text-[10px] font-black text-gray-400 hover:text-pgOrange uppercase tracking-widest transition-colors">Офисы</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LKDashboard;