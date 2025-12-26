import { 
    FiUsers, FiShield, FiTrendingUp, FiLayers, FiEye, FiCpu, FiBookOpen 
  } from 'react-icons/fi';
  
  const CooperativeSections = () => {
    return (
      <>
        {/* БЛОК 3: ИНТЕРАКТИВНЫЙ МАНИФЕСТ КООПЕРАТИВА */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col gap-16">
                
                {/* Левая часть: Идеология */}
                <div>
                  <div className="inline-block px-4 py-1.5 mb-6 bg-pgBlue/5 border border-pgBlue/10 rounded-full">
                    <span className="text-xs font-black text-pgBlue uppercase tracking-widest">Кооперативная модель связи в формате «ПЖ-19»</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-pgBlue-dark mb-8 tracking-tighter leading-tight">
                    Сообщество равных. <br />
                    <span className="text-pgOrange italic">Не клиенты, а пайщики.</span>
                  </h2>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                  «ПЖ-19» — это потребительский интернет кооператив, иными словами, сообщество людей, которые объединились для совместного пользования интернетом на базе некоммерческого участия. Мы не продаём услуги — мы развиваем инфраструктуру связи вместе и для себя.
                  </p>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                  Каждый участник не клиент, а полноправный пайщик, который может влиять на принятие решений и развитие кооператива.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <FiUsers className="text-pgBlue text-2xl mb-4" />
                      <h4 className="font-black text-pgBlue-dark text-sm mb-2 uppercase">Один голос</h4>
                      <p className="text-xs text-gray-400 font-bold">Равные права в управлении кооперативом для каждого участника.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <FiShield className="text-pgBlue text-2xl mb-4" />
                      <h4 className="font-black text-pgBlue-dark text-sm mb-2 uppercase">Прозрачность</h4>
                      <p className="text-xs text-gray-400 font-bold">Взносы идут только на развитие сети и уставные задачи.</p>
                    </div>
                  </div>
                </div>
  
                {/* Правая часть: Наши цели (Интерактивные карточки) */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6 block">Стратегические цели</label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { 
                      icon: <FiLayers />, 
                      title: "Коллективный доступ", 
                      desc: "Организация свободного доступа к интернету без посредников и наценок." 
                    },
                    { 
                      icon: <FiTrendingUp />, 
                      title: "Развитие инфраструктуры", 
                      desc: "Постоянная модернизация сети в интересах всех членов сообщества." 
                    },
                    { 
                      icon: <FiEye />, 
                      title: "Открытое управление", 
                      desc: "Полная подотчетность и возможность участия в жизни кооператива." 
                    },
                    { 
                      icon: <FiCpu />, 
                      title: "Цифровое равенство", 
                      desc: "Обеспечение связи даже в удаленных и малонаселенных районах." 
                    },
                    { 
                      icon: <FiBookOpen />, 
                      title: "Сетевая безопасность", 
                      desc: "Инфраструктура с шифрованием и минимумом сбора персональных данных." 
                    },
                    { 
                      icon: <FiBookOpen />, 
                      title: "Технологическая независимость", 
                      desc: "Использование открытых стандартов и свободных решений." 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-8 bg-white border border-gray-100 rounded-[2rem] overflow-hidden relative">
                      <div className="flex items-start gap-6 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-pgBlue">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-black text-pgBlue-dark text-lg mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                      <div className="absolute right-0 top-0 text-8xl font-black text-gray-50 -mr-4 -mt-4">0{idx+1}</div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default CooperativeSections;