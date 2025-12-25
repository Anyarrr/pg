import { useState, useEffect } from 'react';
import { FiCheck, FiPlus, FiTv, FiWifi, FiZap, FiArrowRight, FiShield, FiStar } from 'react-icons/fi';

const UltimateOffer = () => {
    const [router, setRouter] = useState(false);
    const [tvBox, setTvBox] = useState(false);
    const [price, setPrice] = useState(699);
  
    useEffect(() => {
      const target = 699 + (router ? 99 : 0) + (tvBox ? 99 : 0);
      if (price !== target) {
        const timeout = setTimeout(() => {
          setPrice(price < target ? price + 1 : price - 1);
        }, 2);
        return () => clearTimeout(timeout);
      }
    }, [router, tvBox, price]);
  
    const categories = [
      { label: 'Кино', count: 31, color: 'bg-red-500' },
      { label: 'Детские', count: 13, color: 'bg-yellow-400' },
      { label: 'Спортивные', count: 15, color: 'bg-green-500' },
      { label: '4K контент', count: 2, color: 'bg-purple-600' },
      { label: 'Познавательные', count: 38, color: 'bg-pgBlue' },
    ];
  
    return (
      <section className="py-24 bg-white overflow-hidden font-sans">
        <div className="container mx-auto px-4">
          
          {/* ХЕДЛАЙН С МАГНИТОМ ВНИМАНИЯ */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-pgOrange/10 rounded-full border border-pgOrange/20 animate-pulse">
              <FiStar className="text-pgOrange fill-pgOrange" />
              <span className="text-xs font-black text-pgOrange uppercase tracking-[0.2em]">Выбор 85% новых абонентов в Таганроге</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-pgBlue-dark mb-8 tracking-tighter leading-none">
              Больше чем <span className="text-transparent bg-clip-text bg-gradient-to-r from-pgBlue to-pgOrange italic">Интернет.</span> <br />
              Это Ваша Свобода.
            </h2>
            
            <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Мы объединили <span className="text-pgBlue-dark font-bold underline decoration-pgOrange decoration-2">ультимативную скорость</span> и золотой фонд ТВ в одно предложение, от которого невозможно отказаться.
            </p>
          </div>
  
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* КАРТОЧКА 1: ЭНЕРГИЯ И СКОРОСТЬ */}
            <div className="lg:col-span-5 relative group">
              <div className="h-full bg-pgBlue-dark p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,43,91,0.25)] relative overflow-hidden flex flex-col justify-between transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 bg-pgOrange rounded-2xl flex items-center justify-center shadow-lg shadow-pgOrange/40">
                      <FiZap className="text-white text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white leading-tight uppercase">Скорость <br/> Hyper-Sonic</h3>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-8xl font-black text-white tracking-tighter italic drop-shadow-2xl">1000</span>
                    <span className="text-2xl text-blue-300 font-black uppercase italic">Мбит/с</span>
                  </div>

                  <div className="space-y-6 mb-12">
                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                      <p className="text-blue-100 text-sm leading-relaxed italic">
                        "Файл весом 1 Гб (фильм в HD) загрузится пока вы наливаете кофе — <span className="text-pgOrange font-bold">ровно за 20 секунд</span>."
                      </p>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-white font-bold">
                        <FiCheck className="text-pgOrange text-xl" />
                        <span>Коннект для 10+ устройств сразу</span>
                      </li>
                      <li className="flex items-center gap-3 text-white font-bold">
                        <FiCheck className="text-pgOrange text-xl" />
                        <span>0% задержки в играх и звонках</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Фоновая иконка молнии для стиля */}
                <FiZap className="absolute -bottom-10 -right-10 text-[18rem] text-white/[0.03] rotate-12" />
              </div>
            </div>
  
            {/* КАРТОЧКА 2: КОНТЕНТ И КАСТОМИЗАЦИЯ */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pgOrange/5 rounded-bl-[5rem]"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                  <div>
                    <h3 className="text-3xl font-black text-pgBlue-dark mb-2 uppercase">Цифровое Вселенная</h3>
                    <p className="text-pgOrange font-black tracking-widest text-sm uppercase flex items-center gap-2">
                       <span className="w-8 h-[2px] bg-pgOrange"></span> 191 КАНАЛ В Full HD & 4K
                    </p>
                  </div>
                  <button className="group px-8 py-4 bg-pgBlue-dark text-white rounded-2xl text-xs font-black transition-all uppercase tracking-widest hover:bg-pgBlue hover:shadow-lg flex items-center gap-2">
                    Посмотреть все <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
  
                {/* Категории как премиальные теги */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {categories.map((cat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 hover:border-pgOrange/30 hover:bg-white transition-all cursor-default shadow-sm group">
                      <div className={`w-3 h-3 rounded-full ${cat.color} group-hover:scale-125 transition-transform`} />
                      <span className="text-xs font-black text-pgBlue-dark uppercase tracking-tighter">{cat.label}</span>
                      <span className="text-xs font-bold text-gray-400">{cat.count}</span>
                    </div>
                  ))}
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Опция Роутер */}
                  <button 
                    onClick={() => setRouter(!router)}
                    className={`group relative flex items-center justify-between p-6 rounded-3xl transition-all border-2 ${router ? 'border-pgOrange bg-pgOrange/5 shadow-xl shadow-pgOrange/10' : 'border-gray-100 bg-gray-50 hover:border-pgBlue-light hover:bg-white'}`}
                  >
                    <div className="flex items-center gap-5 text-left">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${router ? 'bg-pgOrange text-white' : 'bg-white text-gray-400 shadow-sm'}`}>
                        <FiWifi size={24} />
                      </div>
                      <div>
                        <p className={`font-black uppercase text-sm ${router ? 'text-pgOrange' : 'text-pgBlue-dark'}`}>Wi-Fi 6 Роутер</p>
                        <p className="text-[10px] text-gray-400 font-bold">SNR-CPE-ME2 • +99 ₽</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${router ? 'bg-pgOrange border-pgOrange text-white' : 'border-gray-300'}`}>
                      {router && <FiCheck size={14} />}
                    </div>
                  </button>
  
                  {/* Опция ТВ-приставка */}
                  <button 
                    onClick={() => setTvBox(!tvBox)}
                    className={`group relative flex items-center justify-between p-6 rounded-3xl transition-all border-2 ${tvBox ? 'border-pgOrange bg-pgOrange/5 shadow-xl shadow-pgOrange/10' : 'border-gray-100 bg-gray-50 hover:border-pgBlue-light hover:bg-white'}`}
                  >
                    <div className="flex items-center gap-5 text-left">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${tvBox ? 'bg-pgOrange text-white' : 'bg-white text-gray-400 shadow-sm'}`}>
                        <FiTv size={24} />
                      </div>
                      <div>
                        <p className={`font-black uppercase text-sm ${tvBox ? 'text-pgOrange' : 'text-pgBlue-dark'}`}>ТВ-приставка</p>
                        <p className="text-[10px] text-gray-400 font-bold">Imaqliq G-Box • +99 ₽</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${tvBox ? 'bg-pgOrange border-pgOrange text-white' : 'border-gray-300'}`}>
                      {tvBox && <FiCheck size={14} />}
                    </div>
                  </button>
                </div>
              </div>
  
              {/* ПАНЕЛЬ ЗАКАЗА — МАКСИМАЛЬНЫЙ CTA */}
              <div className="bg-white p-4 rounded-[3.5rem] flex flex-col lg:flex-row items-center shadow-2xl border border-gray-100 relative overflow-hidden">
                 <div className="flex-1 px-10 py-6 text-center lg:text-left">
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-pgOrange mb-2">Цена зафиксирована на 1 год</p>
                    <div className="flex items-baseline justify-center lg:justify-start gap-2">
                      <span className="text-7xl font-black text-pgBlue-dark tracking-tighter">{price}</span>
                      <div className="flex flex-col">
                        <span className="text-2xl font-black text-pgBlue-dark leading-none">₽</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">в месяц</span>
                      </div>
                    </div>
                 </div>
                 
                 <div className="w-full lg:w-auto p-2">
                    <button className="w-full lg:w-auto bg-pgOrange hover:bg-pgOrange-hover text-white px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-4 group shadow-xl shadow-pgOrange/40 active:scale-95 text-lg">
                        ПОЛУЧИТЬ ДОСТУП
                        <FiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>

                 {/* Гарантия безопасности */}
                 <div className="absolute top-2 right-12 hidden lg:flex items-center gap-1 opacity-20">
                    <FiShield size={12} />
                    <span className="text-[8px] font-bold uppercase tracking-widest">Безопасное соединение</span>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  };
export default UltimateOffer;