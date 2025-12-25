import React, { useState } from 'react';
import { FiCoffee, FiArrowRight, FiX, FiSend, FiInfo, FiSmartphone, FiMessageCircle } from 'react-icons/fi';

const FastConnect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestType, setRequestType] = useState('connect'); // 'connect' или 'support'

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-pgBlue-light to-white rounded-[3rem] overflow-hidden shadow-xl border border-pgBlue/10 flex flex-col md:flex-row items-center">
          
          {/* Текстовый контент (без изменений) */}
          <div className="md:w-1/2 p-8 md:p-16">
            <div className="flex items-center gap-2 text-pgOrange font-bold mb-4 uppercase tracking-widest text-sm">
              <FiCoffee className="text-xl" />
              <span>Ваш комфорт — наш приоритет</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-pgBlue-dark mb-6 leading-tight">
              Быстрое <br />
              <span className="text-pgBlue">подключение</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              Оставьте заявку на сайте и садитесь пить чай. <br className="hidden md:block" />
              Все остальное мы сделаем сами. Не заставим Вас ждать с подключением!
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative bg-pgOrange hover:bg-pgOrange-hover text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              Подключиться
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Изображение (без изменений) */}
          <div className="md:w-1/2 relative h-[350px] md:h-[550px] w-full">
            <img src="https://images.unsplash.com/photo-1544739313-6fad02872377?auto=format&fit=crop&w=800&q=80" alt="Tea" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-pgBlue-light/20 to-transparent"></div>
            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white hidden md:block text-center">
                <div className="text-pgBlue-dark font-black text-2xl">24 часа</div>
                <div className="text-gray-500 text-sm">максимальный срок подключения</div>
            </div>
          </div>
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-pgBlue-dark/60 backdrop-blur-md transition-opacity" onClick={() => setIsModalOpen(false)}></div>

          <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-pgOrange transition-colors z-10">
              <FiX size={28} />
            </button>

            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-black text-pgBlue-dark mb-2">
                {requestType === 'connect' ? 'Заявка на подключение' : 'Служба поддержки'}
              </h3>
              
              {/* ПЕРЕКЛЮЧАТЕЛЬ */}
              <div className="flex p-1 bg-gray-100 rounded-2xl my-8">
                <button 
                  onClick={() => setRequestType('connect')}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${requestType === 'connect' ? 'bg-white text-pgBlue shadow-md' : 'text-gray-500'}`}
                >
                  ПОДКЛЮЧЕНИЕ
                </button>
                <button 
                  onClick={() => setRequestType('support')}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${requestType === 'support' ? 'bg-white text-pgBlue shadow-md' : 'text-gray-500'}`}
                >
                  ТЕХ.ПОДДЕРЖКА
                </button>
              </div>

              {/* КОНТЕНТ: ПОДКЛЮЧЕНИЕ */}
              {requestType === 'connect' ? (
                <div className="animate-in fade-in duration-500">
                  <p className="text-gray-500 mb-8 flex items-center gap-2">
                    <FiInfo className="text-pgOrange" />
                    Оформить заявку, получить информацию по тарифам
                  </p>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена!'); setIsModalOpen(false); }}>
                    <input type="text" placeholder="Ваше имя" className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pgOrange focus:bg-white rounded-2xl outline-none transition-all font-medium" required />
                    <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pgOrange focus:bg-white rounded-2xl outline-none transition-all font-medium" required />
                    <textarea placeholder="Адрес или комментарий" rows={3} className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pgOrange focus:bg-white rounded-2xl outline-none transition-all font-medium resize-none"></textarea>
                    <button type="submit" className="w-full bg-pgBlue hover:bg-pgBlue-dark text-white font-black py-5 rounded-2xl text-lg shadow-xl flex items-center justify-center gap-3 mt-6 transition-transform active:scale-95">
                      <FiSend /> ОТПРАВИТЬ
                    </button>
                  </form>
                </div>
              ) : (
                /* КОНТЕНТ: ТЕХ.ПОДДЕРЖКА */
                <div className="text-center animate-in slide-in-from-right-5 duration-500">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                       <div className="w-24 h-24 bg-pgBlue-light rounded-full flex items-center justify-center text-pgBlue text-5xl shadow-inner">
                          <FiSmartphone />
                       </div>
                       <div className="absolute -bottom-2 -right-2 bg-pgOrange text-white p-2 rounded-lg shadow-lg">
                          <FiMessageCircle size={20} />
                       </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-black text-pgBlue-dark mb-4">Для получения поддержки</h4>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 px-4">
                    (по платежам, работе оборудования, смене тарифа, сбоях в сети, работе личного кабинета) 
                    <br />
                    <span className="font-bold text-pgBlue italic">перейдите по ссылке нажав на кнопку:</span>
                  </p>

                  <a 
                    href="https://t.me/pg19_support" // Замени на свою ссылку
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-pgOrange hover:bg-pgOrange-hover text-white font-black py-5 rounded-2xl text-lg shadow-xl shadow-pgOrange/20 flex items-center justify-center gap-3 transition-transform active:scale-95 uppercase tracking-widest"
                  >
                    Связаться
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FastConnect;