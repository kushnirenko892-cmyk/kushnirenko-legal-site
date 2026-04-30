# CODEX_REDESIGN_PROMPT.md

Use this prompt after adding `AGENTS.md` and the skills folder.

```txt
Используй skills:
- premium-legal-interface
- lenis-smooth-scroll

Текущий сайт выглядит слишком простым и дешёвым. Нужно превратить его в премиальный legal boutique лендинг в духе Maxima Legal, но без копирования один в один.

Сначала:
1. Проанализируй текущую структуру и визуал.
2. Напиши краткий DESIGN_UPGRADE_PLAN.md: что именно выглядит дёшево и как исправить.
3. После этого реализуй редизайн.

Фокус:
- hero должен стать главным wow-блоком;
- типографика должна стать крупной и editorial;
- сетка должна быть асимметричной и премиальной;
- карточки не должны выглядеть как обычные Tailwind rectangles;
- добавить плавные Framer Motion анимации;
- подключить Lenis через npm install lenis;
- добавить LenisProvider;
- подключить LenisProvider в app/layout.tsx;
- проверить якорную навигацию;
- улучшить spacing, rhythm, section transitions;
- сохранить текущую архитектуру Next.js/React/TypeScript/Tailwind;
- не ломать будущие /admin, /cabinet и Telegram bot architecture.

После реализации запусти:
npm run lint
npm run build

Исправь ошибки, если они появятся.
```
