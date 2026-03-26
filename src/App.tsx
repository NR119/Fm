import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowRight, Phone, X, Zap, Circle, Users, Dumbbell, Receipt, Percent, ArrowLeft, Check, Music, Activity, MapPin, Clock, ChevronRight } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { IMAGES } from './constants';

// Navbar Component
const Navbar = ({ onMenuOpen }: { onMenuOpen: () => void }) => (
  <nav className="flex justify-between items-center px-6 py-4 bg-brand-white sticky top-0 z-40 border-b border-black/5">
    <div className="flex items-center">
      <img src="/logo.png" alt="Фитнес Мастер" className="h-6 w-auto object-contain" />
    </div>
    <button 
      onClick={onMenuOpen}
      className="group cursor-pointer p-2 hover:opacity-70 transition-opacity flex flex-col gap-1.5 items-end"
    >
      <div className="w-7 h-0.5 bg-brand-black rounded-full"></div>
      <div className="w-5 h-0.5 bg-brand-black rounded-full"></div>
    </button>
  </nav>
);

// Full Menu Overlay
const FullMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const clubs = [
    { name: "Фитнес Мастер Первомайский", phone: "+7 (8152) 53-97-25", address: "пр. Кольский 178, 4 этаж", id: "club-pervomaysky" },
    { name: "Фитнес Мастер Ленинский", phone: "+7 (8152) 41-25-88", address: "ул. Хлобыстова 41А, 2 этаж", id: "club-leninsky" },
    { name: "Леди Фитнес", phone: "+7 (8152) 45-78-57", address: "ул. Воровского 15A, 4 этаж", id: "club-lady" }
  ];

  const scrollToClub = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-brand-white flex flex-col"
        >
          <div className="flex justify-end items-center px-6 py-4">
            <button onClick={onClose} className="p-2 hover:opacity-70 transition-opacity">
              <X size={28} strokeWidth={1.5} className="text-brand-black" />
            </button>
          </div>
          
          <div className="flex-grow flex flex-col justify-center px-6 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {clubs.map((club, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                  className="space-y-4"
                >
                  <h3 
                    className="text-xl md:text-2xl font-black tracking-tight leading-none cursor-pointer hover:text-brand-accent transition-colors"
                    onClick={() => scrollToClub(club.id)}
                  >
                    {club.name}
                  </h3>
                  <div className="space-y-1">
                    <a href={`tel:${club.phone.replace(/\D/g, '')}`} className="block text-lg font-medium hover:text-brand-accent transition-colors">{club.phone}</a>
                    <p className="text-sm text-brand-muted">{club.address}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-20 flex flex-col items-start text-xs font-semibold uppercase tracking-widest text-brand-muted"
            >
              <div className="flex flex-col gap-4">
                <a href="#" onClick={onClose} className="hover:text-brand-black transition-colors">Вакансии</a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-colors">Группа ВК</a>
              </div>
              <div className="text-[10px] uppercase tracking-widest mt-6">Сеть спортивных клубов в Мурманске <span className="italic">с 1991</span></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Hero Bento Section
