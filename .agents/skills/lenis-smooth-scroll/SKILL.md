---
name: lenis-smooth-scroll
description: Use this skill when adding, configuring, debugging, or refining Lenis smooth scrolling in a Next.js/React project. Trigger on requests mentioning Lenis, smooth scroll, buttery scroll, scroll behavior, anchor scrolling, sticky sections, scroll-linked animation, or premium scroll feel.
---

# Lenis Smooth Scroll Skill

## Mission

Add premium, accessible, buttery smooth scrolling to the Next.js website using Lenis.

Lenis must enhance the editorial boutique feeling. It must not create scroll bugs, motion sickness, or broken anchor navigation.

---

## Package

Use the current package name:

```bash
npm install lenis
```

Do not use deprecated packages like:
- `@studio-freight/lenis`
- `@studio-freight/react-lenis`

---

## Recommended Next.js App Router approach

Create a client provider:

```tsx
// src/components/providers/LenisProvider.tsx
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

Then wrap the app in `src/app/layout.tsx`:

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

If the current `layout.tsx` already has providers, merge LenisProvider carefully instead of replacing existing logic.

---

## Reduced motion

Respect user preferences.

If needed, disable or soften Lenis when `prefers-reduced-motion` is enabled.

Do not create an inaccessible motion-heavy experience.

---

## Anchor navigation

If the site uses anchor links such as:

```txt
#directions
#business
#licensing
#trades
#kush
#cases
#contacts
```

Lenis should support anchor scrolling.

Set:

```tsx
anchors: true
```

Test every header link after installation.

---

## Framer Motion integration

Lenis and Framer Motion should work together, but avoid over-animating scroll sections.

Use Lenis for scroll feel.
Use Framer Motion for reveal and micro-interactions.

Do not use Lenis as a replacement for layout animation.

---

## Sticky sections

Lenis should preserve CSS sticky behavior.

Use sticky sections for premium editorial moments:
- process section
- side section labels
- floating CTA
- visual proof panels

Test sticky behavior after adding Lenis.

---

## Mobile behavior

Use conservative mobile settings.

Preferred:

```tsx
syncTouch: false
```

The mobile site must remain predictable and accessible.

If mobile scrolling feels heavy or laggy:
- reduce duration
- increase lerp slightly
- disable aggressive scroll-linked animations
- consider disabling Lenis for touch devices if necessary

---

## Debug checklist

After installing Lenis, test:

1. Page scrolls normally.
2. Anchor links work.
3. Header links scroll to correct sections.
4. Sticky elements still work.
5. Framer Motion reveal animations still trigger.
6. Mobile scroll is not laggy.
7. Keyboard navigation is not broken.
8. Browser find/search still works.
9. User can scroll with trackpad and mouse wheel.
10. There are no hydration errors.

---

## Do not do

Do not:
- initialize Lenis in a server component
- create multiple Lenis root instances
- add both old and new Lenis packages
- create custom requestAnimationFrame loop if `autoRaf: true` is used
- break route transitions
- break accessibility
- add smooth scroll if it makes the page feel less usable

---

## Final check

After implementation, run:

```bash
npm run lint
npm run build
```

Fix all errors.
