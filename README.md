<div align="center">

# ✦ Folio Craft

### Build a portfolio that feels like you.

A modern portfolio maker built with **Next.js App Router**, **JavaScript**, and **plain CSS**.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?logo=next.js)](https://nextjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/Styling-Plain_CSS-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

</div>

---

## 1. What is Folio Craft?

Folio Craft is a portfolio-builder product. The goal is to let people create an account, add profile details and projects, choose a design, preview the result, and publish a shareable portfolio.

This repository currently contains the **application foundation**: Next.js configuration, a feature-oriented folder structure, shared utilities, portfolio validation, route-level UI states, and a starter landing page.

**Not implemented yet:** authentication, database persistence, portfolio editor, template gallery, image uploads, and public portfolio publishing. These are planned product phases, not existing features.

## 2. Technology stack

| Area | Technology | Responsibility |
|---|---|---|
| Framework | Next.js App Router | Routing, rendering, server capabilities |
| Language | JavaScript (ES modules) | Application logic |
| UI | React | Component-based interfaces |
| Styling | Plain CSS | Responsive styling and design system |
| Icons | Lucide React | Interface icons |
| Validation | Zod | Runtime input validation |
| Hosting | Vercel | Deployment and preview environments |

**Project decision:** This repository intentionally does not use TypeScript or Tailwind CSS. Components use JavaScript files (`.js` / `.jsx`) and styling lives in regular CSS files.

## 3. First-time setup

### Prerequisites

Install:
- **Node.js 20.9 or newer** (an active LTS release is recommended).
- **Git**.
- **VS Code** or another code editor.
- A GitHub account.
- A Vercel account when you are ready to deploy.

Verify your installation:

```bash
node -v
npm -v
git --version
```

### Step 1 — Clone the repository

```bash
git clone https://github.com/duttaanubhab777-code/folio-craft.git
cd folio-craft
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Create your local environment file

**Windows PowerShell**
```powershell
Copy-Item .env.example .env.local
```

**macOS / Linux**
```bash
cp .env.example .env.local
```

The starter only needs `NEXT_PUBLIC_APP_URL`. Keep private credentials in server-only environment variables. Never commit `.env.local`, API keys, database passwords, or authentication secrets.

### Step 4 — Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `src/app/page.js`, save, and Next.js will refresh the page.

### Step 5 — Run quality checks

```bash
npm run lint
npm run build
```

Both commands should pass before a production deployment.

## 4. Project architecture

Folio Craft uses a **feature-oriented architecture**. Routes handle composition, shared components are reusable, and portfolio-specific logic stays inside its feature.

```text
folio-craft/
├── public/                              # Static assets
├── src/
│   ├── app/                             # Next.js App Router
│   │   ├── layout.js                    # Root layout and metadata
│   │   ├── page.js                      # Home route
│   │   ├── globals.css                  # Global styles and design tokens
│   │   ├── loading.js                   # Loading UI
│   │   ├── error.js                     # Route error boundary
│   │   └── not-found.js                 # 404 page
│   ├── components/
│   │   ├── ui/                          # Reusable design primitives
│   │   ├── layout/                      # Header, footer, navigation
│   │   └── shared/                      # Shared product components
│   ├── features/
│   │   └── portfolio/
│   │       ├── components/              # Portfolio-specific UI
│   │       ├── hooks/                   # Feature client hooks
│   │       ├── schemas/                 # Zod validation
│   │       ├── services/                # Business use cases
│   │       ├── types/                   # JSDoc domain contracts
│   │       └── utils/                   # Feature-only helpers
│   ├── lib/
│   │   ├── auth/                        # Authentication helpers (future)
│   │   ├── db/                          # Database access (future)
│   │   ├── security/                    # Security helpers (future)
│   │   └── utils/                       # Shared utilities
│   └── config/                          # Application configuration
├── .env.example
├── eslint.config.mjs
├── next.config.js
├── package.json
└── README.md
```

Some directories above are **planned destinations**. Create them when the first real file is needed; avoid empty placeholder files just to make the tree look bigger.

### Where should new code go?

| You are building… | Put it in… |
|---|---|
| A new URL/page | `src/app/` |
| A reusable button, input, or dialog | `src/components/ui/` |
| Header, footer, or navigation | `src/components/layout/` |
| Portfolio editor or templates | `src/features/portfolio/` |
| Portfolio validation | `src/features/portfolio/schemas/` |
| Database connection | `src/lib/db/` |
| Authentication integration | `src/lib/auth/` |
| Shared helper | `src/lib/utils/` |
| App-wide configuration | `src/config/` |

## 5. Understand the Next.js App Router

Next.js uses folders and special files inside `src/app` to define URLs.

| File path | URL |
|---|---|
| `src/app/page.js` | `/` |
| `src/app/dashboard/page.js` | `/dashboard` |
| `src/app/dashboard/settings/page.js` | `/dashboard/settings` |
| `src/app/portfolio/[slug]/page.js` | `/portfolio/:slug` |

A folder does not become a page until it contains a route file such as `page.js`.

### Server Components and Client Components

**Server Components are the default.** Use them for pages, data fetching, and UI that does not need browser interaction.

Add the `"use client"` directive only when a component needs React state, event handlers, effects, or browser APIs.

```jsx
// Server Component — no directive needed
export default async function Page() {
  return <main>Portfolio dashboard</main>;
}
```

```jsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((value) => value + 1)}>{count}</button>;
}
```

Keep client components small. Do not convert the entire application into a Client Component because one small control needs interaction.

### JavaScript without TypeScript

Use modern JavaScript and ES modules. For complex domain objects, add JSDoc comments so editors can still provide useful autocomplete and inline documentation without introducing a TypeScript build.

## 6. Styling with plain CSS

There is no Tailwind dependency or utility-class build step. Keep styles in CSS files:

- Global tokens and resets: `src/app/globals.css`
- Feature-specific styles: colocated files such as `portfolio-editor.css`
- Reusable component styles: component-level CSS files imported by the component or its route.

Prefer CSS variables for shared colors, spacing, radii, and typography. Use responsive media queries and respect `prefers-reduced-motion`.

## 7. How application layers communicate

A typical portfolio edit operation should follow this direction:

```text
Route / Page
    ↓
