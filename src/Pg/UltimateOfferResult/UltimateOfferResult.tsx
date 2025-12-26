// import { useState, useEffect, useRef } from 'react';
// import {
//   FiCheck, FiTv, FiZap, FiStar, FiHome, FiX,
//   FiGlobe, FiChevronRight, FiCheckCircle, FiInfo, FiMapPin, FiUser, FiPhone
// } from 'react-icons/fi';

// // Типы для Яндекс.Карт
// declare global {
//   interface Window {
//     ymaps: any;
//   }
// }
// const UltimateOfferResult = () => {
//   const [options, setOptions] = useState({
//     type: 'flat',
//     router: false,
//     box: false,
//   });
//   const [price, setPrice] = useState(799);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const [isOpening, setIsOpening] = useState(false);

//   // Состояния для формы
//   const [address, setAddress] = useState('');
//   const ymapsRef = useRef<any>(null);

//   useEffect(() => {
//     const target = 799 + (options.router ? 99 : 0) + (options.box ? 99 : 0);
//     if (price !== target) {
//       const timeout = setTimeout(() => {
//         setPrice(price < target ? price + 1 : price - 1);
//       }, 2);
//       return () => clearTimeout(timeout);
//     }
//   }, [options, price]);

//   // Загрузка Яндекс.Карт при открытии модалки
//   useEffect(() => {
//     // Инициализируем карту только когда модалка открыта и анимация завершена
//     if (isModalOpen && !isOpening && !ymapsRef.current && typeof window !== 'undefined') {
//       // Проверяем, не загружен ли уже скрипт Яндекс.Карт
//       const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');

//       const initMap = () => {
//         const mapElement = document.getElementById("yandex-map");
//         if (mapElement && !ymapsRef.current && window.ymaps) {
//           window.ymaps.ready(() => {
//             try {
//               ymapsRef.current = new window.ymaps.Map("yandex-map", {
//                 center: [47.2213, 38.9135], // Таганрог
//                 zoom: 12,
//                 controls: ['zoomControl']
//               });
//             } catch (error) {
//               console.error('Ошибка инициализации карты:', error);
//             }
//           });
//         }
//       };

//       if (existingScript) {
//         // Скрипт уже загружен
//         if (window.ymaps) {
//           initMap();
//         } else {
//           // Ждем загрузки ymaps
//           const checkYmaps = setInterval(() => {
//             if (window.ymaps) {
//               clearInterval(checkYmaps);
//               initMap();
//             }
//           }, 100);
//           setTimeout(() => clearInterval(checkYmaps), 5000);
//         }
//       } else {
//         // Загружаем скрипт
//         const script = document.createElement('script');
//         script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU`;
//         script.onload = () => {
//           if (window.ymaps) {
//             // Небольшая задержка для гарантии, что элемент уже в DOM
//             setTimeout(initMap, 200);
//           }
//         };
//         document.head.appendChild(script);
//       }
//     }

//     // Очистка при закрытии модалки
//     return () => {
//       if (!isModalOpen && ymapsRef.current) {
//         try {
//           ymapsRef.current.destroy();
//         } catch (error) {
//           console.error('Ошибка при уничтожении карты:', error);
//         }
//         ymapsRef.current = null;
//       }
//     };
//   }, [isModalOpen, isOpening]);

//   // Геокодирование адреса при вводе
//   useEffect(() => {
//     if (ymapsRef.current && address.length > 5 && window.ymaps) {
//       const delayDebounceFn = setTimeout(() => {
//         window.ymaps.geocode(`Таганрог, ${address}`, { results: 1 }).then((res: any) => {
//           const firstGeoObject = res.geoObjects.get(0);
//           if (firstGeoObject && ymapsRef.current) {
//             const coords = firstGeoObject.geometry.getCoordinates();
//             ymapsRef.current.setCenter(coords, 16, { duration: 500 });
//             ymapsRef.current.geoObjects.removeAll();
//             ymapsRef.current.geoObjects.add(new window.ymaps.Placemark(coords, {
//               balloonContent: address
//             }, {
//               preset: 'islands#orangeDotIcon'
//             }));
//           }
//         });
//       }, 1000);
//       return () => clearTimeout(delayDebounceFn);
//     }
//   }, [address]);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//     setIsClosing(false);
//     setIsOpening(true);
//     setTimeout(() => setIsOpening(false), 10);
//   };

