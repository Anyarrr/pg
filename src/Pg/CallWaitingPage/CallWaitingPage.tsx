import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

const CallWaitingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [seconds, setSeconds] = useState(177);
  const userPhone = (location.state as { userPhone?: string })?.userPhone || '+7 (900) 111-11-11';

  useEffect(() => {
    // Автоматический переход через 5 секунд
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Таймер обратного отсчета
    const countdownTimer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownTimer);
    };
  }, [navigate]);

  const formatTime = (totalSeconds: number) => {
    return `${totalSeconds} сек.`;
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

      {/* ЛЕВАЯ ЧАСТЬ - ФОРМА ОЖИДАНИЯ */}
      <div className="w-full md:w-[40%] flex flex-col p-8 md:p-16 justify-center bg-white pt-20 md:pt-16">
        <div className="flex flex-col items-center mb-10">
          <img src="/logo.svg " alt="ПЖ19 Лого" className="h-16 mb-4" />
          <h1 className="text-2xl font-black text-gray-800 uppercase tracking-wider">Ожидание звонка</h1>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pgBlue rounded-full mb-4">
              <FiPhone className="text-white" size={32} />
            </div>
            <h2 className="text-xl font-black text-gray-800 mb-4">Позвоните на номер</h2>
            <a 
              href="tel:+78634431431" 
              className="text-2xl font-black text-pgBlue hover:text-pgOrange transition-colors"
            >
              +7 (863) 443-14-31
            </a>
          </div>

          <div className="bg-pgBlue-light rounded-2xl p-6 space-y-4">
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">Звоните с номера</p>
              <p className="text-lg font-black text-gray-800">{userPhone}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">После соединения сбросьте вызов</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-pgBlue-light rounded-2xl p-6">
              <p className="text-sm font-bold text-gray-500 mb-2">Ожидание звонка...</p>
              <p className="text-3xl font-black text-pgBlue">{formatTime(seconds)}</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="w-full text-sm text-pgBlue font-bold hover:underline"
          >
            Изменить номер телефона
          </button>
        </div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ - МАРКЕТИНГОВАЯ РЕКЛАМА */}
      <div className="hidden md:flex w-[60%] bg-gradient-to-br from-gray-50 to-pgBlue-light items-center justify-center p-12 relative overflow-hidden">
        <div className="max-w-xl text-center z-10">
          <div className="inline-block p-4 bg-white rounded-3xl shadow-2xl mb-8 relative">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-white shadow-xl" style={{
              background: 'linear-gradient(135deg, #0056b3 20%, #32CD32 100%)'
            }}>
              <FiPhone size={48} />
            </div>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
            Безопасный вход <br />
            <span className="text-pgBlue">через звонок</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10 font-medium">
            Мы позвоним вам на указанный номер для подтверждения входа в личный кабинет
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallWaitingPage;

