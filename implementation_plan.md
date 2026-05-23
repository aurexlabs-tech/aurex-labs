# AurexLabs Premium Freelancing Website — Implementation Plan

Build a premium, modern, fully responsive freelancing website for a 2-developer team using the existing Angular 21 project skeleton.

## Current State

- **Angular 21** standalone project already set up with routing, Angular Material, Tailwind (layout-only), SCSS, and AOS
- All 7 components exist as **empty shells** (navbar, footer, hero, about, services, portfolio, contact)
- `material-imports.ts` barrel file ready
- `styles.scss` has basic CSS vars and Material overrides (from a previous project, needs updating)
- `index.html` still has old project meta tags — needs AurexLabs branding
- Logo provided: Blue→Teal "A" with network nodes, tagline "Empowering Digital Intelligence"

---

## User Review Required

> [!IMPORTANT]
> The `index.html` currently has "OrthoCare Plus" meta tags from a previous project. I will replace all of these with AurexLabs-specific SEO metadata.

> [!IMPORTANT]
> The `material-theme.scss` has `color-scheme: dark` on body. I'll update this to support dynamic theming (dark/light toggle via a CSS class on `<html>`).

> [!IMPORTANT]
> The logo image needs to be placed in `public/` as `logo.png`. I'll copy or reference it from there. **Please confirm if the attached logo image is already saved somewhere in the project, or if I should generate a simplified SVG version for the navbar.**

---

## Open Questions

> [!IMPORTANT]
> **WhatsApp Number**: The contact page needs a WhatsApp link. What number should be used? I'll use a placeholder `+91XXXXXXXXXX` for now.

> [!IMPORTANT]
> **EmailJS Setup**: The project has `@emailjs/browser` installed. Should the contact form actually send emails via EmailJS? If so, I'll need your Service ID, Template ID, and Public Key. For now, I'll implement the form UI with a placeholder submission handler.

> [!IMPORTANT]
> **Portfolio Projects**: Should I use placeholder/sample project data, or do you have specific projects to feature? I'll create 3-4 realistic sample projects for now.

> [!IMPORTANT]
> **Team Member Names**: The About page features 2 developers. Should I use your real names/photos, or placeholder content? I'll use "Bhuvanesh" (from the workspace path) and a placeholder second name.

---

## Proposed Changes

### Phase 1: Foundation — Design System & Theme Infrastructure

---

#### [MODIFY] [index.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/index.html)
- Replace all OrthoCare meta tags with AurexLabs SEO metadata
- Add Poppins font alongside Inter
- Update title, description, keywords, OG tags
- Add theme color meta tag

#### [MODIFY] [material-theme.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/material-theme.scss)
- Remove hardcoded `color-scheme: dark`
- Set up Material theme to respect `.dark-theme` / `.light-theme` CSS class on `<html>`

#### [MODIFY] [styles.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/styles.scss)
- Complete redesign of CSS custom properties for AurexLabs brand:
  - **Light theme** (default): `#FFFFFF` backgrounds, `#0B0F19` text
  - **Dark theme** (`.dark-theme` class): `#0B0F19` / deep navy backgrounds, light text
  - Primary gradient: Blue (`#0A66C2`) → Teal (`#14B8A6`)
  - Accent: Neon teal (`#00E5CC`)
- Typography system: Inter for body, Poppins for headings
- Global utility classes: `.section-padding`, `.section-title`, `.glass-card`, `.gradient-text`, `.glow-effect`
- Smooth theme transition: `transition: background-color 0.3s, color 0.3s`
- Background pattern utilities (network, dots, grid) via CSS pseudo-elements
- Scroll animation classes for AOS integration
- Material overrides updated for both themes

#### [NEW] [_variables.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/_variables.scss)
- SCSS variables and mixins for responsive breakpoints
- Shared color variables for component SCSS files
- Glassmorphism mixin, glow mixin, gradient mixin

---

### Phase 2: Core Services & Directives

---

#### [NEW] [theme.service.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/core/services/theme.service.ts)
- Injectable service managing dark/light theme
- Reads system preference via `prefers-color-scheme` media query
- Persists user choice in `localStorage`
- Applies `.dark-theme` / `.light-theme` class to `<html>` element
- Exposes `isDark` signal for components to reactively read

#### [NEW] [scroll-animate.directive.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/shared/directives/scroll-animate.directive.ts)
- Reusable directive using Intersection Observer
- Adds fade-in / slide-up animation classes when element enters viewport
- Configurable threshold and animation type via inputs

---

### Phase 3: Shared Components — Navbar & Footer

---

#### [MODIFY] [navbar.component.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/components/navbar/navbar.component.ts)
- Import RouterLink, Material modules, ThemeService
- Mobile menu toggle (hamburger → drawer)
- Theme toggle button (sun/moon icon)
- Scroll-based navbar transparency → solid background
- Active route highlighting

