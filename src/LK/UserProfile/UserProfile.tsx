import React, { useState } from 'react';
import { 
  FiMapPin, FiDownload, 
  FiPhone, FiMail, FiSend, FiChevronRight, 
  FiClock, FiArrowDownLeft, FiArrowUpRight, FiBarChart2, FiCalendar, FiX, FiBell
} from 'react-icons/fi';

export const UserProfile: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<'profile' | 'history'>('profile');

  return (
    <div className="min-h-screen bg-[#F2F3F7] p-8 font-sans text-[#1D2235]">
      {/* Навигация для демонстрации */}
      <div className="max-w-6xl mx-auto mb-8 flex gap-4">
        <button onClick={() => setCurrentSection('profile')} className={`px-4 py-2 rounded-lg font-bold ${currentSection === 'profile' ? 'bg-blue-600 text-white' : 'bg-white'}`}>Профиль</button>
        <button onClick={() => setCurrentSection('history')} className={`px-4 py-2 rounded-lg font-bold ${currentSection === 'history' ? 'bg-blue-600 text-white' : 'bg-white'}`}>История</button>
      </div>

      <div className="max-w-6xl mx-auto">
        {currentSection === 'profile' && <ProfileSection />}
        {currentSection === 'history' && <HistorySection />}
      </div>
    </div>
  );
};

