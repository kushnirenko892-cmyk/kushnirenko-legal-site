# DESIGN_UPGRADE_PLAN.md

## Audit

Текущий сайт уже ушел от базового Tailwind-лендинга в сторону editorial legal boutique: есть крупная serif-типографика, темный hero, секционная нумерация и строгие списки услуг. Но перед финальной выгрузкой остаются точки, которые снижают ощущение премиальности и противоречат проектным правилам.

## Что выглядит недостаточно премиально

1. Доминирующий фон слишком близок к pure black. По AGENTS.md нужен теплый chocolate/brown, иначе сайт ощущается холоднее и дешевле.
2. LenisProvider создан, но не подключен в `src/app/layout.tsx`, а пакет `lenis` отсутствует в зависимостях.
3. Часть секций выглядит как переработанный первый дизайн, а не единая boutique-система: нужно усилить теплые контрасты, rhythm и chapter-feel.
4. Мобильный hero требует осторожного баланса: крупная типографика должна сохранять wow-эффект, но без обрезаний и слабого CTA.
5. Motion уже есть через Framer Motion, но smooth-scroll слой должен быть подключен аккуратно и с учетом `prefers-reduced-motion`.

## Luxury legal editorial upgrade

Новая арт-дирекция: luxury legal editorial с настроением fashion house, но без копирования логотипов, фирменных шрифтов и брендовых элементов Chanel/Gucci/Dior.

1. Подключить `Bodoni Moda`, `Cormorant Garamond`, `Manrope` через `next/font/google`.
2. Перевести палитру на почти черный шоколад, глубокий шоколад, какао, cream, caramel и bronze.
3. Добавить Tailwind-токены: `background`, `foreground`, `muted`, `border`, `accent`, `card`, `luxury-gold`, `bronze`, `chocolate-dark`.
4. Добавить luxury primitives: `LuxuryButton`, `LuxuryCard`, `SectionEyebrow`, `EditorialDivider`, `MonogramMark`, `LuxurySection`, `FloatingTelegramCTA`.
5. Подключить shadcn/Radix как техническую базу для `Accordion`, `Dialog`, `Sheet`, `Tabs`, `Button`, сохранив кастомный luxury-визуал.
6. Убрать боковые правые labels вида `1.2 / Business`, заменить их на компактные editorial-eyebrow внутри секций.
7. Проверить мобильные состояния hero/header/CTA и сохранить видимость Telegram-перехода.
8. После реализации запустить `npm run lint` и `npm run build`, исправить ошибки.
