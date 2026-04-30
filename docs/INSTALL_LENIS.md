# INSTALL_LENIS.md

## Цель

Подключить Lenis для премиального плавного скролла.

## Установка

```bash
npm install lenis
```

## Создать файл

`src/components/providers/LenisProvider.tsx`

```tsx
"use client";

import { ReactLenis } from "lenis/react";
import type { PropsWithChildren } from "react";

export function LenisProvider({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
```

## Подключить в `src/app/layout.tsx`

Пример:

```tsx
import { LenisProvider } from "@/components/providers/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
```

Если в `layout.tsx` уже есть классы, шрифты, metadata или другие провайдеры — не удалять их. Нужно только аккуратно обернуть `{children}` в `LenisProvider`.

## Проверка

После подключения проверить:

```bash
npm run lint
npm run build
```

Потом проверить вручную:

- обычный скролл;
- скролл мышью;
- скролл тачпадом;
- мобильный скролл;
- якорные ссылки из меню;
- sticky-блоки;
- Framer Motion анимации.
