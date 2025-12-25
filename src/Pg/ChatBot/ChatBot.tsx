import { useState, useEffect, useRef } from 'react';
import { FiMessageCircle, FiX, FiUser, FiGift } from 'react-icons/fi';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Здравствуйте! 👋 Я виртуальный помощник ПЖ19. Чем могу помочь?", isBot: true }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowPromo(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    (messagesEndRef.current as HTMLDivElement | null)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- ИЗМЕНЕННАЯ ЛОГИКА ---
  const handleOpenChatWithPromo = () => {
    setShowPromo(false);
    setIsOpen(true);
    
    // Добавляем сообщение от пользователя, как будто он спросил про акцию
    const userMsgId = Date.now();
    setMessages(prev => [
      ...prev, 
      { id: userMsgId, text: "Расскажите подробнее о тарифе по акции!", isBot: false }
    ]);
    
    // Бот отвечает через небольшую паузу
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          id: userMsgId + 1, 
          text: "Отличный выбор! 🔥 Тариф «Оптимальный + ТВ» — это 300 Мбит/с и 191 канал. При подключении сегодня вы получаете первый месяц в подарок и роутер в аренду всего за 99 ₽/мес! Хотите оформить заявку?", 
          isBot: true 
        }
      ]);
    }, 800);
  };

  const handleSimpleOpen = () => {
    setShowPromo(false);
    setIsOpen(!isOpen);
  };

  const questions = [
    { id: 'pay', text: 'Как оплатить интернет?', answer: 'Оплатить можно в нашем мобильном приложении, через Сбербанк Онлайн или в Личном кабинете на сайте. Комиссия 0%!' },
    { id: 'tariffs', text: 'Какие у вас есть тарифы?', answer: 'У нас есть 3 основных тарифа: "Старт" (100 Мбит/с), "Игровой" (500 Мбит/с) и "Гигабит" (1000 Мбит/с). Подробнее в разделе "Тарифы".' },
    { id: 'operator', text: 'Связаться с оператором', answer: 'Вы можете позвонить нам: 8 (8634) 00-00-00' }
  ];

  const handleQuestionClick = (q: { id: string; text: string; answer: string }) => {
    setMessages(prev => [...prev, { id: Date.now(), text: q.text, isBot: false }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: q.answer, isBot: true }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      
      {/* ОКНО ЧАТА */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-pgBlue-dark p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-pgOrange rounded-full flex items-center justify-center text-xl">
                  <FiUser />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-pgBlue-dark rounded-full"></div>
              </div>
              <div>
                <div className="font-bold">Ассистент ПЖ19</div>
                <div className="text-xs text-blue-200">Онлайн</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition">
              <FiX className="text-2xl" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                  msg.isBot 
                    ? 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100' 
                    : 'bg-pgOrange text-white shadow-md rounded-tr-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100 space-y-2">
            <div className="text-[10px] uppercase font-bold text-gray-400 mb-2 px-2">Выберите вопрос:</div>
            <div className="flex flex-wrap gap-2">
              {questions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleQuestionClick(q)}
                  className="text-left text-xs bg-pgBlue-light text-pgBlue-dark px-4 py-2 rounded-full hover:bg-pgBlue hover:text-white transition-all duration-200 font-medium border border-pgBlue/10"
                >
                  {q.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ПРОМО-УВЕДОМЛЕНИЕ */}
      {showPromo && !isOpen && (
        <div className="absolute bottom-20 right-0 w-[300px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <div className="bg-gradient-to-r from-pgOrange to-orange-500 p-4 text-white relative">
            <button 
              onClick={() => setShowPromo(false)}
              className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition"
            >
              <FiX className="text-lg" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <FiGift className="text-xl" />
              <span className="font-bold text-[10px] uppercase tracking-wider">Эксклюзив для вас</span>
            </div>
          </div>
          
          <div className="p-5">
            <p className="text-gray-800 font-black text-xl mb-2 italic">
              300 Мбит/с + ТВ
            </p>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">
              Первый месяц — <span className="text-green-600 font-bold">0 ₽</span>. 
              Успейте подключиться до конца недели!
            </p>
            <button 
              onClick={handleOpenChatWithPromo}
              className="w-full bg-pgBlue hover:bg-pgBlue-dark text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-pgBlue/20 text-sm uppercase tracking-widest"
            >
              Узнать больше
            </button>
          </div>
        </div>
      )}

      {/* КНОПКА ВЫЗОВА ЧАТА */}
      <button
        onClick={handleSimpleOpen}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-all duration-500 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-white text-pgBlue-dark' : 'bg-pgOrange text-white'
        }`}
      >
        {isOpen ? <FiX /> : <FiMessageCircle />}
        {!isOpen && !showPromo && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-pgOrange text-[10px] font-bold items-center justify-center shadow-sm">1</span>
          </span>
        )}
      </button>

    </div>
  );
};

export default ChatBot;