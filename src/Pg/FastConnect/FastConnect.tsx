import { FiCoffee, FiArrowRight } from 'react-icons/fi';

const FastConnect = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-pgBlue-light to-white rounded-[3rem] overflow-hidden shadow-xl border border-pgBlue/10 flex flex-col md:flex-row items-center">
          
          {/* Текстовый контент */}
          <div className="md:w-1/2 p-8 md:p-16">
            <div className="flex items-center gap-2 text-pgOrange font-bold mb-4 uppercase tracking-widest text-sm">
              <FiCoffee className="text-xl" />
              <span>Ваш комфорт — наш приоритет</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-pgBlue-dark mb-6 leading-tight">
              Быстрое <br />
              <span className="text-pgBlue">подключение</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              Оставьте заявку на сайте и садитесь пить чай. <br className="hidden md:block" />
              Все остальное мы сделаем сами. Не заставим Вас ждать с подключением!
            </p>
            
            <button className="group relative bg-pgOrange hover:bg-pgOrange-hover text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
              Подключиться
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Изображение */}
          <div className="md:w-1/2 relative h-[350px] md:h-[550px] w-full">
            <img 
              src="https://images.unsplash.com/photo-1544739313-6fad02872377?auto=format&fit=crop&w=800&q=80" 
              alt="Человек пьет чай" 
              className="w-full h-full object-cover"
            />
            {/* Декоративный градиент, чтобы плавно слить фото с фоном */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-pgBlue-light/20 to-transparent"></div>
            
            {/* Плашка с быстрой инфой */}
            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white hidden md:block">
                <div className="text-pgBlue-dark font-black text-2xl">24 часа</div>
                <div className="text-gray-500 text-sm">максимальный срок <br/> подключения</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FastConnect;