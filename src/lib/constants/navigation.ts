export const navigationItems = [
  { label: "Направления", href: "#directions" },
  { label: "Кейсы", href: "#cases" },
  { label: "Отзывы", href: "#reviews" },
  { label: "О Елизавете", href: "#about" },
  { label: "FAQ", href: "#faq" }
] as const;

export const telegramUrl =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL || "#contacts";
