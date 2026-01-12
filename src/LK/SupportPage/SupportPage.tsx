import React, { useState } from 'react';
import { 
  FiPhone, FiSend, FiMessageCircle, FiPlus, 
  FiChevronRight, FiSearch, FiFileText, FiX,
  FiChevronDown, FiCreditCard, FiWifi, FiLayers, FiUser
} from 'react-icons/fi';

// Данные для FAQ
const FAQ_DATA = [
  {
    id: 'billing',
    title: 'Оплата и баланс',
    icon: <FiCreditCard />,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    questions: [
      { q: 'Как оплатить услуги без комиссии?', a: 'Вы можете оплатить услуги в личном кабинете через СБП или привязанную карту. Также оплата без комиссии доступна в мобильном приложении вашего банка.' },
      { q: 'Что такое обещанный платеж?', a: 'Это услуга, позволяющая продлить доступ к интернету на 3 дня при нулевом балансе. Активировать можно в разделе "Баланс".' }
    ]
  },
  {
    id: 'internet',
    title: 'Интернет',
    icon: <FiWifi />,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    questions: [
      { q: 'Низкая скорость интернета, что делать?', a: 'Попробуйте перезагрузить роутер. Если это не помогло, проверьте скорость при прямом подключении кабеля к компьютеру и свяжитесь с нами.' },
      { q: 'Как сменить пароль от Wi-Fi?', a: 'Зайдите в настройки роутера (обычно 192.168.0.1) или воспользуйтесь функцией "Управление роутером" в нашем приложении.' }
    ]
  },
  {
    id: 'tariffs',
    title: 'Тарифы и услуги',
    icon: <FiLayers />,
    color: 'text-green-500',
    bg: 'bg-green-50',
    questions: [
      { q: 'Как сменить тарифный план?', a: 'Смена тарифа доступна в разделе "Мой тариф". Новый план вступит в силу с 1-го числа следующего месяца.' }
    ]
  },
  {
    id: 'profile',
    title: 'Профиль и настройки',
    icon: <FiUser />,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    questions: [
      { q: 'Как изменить номер телефона в профиле?', a: 'Для смены основного номера необходимо подтверждение через SMS-код или обращение в офис с паспортом.' }
    ]
  }
];