//   const handleCloseModal = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsModalOpen(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   useEffect(() => {
//     if (isModalOpen && !isClosing) {
//       // Устанавливаем начальное состояние для анимации открытия
//       setIsOpening(true);
//       // Даем браузеру время отрендерить элемент, затем запускаем анимацию
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           setIsOpening(false);
//         });
//       });
//     }
//   }, [isModalOpen, isClosing]);

//   const totalPrice = price;

//   return (
//     <section id="tariffs" className="py-24 bg-[#F8FAFC] overflow-hidden">
//       <div className="container mx-auto px-4">

//         {/* МАРКЕТИНГОВЫЙ ЗАГОЛОВОК */}
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-pgOrange/10 rounded-full border border-pgOrange/20 animate-pulse">
//             <FiStar className="text-pgOrange fill-pgOrange" />
//             <span className="text-xs font-black text-pgOrange uppercase tracking-[0.2em]">Лучший выбор абонентов 2026 года </span>
//           </div>

//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-pgBlue-dark mb-8 tracking-tighter leading-none">
//             Больше чем <span className="text-transparent bg-clip-text bg-gradient-to-r from-pgBlue to-pgOrange italic">Интернет.</span> <br />
//             Это Ваша Свобода.
//           </h2>

//           <p className="text-gray-500 text-x font-medium max-w-2xl mx-auto leading-relaxed">
//             Мы объединили <span className="text-pgBlue-dark font-bold underline decoration-pgOrange decoration-2">ультимативную скорость</span> и золотой фонд ТВ в одно предложение, от которого невозможно отказаться.
//           </p>
//         </div>

//         {/* ГЛАВНЫЙ БОКС КОНФИГУРАТОРА */}
//         <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,43,91,0.07)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row">

//           {/* ЛЕВАЯ ПАНЕЛЬ: ВЫБОР И МОЩНОСТЬ */}
//           <div className="lg:w-2/3 p-6 md:p-10 border-r border-gray-50">

//             {/* ШАГ 2: ВИЗУАЛИЗАЦИЯ СКОРОСТИ (ГЛАВНЫЙ МАГНИТ) */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
//                   <span className="text-[9px] font-black text-green-600 uppercase">Максимальная</span>
//                 </div>
//               </div>
//               <div className="bg-pgBlue-dark rounded-[2rem] p-6 text-white relative overflow-hidden group">
//                 <div className="relative z-10">
//                   <div className="flex items-baseline gap-2 mb-4">
//                     <span className="text-5xl md:text-6xl font-black italic tracking-tighter drop-shadow-lg">1000</span>
//                     <span className="text-xl font-bold text-blue-300">Мбит/с</span>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-sm">
//                     <p className="text-blue-50 text-xs leading-relaxed mb-3">
//                       Это <span className="text-pgOrange font-black underline">в 10 раз быстрее</span> обычного интернета.

//                       Фильм в 4K скачается за <span className="font-bold">20 секунд</span>, пока вы моргаете.
//                     </p>
//                     <ul className="space-y-2">
//                       <li className="flex items-center gap-2 text-white font-bold">
//                         <FiCheck className="text-pgOrange text-lg" />
//                         <span className="text-xs">Коннект для 10+ устройств сразу</span>
//                       </li>
//                       <li className="flex items-center gap-2 text-white font-bold">
//                         <FiCheck className="text-pgOrange text-lg" />
//                         <span className="text-xs">0% задержки в играх и звонках</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <FiZap className="absolute -right-8 -bottom-8 text-[12rem] text-white/[0.03] rotate-12 group-hover:text-pgOrange/10 transition-colors duration-1000" />
//               </div>

//             </div>

//           </div>

//           {/* ПРАВАЯ ЧАСТЬ: ИТОГО И ТВ */}
//           <div className="lg:w-1/3 bg-gray-50 p-6 md:p-8 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-xl font-black text-pgBlue-dark italic">Ваш пакет</h3>
//                 <FiInfo className="text-gray-400" size={18} />
//               </div>

