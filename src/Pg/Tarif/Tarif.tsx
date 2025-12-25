import { useState, useEffect, useRef } from 'react';
import { 
  FiCheck, FiZap, FiX, FiVideo, FiShield,
  FiGlobe, FiChevronRight, FiCheckCircle, FiInfo, FiMapPin, FiUser, FiPhone, FiLock, FiSmartphone, FiEye
} from 'react-icons/fi';

// ... (Ваш блок типов и начальное состояние UltimateOfferResult остается прежним)

const Tarif = () => {
    // ... (Все существующие состояния и эффекты для интернета и модалки остаются без изменений)
    const [options, setOptions] = useState({ type: 'flat', router: false, box: false });
    const [price, setPrice] = useState(799);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [address, setAddress] = useState('');
    const ymapsRef = useRef(null);

    // Добавим функцию для открытия модалки под конкретный сервис (опционально для текста)
    const [activeService, setActiveService] = useState('Интернет + ТВ');

    const handleOpenModal = (serviceName = 'Интернет + ТВ') => {
      setActiveService(serviceName);
      setIsModalOpen(true);
      setIsClosing(false);
      setIsOpening(true);
      setTimeout(() => setIsOpening(false), 10);
    };

    // Данные для видеонаблюдения
    const videoTariffs = [
      { id: 1, name: 'Видеопакет 1', days: '5 дней', price: 299, color: 'from-blue-400 to-blue-600' },
      { id: 2, name: 'Видеопакет 2', days: '15 дней', price: 599, color: 'from-purple-500 to-purple-700' },
      { id: 3, name: 'Видеопакет 3', days: '30 дней', price: 899, color: 'from-pgBlue-dark to-black' },
    ];

    // ... (Эффекты для цены и Яндекс.Карт берем из предыдущего кода)
    // Оставим их здесь (сокращено для фокуса на новом контенте)
    useEffect(() => { /* Эффект живой цены */ }, [options]);
    useEffect(() => { /* Эффект инициализации карты */ }, [isModalOpen]);
    useEffect(() => { /* Геокодинг */ }, [address]);

    const totalPrice = price;

  return (
    <div className="bg-[#F8FAFC]">
      {/* СУЩЕСТВУЮЩИЙ БЛОК ИНТЕРНЕТА (UltimateOfferResult) */}
      <section className="py-24 overflow-hidden">
        {/* ... (Ваш основной блок с конфигуратором интернета, который мы делали ранее) ... */}
        {/* Просто убедитесь, что кнопка "ПОДКЛЮЧИТЬ" вызывает handleOpenModal('Ультимативный Интернет') */}
      </section>

      {/* НОВЫЙ РАЗДЕЛ: СМАРТ-СЕРВИСЫ */}
      <section className="pb-32 container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-8">
          
          {/* БЛОК ВИДЕОНАБЛЮДЕНИЯ */}
          <div className="xl:w-2/3">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 h-full relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
                    <FiVideo size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-pgBlue-dark tracking-tighter">Видеонаблюдение</h2>
                    <p className="text-gray-400 font-bold text-sm">Таганрог: Безопасность под вашим контролем 24/7</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {videoTariffs.map((tariff) => (
                    <div key={tariff.id} className="group bg-gray-50 rounded-[2.5rem] p-6 border border-gray-100 hover:border-pgOrange transition-all hover:shadow-2xl hover:-translate-y-2">
                      <div className={`h-2 w-12 rounded-full bg-gradient-to-r ${tariff.color} mb-6`}></div>
                      <h4 className="font-black text-pgBlue-dark text-xl mb-1">{tariff.name}</h4>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Запись FullHD 1080p</p>
                      
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                          <FiCheckCircle className="text-green-500" /> Облачное хранение
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                          <FiCheckCircle className="text-pgOrange" /> Архив {tariff.days}
                        </div>
                      </div>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-black text-pgBlue-dark">{tariff.price}</span>
                        <span className="text-sm font-bold text-gray-400">₽/мес</span>
                      </div>

                      <button 
                        onClick={() => handleOpenModal(`Видеонаблюдение: ${tariff.name}`)}
                        className="w-full py-4 bg-white border-2 border-gray-100 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-pgOrange hover:text-white hover:border-pgOrange transition-all"
                      >
                        Подключить
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-8 px-4 py-6 bg-pgBlue-dark rounded-[2rem] text-white">
                    <div className="flex items-center gap-3">
                        <FiShield className="text-pgOrange" size={24} />
                        <span className="text-xs font-bold">Хранение до 30 дней</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiZap className="text-pgOrange" size={24} />
                        <span className="text-xs font-bold">Установка IP-камер</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiSmartphone className="text-pgOrange" size={24} />
                        <span className="text-xs font-bold">Доступ со смартфона</span>
                    </div>
                </div>
              </div>
              <FiVideo className="absolute -right-20 -top-20 text-[20rem] text-gray-50 pointer-events-none" />
            </div>
          </div>

          {/* БЛОК ДОМОФОНИИ */}
          <div className="xl:w-1/3">
            <div className="bg-gradient-to-br from-pgBlue-dark to-pgBlue rounded-[3rem] p-8 md:p-12 shadow-xl text-white h-full relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-pgOrange mb-8 backdrop-blur-xl border border-white/10">
                    <FiLock size={32} />
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter mb-4 leading-none">Умная<br/>Домофония</h2>
                  <p className="text-blue-200 font-bold text-sm mb-8">Ваш телефон — это ключ от двери</p>

                  <ul className="space-y-4 mb-12">
                    {[
                      { icon: <FiSmartphone/>, t: 'Открытие двери из любой точки мира' },
                      { icon: <FiEye/>, t: 'Видеозвонки на экран смартфона' },
                      { icon: <FiCheck/>, t: 'История посещений с фото гостей' },
                      { icon: <FiZap/>, t: 'Индивидуальные коды доступа' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 group/li">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-pgOrange group-hover/li:bg-pgOrange group-hover/li:text-white transition-all">
                          {item.icon}
                        </div>
                        <span className="text-xs font-bold text-blue-50">{item.t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300 mb-2">Стартовая цена</p>
                    <div className="flex items-baseline gap-2 font-black">
                      <span className="text-4xl italic">от 150</span>
                      <span className="text-lg uppercase">₽/мес</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleOpenModal('Умная Домофония')}
                    className="w-full bg-pgOrange hover:bg-white hover:text-pgOrange text-white font-black py-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                  >
                    Хочу такой <FiChevronRight />
                  </button>
                </div>
              </div>
              <FiLock className="absolute -right-16 -bottom-16 text-[18rem] text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </section>

      {/* --- МОДАЛЬНОЕ ОКНО (Берем из предыдущего кода полностью) --- */}
      {/* Только в заголовке формы добавьте:
          <h3 className="text-3xl font-black text-pgBlue-dark mb-2 tracking-tighter">Оформить заявку</h3>
          <p className="text-gray-400 text-sm font-bold">Выбранный сервис: <span className="text-pgOrange">{activeService}</span></p>
      */}
      {/* ... (код модалки с картой и формой) ... */}
    </div>
  );
};

export default Tarif;