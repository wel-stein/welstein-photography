---
name: Cinematic Noir Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#ffffff'
  on-tertiary: '#2f312e'
  tertiary-container: '#e3e3de'
  on-tertiary-container: '#636561'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: playfairDisplay
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: playfairDisplay
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: playfairDisplay
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: playfairDisplay
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: manrope
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  container-max: 1440px
  gutter: 2rem
  margin-x: 4rem
  stack-lg: 8rem
  stack-md: 4rem
  stack-sm: 2rem
---

## Brand & Style

This design system is tailored for high-end wedding photography where the image is the protagonist. The brand personality is sophisticated, quiet, and deeply cinematic. It targets a discerning clientele seeking timeless elegance rather than fleeting trends. 

The design style is **Minimalism** with an editorial, dark-mode execution. By utilizing deep charcoal backgrounds and expansive whitespace (or "dark space"), the UI recedes to ensure the photography remains the focal point. The emotional response should be one of reverence and intimacy, akin to walking through a high-end private gallery at night.

## Colors

The palette is anchored by `#1C1C1C`, providing a deep, near-black canvas that adds depth without the harshness of pure black. 

- **Primary:** `#FFFFFF` (White) is used for high-contrast readability and essential branding.
- **Secondary:** `#D4AF37` (Metallic Gold) is reserved for subtle accents, interactive states, or premium signifiers.
- **Tertiary:** `#F5F5F0` (Soft Ivory) acts as a gentler alternative to pure white for secondary text or delicate borders, reducing eye strain in dark environments.
- **Neutral:** The charcoal base is supplemented by low-opacity white overlays to create layered surfaces.

## Typography

This design system employs a high-contrast typographic pairing to evoke an editorial feel. 

**Playfair Display** is used for all headings. Its high-contrast serifs and elegant curves provide a romantic, historical connection to traditional wedding stationery. **Manrope** serves as the functional counterpart; its geometric, clean construction ensures that logistical information and body copy remain legible and modern. 

For large display text, negative letter-spacing is applied to create a "tight" professional look, while labels and captions use increased tracking and uppercase styling to denote metadata or secondary navigation.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the intentional composition of a printed photobook. A 12-column grid is used with generous 4rem side margins to frame the content.

- **Desktop:** 12 columns, 2rem gutters. Sections are separated by massive vertical stacks (`stack-lg`) to give each image or story room to breathe.
- **Tablet:** 8 columns, 1.5rem gutters, 2rem margins. 
- **Mobile:** 4 columns, 1rem gutters, 1rem margins. Headlines scale down significantly to avoid awkward word breaks.

Content should often be asymmetrical, utilizing "pull-quotes" or off-center image placements to mimic luxury magazine layouts.

## Elevation & Depth

To maintain a minimalist and cinematic feel, this design system avoids traditional shadows. Depth is instead communicated through:

1.  **Tonal Layering:** Surfaces are differentiated by slight shifts in the background color (e.g., `#1C1C1C` for the base and a slightly lighter `#262626` for cards or containers).
2.  **Low-Contrast Outlines:** Subtle, 1px borders using Ivory (`#F5F5F0`) at 10-15% opacity are used to define boundaries without interrupting the visual flow.
3.  **Backdrop Blurs:** When overlays or menus are necessary, a high-density Gaussian blur (20px+) with a semi-transparent dark tint is used to maintain context while focusing the user's attention.

## Shapes

The design system utilizes **Sharp (0)** edges across all primary components. The 0px border radius reinforces a structured, architectural, and high-fashion aesthetic. Images, buttons, and input fields should remain strictly rectangular to maintain the "framed" look of a photography gallery.

## Components

- **Buttons:** Primary buttons are "ghost" style with a 1px white border and no fill. On hover, they transition to a solid white fill with black text. Text is always uppercase `label-sm`.
- **Inputs:** Underline-only style using the Ivory accent. Labels float above in `label-sm`. Error states use a muted terracotta rather than bright red to stay within the sophisticated palette.
- **Cards:** Used sparingly for blog posts or gallery categories. They feature no borders or shadows; the image fills the container, and typography is placed directly below with generous padding.
- **Navigation:** A minimal top-bar. Links use `label-sm` with a subtle gold underline appearing only on the active state.
- **Image Frames:** All photography should include a slight "inner stroke" or "safe area" of whitespace when presented in a masonry grid to emulate a matted print.
- **Transitions:** All interactive elements must use slow, eased transitions (300ms - 500ms) to mirror the deliberate pace of a premium experience.