/* --- КОМПОНЕНТ: ПРОФИЛЬ --- */
const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'notifications'>('personal');
  const [notificationMethods, setNotificationMethods] = useState({
    email: true,
    sms: false,
    telegram: true,
    push: true
  });
  const [notificationTypes, setNotificationTypes] = useState({
    lowBalance: true,
    successfulPayment: true,
    subscriptionFee: true,
    newInvoice: false,
    applicationStatus: true,
    scheduledMaintenance: true,
    promotions: false
  });

  const toggleMethod = (key: keyof typeof notificationMethods) => {
    setNotificationMethods(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleType = (key: keyof typeof notificationTypes) => {
    setNotificationTypes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold mb-6">Профиль</h1>
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <button 
          onClick={() => setActiveTab('personal')}
          className={`pb-3 font-bold text-sm px-2 transition-colors ${
            activeTab === 'personal' 
              ? 'border-b-2 border-blue-600 text-blue-600' 
              : 'text-gray-400'
          }`}
        >
          Личные данные
        </button>
        <button 
          onClick={() => setActiveTab('notifications')}
          className={`pb-3 font-bold text-sm px-2 transition-colors ${
            activeTab === 'notifications' 
              ? 'border-b-2 border-blue-600 text-blue-600' 
              : 'text-gray-400'
          }`}
        >
          Уведомления
        </button>
      </div>

      {activeTab === 'personal' ? (

    <div className="grid grid-cols-2 gap-6">
      {/* Персональные данные */}
      <div className="bg-white p-8 rounded-[24px] shadow-sm relative">
        <button className="absolute top-8 right-8 text-blue-600 text-xs font-bold hover:underline">Редактировать</button>
        <h3 className="text-lg font-bold mb-6">Персональные данные</h3>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">ИИ</div>
          <div>
            <div className="font-bold text-xl">Иван Иванов</div>
            <div className="text-gray-400 text-xs">Абонент #CL-00001</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6">
          <div>
            <div className="text-gray-400 text-[10px] uppercase font-black mb-1 flex items-center gap-2"><FiPhone className="rotate-90"/> Телефон</div>
            <div className="font-bold text-sm">+7 (900) 111-11-11</div>
          </div>
          <div>
            <div className="text-gray-400 text-[10px] uppercase font-black mb-1 flex items-center gap-2"><FiMail/> Email</div>
            <div className="font-bold text-sm">ivan@test.com</div>
          </div>
          <div>
            <div className="text-gray-400 text-[10px] uppercase font-black mb-1 flex items-center gap-2"><FiSend/> Telegram</div>
            <div className="font-bold text-sm">@ivan_ivanov</div>
          </div>
          <div>
            <div className="text-gray-400 text-[10px] uppercase font-black mb-1">Статус</div>
            <div className="inline-flex items-center gap-1 bg-green-50 text-green-500 px-2 py-0.5 rounded-full text-[10px] font-bold">● Активен</div>
          </div>
        </div>
      </div>

      {/* Договор */}
      <div className="bg-white p-8 rounded-[24px] shadow-sm">
        <h3 className="text-lg font-bold mb-6">Договор</h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Номер договора</span>
            <div className="flex items-center gap-2">
              <span className="font-bold">100001</span>
              <span className="bg-green-50 text-green-500 px-2 py-0.5 rounded-full text-[10px] font-bold">Активен</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Дата заключения</span>
            <span className="font-bold text-sm">15.06.2023</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-gray-400 text-sm">Адрес по договору</span>
            <span className="font-bold text-sm text-right max-w-[200px]">г. Таганрог, ул. Петровская, д. 19, кв. 1</span>
          </div>
          <button className="flex items-center gap-2 text-blue-600 text-sm font-bold mt-4">
            <FiDownload /> Скачать договор (PDF)
          </button>
        </div>
      </div>

      {/* Адрес подключения */}
      <div className="bg-white p-8 rounded-[24px] shadow-sm">
        <h3 className="text-lg font-bold mb-6">Адрес подключения</h3>
        <div className="flex items-center gap-3 font-bold text-sm text-gray-700">
          <FiMapPin className="text-blue-600" />
          г. Таганрог, ул. Петровская, д. 19, кв. 1
        </div>
      </div>

      {/* Лицевой счет */}
      <div className="bg-white p-8 rounded-[24px] shadow-sm">
        <h3 className="text-lg font-bold mb-6">Лицевой счет</h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Номер счёта</span>
            <div className="flex items-center gap-3">
              <span className="font-bold">ЛС-00000001</span>
              <span className="text-green-500 font-bold text-lg">699,00 ₽</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Статус</span>
            <span className="bg-green-50 text-green-500 px-2 py-0.5 rounded-full text-[10px] font-bold">Активен</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Следующее списание</span>
            <span className="font-bold text-sm">01.12.2026</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-8">Настройки уведомлений</h2>
      
      {/* Способы уведомлений */}
      <div className="bg-white p-8 rounded-[24px] shadow-sm mb-6">
        <h3 className="text-lg font-bold mb-6">Способы уведомлений</h3>
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <FiMail size={20} />
              </div>
              <div>
                <div className="font-bold text-sm">Email</div>
                <div className="text-gray-400 text-xs">ivan@test.com</div>
              </div>
            </div>
            <button
              onClick={() => toggleMethod('email')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationMethods.email ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationMethods.email ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* SMS */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <FiPhone size={20} className="rotate-90" />
              </div>
              <div>
                <div className="font-bold text-sm">SMS</div>
                <div className="text-gray-400 text-xs">+7 (900) 111-11-11</div>
              </div>
            </div>
            <button
              onClick={() => toggleMethod('sms')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationMethods.sms ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationMethods.sms ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Telegram */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <FiSend size={20} />
              </div>
              <div>
                <div className="font-bold text-sm">Telegram</div>
                <div className="text-gray-400 text-xs">@ivan_petrov</div>
              </div>
            </div>
            <button
              onClick={() => toggleMethod('telegram')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationMethods.telegram ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationMethods.telegram ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Push-уведомления */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <FiBell size={20} />
              </div>
              <div>
                <div className="font-bold text-sm">Push-уведомления</div>
                <div className="text-gray-400 text-xs">В браузере</div>
              </div>
            </div>
            <button
              onClick={() => toggleMethod('push')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationMethods.push ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationMethods.push ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* О чём уведомлять */}
      <div className="bg-white p-8 rounded-[24px] shadow-sm mb-6">
        <h3 className="text-lg font-bold mb-6">О чём уведомлять</h3>
        <div className="space-y-4">
          {/* Низкий баланс */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div>
              <div className="font-bold text-sm mb-1">Низкий баланс</div>
              <div className="text-gray-400 text-xs">Когда баланс ниже порога</div>
            </div>
            <button
              onClick={() => toggleType('lowBalance')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationTypes.lowBalance ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationTypes.lowBalance ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Успешная оплата */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div>
              <div className="font-bold text-sm mb-1">Успешная оплата</div>
              <div className="text-gray-400 text-xs">После пополнения счёта</div>
            </div>
            <button
              onClick={() => toggleType('successfulPayment')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationTypes.successfulPayment ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationTypes.successfulPayment ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Списание абонплаты */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div>
              <div className="font-bold text-sm mb-1">Списание абонплаты</div>
              <div className="text-gray-400 text-xs">Ежемесячное списание</div>
            </div>
            <button
              onClick={() => toggleType('subscriptionFee')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationTypes.subscriptionFee ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationTypes.subscriptionFee ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Новый счёт */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div>
              <div className="font-bold text-sm mb-1">Новый счёт</div>
              <div className="text-gray-400 text-xs">Выставление нового счёта</div>
            </div>
            <button
              onClick={() => toggleType('newInvoice')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationTypes.newInvoice ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationTypes.newInvoice ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Статус заявки */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div>
              <div className="font-bold text-sm mb-1">Статус заявки</div>
              <div className="text-gray-400 text-xs">Изменение статуса обращения</div>
            </div>
            <button
              onClick={() => toggleType('applicationStatus')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationTypes.applicationStatus ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationTypes.applicationStatus ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Плановые работы */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div>
              <div className="font-bold text-sm mb-1">Плановые работы</div>
              <div className="text-gray-400 text-xs">Уведомления о технических работах</div>
            </div>
            <button
              onClick={() => toggleType('scheduledMaintenance')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationTypes.scheduledMaintenance ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationTypes.scheduledMaintenance ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Акции и предложения */}
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
            <div>
              <div className="font-bold text-sm mb-1">Акции и предложения</div>
              <div className="text-gray-400 text-xs">Специальные предложения</div>
            </div>
            <button
              onClick={() => toggleType('promotions')}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notificationTypes.promotions ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notificationTypes.promotions ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Кнопка сохранения */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
        Сохранить настройки
      </button>
    </div>
  )}
    </div>
  );
};

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  title: string;
  date: string;
  status: string;
  amount: string;
}

/* --- КОМПОНЕНТ: ИСТОРИЯ --- */
const HistorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Неделя');

  const transactions: Transaction[] = [
    { id: '1', type: 'deposit', title: 'Пополнение баланса', date: '12.01.2026 14:30', status: 'Успешно', amount: '+1 500,00 ₽' },
    { id: '2', type: 'withdrawal', title: 'Абонентская плата', date: '01.01.2026 00:00', status: 'Успешно', amount: '-799,00 ₽' },
    { id: '3', type: 'withdrawal', title: 'Доп. услуга: ТВ', date: '28.12.2025 00:00', status: 'Успешно', amount: '-299,00 ₽' },
    { id: '4', type: 'deposit', title: 'Пополнение баланса', date: '25.12.2025 10:15', status: 'Успешно', amount: '+2 000,00 ₽' },
    { id: '5', type: 'withdrawal', title: 'Абонентская плата', date: '01.12.2025 00:00', status: 'Успешно', amount: '-799,00 ₽' },
    { id: '6', type: 'withdrawal', title: 'Доп. услуга: Роутер', date: '15.11.2025 00:00', status: 'Успешно', amount: '-99,00 ₽' },
  ];

  const totalDeposits = transactions
    .filter(t => t.type === 'deposit')
    .reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^\d,]/g, '').replace(',', '.')), 0);
  
  const totalWithdrawals = transactions
    .filter(t => t.type === 'withdrawal')
    .reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^\d,]/g, '').replace(',', '.')), 0);

  const stats = [
    { 
      label: 'Пополнения', 
      value: `+${totalDeposits.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽`, 
      icon: <FiArrowDownLeft />, 
      color: 'text-green-500', 
      bg: 'bg-green-50' 
    },
    { 
      label: 'Списания', 
      value: `-${totalWithdrawals.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽`, 
      icon: <FiArrowUpRight />, 
      color: 'text-red-500', 
      bg: 'bg-red-50' 
    },
    { 
      label: 'Операций', 
      value: transactions.length.toString(), 
      icon: <FiBarChart2 />, 
      color: 'text-gray-400', 
      bg: 'bg-gray-100' 
    },
  ];

  const timeFilters = ['Всё время','Неделя', 'Месяц', '3 месяца', 'Год'];

  return (
    <div className="min-h-screen bg-[#F2F3F7] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок и Экспорт */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-pgBlue-dark italic tracking-tighter uppercase">
            История операций
          </h1>
          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
            <FiDownload size={16} /> Экспорт
          </button>
        </div>

        {/* Виджеты статистики */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-xl`}>
                {stat.icon}
              </div>
              <div>
                <p className={`text-[10px] font-black uppercase tracking-widest ${stat.color} opacity-80`}>
                  {stat.label}
                </p>
                <p className="text-2xl font-black text-pgBlue-dark italic tracking-tighter">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Фильтры */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            
            {/* Тип операции */}
            <div className="lg:col-span-4 space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Тип операции</label>
              <div className="relative">
                <select className="w-full bg-[#F8F9FB] border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold italic text-pgBlue-dark appearance-none focus:outline-none focus:ring-2 focus:ring-pgOrange/20">
                  <option>Все типы</option>
                  <option>Пополнение</option>
                  <option>Абонентская плата</option>
                  <option>Доп. услуги</option>
                </select>
                <FiChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Период */}
            <div className="lg:col-span-6 space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Период</label>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <input type="text" value="05.01.2026" readOnly className="w-full bg-[#F8F9FB] border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold italic text-pgBlue-dark" />
                  <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="h-px w-4 bg-gray-300" />
                <div className="relative flex-1">
                  <input type="text" value="12.01.2026" readOnly className="w-full bg-[#F8F9FB] border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold italic text-pgBlue-dark" />
                  <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Сбросить */}
            <div className="lg:col-span-2">
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-pgOrange transition-colors pb-3 px-2">
                <FiX size={14} /> Сбросить
              </button>
            </div>
          </div>

          {/* Быстрые фильтры времени */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-50">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveTab(filter)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === filter 
                  ? 'bg-pgBlue-dark text-white shadow-lg shadow-pgBlue-dark/20' 
                  : 'bg-[#F2F3F7] text-gray-400 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Список транзакций */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          {transactions.length > 0 ? (
            <div className="divide-y divide-gray-50">
              {transactions.map((t) => (
                <div key={t.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg ${
                      t.type === 'deposit' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
                    }`}>
                      {t.type === 'deposit' ? <FiArrowDownLeft /> : <FiArrowUpRight />}
                    </div>
                    <div>
                      <div className="text-sm font-black text-pgBlue-dark italic tracking-tight uppercase group-hover:text-pgOrange transition-colors">
                        {t.title}
                      </div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                        {t.date} • {t.status}
                      </div>
                    </div>
                  </div>
                  <div className={`text-xl font-black italic tracking-tighter ${
                    t.type === 'deposit' ? 'text-green-500' : 'text-pgBlue-dark'
                  }`}>
                    {t.amount}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#F8F9FB] rounded-full flex items-center justify-center text-gray-300 mb-6">
                <FiClock size={40} />
              </div>
              <h3 className="text-xl font-black text-pgBlue-dark italic tracking-tighter uppercase mb-2">
                Операции не найдены
              </h3>
              <p className="text-sm font-medium text-gray-400 max-w-xs">
                За выбранный период транзакций не обнаружено. Попробуйте изменить фильтры.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
