import React, { useState } from 'react';
import { FiSearch, FiWifi, FiTv, FiZap, FiMapPin, FiX, FiPhone } from 'react-icons/fi';

export const PgAddress = () => {
  const [address, setAddress] = useState<{ city: string; street: string; house: string }>({ city: 'Таганрог', street: '', house: '' });
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Проверка:', address);
    alert(`Заявка принята: ${address.city}, ${address.street}, ${address.house}`);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-12 bg-pgBlue-dark overflow-hidden">
      {/* Фоновое изображение с наложением */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
          alt="Digital City"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pgBlue-dark/50 via-pgBlue-dark to-pgBlue-dark"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Заголовок блока */}
          <div className="text-center mb-8 px-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tight whitespace-normal md:whitespace-nowrap leading-tight">
              Интернет <span className="text-pgOrange">ПЖ19</span> который ждали все
            </h1>
            <p className="text-blue-100 text-lg">Стабильная сеть и цифровые сервисы в одной заявке</p>
          </div>

          {/* ЕДИНЫЙ БЛОК: ПРЕИМУЩЕСТВА + ФОРМА */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20">
            
            {/* ВЕРХНЯЯ ЧАСТЬ: ПРЕИМУЩЕСТВА (как у МТС, но в нашем стиле) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 bg-pgBlue-light/30 border-b border-gray-100">
              <div className="flex flex-col items-center text-center group">
                <FiZap className="text-2xl text-pgOrange mb-2 group-hover:scale-110 transition" />
                <span className="text-xs md:text-sm font-bold text-pgBlue-dark">До 1000 Мбит/с</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <FiTv className="text-2xl text-pgOrange mb-2 group-hover:scale-110 transition" />
                <span className="text-xs md:text-sm font-bold text-pgBlue-dark">191 ТВ-канал</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <FiPhone className="text-2xl text-pgOrange mb-2 group-hover:scale-110 transition" />
                <span className="text-xs md:text-sm font-bold text-pgBlue-dark">Мобильная связь</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <FiWifi className="text-2xl text-pgOrange mb-2 group-hover:scale-110 transition" />
                <span className="text-xs md:text-sm font-bold text-pgBlue-dark">Wi-Fi роутер</span>
              </div>
            </div>

            {/* НИЖНЯЯ ЧАСТЬ: ПРОВЕРКА ПОДКЛЮЧЕНИЯ */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h3 className="text-xl font-extrabold text-gray-800 flex items-center gap-2">
                  <div className="w-2 h-6 bg-pgOrange rounded-full"></div>
                  Проверьте подключение своего адреса
                </h3>
                <button
                  type="button"
                  onClick={() => setIsMapOpen(true)}
                  className="flex items-center gap-2 text-pgBlue hover:text-pgOrange font-semibold transition group"
                >
                  <FiMapPin className="text-lg group-hover:scale-110 transition" />
                  <span>Указать на карте</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Город (заблокирован или выбор) */}
                <div className="relative">
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    placeholder="Город"
                    className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-pgBlue/30 rounded-2xl outline-none transition font-semibold"
                    required
                  />
                </div>

                {/* Улица */}
                <div className="md:col-span-1">
                  <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={handleChange}
                    placeholder="Улица"
                    className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-pgBlue/30 rounded-2xl outline-none transition font-semibold"
                    required
                  />
                </div>

                {/* Дом */}
                <div>
                  <input
                    type="text"
                    name="house"
                    value={address.house}
                    onChange={handleChange}
                    placeholder="Дом"
                    className="w-full p-4 bg-gray-100 md:bg-gray-50 border-2 border-transparent focus:border-pgBlue/30 rounded-2xl outline-none transition font-semibold"
                    required
                  />
                </div>

                {/* Кнопка */}
                <button
                  type="submit"
                  className="bg-pgOrange hover:bg-pgOrange-hover text-white font-black py-4 px-6 rounded-2xl shadow-lg shadow-pgOrange/30 flex items-center justify-center gap-2 transform active:scale-95 transition"
                >
                  <FiSearch className="text-xl" />
                  <span>ПРОВЕРИТЬ</span>
                </button>
              </form>
              
              <p className="mt-4 text-[10px] md:text-xs text-gray-400 text-center md:text-left">
                Нажимая «Проверить», вы даете согласие на обработку персональных данных.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Декоративная волна внизу */}
      <div className="absolute bottom-0 left-0 right-0 z-5 translate-y-1/4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-gray-50">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Модальное окно с картой */}
      {isMapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          {/* Затемнение фона */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMapOpen(false)}
          ></div>
          
          {/* Модальное окно */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden z-10 animate-scaleIn">
            {/* Заголовок модалки */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FiMapPin className="text-pgOrange" />
                Укажите адрес на карте
              </h4>
              <button
                onClick={() => setIsMapOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FiX className="text-2xl text-gray-500" />
              </button>
            </div>
            
            {/* Карта */}
            <div className="h-[60vh]">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                src="https://www.openstreetmap.org/export/embed.html?bbox=38.85%2C47.18%2C38.98%2C47.26&layer=mapnik&marker=47.2167%2C38.9167"
                style={{ border: 0 }}
                title="Карта Таганрога"
              ></iframe>
            </div>
            
            {/* Подсказка */}
            <div className="p-4 bg-gray-50 text-center">
              <p className="text-sm text-gray-500">
                Выберите точку на карте или введите адрес вручную в форме выше
              </p>
              <button
                onClick={() => setIsMapOpen(false)}
                className="mt-3 bg-pgOrange hover:bg-pgOrange-hover text-white font-bold py-3 px-8 rounded-xl transition"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};