interface SupportPageProps {
  onOpenChat?: () => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onOpenChat }) => {
  const [activeTab, setActiveTab] = useState('tickets');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    problemType: '',
    subject: '',
    description: ''
  });

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
    setExpandedQuestion(null); // Закрываем вопросы при смене категории
  };

  const toggleQuestion = (q: string) => {
    setExpandedQuestion(expandedQuestion === q ? null : q);
  };

  const contacts = [
    { 
      title: 'Горячая линия', 
      val: '8 (800) 123-45-67', 
      desc: 'Бесплатно по РФ',
      icon: <FiPhone />, 
      bg: 'bg-blue-50', 
      text: 'text-blue-600' 
    },
    { 
      title: 'Telegram-бот', 
      val: '@pg19support', 
      desc: 'Техподдержка 24/7',
      icon: <FiSend />, 
      bg: 'bg-sky-50', 
      text: 'text-sky-500' 
    },
    { 
      title: 'Онлайн-чат', 
      val: 'Начать диалог', 
      icon: <FiMessageCircle />, 
      bg: 'bg-green-50', 
      text: 'text-green-500' 
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F3F7] p-4 md:p-8 font-sans text-pgBlue-dark">
      <div className="max-w-6xl mx-auto">

        {/* СЕТКА КОНТАКТОВ (3 колонки) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((c, i) => (
            <div 
              key={i} 
              onClick={() => {
                if (c.title === 'Онлайн-чат' && onOpenChat) {
                  onOpenChat();
                }
              }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className={`w-14 h-14 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {c.icon}
              </div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{c.title}</div>
              <div className="text-xl font-black italic tracking-tighter mb-1">{c.val}</div>
              <div className="text-[11px] font-bold text-gray-400 italic">{c.desc}</div>
            </div>
          ))}
        </div>

        {/* ОСНОВНОЙ КОНТЕНТ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ЛЕВАЯ КОЛОНКА: ВКЛАДКИ И ЗАЯВКИ (8 колонок) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex p-1 gap-2">
                <button 
                  onClick={() => setActiveTab('tickets')}
                  className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'tickets' ? 'bg-pgBlue-dark text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
                >
                  Мои заявки <span className="ml-2 opacity-50">1</span>
                </button>
                <button 
                  onClick={() => setActiveTab('faq')}
                  className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'faq' ? 'bg-pgBlue-dark text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
                >
                  Частые вопросы
                </button>
              </div>
             
            </div>

            {activeTab === 'tickets' ? (
              <div className="space-y-4">
                {/* КАРТОЧКА ЗАЯВКИ (АКТИВНАЯ) */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-pgBlue hover:bg-black text-white px-6 py-3 rounded-2xl transition-all shadow-lg shadow-pgOrange/20 flex items-center gap-2 text-xs font-black uppercase tracking-widest"
                >
                  <FiPlus size={18} />
                  Создать заявку
                </button>
                <div className="bg-white p-8 rounded-[2.5rem] border-l-8 border-l-pgOrange shadow-sm hover:shadow-md transition-all flex items-center justify-between group cursor-pointer">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-orange-50 text-pgOrange text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-orange-100">
                        В работе
                      </span>
                      <span className="text-gray-300 font-bold text-[10px]">#12345 • 15.01.2025</span>
                    </div>
                    <h3 className="text-2xl font-black italic tracking-tighter uppercase group-hover:text-pgOrange transition-colors">
                      Низкая скорость интернета
                    </h3>
                    <p className="text-sm font-medium text-gray-500 italic max-w-md">
                      Мастер выехал на адрес, ожидайте звонка для согласования времени доступа к оборудованию.
                    </p>
                  </div>
                  <FiChevronRight size={24} className="text-gray-200 group-hover:text-pgOrange group-hover:translate-x-2 transition-all" />
                </div>

                {/* КАРТОЧКА ЗАЯВКИ (ЗАКРЫТАЯ) */}
                <div className="bg-white/60 p-8 rounded-[2.5rem] border border-gray-100 flex items-center justify-between opacity-80 group cursor-pointer hover:opacity-100 transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-gray-100 text-gray-400 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        Закрыта
                      </span>
                      <span className="text-gray-300 font-bold text-[10px]">#12340 • 10.01.2025</span>
                    </div>
                    <h3 className="text-xl font-black italic tracking-tighter uppercase text-gray-400">
                      Вопрос по оплате
                    </h3>
                    <p className="text-sm font-medium text-gray-300 italic">
                      Ваш вопрос решён. Спасибо за обращение!
                    </p>
                  </div>
                  <FiChevronRight size={24} className="text-gray-200" />
                </div>
              </div>
            ) : (
              /* РАЗДЕЛ ЧАСТЫЕ ВОПРОСЫ (FAQ) */
              <div className="space-y-6">
                <div className="relative">
                  <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Поиск по вопросам..." 
                    className="w-full bg-white rounded-3xl py-5 pl-14 pr-6 shadow-sm border border-gray-100 text-sm font-bold italic outline-none focus:border-pgOrange/50 transition-all" 
                  />
                </div>

                <div className="space-y-3">
                  {FAQ_DATA.map((cat) => (
                    <div key={cat.id} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden transition-all">
                      <button 
                        onClick={() => toggleCategory(cat.id)}
                        className={`w-full p-6 flex items-center justify-between transition-colors ${expandedCategory === cat.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 ${cat.bg} ${cat.color} rounded-xl flex items-center justify-center text-xl shadow-inner`}>
                            {cat.icon}
                          </div>
                          <span className="text-sm font-black uppercase tracking-widest">{cat.title}</span>
                        </div>
                        <FiChevronDown className={`transition-transform duration-300 ${expandedCategory === cat.id ? 'rotate-180' : ''}`} />
                      </button>

                      {expandedCategory === cat.id && (
                        <div className="px-6 pb-6 space-y-2">
                          {cat.questions.map((item, idx) => (
                            <div key={idx} className="border border-gray-50 rounded-2xl overflow-hidden">
                              <button 
                                onClick={() => toggleQuestion(item.q)}
                                className="w-full p-4 flex items-center justify-between text-left hover:bg-orange-50/30 transition-colors"
                              >
                                <span className="text-xs font-bold italic text-pgBlue-dark">{item.q}</span>
                                <FiPlus className={`text-pgOrange transition-transform ${expandedQuestion === item.q ? 'rotate-45' : ''}`} />
                              </button>
                              {expandedQuestion === item.q && (
                                <div className="p-4 pt-0 text-[13px] font-medium text-gray-500 leading-relaxed italic">
                                  {item.a}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ПРАВАЯ КОЛОНКА: ПОЛЕЗНОЕ (4 колонки) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
               <div className="flex items-center gap-4 mb-6 text-pgOrange">
                 <FiFileText size={28} />
                 <h4 className="text-sm font-black uppercase tracking-widest leading-tight text-pgBlue-dark">Документы <br/>и бланки</h4>
               </div>
               <p className="text-[11px] font-medium text-gray-400 italic mb-6">Шаблоны заявлений на переезд, переоформление или смену тарифа.</p>
               <button className="text-xs font-black uppercase tracking-widest border-b-2 border-pgOrange pb-1 hover:text-pgOrange transition-colors">
                 Перейти в архив
               </button>
            </div>
          </div>

        </div>

      </div>

      {/* МОДАЛЬНОЕ ОКНО СОЗДАНИЯ ЗАЯВКИ */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              {/* ЗАГОЛОВОК И КНОПКА ЗАКРЫТИЯ */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black italic tracking-tighter text-pgBlue-dark uppercase">Новая заявка</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FiX size={24} className="text-gray-400" />
                </button>
              </div>

              {/* ФОРМА */}
              <div className="space-y-6">
                {/* ТИП ПРОБЛЕМЫ */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                    Тип проблемы
                  </label>
                  <select
                    value={formData.problemType}
                    onChange={(e) => setFormData({...formData, problemType: e.target.value})}
                    className="w-full bg-[#F8F9FB] border-2 border-pgBlue/30 focus:border-pgBlue rounded-2xl px-4 py-4 text-sm font-bold italic text-pgBlue-dark outline-none transition-all"
                  >
                    <option value="">Выберите тип</option>
                    <option value="internet">Проблемы с интернетом</option>
                    <option value="tv">Проблемы с ТВ</option>
                    <option value="equipment">Проблемы с оборудованием</option>
                    <option value="payment">Вопросы по оплате</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                {/* ТЕМА */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                    Тема
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Кратко опишите проблему"
                    className="w-full bg-[#F8F9FB] border-2 border-gray-100 focus:border-pgBlue rounded-2xl px-4 py-4 text-sm font-bold italic text-pgBlue-dark outline-none transition-all"
                  />
                </div>

                {/* ОПИСАНИЕ */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                    Описание
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Опишите проблему подробно..."
                    rows={6}
                    className="w-full bg-[#F8F9FB] border-2 border-gray-100 focus:border-pgBlue rounded-2xl px-4 py-4 text-sm font-medium text-pgBlue-dark outline-none transition-all resize-y"
                  />
                </div>

                {/* КНОПКИ */}
                <div className="flex items-center justify-end gap-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-3 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-pgBlue-dark transition-colors"
                  >
                    Отмена
                  </button>
                  <button
                    onClick={() => {
                      // Здесь можно добавить логику отправки заявки
                      console.log('Отправка заявки:', formData);
                      setIsModalOpen(false);
                      setFormData({ problemType: '', subject: '', description: '' });
                    }}
                    className="px-8 py-3 bg-pgBlue-dark hover:bg-black text-white rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-pgBlue-dark/20"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



// import React, { useState } from 'react';
// import { 
//   FiPhone, FiSend, FiMessageCircle, FiPlus, 
//   FiChevronRight, FiSearch, FiHelpCircle, FiFileText, FiX,
//   FiChevronDown, FiCreditCard, FiWifi, FiLayers, FiUser
// } from 'react-icons/fi';

// // Данные для FAQ
// const FAQ_DATA = [
//   {
//     id: 'billing',
//     title: 'Оплата и баланс',
//     icon: <FiCreditCard />,
//     color: 'text-orange-500',
//     bg: 'bg-orange-50',
//     questions: [
//       { q: 'Как оплатить услуги без комиссии?', a: 'Вы можете оплатить услуги в личном кабинете через СБП или привязанную карту. Также оплата без комиссии доступна в мобильном приложении вашего банка.' },
//       { q: 'Что такое обещанный платеж?', a: 'Это услуга, позволяющая продлить доступ к интернету на 3 дня при нулевом балансе. Активировать можно в разделе "Баланс".' }
//     ]
//   },
//   {
//     id: 'internet',
//     title: 'Интернет',
//     icon: <FiWifi />,
//     color: 'text-blue-500',
//     bg: 'bg-blue-50',
//     questions: [
//       { q: 'Низкая скорость интернета, что делать?', a: 'Попробуйте перезагрузить роутер. Если это не помогло, проверьте скорость при прямом подключении кабеля к компьютеру и свяжитесь с нами.' },
//       { q: 'Как сменить пароль от Wi-Fi?', a: 'Зайдите в настройки роутера (обычно 192.168.0.1) или воспользуйтесь функцией "Управление роутером" в нашем приложении.' }
//     ]
//   },
//   {
//     id: 'tariffs',
//     title: 'Тарифы и услуги',
//     icon: <FiLayers />,
//     color: 'text-green-500',
//     bg: 'bg-green-50',
//     questions: [
//       { q: 'Как сменить тарифный план?', a: 'Смена тарифа доступна в разделе "Мой тариф". Новый план вступит в силу с 1-го числа следующего месяца.' }
//     ]
//   },
//   {
//     id: 'profile',
//     title: 'Профиль и настройки',
//     icon: <FiUser />,
//     color: 'text-purple-500',
//     bg: 'bg-purple-50',
//     questions: [
//       { q: 'Как изменить номер телефона в профиле?', a: 'Для смены основного номера необходимо подтверждение через SMS-код или обращение в офис с паспортом.' }
//     ]
//   }
// ];

// interface SupportPageProps {
//   onOpenChat?: () => void;
// }

// export const SupportPage: React.FC<SupportPageProps> = ({ onOpenChat }) => {
//   const [activeTab, setActiveTab] = useState('tickets');
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // Состояния для FAQ
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

//   const [formData, setFormData] = useState({
//     problemType: '',
//     subject: '',
//     description: ''
//   });

//   const toggleCategory = (id: string) => {
//     setExpandedCategory(expandedCategory === id ? null : id);
//     setExpandedQuestion(null); // Закрываем вопросы при смене категории
//   };

//   const toggleQuestion = (q: string) => {
//     setExpandedQuestion(expandedQuestion === q ? null : q);
//   };

//   const contacts = [
//     { title: 'Горячая линия', val: '8 (800) 123-45-67', desc: 'Бесплатно по РФ', icon: <FiPhone />, bg: 'bg-blue-50', text: 'text-blue-600' },
//     { title: 'Telegram-бот', val: '@pg19support', desc: 'Техподдержка 24/7', icon: <FiSend />, bg: 'bg-sky-50', text: 'text-sky-500' },
//     { title: 'Онлайн-чат', val: 'Начать диалог', desc: 'Ответим за 5 минут', icon: <FiMessageCircle />, bg: 'bg-green-50', text: 'text-green-500' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F2F3F7] p-4 md:p-8 font-sans text-pgBlue-dark">
//       <div className="max-w-6xl mx-auto">

//         {/* СЕТКА КОНТАКТОВ */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {contacts.map((c, i) => (
//             <div key={i} onClick={() => c.title === 'Онлайн-чат' && onOpenChat?.()} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
//               <div className={`w-14 h-14 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>{c.icon}</div>
//               <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{c.title}</div>
//               <div className="text-xl font-black italic tracking-tighter mb-1">{c.val}</div>
//               <div className="text-[11px] font-bold text-gray-400 italic">{c.desc}</div>
//             </div>
//           ))}
//         </div>

//         {/* ОСНОВНОЙ КОНТЕНТ */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           <div className="lg:col-span-8 space-y-6">
//             {/* ВКЛАДКИ */}
//             <div className="flex items-center justify-between bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100">
//               <div className="flex p-1 gap-2">
//                 <button onClick={() => setActiveTab('tickets')} className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'tickets' ? 'bg-pgBlue-dark text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}>
//                   Мои заявки <span className="ml-2 opacity-50">1</span>
//                 </button>
//                 <button onClick={() => setActiveTab('faq')} className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'faq' ? 'bg-pgBlue-dark text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}>
//                   Частые вопросы
//                 </button>
//               </div>
//             </div>

//             {activeTab === 'tickets' ? (
//               <div className="space-y-4">
//                 <button onClick={() => setIsModalOpen(true)} className="bg-pgBlue-dark hover:bg-black text-white px-6 py-3 rounded-2xl transition-all shadow-lg flex items-center gap-2 text-xs font-black uppercase tracking-widest">
//                   <FiPlus size={18} /> Создать заявку
//                 </button>
//                 {/* Список заявок остается без изменений... */}
//                 <div className="bg-white p-8 rounded-[2.5rem] border-l-8 border-l-pgOrange shadow-sm flex items-center justify-between group cursor-pointer">
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3">
//                       <span className="bg-orange-50 text-pgOrange text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">В работе</span>
//                       <span className="text-gray-300 font-bold text-[10px]">#12345 • 15.01.2025</span>
//                     </div>
//                     <h3 className="text-2xl font-black italic tracking-tighter uppercase group-hover:text-pgOrange transition-colors">Низкая скорость интернета</h3>
//                   </div>
//                   <FiChevronRight size={24} className="text-gray-200" />
//                 </div>
//               </div>
//             ) : (
//               /* РАЗДЕЛ ЧАСТЫЕ ВОПРОСЫ (FAQ) */
//               <div className="space-y-6 animate-in fade-in duration-500">
//                 <div className="relative">
//                   <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
//                   <input type="text" placeholder="Поиск по вопросам..." className="w-full bg-white rounded-3xl py-5 pl-14 pr-6 shadow-sm border border-gray-100 text-sm font-bold italic outline-none focus:border-pgOrange/50 transition-all" />
//                 </div>

//                 <div className="space-y-3">
//                   {FAQ_DATA.map((cat) => (
//                     <div key={cat.id} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden transition-all">
//                       <button 
//                         onClick={() => toggleCategory(cat.id)}
//                         className={`w-full p-6 flex items-center justify-between transition-colors ${expandedCategory === cat.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
//                       >
//                         <div className="flex items-center gap-4">
//                           <div className={`w-10 h-10 ${cat.bg} ${cat.color} rounded-xl flex items-center justify-center text-xl shadow-inner`}>{cat.icon}</div>
//                           <span className="text-sm font-black uppercase tracking-widest">{cat.title}</span>
//                         </div>
//                         <FiChevronDown className={`transition-transform duration-300 ${expandedCategory === cat.id ? 'rotate-180' : ''}`} />
//                       </button>

//                       {expandedCategory === cat.id && (
//                         <div className="px-6 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-300">
//                           {cat.questions.map((item, idx) => (
//                             <div key={idx} className="border border-gray-50 rounded-2xl overflow-hidden">
//                               <button 
//                                 onClick={() => toggleQuestion(item.q)}
//                                 className="w-full p-4 flex items-center justify-between text-left hover:bg-orange-50/30 transition-colors"
//                               >
//                                 <span className="text-xs font-bold italic text-pgBlue-dark">{item.q}</span>
//                                 <FiPlus className={`text-pgOrange transition-transform ${expandedQuestion === item.q ? 'rotate-45' : ''}`} />
//                               </button>
//                               {expandedQuestion === item.q && (
//                                 <div className="p-4 pt-0 text-[13px] font-medium text-gray-500 leading-relaxed italic animate-in fade-in slide-in-from-top-1">
//                                   {item.a}
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* ПРАВАЯ КОЛОНКА */}
//           <div className="lg:col-span-4 space-y-6">
//             <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
//                <div className="flex items-center gap-4 mb-6 text-pgOrange">
//                  <FiFileText size={28} />
//                  <h4 className="text-sm font-black uppercase tracking-widest leading-tight text-pgBlue-dark">Документы <br/>и бланки</h4>
//                </div>
//                <p className="text-[11px] font-medium text-gray-400 italic mb-6">Шаблоны заявлений на переезд, переоформление или смену тарифа.</p>
//                <button className="text-xs font-black uppercase tracking-widest border-b-2 border-pgOrange pb-1 hover:text-pgOrange transition-colors">Перейти в архив</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Модалка создания заявки... */}
//     </div>
//   );
// };