//               {/* ТВ СТАТИСТИКА */}
//               <div className="space-y-3 mb-8">
//                 <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100">
//                   <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 bg-pgBlue-light rounded-lg flex items-center justify-center text-pgBlue">
//                       <FiTv size={16} />
//                     </div>
//                     <span className="font-bold text-sm text-gray-700">Цифровое ТВ</span>
//                   </div>
//                   <span className="text-pgOrange font-black text-sm">191 канал</span>
//                 </div>

//                 <div className="grid grid-cols-2 gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest px-1">
//                   <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" size={12} /> 31 Кино</div>
//                   <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" size={12} /> 13 Детские</div>
//                   <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" size={12} /> 23 HD-канала</div>
//                   <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" size={12} /> 7 4K-канала</div>
//                 </div>

//                 <button className="w-full text-pgBlue text-[10px] font-bold border-b border-pgBlue/20 pb-1 hover:border-pgBlue transition-all">
//                   Посмотреть весь список каналов
//                 </button>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 mb-6">
//               <div
//                 onClick={() => setOptions({ ...options, router: !options.router })}
//                 className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 relative ${options.router ? 'border-pgOrange bg-pgOrange/5' : 'border-gray-100 hover:bg-gray-50'}`}
//               >
//                 <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all ${options.router ? 'bg-pgOrange text-white' : 'bg-gray-100 text-gray-400'}`}>
//                   <FiZap />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-sm text-pgBlue-dark leading-none mb-0.5">Wi-Fi Роутер</h4>
//                   <p className="text-[9px] text-gray-400">SNR-CPE-ME2</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="font-black text-sm text-pgBlue-dark">+99 ₽</div>
//                   <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${options.router ? 'bg-pgOrange' : 'bg-gray-200 border-2 border-gray-300'
//                     }`}>
//                     {options.router && (
//                       <FiCheck className="text-white" size={12} />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div
//                 onClick={() => setOptions({ ...options, box: !options.box })}
//                 className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 relative ${options.box ? 'border-pgOrange bg-pgOrange/5' : 'border-gray-100 hover:bg-gray-50'}`}
//               >
//                 <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all ${options.box ? 'bg-pgOrange text-white' : 'bg-gray-100 text-gray-400'}`}>
//                   <FiTv />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-sm text-pgBlue-dark leading-none mb-0.5">ТВ-приставка</h4>
//                   <p className="text-[9px] text-gray-400">Imaqliq G-Box</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="font-black text-sm text-pgBlue-dark">+99 ₽</div>
//                   <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${options.box ? 'bg-pgOrange' : 'bg-gray-200 border-2 border-gray-300'
//                     }`}>
//                     {options.box && (
//                       <FiCheck className="text-white" size={12} />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ЦЕНА И КНОПКА */}
//             <div className="pt-6 border-t border-gray-200">
//               <div className="flex items-end justify-between mb-4">
//                 <div>
//                   <div className="text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-widest">Итого в месяц</div>
//                   <div className="text-4xl font-black text-pgBlue-dark tracking-tighter">
//                     {totalPrice} <span className="text-lg">₽</span>
//                   </div>
//                 </div>
//                 <div className="text-right text-[9px] text-gray-400 leading-tight">
//                   г. Таганрог <br /> <span className="text-green-500 font-bold uppercase">В наличии</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleOpenModal}
//                 className="group w-full bg-pgOrange hover:bg-pgOrange-hover text-white font-black py-4 rounded-xl text-lg shadow-xl shadow-pgOrange/40 transition-all flex items-center justify-center gap-2 active:scale-95"
//               >
//                 ПОДКЛЮЧИТЬ <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
//               </button>
//               <p className="text-[9px] text-center text-gray-400 mt-4 px-3">
//                 Цена зафиксирована на 12 месяцев. Никаких скрытых платежей.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* --- МОДАЛЬНОЕ ОКНО С КАРТОЙ И ФОРМОЙ --- */}
//       {isModalOpen && (
//         <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 transition-all duration-300 ${isClosing ? 'opacity-0' : isOpening ? 'opacity-0' : 'opacity-100'
//           }`}>
//           {/* Overlay */}
//           <div
//             className={`absolute inset-0 bg-pgBlue-dark/80 backdrop-blur-md transition-opacity duration-300 ${isClosing ? 'opacity-0' : isOpening ? 'opacity-0' : 'opacity-100'
//               }`}
//             onClick={handleCloseModal}
//           ></div>

