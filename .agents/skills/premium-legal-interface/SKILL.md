---
name: premium-legal-interface
description: Use this skill when designing, redesigning, or improving the visual quality of this legal boutique website. Trigger on requests mentioning premium UI, wow design, Maxima Legal reference, beautiful landing page, animations, layout, hero, cards, visual polish, or “looks cheap/basic”.
---

# Premium Legal Interface Skill

## Mission

Transform ordinary generated landing pages into premium boutique legal interfaces.

The goal is not to “make it pretty”.
The goal is to create a website that feels expensive, strategic, editorial, calm, and trustworthy.

This skill is specifically for the Elizaveta Kushnirenko legal website.

Desired design category:

**Premium Legal Boutique × Personal Brand × Digital Consultancy**

The website must look closer to a high-end legal studio / boutique consulting firm than to a basic landing page.

---

## Non-negotiable design standard

Never produce a generic layout.

Avoid:
- standard SaaS hero
- centered headline + 3 cards + FAQ
- generic Tailwind gradients
- boring equal card grids
- cheap shadows
- random icons
- too many borders
- tiny typography
- cramped sections
- flat beige/brown blocks without hierarchy
- “template lawyer” visuals

Every section must have a visual reason to exist.

---

## Main reference interpretation

The user likes the Maxima Legal-style reference:

https://mlegal-rds.ava-case.com/

Do not copy it exactly.

Extract these principles:

1. Editorial composition  
   Sections should feel like chapters in a premium presentation.

2. Large typography  
   Text scale should create confidence and status.

3. Strong scroll rhythm  
   The page should feel curated as the user scrolls.

4. Minimal but precise motion  
   Animation should support hierarchy, not decorate randomly.

5. Dark/light contrast  
   Use warm dark chocolate sections with light beige/cream sections.

6. Boutique legal feeling  
   Calm, serious, strategic, premium.

7. Interactive presence  
   CTA, header, cards, and case sections should feel alive.

---

## Design diagnosis checklist

Before editing UI, inspect the current page and answer:

1. Why does it feel cheap?
2. Is the hero too generic?
3. Is the typography too small?
4. Are all sections visually equal?
5. Are cards too simple?
6. Is there enough negative space?
7. Does the layout have any memorable moment?
8. Is the animation elegant or absent?
9. Does it look like a custom studio website?
10. Would a premium client trust this brand?

Then redesign based on the diagnosis.

---

## Visual system

Use this palette as design tokens:

```ts
export const colors = {
  chocolate: "#2A1A12",
  brown: "#2F1F16",
  beige: "#D8C4B2",
  sand: "#C7AE99",
  caramel: "#B58D6E",
  bronze: "#A97E5F",
  cream: "#F5EDE6",
  softCream: "#EEE3D7",
  accent: "#C89B73",
  goldSoft: "#D8B28A",
};
```

Use colors with restraint.

Preferred combinations:
- chocolate background + cream typography
- beige background + chocolate typography
- caramel cards + cream/chocolate text
- bronze accents only for emphasis
- thin cream/bronze dividers

Do not use random colors.

---

## Typography system

Create a clear editorial type scale.

Recommended direction:
- Hero H1: huge, elegant, responsive
- Section labels: small uppercase or bracketed labels
- Section H2: large, confident
- Body: readable, calm
- CTA: compact but premium

Rules:
- H1 must not look like default Tailwind text.
- Use tracking, leading, and weight intentionally.
- Pair a refined serif/display feel with a clean sans feel if fonts are available.
- If external fonts are not configured yet, still create an editorial hierarchy through size, spacing, and weight.

Avoid:
- all text `text-base`
- overusing `font-bold`
- cramped line-height
- center-aligning everything
- weak H1

---

## Layout system

Use a 12-column editorial grid on desktop.

Prefer:
- asymmetric hero
- large image area
- sticky side labels
- section numbers
- split panels
- oversized content blocks
- wide gutters
- generous vertical rhythm
- alternating background tones
- layered case cards
- horizontal case/review sections when appropriate

Avoid:
- repeating the same section layout
- equal-height boring cards everywhere
- excessive rounded corners
- excessive shadows
- unstyled lists

---

## Component direction

Build or improve these components:

### PremiumHeader

Must feel minimal and alive.

Rules:
- fixed or sticky
- translucent or softly blended into background
- compact nav
- premium CTA
- Telegram icon/button
- smooth hover underline or background transition

### EditorialHero

Must be the strongest visual moment.

Include:
- large H1
- short strategic subtitle
- trust line
- primary CTA
- secondary CTA
- portrait / visual image zone
- subtle section label
- motion reveal

Hero must not feel like a generic startup hero.

### DirectionPanels

For four directions:
- Business packaging
- Licensing online schools
- Trades/tenders
- KUSH team

Make them visually unequal or editorially arranged.
At least one card should be larger or have a different composition.

