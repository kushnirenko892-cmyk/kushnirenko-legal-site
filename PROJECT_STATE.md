# PROJECT_STATE.md

## 1. Цель проекта

Создать премиальный сайт личного бренда Елизаветы Кушниренко: юридического стратега для юридической упаковки бизнеса, онлайн-школ, лицензирования, торгов/тендеров и запусков с командой KUSH.

Первый релиз — не CRM и не сложная платформа, а luxury legal editorial лендинг с Telegram-связкой для квалификации заявок.

## 2. Стек проекта

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis для плавного скролла
- Radix/shadcn-подход как техническая база для Accordion/Dialog/Sheet/Tabs/Button
- lucide-react
- grammY для Telegram bot logic

## 3. Визуальное направление

Текущее направление: luxury legal editorial.

Ключевые признаки:

- почти черный шоколадный фон;
- глубокий шоколад, какао, кремовый текст;
- мягкая карамель и бронза вместо яркого золота;
- крупная элегантная serif-типографика;
- fashion/editorial-композиция;
- тонкие линии вместо тяжелых карточек;
- дорогие отступы и спокойный ритм;
- минимум иконок;
- CTA с тонкой рамкой, инверсией цвета и плавным hover.

Важно: вдохновение Chanel, Gucci, Dior используется только на уровне luxury/editorial-ощущения. Логотипы, фирменные шрифты, паттерны и узнаваемые брендовые элементы не копируются.

## 4. Ключевые референсы

- https://mlegal-rds.ava-case.com/ — основной legal boutique / Maxima Legal mood reference.
- Chanel / Gucci / Dior — только как направление luxury fashion editorial: темная сцена, крупная типографика, тонкие линии, сдержанная премиальность.
- Проектные инструкции: `AGENTS.md`, `docs/CODEX_REDESIGN_PROMPT.md`, `.agents/skills/premium-legal-interface/SKILL.md`, `.agents/skills/lenis-smooth-scroll/SKILL.md`.

## 5. Текущая структура проекта

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
    admin/page.tsx
    cabinet/page.tsx
    api/telegram/webhook/route.ts

  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileMenu.tsx

    luxury/
      LuxuryButton.tsx
      LuxuryCard.tsx
      SectionEyebrow.tsx
      EditorialDivider.tsx
      MonogramMark.tsx
      LuxurySection.tsx
      FloatingTelegramCTA.tsx

    providers/
      LenisProvider.tsx

    sections/
      Hero.tsx
      Directions.tsx
      BusinessSection.tsx
      LicensingSection.tsx
      TradesSection.tsx
      KushSection.tsx
      ProcessSection.tsx
      CasesSection.tsx
      AboutSection.tsx
      ReviewsSection.tsx
      FAQSection.tsx
      FinalCTA.tsx

    ui/
      Badge.tsx
      Button.tsx
      Card.tsx
      Container.tsx
      MotionSection.tsx
      SectionTitle.tsx
      shadcn/
        accordion.tsx
        button.tsx
        dialog.tsx
        sheet.tsx
        tabs.tsx

  lib/
    utils.ts
    constants/
      colors.ts
      content.ts
      navigation.ts
    telegram/
      bot.ts
      messages.ts

  types/
    client.ts
    lead.ts
    loyalty.ts
```

Корневые важные файлы:

```txt
AGENTS.md
DESIGN_UPGRADE_PLAN.md
PROJECT_STATE.md
docs/INSTALL_LENIS.md
docs/CODEX_REDESIGN_PROMPT.md
package.json
tailwind.config.ts
next.config.ts
tsconfig.json
.env.example
```

## 6. Какие файлы уже добавлены

Добавлены проектные и документационные файлы:

- `AGENTS.md`
- `DESIGN_UPGRADE_PLAN.md`
- `docs/INSTALL_LENIS.md`
- `docs/CODEX_REDESIGN_PROMPT.md`
- `.agents/skills/premium-legal-interface/SKILL.md`
- `.agents/skills/lenis-smooth-scroll/SKILL.md`

Добавлены/созданы основные app-файлы:

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/admin/page.tsx`
- `src/app/cabinet/page.tsx`
- `src/app/api/telegram/webhook/route.ts`

Добавлены UI/luxury primitives:

- `src/components/luxury/LuxuryButton.tsx`
- `src/components/luxury/LuxuryCard.tsx`
- `src/components/luxury/SectionEyebrow.tsx`
- `src/components/luxury/EditorialDivider.tsx`
- `src/components/luxury/MonogramMark.tsx`
- `src/components/luxury/LuxurySection.tsx`
- `src/components/luxury/FloatingTelegramCTA.tsx`

Добавлена shadcn/Radix-техническая база:

- `src/components/ui/shadcn/accordion.tsx`
- `src/components/ui/shadcn/button.tsx`
- `src/components/ui/shadcn/dialog.tsx`
- `src/components/ui/shadcn/sheet.tsx`
- `src/components/ui/shadcn/tabs.tsx`

Добавлены Telegram/domain файлы:

- `src/lib/telegram/bot.ts`
- `src/lib/telegram/messages.ts`
- `src/types/lead.ts`
- `src/types/client.ts`
- `src/types/loyalty.ts`

## 7. Какие библиотеки установлены

