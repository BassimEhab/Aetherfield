# Aetherfield

> A sustainability intelligence platform — built to help organizations track emissions, model climate impact, and operationalize ESG goals with clarity and confidence.

This project is a **Figma Community practice build** — a pixel-faithful implementation of a modern SaaS landing site for a fictional climate-tech company called **Aetherfield**.

---

## 🌿 About the Project

Aetherfield is a fully responsive, multi-page Angular application styled with Tailwind CSS v4. It replicates a polished, production-quality marketing site for an ESG/sustainability platform, covering everything from a hero landing page to individual job listings and full journal articles.

The design emphasizes:
- Mixed typography pairings (serif + grotesque + mono)
- Smooth scroll-triggered animations via CSS keyframes
- Lazy-loaded components using Angular's `@defer` blocks
- Signal-based reactive state (Angular Signals)
- Server-Side Rendering (SSR) with Angular Universal

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Angular** | ^22.2.0 | Framework (standalone components) |
| **Angular SSR** | ^22.2.6 | Server-Side Rendering |
| **Tailwind CSS** | ^4.3.4 | Utility-first styling |
| **PrimeIcons** | ^8.0.2 | Icon library |
| **TypeScript** | ~6.0.2 | Type safety |
| **Express** | ^5.1.0 | SSR server |
| **Vitest** | ^5.0.0 | Unit testing |
| **Prettier** | ^3.8.1 | Code formatting |

### Custom Fonts
- **Radio Canada Big** — primary headings (grotesque)
- **Source Serif 4** — body copy and secondary headings
- **Geist Mono** — metadata, labels, and UI elements

---

## 📄 Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/product` | `Home` | Hero section, platform features, case study, journal preview, testimonial |
| `/journal` | `Journal` | Full grid of sustainability articles with cover image |
| `/articles/:id` | `Article` | Individual article page with rich body sections |
| `/about` | `About` | Mission, company values, founder story, and team directory |
| `/careers` | `Careers` | Job listings board with role type and location |
| `/careers/:id` | `Career` | Individual job description with detailed JD sections |

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/           # Landing / product page
│   │   ├── journal/        # Articles listing page
│   │   ├── article/        # Single article detail page
│   │   ├── about/          # About page (mission, team, founder)
│   │   ├── careers/        # Job board listing page
│   │   ├── career/         # Single job detail page
│   │   ├── navbar/         # Responsive navigation with mobile drawer
│   │   ├── footer/         # Site footer
│   │   ├── button/         # Reusable button component
│   │   └── call-to-action/ # Reusable CTA banner component
│   ├── interfaces/
│   │   ├── iarticles.ts    # Article data model
│   │   ├── icareer.ts      # Career/job data model
│   │   └── iteam.ts        # Team member data model
│   ├── services/
│   │   ├── articleService.ts   # Articles data (Angular Signals)
│   │   ├── career-service.ts   # Careers data (Angular Signals)
│   │   └── teamService.ts      # Team member data (Angular Signals)
│   ├── app.routes.ts       # Lazy-loaded route definitions
│   ├── app.config.ts       # Client app configuration
│   └── app.config.server.ts # SSR app configuration
├── styles.css              # Global Tailwind theme + CSS animations
└── index.html
```

---

## ✨ Key Features

### Animations
Custom CSS keyframe animations triggered on page load and on viewport entry via Angular `@defer`:
- **`slideUp`** — elements fade in while sliding up (`0.8s` / `1.2s` variants)
- **`scaleUp`** — hero dashboard image scales in from zero
- **`rotation`** — decorative SVGs animate into place with a rotation arc

### Responsive Navbar
The navbar supports both desktop and mobile layouts:
- Desktop: transparent with blur backdrop, inline links
- Mobile: collapsible drawer with slide animation, toggled via PrimeIcons ✕/＋

### Angular Signals
All data (articles, careers, team members) is managed via Angular's `signal()` API, exposed as read-only computed signals via services — no NgRx or external state library required.

### Lazy Loading with `@defer`
Heavy above-the-fold content and below-the-fold sections use Angular's `@defer (on viewport)` directive for efficient rendering and Core Web Vitals optimization.

### Server-Side Rendering
Full SSR support via `@angular/ssr` and an Express server (`dist/Aetherfield/server/server.mjs`).

---

## 🛠 Getting Started

### Prerequisites
- Node.js ≥ 20
- npm ≥ 11 (or compatible package manager)

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app auto-reloads on file changes.

### Production Build

```bash
npm run build
```

Output is placed in `dist/Aetherfield/`.

### Run SSR Server (after build)

```bash
npm run serve:ssr:Aetherfield
# Equivalent to: node dist/Aetherfield/server/server.mjs
```

### Run Tests

```bash
npm test
```

---

## 🎨 Design Notes

The color palette is defined as a Tailwind v4 `@theme` block in [`styles.css`](src/styles.css):

| Token | Value | Usage |
|---|---|---|
| `light-blue` | `oklch(85.2% 0.077 249.3)` | Hero and careers backgrounds |
| `light-beige` | `oklch(97% 0.03 83.6)` | Gradient endpoints |
| `bright-yellow` | `oklch(94.9% 0.183 106.1)` | Accent |
| `oil-green` | `oklch(49% 0.1 108.1)` | Secondary accent |

---

## 📌 Notes

- This is a **practice/learning project** built from a Figma Community design file.
- All content (company name, team members, articles, job listings) is **fictional and for demonstration purposes only**.
- The app uses Angular standalone components throughout — no `NgModule` declarations.

---

*Built with ❤️ as part of a frontend learning journey.*
