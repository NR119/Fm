/**
 * Централизованное хранилище ссылок на изображения для удобной замены.
 * Вы можете заменить любую ссылку на свою (URL из интернета или путь к локальному файлу).
 */

export const IMAGES = {
  // Слайдер на главном экране (Hero)
  HERO_SLIDES: [
    {
      mobile: "/assets/promos/promo1_mob.jpg",
      desktop: "/assets/promos/promo1_desk.jpg"
    },
    {
      mobile: "/assets/promos/promo2_mob.jpg",
      desktop: "/assets/promos/promo2_desk.jpg"
    },
    {
      mobile: "/assets/promos/promo3_mob.jpg",
      desktop: "/assets/promos/promo3_desk.jpg"
    }
  ],

  // Галерея в блоке клубов
  CLUB_GALLERY: [
    "/assets/club/gallery-1.jpg",
    "/assets/club/gallery-2.jpg",
    "/assets/club/gallery-3.jpg",
    "/assets/club/gallery-4.jpg",
    "/assets/club/gallery-5.jpg",
    "/assets/club/gallery-6.jpg",
  ],

  // Галерея в разделе "О нас" (снизу)
  ABOUT_GALLERY: [
    "/assets/about/3qR-s7NEt4Q.jpg",
    "/assets/about/9zDAbaAasfw.jpg",
    "/assets/about/ChBbrzBEAYc.jpg",
    "/assets/about/E_X6-r4yA0w.jpg",
    "/assets/about/HDtjxTElwIQ.jpg.webp",
    "/assets/about/ROL5hwSfTzE.jpg",
    "/assets/about/Wmb9sX47xTU.jpg",
    "/assets/about/g8I6Gi-Hqwc.jpg.webp",
    "/assets/about/gzbaTQVW8ro.jpg",
    "/assets/about/m7huFWxu-AU.jpg.webp",
    "/assets/about/tfvjb3M0Rwg.jpg",
    "/assets/about/w8ijEYf4DJg.jpg",
    "/assets/about/wvFBBl6MrVk.jpg",
  ],

  // Тренеры
  TRAINERS: {
    ARINA: "/assets/trainers/arina.jpg",
    SOFYA: "/assets/trainers/sofya.jpg",
    ELENA: "/assets/trainers/elena.jpg",
    KLAVDIYA: "/assets/trainers/klavdiya.jpg",
    NADEZHDA: "/assets/trainers/nadezhda.jpg",
    ALEXANDER_B: "/assets/trainers/alexander_b.jpg",
    NIKOLAY: "/assets/trainers/nikolay.jpg",
    ALEXANDER_K: "/assets/trainers/alexander_k.jpg",
    ROZA: "/assets/trainers/roza.jpg",
  },

  // Расписание (фоновые картинки зон)
  SCHEDULE_ZONES: {
    HALL_1_MON: "/assets/schedule/hall-1-mon.jpg",
    HALL_1_TUE: "/assets/schedule/hall-1-tue.jpg",
    HALL_2: "/assets/schedule/hall-2.jpg",
    YOGA: "/assets/schedule/yoga.jpg",
    CARDIO: "/assets/schedule/cardio.jpg",
    WEIGHTS: "/assets/schedule/weights.jpg",
    FUNCTIONAL: "/assets/schedule/functional.jpg",
    STRETCH: "/assets/schedule/stretch.jpg",
  },

  // Программы
  PROGRAMS: {
    STRENGTH: "/assets/programs/strength.jpg",
    FLOW: "/assets/programs/flow.jpg",
    ENDURANCE: "/assets/programs/endurance.jpg",
  }
};
