# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Run production build
pnpm lint       # ESLint
```

> The project uses **pnpm** (see `pnpm-lock.yaml`). Prefer `pnpm` over `npm`/`yarn`.

## Architecture

Fynbloc is a **Next.js 16 marketing/landing page** for a crypto P2P trading platform targeting India. It is **frontend-only** — no API routes, no database, no backend.

### App structure

- `app/layout.tsx` — Root layout (fonts, metadata, theme provider, Vercel Analytics)
- `app/page.tsx` — Home page that assembles all landing page sections in order
- `app/compliance/page.tsx` — Standalone compliance detail page
- `app/globals.css` — Tailwind base styles and CSS variables

### Component hierarchy

The landing page (`app/page.tsx`) renders these section components in sequence:

```
Navbar → Hero → About → Solutions → Building → Compliance → Contact → Footer
```

**Key interactive components:**
- `components/early-access-modal.tsx` — Email waitlist modal (triggered from Hero and Contact)
- `components/swap-assets.tsx` — Interactive crypto swap preview widget (embedded in Hero)
- `components/navbar.tsx` — Fixed header with scroll-based active section tracking and mobile drawer

### UI component library

`components/ui/` contains ~59 Shadcn UI components (Radix UI primitives). When adding new UI elements, check here first before installing new packages. New Shadcn components can be added via:

```bash
pnpm dlx shadcn@latest add <component-name>
```

### Styling conventions

- **Tailwind CSS 4** with CSS variables defined in `app/globals.css`
- Primary accent: `#FF835D` (coral/orange)
- Dark background palette: `#050505` / `#080808` / `#0A0A0A` / `#0B0B0F`
- Utility: `lib/utils.ts` exports `cn()` for merging Tailwind classes — always use this instead of string concatenation
- Animations via **Framer Motion** (`framer-motion` package) — scroll-triggered reveals and modal transitions
- Path alias `@/*` maps to the project root

### Configuration notes

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- Theme switching (`next-themes`) is wired in `components/theme-provider.tsx` and mounted in the root layout
- `components.json` configures Shadcn (style: default, base color: neutral, CSS variables enabled)
