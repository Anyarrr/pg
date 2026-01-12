import React, { useState } from 'react';
import { 
  FiArrowDownLeft, FiArrowUpRight, FiBarChart2, FiDownload, 
  FiCalendar, FiX, FiClock, FiChevronRight 
} from 'react-icons/fi';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  title: string;
  date: string;
  status: string;
  amount: string;
}

export const TransactionHistory: React.FC = () => {
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