Production dependencies:

- `next@15.5.15`
- `react`
- `react-dom`
- `framer-motion`
- `lenis`
- `grammy`
- `@grammyjs/conversations`
- `lucide-react`
- `@radix-ui/react-accordion`
- `@radix-ui/react-dialog`
- `@radix-ui/react-slot`
- `@radix-ui/react-tabs`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`

Dev dependencies:

- `typescript`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `eslint`
- `eslint-config-next`
- `@types/node`
- `@types/react`
- `@types/react-dom`

Также добавлен `overrides.postcss`, чтобы зафиксировать безопасную версию PostCSS и держать `npm audit` чистым.

## 8. Какие решения уже приняты

- Основной CTA: `Записаться на стратегический разбор`.
- Все CTA ведут через `NEXT_PUBLIC_TELEGRAM_BOT_URL`; если переменная не задана, fallback ведет к `#contacts`.
- Первый релиз не включает полноценную CRM, оплату, личный кабинет, авторизацию или систему лояльности.
- `/admin` и `/cabinet` существуют как архитектурные заглушки и закрыты от индексации.
- Контент хранится в `src/lib/constants/content.ts`, навигация — в `src/lib/constants/navigation.ts`.
- Lenis подключен через `LenisProvider` в `src/app/layout.tsx`.
- `LenisProvider` учитывает `prefers-reduced-motion`.
- Шрифты:
  - `Manrope` — интерфейс и основной текст;
  - `Cormorant Garamond` — русские editorial-заголовки;
  - `Bodoni Moda` — только латинские декоративные акценты, потому что у него нет кириллицы.
- shadcn/Radix используется только как техническая база, визуальный стиль кастомный.
- Визуальный язык: luxury legal boutique, без юридических клише вроде весов, молотков и колонн.

## 9. Какие проблемы возникали и как их решали

- `npm` в PowerShell блокировался через `npm.ps1`.
  Решение: использовать `npm.cmd`.

- Установка пакетов иногда падала из-за sandbox/network/cache permissions.
  Решение: повторять команды с разрешением на сетевой доступ, когда это действительно нужно.

- Next.js build в sandbox падал с `spawn EPERM`.
  Решение: запускать production build с разрешением, потому что Next запускает дочерние процессы.

- `next lint` помечен deprecated в будущей Next 16.
  Решение: оставлен текущий `next lint`, потому что проект стабильно работает на Next 15.5.15.

- Попытка обновиться на Next 16 вызвала нестабильность локальной сборки.
  Решение: вернуться на стабильную Next 15.5.15.

- `npm audit` показывал проблему во вложенном PostCSS.
  Решение: добавить `overrides` на безопасную версию PostCSS; текущий audit был чистым.

- Next предупреждал о нескольких lockfile выше по дереву.
  Решение: в `next.config.ts` задан `outputFileTracingRoot: process.cwd()`.

- У `Bodoni Moda` нет subset `cyrillic`.
  Решение: подключить Bodoni только с `latin`, а русские заголовки вести через Cormorant Garamond.

- На мобильном hero крупный заголовок ломал ширину.
  Решение: добавить отдельную мобильную разметку H1 с ручными переносами.

- Старые dev-серверы на портах `3000/3001` могли отдавать устаревшее состояние или 500.
  Решение: для проверки поднимался свежий dev-сервер на `3002`.

## 10. Что делать следующим шагом

1. Проверить сайт вручную в браузере на desktop/tablet/mobile.
2. Подставить реальные env:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_TELEGRAM_BOT_URL`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_TEAM_CHAT_ID`
   - `TELEGRAM_WEBHOOK_SECRET`
3. Подключить реального Telegram-бота и выставить webhook на production URL.
4. Заменить временные/стоковые изображения на реальные брендовые фото Елизаветы или аккуратные custom assets.
5. Проверить якорную навигацию после Lenis на реальном устройстве.
6. Подготовить деплой на Vercel или другую Next.js-friendly платформу.
7. После деплоя проверить:
   - `/`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/api/telegram/webhook`
   - Open Graph preview
   - мобильный первый экран
8. После MVP можно планировать базу заявок, Supabase, admin flow и кабинет.

## 11. Что нельзя ломать

- Нельзя превращать сайт в generic legal landing или дешевый Tailwind/Tilda-style шаблон.
- Нельзя копировать Chanel/Gucci/Dior или Maxima Legal 1:1.
- Нельзя использовать юридические клише: весы, молоток, колонны, синий адвокатский стиль.
- Нельзя менять главный CTA без причины: `Записаться на стратегический разбор`.
- Нельзя убирать Telegram architecture и `/api/telegram/webhook`.
- Нельзя удалять `/admin` и `/cabinet`; это задел под будущие этапы.
- Нельзя добавлять CRM, оплату, авторизацию, полноценный кабинет или систему лояльности в MVP без отдельного решения.
- Нельзя хранить секреты в коде; только env.
- Нельзя ломать `LenisProvider`, `prefers-reduced-motion` и якорную навигацию.
- Нельзя возвращать pure white / pure black dominant design; палитра должна оставаться luxury chocolate/cream/bronze.
- Нельзя перегружать интерфейс иконками и тяжелыми карточками.
- Нельзя менять стек без сильной причины.
