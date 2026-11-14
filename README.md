<div align="center">

# ✦ Folio Craft

### Build a portfolio that feels like you.

A modern portfolio maker foundation built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

</div>

---

## 1. What is Folio Craft?

Folio Craft is a portfolio-builder product. The goal is to let people create an account, add profile details and projects, choose a design, preview the result, and publish a shareable portfolio.

This repository currently contains the **application foundation**: Next.js configuration, a feature-oriented folder structure, shared utilities, portfolio domain types and validation, route-level UI states, and a starter landing page.

**Not implemented yet:** authentication, database persistence, portfolio editor, template gallery, image uploads, and public portfolio publishing. These are planned product phases, not existing features.

## 2. Technology stack

| Area | Technology | Responsibility |
|---|---|---|
| Framework | Next.js 16 App Router | Routing, rendering, server capabilities |
| Language | TypeScript | Type safety |
| UI | React | Component-based interfaces |
| Styling | Tailwind CSS v4 | Responsive design |
| Icons | Lucide React | Interface icons |
| Validation | Zod | Runtime input validation |
| Utilities | clsx + tailwind-merge | Conditional class composition |
| Hosting | Vercel | Deployment and preview environments |

The project uses a stable Next.js release, not a canary build. Check the official documentation before upgrading framework major versions.

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

Open [http://localhost:3000](http://localhost:3000). Edit `src/app/page.tsx`, save, and Next.js will refresh the page.

### Step 5 — Run quality checks

Run these before pushing changes:

```bash
npm run lint
npm run typecheck
npm run build
```

All checks should pass before a production deployment.

## 4. Project architecture

Folio Craft uses a **feature-oriented architecture**. Routes handle composition, shared components are reusable, and portfolio-specific logic stays inside its feature.

```text
folio-craft/
├── public/                              # Static assets
├── src/
│   ├── app/                             # Next.js App Router
│   │   ├── layout.tsx                   # Root layout and metadata
│   │   ├── page.tsx                     # Home route
│   │   ├── globals.css                  # Global styles and Tailwind
│   │   ├── loading.tsx                  # Loading UI
│   │   ├── error.tsx                    # Route error boundary
│   │   └── not-found.tsx                # 404 page
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
│   │       ├── types/                   # Domain contracts
│   │       └── utils/                   # Feature-only helpers
│   ├── lib/
│   │   ├── auth/                        # Authentication helpers (future)
│   │   ├── db/                          # Database access (future)
│   │   ├── security/                    # Security helpers (future)
│   │   └── utils/                       # Framework-independent utilities
│   └── config/                          # Application configuration
├── .env.example
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
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
| `src/app/page.tsx` | `/` |
| `src/app/dashboard/page.tsx` | `/dashboard` |
| `src/app/dashboard/settings/page.tsx` | `/dashboard/settings` |
| `src/app/portfolio/[slug]/page.tsx` | `/portfolio/:slug` |

A folder does not become a page until it contains a route file such as `page.tsx`.

### Server Components and Client Components

**Server Components are the default.** Use them for pages, data fetching, and UI that does not need browser interaction.

Add `"use client"` only when a component needs React state, event handlers, effects, or browser APIs.

```tsx
// Server Component — no directive needed
export default async function Page() {
  return <main>Portfolio dashboard</main>;
}
```

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((value) => value + 1)}>{count}</button>;
}
```

Keep client components small. Do not convert the entire application into a Client Component because one small control needs interaction.

## 6. How the application layers communicate

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

## 7. Important files already included

| File | Responsibility |
|---|---|
| `src/app/layout.tsx` | Root layout, SEO metadata, viewport |
| `src/app/page.tsx` | Responsive starter landing page |
| `src/app/globals.css` | Tailwind v4 and global defaults |
| `src/app/error.tsx` | Route error boundary |
| `src/app/loading.tsx` | Loading state |
| `src/app/not-found.tsx` | 404 state |
| `src/features/portfolio/types/portfolio.ts` | Portfolio domain contracts |
| `src/features/portfolio/schemas/portfolio.schema.ts` | Runtime input validation |
| `src/lib/utils/cn.ts` | Merge conditional Tailwind classes |
| `src/config/site.ts` | Central application metadata |

## 8. Product roadmap

Build one complete user journey at a time. Avoid integrating every service before the core experience is designed.

### Phase 1 — Foundation
- [x] Next.js App Router + TypeScript
- [x] Tailwind CSS and shared utility setup
- [x] Feature-oriented architecture
- [x] Portfolio domain types and validation starter
- [x] Landing page and route-level UI states
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

## 9. Security and data principles

1. **Validate at boundaries.** Validate form submissions, route parameters, and external payloads with Zod.
2. **Authorize on the server.** A user may only edit portfolios they own.
3. **Keep secrets private.** Never expose private credentials through `NEXT_PUBLIC_*`.
4. **Use a repository layer.** Keep database queries out of React components.
5. **Do not trust client IDs.** Derive the current user from a verified session.
6. **Treat user content as untrusted.** Sanitize rich content and validate external URLs.
7. **Add rate limits** to authentication, uploads, and write endpoints before public launch.
8. **Use least privilege.** Give database and storage credentials only the permissions they require.

Do not add authentication or a database just to make the architecture look advanced. Introduce each system when the product phase needs it.

## 10. Deploy to Vercel

1. Push your project to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Choose **Add New → Project**.
4. Import `duttaanubhab777-code/folio-craft`.
5. Keep the detected Next.js framework preset.
6. Add environment variables in Project Settings.
7. Deploy.

For future updates, push commits to the connected branch. Vercel can create preview deployments for branches and pull requests, and production deployments from the configured production branch.

**Never commit secrets to GitHub.** Configure production values in Vercel's Environment Variables settings.

## 11. Useful commands

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local development |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Fix supported lint issues |
| `npm run typecheck` | Run TypeScript checks |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server locally |

## 12. Development conventions

- Use TypeScript; avoid `any`.
- Prefer named exports for reusable components and utilities.
- Keep route components focused on composition.
- Keep business rules out of UI components.
- Use Server Components by default.
- Use semantic HTML and accessible labels.
- Give components one clear responsibility.
- Handle loading, empty, success, and error states.
- Do not commit generated folders, local environment files, or secrets.
- Make small commits with descriptive messages.

## 13. Learning path for your first Next.js project

Learn these concepts in order while building Folio Craft:

1. React components, props, state, and events.
2. App Router: pages, layouts, and navigation.
3. Server Components vs Client Components.
4. TypeScript interfaces, types, and generics.
5. Forms and Zod validation.
6. Server Actions and Route Handlers.
7. Authentication and authorization.
8. Database fundamentals and data-access patterns.
9. Deployment, environment variables, and production debugging.

### Official learning resources

- [Next.js Learn](https://nextjs.org/learn)
- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [Next.js installation guide](https://nextjs.org/docs/app/getting-started/installation)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)

---

<div align="center">

**Folio Craft** · A portfolio should tell your story, not just list your work.

Built with care using Next.js.

</div>