Feature UI
    ↓
Server Action or Route Handler
    ↓
Authentication + authorization
    ↓
Zod input validation
    ↓
Feature service (business rules)
    ↓
Repository / data-access layer
    ↓
Database
```

The browser is never the authority for access control. Verify portfolio ownership on the server for every private read or write operation.

## 8. Important files already included

| File | Responsibility |
|---|---|
| `src/app/layout.js` | Root layout, SEO metadata, viewport |
| `src/app/page.js` | Responsive starter landing page |
| `src/app/globals.css` | Plain CSS design tokens and responsive styles |
| `src/app/error.js` | Route error boundary |
| `src/app/loading.js` | Loading state |
| `src/app/not-found.js` | 404 state |
| `src/features/portfolio/types/portfolio.js` | JSDoc domain contracts |
| `src/features/portfolio/schemas/portfolio.schema.js` | Runtime input validation |
| `src/lib/utils/cn.js` | Small class-name helper |
| `src/config/site.js` | Central application metadata |

## 9. Product roadmap

### Phase 1 — Foundation
- [x] Next.js App Router with JavaScript
- [x] Plain CSS foundation and responsive landing page
- [x] Feature-oriented architecture
- [x] Portfolio domain documentation and Zod validation
- [x] Loading, error, and 404 route states
- [ ] Shared design system (buttons, inputs, dialogs, toasts)
- [ ] Responsive application shell

### Phase 2 — Portfolio creation
- [ ] Authentication and user sessions
- [ ] Dashboard and create-portfolio flow
- [ ] Profile, skills, experience, education, and project editor
- [ ] Live preview
- [ ] Autosave and draft/published states
- [ ] Multiple portfolio templates

### Phase 3 — Data and publishing
- [ ] Choose and configure a database
- [ ] Schema migrations and repository layer
- [ ] Server-side ownership checks and validation
- [ ] Public portfolio route with unique slug
- [ ] Dynamic metadata and social sharing previews
- [ ] Image upload and storage strategy

### Phase 4 — Production readiness
- [ ] Unit and integration tests
- [ ] End-to-end tests for the main user journey
- [ ] Rate limiting and abuse protection
- [ ] Error monitoring and structured logs
- [ ] Accessibility and performance review
- [ ] CI checks and production deployment

## 10. Security and data principles

1. **Validate at boundaries.** Validate form submissions, route parameters, and external payloads with Zod.
2. **Authorize on the server.** A user may only edit portfolios they own.
3. **Keep secrets private.** Never expose private credentials through `NEXT_PUBLIC_*`.
4. **Use a repository layer.** Keep database queries out of React components.
5. **Do not trust client IDs.** Derive the current user from a verified session.
6. **Treat user content as untrusted.** Sanitize rich content and validate external URLs.
7. **Add rate limits** to authentication, uploads, and write endpoints before public launch.
8. **Use least privilege.** Give database and storage credentials only the permissions they require.

## 11. Deploy to Vercel

1. Push your project to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Choose **Add New → Project**.
4. Import `duttaanubhab777-code/folio-craft`.
5. Keep the detected Next.js framework preset.
6. Add environment variables in Project Settings.
7. Deploy.

For future updates, push commits to the connected branch. Vercel can create preview deployments for branches and pull requests, and production deployments from the configured production branch.

**Never commit secrets to GitHub.** Configure production values in Vercel's Environment Variables settings.

## 12. Useful commands

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local development |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Fix supported lint issues |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server locally |

## 13. Learning path for your first Next.js project

Learn these concepts in order while building Folio Craft:

1. JavaScript fundamentals, ES modules, and async/await.
2. React components, props, state, and events.
3. App Router: pages, layouts, and navigation.
4. Server Components vs Client Components.
5. Forms and Zod validation.
6. Server Actions and Route Handlers.
7. Authentication and authorization.
8. Database fundamentals and data-access patterns.
9. Deployment, environment variables, and production debugging.

### Official learning resources

- [Next.js Learn](https://nextjs.org/learn)
- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [React documentation](https://react.dev/learn)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

<div align="center">

**Folio Craft** · A portfolio should tell your story, not just list your work.

Built with care using Next.js, JavaScript, and CSS.

</div>