//           <div className={`relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] transition-all duration-300 ${isClosing
//               ? 'opacity-0 scale-95 translate-y-4'
//               : isOpening
//                 ? 'opacity-0 scale-95 translate-y-4'
//                 : 'opacity-100 scale-100 translate-y-0'
//             }`}>

//             {/* Кнопка закрытия */}
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-6 right-6 z-50 w-12 h-12 bg-gray-100 hover:bg-pgOrange hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg"
//             >
//               <FiX size={24} />
//             </button>

//             {/* КАРТА (ЛЕВАЯ ЧАСТЬ) */}
//             <div className="md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
//               <div id="yandex-map" className="w-full h-full"></div>

//               {/* Оверлей если адрес не введен */}
//               <div
//                 className={`absolute inset-0 bg-pgBlue-dark/10 backdrop-blur-[2px] pointer-events-none flex items-center justify-center transition-all duration-500 ${address ? 'opacity-0 invisible' : 'opacity-100 visible'
//                   }`}
//               >
//                 <div className={`bg-white/90 p-6 rounded-3xl shadow-xl text-center border border-pgOrange/20 transition-all duration-500 ${address ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
//                   }`}>
//                   <FiMapPin className="text-pgOrange text-3xl mx-auto mb-2" />
//                   <p className="text-xs font-black text-pgBlue-dark uppercase">Укажите адрес справа</p>
//                 </div>
//               </div>
//             </div>

//             {/* ФОРМА (ПРАВАЯ ЧАСТЬ) */}
//             <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
//               <div className="mb-8">
//                 <h3 className="text-3xl font-black text-pgBlue-dark mb-2 tracking-tighter">Оформить заявку</h3>
//                 <p className="text-gray-400 text-sm font-bold">Программа: <span className="text-pgOrange">Персональный {totalPrice} ₽/мес</span></p>
//               </div>

//               <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//                 {/* Выбор типа */}
//                 <div className="flex p-1 bg-gray-100 rounded-2xl">
//                   {['Квартира', 'Дом', 'Офис'].map((t) => (
//                     <button key={t} type="button" className={`flex-1 py-3 text-xs font-black rounded-xl transition-all ${options.type === t.toLowerCase() ? 'bg-white text-pgBlue shadow-sm' : 'text-gray-400'}`} onClick={() => setOptions({ ...options, type: t.toLowerCase() })}>{t}</button>
//                   ))}
//                 </div>

//                 {/* Поля ввода */}
//                 <div className="relative group">
//                   <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pgOrange transition-colors" />
//                   <input
//                     type="text"
//                     placeholder="Адрес подключения"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-pgOrange outline-none transition-all font-bold text-sm"
//                   />
//                 </div>

//                 <div className="relative group">
//                   <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pgOrange transition-colors" />
//                   <input type="text" placeholder="Как к вам обращаться?*" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-pgOrange outline-none transition-all font-bold text-sm" />
//                 </div>

//                 <div className="relative group">
//                   <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pgOrange transition-colors" />
//                   <input type="tel" placeholder="Телефон*" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-pgOrange outline-none transition-all font-bold text-sm" />
//                 </div>

//                 <button className="w-full bg-pgBlue-dark text-white font-black py-5 rounded-2xl text-lg hover:bg-pgBlue transition-all shadow-xl shadow-pgBlue-dark/20 flex items-center justify-center gap-3">
//                   ОТПРАВИТЬ ЗАЯВКУ <FiChevronRight />
//                 </button>

//                 {/* Дисклеймер */}
//                 <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
//                   Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с
//                   <span className="text-pgBlue-dark underline cursor-pointer ml-1">политикой конфиденциальности</span>, миссией компании и уставом ПИК ПЖ19.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default UltimateOfferResult;


import { useState, useEffect, useRef } from 'react';
import {
  FiCheck, FiTv, FiZap, FiStar, FiX,
  FiChevronRight, FiCheckCircle, FiInfo, FiMapPin, FiUser, FiPhone
} from 'react-icons/fi';

