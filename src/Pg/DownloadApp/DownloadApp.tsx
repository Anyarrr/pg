import { FiDownload, FiCheckCircle, FiShield, FiSmartphone, FiCreditCard } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const   DownloadApp = () => {
  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        <div className="bg-[#002B5B] rounded-[4rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,43,91,0.3)]">
          
          {/* Сложные декоративные элементы фона */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-pgOrange/20 blur-[80px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/10 blur-[60px] rounded-full"></div>

          <div className="flex flex-col lg:flex-row items-center relative z-10">
            
            {/* ЛЕВАЯ ЧАСТЬ: Контент */}
            <div className="lg:w-3/5 p-10 md:p-20 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
                <span className="w-2 h-2 bg-pgOrange rounded-full animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Мобильный сервис ПЖ19</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
                Управляйте <br />
                <span className="text-pgOrange italic drop-shadow-sm">интернетом</span> <br />
                в один тап
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <FiCreditCard />, text: "Оплата без комиссии" },
                  { icon: <FiSmartphone />, text: "Смена тарифа мгновенно" },
                  { icon: <FiShield />, text: "Безопасный вход" },
                  { icon: <FiCheckCircle />, text: "История платежей" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-pgOrange text-xl group-hover:bg-pgOrange group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-blue-50 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Стор-кнопки */}
              <div className="flex flex-wrap gap-5">
                <a href="#" className="group flex items-center gap-4 bg-white text-[#002B5B] px-8 py-4 rounded-2xl font-bold hover:bg-pgOrange hover:text-white transition-all duration-500 shadow-xl hover:-translate-y-1">
                  <FaApple className="text-3xl" />
                  <div className="text-left leading-none">
                    <div className="text-[10px] uppercase opacity-60 group-hover:opacity-100 transition-opacity">App Store</div>
                    <div className="text-xl">Скачать</div>
                  </div>
                </a>
                
                <a href="#" className="group flex items-center gap-4 bg-white text-[#002B5B] px-8 py-4 rounded-2xl font-bold hover:bg-pgOrange hover:text-white transition-all duration-500 shadow-xl hover:-translate-y-1">
                  <FaGooglePlay className="text-2xl" />
                  <div className="text-left leading-none">
                    <div className="text-[10px] uppercase opacity-60 group-hover:opacity-100 transition-opacity">Google Play</div>
                    <div className="text-xl">Скачать</div>
                  </div>
                </a>
              </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ: "Стеклянный" Телефон */}
            <div className="lg:w-2/5 p-10 lg:p-0 flex justify-center items-center relative h-full">
              
              {/* Макет смартфона */}
              <div className="relative w-[280px] h-[560px] bg-[#001f42] rounded-[3rem] border-[8px] border-white/10 shadow-2xl overflow-hidden transform lg:rotate-6 hover:rotate-0 transition-transform duration-700">
                {/* Экран телефона */}
                <div  className="absolute inset-0 bg-gradient-to-br from-pgBlue-dark to-[#001f42] flex flex-col items-center justify-center p-6">
                  {/* QR-код внутри телефона */}
                  <div className="bg-white p-5 rounded-[2.5rem] shadow-[0_0_30px_rgba(255,102,0,0.3)] mb-8 transform hover:scale-105 transition-transform">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://pg19.ru&color=002B5B`} 
                      alt="QR" 
                      className="w-32 h-32 md:w-40 md:h-40"
                    />
                  </div>
                  <div className="text-center  text-white">
                    <div className="w-12 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
                    <p className="font-black text-lg mb-2 flex items-center justify-center gap-2 uppercase tracking-tighter">
                      <FiDownload className="text-pgOrange" />  Сканируй
                    </p>
                    <p className="text-blue-200 text-xs leading-relaxed px-4">
                      Наведи камеру для мгновенной <br /> загрузки приложения
                    </p>
                  </div>
                </div>
                {/* Блик на стекле */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Парящие элементы вокруг телефона */}
              <div className="absolute top-20 right-10 bg-pgOrange p-4 rounded-2xl shadow-lg animate-bounce hidden xl:block">
                <FiCheckCircle className="text-white text-2xl" />
              </div>
              <div className="absolute bottom-20 left-0 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg animate-pulse hidden xl:block">
                <div className="w-8 h-1 bg-pgOrange rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;