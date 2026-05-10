export const navigationItems = [
  { label: "Направления", href: "#directions" },
  { label: "Практика", href: "#cases" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Обо мне", href: "#about" },
  { label: "Вопросы", href: "#faq" }
] as const;

export const footerNavigation = [
  { label: "Направления", href: "#directions" },
  { label: "Обо мне", href: "#about" },
  { label: "Практика", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" }
] as const;

export const telegramUrl =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL || "#contacts";
  
export const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#contacts";

  export const instagramReviewsUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_REVIEWS_URL || "https://www.instagram.com/stories/highlights/18186953866333046/";