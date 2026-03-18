import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowRight, Instagram, Linkedin, Twitter, Phone, Menu, X, Zap, Circle, Users, Dumbbell, Receipt, Percent, ArrowLeft, Download, Check, Music, Activity } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { IMAGES } from './constants';

const Navbar = ({ onMenuOpen }: { onMenuOpen: () => void }) => (
  <nav className="flex justify-between items-center px-6 py-2 bg-white border-b border-black/5 sticky top-0 z-40">
    <div className="flex items-center">
      <img src="/logo.png" alt="Фитнес Мастер" className="h-6 w-auto object-contain" />
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
      address: "пр. Кольский 178, 4 этаж",
      id: "club-pervomaysky"
    },
    {
      name: "Фитнес Мастер Ленинский",
      phone: "+7 (8152) 41-25-88",
      address: "ул. Хлобыстова 41А, 2 этаж",
      id: "club-leninsky"
    },
    {
      name: "Леди Фитнес",
      phone: "+7 (8152) 45-78-57",
      address: "ул. Воровского 15A, 4 этаж",
      id: "club-lady"
    }
  ];

  const scrollToClub = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait for menu to close
  };

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
                  <h3 
                    className="text-xl md:text-2xl font-black tracking-tighter leading-none cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={() => scrollToClub(club.id)}
                  >
                    {club.name}
                  </h3>
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
              <div className="text-[9px] font-bold uppercase tracking-widest text-black/40 mt-4">Сеть спортивных клубов в Мурманске<br/><span className="italic">с 1991</span></div>
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
    title: "Снег тает — мотивация растет",
    description: (
      <div className="space-y-4">
        <p>Если вы готовы к трансформации уже сейчас - ловите момент. На персональные тренировки у Алены Капустиной щедрая акция: блок из 8 тренировок за 4000 ₽ вместо 4800!</p>
        
        <p>
          Время для вашего прогресса:<br />
          - Вторник/четверг: 10:00-12:00<br />
          - Суббота: 11:00-13:00
        </p>

        <p>Не тяните, места улетят!</p>

        <p>
          Задать вопросы и записаться на тренировку можно через:<br />
          - Директ тренера: <a href="https://vk.ru/alena_1611" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Алена Капустина</a><br />
          - Телефон клуба: +7 (8152) 45-78-57<br />
          ул. Воровского 15А, 4 этаж<br />
          #ледифитнес #октябрьский
        </p>
      </div>
    ),
    imageMobile: IMAGES.HERO_SLIDES[0].mobile,
    imageDesktop: IMAGES.HERO_SLIDES[0].desktop
  },
  {
    id: 'catch-moment',
    title: "Лови момент✨",
    description: (
      <div className="space-y-4">
        <p>с 20 по 28 марта включительно!</p>
        
        <p>Можно не только сэкономить, но и оплатить карту частями.</p>
        
        <p>Безлимитная карта на 3 месяца за ✅11500 ₽ вместо 13000 ₽.</p>
        
        <p>
          В рассрочку двумя платежами:<br />
          - Первый период за 5750 ₽ на 31 день<br />
          - Второй период за 5750 ₽ на 55 дней
        </p>
        
        <p>Воспользуйся выгодой и вперёд к результатам👟</p>
        
        <p>
          Позвонить: <a href="tel:+78152707023" className="underline underline-offset-4">70-70-23</a><br />
          Написать: <a href="https://vk.me/fm_lf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">vk.me/fm_lf</a><br />
          #фитнесмастер #первомайский #ленинский #ледифитнес #октябрьский
        </p>
      </div>
    ),
    imageMobile: '/assets/hero/slide2-mobile-new.jpg',
    imageDesktop: '/assets/hero/slide2-desktop.png'
  },
  {
    id: 'full-harmony',
    title: "Оформление, гибкий график и фитнес в подарок🤗🌸",
    description: (
      <div className="space-y-4">
        <p>Приглашаем на работу администратора! Любишь общаться с людьми и держать все под контролем? Тогда должность администратора в одном из наших клубов это про тебя🤝</p>
        
        <p>Сеть Фитнес Мастер и Леди Фитнес в Мурманске - это три спортивных клуба: Фитнес Мастер в Первомайском и Ленинском районах и женский спортивный клуб Леди Фитнес в Октябрьском. Первый наш клуб открылся в 1991 году!</p>

        <p>
          Что мы предлагаем на должности администратора:<br />
          - Сменный график по 7 часов<br />
          - Оплата за смену - 2800 ₽<br />
          - Выплаты два раза в месяц<br />
          - Обучение и стажировка<br />
          - Оформление по трудовому кодексу<br />
          - Бесплатные занятия в клубе
        </p>

        <p>
          Адреса клубов:<br />
          пр. Кольский 178, 4 этаж<br />
          ул. Хлобыстова 41А, 2 этаж<br />
          ул. Воровского 15A , 4 этаж
        </p>

        <p>Если вы заинтересованы в работе, хотите пройти собеседование или задать вопросы, оставьте отклик, отправив форму ниже👌</p>

        <p>
          Директор по персоналу<br />
          Галина Демьянченко<br />
          +7 (921) 709-74-46
        </p>
      </div>
    ),
    imageMobile: '/assets/hero/slide3-mobile.jpg',
    imageDesktop: '/assets/hero/slide3-desktop.jpg'
  }
];

const VacancyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    clubs: [] as string[],
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const toggleClub = (club: string) => {
    setFormData(prev => ({
      ...prev,
      clubs: prev.clubs.includes(club) 
        ? prev.clubs.filter(c => c !== club)
        : [...prev.clubs, club]
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black text-white p-12 rounded-[2rem] text-center space-y-4"
      >
        <h3 className="text-2xl font-black uppercase tracking-tighter">Спасибо за отклик!</h3>
        <p className="opacity-60">Мы свяжемся с вами в ближайшее время.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Имя</label>
        <input 
          type="text" 
          required
          placeholder="Ваше имя"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          className="w-full px-6 py-4 rounded-full border border-black/10 focus:border-black outline-none transition-all text-lg font-medium bg-gray-50/50"
        />
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">В каком клубе интересует вакансия</label>
        <div className="space-y-3">
          {[
            "Фитнес Мастер (Первомайский р-н)",
            "Фитнес Мастер (Ленинский р-н)",
            "Леди Фитнес (Октябрьский р-н)"
          ].map((club) => (
            <label key={club} className="flex items-center gap-4 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  className="peer sr-only"
                  checked={formData.clubs.includes(club)}
                  onChange={() => toggleClub(club)}
                />
                <div className="w-6 h-6 border-2 border-black/10 rounded-lg peer-checked:bg-black peer-checked:border-black transition-all" />
                <Check size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm font-medium group-hover:opacity-60 transition-opacity">{club}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Телефон</label>
        <input 
          type="tel" 
          required
          placeholder="+7 (___) ___-__-__"
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
          className="w-full px-6 py-4 rounded-full border border-black/10 focus:border-black outline-none transition-all text-lg font-medium bg-gray-50/50"
        />
      </div>

      <div className="space-y-6 pt-4">
        <button 
          type="submit"
          className="w-full bg-black text-white py-6 rounded-full font-black uppercase tracking-widest hover:scale-[0.98] active:scale-95 transition-all"
        >
          Отправить
        </button>
        <p className="text-[9px] text-center text-black/40 leading-relaxed uppercase tracking-widest px-8">
          Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с <a href="#" className="underline underline-offset-2">Политикой конфиденциальности</a>.
        </p>
      </div>
    </form>
  );
};

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
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-100"
          >
            <img 
              src={promo.imageDesktop} 
              alt={promo.id} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
              {promo.title}
            </h1>
            <div className="text-lg md:text-xl font-medium text-black/60 leading-relaxed">
              {promo.description}
            </div>

            {promo.id === 'full-harmony' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <VacancyForm />
              </motion.div>
            )}
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
  const navigate = useNavigate();

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

  const handleInteraction = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const threshold = width * 0.15;

    if (x < threshold) {
      // Left side (15%) - previous slide
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setProgress(0);
    } else if (x > width - threshold) {
      // Right side (15%) - next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    } else {
      // Middle (70%) - navigate to promo
      navigate(`/promo/${slides[currentSlide].id}`);
    }
  };

  return (
    <section className="px-4 md:px-6 py-4 md:py-6 bg-white">
      <div 
        onClick={handleInteraction}
        className="relative aspect-[4/5] md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden flex items-center w-full cursor-pointer group bg-gray-100"
      >
        {/* Background Images */}
        {slides.map((slide, index) => (
          <motion.div 
            key={`bg-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Mobile Image */}
            <img 
              src={slide.imageMobile} 
              alt="" 
              className="w-full h-full object-cover md:hidden transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Desktop Image */}
            <img 
              src={slide.imageDesktop} 
              alt="" 
              className="hidden md:block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}

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
      </div>
    </section>
  );
};

const DistrictBanner = () => (
  <section className="px-6 pt-8 md:pt-12 pb-12 bg-white text-center">
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
  id?: string;
  name: string;
  phone: string;
  address: string;
  logo: string;
  logoClassName?: string;
  galleryImages: string[];
  pricingData: any[];
  trainingPacks: any[];
  trainers: any[];
  schedules: any;
  classDescriptions: any[];
  infrastructure: string[];
  showName?: boolean;
}

const ClubSection = ({ 
  id,
  name, 
  phone, 
  address, 
  logo,
  logoClassName,
  galleryImages, 
  pricingData, 
  trainingPacks, 
  trainers, 
  schedules, 
  classDescriptions, 
  infrastructure,
  showName = true
}: ClubSectionProps) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [activeTrainerTab, setActiveTrainerTab] = useState<'group' | 'gym'>('group');
  const [activeScheduleTab, setActiveScheduleTab] = useState<'group' | 'gym'>('group');
  const [activeClassTypeTab, setActiveClassTypeTab] = useState<'active' | 'soft' | 'dance' | 'kinesis'>('active');
  const [selectedScheduleImage, setSelectedScheduleImage] = useState<string | null>(null);

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
        <div className="pb-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 no-scrollbar mb-4">
            {pricingData.map((item, i) => (
              <div key={i} className="w-[70vw] min-w-[240px] md:w-auto md:min-w-0 flex-shrink-0 snap-center relative overflow-hidden rounded-2xl p-6 border border-black/5 bg-gradient-to-br from-violet-50/80 via-white to-fuchsia-50/80 hover:shadow-md hover:border-black/10 transition-all">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-fuchsia-500/10 to-violet-500/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
                
                <div className="relative z-10 flex flex-col justify-between gap-6 h-full">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Срок действия</div>
                    <div className="text-2xl font-black tracking-tighter uppercase">{item.period}</div>
                  </div>

                  <div className="flex gap-4 sm:gap-8">
                    <div>
                      <div className="text-[10px] font-bold uppercase mb-1 text-black/40">Безлимит</div>
                      <div className="text-xl font-bold tracking-tight whitespace-nowrap">{item.unlimited}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase mb-1 text-black/40">Дневной <span className="lowercase font-medium">(9:00 - 16:00)</span></div>
                      <div className="text-xl font-bold tracking-tight whitespace-nowrap">{item.day}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 no-scrollbar">
            <div className="w-[70vw] min-w-[240px] md:w-auto md:min-w-0 flex-shrink-0 snap-center relative overflow-hidden rounded-2xl p-6 border border-black/5 bg-gradient-to-br from-cyan-50/80 via-white to-blue-50/80 hover:shadow-md hover:border-black/10 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 flex flex-col justify-between gap-6 h-full">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Визит</div>
                  <div className="text-2xl font-black tracking-tighter uppercase">Разовое посещение</div>
                </div>

                <div className="flex gap-8">
                  <div>
                    <div className="text-[10px] font-bold uppercase mb-1 text-black/40">Стоимость</div>
                    <div className="text-xl font-bold tracking-tight">750 ₽</div>
                  </div>
                </div>
              </div>
            </div>

            {trainingPacks.map((item, i) => (
              <div key={i} className="w-[70vw] min-w-[240px] md:w-auto md:min-w-0 flex-shrink-0 snap-center relative overflow-hidden rounded-2xl p-6 border border-black/5 bg-gradient-to-br from-cyan-50/80 via-white to-blue-50/80 hover:shadow-md hover:border-black/10 transition-all">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
                
                <div className="relative z-10 flex flex-col justify-between gap-6 h-full">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Пакет</div>
                    <div className="text-2xl font-black tracking-tighter uppercase">{item.count}</div>
                  </div>

                  <div className="flex gap-8">
                    <div>
                      <div className="text-[10px] font-bold uppercase mb-1 text-black/40">Стоимость</div>
                      <div className="text-xl font-bold tracking-tight">{item.price}</div>
                    </div>
                  </div>
                </div>
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
          {/* Hidden Preload Div */}
          <div className="hidden">
            {schedules.group.map((s: any) => <img key={s.image} src={s.image} alt="" />)}
            {schedules.gym.map((s: any) => <img key={s.image} src={s.image} alt="" />)}
            {trainers.map((t: any) => <img key={t.image} src={t.image} alt="" />)}
          </div>
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
                onClick={() => setSelectedScheduleImage(item.image)}
              >
                <div className="aspect-[1.414/1] overflow-hidden rounded-2xl bg-gray-100 border border-black/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {activeScheduleTab === 'group' && (
            <div className="space-y-4 pt-1 -mt-[0.6rem]">
              <div className="flex gap-4 border-b border-black/5 overflow-x-auto no-scrollbar">
                {[
                  { id: 'active', label: 'Активные' },
                  { id: 'soft', label: 'Мягкие' },
                  { id: 'dance', label: 'Танцы' },
                  { id: 'kinesis', label: 'Кинезис' }
                ].map(tab => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveClassTypeTab(tab.id as any)}
                    className={`pb-4 text-[10px] font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${activeClassTypeTab === tab.id ? 'text-black' : 'text-black/40'}`}
                  >
                    {tab.label}
                    {activeClassTypeTab === tab.id && (
                      <motion.div layoutId={`activeClassTypeTab-${name}`} className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 no-scrollbar">
                {classDescriptions.filter(cls => cls.type === activeClassTypeTab).map((cls, i) => (
                  <div 
                    key={i} 
                    className={`w-[60vw] min-w-[200px] md:w-56 flex-shrink-0 snap-center aspect-square flex flex-col p-6 rounded-2xl border border-black/5 ${
                      cls.type === 'active' 
                        ? 'bg-gradient-to-br from-[#f7fee7] to-[#ecfccb]' 
                        : cls.type === 'dance'
                        ? 'bg-gradient-to-br from-fuchsia-50 to-pink-100'
                        : cls.type === 'kinesis'
                        ? 'bg-gradient-to-br from-yellow-50 to-amber-100'
                        : 'bg-gradient-to-br from-[#eff6ff] to-[#dbeafe]'
                    }`}
                  >
                    <h5 className="text-sm font-black uppercase tracking-tight flex items-center gap-2 mb-3">
                      {cls.type === 'active' ? (
                        <Zap size={16} className="text-brand-black" />
                      ) : cls.type === 'dance' ? (
                        <Music size={16} className="text-brand-black" />
                      ) : cls.type === 'kinesis' ? (
                        <Activity size={16} className="text-brand-black" />
                      ) : (
                        <Circle size={16} className="text-brand-black" />
                      )}
                      {cls.title}
                    </h5>
                    <p className="text-xs text-black/60 leading-tight font-medium">{cls.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeScheduleTab === 'gym' && (
            <div className="space-y-4 pt-1 -mt-[0.6rem]">
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                на персональные тренировки обязательна предварительная запись по телефону или на рецепции клуба
              </div>
            </div>
          )}
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
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-base font-bold uppercase tracking-tight leading-tight mb-1">
                  {trainer.name.split(' ').map((part, idx) => (
                    <span key={idx} className="block">{part}</span>
                  ))}
                </h4>
                <p className="text-[9px] font-bold uppercase tracking-widest text-black/40">{trainer.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id={id} className="px-4 md:px-6 pt-6 pb-12 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <img src={logo} alt={name} className={logoClassName || "h-12 w-auto object-contain"} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {showName && <h3 className="text-2xl md:text-4xl font-black tracking-tighter leading-none uppercase">{name}</h3>}
          <div className="space-y-1">
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="block text-xl font-medium hover:underline underline-offset-4">{phone}</a>
            <p className="text-sm text-black/60 uppercase tracking-widest font-bold">{address}</p>
          </div>
        </motion.div>
      </div>
      
      <div className="relative flex overflow-x-hidden mb-6 -mx-4 md:-mx-6">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: galleryImages.length * 3.33, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap"
        >
          {[...galleryImages, ...galleryImages].map((src, idx) => (
            <div key={idx} className="w-[300px] md:w-[500px] aspect-[16/9] flex-shrink-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] mx-2">
              <img 
                src={src} 
                alt={`Gallery image ${idx}`} 
                className="w-full h-full object-cover transition-all duration-700"
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
              onClick={() => setOpenIndices(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index])}
              className="w-full py-3 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
            >
              <span className="text-base font-bold uppercase tracking-tight">{item.title}</span>
              <motion.div
                animate={{ rotate: openIndices.includes(index) ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Plus size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndices.includes(index) && (
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

      {/* Schedule Image Modal */}
      <AnimatePresence>
        {selectedScheduleImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" 
            onClick={() => setSelectedScheduleImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedScheduleImage(null)}
                className="absolute -top-12 right-0 md:top-4 md:-right-12 text-white hover:text-white/70 transition-colors z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedScheduleImage} 
                alt="Расписание" 
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              <button 
                onClick={async (e) => {
                  e.preventDefault();
                  if (!selectedScheduleImage) return;
                  try {
                    const response = await fetch(selectedScheduleImage);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `schedule-${new Date().getTime()}.jpg`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  } catch (error) {
                    console.error('Download failed:', error);
                    // Fallback to opening in new tab if fetch fails
                    window.open(selectedScheduleImage, '_blank');
                  }
                }}
                className="mt-6 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Download size={16} />
                Скачать расписание
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProgramCard = ({ title, description, image, linkText }: { title: string, description: string, image: string, linkText: string }) => (
  <div className="group cursor-pointer">
    <div className="aspect-[4/5] overflow-hidden mb-4 bg-gray-100">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
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
  const [openIndices, setOpenIndices] = useState<number[]>([]);

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
              isOpen={openIndices.includes(index)}
              onClick={() => setOpenIndices(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index])}
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
    <section className="pt-12 pb-12 overflow-hidden bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">О НАС</h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto opacity-80 uppercase tracking-wider"
          style={{ fontVariant: 'small-caps' }}
        >
          Наша сеть в Мурманске — это три спортивных клуба: 
          в Первомайском и Ленинском районах и женский спортивный клуб 
          Леди Фитнес. Первый наш клуб открылся в 1991 году.
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden mb-8">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: images.length * 3.33, 
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
                className="w-full h-full object-cover transition-all duration-500"
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
  <section className="w-full h-[450px] bg-gray-100 relative transition-all duration-700 overflow-hidden">
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
        Сеть спортивных клубов в Мурманске<br/><span className="italic">с 1991</span>
      </div>
    </div>
  </footer>
);

const FloatingPhoneButton = () => (
  <motion.a
    href="tel:+78152707023"
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
      { name: "Надежда Палиенко", role: "Инструктор групповых программ", category: 'group', image: "https://picsum.photos/seed/fit_trainer_1/400/500" },
      { name: "Арина Кузнецова", role: "Инструктор групповых программ", category: 'group', image: "https://picsum.photos/seed/fit_trainer_2/400/500" },
      { name: "Елена Шумилова", role: "Инструктор групповых программ", category: 'group', image: "https://picsum.photos/seed/fit_trainer_3/400/500" },
      { name: "Софья Калинина", role: "Инструктор групповых программ", category: 'group', image: "https://picsum.photos/seed/fit_trainer_4/400/500" },
      { name: "Клавдия Прокофьева", role: "Инструктор групповых программ", category: 'group', image: "https://picsum.photos/seed/fit_trainer_5/400/500" },
      { name: "Александр Бердников", role: "Персональный тренер", category: 'gym', image: "https://picsum.photos/seed/fit_trainer_6/400/500" },
      { name: "Николай Марук", role: "Персональный тренер", category: 'gym', image: "https://picsum.photos/seed/fit_trainer_7/400/500" },
      { name: "Александр Кублицкий", role: "Персональный тренер", category: 'gym', image: "https://picsum.photos/seed/fit_trainer_8/400/500" },
      { name: "Роза Соловьева", role: "Персональный тренер", category: 'gym', image: "https://picsum.photos/seed/fit_trainer_9/400/500" }
    ],
    schedules: {
      group: [
        { title: "Зал 1 - ПН-СР-ПТ", image: "https://picsum.photos/seed/fit_sched_1/800/1200" },
        { title: "Зал 1 - ВТ-ЧТ-СБ", image: "https://picsum.photos/seed/fit_sched_2/800/1200" },
        { title: "Зал 2 - Основное", image: "https://picsum.photos/seed/fit_sched_3/800/1200" },
        { title: "Йога и Пилатес", image: "https://picsum.photos/seed/fit_sched_4/800/1200" }
      ],
      gym: [
        { title: "Кардио зона", image: "https://picsum.photos/seed/fit_sched_5/800/1200" },
        { title: "Свободные веса", image: "https://picsum.photos/seed/fit_sched_6/800/1200" },
        { title: "Функциональный тренинг", image: "https://picsum.photos/seed/fit_sched_7/800/1200" },
        { title: "Зона растяжки", image: "https://picsum.photos/seed/fit_sched_8/800/1200" }
      ]
    },
    classDescriptions: [
      { title: "Super Sculpt", type: "active", description: "Короткая разминка и силовая работа над всеми группами мышц" },
      { title: "New Power", type: "active", description: "Глубокая проработка всех мышечных групп с использованием степ-платформы и различного оборудования" },
      { title: "Round Power", type: "active", description: "Непрерывное выполнение ряда упражнений на все тело с короткими периодами отдыха" },
      { title: "Step", type: "active", description: "Энергичная кардиотренировка с использованием степ-платформы" },
      { title: "Шейпинг", type: "active", description: "Классическая аэробная система упражнений, направленная на коррекцию фигур" },
      { title: "Body Pump", type: "active", description: "Взрывная тренировка со штангой" },
      { title: "Fitball", type: "active", description: "Занятие c использованием большого гимнастического мяча" },
      { title: "Stretching", type: "soft", description: "Комплекс упражнений на растяжку" },
      { title: "Здоровая спина", type: "soft", description: "Коррекция мышц спины и улучшение осанки" },
      { title: "Stretching Roll", type: "soft", description: "Растяжка c использованием фитнес-ролика" },
      { title: "Здоровая спина + МФР", type: "soft", description: "Спина в тонусе + упражнения с массажным роллером" },
      { title: "Fitness Yoga", type: "soft", description: "Доступная йога для любого возраста и уровня подготовки" },
      { title: "Soft Stretch", type: "soft", description: "Вечерний ритуал гибкости за 30 минут" },
      { title: "Pilates", type: "soft", description: "Баланс внутри и снаружи по системе Пилатес" },
      { title: "Zumba", type: "dance", description: "Сертифицированный класс - танцевальные занятия, которые заставляют сжигать калории с улыбкой" },
      { title: "Belly Dance", type: "dance", description: "Танцевальные занятия на котором ваше тело заговорит на языке Востока" },
      { title: "Кинезис", type: "kinesis", description: "Индивидуальный комплекс упражнений на специализированном оборудовании - оздоровление через движение" }
    ],
    infrastructure: ["Два зала групповых программ", "Тренажерный зал", "Душевые", "Студия Кинезис", "Кабинет диагностики"]
  };

  const pervomayskyTrainers = [
    { name: "Надежда Палиенко", role: "Инструктор групповых программ", category: 'group', image: "/assets/trainers/_rzYpd-Nxy0.jpg" },
    { name: "Арина Кузнецова", role: "Инструктор групповых программ", category: 'group', image: "/assets/trainers/nRHmXaoJnV0.jpg" },
    { name: "Елена Шумилова", role: "Инструктор групповых программ", category: 'group', image: "/assets/trainers/Xu-5KpoCa0s.jpg" },
    { name: "Софья Калинина", role: "Инструктор групповых программ", category: 'group', image: "/assets/trainers/hxAb_zzTgus.jpg" },
    { name: "Клавдия Прокофьева", role: "Инструктор групповых программ", category: 'group', image: "/assets/trainers/VC4fxXQxSbE.jpg" },
    { name: "Александр Бердников", role: "Персональный тренер", category: 'gym', image: "/assets/trainers/N0RtdYI2azM.jpg" },
    { name: "Николай Марук", role: "Персональный тренер", category: 'gym', image: "/assets/trainers/vmCpSJBADGk.jpg" },
    { name: "Александр Кублицкий", role: "Персональный тренер", category: 'gym', image: "/assets/trainers/KhT3u63ZIRY.jpg" },
    { name: "Роза Соловьева", role: "Персональный тренер", category: 'gym', image: "/assets/trainers/tcyPQXqDdqc.jpg" }
  ];

  const pervomayskySchedules = {
    group: [
      { title: "Расписание 1", image: "/assets/schedules/ckgwoZ0er6Q.jpg" },
      { title: "Расписание 2", image: "/assets/schedules/NUomYewTydA.jpg" }
    ],
    gym: [
      { title: "Тренажерный зал", image: "/assets/schedules/KHfvoz2GRAQ.jpg" }
    ]
  };

  const pervomayskyGallery = [
    "/assets/gallery/pervomaysky/002.jpg",
    "/assets/gallery/pervomaysky/005.jpg",
    "/assets/gallery/pervomaysky/043.jpg",
    "/assets/gallery/pervomaysky/037.jpg",
    "/assets/gallery/pervomaysky/039.jpg",
    "/assets/gallery/pervomaysky/022.jpg",
    "/assets/gallery/pervomaysky/024.jpg",
    "/assets/gallery/pervomaysky/019.jpg",
    "/assets/gallery/pervomaysky/025.jpg",
    "/assets/gallery/pervomaysky/029.jpg",
    "/assets/gallery/pervomaysky/028.jpg",
    "/assets/gallery/pervomaysky/af0F-WUgO2wj6TNx5P-Q.jpg",
    "/assets/gallery/pervomaysky/049.jpg",
    "/assets/gallery/pervomaysky/ryJ_Mf2stUeYT8MwTlwz.jpg",
    "/assets/gallery/pervomaysky/052.jpg",
    "/assets/gallery/pervomaysky/KapJ4UVOqoxo5xT1icGD.jpg",
    "/assets/gallery/pervomaysky/062.jpg",
    "/assets/gallery/pervomaysky/064.jpg"
  ];

  const leninskyGallery = [
    "/assets/gallery/leninsky/UhS9Shdo62J7HVgy84ot.jpg",
    "/assets/gallery/leninsky/fx9pPcG2v-aZGCMPbILt.jpg",
    "/assets/gallery/leninsky/Ov7oC-cV-_t1WktXuQi1.jpg",
    "/assets/gallery/leninsky/GYbevs3SQT71rtJZxD4b.jpg",
    "/assets/gallery/leninsky/nJbk5pqcfAiXmW8kBqHm.jpg",
    "/assets/gallery/leninsky/KLGBVFeHWfdk22_i7366.jpg",
    "/assets/gallery/leninsky/B2e1pdKAhCfXAogrQ7iD.jpg",
    "/assets/gallery/leninsky/FQpZPvD36wb9Bv4hxRCU.jpg",
    "/assets/gallery/leninsky/rJ9t35HFr7DuWT1Fivh1.jpg",
    "/assets/gallery/leninsky/4kxFSv6VclXrwvUrlU1z.jpg",
    "/assets/gallery/leninsky/BwxJZGmMehqLhy6aCOKm.jpg",
    "/assets/gallery/leninsky/tUz3o2HQ0EKRenIiRb5g.jpg",
    "/assets/gallery/leninsky/DJgkSQENRCzwUs_diXfR.jpg",
    "/assets/gallery/leninsky/oa-ce6pkhjd4zk9-tzNC.jpg",
    "/assets/gallery/leninsky/y5G85PYx5A4Ajtlj1Ox1.jpg"
  ];

  const ladyGallery = [
    "/assets/gallery/lady/ntitYAlJw7Y5MPCxAPyY.jpg",
    "/assets/gallery/lady/EAzCEA0aI2iGais9pMNl.jpg",
    "/assets/gallery/lady/WvXPxRQj3xOmtQ-iXn9b.jpg",
    "/assets/gallery/lady/UoTA9aLKtCv181T9RJgX.jpg",
    "/assets/gallery/lady/pNmhO8fAV36kIkb2SZXG.jpg",
    "/assets/gallery/lady/UHiF44RxQ2YxIT5XHdS1.jpg",
    "/assets/gallery/lady/ydEUl94WzxY3E9eEkz8j.jpg",
    "/assets/gallery/lady/l6cenHUxUgda3979IxLP.jpg",
    "/assets/gallery/lady/JklfZoQniA6QVaFYkDSb.jpg",
    "/assets/gallery/lady/TS9ruhNRitbGXTVYDj32.jpg",
    "/assets/gallery/lady/coGbDL4Ib8DkEi9Bzgl9.jpg",
    "/assets/gallery/lady/BmeSc0QI6svcvXcjvVvk.jpg"
  ];

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
                id="club-pervomaysky"
                name="Первомайский"
                phone="+7 (8152) 53-97-25"
                address="пр. Кольский 178, 4 этаж"
                logo="/master.png"
                {...clubData}
                galleryImages={pervomayskyGallery}
                trainers={pervomayskyTrainers}
                schedules={pervomayskySchedules}
              />

              <ClubSection 
                id="club-leninsky"
                name="Ленинский"
                phone="+7 (8152) 41-25-88"
                address="ул. Хлобыстова 41А"
                logo="/master.png"
                galleryImages={leninskyGallery}
                {...clubData}
              />

              <ClubSection 
                id="club-lady"
                name="Леди Фитнес"
                phone="+7 (8152) 45-78-57"
                address="ул. Воровского 15A"
                logo="/lady.png"
                logoClassName="h-16 w-auto object-contain"
                galleryImages={ladyGallery}
                {...clubData}
                showName={false}
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
