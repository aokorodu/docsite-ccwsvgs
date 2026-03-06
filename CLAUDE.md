# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive educational documentation site teaching SVG (Scalable Vector Graphics) development. Built with Vite and React Router, featuring 43 lessons covering fundamentals through advanced animations with GSAP and Matter.js physics.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # TypeScript check + production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

### Routing & Layouts
- **Entry point**: `src/main.tsx` renders the app with BrowserRouter
- **Route definitions**: `src/App.tsx` defines all routes using React Router
- **Layout structure**:
  ```
  RootLayout (src/layouts/RootLayout.tsx)
  ├── AppHeader - Site header with theme toggle
  └── ContentLayout (src/layouts/ContentLayout.tsx) - Wraps lesson routes
      ├── Navigation - Sidebar with hierarchical menu
      ├── Outlet - Lesson content renders here
      ├── Nextbutton - Sequential navigation
      └── TableOfContents - Right-side TOC built from heading elements
  ```

### Content System
- **Lesson pages**: TSX components in `src/pages/lessons/` (~44 lessons)
- **`src/pages/lessons/Placeholder.tsx`**: Use as a template when creating new lessons
- **Navigation config**: `src/config.js` defines:
  - `navConfig.pages`: Hierarchical menu structure with subnav support
  - `navConfig.links`: Flat sequential order for prev/next navigation

### Component Organization
Components in `src/components/`:
- **Chapter demos** (`*chapter/`): Interactive SVG examples embedded in lessons
- **Animation demos**: `animationcss/`, `animationcssII/`, `animationJS/`, `animationJSII/`, `smil/`, `smilII/`, `sprites/`
- **Physics demos**: `matterjs/` (physics simulations), `bganimation/` (homepage particles)
- **Bezier demos** (`*bezierdemo/`): Path visualization tools
- **UI components**: `blocks/` (code display), `navigation/`, `nextbutton/`, `appheader/`, `tableofcontents/`
- **Illustrations**: `illustrations/` - SVG illustration components used across lessons

### `Blocks` Component (heavily used in lessons)
`src/components/blocks/index.tsx` renders syntax-highlighted code snippets:
```tsx
<Blocks title="SVG sample" caption="optional caption" highlight="2,4-6" lang="xml">
  {`<svg>...</svg>`}
</Blocks>
```
- `lang`: `'xml'` | `'javascript'` | `'css'` (auto-detected if omitted: xml if `<` present, else javascript)
- `highlight`: comma-separated line numbers or ranges (e.g. `"1,3-5"`) to visually emphasize
- Children must be a template literal string

### Theme System
- `src/context/ThemeContext.tsx` provides `useTheme()` hook with `{ theme, toggleTheme }`
- Theme (`'light'` | `'dark'`) is persisted to `localStorage` and set as `data-theme` on `<html>`
- Components that need theme access import `useTheme` from `@/context`

### Styling
- Uses **SASS** for stylesheets (`.scss` files)
- Path alias `@/` maps to `src/` (configured in Vite)

### Deployment
- Deployed on Vercel with SPA rewrites configured in `vercel.json`
- Build output goes to `dist/` directory

### Key Dependencies
- **GSAP** (`gsap`, `@gsap/react`): Animation library for GreenSock lesson demos
- **Matter.js**: 2D physics engine for particle simulations
- **simplex-noise**: Perlin/simplex noise generation for noise-based animations
- **highlight.js**: Syntax highlighting for code examples
- **MUI**: UI components (icons, material design)
- **react-codepen-prefill-embed**: Embeds interactive CodePen examples in lessons

### Adding New Lessons
1. Create component in `src/pages/lessons/[LessonName].tsx`
2. Import and add route in `src/App.tsx` inside the ContentLayout route
3. Update `src/config.js`: add to both `pages` array (for menu) and `links` array (for sequential navigation)