#### [MODIFY] [navbar.component.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/components/navbar/navbar.component.html)
- Logo (AurexLabs "A" + text)
- Navigation links: Home, About, Services, Portfolio, Contact
- Theme toggle button (mat-icon-button)
- Mobile hamburger menu
- CTA button: "Start Your Project"

#### [MODIFY] [navbar.component.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/components/navbar/navbar.component.scss)
- Glassmorphism toolbar with backdrop-filter
- Smooth scroll-based transition (transparent → solid)
- Mobile responsive drawer styles
- Active link indicator with gradient underline
- Theme-aware colors

#### [MODIFY] [footer.component.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/components/footer/footer.component.ts)
- Import RouterLink, Material modules
- Footer links data, social links

#### [MODIFY] [footer.component.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/components/footer/footer.component.html)
- 4-column layout: Brand, Quick Links, Services, Contact Info
- Social media links (GitHub, LinkedIn, Twitter/X)
- Subtle dots/grid background pattern
- Copyright with current year
- "Built with ❤️ by AurexLabs" tagline

#### [MODIFY] [footer.component.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/components/footer/footer.component.scss)
- Dark footer background with subtle pattern
- Responsive grid → stack layout
- Link hover effects with teal accent
- Gradient divider line

---

### Phase 4: Home Page (Hero + Sections)

---

#### [MODIFY] [hero.component.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/hero/hero.component.ts)
- This is the **Home Page** (mapped to `/` route)
- Contains: Hero section, Services preview, Featured projects, Why choose us, Process section, CTA section
- Import Material modules, RouterLink, scroll-animate directive
- Canvas-based particle network animation for hero background (lightweight, no heavy libs)

#### [MODIFY] [hero.component.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/hero/hero.component.html)

**Hero Section:**
- Full-viewport hero with network particle canvas background
- Floating pseudo-3D "A" logo with CSS animation (rotate, glow)
- Headline: "We build modern, scalable web applications"
- Subtext: "Full-stack development using Angular, Node.js, and modern technologies"
- CTA Buttons: "Start Your Project" (primary, gradient), "View Our Work" (outlined)
- Gradient glow orbs in background

**Services Preview (3 cards):**
- Web Development, Web Applications, UI/UX Design
- Material cards with icons, brief descriptions
- "View All Services" link

**Featured Projects (2-3 cards):**
- Project image, title, tech stack chips, short description
- "View Portfolio" link

**Why Choose Us (4 items):**
- Icons + stats: "2+ Years", "10+ Projects", "100% Client Satisfaction", "24/7 Support"
- Clean grid layout

**Process Section (4 steps):**
1. Discovery → 2. Design → 3. Develop → 4. Deploy
- Timeline/stepper visual with numbered circles and connecting lines

**CTA Section:**
- "Ready to bring your idea to life?"
- Gradient background, "Let's Talk" button

#### [MODIFY] [hero.component.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/hero/hero.component.scss)
- Full-viewport hero with gradient overlay
- Canvas positioning for particle network
- Floating "A" logo animation (CSS 3D transforms, glow)
- Service cards with hover lift + gradient border
- Process timeline styling
- Responsive breakpoints for all sections
- Theme-aware styling throughout

---

### Phase 5: About Page

---

#### [MODIFY] [about.component.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/about/about.component.ts)
- Team data, skills data, timeline data
- Import Material modules, scroll-animate directive

#### [MODIFY] [about.component.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/about/about.component.html)

**Page Header:**
- "About AurexLabs" with dotted background pattern

**Team Intro (2 developers):**
- Photo placeholders (CSS avatar with initials)
- Name, role, bio, skill tags
- Social links

**Skills Section:**
- Tech stack grid: Angular, Node.js, TypeScript, MongoDB, PostgreSQL, Firebase, etc.
- Skill bars or proficiency chips

**Work Philosophy:**
- 3 pillars: "Quality First", "Agile & Transparent", "Long-term Partnership"
- Icon + description cards

**Timeline/Story:**
- Simple vertical timeline: Founded → First Client → Growth milestones

#### [MODIFY] [about.component.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/about/about.component.scss)
- Dotted background pattern for header
- Team cards with glassmorphism
- Skill chips with gradient borders
- Timeline with gradient line + animated dots
- Responsive layout

---

### Phase 6: Services Page

---

#### [MODIFY] [services.component.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/services/services.component.ts)
- Services data array with descriptions, features, pricing tiers
- Import Material modules, scroll-animate directive

#### [MODIFY] [services.component.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/services/services.component.html)

**Page Header:**
- "Our Services" — clean, no background pattern

