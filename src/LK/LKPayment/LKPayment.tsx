import { useState } from 'react';
import { 
  FiZap, FiShield, 
  FiCheck, FiRefreshCw, FiChevronRight, FiLock 
} from 'react-icons/fi';


const LKPayment = () => {
  const [amount, setAmount] = useState('700');
  const [method, setMethod] = useState('card');
  const [isAutoPay, setIsAutoPay] = useState(false);
  const [saveCard, setSaveCard] = useState(true);
  const [cardNumber, setCardNumber] = useState('');

  const quickAmounts = ['500', '700', '1000', '2000'];

  const formatCardNumber = (value: string) => {
    // Удаляем все нецифровые символы
    const numbers = value.replace(/\D/g, '');
    // Ограничиваем до 16 цифр
    const limitedNumbers = numbers.slice(0, 16);
    // Добавляем пробелы каждые 4 цифры
    return limitedNumbers.replace(/(.{4})/g, '$1 ').trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4">
      
      <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-100">
        
        {/* 1. СУММА */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-pgOrange/10 text-pgOrange rounded-xl flex items-center justify-center">
              <FiZap size={18} />
            </div>
            <h2 className="text-lg font-black italic tracking-tighter text-pgBlue-dark uppercase">Сумма пополнения</h2>
          </div>

          <div className="relative mb-6">
            <input 
              type="text" 
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))}
              className="w-full bg-[#F8F9FB] border-2 border-transparent focus:border-pgOrange/20 focus:bg-white rounded-2xl py-6 px-8 text-4xl font-black text-pgBlue-dark italic transition-all outline-none"
              placeholder="0"
            />
            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-300 italic">₽</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {quickAmounts.map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-3.5 rounded-xl font-black text-xs transition-all ${
                  amount === val 
                  ? 'bg-pgBlue-dark text-white shadow-md' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {val} ₽
              </button>
            ))}
          </div>
        </div>

        {/* 2. СПОСОБ ОПЛАТЫ */}
        <div className="mb-6">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 ml-2">Выберите способ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div 
              onClick={() => setMethod('card')}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                method === 'card' ? 'border-pgBlue bg-blue-50/20' : 'border-gray-50 bg-gray-50/50 hover:border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-pgBlue-dark">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <rect x="4" y="9" width="3" height="3" rx="0.5" fill="currentColor"/>
                    <rect x="8" y="9" width="3" height="3" rx="0.5" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-sm font-black italic tracking-tight">Банковская <br/> карта</div>
              </div>
              {method === 'card' && <FiCheck className="text-pgBlue" strokeWidth={3} />}
            </div>

            <div 
              onClick={() => setMethod('sbp')}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                method === 'sbp' ? 'border-pgOrange bg-orange-50/20' : 'border-gray-50 bg-gray-50/50 hover:border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white text-[10px] font-black italic">СБП</div>
                <div className="text-sm font-black italic tracking-tight">Система <br/> платежей</div>
              </div>
              {method === 'sbp' && <FiCheck className="text-pgOrange" strokeWidth={3} />}
            </div>
          </div>

          {/* РЕКВИЗИТЫ КАРТЫ (Выпадают при выборе method === 'card') */}
          {method === 'card' && (
            <div className="space-y-4 p-6 bg-gray-50 rounded-[2rem] border border-gray-100 animate-slideDown overflow-hidden">
              <div>
                <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">Номер карты</label>
                <input 
                  type="text" 
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  className="w-full bg-white border border-gray-100 rounded-xl py-4 px-5 text-lg font-bold tracking-widest outline-none focus:border-pgBlue/30 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">ММ/ГГ</label>
                  <input type="text" placeholder="12/26" className="w-full bg-white border border-gray-100 rounded-xl py-4 px-5 text-lg font-bold outline-none focus:border-pgBlue/30 transition-all" />
                </div>
                <div>
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">CVV2/CVC2</label>
                  <input type="password" placeholder="***" className="w-full bg-white border border-gray-100 rounded-xl py-4 px-5 text-lg font-bold outline-none focus:border-pgBlue/30 transition-all" />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <div 
                    onClick={() => setSaveCard(!saveCard)}
                    className={`w-10 h-5 rounded-full relative cursor-pointer transition-all ${saveCard ? 'bg-pgBlue' : 'bg-gray-300'}`}
                  >
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${saveCard ? 'left-6' : 'left-1'}`} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-pgBlue-dark italic">Сохранить карту</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg">
                  <FiLock size={12} />
                  <span className="text-[9px] font-bold uppercase leading-none">Шифрование SSL</span>
                </div>
              </div>
              <p className="text-[9px] text-gray-400 font-medium leading-relaxed italic">
                Это абсолютно безопасно — данные вашей карты будут надежно храниться в зашифрованном виде.
              </p>
            </div>
          )}
        </div>

        {/* 3. АВТОПЛАТЕЖ */}
        <div 
          onClick={() => setIsAutoPay(!isAutoPay)}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer border border-transparent hover:border-gray-200 transition-all mb-10"
        >
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all ${isAutoPay ? 'bg-pgBlue border-pgBlue text-white' : 'border-gray-300'}`}>
              {isAutoPay && <FiCheck size={14} strokeWidth={4} />}
            </div>
            <span className="text-[11px] font-black uppercase tracking-tight italic text-pgBlue-dark leading-none">Подключить автоплатёж</span>
          </div>
          <FiRefreshCw size={14} className={isAutoPay ? 'text-pgBlue' : 'text-gray-300'} />
        </div>

        {/* 4. ИТОГ И КНОПКА */}
        <div className="space-y-4 pt-4 border-t border-gray-50">
          <div className="flex justify-between items-end px-2">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">К зачислению</p>
              <div className="text-4xl font-black text-pgBlue-dark italic tracking-tighter">
                {amount || 0} <span className="text-xl not-italic text-gray-300">₽</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-green-500 uppercase italic">Мгновенно</p>
            </div>
          </div>

          <button className="w-full bg-pgBlue-dark hover:bg-black text-white font-black py-6 rounded-[1.8rem] transition-all shadow-xl shadow-pgBlue-dark/20 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 group italic">
            Оплатить {amount} ₽
            <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
        <FiShield size={12} className="text-green-500" /> 
        Безопасная оплата через шлюз ПАО «ПЖ19»
      </div>
    </div>
  );
};

export default LKPayment;