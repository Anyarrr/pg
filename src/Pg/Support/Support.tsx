import { FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import { FaTelegramPlane, FaVk } from 'react-icons/fa';

const Support = () => {
  return (
    <section id="support" className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* ЛЕВАЯ ЧАСТЬ: Визуал и Статус */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-pgBlue-light text-pgBlue px-4 py-2 rounded-full mb-6 font-bold text-sm tracking-wide">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Операторы в сети
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-pgBlue-dark mb-8 leading-[1.1]">
                Поможем решить <br />
                Любой <span className="text-pgOrange italic">вопрос</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
                Наша служба поддержки работает круглосуточно. Мы не используем скучных ботов — вам всегда ответит живой человек.
              </p>

              {/* Карточка времени работы */}
              <div className="bg-pgBlue-dark rounded-[2.5rem] p-8 text-white shadow-2xl shadow-pgBlue/20 flex items-center gap-6 transform hover:scale-105 transition-transform duration-500">
                <div className="w-16 h-16 bg-pgOrange rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-pgOrange/30">
                  <FiClock />
                </div>
                <div>
                  <div className="text-blue-200 text-sm uppercase tracking-widest font-bold">Режим работы</div>
                  <div className="text-2xl font-black">24 / 7 / 365</div>
                  <div className="text-blue-300 text-xs">Без праздников и выходных</div>
                </div>
              </div>
            </div>

            {/* Абстрактный декор на фоне */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-pgBlue-light/50 blur-[80px] rounded-full -z-0"></div>
            <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-pgOrange/10 blur-[100px] rounded-full -z-0"></div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Каналы связи */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Карточка: Телефон */}
            <div className="group bg-gray-50 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-pgBlue/10 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-pgBlue text-2xl mb-6 shadow-sm group-hover:bg-pgBlue group-hover:text-white transition-colors">
                <FiPhone />
              </div>
              <h3 className="text-xl font-bold text-pgBlue-dark mb-2">Позвонить нам</h3>
              <a href="tel:+78634000000" className="text-lg font-black text-pgOrange hover:text-pgBlue transition-colors italic leading-none">
                8 (8634) 00-00-00
              </a>
              <p className="text-sm text-gray-400 mt-4 leading-snug">Бесплатно по всей территории Таганрога</p>
            </div>

            {/* Карточка: Telegram */}
            <a href="https://t.me/PG19CONNECTBOT" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-pgBlue/10 hover:bg-white hover:shadow-xl transition-all duration-300 block">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0088cc] text-2xl mb-6 shadow-sm group-hover:bg-[#0088cc] group-hover:text-white transition-colors">
                <FaTelegramPlane />
              </div>
              <h3 className="text-xl font-bold text-pgBlue-dark mb-2">Telegram Чат</h3>
              <span className="flex items-center gap-2 text-sm font-black bg-[#0088cc]/10 text-[#0088cc] px-4 py-2 rounded-full group-hover:bg-[#0088cc] group-hover:text-white transition-all w-fit">
                НАПИСАТЬ <FiSend />
              </span>
              <p className="text-sm text-gray-400 mt-4 leading-snug">Среднее время ответа <br/> составляет 2 минуты</p>
            </a>

            {/* Карточка: ВКонтакте */}
            <a href="https://vk.com/pg19_internet" target="_blank" rel="noopener noreferrer" className="group bg-gray-50 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-pgBlue/10 hover:bg-white hover:shadow-xl transition-all duration-300 block">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#4C75A3] text-2xl mb-6 shadow-sm group-hover:bg-[#4C75A3] group-hover:text-white transition-colors">
                <FaVk />
              </div>
              <h3 className="text-xl font-bold text-pgBlue-dark mb-2"> Сообщество ВК</h3>
              <span className="text-sm font-black text-[#4C75A3] border-b-2 border-[#4C75A3]/20 group-hover:border-[#4C75A3] transition-all pb-1">
                ЗАДАТЬ ВОПРОС
              </span>
              <p className="text-sm text-gray-400 mt-4 leading-snug">Следите за новостями и пишите в ЛС</p>
            </a>
            <div className="group bg-gray-50 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-pgBlue/10 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-pgOrange text-2xl mb-6 shadow-sm group-hover:bg-pgOrange group-hover:text-white transition-colors">
                <FiMail />
              </div>
              <h3 className="text-xl font-bold text-pgBlue-dark mb-2">Email почта</h3>
              <a href="mailto:support@pg19.ru" className="text-sm font-black text-pgBlue-dark border-b-2 border-pgBlue-dark/10 hover:border-pgOrange transition-all pb-1 uppercase">
                support@pg19.ru
              </a>
              <p className="text-sm text-gray-400 mt-4 leading-snug">Для официальных запросов и документов</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;