**4 Service Sections:**
Each with:
1. **Web Development** — Custom websites, landing pages, corporate sites
2. **Web Applications** — Full-stack SPA/PWA with Angular, React, Node.js
3. **UI/UX Design** — Figma prototyping, design systems, user research
4. **Maintenance & Support** — Bug fixes, performance optimization, updates

Each includes:
- Icon + title + description
- Key features list (mat-list with check icons)
- Optional pricing tiers (Starter / Standard / Premium) using mat-card grid

**CTA Section:**
- "Not sure which service fits?" → "Let's Discuss"

#### [MODIFY] [services.component.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/services/services.component.scss)
- Clean layout, no background pattern
- Service cards with icon accent colors
- Pricing tier cards with highlighted "Popular" badge
- Feature list styling
- Responsive grid

---

### Phase 7: Portfolio Page

---

#### [MODIFY] [portfolio.component.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/portfolio/portfolio.component.ts)
- Projects data with images, tech stacks, descriptions, problem/solution/result
- Import Material modules, scroll-animate directive

#### [MODIFY] [portfolio.component.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/portfolio/portfolio.component.html)

**Page Header:**
- "Our Work" — minimal background pattern

**Project Cards (3-4):**
Each card:
- Project image (gradient placeholder or generated)
- Title
- Tech stack chips (mat-chip)
- Short description
- Expandable: Problem → Solution → Result

**CTA:**
- "Have a project in mind?" → "Get a Free Quote"

#### [MODIFY] [portfolio.component.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/portfolio/portfolio.component.scss)
- Minimal background pattern
- Project cards with image overlay on hover
- Tech stack chips with brand colors
- Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)

---

### Phase 8: Contact Page

---

#### [MODIFY] [contact.component.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/contact/contact.component.ts)
- Reactive form with validation (Name, Email, Project Details)
- Form submission handler (placeholder)
- Import Material form modules, ReactiveFormsModule

#### [MODIFY] [contact.component.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/contact/contact.component.html)

**Page Header:**
- "Let's Work Together"

**2-column Layout:**
- Left: Contact form (mat-form-field × 3 + textarea + submit button)
- Right: Contact info cards (Email, Phone/WhatsApp, Location)

**WhatsApp Button:**
- Floating or prominent "Chat on WhatsApp" button with WhatsApp icon

**CTA:**
- "Tell us about your project"

#### [MODIFY] [contact.component.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/pages/contact/contact.component.scss)
- Form card with glassmorphism
- Contact info cards with icon accent
- WhatsApp button with green accent
- Responsive: stack on mobile

---

### Phase 9: Final Wiring & Polish

---

#### [MODIFY] [app.routes.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/app.routes.ts)
- Add portfolio route (currently missing)
- Update all route titles for SEO

#### [MODIFY] [app.component.ts](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/app.component.ts)
- Initialize AOS in `ngOnInit` or `afterNextRender`
- Inject ThemeService to initialize theme on app startup

#### [MODIFY] [app.component.html](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/app.component.html)
- Keep current structure (navbar + router-outlet + footer)

#### [MODIFY] [app.component.scss](file:///d:/Bhuvanesh/Projects/aurex-labs/src/app/app.component.scss)
- Smooth page transition styles
- App wrapper theme-aware background

---

## File Summary

| Phase | Files | Type |
|-------|-------|------|
| 1 - Design System | `index.html`, `styles.scss`, `material-theme.scss`, `_variables.scss` | MODIFY/NEW |
| 2 - Services | `theme.service.ts`, `scroll-animate.directive.ts` | NEW |
| 3 - Navbar & Footer | 6 files (ts, html, scss × 2) | MODIFY |
| 4 - Home/Hero | 3 files (ts, html, scss) | MODIFY |
| 5 - About | 3 files (ts, html, scss) | MODIFY |
| 6 - Services | 3 files (ts, html, scss) | MODIFY |
| 7 - Portfolio | 3 files (ts, html, scss) | MODIFY |
| 8 - Contact | 3 files (ts, html, scss) | MODIFY |
| 9 - Wiring | `app.routes.ts`, `app.component.*` | MODIFY |

**Total: ~25 files modified/created**

---

## Verification Plan

### Automated Tests
```bash
# Build verification (production mode)
npm run build

# Dev server for visual inspection
npm run start
```

### Manual Verification
- **Browser test**: Open `http://localhost:4100` and visually inspect all pages
- **Theme toggle**: Verify dark ↔ light mode works, persists across reload
- **Responsive**: Test at 375px (mobile), 768px (tablet), 1440px (desktop)
- **Navigation**: Test all routes, active states, mobile menu
- **Animations**: Verify fade-in on scroll, hover effects, button micro-interactions
- **Performance**: Check no jank, smooth animations, no console errors
- **Forms**: Verify contact form validation, WhatsApp link