// Типы для Яндекс.Карт
declare global {
  interface Window {
    ymaps: any;
  }
}
const UltimateOfferResult = () => {
  const [options, setOptions] = useState({
    type: 'flat',
    router: false,
    box: false,
  });
  const [price, setPrice] = useState(799);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  // Состояния для формы
  const [address, setAddress] = useState('');
  const ymapsRef = useRef<any>(null);

  useEffect(() => {
    const target = 799 + (options.router ? 99 : 0) + (options.box ? 99 : 0);
    if (price !== target) {
      const timeout = setTimeout(() => {
        setPrice(price < target ? price + 1 : price - 1);
      }, 2);
      return () => clearTimeout(timeout);
    }
  }, [options, price]);

  // Загрузка Яндекс.Карт при открытии модалки
  useEffect(() => {
    // Инициализируем карту только когда модалка открыта и анимация завершена
    if (isModalOpen && !isOpening && !ymapsRef.current && typeof window !== 'undefined') {
      // Проверяем, не загружен ли уже скрипт Яндекс.Карт
      const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');

      const initMap = () => {
        const mapElement = document.getElementById("yandex-map");
        if (mapElement && !ymapsRef.current && window.ymaps) {
          try {
            window.ymaps.ready(() => {
              try {
                ymapsRef.current = new window.ymaps.Map("yandex-map", {
                  center: [47.2213, 38.9135], // Таганрог
                  zoom: 12,
                  controls: ['zoomControl']
                });
              } catch (error) {
                // Игнорируем ошибки инициализации карты
                console.warn('Карта недоступна:', error);
              }
            });
          } catch (error) {
            // Игнорируем ошибки готовности API
            console.warn('API карт недоступно');
          }
        }
      };

      if (existingScript) {
        // Скрипт уже загружен
        if (window.ymaps) {
          initMap();
        } else {
          // Ждем загрузки ymaps
          const checkYmaps = setInterval(() => {
            if (window.ymaps) {
              clearInterval(checkYmaps);
              initMap();
            }
          }, 100);
          setTimeout(() => clearInterval(checkYmaps), 5000);
        }
      } else {
        // Загружаем скрипт
        const script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU`;
        script.onload = () => {
          if (window.ymaps) {
            // Небольшая задержка для гарантии, что элемент уже в DOM
            setTimeout(initMap, 200);
          }
        };
        script.onerror = () => {
          // Игнорируем ошибку загрузки карты
          console.warn('Не удалось загрузить Яндекс.Карты');
        };
        document.head.appendChild(script);
      }
    }

    // Очистка при закрытии модалки
    return () => {
      if (!isModalOpen && ymapsRef.current) {
        try {
          ymapsRef.current.destroy();
        } catch (error) {
          // Игнорируем ошибки при уничтожении
        }
        ymapsRef.current = null;
      }
    };
  }, [isModalOpen, isOpening]);

  // Геокодирование адреса при вводе
  useEffect(() => {
    if (ymapsRef.current && address.length > 5 && window.ymaps) {
      const delayDebounceFn = setTimeout(() => {
        try {
          window.ymaps.geocode(`Таганрог, ${address}`, { results: 1 }).then((res: any) => {
            const firstGeoObject = res.geoObjects.get(0);
            if (firstGeoObject && ymapsRef.current) {
              try {
                const coords = firstGeoObject.geometry.getCoordinates();
                ymapsRef.current.setCenter(coords, 16, { duration: 500 });
                ymapsRef.current.geoObjects.removeAll();
                ymapsRef.current.geoObjects.add(new window.ymaps.Placemark(coords, {
                  balloonContent: address
                }, {
                  preset: 'islands#orangeDotIcon'
                }));
              } catch (error) {
                // Игнорируем ошибки обновления карты
              }
            }
          }).catch(() => {
            // Игнорируем ошибки геокодирования
          });
        } catch (error) {
          // Игнорируем ошибки вызова API
        }
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [address]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
    setIsOpening(true);
    setTimeout(() => setIsOpening(false), 10);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (isModalOpen && !isClosing) {
      // Устанавливаем начальное состояние для анимации открытия
      setIsOpening(true);
      // Даем браузеру время отрендерить элемент, затем запускаем анимацию
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsOpening(false);
        });
      });
    }
  }, [isModalOpen, isClosing]);

  const totalPrice = price;

  return (
    <section id="tariffs" className="py-12 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4">

       {/* МАРКЕТИНГОВЫЙ ЗАГОЛОВОК */}
             <div className="max-w-4xl mx-auto text-center mb-10">
           <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 bg-pgOrange/10 rounded-full border border-pgOrange/20 animate-pulse">
             <FiStar className="text-pgOrange fill-pgOrange" />
             <span className="text-xs font-black text-pgOrange uppercase tracking-[0.2em]">Лучший выбор абонентов 2026 года </span>
           </div>

           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-pgBlue-dark mb-6 tracking-tighter leading-none">
             Больше чем <span className="text-transparent bg-clip-text bg-gradient-to-r from-pgBlue to-pgOrange italic">Интернет.</span> <br />
             Это Ваша Свобода.
           </h2>

           <p className="text-gray-500 text-x font-medium max-w-2xl mx-auto leading-relaxed">
             Мы объединили <span className="text-pgBlue-dark font-bold underline decoration-pgOrange decoration-2">ультимативную скорость</span> и золотой фонд ТВ в одно предложение, от которого невозможно отказаться.
           </p>
        </div>

        {/* ГЛАВНЫЙ БОКС КОНФИГУРАТОРА */}
        <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-[0_40px_80px_rgba(0,43,91,0.08)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row">

          {/* ЛЕВАЯ ПАНЕЛЬ */}
<div className="lg:w-2/3 p-4 md:p-6 border-r border-gray-50 bg-gradient-to-br from-white to-gray-50/30">
  <div className="mb-4">
    <div className="flex items-center justify-end mb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Стабильный сигнал в 2026</span>
      </div>
    </div>

    <div className="bg-pgBlue-dark rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-pgBlue-dark/20 min-h-[55  0px] flex flex-col">
      <div className="relative z-10 flex-1">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-6xl md:text-7xl font-black italic tracking-tighter drop-shadow-2xl">1000</span>
          <span className="text-2xl font-bold text-blue-300">Мбит/с</span>
        </div>
        <p className="text-blue-200/60 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Скорость интернета</p>
        
        <div className="space-y-4"> {/* Уменьшил отступ между элементами */}
          {/* Дисклеймер */}
          <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all">
            <div className="w-10 h-10 shrink-0 bg-pgOrange/20 rounded-xl flex items-center justify-center">
              <FiInfo className="text-pgOrange" size={20} />
            </div>
            <p className="text-[11px] leading-relaxed text-blue-50 font-medium">
              Канал до <span className="text-pgOrange font-bold">1 Гбит/с</span> — реальная скорость зависит от характеристик вашего оборудования.
            </p>
          </div>

          {/* Инфографика */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <FiZap className="text-pgOrange" size={16} />
                <span className="text-[10px] font-black uppercase text-blue-300">Производительность</span>
              </div>
              <div className="text-xl font-black mb-1">до 10 устройств</div>
              <p className="text-[10px] text-blue-200/70 leading-tight">ПК, смартфоны и умный дом работают одновременно.</p>
            </div>

            <div className="p-4 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <FiCheckCircle className="text-pgOrange" size={16} />
                <span className="text-[10px] font-black uppercase text-blue-300">Мгновенная загрузка</span>
              </div>
              <div className="text-xl font-black mb-1">20 сек — 1 Гб</div>
              <p className="text-[10px] text-blue-200/70 leading-tight">В 10 раз быстрее обычного соединения.</p>
            </div>
          </div>
          {/* Блок: Гарантии и надежность */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <div className="text-lg font-black text-pgOrange mb-1">99.9%</div>
              <p className="text-[9px] text-blue-200/70 uppercase">Uptime</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <div className="text-lg font-black text-pgOrange mb-1">&lt;1мс</div>
              <p className="text-[9px] text-blue-200/70 uppercase">Пинг</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <div className="text-lg font-black text-pgOrange mb-1">24/7</div>
              <p className="text-[9px] text-blue-200/70 uppercase">Поддержка</p>
            </div>
          </div>
          {/* НИЖНИЙ БЛОК: Теперь прижат вплотную через отсутствие mt-6 и общую сетку */}
          <div className="pt-4 border-t border-white/10">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
              <li className="flex items-center gap-2 text-white/90 font-bold">
                <FiCheck className="text-pgOrange" size={14} />
                <span className="text-[11px]">Коннект 24/7 без разрывов</span>
              </li>
              <li className="flex items-center gap-2 text-white/90 font-bold">
                <FiCheck className="text-pgOrange" size={14} />
                <span className="text-[11px]">0% задержки в играх</span>
              </li>
              <li className="flex items-center gap-2 text-white/90 font-bold">
                <FiCheck className="text-pgOrange" size={14} />
                <span className="text-[11px]">Безлимитный трафик</span>
              </li>
              <li className="flex items-center gap-2 text-white/90 font-bold">
                <FiCheck className="text-pgOrange" size={14} />
                <span className="text-[11px]">Бесплатное подключение</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <FiZap className="absolute -right-8 -bottom-8 text-[16rem] text-white/[0.03] rotate-12 group-hover:text-pgOrange/10 transition-colors duration-1000" />
    </div>
  </div>
</div>

          {/* ПРАВАЯ ЧАСТЬ */}
          <div className="lg:w-1/3 bg-gray-50 p-4 md:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-black text-pgBlue-dark italic">Ваш пакет</h3>
                <FiInfo className="text-gray-400" size={18} />
              </div>

              {/* ТВ СТАТИСТИКА */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-pgBlue-light rounded-lg flex items-center justify-center text-pgBlue">
                      <FiTv size={16} />
                    </div>
                    <span className="font-bold text-sm text-gray-700">Цифровое ТВ</span>
                  </div>
                  <span className="text-pgOrange font-black text-sm">191 канал</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest px-1">
                  <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" size={12} /> 31 Кино</div>
                  <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" size={12} /> 13 Детские</div>
                  <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" size={12} /> 23 HD-канала</div>
                  <div className="flex items-center gap-1"><FiCheckCircle className="text-pgOrange" size={12} /> 7 4K-канала</div>
                </div>

                <button className="w-full text-pgBlue text-[10px] font-bold border-b border-pgBlue/20 pb-1 hover:border-pgBlue transition-all">
                  Посмотреть весь список каналов
                </button>
              </div>

              {/* ДОПОЛНИТЕЛЬНОЕ ОБОРУДОВАНИЕ */}
              <div className="flex flex-col gap-2 mb-6">
                <div
                  onClick={() => setOptions({ ...options, router: !options.router })}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 relative ${options.router ? 'border-pgOrange bg-white shadow-lg' : 'border-gray-200 hover:bg-white'}`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all ${options.router ? 'bg-pgOrange text-white' : 'bg-gray-200 text-gray-400'}`}>
                    <FiZap />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-pgBlue-dark leading-none mb-0.5">Wi-Fi роутер</h4>
                    <p className="text-[9px] text-gray-400 font-bold uppercase">SNR-CPE-ME2</p>
                  </div>
                  <div className="font-black text-sm text-pgBlue-dark">+99 ₽</div>
                </div>

                <div
                  onClick={() => setOptions({ ...options, box: !options.box })}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 relative ${options.box ? 'border-pgOrange bg-white shadow-lg' : 'border-gray-200 hover:bg-white'}`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all ${options.box ? 'bg-pgOrange text-white' : 'bg-gray-200 text-gray-400'}`}>
                    <FiTv />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-pgBlue-dark leading-none mb-0.5">TV-приставка</h4>
                    <p className="text-[9px] text-gray-400 font-bold uppercase">Imaqliq G-Box</p>
                  </div>
                  <div className="font-black text-sm text-pgBlue-dark">+99 ₽</div>
                </div>
              </div>
            </div>

            {/* ЦЕНА И КНОПКА */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase mb-1 tracking-[0.1em]">Итого к оплате</div>
                  <div className="text-5xl font-black text-pgBlue-dark tracking-tighter">
                    {totalPrice} <span className="text-xl">₽</span>
                  </div>
                </div>
                <div className="text-right">
                   <div className="text-[9px] font-black text-green-500 uppercase mb-1">Доступно по адресу</div>
                   <div className="text-[11px] font-bold text-pgBlue-dark">г. Таганрог</div>
                </div>
              </div>

              <button
                onClick={handleOpenModal}
                className="group w-full bg-pgOrange hover:bg-pgOrange-hover text-white font-black py-5 rounded-2xl text-base shadow-2xl shadow-pgOrange/30 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                ПОДКЛЮЧИТЬ <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="text-[9px] text-center text-gray-400 mt-4 px-3">
                Цена зафиксирована на 12 месяцев. Никаких скрытых платежей.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО С КАРТОЙ И ФОРМОЙ */}
      {isModalOpen && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 transition-all duration-300 ${isClosing ? 'opacity-0' : isOpening ? 'opacity-0' : 'opacity-100'
          }`}>
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-pgBlue-dark/80 backdrop-blur-md transition-opacity duration-300 ${isClosing ? 'opacity-0' : isOpening ? 'opacity-0' : 'opacity-100'
              }`}
            onClick={handleCloseModal}
          ></div>

          <div className={`relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] transition-all duration-300 ${isClosing
              ? 'opacity-0 scale-95 translate-y-4'
              : isOpening
                ? 'opacity-0 scale-95 translate-y-4'
                : 'opacity-100 scale-100 translate-y-0'
            }`}>

            {/* Кнопка закрытия */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-gray-100 hover:bg-pgOrange hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              <FiX size={24} />
            </button>

            {/* КАРТА (ЛЕВАЯ ЧАСТЬ) */}
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
              <div id="yandex-map" className="w-full h-full"></div>

              {/* Оверлей если адрес не введен */}
              <div
                className={`absolute inset-0 bg-pgBlue-dark/10 backdrop-blur-[2px] pointer-events-none flex items-center justify-center transition-all duration-500 ${address ? 'opacity-0 invisible' : 'opacity-100 visible'
                  }`}
              >
                <div className={`bg-white/90 p-6 rounded-3xl shadow-xl text-center border border-pgOrange/20 transition-all duration-500 ${address ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                  }`}>
                  <FiMapPin className="text-pgOrange text-3xl mx-auto mb-2" />
                  <p className="text-xs font-black text-pgBlue-dark uppercase">Укажите адрес справа</p>
                </div>
              </div>
            </div>

            {/* ФОРМА (ПРАВАЯ ЧАСТЬ) */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="mb-8">
                <h3 className="text-3xl font-black text-pgBlue-dark mb-2 tracking-tighter">Оформить заявку</h3>
                <p className="text-gray-400 text-sm font-bold">Программа: <span className="text-pgOrange">Персональный {totalPrice} ₽/мес</span></p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Выбор типа */}
                <div className="flex p-1 bg-gray-100 rounded-2xl">
                  {['Квартира', 'Дом', 'Офис'].map((t) => (
                    <button key={t} type="button" className={`flex-1 py-3 text-xs font-black rounded-xl transition-all ${options.type === t.toLowerCase() ? 'bg-white text-pgBlue shadow-sm' : 'text-gray-400'}`} onClick={() => setOptions({ ...options, type: t.toLowerCase() })}>{t}</button>
                  ))}
                </div>

                {/* Поля ввода */}
                <div className="relative group">
                  <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pgOrange transition-colors" />
                  <input
                    type="text"
                    placeholder="Адрес подключения"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-pgOrange outline-none transition-all font-bold text-sm"
                  />
                </div>

                <div className="relative group">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pgOrange transition-colors" />
                  <input type="text" placeholder="Как к вам обращаться?*" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-pgOrange outline-none transition-all font-bold text-sm" />
                </div>

                <div className="relative group">
                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pgOrange transition-colors" />
                  <input type="tel" placeholder="Телефон*" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-pgOrange outline-none transition-all font-bold text-sm" />
                </div>

                <button className="w-full bg-pgBlue-dark text-white font-black py-5 rounded-2xl text-lg hover:bg-pgBlue transition-all shadow-xl shadow-pgBlue-dark/20 flex items-center justify-center gap-3">
                  ОТПРАВИТЬ ЗАЯВКУ <FiChevronRight />
                </button>

                {/* Дисклеймер */}
                <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с
                  <span className="text-pgBlue-dark underline cursor-pointer ml-1">политикой конфиденциальности</span>, миссией компании и уставом ПИК ПЖ19.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UltimateOfferResult;