### ServiceDeepDive

For business, licensing, trades, KUSH sections.

Each section should feel like a chapter:
- section number
- title
- short intro
- service bullets
- CTA
- visual divider or side element

### CaseShowcase

Cases must feel like proof, not filler.

Use:
- large case cards
- category labels
- result emphasis
- horizontal scroll or slider
- premium hover

### ReviewWall

Reviews should feel credible.

Use:
- screenshot placeholders or cards
- quiet carousel
- soft background contrast
- “more in Telegram” link

### ProcessSection

Avoid basic numbered list.

Use:
- accordion
- sticky visual
- step rows with large numbers
- elegant divider lines
- smooth active state

### FinalCTA

Must feel like a closing premium invitation.

Use:
- large title
- short text
- strong CTA
- warm contrast section

---

## Motion rules

Use Framer Motion for:
- section reveal
- text reveal
- card stagger
- hover states
- case slider transitions
- process active state

Recommended animation values:
- duration: 0.6–1.2s
- ease: [0.22, 1, 0.36, 1]
- y offset: 20–60px
- opacity: 0 → 1
- stagger: 0.06–0.12s

Avoid:
- spring bounce unless extremely subtle
- rotation-heavy effects
- scaling more than 1.03 on hover
- animating everything at once

Always respect reduced motion.

---

## Premium interaction details

Add small interaction details:
- CTA hover should feel tactile
- cards should have subtle movement or border glow
- nav links should have elegant active/hover state
- section transitions should feel intentional
- interactive elements should stay close to the user

Possible effects:
- cursor-follow glow inside cards
- soft mask reveal
- sticky CTA
- smooth anchor scroll
- animated section counter
- subtle moving background noise/texture

Use only what improves the premium feeling.

---

## Texture and depth

The site should not be flat.

Use:
- subtle background noise
- soft radial gradients
- thin divider lines
- layered panels
- semi-transparent overlays
- image masks
- large empty space

Do not create heavy skeuomorphic shadows.

Depth should be subtle.

---

## Image treatment

Portrait of Elizaveta is central.

Rules:
- large portrait in hero
- elegant cutout or framed treatment
- avoid cheap circular avatars
- use warm overlay if needed
- make image feel editorial

If final image assets are missing:
- use premium placeholders
- leave clear comments where real assets should go
- do not use random stock lawyer photos

---

## Mobile rules

Mobile must still feel premium.

Rules:
- hero should not collapse into boring stacked text
- H1 remains large but readable
- CTA appears early
- cards become swipeable or stacked elegantly
- spacing remains generous
- avoid huge empty dead zones
- header remains useful

Mobile is not an afterthought.

---

## Implementation rules

Use:
- TypeScript
- React components
- Tailwind CSS
- Framer Motion
- CSS variables/design tokens where helpful

Do not:
- hardcode random magic values everywhere
- create huge single-file pages
- duplicate card code
- add unapproved heavy dependencies
- break existing Telegram bot architecture
- remove future `/admin` and `/cabinet` placeholders

---

## Suggested file organization

If redesigning UI, prefer:

```txt
src/
  components/
    layout/
      PremiumHeader.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Directions.tsx
      BusinessSection.tsx
      LicensingSection.tsx
      TradesSection.tsx
      KushSection.tsx
      ProcessSection.tsx
      CasesSection.tsx
      ReviewsSection.tsx
      AboutSection.tsx
      FinalCTA.tsx
    ui/
      PremiumButton.tsx
      EditorialCard.tsx
      SectionLabel.tsx
      SectionFrame.tsx
      Reveal.tsx
  lib/
    constants/
      content.ts
      design.ts
```

---

## Design upgrade procedure

When asked to make the site premium:

1. Audit the current UI.
2. Write a short `DESIGN_UPGRADE_PLAN.md`.
3. Identify 3–5 major visual problems.
4. Redesign the design tokens if needed.
5. Upgrade the hero first.
6. Upgrade section rhythm.
7. Upgrade cards.
8. Add motion.
9. Improve mobile.
10. Run lint/build.
11. Provide summary of what changed and why.

Do not start by randomly changing colors.

---

## Required final self-review

Before finishing, answer:

1. Does the page look custom?
2. Does it resemble a premium legal boutique?
3. Is the hero memorable?
4. Is the typography confident?
5. Is there enough spacing?
6. Are the cards non-generic?
7. Are animations subtle and expensive?
8. Does mobile feel polished?
9. Is the CTA clear?
10. Did I avoid legal clichés?

If any answer is weak, continue improving.

---

## Output expectation

The final UI should feel like a website that could belong to a boutique legal/digital strategist.

It should not feel like:
- “generated by AI in one prompt”
- “basic Tailwind starter”
- “cheap landing page”
- “constructor template”

The goal is a wow effect with taste.
