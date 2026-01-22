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
  ├── AppHeader - Site header
  └── ContentLayout (src/layouts/ContentLayout.tsx) - Wraps lesson routes
      ├── Navigation - Sidebar with hierarchical menu
      ├── Outlet - Lesson content renders here
      └── Nextbutton - Sequential navigation
  ```

### Content System
- **Lesson pages**: TSX components in `src/pages/lessons/` (43 lessons)
- **Navigation config**: `src/config.js` defines:
  - `navConfig.pages`: Hierarchical menu structure with subnav support
  - `navConfig.links`: Flat sequential order for prev/next navigation

### Component Organization
Components in `src/components/`:
- **Chapter demos** (`*chapter/`): Interactive SVG examples embedded in lessons
- **Animation libraries**: `gsap/` (GreenSock demos), `matterjs/` (physics simulations), `bganimation/` (homepage particles)
- **Bezier demos** (`*bezierdemo/`): Path visualization tools
- **UI components**: `blocks/` (code display with syntax highlighting), `navigation/`, `nextbutton/`, `appheader/`

### Styling
- Uses **SASS** for stylesheets (`.scss` files)

### Deployment
- Deployed on Vercel with SPA rewrites configured in `vercel.json`
- Build output goes to `dist/` directory

### Key Dependencies
- **GSAP** (`gsap`, `@gsap/react`): Animation library for GreenSock lesson demos
- **Matter.js**: 2D physics engine for particle simulations
- **highlight.js**: Syntax highlighting for code examples
- **MUI**: UI components (icons, material design)

### Adding New Lessons
1. Create component in `src/pages/lessons/[LessonName].tsx`
2. Import and add route in `src/App.tsx` inside the ContentLayout route
3. Update `src/config.js`: add to both `pages` array (for menu) and `links` array (for sequential navigation)