const HeroBento = () => {
  const navigate = useNavigate();
  
  const clubs = [
    { name: "Первомайский", address: "пр. Кольский 178", phone: "+7 (8152) 53-97-25", id: "club-pervomaysky" },
    { name: "Ленинский", address: "ул. Хлобыстова 41А", phone: "+7 (8152) 41-25-88", id: "club-leninsky" },
    { name: "Леди Фитнес", address: "ул. Воровского 15A", phone: "+7 (8152) 45-78-57", id: "club-lady" }
  ];

  const scrollToClub = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          
          {/* Main Hero Card - spans 2 cols on mobile, 3 on desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2 md:col-span-2 row-span-2 relative rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => navigate('/promo/elite-fitness')}
          >
            <img 
              src={IMAGES.HERO_SLIDES[0].desktop}
              alt="Promo"
              className="w-full h-full object-cover min-h-[400px] md:min-h-[500px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Акция</div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-3">
                Снег тает - мотивация растет
              </h2>
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <span>Подробнее</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 bg-brand-black text-white rounded-3xl p-5 md:p-6 flex flex-col justify-between min-h-[180px]"
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">С нами</div>
            <div>
              <div className="text-4xl md:text-5xl font-black tracking-tight">35</div>
              <div className="text-sm text-white/60 font-medium">лет опыта</div>
            </div>
          </motion.div>

          {/* Clubs Count Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="col-span-1 bg-brand-accent text-white rounded-3xl p-5 md:p-6 flex flex-col justify-between min-h-[180px]"
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Клубов</div>
            <div>
              <div className="text-4xl md:text-5xl font-black tracking-tight">3</div>
              <div className="text-sm text-white/80 font-medium">в Мурманске</div>
            </div>
          </motion.div>

          {/* Quick Access Cards for each club */}
          {clubs.map((club, index) => (
            <motion.div 
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              onClick={() => scrollToClub(club.id)}
              className={`col-span-1 ${index === 2 ? 'md:col-span-2' : ''} bg-brand-gray hover:bg-black hover:text-white rounded-3xl p-5 md:p-6 cursor-pointer transition-all duration-300 group flex flex-col justify-between min-h-[140px]`}
            >
              <div className="flex justify-between items-start">
                <MapPin size={18} className="text-brand-muted group-hover:text-white/60 transition-colors" />
                <ChevronRight size={18} className="text-brand-muted group-hover:text-white/60 transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              <div>
                <div className="font-bold text-sm md:text-base tracking-tight">{club.name}</div>
                <div className="text-xs text-brand-muted group-hover:text-white/60 transition-colors mt-1">{club.address}</div>
              </div>
            </motion.div>
          ))}

          {/* Promo Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="col-span-2 md:col-span-2 relative rounded-3xl overflow-hidden cursor-pointer group min-h-[200px]"
            onClick={() => navigate('/promo/catch-moment')}
          >
            <img 
              src="/assets/promos/promo2_desk.jpg"
              alt="Promo 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Специальное предложение</div>
              <h3 className="text-lg md:text-xl font-black text-white tracking-tight">Лови момент</h3>
            </div>
          </motion.div>

          {/* Working Hours Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 bg-white border border-black/5 rounded-3xl p-5 md:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-gray rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-brand-muted" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2">Режим работы</div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                  <div className="text-sm"><span className="font-bold">ПН-ПТ</span> <span className="text-brand-muted">9:00-22:00</span></div>
                  <div className="text-sm"><span className="font-bold">СБ-ВС</span> <span className="text-brand-muted">9:00-18:00</span></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Features Bento Section
const FeaturesBento = () => {
  const features = [
    { icon: <Users size={24} />, title: "Групповые программы", desc: "Активный и мягкий фитнес", color: "bg-emerald-50" },
    { icon: <Dumbbell size={24} />, title: "Тренажерные залы", desc: "Силовое и кардио оборудование", color: "bg-blue-50" },
    { icon: <Receipt size={24} />, title: "Налоговый вычет", desc: "Возврат 13% от затрат", color: "bg-amber-50" },
    { icon: <Percent size={24} />, title: "Скидка на продление", desc: "До 10% постоянным клиентам", color: "bg-rose-50" }
  ];

  return (
    <section className="px-4 md:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-3"
          >
            Почему мы?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-muted text-sm md:text-base max-w-xl mx-auto"
          >
            Три клуба в разных районах города. Первый открылся в 1991 году.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${feature.color} rounded-3xl p-5 md:p-6 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="text-brand-black/60 mb-4">{feature.icon}</div>
              <h3 className="font-bold text-sm md:text-base tracking-tight mb-1">{feature.title}</h3>
              <p className="text-xs text-brand-muted">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Club Card Component
interface ClubCardProps {
  id: string;
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

const ClubCard = ({ 
  id, name, phone, address, logo, logoClassName, galleryImages, 
  pricingData, trainingPacks, trainers, schedules, classDescriptions, 
  infrastructure, showName = true 
}: ClubCardProps) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeTrainerTab, setActiveTrainerTab] = useState<'group' | 'gym'>('group');
  const [activeScheduleTab, setActiveScheduleTab] = useState<'group' | 'gym'>('group');
  const [activeClassTypeTab, setActiveClassTypeTab] = useState<'active' | 'soft' | 'dance' | 'kinesis'>('active');
  const [selectedScheduleImage, setSelectedScheduleImage] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id={id} className="px-4 md:px-6 py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <img src={logo} alt={name} className={logoClassName || "h-10 w-auto object-contain mx-auto mb-4"} />
          {showName && <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">{name}</h3>}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-lg font-medium hover:text-brand-accent transition-colors">{phone}</a>
            <span className="text-sm text-brand-muted">{address}</span>
          </div>
        </motion.div>

        {/* Gallery Marquee */}
        <div className="relative overflow-hidden mb-6 -mx-4 md:-mx-6">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: galleryImages.length * 4, repeat: Infinity, ease: "linear" }}
            className="flex gap-3"
          >
            {[...galleryImages, ...galleryImages].map((src, idx) => (
              <div key={idx} className="w-[260px] md:w-[400px] aspect-[16/10] flex-shrink-0 overflow-hidden rounded-2xl">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bento Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          
          {/* About Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/5 rounded-3xl overflow-hidden"
          >
            <button 
              onClick={() => toggleSection('about')}
              className="w-full p-5 md:p-6 flex justify-between items-center text-left hover:bg-brand-gray/50 transition-colors"
            >
              <span className="font-bold tracking-tight">О клубе</span>
              <motion.div animate={{ rotate: openSection === 'about' ? 45 : 0 }}>
                <Plus size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'about' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3">Режим работы</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="font-medium">ПН-ПТ</span><span>9:00-22:00</span></div>
                        <div className="flex justify-between"><span className="font-medium">СБ-ВС</span><span>9:00-18:00</span></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3">Инфраструктура</div>
                      <ul className="space-y-1 text-sm">
                        {infrastructure.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-brand-accent rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-black text-white rounded-3xl overflow-hidden"
          >
            <button 
              onClick={() => toggleSection('pricing')}
              className="w-full p-5 md:p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-bold tracking-tight">Стоимость карт</span>
              <motion.div animate={{ rotate: openSection === 'pricing' ? 45 : 0 }}>
                <Plus size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'pricing' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {pricingData.map((item, i) => (
                        <div key={i} className="bg-white/10 rounded-xl p-3">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{item.period}</div>
                          <div className="text-lg font-bold">{item.unlimited}</div>
                          <div className="text-xs text-white/60">безлимит</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-white/40">Разовое посещение: 750 ₽</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Schedule Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-gray rounded-3xl overflow-hidden md:col-span-2"
          >
            <button 
              onClick={() => toggleSection('schedule')}
              className="w-full p-5 md:p-6 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
            >
              <span className="font-bold tracking-tight">Расписание тренировок</span>
              <motion.div animate={{ rotate: openSection === 'schedule' ? 45 : 0 }}>
                <Plus size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'schedule' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    {/* Tabs */}
                    <div className="flex gap-4 mb-4">
                      <button 
                        onClick={() => setActiveScheduleTab('group')}
                        className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeScheduleTab === 'group' ? 'border-brand-black text-brand-black' : 'border-transparent text-brand-muted'}`}
                      >
                        Групповые
                      </button>
                      <button 
                        onClick={() => setActiveScheduleTab('gym')}
                        className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeScheduleTab === 'gym' ? 'border-brand-black text-brand-black' : 'border-transparent text-brand-muted'}`}
                      >
                        Тренажерный зал
                      </button>
                    </div>
                    
                    {/* Schedule Images */}
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                      {schedules[activeScheduleTab].map((item: any, i: number) => (
                        <div 
                          key={i}
                          onClick={() => setSelectedScheduleImage(item.image)}
                          className="flex-shrink-0 w-48 aspect-[1.4/1] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        >
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>

                    {/* Class Types for Group */}
                    {activeScheduleTab === 'group' && (
                      <div className="mt-4">
                        <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                          {[
                            { id: 'active', label: 'Активные' },
                            { id: 'soft', label: 'Мягкие' },
                            { id: 'dance', label: 'Танцы' },
                            { id: 'kinesis', label: 'Кинезис' }
                          ].map(tab => (
                            <button 
                              key={tab.id}
                              onClick={() => setActiveClassTypeTab(tab.id as any)}
                              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeClassTypeTab === tab.id ? 'bg-brand-black text-white' : 'bg-white text-brand-muted'}`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-2 overflow-x-auto no-scrollbar">
                          {classDescriptions.filter(cls => cls.type === activeClassTypeTab).slice(0, 4).map((cls, i) => (
                            <div key={i} className="flex-shrink-0 w-36 bg-white rounded-xl p-3">
                              <div className="flex items-center gap-1.5 mb-1">
                                {cls.type === 'active' ? <Zap size={12} /> : cls.type === 'dance' ? <Music size={12} /> : cls.type === 'kinesis' ? <Activity size={12} /> : <Circle size={12} />}
                                <span className="text-xs font-bold">{cls.title}</span>
                              </div>
                              <p className="text-[10px] text-brand-muted leading-tight">{cls.description.slice(0, 60)}...</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Trainers Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-black/5 rounded-3xl overflow-hidden md:col-span-2"
          >
            <button 
              onClick={() => toggleSection('trainers')}
              className="w-full p-5 md:p-6 flex justify-between items-center text-left hover:bg-brand-gray/50 transition-colors"
            >
              <span className="font-bold tracking-tight">Тренеры</span>
              <motion.div animate={{ rotate: openSection === 'trainers' ? 45 : 0 }}>
                <Plus size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'trainers' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="flex gap-4 mb-4">
                      <button 
                        onClick={() => setActiveTrainerTab('group')}
                        className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeTrainerTab === 'group' ? 'border-brand-black text-brand-black' : 'border-transparent text-brand-muted'}`}
                      >
                        Групповые
                      </button>
                      <button 
                        onClick={() => setActiveTrainerTab('gym')}
                        className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeTrainerTab === 'gym' ? 'border-brand-black text-brand-black' : 'border-transparent text-brand-muted'}`}
                      >
                        Персональные
                      </button>
                    </div>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar">
                      {trainers.filter(t => t.category === activeTrainerTab).map((trainer, i) => (
                        <div key={i} className="flex-shrink-0 w-28">
                          <div className="aspect-[3/4] rounded-xl overflow-hidden mb-2 bg-brand-gray">
                            <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="text-xs font-bold leading-tight">{trainer.name}</div>
                          <div className="text-[10px] text-brand-muted">{trainer.role}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
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
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full" 
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedScheduleImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-white/70 transition-colors"
                >
                  <X size={24} />
                </button>
                <img src={selectedScheduleImage} alt="Schedule" className="w-full rounded-2xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const images = IMAGES.ABOUT_GALLERY;

  return (
    <section className="py-12 bg-brand-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">О нас</div>
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto text-white/80">
            Наша сеть в Мурманске - это три спортивных клуба в Первомайском, 
            Ленинском районах и женский клуб Леди Фитнес. Первый клуб открылся в 1991 году.
          </p>
        </motion.div>
      </div>

      {/* Gallery Marquee */}
      <div className="relative overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: images.length * 4, repeat: Infinity, ease: "linear" }}
          className="flex gap-3"
        >
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="w-[200px] md:w-[300px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-2xl">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Map Section
const MapSection = () => (
  <section className="w-full h-[400px] relative">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13854.444444444445!2d33.075!3d68.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KTQuNGC0L3QtdGBINCc0LDRgdGC0LXRgCDQnNGD0YDQvNCw0L3RgdC6!5e0!3m2!1sru!2sru!4v1710000000000!5m2!1sru!2sru" 
      className="absolute inset-0 w-full h-full border-0 grayscale"
      allowFullScreen
      loading="lazy"
      title="Map"
    />
    <div className="absolute top-6 left-6 bg-white p-5 shadow-xl rounded-2xl max-w-[240px] hidden md:block">
      <h3 className="font-black tracking-tight mb-3">Наши залы</h3>
      <ul className="text-sm space-y-1.5 text-brand-muted">
        <li>пр. Кольский 178</li>
        <li>ул. Хлобыстова 41А</li>
        <li>ул. Воровского 15A</li>
      </ul>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="px-4 md:px-6 py-8 border-t border-black/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-medium text-brand-muted">
        <a href="#" className="hover:text-brand-black transition-colors">Политика конфиденциальности</a>
        <a href="#" className="hover:text-brand-black transition-colors">Правила клуба</a>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-colors">VK</a>
      </div>
      <div className="text-xs text-brand-muted">
        Сеть спортивных клубов в Мурманске <span className="italic">с 1991</span>
      </div>
    </div>
  </footer>
);

// Floating Phone Button
const FloatingPhoneButton = () => (
  <motion.a
    href="tel:+78152707023"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg"
    aria-label="Call us"
  >
    <Phone size={22} />
  </motion.a>
);

// Promo Page
const PromoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const slides = [
    {
      id: 'elite-fitness',
      title: "Снег тает - мотивация растет",
      description: "Персональные тренировки у Алены Капустиной: блок из 8 тренировок за 4000 ₽ вместо 4800! Время: Вторник/четверг 10:00-12:00, Суббота 11:00-13:00.",
      image: IMAGES.HERO_SLIDES[0].desktop
    },
    {
      id: 'catch-moment',
      title: "Лови момент",
      description: "С 20 по 28 марта! Безлимитная карта на 3 месяца за 11500 ₽ вместо 13000 ₽. Возможна рассрочка двумя платежами.",
      image: "/assets/promos/promo2_desk.jpg"
    },
    {
      id: 'full-harmony',
      title: "Вакансия администратора",
      description: "Оформление, гибкий график и фитнес в подарок! Сменный график по 7 часов, оплата 2800 ₽ за смену.",
      image: "/assets/promos/promo3_desk.jpg"
    }
  ];

  const promo = slides.find(s => s.id === id);
  if (!promo) return <div className="min-h-screen flex items-center justify-center font-bold">Акция не найдена</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-brand-white">
      <div className="sticky top-0 z-50 bg-brand-white/80 backdrop-blur-md border-b border-black/5 px-4 md:px-6 py-4">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
          <ArrowLeft size={16} /> Назад
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="aspect-video rounded-3xl overflow-hidden mb-8">
          <img src={promo.image} alt={promo.title} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{promo.title}</h1>
          <p className="text-lg text-brand-muted leading-relaxed">{promo.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main App
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clubData = {
    pricingData: [
      { period: "1 мес", unlimited: "5400 ₽", day: "4500 ₽" },
      { period: "3 мес", unlimited: "13000 ₽", day: "10800 ₽" },
      { period: "6 мес", unlimited: "24000 ₽", day: "20300 ₽" }
    ],
    trainingPacks: [
      { count: "4 тренировки", price: "2400 ₽" },
      { count: "8 тренировок", price: "4100 ₽" }
    ],
    trainers: [
      { name: "Надежда Палиенко", role: "Групповые программы", category: 'group', image: "/assets/trainers/_rzYpd-Nxy0.jpg" },
      { name: "Арина Кузнецова", role: "Групповые программы", category: 'group', image: "/assets/trainers/nRHmXaoJnV0.jpg" },
      { name: "Елена Шумилова", role: "Групповые программы", category: 'group', image: "/assets/trainers/Xu-5KpoCa0s.jpg" },
      { name: "Софья Калинина", role: "Групповые программы", category: 'group', image: "/assets/trainers/hxAb_zzTgus.jpg" },
      { name: "Клавдия Прокофьева", role: "Групповые программы", category: 'group', image: "/assets/trainers/VC4fxXQxSbE.jpg" },
      { name: "Александр Бердников", role: "Персональный тренер", category: 'gym', image: "/assets/trainers/N0RtdYI2azM.jpg" },
      { name: "Николай Марук", role: "Персональный тренер", category: 'gym', image: "/assets/trainers/vmCpSJBADGk.jpg" },
      { name: "Александр Кублицкий", role: "Персональный тренер", category: 'gym', image: "/assets/trainers/KhT3u63ZIRY.jpg" },
      { name: "Роза Соловьева", role: "Персональный тренер", category: 'gym', image: "/assets/trainers/tcyPQXqDdqc.jpg" }
    ],
    schedules: {
      group: [
        { title: "Расписание 1", image: "/assets/schedules/ckgwoZ0er6Q.jpg" },
        { title: "Расписание 2", image: "/assets/schedules/NUomYewTydA.jpg" }
      ],
      gym: [
        { title: "Тренажерный зал", image: "/assets/schedules/KHfvoz2GRAQ.jpg" }
      ]
    },
    classDescriptions: [
      { title: "Super Sculpt", type: "active", description: "Короткая разминка и силовая работа над всеми группами мышц" },
      { title: "New Power", type: "active", description: "Глубокая проработка всех мышечных групп с использованием степ-платформы" },
      { title: "Round Power", type: "active", description: "Непрерывное выполнение упражнений на все тело с короткими периодами отдыха" },
      { title: "Step", type: "active", description: "Энергичная кардиотренировка с использованием степ-платформы" },
      { title: "Stretching", type: "soft", description: "Комплекс упражнений на растяжку и гибкость" },
      { title: "Здоровая спина", type: "soft", description: "Коррекция мышц спины и улучшение осанки" },
      { title: "Pilates", type: "soft", description: "Баланс внутри и снаружи по системе Пилатес" },
      { title: "Fitness Yoga", type: "soft", description: "Доступная йога для любого уровня подготовки" },
      { title: "Zumba", type: "dance", description: "Танцевальные занятия, которые сжигают калории с улыбкой" },
      { title: "Belly Dance", type: "dance", description: "Танец живота - ваше тело заговорит на языке Востока" },
      { title: "Кинезис", type: "kinesis", description: "Индивидуальный комплекс на специализированном оборудовании" }
    ],
    infrastructure: ["Два зала групповых программ", "Тренажерный зал", "Душевые", "Студия Кинезис", "Кабинет диагностики"]
  };

  const pervomayskyGallery = [
    "/assets/gallery/pervomaysky/002.jpg",
    "/assets/gallery/pervomaysky/005.jpg",
    "/assets/gallery/pervomaysky/043.jpg",
    "/assets/gallery/pervomaysky/037.jpg",
    "/assets/gallery/pervomaysky/039.jpg",
    "/assets/gallery/pervomaysky/022.jpg"
  ];

  const leninskyGallery = [
    "/assets/gallery/leninsky/UhS9Shdo62J7HVgy84ot.jpg",
    "/assets/gallery/leninsky/fx9pPcG2v-aZGCMPbILt.jpg",
    "/assets/gallery/leninsky/Ov7oC-cV-_t1WktXuQi1.jpg",
    "/assets/gallery/leninsky/GYbevs3SQT71rtJZxD4b.jpg"
  ];

  const ladyGallery = [
    "/assets/gallery/lady/ntitYAlJw7Y5MPCxAPyY.jpg",
    "/assets/gallery/lady/EAzCEA0aI2iGais9pMNl.jpg",
    "/assets/gallery/lady/WvXPxRQj3xOmtQ-iXn9b.jpg",
    "/assets/gallery/lady/UoTA9aLKtCv181T9RJgX.jpg"
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-white">
        <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
        <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <Routes>
          <Route path="/" element={
            <main className="flex-grow">
              <HeroBento />
              <FeaturesBento />
              
              <ClubCard 
                id="club-pervomaysky"
                name="Первомайский"
                phone="+7 (8152) 53-97-25"
                address="пр. Кольский 178, 4 этаж"
                logo="/master.png"
                galleryImages={pervomayskyGallery}
                {...clubData}
              />

              <ClubCard 
                id="club-leninsky"
                name="Ленинский"
                phone="+7 (8152) 41-25-88"
                address="ул. Хлобыстова 41А"
                logo="/master.png"
                galleryImages={leninskyGallery}
                {...clubData}
              />

              <ClubCard 
                id="club-lady"
                name="Леди Фитнес"
                phone="+7 (8152) 45-78-57"
                address="ул. Воровского 15A"
                logo="/lady.png"
                logoClassName="h-14 w-auto object-contain mx-auto mb-4"
                galleryImages={ladyGallery}
                showName={false}
                {...clubData}
              />

              <AboutSection />
              <MapSection />
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
