import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiEye, 
  FiEyeOff,
  FiShield, 
  FiHome,
  FiArrowLeft
} from 'react-icons/fi';

const LoginPage = () => {
  const navigate = useNavigate();
  const [authMethod, setAuthMethod] = useState<'login' | 'reg'>('login');
  const [loginMethod, setLoginMethod] = useState<'telegram' | 'contract' | 'phone' | 'email'>('telegram');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [contractNumber, setContractNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 0) return '';
    if (numbers.length <= 1) return `+7 (${numbers}`;
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`;
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Вход:', { loginMethod, password, contractNumber, fullName, phone, email });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans">
      {/* Упрощенный Header только с логотипом */}
      <header className="absolute top-0 left-0 right-0 bg-white shadow-md w-full z-50 md:hidden">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg " alt="ПЖ19 Лого" className="h-8" />
          </Link>
        </div>
      </header>
      
      {/* ЛЕВАЯ ЧАСТЬ - ФОРМА ВХОДА */}
      <div className="w-full md:w-[40%] flex flex-col p-8 md:p-16 justify-center bg-white pt-20 md:pt-16">
        <button 
          onClick={() => navigate('/')}
          className="hidden md:flex items-center text-pgBlue font-semibold mb-8 hover:text-pgOrange transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          <span>Назад</span>
        </button>

        <div className="flex flex-col items-center mb-10">
          <img src="/logo.svg " alt="ПЖ19 Лого" className="h-16 mb-4" />
          <h1 className="text-2xl font-black text-gray-800 uppercase tracking-wider">Личный кабинет</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Табы способов входа */}
          <div className="flex border-b-2 border-gray-200 mb-6">
            {[
              { id: 'telegram' as const, label: 'Telegram' },
              { id: 'contract' as const, label: 'Договор' },
              { id: 'phone' as const, label: 'Телефон' },
              { id: 'email' as const, label: 'Email' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setLoginMethod(tab.id)}
                className={`flex-1 py-3 font-bold text-sm transition-all relative ${
                  loginMethod === tab.id
                    ? 'text-pgBlue border-b-2 border-pgBlue -mb-[2px]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Контейнер для плавных переходов */}
          <div className="relative min-h-[200px]">
            {/* Форма входа через Telegram */}
            {loginMethod === 'telegram' && (
              <div className="mb-6 p-6 bg-pgBlue-light rounded-2xl border-2 border-pgBlue/20 animate-fadeIn">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center mb-3">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="30" fill="#E3F2FD" opacity="0.4"/>
                    <circle cx="32" cy="32" r="24" fill="#0088cc"/>
                    <path d="M20 28L48 18L36 40L30 38L20 28Z" fill="white"/>
                    <path d="M20 28L30 38L28 44L20 28Z" fill="white" opacity="0.7"/>
                  </svg>
                </div>
                <h3 className="text-lg font-black text-gray-800 mb-2">Войти через Telegram</h3>
                <p className="text-sm text-gray-600 mb-4">Нажмите кнопку для авторизации через Telegram</p>
                <a
                  href="https://t.me/pg19_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pgBlue hover:bg-pgBlue-dark text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-pgBlue/30 active:scale-95"
                >
                  Открыть Telegram
                </a>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Ваш Telegram должен быть привязан к аккаунту.<br />
                Для привязки обратитесь в поддержку.
              </p>
              </div>
            )}

            {/* Форма входа по договору */}
            {loginMethod === 'contract' && (
              <div className="space-y-4 animate-fadeIn">
              <div className="relative group">
                <label className="text-xs font-bold text-gray-500 absolute -top-2 left-3 bg-white px-1 z-10 transition-all group-focus-within:text-pgBlue">
                  Номер договора <span className="text-pgOrange">*</span>
                </label>
                <input 
                  type="text" 
                  value={contractNumber}
                  onChange={(e) => setContractNumber(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl outline-none focus:border-pgBlue transition-all text-gray-700 font-semibold"
                  placeholder="100001"
                  required
                />
              </div>

              <div className="relative group">
                <label className="text-xs font-bold text-gray-500 absolute -top-2 left-3 bg-white px-1 z-10 transition-all group-focus-within:text-pgBlue">
                  ФИО <span className="text-pgOrange">*</span>
                </label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl outline-none focus:border-pgBlue transition-all text-gray-700 font-semibold"
                  placeholder="Иванов Иван"
                  required
                />
                <p className="mt-2 text-xs text-gray-400">
                  Введите фамилию и имя как указано в договоре
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-pgBlue text-white py-4 rounded-xl font-bold text-lg hover:bg-pgBlue-dark shadow-lg shadow-pgBlue/30 transition-all active:scale-[0.98]"
              >
                Войти
              </button>
              </div>
            )}

            {/* Форма входа по телефону */}
            {loginMethod === 'phone' && (
              <div className="space-y-4 animate-fadeIn">
              <div className="relative group">
                <label className="text-xs font-bold text-gray-500 absolute -top-2 left-3 bg-white px-1 z-10 transition-all group-focus-within:text-pgBlue">
                  Номер телефона <span className="text-pgOrange">*</span>
                </label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl outline-none focus:border-pgBlue transition-all text-gray-700 font-semibold"
                  placeholder="+7 (XXX) XXX-XX-XX"
                  required
                />
                <p className="mt-2 text-xs text-gray-400">
                  Укажите номер телефона, привязанный к вашему аккаунту
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-pgBlue text-white py-4 rounded-xl font-bold text-lg hover:bg-pgBlue-dark shadow-lg shadow-pgBlue/30 transition-all active:scale-[0.98]"
              >
                Продолжить
              </button>
              </div>
            )}

            {/* Форма входа по Email */}
            {loginMethod === 'email' && (
              <div className="space-y-4 animate-fadeIn">
              <div className="relative group">
                <label className="text-xs font-bold text-gray-500 absolute -top-2 left-3 bg-white px-1 z-10 transition-all group-focus-within:text-pgBlue">
                  Email <span className="text-pgOrange">*</span>
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-100 rounded-xl outline-none focus:border-pgBlue transition-all text-gray-700 font-semibold"
                  placeholder="example@mail.ru"
                  required
                />
                <p className="mt-2 text-xs text-gray-400">
                  На указанный email будет отправлен код подтверждения
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-pgBlue text-white py-4 rounded-xl font-bold text-lg hover:bg-pgBlue-dark shadow-lg shadow-pgBlue/30 transition-all active:scale-[0.98]"
              >
                Получить код
              </button>
              </div>
            )}
          </div>
        </form>

        <div className="mt-auto pt-10 flex items-center gap-4 p-4 bg-pgBlue-light rounded-2xl">
          <div className="w-10 h-10 bg-pgBlue rounded-full flex items-center justify-center text-white shrink-0">
            <FiShield size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">Ваш надёжный партнёр ПЖ 19</p>
            <p className="text-[10px] text-gray-500 leading-tight">
              Ваша безопасность и комфорт — наш главный приоритет в цифровом мире.
            </p>
          </div>
        </div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ - МАРКЕТИНГОВАЯ РЕКЛАМА */}
      <div className="hidden md:flex w-[60%] bg-gradient-to-br from-gray-50 to-pgBlue-light items-center justify-center p-12 relative overflow-hidden">
        
        {/* Декоративные круги */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-pgBlue-light rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-pgBlue-light rounded-full -ml-24 -mb-24 opacity-50"></div>

        <div className="max-w-xl text-center z-10">
          <div className="inline-block p-4 bg-white rounded-3xl shadow-2xl mb-8 relative">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-white shadow-xl" style={{
              background: 'linear-gradient(135deg, #0056b3 20%, #32CD32 100%)'
            }}>
              <FiEye size={48} className="animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white">
              <FiShield size={16} />
            </div>
          </div>

          <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
            Будьте спокойны за свой дом <br />
            <span className="text-pgBlue">с Облачным Видеонаблюдением</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-10 font-medium">
            Смотрите трансляции с камер и открывайте дверь домофона прямо из приложения ПЖ 19. Безопасность в один клик.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-pgBlue-light">
              <div className="text-pgBlue mb-2 flex justify-center">
                <FiHome size={24} />
              </div>
              <h4 className="font-bold text-sm text-gray-800 mb-1">Умный дом</h4>
              <p className="text-[11px] text-gray-500">Управление доступом в подъезд со смартфона</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-pgBlue-light">
              <div className="text-pgBlue mb-2 flex justify-center">
                <FiEye size={24} />
              </div>
              <h4 className="font-bold text-sm text-gray-800 mb-1">Архив 7 дней</h4>
              <p className="text-[11px] text-gray-500">Записи в облаке доступны в любое время</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-pgBlue-light">
              <div className="text-pgBlue mb-2 flex justify-center">
                <FiShield size={24} />
              </div>
              <h4 className="font-bold text-sm text-gray-800 mb-1">HD Качество</h4>
              <p className="text-[11px] text-gray-500">Четкая картинка даже в ночное время</p>
            </div>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="mt-12 bg-white text-pgBlue border-2 border-pgBlue px-8 py-3 rounded-full font-bold hover:bg-pgBlue hover:text-white transition-all shadow-md"
          >
            Подробнее об услугах
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
