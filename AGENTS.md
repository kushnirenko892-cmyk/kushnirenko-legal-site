# AGENTS.md

## Project identity

This is not a generic legal landing page.

This project is a premium personal-brand website for Elizaveta Kushnirenko: a legal strategist for business packaging, online schools, licensing, trades/tenders, and KUSH launch packaging.

The product must feel like a high-end boutique legal/digital consultancy, not a cheap template landing page.

## Current technical stack

Use the existing stack:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- grammY for Telegram bot logic
- Lenis for premium smooth scrolling

Do not replace the stack without a strong reason.

## Core design principle

Every UI decision must pass this test:

> Would this feel appropriate for a premium legal boutique that sells strategic work, not cheap legal consultations?

If the answer is no, redesign it.

## Main visual reference

The main design mood reference is:

https://mlegal-rds.ava-case.com/

Do not copy it pixel-by-pixel. Extract the principles:
- editorial layout
- large typography
- strong rhythm
- premium spacing
- section numbering
- elegant dark/light contrast
- minimal but confident motion
- boutique law-firm atmosphere
- expensive, calm, structured feeling

## Visual language

The website should feel:
- premium
- warm
- editorial
- legally serious
- modern
- confident
- human
- expensive
- strategic

It must not feel:
- like a generic Tailwind landing page
- like a cheap Tilda template
- like a SaaS dashboard
- like a basic business-card website
- like an old-fashioned lawyer site

## Color system

Use a warm legal boutique palette:

- Deep chocolate: #2A1A12
- Dark brown: #2F1F16
- Warm beige: #D8C4B2
- Sand beige: #C7AE99
- Caramel: #B58D6E
- Bronze: #A97E5F
- Cream text: #F5EDE6
- Soft cream: #EEE3D7
- Accent bronze: #C89B73
- Soft gold: #D8B28A

Avoid:
- pure black as the dominant background
- pure white as the dominant background
- generic blue legal palette
- aggressive gold
- random gradients
- cheap drop shadows

## Typography direction

Use editorial typography.

Rules:
- H1 must be very large and confident.
- Do not make all text the same size.
- Use a clear type scale.
- Use wide spacing and strong hierarchy.
- Body text should be calm, readable, and elegant.
- Section titles should feel like editorial chapter titles.

Avoid:
- tiny headings
- cramped cards
- generic centered SaaS typography
- random font weights

## Layout direction

The website must use editorial composition, not simple stacked blocks.

Prefer:
- asymmetric grids
- full-width sections
- large vertical rhythm
- sticky/floating CTA elements
- section numbers
- split layouts
- large image zones
- oversized typography
- negative space
- layered cards
- premium dividers

Avoid:
- four identical cards in a boring grid unless visually elevated
- flat rectangles with equal padding everywhere
- excessive borders
- default Tailwind card look
- generic icon-card sections

## Motion direction

Use Framer Motion and Lenis intentionally.

Motion should feel:
- slow
- elegant
- soft
- premium
- scroll-aware
- minimal

Use:
- fade + y reveal
- staggered text reveal
- mask/clip reveal
- subtle parallax
- sticky section transitions
- smooth hover states
- sliding case cards
- buttery smooth scroll through Lenis

Do not use:
- bouncy animations
- childish easing
- aggressive scaling
- random motion on every element
- heavy animation that hurts readability

Respect `prefers-reduced-motion`.

## UX direction

The user should always understand:
- who Elizaveta is
- what she helps with
- why she is credible
- what direction to choose
- what action to take next

Main CTA:

> Записаться на стратегический разбор

Do not replace the main CTA with generic wording like:
- Оставить заявку
- Связаться
- Получить консультацию

## Required development behavior

Before redesigning major UI:
1. Audit the current page.
2. Identify why it feels cheap.
3. Propose a short design plan.
4. Then implement.

When implementing:
- keep components modular
- keep content in constants where possible
- use Tailwind tokens consistently
- use semantic HTML
- keep mobile-first
- run lint/build after changes
- do not add heavy dependencies without reason

## Quality bar

The result should look like a custom-designed premium website, not generated boilerplate.

Before finishing, check:
- Does the hero feel expensive?
- Is the spacing generous?
- Is the typography memorable?
- Are there unique layout moments?
- Are interactions elegant?
- Does mobile still feel premium?
- Is the CTA obvious?
- Is there any generic-card-template smell?

If the design feels basic, keep iterating.
