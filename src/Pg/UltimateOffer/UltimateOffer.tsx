import React, { useState } from 'react';
import { FiGlobe, FiTv, FiZap, FiHome, FiCheckCircle, FiInfo, FiSmartphone, FiChevronRight } from 'react-icons/fi';

const UltimateOffer = () => {
  const [options, setOptions] = useState({
    type: 'flat',
    router: false,
    box: false,
  });

  const basePrice = 699;
  const totalPrice = basePrice + (options.router ? 99 : 0) + (options.box ? 99 : 0);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        
        {/* Заголовок блока */}
        <div className="text-center mb-16">
          <span className="bg-pgOrange/10 text-pgOrange px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">Бескомпромиссный интернет</span>
          <h2 className="text-4xl md:text-6xl font-black text-pgBlue-dark mt-6 mb-4">
            Всё и сразу. <span className="text-pgBlue italic">Без ограничений.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Мы создали идеальное предложение для Таганрога. Соберите свой комплект за 30 секунд.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-[0_40px_100px_rgba(0,43,91,0.08)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* ЛЕВАЯ ЧАСТЬ: КОНФИГУРАТОР */}
          <div className="lg:w-2/3 p-8 md:p-16 border-r border-gray-50">
            
            {/* ГДЕ ПОДКЛЮЧАЕМ */}
            <div className="mb-12">
              <label className="text-xs font-black uppercase tracking-tighter text-gray-400 mb-6 block">01. Где подключаем?</label>
              <div className="flex gap-4">
                <button 
                  onClick={() => setOptions({...options, type: 'flat'})}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all border-2 ${options.type === 'flat' ? 'border-pgBlue bg-pgBlue/5 text-pgBlue shadow-inner' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                >
                  <FiHome size={20} /> Квартира
                </button>
                <button 
                  onClick={() => setOptions({...options, type: 'house'})}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all border-2 ${options.type === 'house' ? 'border-pgBlue bg-pgBlue/5 text-pgBlue shadow-inner' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                >
                  <FiGlobe size={20} /> Частный дом
                </button>
              </div>
            </div>

            {/* СКОРОСТЬ */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <label className="text-xs font-black uppercase tracking-tighter text-gray-400 block">02. Скорость интернета</label>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Максимальная</span>
              </div>
              <div className="bg-pgBlue-dark rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-6xl font-black italic tracking-tighter">1000</span>
                    <span className="text-2xl font-bold text-blue-300">Мбит/с</span>
                  </div>
                  <p className="text-blue-100/70 text-sm leading-relaxed max-w-md">
                    Стабильная работа до <span className="text-pgOrange font-bold">10 устройств</span> одновременно. 
                    Файл 1 Гб скачивается всего за <span className="text-white font-bold underline decoration-pgOrange">20 секунд</span>.
                  </p>
                </div>
                <FiZap className="absolute -right-10 -bottom-10 text-[15rem] text-white/5 rotate-12 group-hover:text-pgOrange/10 transition-colors duration-700" />
              </div>
            </div>

            {/* ОБОРУДОВАНИЕ */}
            <div>
              <label className="text-xs font-black uppercase tracking-tighter text-gray-400 mb-6 block">03. Дополнительно</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  onClick={() => setOptions({...options, router: !options.router})}
                  className={`p-6 rounded-3xl border-2 cursor-pointer transition-all flex items-center gap-4 ${options.router ? 'border-pgOrange bg-pgOrange/5' : 'border-gray-100 hover:bg-gray-50'}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all ${options.router ? 'bg-pgOrange text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <FiZap />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-pgBlue-dark leading-none mb-1">Wi-Fi Роутер</h4>
                    <p className="text-[10px] text-gray-400">SNR-CPE-ME2</p>
                  </div>
                  <div className="font-black text-pgBlue-dark">+99 ₽</div>
                </div>

                <div 
                  onClick={() => setOptions({...options, box: !options.box})}
                  className={`p-6 rounded-3xl border-2 cursor-pointer transition-all flex items-center gap-4 ${options.box ? 'border-pgOrange bg-pgOrange/5' : 'border-gray-100 hover:bg-gray-50'}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all ${options.box ? 'bg-pgOrange text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <FiTv />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-pgBlue-dark leading-none mb-1">ТВ-приставка</h4>
                    <p className="text-[10px] text-gray-400">Imaqliq G-Box</p>
                  </div>
                  <div className="font-black text-pgBlue-dark">+99 ₽</div>
                </div>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ИТОГО И ТВ */}
          <div className="lg:w-1/3 bg-gray-50 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-pgBlue-dark italic">Ваш пакет</h3>
                <FiInfo className="text-gray-400" />
              </div>

              {/* ТВ СТАТИСТИКА */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pgBlue-light rounded-xl flex items-center justify-center text-pgBlue">
                      <FiTv size={20} />
                    </div>
                    <span className="font-bold text-gray-700">Цифровое ТВ</span>
                  </div>
                  <span className="text-pgOrange font-black">191 канал</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
                  <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" /> 31 Кино</div>
                  <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" /> 13 Детские</div>
                  <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" /> 23 HD-канала</div>
                  <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" /> 7 4K-канала</div>
                </div>
                
                <button className="w-full text-pgBlue text-xs font-bold border-b border-pgBlue/20 pb-1 hover:border-pgBlue transition-all">
                  Посмотреть весь список каналов
                </button>
              </div>
            </div>

            {/* ЦЕНА И КНОПКА */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase mb-1 tracking-widest">Итого в месяц</div>
                  <div className="text-5xl font-black text-pgBlue-dark tracking-tighter">
                    {totalPrice} <span className="text-xl">₽</span>
                  </div>
                </div>
                <div className="text-right text-[10px] text-gray-400 leading-tight">
                  г. Таганрог <br /> <span className="text-green-500 font-bold uppercase">В наличии</span>
                </div>
              </div>

              <button className="group w-full bg-pgOrange hover:bg-pgOrange-hover text-white font-black py-6 rounded-[2rem] text-xl shadow-2xl shadow-pgOrange/40 transition-all flex items-center justify-center gap-3 active:scale-95">
                ПОДКЛЮЧИТЬ <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-gray-400 mt-6 px-4">
                Цена зафиксирована на 12 месяцев. Никаких скрытых платежей.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UltimateOffer;