/**
 * Централизованное хранилище ссылок на изображения для удобной замены.
 * Вы можете заменить любую ссылку на свою (URL из интернета или путь к локальному файлу).
 */

export const IMAGES = {
  // Слайдер на главном экране (Hero)
  HERO_SLIDES: [
    {
      mobile: "/assets/promos/p1_mob.jpg",
      desktop: "/assets/promos/p1_desk.jpg"
    },
    {
      mobile: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      desktop: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      mobile: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
      desktop: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
    }
  ],

  // Галерея в блоке "Фитнес Мастер Первомайский" (сверху)
  CLUB_GALLERY: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
  ],

  // Галерея в разделе "О нас" (снизу)
  ABOUT_GALLERY: [
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
  ],

  // Тренеры
  TRAINERS: {
    ARINA: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=500&auto=format&fit=crop&crop=faces",
    SOFYA: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=500&auto=format&fit=crop&crop=faces",
    ELENA: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=500&auto=format&fit=crop&crop=faces",
    KLAVDIYA: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500&auto=format&fit=crop&crop=faces",
    NADEZHDA: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop&crop=faces",
    ALEXANDER_B: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500&auto=format&fit=crop&crop=faces",
    NIKOLAY: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop&crop=faces",
    ALEXANDER_K: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=500&auto=format&fit=crop&crop=faces",
    ROZA: "https://images.unsplash.com/photo-1518611012118-29617b0ccdfe?q=80&w=500&auto=format&fit=crop&crop=faces",
  },

  // Расписание (фоновые картинки зон)
  SCHEDULE_ZONES: {
    HALL_1_MON: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=800&auto=format&fit=crop",
    HALL_1_TUE: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop",
    HALL_2: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    YOGA: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    CARDIO: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    WEIGHTS: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    FUNCTIONAL: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    STRETCH: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop",
  },

  // Программы
  PROGRAMS: {
    STRENGTH: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    FLOW: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    ENDURANCE: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
  }
};
