import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowRight, Instagram, Linkedin, Twitter, Phone, Menu, X, Zap, Circle, Users, Dumbbell, Receipt, Percent, ArrowLeft } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { IMAGES } from './constants';

const Navbar = ({ onMenuOpen }: { onMenuOpen: () => void }) => (
  <nav className="flex justify-between items-center px-6 py-2 bg-white border-b border-black/5 sticky top-0 z-40">
    <div className="flex items-center">
      <Zap size={24} fill="currentColor" className="text-brand-black" />
    </div>
    <button 
      onClick={onMenuOpen}
      className="group cursor-pointer p-2 hover:opacity-70 transition-opacity flex flex-col gap-1.5 items-end"
    >
      <div className="w-7 h-0.5 bg-brand-black rounded-full"></div>
      <div className="w-7 h-0.5 bg-brand-black rounded-full"></div>
    </button>
  </nav>
);

const FullMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const clubs = [
    {
      name: "Фитнес Мастер Первомайский",
      phone: "+7 (8152) 53-97-25",
      address: "пр. Кольский 178, 4 этаж"
    },
    {
      name: "Фитнес Мастер Ленинский",
      phone: "+7 (8152) 41-25-88",
      address: "ул. Хлобыстова 41А, 2 этаж"
    },
    {
      name: "Леди Фитнес",
      phone: "+7 (8152) 45-78-57",
      address: "ул. Воровского 15A, 4 этаж"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 bg-brand-white flex flex-col"
        >
          <div className="flex justify-end items-center px-6 py-2">
            <button 
              onClick={onClose} 
              className="p-2 hover:opacity-70 transition-opacity"
            >
              <X size={28} strokeWidth={1.5} className="text-brand-black" />
            </button>
          </div>
          
          <div className="flex-grow flex flex-col justify-center px-6 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
              {clubs.map((club, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl md:text-2xl font-black tracking-tighter leading-none">{club.name}</h3>
                  <div className="space-y-1">
                    <a href={`tel:${club.phone.replace(/\D/g, '')}`} className="block text-xl font-medium hover:underline underline-offset-4">{club.phone}</a>
                    <p className="text-sm text-black/60">{club.address}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-24 flex flex-col items-start text-xs font-bold uppercase tracking-widest"
            >
              <div className="flex flex-col gap-4">
                <a href="#" onClick={onClose} className="hover:underline underline-offset-8">Вакансии</a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8">Группа ВК</a>
              </div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-black/40 mt-4">Сеть спортивных клубов в Мурманске <span className="italic">с 1991</span></div>
            </motion.div>
          </div>
          
          <div className="px-6 py-12">
            {/* Empty footer space since text moved up */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const slides = [
  {
    id: 'elite-fitness',
    title: <>Элитный <br /> Фитнес.</>,
    description: <>Силовые тренировки и кондиционирование <br /> для трансформации тела и разума.</>,
    bgColor: '#F8C8DC',
    imageMobile: IMAGES.HERO_SLIDES[0].mobile,
    imageDesktop: IMAGES.HERO_SLIDES[0].desktop
  },
  {
    id: 'peak-power',
    title: <>Пиковая <br /> Мощь.</>,
    description: <>Раскройте свой потенциал с нашими <br /> продвинутыми программами тренировок.</>,
    bgColor: '#E2E8F0',
    imageMobile: IMAGES.HERO_SLIDES[1].mobile,
    imageDesktop: IMAGES.HERO_SLIDES[1].desktop
  },
  {
    id: 'full-harmony',
    title: <>Полная <br /> Гармония.</>,
    description: <>Найдите баланс и мобильность на занятиях <br /> йогой и восстановительных сессиях.</>,
    bgColor: '#D1FAE5',
    imageMobile: IMAGES.HERO_SLIDES[2].mobile,
    imageDesktop: IMAGES.HERO_SLIDES[2].desktop
  }
];

const PromoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const promo = slides.find(s => s.id === id);

  if (!promo) return <div className="min-h-screen flex items-center justify-center font-bold uppercase tracking-widest">Акция не найдена</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={16} /> Назад
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">
              {promo.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-black/60 leading-tight mb-12">
              {promo.description}
            </p>
            <div className="space-y-8">
              <div className="p-8 bg-gray-50 rounded-3xl border border-black/5">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Что включено</h3>
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3"><Circle size={8} fill="currentColor" /> Безлимитный доступ 24/7</li>
                  <li className="flex items-center gap-3"><Circle size={8} fill="currentColor" /> Индивидуальный план питания</li>
                  <li className="flex items-center gap-3"><Circle size={8} fill="currentColor" /> 4 персональные тренировки</li>
                  <li className="flex items-center gap-3"><Circle size={8} fill="currentColor" /> Доступ ко всем групповым занятиям</li>
                </ul>
              </div>
              <button className="w-full py-6 bg-brand-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-black/90 transition-colors shadow-2xl">
                Записаться по акции
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src={promo.imageDesktop} 
              alt={promo.id} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const SLIDE_DURATION = 5000;

  React.useEffect(() => {
    let startTime = Date.now();
    let animationFrame: number;

    const update = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;

      if (newProgress >= 100) {
        setProgress(0);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setProgress(newProgress);
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [currentSlide]);

  return (
    <section className="px-4 md:px-6 py-4 md:py-6 bg-white">
      <Link 
        to={`/promo/${slides[currentSlide].id}`}
        className="relative aspect-[4/5] md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden flex items-center w-full cursor-pointer group"
        style={{ backgroundColor: slides[currentSlide].bgColor }}
      >
        {/* Background Image */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Mobile Image */}
            <img 
              src={slides[currentSlide].imageMobile} 
              alt="" 
              className="w-full h-full object-cover md:hidden transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Desktop Image */}
            <img 
              src={slides[currentSlide].imageDesktop} 
              alt="" 
              className="hidden md:block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="absolute top-6 left-8 right-8 flex gap-2 z-20 max-w-7xl mx-auto">
          {slides.map((_, index) => (
            <div key={index} className="h-1 flex-grow bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div 
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ 
                  width: index === currentSlide ? `${progress}%` : index < currentSlide ? '100%' : '0%' 
                }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
};

const DistrictBanner = () => (
  <section className="px-6 pt-8 md:pt-12 pb-4 md:pb-6 bg-white text-center">
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6 uppercase"
      >
        СПОРТИВНЫЙ КЛУБ <br className="hidden md:block" /> В ТВОЕМ РАЙОНЕ
        <motion.span
          display="inline-block"
          animate={{ 
            rotate: [0, 15, -10, 15, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
          style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
        >
          ✌️
        </motion.span>
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-lg font-bold text-black/40 uppercase tracking-widest"
      >
        <span>#ФИТНЕСМАСТЕР</span>
        <span>#ПЕРВОМАЙСКИЙ</span>
        <span>#ЛЕНИНСКИЙ</span>
        <span>#ЛЕДИФИТНЕС</span>
        <span>#ОКТЯБРЬСКИЙ</span>
      </motion.div>
    </div>
  </section>
);

interface ClubSectionProps {
  name: string;
  phone: string;
  address: string;
  galleryImages: string[];
  pricingData: any[];
  trainingPacks: any[];
  trainers: any[];
  schedules: any;
  classDescriptions: any[];
  infrastructure: string[];
}

const ClubSection = ({ 
  name, 
  phone, 
  address, 
  galleryImages, 
  pricingData, 
  trainingPacks, 
  trainers, 
  schedules, 
  classDescriptions, 
  infrastructure 
}: ClubSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTrainerTab, setActiveTrainerTab] = useState<'group' | 'gym'>('group');
  const [activeScheduleTab, setActiveScheduleTab] = useState<'group' | 'gym'>('group');

  const accordionItems = [
    {
      title: "О клубе",
      content: (
        <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">Режим работы</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-black/5 pb-2">
                <span className="text-xs font-bold uppercase">ПН-ПТ</span>
                <span className="text-sm font-black tracking-tight">9:00-22:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-black/5 pb-2">
                <span className="text-xs font-bold uppercase">СБ-ВС</span>
                <span className="text-sm font-black tracking-tight">9:00-18:00</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">Инфраструктура</div>
            <ul className="space-y-2">
              {infrastructure.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1 h-1 bg-black rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Стоимость карт",
      content: (
        <div className="pb-8 space-y-6">
          <div className="overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory pb-4">
            {pricingData.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-64 snap-start bg-gray-50 p-6 rounded-2xl border border-black/5 hover:border-black/20 transition-all">
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">{item.period}</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold uppercase mb-1">Безлимит</div>
                    <div className="text-2xl font-black tracking-tighter">{item.unlimited}</div>
                  </div>
                  <div className="pt-4 border-t border-black/5">
                    <div className="text-[10px] font-bold uppercase mb-1 text-black/60">Дневной <span className="lowercase font-medium">(9:00 - 16:00)</span></div>
                    <div className="text-lg font-bold tracking-tight">{item.day}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory">
            {trainingPacks.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-64 snap-start bg-gray-50 p-6 rounded-2xl border border-black/5 flex justify-between items-center">
                <div className="text-xs font-bold uppercase tracking-widest">{item.count}</div>
                <div className="text-xl font-black tracking-tighter">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Расписание тренировок",
      content: (
        <div className="pb-8 space-y-8">
          <div className="flex gap-4 border-b border-black/5">
            <button 
              onClick={() => setActiveScheduleTab('group')}
              className={`pb-4 text-[10px] font-bold uppercase tracking-widest transition-all relative ${activeScheduleTab === 'group' ? 'text-black' : 'text-black/40'}`}
            >
              Групповые программы
              {activeScheduleTab === 'group' && (
                <motion.div layoutId={`activeScheduleTab-${name}`} className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
            <button 
              onClick={() => setActiveScheduleTab('gym')}
              className={`pb-4 text-[10px] font-bold uppercase tracking-widest transition-all relative ${activeScheduleTab === 'gym' ? 'text-black' : 'text-black/40'}`}
            >
              Тренажерный зал
              {activeScheduleTab === 'gym' && (
                <motion.div layoutId={`activeScheduleTab-${name}`} className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
          </div>
          
          <div key={activeScheduleTab} className="overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory">
            {schedules[activeScheduleTab].map((item: any, i: number) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex-shrink-0 w-72 snap-start group cursor-pointer"
              >
                <div className="aspect-[1.414/1] overflow-hidden rounded-2xl mb-3 bg-gray-100 border border-black/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.title}</span>
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">Описание классов</div>
            <div className="grid grid-cols-2 gap-4">
              {classDescriptions.map((cls, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-black/5">
                  <h5 className="text-xs font-bold uppercase mb-1 tracking-tight flex items-center gap-1.5">
                    {cls.type === 'active' ? (
                      <Zap size={12} className="text-brand-black fill-brand-black" />
                    ) : (
                      <Circle size={12} className="text-brand-black fill-brand-black" />
                    )}
                    {cls.title}
                  </h5>
                  <p className="text-[11px] text-black/60 leading-tight">{cls.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Тренеры",
      content: (
        <div className="pb-8 space-y-8">
          <div className="flex gap-4 border-b border-black/5">
            <button 
              onClick={() => setActiveTrainerTab('group')}
              className={`pb-4 text-[10px] font-bold uppercase tracking-widest transition-all relative ${activeTrainerTab === 'group' ? 'text-black' : 'text-black/40'}`}
            >
              Групповые программы
              {activeTrainerTab === 'group' && (
                <motion.div layoutId={`activeTab-${name}`} className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
            <button 
              onClick={() => setActiveTrainerTab('gym')}
              className={`pb-4 text-[10px] font-bold uppercase tracking-widest transition-all relative ${activeTrainerTab === 'gym' ? 'text-black' : 'text-black/40'}`}
            >
              Тренажерный зал
              {activeTrainerTab === 'gym' && (
                <motion.div layoutId={`activeTab-${name}`} className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
          </div>
          
          <div key={activeTrainerTab} className="overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory">
            {trainers.filter(t => t.category === activeTrainerTab).map((trainer, i) => (
              <motion.div 
                key={trainer.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex-shrink-0 w-36 snap-start group"
              >
                <div className="aspect-[9/16] overflow-hidden rounded-2xl mb-4 bg-gray-100">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-base font-bold uppercase tracking-tight leading-tight mb-1">{trainer.name}</h4>
                <p className="text-[9px] font-bold uppercase tracking-widest text-black/40">{trainer.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="px-4 md:px-6 pt-6 pb-12 overflow-hidden border-b border-black/5 last:border-0">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="currentColor"/>
          </svg>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl md:text-4xl font-black tracking-tighter leading-none uppercase">{name}</h3>
          <div className="space-y-1">
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="block text-xl font-medium hover:underline underline-offset-4">{phone}</a>
            <p className="text-sm text-black/60 uppercase tracking-widest font-bold">{address}</p>
          </div>
        </motion.div>
      </div>
      
      <div className="relative flex overflow-x-hidden mb-12 -mx-4 md:-mx-6">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-4 px-4"
        >
          {[...galleryImages, ...galleryImages].map((src, idx) => (
            <div key={idx} className="w-[300px] md:w-[500px] aspect-[16/9] flex-shrink-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-xl">
              <img 
                src={src} 
                alt={`Gallery image ${idx}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-2 md:px-0">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b border-black/10">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-3 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
            >
              <span className="text-base font-bold uppercase tracking-tight">{item.title}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Plus size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProgramCard = ({ title, description, image, linkText }: { title: string, description: string, image: string, linkText: string }) => (
  <div className="group cursor-pointer">
    <div className="aspect-[4/5] overflow-hidden mb-4 bg-gray-100">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <h3 className="text-xl font-bold mb-1">{title}</h3>
    <p className="text-sm text-black/60 mb-4">{description}</p>
    <a href="#" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all border-b border-black w-fit pb-1">
      {linkText} <ArrowRight size={12} />
    </a>
  </div>
);

const Programs = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
      <div>
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-6 uppercase">
          Наши <br /> Программы.
        </h2>
        <p className="text-lg max-w-sm font-medium leading-tight">
          Результаты наших тренировок говорят сами за себя.
        </p>
      </div>
      <button className="px-8 py-3 border border-brand-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-colors">
        Все программы
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <ProgramCard 
        title="Сила и Мощь"
        description="Освойте основы тяжелой атлетики и взрывных движений."
        image={IMAGES.PROGRAMS.STRENGTH}
        linkText="Подробнее"
      />
      <ProgramCard 
        title="Осознанный Поток"
        description="Баланс интенсивности, мобильности и ментальной ясности."
        image={IMAGES.PROGRAMS.FLOW}
        linkText="Исследовать"
      />
      <ProgramCard 
        title="Лаборатория Выносливости"
        description="Высокоинтенсивный метаболический тренинг для пиковых результатов."
        image={IMAGES.PROGRAMS.ENDURANCE}
        linkText="Присоединиться"
      />
    </div>
  </section>
);

interface AccordionItemProps {
  key?: React.Key;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => (
  <div className="border-b border-white/20">
    <button 
      onClick={onClick}
      className="w-full py-3 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
    >
      <span className="text-base font-bold uppercase tracking-tight">{title}</span>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Plus size={24} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-white/60 text-sm max-w-xl">
            {content}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Philosophy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Научный подход",
      content: "Каждая тренировка разработана с использованием последних исследований в области физиологии упражнений и биомеханики."
    },
    {
      title: "Сила сообщества",
      content: "Мы верим в силу коллектива. Наши участники поддерживают друг друга, создавая среду, в которой каждый процветает."
    },
    {
      title: "Целостный подход",
      content: "Фитнес — это не только зал. Мы даем рекомендации по питанию, восстановлению и ментальной устойчивости."
    },
    {
      title: "Ориентация на результат",
      content: "Мы тщательно отслеживаем прогресс: от состава тела до показателей производительности."
    },
    {
      title: "Доступность везде",
      content: "Получите доступ к коучингу мирового уровня из любой точки мира с нашей цифровой платформой."
    }
  ];

  return (
    <section className="bg-[#1a1a1a] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <AccordionItem 
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const images = IMAGES.ABOUT_GALLERY;

  const features = [
    {
      icon: <Users size={32} />,
      title: "Популярные направления",
      desc: "групповых программ активного и мягкого фитнеса"
    },
    {
      icon: <Dumbbell size={32} />,
      title: "Тренажерные залы",
      desc: "оснащены силовым и кардио оборудованием"
    },
    {
      icon: <Receipt size={32} />,
      title: "Налоговый вычет",
      desc: "возможность вернуть 13% от затрат"
    },
    {
      icon: <Percent size={32} />,
      title: "Постоянная скидка",
      desc: "до 10% на продление карты"
    }
  ];

  return (
    <section className="py-24 overflow-hidden bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto opacity-80 uppercase tracking-wider"
          style={{ fontVariant: 'small-caps' }}
        >
          Сеть Фитнес Мастер и Леди Фитнес в Мурманске — это три спортивных клуба: 
          Фитнес Мастер в Первомайском и Ленинском районах и женский спортивный клуб 
          Леди Фитнес в Октябрьском. Первый наш клуб открылся в 1991 году.
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden mb-24">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-4 px-4"
        >
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="w-[300px] md:w-[450px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-2xl">
              <img 
                src={src} 
                alt={`Gallery image ${idx}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group flex items-center gap-6"
          >
            <div className="text-white/40 group-hover:text-white transition-colors flex-shrink-0">
              {React.cloneElement(f.icon as React.ReactElement, { size: 24 })}
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-tight mb-1 leading-tight">
                {f.title}
              </h3>
              <p className="text-xs text-white/50 leading-snug">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MapSection = () => (
  <section className="w-full h-[450px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13854.444444444445!2d33.075!3d68.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KTQuNGC0L3QtdGBINCc0LDRgdGC0LXRgCDQnNGD0YDQvNCw0L3RgdC6!5e0!3m2!1sru!2sru!4v1710000000000!5m2!1sru!2sru" 
      className="absolute inset-0 w-full h-full border-0"
      allowFullScreen={true}
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    ></iframe>
    <div className="absolute top-8 left-8 bg-white p-6 shadow-2xl max-w-xs hidden md:block z-10">
      <h3 className="text-xl font-black tracking-tighter uppercase mb-4">Наши залы</h3>
      <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-2">Мурманск</p>
      <ul className="text-sm font-medium space-y-2">
        <li>• пр. Кольский 178</li>
        <li>• ул. Хлобыстова 41А</li>
        <li>• ул. Воровского 15A</li>
      </ul>
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-6 py-12 border-t border-black/10 max-w-7xl mx-auto w-full">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
        <div className="flex flex-col md:flex-row gap-8">
          <a href="#" className="hover:text-black transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-black transition-colors">Правила клуба</a>
        </div>
        <div className="flex gap-6">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity text-black">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="currentColor"/>
              <path d="M12.8732 16.5C7.45664 16.5 4.37042 12.7841 4.2402 7.5H6.94692C7.03676 11.375 8.74432 13.017 10.1024 13.3551V7.5H12.6455V10.8494C14.204 10.683 15.602 9.17159 16.1562 7.5H18.6994C18.2849 9.56534 16.7629 11.0767 15.6791 11.7074C16.7629 12.2102 18.5046 13.5142 19.2974 16.5H16.5034C15.881 14.5653 14.3468 13.0682 12.6455 12.8977V16.5H12.8732Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-[9px] font-bold uppercase tracking-widest text-black/40">
        Сеть спортивных клубов в Мурманске <span className="italic">с 1991</span>
      </div>
    </div>
  </footer>
);

const FloatingPhoneButton = () => (
  <motion.a
    href="tel:+78152539725"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-brand-black text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-black/90 transition-colors"
    aria-label="Call us"
  >
    <Phone size={24} />
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute inset-0 rounded-full border-2 border-brand-black/20"
    />
  </motion.a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clubData = {
    pricingData: [
      { period: "1 месяц", unlimited: "5400 ₽", day: "4500 ₽" },
      { period: "3 месяца", unlimited: "13000 ₽", day: "10800 ₽" },
      { period: "6 месяцев", unlimited: "24000 ₽", day: "20300 ₽" }
    ],
    trainingPacks: [
      { count: "4 тренировки", price: "2400 ₽" },
      { count: "8 тренировок", price: "4100 ₽" }
    ],
    trainers: [
      { name: "Арина Кузнецова", role: "Инструктор групповых программ", category: 'group', image: IMAGES.TRAINERS.ARINA },
      { name: "Софья Калинина", role: "Инструктор групповых программ", category: 'group', image: IMAGES.TRAINERS.SOFYA },
      { name: "Елена Шумилова", role: "Инструктор групповых программ", category: 'group', image: IMAGES.TRAINERS.ELENA },
      { name: "Клавдия Прокофьева", role: "Инструктор групповых программ", category: 'group', image: IMAGES.TRAINERS.KLAVDIYA },
      { name: "Надежда Палиенко", role: "Инструктор групповых программ", category: 'group', image: IMAGES.TRAINERS.NADEZHDA },
      { name: "Александр Бердников", role: "Персональный тренер", category: 'gym', image: IMAGES.TRAINERS.ALEXANDER_B },
      { name: "Николай Марук", role: "Персональный тренер", category: 'gym', image: IMAGES.TRAINERS.NIKOLAY },
      { name: "Александр Кублицкий", role: "Персональный тренер", category: 'gym', image: IMAGES.TRAINERS.ALEXANDER_K },
      { name: "Роза Соловьева", role: "Персональный тренер", category: 'gym', image: IMAGES.TRAINERS.ROZA }
    ],
    schedules: {
      group: [
        { title: "Зал 1 - ПН-СР-ПТ", image: IMAGES.SCHEDULE_ZONES.HALL_1_MON },
        { title: "Зал 1 - ВТ-ЧТ-СБ", image: IMAGES.SCHEDULE_ZONES.HALL_1_TUE },
        { title: "Зал 2 - Основное", image: IMAGES.SCHEDULE_ZONES.HALL_2 },
        { title: "Йога и Пилатес", image: IMAGES.SCHEDULE_ZONES.YOGA }
      ],
      gym: [
        { title: "Кардио зона", image: IMAGES.SCHEDULE_ZONES.CARDIO },
        { title: "Свободные веса", image: IMAGES.SCHEDULE_ZONES.WEIGHTS },
        { title: "Функциональный тренинг", image: IMAGES.SCHEDULE_ZONES.FUNCTIONAL },
        { title: "Зона растяжки", image: IMAGES.SCHEDULE_ZONES.STRETCH }
      ]
    },
    classDescriptions: [
      { title: "Super Sculpt", type: "active", description: "Короткая разминка и силовая работа над всеми группами мышц" },
      { title: "New Power", type: "active", description: "Глубокая проработка всех мышечных групп с использованием степ-платформы и различного оборудования" },
      { title: "Round Power", type: "active", description: "Непрерывное выполнение ряда упражнений на все тело с короткими периодами отдыха" },
      { title: "Stretching", type: "soft", description: "Комплекс упражнений на растяжку" },
      { title: "Здоровая спина", type: "soft", description: "Коррекция мышц спины и улучшение осанки" },
      { title: "Fitball", type: "soft", description: "Занятие c использованием большого гимнастического мяча" }
    ],
    infrastructure: ["Два зала групповых программ", "Тренажерный зал", "Душевые", "Студия Кинезис", "Кабинет диагностики"]
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
        <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <Routes>
          <Route path="/" element={
            <main className="flex-grow">
              <Hero />
              <DistrictBanner />
              
              <ClubSection 
                name="Фитнес Мастер Первомайский"
                phone="+7 (8152) 53-97-25"
                address="пр. Кольский 178, 4 этаж"
                galleryImages={IMAGES.CLUB_GALLERY}
                {...clubData}
              />

              <ClubSection 
                name="Фитнес Мастер Ленинский"
                phone="+7 (8152) 22-44-22"
                address="ул. Хлобыстова 41А"
                galleryImages={IMAGES.CLUB_GALLERY}
                {...clubData}
              />

              <ClubSection 
                name="Леди Фитнес Октябрьский"
                phone="+7 (8152) 45-45-45"
                address="ул. Воровского 15A"
                galleryImages={IMAGES.CLUB_GALLERY}
                {...clubData}
              />

              <AboutUs />
              <MapSection />
              <Philosophy />
            </main>
          } />
          <Route path="/promo/:id" element={<PromoPage />} />
        </Routes>
        <Footer />
        <FloatingPhoneButton />
      </div>
    </BrowserRouter>
  );
}
